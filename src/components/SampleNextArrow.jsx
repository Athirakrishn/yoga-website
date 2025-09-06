import { IoIosArrowForward } from "react-icons/io";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        right: "-40px",
        zIndex: 10,
        position: "absolute",
        top: "40%",
        cursor: "pointer",
        fontSize: "30px",
        color: "black",
      }}
    >
      <IoIosArrowForward/>
    </div>
  );
}



export default SampleNextArrow