import React from "react";


function Card(props){
    return(
        <div className="container ">
            <img src={props.image}/>
            <div>
                <p><span className="name">{props.name}</span>{props.text}</p>
                <p className="time">{props.time}</p>
            </div>
        </div>
    )
}

export default Card;