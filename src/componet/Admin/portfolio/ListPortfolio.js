import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import config from './../../../firebase-config'

class ListPortfolio extends Component {

    constructor(props) {
        super(props)

        this.state = {
            portfolio: {
            }
        }
    }

    componentDidMount() {
        config.syncState('portfolio', {
            context: this,
            state: 'portfolio',
            asArray: false
        })
    }

    deletePortfolio(key) {
        if (window.confirm('Você deseja excluir este registro?')){
            config.remove('portfolio/' + key, function (error) {
                alert(error ? "Erro ao realizar a operação." : "Operação realizada com sucesso!");
            })
        }
    }

    render() {
        return (
            <div>
                <br />
                <br />
                <h5>Portfolio</h5>
                <br />
                <Link to='/admin/portfolio'>Novo item</Link>
                <br />
                <br />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Titulo</th>
                            <th scope="col" style={{ width: '5px' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(this.state.portfolio)
                                .map(key => {
                                    return (
                                        <tr key={key}>
                                            <th scope="col">{this.state.portfolio[key].title}</th>
                                            <th scope="col"><i className='material-icons' onClick={() => this.deletePortfolio(key)}>delete</i></th>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListPortfolio