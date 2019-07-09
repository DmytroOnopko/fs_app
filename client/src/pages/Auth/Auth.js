import React from 'react';
import EntryImage from '../../components/SignUp/EntryImage'
import SignUp from '../../components/SignUp/SignUp'

const Auth = () => {
    return (
        <section className="entry-section">
            <div className="container">
                <div className="row">
                    <EntryImage/>
                    <SignUp/>
                </div>
            </div>
        </section>
    );
};

export default Auth;
