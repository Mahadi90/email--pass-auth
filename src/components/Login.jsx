import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const Login = () => {

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
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
        <button className="btn btn-primary">Login</button>
        {/* <p>Email : {email}</p> */}
      </Form>
    </div>
  );
};

export default Login;
