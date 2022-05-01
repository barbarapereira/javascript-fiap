import React from 'react';
import './Home.css';

function HomeView(props) {
    console.log(props)
    return (
        <div className="App" >Contando - {props.count}</div>
    );
};

export default HomeView;