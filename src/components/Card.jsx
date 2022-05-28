import React from 'react'

const Card = ({userRandom,colorRandom,clickButton}) => {

    const colorBtn = {
        backgroundColor: colorRandom
    }
    const color = {
        color: colorRandom
    }

  return (
    <section style={color} className='card'>
        <div className='card__icon'>
            <i class='bx bxs-quote-left'></i>
        </div>
        <p className='card__quote'>{userRandom.quote}</p>
        <p className='card__author'><em>{userRandom.author}</em></p>
        <button onClick={clickButton} style={colorBtn} className='card__btn'>&#62; </button>
    </section>
  )
}

export default Card