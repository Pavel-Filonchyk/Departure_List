import React from 'react'
import './Result.css'

function Result({item}){
    console.log(item)
    return(
        <div className="result d-flex justify-content-center">
            <div className="wrapper_card d-flex justify-content-center"> 
                <div className="wrapper_content d-flex flex-column">
                    <div className="content">date: &nbsp; {item.date}</div>
                    <div className="content">city: &nbsp;{item.city}</div>
                    <div className="content">gate: &nbsp;{item.gate}</div>
                    <div className="content">distance: &nbsp;{item.distance}</div>
                    <button>buy a ticket</button>
                </div>
            </div>
        </div>
    )
} 
export default Result