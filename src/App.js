import { React } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from "./components/Navigationbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards";

function App() {
  const navigation = ["Home", "About", "Contact", "hello"];
  const card = ["omar", "kamal", "wajdi"];
  return (
    <>
      <Navigationbar navigation={navigation} />
      <div style={{ display: "flex" }}>
        <Cards card={card} />
      </div>
    </>
  );
}

export default App;
