import React, { useState } from 'react'
import Validation from '../../../form/Validation';
import axios from "axios";
export const BannerEditModal = ({banner,setEditBanner}) => {
    let editBanner = {
        name:'',
        is_active:'',
        url:'',
        image:'',
        NewUrl:''
    }
    const [image, setImage] = useState(null);
    const [form, setForm] = useState(editBanner)
    const [selectedFile, setSelectedFile] = useState();
    const [selectedImage, setSelectedImage] = useState("");
    const HandleChange = (e)=>{
       const {name,value} = e.target;
       let isValid = isAllowed(value, name);
       if (isValid) {
        setForm({ ...form, [name]: value });
        }
    }
    const [file, setFile] = useState(null);
  const [directory, setDirectory] = useState("");

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDirectoryChange = (event) => {
    setDirectory(event.target.value);
  };


  const handleUpload = async () => {
    
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      console.log(selectedFile, 'formData')
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });
      console.log(response, 'response')
      if (response.ok) {
        // File uploaded successfully
        
      } else {
        // File upload failed
      }
    
  };
    const isAllowed = (value, type) => {
        switch (type){
          case 'name':
            return (value === '' || (Validation.validateChar(value) && value.length < 51)); 
          case 'NewUrl':
            return  true;
          default:
            return  true;
        }
      }
  return (
    <>
    <div className="modal fade bs-example-modal-lg show" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-modal="true" style={{display: 'block'}}>
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h6 className="modal-title mt-0" id="myLargeModalLabel">Add New Lead</h6>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setEditBanner(false)}></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <label className="form-label" htmlFor="LeadName">Name</label>
                                <input type="text" className="form-control" id="LeadName" value={banner.name} required="" onChange={(e)=>HandleChange(e)}/>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label mt-2 mt-md-0" htmlFor="LeadEmail">Image URL</label>
                                <input type="email" className="form-control" id="LeadEmail" disabled={true} value={banner.url} required="" onChange={(e)=>HandleChange(e)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label className="form-label mt-2" htmlFor="PhoneNo">Banner Status</label><br/>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="bannerStatus" id="inlineRadio1" value="option1" onChange={(e)=>HandleChange(e)}/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">Active</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="bannerStatus" id="inlineRadio2" value="option2" onChange={(e)=>HandleChange(e)}/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">in Active</label>
                                </div>
                            </div>
                                
                            <div className="col-md-6">
                                <label htmlFor="status-select" className="form-label mt-2">Upload Image</label>
                                <div className="input-group mb-3">
                                    <input type="file" className="form-control" name='NewUrl' id="inputGroupFile02" onChange={({ target }) => {
                                        if (target.files) {
                                        const file = target.files[0];
                                        setSelectedImage(URL.createObjectURL(file));
                                        setSelectedFile(file);
                                        }
                                    }}/>
                                    <label className="input-group-text" name={'NewUrl'} htmlFor="inputGroupFile02" onChange={(e)=>HandleChange(e)}>Upload</label>
                                  </div>
                            </div> 
                        </div> 
                        <button type="button" className="btn btn-sm btn-primary mt-2">Save</button>  
                        <button type="button" className="btn btn-sm btn-danger mt-2">Delete</button>             
                    </form>  
                    <div>
                        <input type="file" onChange={handleFileUpload} />
                        <button onClick={()=>handleUpload()}>Upload File</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='modal-backdrop fade show'></div>
    </>
  )
}
