import React from 'react';
import './ProfileHeader.scss';

const ProfileHeader = (props) => {
    return (
        <div className="container pt-5">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-5">
                        <img
                            src={props.avatar}
                            className="card-img__profile" alt="avatar"/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body p-0">
                            <div className="mb-4">
                                <h4 className="card-title__profile w-10">{props.login}</h4>
                                <button className="card-btn ml-5">Відстежується</button>
                            </div>
                            <ul className="card-info d-flex">
                                <li className="mr-5"><span
                                    className="font-weight-bold">{props.postsCount}</span> дописів
                                </li>
                                <li className="mr-5"><span
                                    className="font-weight-bold">{props.readersCount}</span> читачів
                                </li>
                                <li><span className="font-weight-bold">{props.subscribedCount}</span> стежать</li>
                            </ul>
                            <p className="card-text font-weight-bold mb-2">{props.name} {props.surname}</p>
                            <ul className="text-muted">Стежать:</ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ProfileHeader;
