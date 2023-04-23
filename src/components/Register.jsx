import React from 'react';
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config';

const auth = getAuth(app)

const Register = () => {

     const handleRegisterSubmit = e => {
        // prevent page refresh
        e.preventDefault()

        // collect from data
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPass = e.target.confirmPass.value;

        console.log(email, password, confirmPass)

        // create user with email-pass
        createUserWithEmailAndPassword(auth, email, password, confirmPass)
        .then(result => {
            const loggededUser = result.user;
            console.log(loggededUser)
        })
        .catch(error => {
            console.log(error)
        })
     }

    return (
        <div>
            <Form onSubmit={handleRegisterSubmit} className="w-50 mx-auto mt-3 border p-2 py-4 rounded border-success">
        <h3 className="text-primary text-center my-3">Register Please!</h3>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>
        <FormGroup className="mb-3" controlId="formGroupPassword">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" name='password' placeholder="Password" />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formGroupPassword">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl type="password" name='confirmPass' placeholder="Password" />
        </FormGroup>
        <button className="btn btn-primary">Register</button>
      </Form>
        </div>
    );
};

export default Register;