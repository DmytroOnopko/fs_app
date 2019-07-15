import React from 'react';
import './Main.scss'
import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar';
import Post from '../../components/Post/Post';

const main = () => {
    return (
        <>
            <Header/>
            <section className="main pt-5">
                <div className="container">
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
        </>
    );
};

export default main;