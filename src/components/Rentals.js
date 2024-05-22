import React from "react";
import house1 from "../assets/marbella/image1.jpg";
import house2 from "../assets/shortlet1/image1.jpg";
import house3 from "../assets/shortlet2/image1.jpg";
import house4 from "../assets/shortlet3/image1.jpg";
import house5 from "../assets/shortlet4/image1.jpg";
import house6 from "../assets/bloomHaven/image1.jpg";
import house7 from "../assets/fairmont/image3.jpg";
import house8 from "../assets/lakeview/image1.jpg";
import house9 from "../assets/shortlet1/image2.jpg";
import house10 from "../assets/shortlet2/image2.jpg";
import house11 from "../assets/shortlet3/image2.jpg";
import house12 from "../assets/shortlet4/image2.jpg";
import house13 from "../assets/bloomHaven/image4.jpg";
import house14 from "../assets/fairmont/image2.jpg";
import house15 from "../assets/lakeview/image2.jpg";
import house16 from "../assets/bloomHaven/image2.jpg";
import house17 from "../assets/fairmont/image4.jpg";
import house18 from "../assets/lakeview/image3.jpg";
import house19 from "../assets/marbella/image5.jpg";
import house20 from "../assets/shortlet1/image3.jpg";
import house21 from "../assets/shortlet2/image3.jpg";
import house22 from "../assets/shortlet3/image3.jpg";
import house23 from "../assets/shortlet4/image3.jpg";
import Rental from "./Rental";

const Rentals = () => {
  const rentals = [
    { title: "Texas, USA", image: house1, price: "1,541" },
    {
      title: "Ikate, Lagos",
      image: house2,
      price: "180,000/night",
      name: "City View",
      location: "Ikate, Lagos",
    },
    {
      title: "Ikate, Lagos",
      image: house3,
      price: "140,000/night",
      name: "Eden",
      location: "Penthouse Ikate, Lekki, Lagos",
    },
    {
      title: "Ikate, Lagos",
      image: house4,
      price: "110,000/night",
      name: "Maranatha",
      location: "Ikate, Lagos",
    },
    { title: "Ikate, Lagos", image: house5, price: "55,000 - ₦60,000" },
    { title: "Texas, USA", image: house6, price: "1,541" },
    { title: "Texas, USA", image: house7, price: "1,541" },
    { title: "Texas, USA", image: house8, price: "1,541" },
    {
      title: "Ikate, Lagos",
      image: house9,
      price: "180,000/night",
      name: "City View",
      location: "Ikate, Lagos",
    },
    {
      title: "Ikate, Lagos",
      image: house10,
      price: "140,000/night",
      name: "Eden",
      location: "Penthouse Ikate, Lekki, Lagos",
    },
    {
      title: "Ikate, Lagos",
      image: house11,
      price: "110,000/night",
      name: "Maranatha",
      location: "Ikate, Lagos",
    },
    { title: "Ikate, Lagos", image: house12, price: "55,000 - ₦60,000" },
    { title: "Texas, USA", image: house13, price: "1,541" },
    { title: "Texas, USA", image: house14, price: "1,541" },
    { title: "Texas, USA", image: house15, price: "1,541" },
    { title: "Texas, USA", image: house16, price: "1,541" },
    { title: "Texas, USA", image: house17, price: "1,541" },
    { title: "Texas, USA", image: house18, price: "1,541" },
    { title: "Texas, USA", image: house19, price: "1,541" },
    {
      title: "Ikate, Lagos",
      image: house20,
      price: "180,000/night",
      name: "City View",
      location: "Ikate, Lagos",
    },
    {
      title: "Ikate, Lagos",
      image: house21,
      price: "140,000/night",
      name: "Eden",
      location: "Penthouse Ikate, Lekki, Lagos",
    },
    {
      title: "Ikate, Lagos",
      image: house22,
      price: "110,000/night",
      name: "Maranatha",
      location: "Ikate, Lagos",
    },
    { title: "Ikate, Lagos", image: house23, price: "55,000 - ₦60,000" },
  ];
  return (
    <div className="py-3 mt-20 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {rentals.map((rental, index) => (
          <Rental
            index={index}
            title={rental.title}
            image={rental.image}
            price={rental.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Rentals;
