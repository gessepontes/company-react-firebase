import React from 'react'

const ItemPortfolio = props => {
    return (
            <div className='col-md-4'>
                <div className='card mb-4 shadow-sm'>
                    <img className='card-img-top' src={props.content.image} alt={props.content.title} />
                    <div className='card-body'>
                        <p className='card-text'>{props.content.description}</p>
                    </div>
                </div>
            </div>
    )
}

export default ItemPortfolio;