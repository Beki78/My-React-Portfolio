import footerGrid from "/src/public/footer-grid.svg";
import ButtonColor from "./ButtonColor";

const socialMedia = [
  {
    id: 1,
    img: "https://skillicons.dev/icons?i=github",
  },
  {
    id: 2,
    img: "https://skillicons.dev/icons?i=gmail",
  },
  {
    id: 3,
    img: "https://skillicons.dev/icons?i=linkedin",
  },
];

const Footer = () => {
  return (
    <footer className="relative   w-full bg-slate-950 pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 bottom-0 min-h-96">
        <img
          src={footerGrid}
          alt="grid"
          className="w-full h-full opacity-70 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center  text-white lg:max-w-[45vw]">
          Ready to take <span className="text-purple-400">your</span> digital
          presence to the <span className="text-purple-400">next level</span>?
        </h1>
        <p className="text-white md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className=" flex justify-center  text-center">
          <ButtonColor
            name="Contact Me 👨‍💻"
            func={() => (window.location.href = "mailto:bakiget78@gmail.com")}
          />
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center px-64  text-white">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Bereket
        </p>

        <div className="flex items-center md:gap-3 gap-6 ">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer hover:-translate-y-1 duration-300 ease-in-out flex justify-center items-center  text-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
        <p className="md:text-base text-sm md:font-normal font-light">
          Phone: +251-9781-016-11
        </p>
      </div>
    </footer>
  );
};

export default Footer;
