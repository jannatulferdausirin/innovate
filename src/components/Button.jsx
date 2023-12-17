import React from "react";

const Button = ({ text, className }) => 
{
  return   <button className={` ${className}: bg-orange-500 py-2 px-5 rounded-full  text-white hover:bg-black duration-500 ease-out`}>{text}</button>;
};

export default Button;