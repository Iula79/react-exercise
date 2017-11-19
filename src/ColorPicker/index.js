import React from 'react';
import { colors }  from '../utils/palettes';



class Picker extends React.Component {
    
    render(){
        let palettes = colors
        let updateBackgroundColor = this.props.updateBackgroundColor
        return(
            <div style={{display:"inline"}}>
                {palettes.map(function(x){
                    return(
                    <div key={x} style={{width:"50px", height:"50px", background: x}} onClick={e => updateBackgroundColor(x)}></div>
                    )
                }, this)}
            </div>
        )
    }
}
export default Picker;