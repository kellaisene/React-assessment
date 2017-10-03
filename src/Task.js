import React, {Component} from 'react';

export default function Task(props) {

    return (
        <ul>
            <li>
                <p style ={{textDecoration: props.completed ? 'line-through': 'none'}}>{props.item}</p>
                <button disabled={props.completed} onClick={()=>props.handleComplete(props.id)}>COMPLETED</button>
                <button onClick={()=>props.delete(props.id)}>DELETE</button>
            </li>
        </ul>
    )
}