import React from "react";

const Name = ({number, name, transliteration, meaning,}) => {
    return (

        <div className="col-sm-2 my-3">
            <ul className="list-group">
                <li className="list-group-item bg2 text-white text-center" aria-current="true">
                    <h4>{number} - {name}</h4>
                </li>
                <li className="list-group-item fw-bolder text-center">{transliteration.toUpperCase()}</li>
                <li className="list-group-item fw-bold text-center">{meaning}</li>
            </ul>
        </div>

    )
}

export default Name