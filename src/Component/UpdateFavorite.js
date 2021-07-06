import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


class UpdateFavorite extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputUser: '',
            modalStatus: false,
        }
    }
    render() {
        return (
            <>
                <Button variant="primary" onClick={(this.setState({ modalStatus: true }))}>Update</Button>


                <Modal show={this.state.modalStatus} >

                    <Modal.Body>


                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>(this.setState({inputUser:e.target.value}))} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Img</Form.Label>
                                <Form.Control type="text" placeholder="Img" onChange={(e)=>(this.setState({inputUser:e.target.value}))}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary"  onClick={(this.setState({ modalStatus: false }))}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={(this.props.UpdateFavorite,this.state.inputUser)}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default UpdateFavorite;
