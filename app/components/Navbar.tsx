import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

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

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <h1 className="text-3xl font-black">Blox UI.</h1>
      </div>

      <div className="flex gap-x-5">
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <a href={item.id} className="text-[#36485C] font-medium" key={index}>
              {item.name}
            </a>
          ))}
        </div>
        <Image src={User} alt="Menu Button" className="lg:hidden" />
      </div>
    </nav>
  );
}
