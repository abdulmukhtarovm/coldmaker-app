import React from 'react'
import { getText } from '../locales'

const Question = () => {
    return (
        <div className='Question'>
            <div className="text">
            <h6>{getText("savolP")}</h6>
            </div>
            <div className="myBtn">
                <a href="tel:+998999992727">{getText("savolT")}</a>
            </div>
        </div>
    )
}

export default Question