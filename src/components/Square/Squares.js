import React, { useState } from 'react';
import '../../App.css';

const Squares = () => {
    const [bgColor1, setBgColor1] = useState(false);
    const [bgColor2, setBgColor2] = useState(false);
    const [bgColor3, setBgColor3] = useState(false);
    const [bgColor4, setBgColor4] = useState(false);

    return (
        <div id="squaresContainer" data-test="squaresComponent">
            <div 
                id="topLeft"
                style={{
                    backgroundColor: bgColor1 ? 'red' : 'blue'
                }}
                onClick={() => setBgColor1(true)}>
            </div>
            <div 
                id="topRight"
                style={{
                    backgroundColor: bgColor2 ? 'red' : 'blue'
                }}
                onClick={() => setBgColor2(true)}>
            </div>
            <div 
                id="bottomLeft"
                style={{
                    backgroundColor: bgColor3 ? 'red' : 'blue'
                }}
                onClick={() => setBgColor3(true)}>
            </div>
            <div 
                id="bottomRight"
                style={{
                    backgroundColor: bgColor4 ? 'red' : 'blue'
                }}
                onClick={() => setBgColor4(true)}>
            </div>
        </div>
    );
};

export default Squares;
