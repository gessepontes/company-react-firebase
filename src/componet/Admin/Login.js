import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { auth } from './../../firebase-config'
import './login.css'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beAuth: false,
            beLoginIn: false,
            error: false
        }

        this.email = null
        this.password = null

        this.authUser = this.authUser.bind(this)
    }

    authUser() {
        this.setState({
            beLoginIn: true,
            error: false
        })

        auth.signInWithEmailAndPassword(this.email.value, this.password.value)
            .then(user => {
                this.setState({
                    beAuth: true
                })
            })
            .catch(err => {
                this.setState({
                    beAuth: false,
                    beLoginIn: false,
                    error: true
                })
            })
    }

    render() {
        if (this.state.beAuth) {
            return <Redirect to='/admin' />
        }


        return (
            <form className='form-signin'>
                <h1 className='h3 mb-3 font-weight-normal'>Login</h1>
                <label htmlFor='inputEmail' className='sr-only'>Email address</label>
                <input type='email' name='email' ref={ref => this.email = ref} className='form-control' placeholder='Endereço de Email' required autoFocus />
                <label htmlFor='inputPassword' className='sr-only'>Password</label>
                <input type='password' name='password' ref={ref => this.password = ref} className='form-control' placeholder='Senha' required />
                <button className='btn btn-lg btn-primary btn-block' type='button' disabled={this.state.beLoginIn} onClick={this.authUser}>Entrar</button>
                <br />
                {this.state.error && <div id='emailHelp' className='alert alert-danger'>Usuário ou senha incorretos.</div>}
            </form>
        )
    }
}

export default Login