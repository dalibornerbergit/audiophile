import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { List, Button } from "rsuite";
import { CartContext } from "../../Contexts/CartContext";
import GoBack from "../../Components/Common/GoBack/GoBack";
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

  console.log(selectedItems);

  return (
    <>
      <div className="dark-header">
        <Header />
      </div>

      <div className="container cart-page">
        <GoBack />

        {selectedItems.length === 0 && <h4>No items selected</h4>}

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
              Price: <b>{item.price}</b>{" "}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  className="remove-btn"
                  onClick={() => handleRemove(item)}
                  size="sm"
                  appearance="primary"
                >
                  Remove
                </Button>
              </div>
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
