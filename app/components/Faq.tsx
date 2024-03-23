"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";

const items = [
  {
    question: "What is BloxUI?",
    answer:
      "Blox UI is a comprehensive open-source React.js UI components library designed to simplify and streamline the process of building stunning user interfaces. With a rich collection of components, customizable styles, and responsive design features, Blox UI empowers developers to create complex layouts with ease.",
  },
  {
    question: "How do I get started with Blox UI?",
    answer:
      "Getting started with Blox UI is simple! You can install the library via npm or yarn by following our easy-to-use installation guide in the documentation. Once installed, explore our extensive component library, utilize our ready-to-use templates, and dive into our clear and concise documentation for seamless integration into your projects.",
  },
  {
    question: "Are Blox UI components customizable?",
    answer:
      "Yes! Blox UI components are highly customizable to match your project's branding and design requirements. Easily adjust colors, sizes, and styles using our intuitive props and styling options. Whether you need a quick tweak or a complete overhaul, Blox UI gives you the flexibility to create interfaces that stand out.",
  },
  {
    question: "Is Blox UI suitable for beginners?",
    answer:
      "Absolutely! Blox UI is designed to cater to developers of all levels, from beginners to seasoned professionals. With its easy-to-use components, clear documentation, and responsive support, Blox UI provides a friendly and accessible environment for developers to create beautiful interfaces without a steep learning curve.",
  },
  {
    question: "How often are updates released for Blox UI?",
    answer:
      "We are committed to providing regular updates and enhancements to the Blox UI library. Our team is constantly working to add new components, improve existing features, and address any issues reported by our community. Stay tuned to our GitHub repository for the latest updates."
  },
  {
    question: "How can I contribute to Blox UI??",
    answer:
      "We welcome contributions from the community! Whether it's reporting bugs, suggesting new features, or submitting pull requests, your input helps make Blox UI even better. Visit our GitHub repository to learn more about contributing guidelines and how you can get involved."
  },
  {
    question: "Still have questions?",
    answer:
      "If you have any other questions or need further assistance, feel free to reach out to our friendly support team. We're here to help you make the most out of Blox UI and ensure your UI development journey is a smooth and enjoyable one."
  },
];

export function Faq() {
  return (
    <div id="FAQ" className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Lets clarify some of your questions
        </h1>
        <p className="text-[#36485C] pb-[24px]">
          Here , we answered some of the questions you are likely to ask about BloxUI .
        </p>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        src={Plus}
                        alt="See more"
                        className="h-10 w-10 lg:w-6 lg:h-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
