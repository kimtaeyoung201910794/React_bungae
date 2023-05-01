import React from "react";

export default function List({imgSrc, title, plusComment, date}) {
    return (
        <div className="list-container">
            <img src={imgSrc} alt="리스트 사진"/>
            <div className="list-info">
                <h4>{title}</h4>
                <span>{plusComment}</span>
            </div>
        </div>
    )
}