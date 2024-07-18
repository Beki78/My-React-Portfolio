import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import  { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm("service_2byodpi", "template_bvnfdvm", form.current, {
         publicKey: "V9zzDoynjPinXgUYN",
       })
       .then(
         () => {
           console.log("SUCCESS!");
         },
         (error) => {
           console.log("FAILED...", error.text);
         }
       );
   }; 
  return (
    <div>
      <Navbar />
      <div className="pt-32 pb-12 bg-slate-950 text-cyan-100 xl:px-40 px-8 sm:px-12 md:px-14 lg:px-32  min-h-screen font-[Poppins]">
        <h1 className="text-3xl font-semibold text-cyan-600 text-center pb-5">
          Contact Me
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center pt-16">
          <div className="flex flex-col gap-y-3">
            <Link
              to="https://www.google.com/maps/place/Figa+traffic+lights/@9.0122192,38.8361614,19z/data=!4m6!3m5!1s0x164b9b6bb694e687:0xbf157fcbf89cf4e0!8m2!3d9.0124642!4d38.8369874!16s%2Fg%2F11pcm03kl6?entry=ttu"
              className="flex items-center gap-2"
            >
              <IoLocation className="text-xl" />
              <span>Addis Ababa around Gerji</span>
            </Link>
            <Link to="" className="flex items-center gap-2">
              <FaPhoneAlt className="text-xl" />
              <span>+251 9781 016 11</span>
            </Link>
            <Link
              to="mailto:your.bakiget78@gmail.com"
              className="flex items-center gap-2"
            >
              <MdEmail className="text-xl" />
              <span>bakiget78@gmail.com</span>
            </Link>

            <hr className="border-[1/4px] my-7 mr-32 border-cyan-300  hover:text-cyan-500" />
            <div className="text-2xl text-cyan-500 flex gap-12 justify-start  ">
              <Link to="https://www.linkedin.com/in/bereketgetachew/">
                <FaLinkedin className="border-cyan-300  hover:text-cyan-700  duration-100 ease-in" />
              </Link>
              <Link to="https://github.com/Beki78/">
                <FaGithub className="border-cyan-300  hover:text-cyan-700  duration-100 ease-in" />
              </Link>
              <Link to="https://t.me/BGM78BB">
                <FaTelegram className="border-cyan-300  hover:text-cyan-700  duration-100 ease-in" />
              </Link>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="flex  flex-col">
            <label htmlFor="email" className="text-cyan-400 text-md">
              Your name
            </label>
            <input
              type="text"
              name="from_name"
              id="text"
              className="bg-slate-900 rounded-lg p-3 text-sm focus:ring-2 focus:ring-inset focus:ring-cyan-600 outline-none mb-5"
              placeholder="Alemayehu"
              required
            />
            <label htmlFor="heading">Your email</label>
            <input
              type="email"
              name="to_name "
              id="heading"
              className="bg-slate-900 rounded-lg p-3 text-sm focus:ring-2 focus:ring-inset focus:ring-cyan-600 outline-none mb-5"
              placeholder="ex123@gmail.com"
              required
            />
            <label htmlFor="message">Your email</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="8"
              className="bg-slate-900 rounded-lg p-3 text-sm focus:ring-2 focus:ring-inset focus:ring-cyan-600 outline-none  mb-5"
              placeholder="Your message..."
              required
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="p-2 bg-cyan-700 hover:bg-cyan-600 duration-200 ease-in-out text-slate-900 font-bold border-2 border-cyan-900 my-3 w-40 rounded-md "
            />
              
            
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
