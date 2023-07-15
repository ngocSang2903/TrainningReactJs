import React from "react";

import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyCoponent extends React.Component{

    state={
        listUsers:[
            {id:1,name:"sang123", age:"100"},
            {id:2,name:"huy", age:"100"},
            {id:3,name:"sang1van23", age:"100"},
            {id:4,name:"sangnam123", age:"100"}
        ]
    }

    render(){

        const myList=["a","b"]
        return(
            <div>
            <UserInfo></UserInfo><br></br>
            <DisplayInfo listUsers={this.state.listUsers} ></DisplayInfo>
            </div>
            
        );
    }
}

export default MyCoponent;