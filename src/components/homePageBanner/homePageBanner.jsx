import React, { useState } from 'react'
import { BannerEditModal } from '../share';
import UploadFile from './uploadImg';
export const HomePageBanner = ({allBanner,setAllBanner}) => {
  const [editBanner, setEditBanner] = useState(false);
  const [editCurrent, setEditCurrent] = useState(-1);

  const editBannerID = (id)=>{
    setEditBanner(true);
    setEditCurrent(id);
  }
  return (
    <>
    
      {editBanner && editCurrent != -1 && <BannerEditModal banner={allBanner[editCurrent]} setEditBanner={setEditBanner}/> }
     
        <div className="page-wrapper">
            <div className="page-content-tab">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title-box">
                                <div className="float-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Metrica</a>
                                        </li>
                                        <li className="breadcrumb-item"><a href="#">Project</a>
                                        </li>
                                        <li className="breadcrumb-item active">Home Banner</li>
                                    </ol>
                                </div>
                                <h4 className="page-title">Home Banner</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-3">
                            <div className="card report-card">
                                <div className="card-body">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col">
                                            <p className="text-dark mb-1 fw-semibold">Paper</p>
                                            <h4 className="my-1">77</h4>
                                            <p className="mb-0 text-truncate text-muted"><span className="text-success"><i className="mdi mdi-checkbox-marked-circle-outline me-1"></i></span>26 Project Complete</p>
                                        </div>
                                        <div className="col-auto align-self-center">
                                            <div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
                                                <i data-feather="layers" className="align-self-center text-muted icon-sm"></i>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-md-6 col-lg-3">
                            <div className="card report-card">
                                <div className="card-body">
                                    <div className="row d-flex justify-content-center">                                                
                                        <div className="col">
                                            <p className="text-dark mb-1 fw-semibold">Plastic</p>
                                            <h4 className="my-1">41</h4>
                                            <p className="mb-0 text-truncate text-muted"><span className="badge badge-soft-success">Active</span> Weekly Avg.Sessions</p>
                                        </div>
                                        <div className="col-auto align-self-center">
                                            <div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
                                                <i data-feather="check-square" className="align-self-center text-muted icon-sm"></i>  
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-md-6 col-lg-3">
                            <div className="card report-card">
                                <div className="card-body">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col">  
                                            <p className="text-dark mb-1 fw-semibold">Metal</p>  
                                            <h4 className="my-1">801:30</h4>   
                                            <p className="mb-0 text-truncate text-muted"><span className="text-muted">01:33</span> / 
                                                <span className="text-muted">9:30</span>  Duration</p>
                                        </div>
                                        <div className="col-auto align-self-center">
                                            <div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
                                                <i data-feather="clock" className="align-self-center text-muted icon-sm"></i>  
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-md-6 col-lg-3">
                            <div className="card report-card">
                                <div className="card-body">
                                    <div className="row d-flex justify-content-center">                                                
                                        <div className="col">
                                            <p className="text-dark mb-1 fw-semibold">E waste</p>
                                            <h4 className="my-1">$24100</h4>   
                                            <p className="mb-0 text-truncate text-muted"><span className="text-dark">$14k</span> Total used budgets</p>
                                        </div>
                                        <div className="col-auto align-self-center">
                                            <div className="bg-light-alt d-flex justify-content-center align-items-center thumb-md  rounded-circle">
                                                <i data-feather="dollar-sign" className="align-self-center text-muted icon-sm"></i>  
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <UploadFile/>
                     <div className="row"> 
                                              
                        <div className="col-lg-12">
                            <div className="card">  
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col">                      
                                            <h4 className="card-title">All Banner</h4>                      
                                        </div>
                                    </div>                                   
                                </div>                                
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover mb-0">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>Banner Name</th>
                                                    <th>Banner Image</th>
                                                    <th>Banner Show</th>
                                                    <th>Edit</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {allBanner.map((item,index)=>(
                                                    <tr key={index}>
                                                        <td>{item.name}</td>
                                                        <td><img src="assets/images/users/user-2.jpg" alt="" className="thumb-sm rounded me-2"/>{item.url}</td>
                                                        <td>{item.is_active === 1?'show':'Hide'}</td>
                                                        <td>
                                                          <a href='javascript:void(0)' onClick={()=>editBannerID(index)}><i className="las la-pen text-secondary font-16"></i></a>
                                                        </td>
                                                    </tr>
                                                ))}                                                                                              
                                            </tbody>
                                        </table>
                                                                                       
                                    </div>
                                </div>                                                                                                       
                            </div>
                        </div>      
                    </div>

                </div>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="Appearance" aria-labelledby="AppearanceLabel">
                    <div className="offcanvas-header border-bottom">
                      <h5 className="m-0 font-14" id="AppearanceLabel">Appearance</h5>
                      <button type="button" className="btn-close text-reset p-0 m-0 align-self-center" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">  
                        <h6>Account Settings</h6>
                        <div className="p-2 text-start mt-3">
                            <div className="form-check form-switch mb-2">
                                <input className="form-check-input" type="checkbox" id="settings-switch1"/>
                                <label className="form-check-label" htmlFor="settings-switch1">Auto updates</label>
                            </div>
                            <div className="form-check form-switch mb-2">
                                <input className="form-check-input" type="checkbox" id="settings-switch2" checked/>
                                <label className="form-check-label" htmlFor="settings-switch2">Location Permission</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="settings-switch3"/>
                                <label className="form-check-label" htmlFor="settings-switch3">Show offline Contacts</label>
                            </div>
                        </div>
                        <h6>General Settings</h6>
                        <div className="p-2 text-start mt-3">
                            <div className="form-check form-switch mb-2">
                                <input className="form-check-input" type="checkbox" id="settings-switch4"/>
                                <label className="form-check-label" htmlFor="settings-switch4">Show me Online</label>
                            </div>
                            <div className="form-check form-switch mb-2">
                                <input className="form-check-input" type="checkbox" id="settings-switch5" checked/>
                                <label className="form-check-label" htmlFor="settings-switch5">Status visible to all</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="settings-switch6"/>
                                <label className="form-check-label" htmlFor="settings-switch6">Notifications Popup</label>
                            </div>
                        </div>       
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
