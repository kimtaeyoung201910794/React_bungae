import React from "react";

export default function Year({d_year,d_month,d_cmt}) {
    return(
        <>
        <div className="intro_main">
            <div className="intro_year">
                {d_year}
            </div>
            <div className="intro_month">
                <h4>{d_month}</h4>
                <span>{d_cmt}</span>
            </div>
        </div>
        </>
    )
}