import React from "react";
import List from "../component/List";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { dummy } from '../ListDummy';

export default function Brand(){
    return(
        <>
        <Header />
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
