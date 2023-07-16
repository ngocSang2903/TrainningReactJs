import React from "react";

import AddUser from "./AddUser";
import DisplayInfo from "./DisplayInfo";

class MyCoponent extends React.Component{

    state={
        listUsers:[
            {id:1,name:"sang123", age:"12"},
            {id:2,name:"huy", age:"67"},
            {id:3,name:"sang1van23", age:"23"},
            {id:4,name:"sangnam123", age:"67"}
        ]
    }

    handleAddUser=(Object)=>{

        // let listUserNew=this.state.listUsers;
        // listUserNew.unshift(Object);
        // this.setState({
        //     listUsers:listUserNew
        // })
        
        this.setState({
            listUsers:[Object, ...this.state.listUsers]
        })
        console.log(Object)
        console.log(this.state.listUsers)
    }

    handleDeleteUser=(UserId)=>{
        let listUserClone=[...this.state.listUsers].filter(item=>item.id!==UserId);
        this.setState({
            listUsers:listUserClone
        })

    }

    render(){
        return(
            <div>
            <AddUser handleAddUser={this.handleAddUser} ></AddUser><br></br>
            <DisplayInfo listUsers={this.state.listUsers}  handleDeleteUser={this.handleDeleteUser}></DisplayInfo>
            </div>
            
        );
    }
}

export default MyCoponent;