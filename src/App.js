import axios from "axios";

function App() {
  axios({
    method: "get",
    url: "https://fakestoreapi.com/products",
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log("error aya h"));
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
