import React, { useReducer, useContext } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'
import AlertContext from '../alert/alertContext'
import PropTypes from 'prop-types'

import {
  CLOSE_SESION,
  SIGNIN_ERROR,
  SIGNIN_SUCCESS
} from '../../types'
import { authService } from '../../services/authService'
import tokenAuth from '../../config/token'

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token')
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const { showAlert } = useContext(AlertContext)

  const signIn = async data => {
    try {
      const response = await authService.login(data.email, data.password)
      const token = response.data.token
      tokenAuth(token)

      dispatch({
        type: SIGNIN_SUCCESS,
        payload: {
          token: token
        }
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: SIGNIN_ERROR
      })
      showAlert('Signin error', 'error')
    }
  }

  const signOut = () => {
    tokenAuth(null)
    dispatch({
      type: CLOSE_SESION
    })
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        signIn,
        signOut
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

AuthState.propTypes = {
  children: PropTypes.array.isRequired
}

export default AuthState
