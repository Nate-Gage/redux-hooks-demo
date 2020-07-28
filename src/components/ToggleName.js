import React, { useState } from 'react';
import lincolnpng from '../lincoln.png';

const ToggleName = () => {

    const [name, setName] = useState(false);

    return (
        <div>
            <img src={lincolnpng} alt="abe lincoln" />
            {name ?
                <div>
                    <p>Abraham Lincoln</p>
                    <button onClick={() => setName(false)}>Hide</button>
                </div>
                :
                <button onClick={() => setName(true)}>Who is this?</button>}
        </div>
    );
};

export default ToggleName;
