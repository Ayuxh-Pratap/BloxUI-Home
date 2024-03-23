import Image from "next/image";
import Check from "../../public/assets/check.svg";

export function Pricing() {
  return (
    <div id="Pricing" className="py-[48px] lg:py-[60px]">
      <h1 className="text-[#172026] text-center font-medium  text-2xl lg:text-[42px]">
        Flexible plans for you
      </h1>
      <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">
        No hidden fees!
      </p>

      <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Free Use
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Perfect for Just Using Components
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              Rs.0<span className="text-[#5F7896]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Unlimited Components
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Free React/Next SourceCode
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Access to Variants 
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Browse Components
          </button>
        </div>

        <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col">
          <div className="w-full rounded-[8px] p-6 flex flex-col lg:justify-between">
            <h3 className="font-medium text-white text-[18px] lg:text-xl">
              Business
            </h3>
            <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">
              Perfect for small businesses
            </p>

            <h2 className="pt-4 text-2xl font-medium text-white lg:text-[32px]">
              Rs.500<span className="text-[#F4F8FA]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Custom Components
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                  Modern Web Solutions
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                Performance Optimization
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="included" />
                </span>
                SEO + Scaling
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Starting Soon!
          </button>
        </div>

        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Enterprise
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Perfect for big companies
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">Custom</h2>

            <p className="pt-4 text-[16px] text-[#36485C]">
            With our custom subscription, you gain the ability to request custom components tailored to your projects unique requirements.
            </p>
            <p className="pt-2 text-[16px] text-[#36485C]">
            Need a specialized chart, or a custom data visualization? Our team of skilled developers is here to bring your ideas to life.
            </p>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
