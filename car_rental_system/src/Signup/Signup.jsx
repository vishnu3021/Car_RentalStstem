import React from 'react'
// import "./Sign.css"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// function BasicExample() {
//   return (
    // <div className='signupContainer'>
    // <Form className='Formitems'>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //     {/* <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text> */}
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>
    //   {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group> */}
    //   <Button variant="primary" type="submit">
    //    Sign up
    //   </Button>
    // </Form></div>
  // );
// }

// export default BasicExample;

export default function Signup() {
  return (
    <div>
    
    <div className="signupContainer">
    <form className="Formitems"> <span>  </span>
      <label>Email:  </label>
    
      <input type='email'/>
      <br />
      <label>Password:  </label>  <span>        </span> 
      <input type='password'/> <br />
      <input type='submit' value='Signup'/>
    </form>
    </div>
    </div>
  )
}
