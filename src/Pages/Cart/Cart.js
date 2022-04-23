import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { List, Button } from "rsuite";
import { CartContext } from "../../Contexts/CartContext";
import Header from "../../Components/Layout/Header/Header";

import "./Cart.css";

const Cart = () => {
  const history = useHistory();

  const { selectedItems, price } = useContext(CartContext);

  return (
    <>
      <div className="speakers-header">
        <Header />
      </div>

      <div className="cart-page">
        <List style={{ marginBottom: "2rem" }}>
          {selectedItems.map((item, i) => (
            <List.Item key={i} index={i}>
              Category: <b>{item.category}</b> | Name: <b>{item.name}</b> |
              Price: <b>{item.price}</b>
            </List.Item>
          ))}
        </List>

        <h4 style={{ marginBottom: "2rem" }}>Total: {price}</h4>

        <Button onClick={() => history.push("/checkout")}>Checkout</Button>
      </div>
    </>
  );
};

export default Cart;
