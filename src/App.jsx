import { useState } from "react";
import "./App.css";
import "./index.css";
import HeadingComponent from "./Components/HeadingComponents";
import FoodList from "./Components/FoodListComponent";
import Footer from "./Components/FooterComponent";

function App() {
  
  return (
    <div>
      <HeadingComponent />
      <FoodList />
      <Footer/>
    </div>
  );
}

export default App;

