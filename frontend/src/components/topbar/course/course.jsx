import React from 'react'
import "./course.css"

export default function Course() {
  return (
    <div className="course"> 
      <h2 className="couseTitle">Add Course</h2>
      <form class="row g-3">
  <div class="col-12">
    <label for="inputEmail4" class="form-label">Course Name</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder='Enter Course'/>
  </div>
  
  
  <div class="col-md-6">
    <label for="inputState" class="form-label">No Of Years</label>
    <select id="inputState" class="form-select">
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">2</option>
      <option value="4">2</option>
      <option value="5">2</option>
    </select>
  </div>
  
  <div class="col-md-6">
    <label for="inputState" class="form-label">No Of Sems For Year</label>
    <select id="inputState" class="form-select">
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">2</option>
      <option value="4">2</option>
      <option value="5">2</option>
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


