import React from 'react'
import './button.css'

function button({title , link}) {
    return (
       <button className='button'><a href={link}>{title}</a></button>
    )
}

export default button
