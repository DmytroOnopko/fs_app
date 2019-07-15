import React from 'react';
import Image from '../../components/Entry/Image/Image';
import SignUp from '../../components/Entry/SignUp/SignUp';
import './auth.scss';

const Auth = () => {
    return (
        <section className="entry-section">
            <div className="container">
                <div className="row">
                    <Image/>
                    <SignUp/>
                </div>
            </div>
        </section>
    );
};

export default Auth;
