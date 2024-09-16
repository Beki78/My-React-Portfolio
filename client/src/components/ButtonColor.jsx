import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { Link } from "react-scroll";


// eslint-disable-next-line react/prop-types
const ButtonColor = ({to}) => {
  return (
    <div className=" flex justify-center text-center">
      <Link to={to} smooth={true} duration={500}>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-transparent duration-500 ease-in-out  bg-slate-950 text-purple-300  flex items-center space-x-2"
        >
          <span className="font-semibold hover:text-white duration-200 ease-in-out ">
            Contact Me 👨‍💻
          </span>
        </HoverBorderGradient>
      </Link>
    </div>
  );
};
// eslint-disable-next-line no-unused-vars
const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ButtonColor;
