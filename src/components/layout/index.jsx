import React from 'react';
import Title from './../title/index';
import Content from '../content/index'

import './styles.css'

export default function Layout() {
    return (
        <div className="container">
            <div className="title-bar">
                <Title />
            </div>
            <div className="content-bar">
                <Content />
            </div>
        </div>
    )
}