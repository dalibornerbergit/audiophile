import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { useForm } from "react-hook-form";
import Header from "../../Components/Layout/Header/Header";
import GoBack from "../../Components/Common/GoBack/GoBack";
import CheckoutModal from "../../Components/Checkout/CheckoutModal";

import "./Checkout.css";

const Checkout = () => {
  const { selectedItems, setSelectedItems } = useContext(CartContext);

  const [open, setOpen] = useState(false);
  const [data, setData] = useState(false);

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

      <div className="container cart-page">
        <GoBack />

        <div className="checkout-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              className={`checkout-form-label ${
                errors.fullName && "error-color"
              }`}
            >
              <label>
                <b>Full name</b>
              </label>
            </div>
            <input
              className={errors.fullName && "error-border"}
              type="text"
              placeholder="Insert full name"
              {...register("fullName", { required: true, minLength: 3 })}
            />
            <div className="err-div">
              {errors.fullName?.type === "required" && "Full name is required"}
              {errors.fullName?.type === "minLength" && "Min length is 3"}
            </div>

            <div
              className={`checkout-form-label ${
                errors.address && "error-color"
              }`}
            >
              <label>
                <b>Address</b>
              </label>
            </div>
            <input
              className={errors.address && "error-border"}
              type="text"
              placeholder="Insert address"
              {...register("address", { required: true, minLength: 3 })}
            />
            <div className="err-div">
              {errors.address?.type === "required" && "Address is required"}
              {errors.address?.type === "minLength" && "Min length is 3"}
            </div>

            <div
              className={`checkout-form-label ${errors.city && "error-color"}`}
            >
              <label>
                <b>City</b>
              </label>
            </div>
            <input
              className={errors.city && "error-border"}
              type="text"
              placeholder="Insert city"
              {...register("city", { required: true, minLength: 2 })}
            />
            <div className="err-div">
              {errors.city?.type === "required" && "City is required"}
              {errors.city?.type === "minLength" && "Min length is 2"}
            </div>

            <div
              className={`checkout-form-label ${errors.phone && "error-color"}`}
            >
              <label>
                <b>Phone</b>
              </label>
            </div>
            <input
              className={errors.phone && "error-border"}
              type="tel"
              placeholder="Insert phone"
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

            <div
              className={`checkout-form-label ${
                errors.payment && "error-color"
              }`}
            >
              <label>
                <b>Cash payment</b>
              </label>
            </div>
            <input
              className={errors.fullName && "error-border"}
              type="checkbox"
              {...register("payment", { required: true })}
            />
            <div className="err-div">
              {errors.payment?.type === "required" && "Payment is required"}
            </div>

            <input
              className={errors.fullName && "error-border"}
              style={{ margin: "0 auto" }}
              type="submit"
            />
          </form>
        </div>
      </div>

      <CheckoutModal
        open={open}
        data={data}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </>
  );
};

export default Checkout;
