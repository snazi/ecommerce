import React from 'react'
import './module.style.scss'

const PreviewCollection = ({ title, items, }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.map((item) => (
                        <div key={item.id}>{item.name}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection
