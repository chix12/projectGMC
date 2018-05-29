import {Modal, Button} from 'react-bootstrap'
import React from 'react'

class Trigger extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleHide = this.handleHide.bind(this);
  
      this.state = {
        show: false
      };
    }


    showModal=()=>{
        this.setState({ show: true })
    }
  
    handleHide() {
      this.setState({ show: false });
    }
    render() {
        console.log(this.state.show)
      return (
        <div className="modal-container" style={{ height: 200 }}>
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.showModal}
          >
            Launch contained modal
          </Button>
  <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >jjjjj
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Contained Modal
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
              ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
          
        </div>
      );
    }
  }
  
export default Trigger