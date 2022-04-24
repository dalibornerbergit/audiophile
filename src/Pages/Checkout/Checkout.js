import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Layout/Header/Header";
import { Modal, Button } from "rsuite";

import "./Checkout.css";

const Checkout = () => {
  const history = useHistory();

  const { setSelectedItems } = useContext(CartContext);

  const [open, setOpen] = useState(false);

  const handleOk = () => {
    setSelectedItems([]);
    history.push("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="speakers-header">
        <Header />
      </div>

      <div className="cart-page">
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
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Order complete</h4>
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
