import React from 'react'
import "./teacher.css"

export default function Teacher() {
  return (
    <div className="teacher"> 
       <h2 className="couseTitle">Add Teacher</h2>
      <form class="row g-3">
  <div class="col-12">
    <label for="inputEmail4" class="form-label">Full Name</label>
    <input type="name" class="form-control" id="inputEmail4" placeholder='Enter Name'/>
  </div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder='Enter Email'/>
  </div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Mobile</label>
    <input type="mobile" class="form-control" id="inputEmail4" placeholder='Enter Mobile'/>
  </div>
  
  
  <div class="col-md-6">
    <label for="inputState" class="form-label">Select Course</label>
    <select id="inputState" class="form-select">
      <option selected value="1">1</option>
      <option value="2">2</option> 
      <option value="3">2</option>
      <option value="4">2</option>
      <option value="5">2</option>
    </select>
  </div>
  
  <div class="col-md-6">
    <label for="inputState" class="form-label">Select Gender</label>
    <select id="inputState" class="form-select">
      <option selected >1</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>
  
  <div class="col-md-6">
    <button type="reset" class="btn btn-primary btn-large">Clear</button>
  </div>
  <div class="col-md-6">
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
</form> 
    </div>
  )
}
