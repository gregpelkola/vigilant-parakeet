import React from 'react';
import { useHistory } from 'react-router-dom';

const SplashPage = () => {
    const history = useHistory();

    const handleEnter = () => {
        history.push('/details');
    };
    
    return (
        <div className='splash-page'>
            <h1>Welcome to our Wedding</h1>
            <button onClick={handleEnter}>Enter</button>
        </div>
    );
};

export default SplashPage;