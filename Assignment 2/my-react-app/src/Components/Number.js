import React from 'react'
import './Number.css'

let Number = (props) => {
    return(
        
        <div class = 'Number' style={{background: props.bgColor}}>
            <center>
            <div class = 'num'>{props.num}</div>
            <div class = 'Buttons'>
                <button class="btn" onClick = {() => {props.increment()}}><i class="fa fa-plus"></i></button>
                <button class="btn" onClick = {() => {props.refresh()}}><i class="fa fa-refresh"></i></button>
                <button class="btn" onClick = {() => {props.decrement()}}><i class="fa fa-minus"></i></button>
            </div>
            </center>
        </div>
    )
}

export default Number;