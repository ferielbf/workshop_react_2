import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap';



function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        
        <i onClick={handleShow} class="fas fa-cog"></i>
        
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
  <label for="fname">First name:</label><br/>
  <input type="text" id="fname" value="Mike"/><br/><br/>
  <label for="lname">Last name:</label><br/>
  <input type="text" id="lname" value="Walker"/><br/><br/>
  <input type="submit" value="Submit"/>
      
        </form>



          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Example