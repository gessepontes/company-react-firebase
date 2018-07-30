import React, { Component } from 'react'

import config from './../firebase-config'
import ItemPortfolio from './ItemPortfolio'
import Home from './Home'

class Portfolio extends Component {
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

    render() {
        return (
            <div>
                <Home />

                <div className='album py-5 bg-light'>
                    <div className='container'>
                        <div className='row'>
                            {
                                Object.keys(this.state.portfolio)
                                    .map(key => {
                                        return <ItemPortfolio key={key} content={this.state.portfolio[key]} />
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Portfolio;