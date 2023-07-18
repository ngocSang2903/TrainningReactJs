import ModalCreateUser from "./ModalCreateUser"
import "./ManagerUser.scss"

const ManagerUser=()=>{
    return(
        <div className="manage-user-container">
            <div className="title">
                Manager User
            </div>
            <div className="user-content">
                <div>
                    <button>Add User</button>
                </div>
                <div>
                    table
                    <ModalCreateUser></ModalCreateUser>
                </div>
            </div>
        </div>
    )
}
export default ManagerUser