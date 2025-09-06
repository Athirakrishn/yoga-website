import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        left: "-40px",
        zIndex: 10,
        position: "absolute",
        top: "40%",
        cursor: "pointer",
        fontSize: "30px",
        color: "black",
      }}
    >
      <IoIosArrowBack />
    </div>
  );
}


export default SamplePrevArrow
