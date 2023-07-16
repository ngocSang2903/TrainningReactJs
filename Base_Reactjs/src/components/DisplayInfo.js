import React from "react";
import './DisplayInfo.scss'
import logo from './../logo.svg'

class DisplayInfo extends React.Component{

    state={
        isShowListUser:false
    }

    handleShowhide(){
        this.setState({
            isShowListUser:!this.state.isShowListUser
        })
    }

    render(){
        const {listUsers}=this.props;
        console.log(listUsers)
        return(
            <div className="displayinfo">
                {/* <img src={logo}></img> */}
                <div>
                    <span onClick={()=>{this.handleShowhide()}}>
                        {this.state.isShowListUser===true?"An":"Hien"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                <div>
                    {listUsers.map((user)=>{
                        return(
                            <div key={user.id} className={+user.age >18 ? "green" : "red"}>
                                <div>My nam is {user.name}</div>
                                <div>My age is {user.age}</div>
                                <button onClick={()=>{this.props.handleDeleteUser(user.id)}}>X</button>
                                <hr></hr>
                            </div>
                        )
                    })}
                </div>
                }
            </div>

        )
    }
}

export default DisplayInfo