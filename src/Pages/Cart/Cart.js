import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { List, Button } from "rsuite";
import { CartContext } from "../../Contexts/CartContext";
import Header from "../../Components/Layout/Header/Header";

import "./Cart.css";

const Cart = () => {
  const history = useHistory();

  const { selectedItems, setSelectedItems, price } = useContext(CartContext);

  const handleRemove = (item) => {
    let match = selectedItems.filter((si) => si.id === item.id);
    let noMatch = selectedItems.filter((si) => si.id !== item.id);

    match.pop();

    setSelectedItems([...match, ...noMatch]);
  };

  return (
    <>
      <div className="speakers-header">
        <Header />
      </div>

      <div className="cart-page">
        {selectedItems.length === 0 && <h4>No items selected.</h4>}

        <List style={{ marginBottom: "2rem" }}>
          {selectedItems.map((item, i) => (
            <List.Item style={{ textAlign: "center" }} key={i} index={i}>
              Category: <b>{item.category}</b> | Name: <b>{item.name}</b> |
              Price: <b>{item.price}</b>{" "}
              <Button
                onClick={() => handleRemove(item)}
                size="sm"
                appearance="primary"
              >
                Remove
              </Button>
            </List.Item>
          ))}
        </List>

        {selectedItems.length > 0 && (
          <div style={{ marginBottom: "2rem" }}>
            <h4>Total: {price > 0 && price + 50}</h4>
            <p>VAT: 20% + shipping: 50$</p>
          </div>
        )}

        {selectedItems.length > 0 && (
          <Button onClick={() => history.push("/checkout")}>Checkout</Button>
        )}
      </div>
    </>
  );
};

export default Cart;
