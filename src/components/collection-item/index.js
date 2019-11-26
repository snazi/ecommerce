import React from 'react'
import './module.style.scss'

const CollectionItem = ({ id, price, name, imageUrl }) => {
    return (
        <div className='collection-item'>
            <div 
            className='image'
            //string interpolated the imageurl
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem
