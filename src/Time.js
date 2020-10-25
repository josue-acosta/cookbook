import React, { useState, useEffect } from 'react';

const Time = () => {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('/time')
            .then(res => res.json())
            .then(data => {
                setCurrentTime(data.time);
            });
    }, []);

    return (<p>The current time is {currentTime}.</p>);
}

export default Time;