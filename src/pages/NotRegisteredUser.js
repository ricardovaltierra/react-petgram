import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <Fragment>
            <UserForm title='Registrarse' onSubmit={activateAuth} />
            <UserForm title='Iniciar Sesión' onSubmit={activateAuth} />
          </Fragment>
        )
      }
    }
  </Context.Consumer>
)
