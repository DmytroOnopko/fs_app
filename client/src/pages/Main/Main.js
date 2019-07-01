import React from 'react';
import './main.scss'
import SideBar from "../../components/SideBar";
import Post from "../../components/Post";

const main = () => {
    return (
        <section className="main">
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <Post/>
                    </div>
                    <div className="col-12 col-md-4">
                        <SideBar/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default main;