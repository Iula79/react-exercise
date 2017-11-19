import React from 'react';
const leftPadTime = function(time){
    if(time<10){
        return `0${time}`;
    } else {
        return time
    }
}
const Clock = ({hours, minutes,seconds}) => <div>{leftPadTime(hours)}:{leftPadTime(minutes)}:{leftPadTime(seconds)}</div>;

export default Clock;
