import React from 'react';
import './Home.css';
import Newsfeed from "./Newsfeed";
import Time from './Time';
import UserInfo from './UserInfo';

function Home() { 
    return (
        <div className='container p-5 gap-5'>
            <div className="row">
                <div className="col-5 mt-3">
                    <UserInfo />
                    <Time />
                </div>
                <div className="col-7">
                    <Newsfeed />
                </div>
            </div>
        </div>
    )
}

export default Home;