import Image from "next/image";
import Feature1 from "../../public/assets/Image.jpg";
import Feature2 from "../../public/assets/Image-1.jpg";
import Feature3 from "../../public/assets/Image-3.jpg";
import Check from "../../public/assets/check.svg";
import bluebutton from "../../public/assets/blue-button.svg";
import greenButton from "../../public/assets/green-button.svg";
import pinkButton from "../../public/assets/pink-button.svg";

export function Features() {
  return (
    <div id="Features" className="flex flex-col gap-y-[56px] py-[120px] lg:gap-y-[80px] ">
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature1}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px] ">
            Simplified Components
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Simplify your Process of Building Complex Layouts
          </h1>
          <Image
            src={Feature1}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
          Our comprehensive library of meticulously crafted React components, coupled with a powerful grid system, allows you to effortlessly create sophisticated designs.
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Vaierty of Designs
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Innovative yet Simple Components
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Easy to use Code
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
            <a href="https://uiblox.vercel.app/">Learn More{" "}</a>
            <span>
              <Image src={bluebutton} alt="Learn more" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src={Feature2}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#00A424] lg:text-[18px] ">
            Dynamic Styling
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Get in touch with our Dynamic way if Styling
          </h1>
          <Image
            src={Feature2}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
          Our library offers a versatile range of React components, each customizable to suit your project's unique aesthetic. Dive into a world of effortless styling with easy-to-use customization options.
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Customizable Components
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Pre-Built Variants
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Ready to go Themes
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]">
          <a href="https://uiblox.vercel.app/">Learn More{" "}</a>
            <span>
              <Image src={greenButton} alt="Learn more" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature3}
          alt="Feature 1 image"
          className="hidden rounded-2xl w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px] ">
            Multi Scaling
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Never Stoping Wave of Components
          </h1>
          <Image
            src={Feature3}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
          Our library is a dynamic ecosystem of React components that grows continuously, ensuring you always have access to the latest tools for crafting remarkable user interfaces.
          </p>

          <div className="flex w-full gap-x-[24px] ">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">00+</h3>
              <p className="text-[#36485C] ">Available Components</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">00+</h3>
              <p className="text-[#36485C]">OpenSource Commits</p>
            </div>
          </div>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]">
          <a href="https://uiblox.vercel.app/">Learn More{" "}</a>
            <span>
              <Image src={pinkButton} alt="Learn more" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
