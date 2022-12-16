import React, { useState, useEffect } from 'react';

function Time() {
    //time
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 10);

        return () => clearInterval(interval);
    }, []);

    //date
    const current = new Date();
    const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;

    return (
        <div className="card m-3">
            <div className="card-body shadow text-center">
                <h6 className="card-text">{time.toLocaleTimeString()}</h6>
                <figcaption className="card-text text-muted">{date}</figcaption>
            </div>
        </div>
    )
}

export default Time;