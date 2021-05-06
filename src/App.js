import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  const counter = useSelector((state) => state.counters.counter);
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  console.log(products);
  console.log(counter);

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={ProductsList} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

{
  /* <h1>Hello world</h1>
<p>{counter}</p>
<button
  onClick={() =>
    dispatch({
      type: "INCREMENT",
    })
  }
>
  +
</button>
<button
  onClick={() =>
    dispatch({
      type: "DECREMENT",
    })
  }
>
  -
</button> */
}
