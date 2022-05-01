import React from 'react';
import './Home.css';

function HomeView(props) {
    return (
        <div>
            <div className="App" >
                Contando - {props.count} - {props.count1}
            </div>
            <button onClick={props.addCount}> Adc valor</button>
        </div>
    );
};

export default HomeView;