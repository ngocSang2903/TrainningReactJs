import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FcPlus} from 'react-icons/fc'



const ModalCreateUser=()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
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



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New User
      </Button>

      <Modal show={show} onHide={handleClose} size='xl' backdrop="static" className='modal-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="row g-3">
             <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={(event)=>setEmail(event.target.value)}/>
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
                <label className="form-label label-upload" htmlFor='lableforupload'><FcPlus></FcPlus>UpLoad images</label>
                <input type='file'  id="lableforupload" hidden onChange={(event)=>handleUpLoadImgaes(event)}></input>
            </div>
            <div className='col-md-12 img-preview'>
                {previewImages ? 
                <img src={previewImages}></img>
                :
                <span>Preview Images</span>
                }
                

            </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCreateUser;