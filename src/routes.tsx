import { Route, Switch } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
