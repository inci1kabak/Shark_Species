import React from 'react'

function Shark({ shark }) {
    const { id, title, description, image } = shark;
    return (
        <div className='shark'>
            <div className='shark'>
                <img className='shark-image' src={image} width={350} height={200} />
                <h3 className='shark-title'>{title}</h3>
                <h5>{description}</h5>

            </div>


        </div>
    )
}

export default Shark





