import React from "react";

class AddUser extends React.Component{

    state={
        name:'sang',
        adress:'HN',
        age: 20
    };

    handleClick=(event)=>{
        console.log("click me")
        console.log(event.target)
        console.log(this.state.name)
        this.setState({
            name:'huy'
        })
    }

    handleOnchangeInput=(event)=>{
        console.log(event.target.value)
        this.setState({
            name:event.target.value
        })
    }

    handleOnchangeAge=(event)=>{
        console.log(event.target.value)
        this.setState({
            age:event.target.value
        })
    }


    handleOnMountOver(event){
        console.log(event)
    }

    handleOnSubmit=(event)=>{
        event.preventDefault();
        this.props.handleAddUser({
            id:Math.floor((Math.random()*100)+1)+'-random',
            name:this.state.name,
            age:this.state.age
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                <label>Your Name:</label>
                <input value={this.state.name} type="text" onChange={(event)=>this.handleOnchangeInput(event)}></input>
                <label>Your age:</label>
                <input value={this.state.age} type="text" onChange={(event)=>this.handleOnchangeAge(event)}></input>
                <button >submit</button>
            </form>
            </div>
        )
    }
}
export default AddUser;