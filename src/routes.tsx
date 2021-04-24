import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product" exact component={Product} />
    </Switch>
  );
}
