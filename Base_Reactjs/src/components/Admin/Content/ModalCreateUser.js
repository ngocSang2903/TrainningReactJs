import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FcPlus} from 'react-icons/fc';

const ModalCreateUser=(props)=> {
  const {show, setShow} = props;

  const handleClose = () => {
    setShow(false)
    setEmail("");
    setPassword("");
    setImages("");
    setRole("USER");
    setUsername("")
    setPreviewImages("")
  };
  const handleShow = () => setShow(true);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [username,setUsername]=useState("");
  const [images,setImages]=useState("");
  const [role,setRole]=useState("USER");
  const [previewImages,setPreviewImages]=useState("")

  const handleUpLoadImgaes=(event)=>{
    if(event.target&& event.target.files && event.target.files[0]){
      setPreviewImages(URL.createObjectURL(event.target.files[0]))
      setImages(event.target.files[0])
    }else{
        setPreviewImages("");
    }

  }

  const handleSubmitUser= async()=>{
    //validate


    //call api
    // let data={
    //   email: email,
    //   password: password,
    //   username: username,
    //   role: role,
    //   userImage: images
    // }

    const data=new FormData();
    data.append('email',email);
    data.append('password',password);
    data.append('username',username);
    data.append('role',role);
    data.append('userImage',images);

     let res=await axios.post('http://localhost:8081/api/v1/participant',data)
    console.log(res)
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} size='xl' backdrop="static" className='modal-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <data className="row g-3">
            <div class="col-md-6">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            </div>
            <div className="col-md-6">
                <label  className="form-label">Username</label>
                <input type="text" className="form-control" value={username} onChange={(event)=>setUsername(event.target.value)}/>
            </div>
            <div className="col-md-4">
                <label className="form-label">ROLE</label>
                <select className="form-select" onChange={(event)=>setRole(event.target.value)}>
                <option  value="USER" selected >USER</option>
                <option value="ADMIN">ADMIN</option>
                </select>
            </div>
            <div className='col-md-12'>
                <label className="data-label label-upload" htmlFor='lableforupload'><FcPlus></FcPlus>UpLoad images</label>
                <input type='file'  id="lableforupload" hidden onChange={(event)=>handleUpLoadImgaes(event)}></input>
            </div>
            <div className='col-md-12 img-preview'>
                {previewImages ? 
                <img src={previewImages}></img>
                :
                <span>Preview Images</span>
                }
            </div>
        </data>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleSubmitUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCreateUser;