import React from "react";

import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyCoponent extends React.Component{
    render(){

        const myList=["a","b"]
        return(
            <div>
            <UserInfo></UserInfo><br></br>
            <DisplayInfo name="sang123" age="100" myList={myList}></DisplayInfo>
            </div>
            
        );
    }
}

export default MyCoponent;