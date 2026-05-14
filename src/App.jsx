import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const dummyData = [
    {
      title: "Biryani",
      img: "https://th.bing.com/th/id/OIP.bMaDg5fHsyqpstZo0S8sqgHaE7?w=274&h=183&c=7&r=0&o=7&pid=1.7&rm=3",
      paragraph: "Bht hi barhiya Biryani, mazeydaar",
      quantity: 7,
    },
    {
      title: "Burger",
      img: "https://www.allrecipes.com/thmb/8Om8KljL3tDJ-Uqz4uvmBBAi9RQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/39748-actually-delicious-turkey-burgers-DDMFS-4x3-5b5996b0ff0b4590b7171592591cca96.jpg",
      paragraph: "Juicy burger with extra cheese",
      quantity: 12,
    },
    {
      title: "Pizza",
      img: "https://th.bing.com/th/id/OIP.VkZoqPxg7ydITTjLFRGPKgHaE8?w=249&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      paragraph: "Cheesy pizza with soft crust",
      quantity: 5,
    },
    {
      title: "Karahi",
      img: "https://th.bing.com/th/id/OIP.uqNybGp5XaZ8rOCd7LKWEgHaKM?w=203&h=279&c=7&r=0&o=7&pid=1.7&rm=3",
      paragraph: "Spicy chicken karahi full of taste",
      quantity: 9,
    },
    {
      title: "Nihari",
      img:"https://th.bing.com/th/id/OIP.3g7fx1dR2o7V8XuAo3maBQHaEq?w=292&h=185&c=7&r=0&o=7&pid=1.7&rm=3",
      paragraph: "Traditional nihari with soft meat",
      quantity: 4,
    },
    {
      title: "Pasta",
      img: "https://th.bing.com/th/id/OIP.6hiqFnp-Qq8bLSZMO_4wbAHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3",
      paragraph: "Creamy white sauce pasta",
      quantity: 10,
    },
    {
      title: "Fries",
      img: "https://th.bing.com/th/id/OIP.GqUvr8wmgKYa7LL8YpnGMAHaE7?w=230&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      paragraph: "Crispy french fries with ketchup",
      quantity: 15,
    },
    {
      title: "Shawarma",
      img: "https://th.bing.com/th/id/OIP.54H7cFwCZ16yDWwWuOAz1wHaEK?w=317&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      paragraph: "Arabic shawarma with garlic sauce",
      quantity: 6,
    },
    {
      title: "BBQ",
      img: "https://tse4.mm.bing.net/th/id/OIP.8Cyz6PMCXGfYz6zFodh2PAHaLH?w=575&h=863&rs=1&pid=ImgDetMain&o=7&rm=3",
      paragraph: "Smoky BBQ platter full of flavor",
      quantity: 8,
    },
    {
      title: "Ice Cream",
      img: "https://th.bing.com/th/id/OIP.K2tHIsQiqMl8CNtskRKjyAHaE7?w=273&h=183&c=7&r=0&o=7&pid=1.7&rm=3",
      paragraph: "Cold and sweet chocolate ice cream",
      quantity: 20,
    },
  ];
  return (
    <div>
      <h1 id="heading">Food Menu Application</h1>
      <h3
        style={{
          textAlign: "center",
        }}
      >
        Our Menu
      </h3>
      <p className="para">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quas fuga
        iusto dolorum natus reiciendis itaque quos voluptate veniam distinctio
        fugit impedit in ea dignissimos quasi ducimus quidem, ratione ex.
      </p>
      <ul id="foodList">
        {dummyData.map(function (foodItem) {
          return (
            <li>
              <div id="imgArea">
                <img src={foodItem.img}/>
              </div>
              <div>
                <h4>{foodItem.title}</h4>
                <p>{foodItem.paragraph}</p>
                <p>Quantity: {foodItem.quantity}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
