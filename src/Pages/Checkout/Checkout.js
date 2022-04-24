import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Layout/Header/Header";
import { Modal, Button, List } from "rsuite";

import "./Checkout.css";
import GoBack from "../../Components/Common/GoBack/GoBack";

const Checkout = () => {
  const history = useHistory();

  const { selectedItems, setSelectedItems } = useContext(CartContext);

  const [open, setOpen] = useState(false);
  const [data, setData] = useState(false);

  const handleOk = () => {
    setSelectedItems([]);
    history.push("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setData(data);
    setOpen(true);
  };

  return (
    <>
      <div className="dark-header">
        <Header />
      </div>

      <div className="container">
        <GoBack />

        <div className="checkout-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Full name"
              {...register("fullName", { required: true, minLength: 3 })}
            />

            <div className="err-div">
              {errors.fullName?.type === "required" && "Full name is required"}
              {errors.fullName?.type === "minLength" && "Min length is 3"}
            </div>

            <input
              type="text"
              placeholder="Address"
              {...register("address", { required: true, minLength: 3 })}
            />
            <div className="err-div">
              {errors.address?.type === "required" && "Address is required"}
              {errors.address?.type === "minLength" && "Min length is 3"}
            </div>

            <input
              type="text"
              placeholder="City"
              {...register("city", { required: true, minLength: 2 })}
            />
            <div className="err-div">
              {errors.city?.type === "required" && "City is required"}
              {errors.city?.type === "minLength" && "Min length is 2"}
            </div>

            <input
              type="tel"
              placeholder="Phone"
              {...register("phone", {
                required: true,
                minLength: 9,
                pattern: /^[0-9]*$/i,
              })}
            />

            <div className="err-div">
              {errors.phone?.type === "required" && "Phone is required"}
              {errors.phone?.type === "minLength" && "Min length is 9"}
              {errors.phone?.type === "pattern" && "Numbers only"}
            </div>

            <input style={{ margin: "0 auto" }} type="submit" />
          </form>
        </div>
      </div>

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
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleOk} appearance="primary">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Checkout;
