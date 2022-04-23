import { BrowserRouter as Router, Switch } from "react-router-dom";
import CartContextProvider from "./Contexts/CartContext";
import PublicRoute from "./Routes/PublicRoute";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Speakers from "./Pages/Speakers/Speakers";
import Earphones from "./Pages/Earphones/Earphones";
import SpeakerDetails from "./Pages/SpeakerDetails/SpeakerDetails";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";

import "rsuite/dist/rsuite.min.css";

function App() {
  return (
    <Router>
      <CartContextProvider>
        <Switch>
          <PublicRoute exact path="/" layout={Layout} component={Home} />
          <PublicRoute
            exact
            path="/speakers"
            layout={Layout}
            component={Speakers}
          />
          <PublicRoute
            exact
            path="/speakers/:id"
            layout={Layout}
            component={SpeakerDetails}
          />
          <PublicRoute
            exact
            path="/earphones"
            layout={Layout}
            component={Earphones}
          />
          <PublicRoute exact path="/cart" layout={Layout} component={Cart} />
          <PublicRoute
            exact
            path="/checkout"
            layout={Layout}
            component={Checkout}
          />
        </Switch>
      </CartContextProvider>
    </Router>
  );
}

export default App;
