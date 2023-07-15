import React from "react";

class DisplayInfo extends React.Component{

    render(){
        const {name,age}=this.props;
        console.log(this.props)
        return(
            <div>
                <div>My nam is {name}</div>
                <div>My age is {age}</div>
            </div>
        )
    }
}

export default DisplayInfo