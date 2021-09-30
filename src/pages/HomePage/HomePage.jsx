import React from 'react';
import Header from '../../components/Header/Header'
import PostItMenu from '../../components/PostItMenu/PostItMenu'
import './HomePage.css'



export default function HomePage(){
    return(
        <>
            <div className="home-page">
                <Header />
                <br />
                <div className="menu">
                    <PostItMenu />
                    <PostItMenu />
                    <PostItMenu />
                    <PostItMenu />
                </div>
            </div>
        </>
    )
}