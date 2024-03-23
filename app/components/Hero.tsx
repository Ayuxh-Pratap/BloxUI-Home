import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/overlay2.jpg";
import HeroImage from "../../public/assets/Laptop.png";

export function Hero() {
  return (
    <div id="Home" className="pt-16 lg:pt-[7rem]">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-bold text-[#172026] lg:text-[54px] lg:leading-[72px]">
          Unleash Creativity with Blox UI <br /><span className="hidden lg:block">Where Innovation Meets Simplicity</span>
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
          Fast-track Your Development Workflow No more spending hours reinventing the wheel. Blox UI streamlines your workflow, allowing you to integrate complex UI elements with just a few lines of code.
        </p>

        <div className="flex w-full pt-8 justify-center gap-x-6 ">
          <a className="bg-[#4328EB] text-center w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit" href="https://uiblox.vercel.app/">Get Started</a>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
            <a href="https://github.com/Ayuxh-Pratap/BloxUI" target="_blank">Git Repo</a>
            <span>
              <Image src={BlurArrow} alt="Learn more" />
            </span>
          </button>
        </div>
      </div>

      <div className="relative lg:flex hidden h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />

        <div className="absolute lg:bottom-[16rem] bottom-24 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt="hero image"
            className="-mx-0 h-[250px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />

          <div className="w-full absolute bottom-[-12rem] lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-[#FFFFFF] text-center lg:text-[18px] hidden lg:block">
              Trusted by Industrial Devs n Designers*
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
