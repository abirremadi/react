import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Col,Row} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      
      <Form>
  <Row>
    <Col>
    <Form.Label>First Name</Form.Label>
      <Form.Control placeholder="Enter your First name" />
    </Col>
    <Col>
    <Form.Label>Last Name</Form.Label>
      <Form.Control placeholder="Enter your Last name" />
    </Col>
  </Row>
</Form>
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Form>
  <Form.Group>
    <Form.File id="exampleFormControlFile1"  />
  </Form.Group>
</Form>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

 </div>
  );
}
export default App;