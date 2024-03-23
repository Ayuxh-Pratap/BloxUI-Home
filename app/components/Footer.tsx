import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Twitter from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";
import { IoIosMailUnread } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function Footer() {

  const navLinks = [
    {
      name: "Home",
      id: "#"
    },
    {
      name: "Features",
      id: "#Features"
    },
    {
      name: "FAQ's",
      id: "#FAQ"
    },
    {
      name: "Pricing",
      id: "#Pricing"
    },
  ];

  return (
    <div className="pt-[80px] pb-[40px]">
      <div className="flex items-center justify-center gap-x-[12px]">
        <h1 className="text-3xl font-black">Blox UI.</h1>
        <p className="font-bold text-[#36485C] text-[17px]">by: Ayush Pratap Singh</p>
      </div>

      <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
        {navLinks.map((item, index) => (
          <a href={item.id} className="text-[#36485C] font-medium" key={index}>
            {item.name}
          </a>
        ))}
      </ul>

      <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
        © Copyright 2024. Blox UI . All rights reserved.
      </p>

      <div className='flex items-center justify-center gap-6 pt-[56px] sm:pt-5 text-gray-700'>
        <a href='mailto:ayuaharshita14@gmail.com' className='text-2xl'><IoIosMailUnread /></a>
        <a href='https://github.com/Ayuxh-Pratap' className='text-2xl'><FaGithub /></a>
        <a href='https://wa.me/9460865839' className='text-2xl'><FaWhatsapp /></a>
      </div>
    </div>
  );
}
