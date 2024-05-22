import React from "react";
import { useLocation } from "react-router-dom";

const SinglePage = () => {
  const { title, image, price } = useLocation().state;
  console.log(title, image, price);
  return (
    <div>
      <img src={image} alt="main" />
    </div>
  );
};

export default SinglePage;
