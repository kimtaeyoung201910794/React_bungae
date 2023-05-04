import React from "react";
import Header from "../component/Header";
import { dummy } from "../YearDummy";
import Year from "../component/Year";
export default function About() {
    return (
        <>
        <Header />
        <div id="main_video">
            <video muted autoplay loop>
                <source className="vid" src={"https://static.bunjang.co.kr/official/Brand_15_720P.mp4"} type="video/mp4" />
            </video>
        </div>
        <div className="yaer_list">
            <div className="year_container">
                {
                    dummy.result.map((item) =>{
                        return(
                        <Year
                            d_year={item.d_year}
                            d_month={item.d_month}
                            d_cmt={item.d_cmt}
                        />
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}