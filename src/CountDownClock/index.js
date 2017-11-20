import React from 'react';
import Clock from '../Clock/index.js'

class CountDown extends React.Component {
    
    state = {
       
        seconds:this.props.seconds,

    };

    componentDidMount() {
        
        let IntervalId = setInterval(()=>{
            if (this.state.seconds <= 0){
                alert("done")
            clearTimeout(IntervalId)
            } else { 
                this.setState({seconds: this.state.seconds -1});
            }
        }, 1000);

    }; 

    render(){
        console.log(this.state.seconds)
        return (
            <Clock hours={Math.floor(this.state.seconds / 3600)} minutes={Math.floor((this.state.seconds % 3600) / 60)} seconds={Math.floor((this.state.seconds % 3600) % 60)}/>
        )
    }
}

export default CountDown;

/** Done early?  Try adding these features:
 *
 *  1. onComplete handler
 *  2. Option to repeat when countdown reaches 0
 */
