import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";

function App() {
  const counter = useSelector((state) => state.counters.counter);
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  console.log(products);
  console.log(counter);

  return (
    <div className="App">
      <Header />
      <h1>Hello world</h1>
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
      </button>
      <ProductsList />
    </div>
  );
}

export default App;
