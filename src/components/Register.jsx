import React, { useState } from 'react';
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config';

const auth = getAuth(app)

const Register = () => {
     
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

     const handleRegisterSubmit = e => {
        // prevent page refresh
        e.preventDefault()


        setSuccess('')
        setError('')
        // collect from data
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPass = e.target.confirmPass.value;

        console.log(email, password)

        // validation
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
         setError('Password must be at least two capital letter')
         return;
        }
        else if(!/(?=.*[0-9])/.test(password)){
            setError('Paaword must be at least 1 number')
            return
        }
        else if(password.length < 6){
            setError('Password must be minimym 6 charachter')
            return
        }

        // create user with email-pass
        createUserWithEmailAndPassword(auth, email, password, confirmPass)
        .then(result => {
            const loggededUser = result.user;
            console.log(loggededUser)
            setError('')
            e.target.reset()
            setSuccess('Great!You have sucessully registered')
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
     }

    return (
        <div>
            <Form onSubmit={handleRegisterSubmit} className="w-50 mx-auto mt-3 border p-2 rounded border-success">
        <h3 className="text-primary text-center my-3">Register Please!</h3>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>
        <FormGroup className="mb-3" controlId="formGroupPassword">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" name='password' placeholder="Password" required />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formGroupPassword">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl type="password" name='confirmPass' placeholder="Password" required/>
        </FormGroup>
        <button className="btn btn-primary">Register</button>
      <p className='text-danger'>{error}</p>
      <p className='text-success'>{success}</p>

      </Form>
        </div>
    );
};

export default Register;