//50 useEffect after render
//51 condition run useEffect
import React, { useEffect, useState } from 'react';

function ClickCntUseEff() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("useEffect - Update title");
        document.title = `Click ${count} times`;
    }, [count]); 

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>
                Click {count} times
            </button>
        </div>
    );
}

export default ClickCntUseEff;
