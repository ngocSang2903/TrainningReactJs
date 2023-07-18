import { useEffect, useState } from "react"
import axios from 'axios';


const TableUser=()=>{


    const [listUser,setListUser]=useState([]);

    useEffect(()=>{
        fetchListUser();
    },[]);

    const fetchListUser=async()=>{
        let res= await getAllUser();
        console.log(res.data.DT)
        if(res.data.EC===0){
            setListUser(res.data.DT);
        }
    }

    const getAllUser=()=>{
        return axios.get('http://localhost:8081/api/v1/participant/all')
    }


    return(
        <table className="table table-striped table-hover ">
            <thead>
                <tr>
                    <th scope="col">NO</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {listUser && listUser.length>0 &&
                    listUser.map((item,index)=>{
                        return(
                            <tr key={item.id}>
                                <th scope="row">{index+1}</th>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className="btn btn-secondary">View</button>
                                    <button className="btn btn-danger mx-3">Update</button>
                                    <button className="btn btn-warning">Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                {listUser && listUser.length===0
                    && <tr>
                            <td colSpan={4}>Not found data</td>
                        </tr>
                }
            </tbody>
        </table>
    )
}

export default TableUser