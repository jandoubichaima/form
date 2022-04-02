import { Button, Form } from "react-bootstrap";
import React from "react";
import "./Formcss.css";
function Forms (){
    return(
        <div className="forms">
          
          <h3>Registration</h3>
          <hr  size ="7px"color="perpel" width="10%" ></hr>
          <div className="abc">
          <div className="user">
            <label>Full Name</label>
            <input type="text" placeholder="enter your name "></input>
          </div>
          <div className="user">
            <label>UserName</label>
            <input type="text" placeholder="enter your User name "></input>
          </div>
          <div className="user">
            <label>Phone number </label>
            <input type="text" placeholder="enter your Phone number "></input>
          </div>
          <div className="user">
            <label>Password</label>
            <input type="password" placeholder="enter your password  "></input>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>
</div>
          <div className="fh">
            <h6>Gender :</h6>
            <input type="radio"  name="drone"></input> <label>Male</label> <input type="radio" name="drone"  ></input> <label>Female</label>
          </div>
            <Form>
 
  <Button variant="primary" type="submit">
    Register 
  </Button>
</Form>
        </div>
    );
}
export default Forms; 