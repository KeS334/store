import React from 'react';

const AboutPage = () => {
    return (
        <div className="about">
            <div className="about__container">
                <div className="about__card card">
                    This project is a simplified demo of the online store created by Serhii Keba.
                    <br/>
                    Source code is available <a target="_blank" href="https://github.com/KeS334/store">here</a>.
                    <br/>
                    The following set of technologies is used:
                    <br/>
                    <ul>
                        <li>HTML5</li>
                        <li>SCSS</li>
                        <li>Reack.js</li>
                        <li>TypeScript</li>
                        <li>React-Router</li>
                        <li>React-Chartjs-2</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;