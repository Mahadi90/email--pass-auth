import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import app from "../firebase/firebase.config";

const auth = getAuth(app)

const Login = () => {

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

    const handleSubmit = e => {

        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setSuccess('')

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const loggededUser = result.user;
          setSuccess('User login successful')
          setError('')
        })
        .catch(error => {
          setError(error.message)
        })
    }

  
  return (
    <div>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto mt-5 border p-2 py-4 rounded border-success">
        <h3 className="text-primary text-center my-3">Login!</h3>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control  type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <FormGroup className="mb-3" controlId="formGroupPassword">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" name="password" placeholder="Password" />
        </FormGroup>
        <p>Are you new here? please <Link to='/register'>Register</Link></p>
        <button className="btn btn-primary">Login</button>
        <p className="text-danger">{error}</p>
        <p className="text-success">{success}</p>
      </Form>
    </div>
  );
};

export default Login;
