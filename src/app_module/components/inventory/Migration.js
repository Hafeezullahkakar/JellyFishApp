
import React from 'react'
import Shop from '../shopComponent/Shop'
import shopbg from "../../app_assets//shopCover.png";
import './inventory.css'

function Migration() {
    return (
        <div className='migration'>
           <Shop title="Migration" imoji="🧳" img={shopbg} />
        </div>
    )
}

export default Migration
