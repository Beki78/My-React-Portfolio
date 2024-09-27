import { HoverBorderGradient } from "./ui/hover-border-gradient";


// eslint-disable-next-line react/prop-types
const ButtonColor = ({ name, func}) => {
 
  return (
    <div className=" flex justify-center text-center">
        <HoverBorderGradient
        onClick={func}
          as="button"
          className="dark:bg-transparent duration-500 ease-in-out  bg-slate-950 text-purple-300  flex items-center space-x-2"
        >
          <span className="font-semibold hover:text-white duration-200 ease-in-out ">
            {name}
          </span>
        </HoverBorderGradient>
    </div>
  );
};
// eslint-disable-next-line no-unused-vars


export default ButtonColor;
