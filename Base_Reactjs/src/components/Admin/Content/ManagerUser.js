import ModalCreateUser from "./ModalCreateUser"
import "./ManagerUser.scss"
import {FcPlus} from 'react-icons/fc'
import { useState } from "react"
import TableUser from "./TableUser"

const ManagerUser=()=>{

    const [showModalCreate,setShowModalCreate]=useState(false)

    return(
        <div className="manage-user-container">
            <div className="title">
                Manager User
            </div>
            <div className="user-content">
                <div className="btn-addnew"> 
                    <button className="btn btn-primary" onClick={()=>setShowModalCreate(true)}><FcPlus></FcPlus> Add User</button>
                </div>
                <div className="table-users-container">
                    <TableUser></TableUser>
                </div>
                <ModalCreateUser show={showModalCreate} setShow={setShowModalCreate}></ModalCreateUser>
            </div>
        </div>
    )
}
export default ManagerUser