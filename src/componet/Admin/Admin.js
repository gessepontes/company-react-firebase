import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { auth } from './../../firebase-config'
import AdminMenu from './AdminMenu'
import AdminPortfolio from './portfolio/AdminPortfolio'
import ListPortfolio from './portfolio/ListPortfolio';



class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beLoginIn: true,
            beAuth: false,
            user: null
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({
                beLoginIn: false,
                beAuth: !!user,
                user
            })
        })
    }

    render() {
        if (this.state.beLoginIn) {
            return (
                <div className='container'>
                    <h2><i className='material-icons'>refresh</i>Aguarde...</h2>
                </div>
            )
        }

        if (!this.state.beAuth) {
            return <Redirect to='/login' />
        }


        return (
            <div className='container'>
                <br />                
                <br />
                <h2>Administrador</h2>

                <Route path='/' component={AdminMenu} />
                <Route path={`${this.props.match.url}/portfolio`} component={AdminPortfolio} />
                <Route path={`${this.props.match.url}/list-portfolio`} component={ListPortfolio} />
            </div>
        )
    }

}

export default Admin;