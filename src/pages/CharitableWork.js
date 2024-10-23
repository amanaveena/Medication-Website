// src/pages/CharitableWork.js
import React from 'react';
import { Link } from 'react-router-dom';

const CharitableWork = () => {
    return (
        <div>
            <h1>Charitable Work</h1>
            <p>Welcome to our Charitable Work section. Here are our current projects:</p>
            <ul>
                <li>
                    <Link to="/ongoing-projects">Ongoing Projects</Link>
                </li>
                <li>
                    <Link to="/completed-projects">Completed Projects</Link>
                </li>
            </ul>
        </div>
    );
};

export default CharitableWork;
