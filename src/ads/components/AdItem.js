import React, { useContext,useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { AuthContext } from "../../shared/context/auth-context";

const AdItem = (props) => {
  const auth = useContext(AuthContext);


  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  return (
    <div
      class="card"
      style={{ margin: "20px", width: "300px", height: "640px" }}
    >
      <img src={props.image} class="card-img-top" alt={props.name} />

      <div class="card-body">
        <h4 class="card-title center">{props.title}</h4>
        <p class="card-text center">{props.description}</p>
        <p class="card-text center">{props.address}</p>
        {auth.isLoggedIn && (
          <a href={`/ads/${props.id}`} class="btn center btn-primary">
            Edit
          </a>
        )}
        {auth.isLoggedIn && (
          <div>
            <Button color="danger" onClick={toggle}>
              Delete
            </Button>
            <Modal isOpen={modal} toggle={toggle} >
              <ModalHeader toggle={toggle} charCode="x">
                Delete Ad
              </ModalHeader>
              <ModalBody>
               Are you sure you want to delete this Ad permanently
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Delete
                </Button>
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdItem;
