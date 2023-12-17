import React from "react";

const Paragraph = ({ text, className}) => {

  return <p className={`${className}: font-Nunito`}>{text}</p>;
};

export default Paragraph;