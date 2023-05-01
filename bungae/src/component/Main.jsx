import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
import { dummy } from "../ListDummy";

export default function Main() {
    return (
        <>
        <Header />
        <div id="main_video">
            <video muted autoplay loop>
                <source className="vid" src={"https://static.bunjang.co.kr/official/Brand_15_720P.mp4"} type="video/mp4" />
            </video>
        </div>

        <div className='container'>
            <div className='app-container'>
            {
                dummy.results.map((item) => {
                return (
                    <List 
                    imgSrc={item.imgSrc}
                    title={item.title}
                    plusComment={item.plusComment}
                    date={item.date}
                    />
                )
                })
            }
            </div>
        </div>
        <Footer />
        </>
    )
}