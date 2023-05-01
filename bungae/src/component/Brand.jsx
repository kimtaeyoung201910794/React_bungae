import React from "react";
import List from "./List";
import Header from "./Header";
import Footer from "./Footer";
import { dummy } from './../ListDummy';

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
