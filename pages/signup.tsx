import React from 'react'
import AuthForm from '../components/auth-form'

const Signup = () => {
  return (
    <AuthForm mode='signup'/>
  )
}

Signup.authPage = true;

export default Signup