import React from 'react';
import "../App.css"

function Dashboard({buttonFunctions}) {
    const labels = ['Strike', 'Ball', 'Foul', 'RESET'];
    return (
        Object.values(buttonFunctions)
            .map((button, i) => <button key={i} onClick={button}>{labels[i]}</button>)
    );
}

export default Dashboard;