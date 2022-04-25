import { useHistory } from "react-router-dom";
import { Modal, Button, List } from "rsuite";

const CheckoutModal = ({ open, data, selectedItems, setSelectedItems }) => {
  const history = useHistory();

  const handleOk = () => {
    setSelectedItems([]);
    history.push("/");
  };

  return (
    <Modal open={open} onClose={handleOk}>
      <Modal.Header>
        <Modal.Title>Order complete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Review</h4>

        <List style={{ marginBottom: "2rem", width: "fit-content" }}>
          {selectedItems.map((item, i) => (
            <List.Item className="cart-list" key={i} index={i}>
              <img
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  marginRight: "2rem",
                  borderRadius: "4px",
                }}
                src={`/assets/product-${item.slug}/desktop/image-product.jpg`}
                alt=""
              />
              Category: <b>{item.category}</b> | Name: <b>{item.name}</b> |
              Price: <b>{item.price}</b>
            </List.Item>
          ))}
        </List>

        <div style={{ textAlign: "center" }}>
          <p>
            Full name: <b>{data?.fullName}</b>
          </p>
          <p>
            Address: <b>{data?.address}</b>
          </p>
          <p>
            City: <b>{data?.city}</b>
          </p>
          <p>
            Phone: <b>{data?.phone}</b>
          </p>
          <p>
            <b>Cash payment</b>
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleOk}>Ok</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CheckoutModal;
