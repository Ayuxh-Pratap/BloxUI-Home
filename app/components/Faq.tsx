"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";

const items = [
  {
    question: "What is BloxUI?",
    answer:
      "BloxUI is a OpenSource , React-Tailwind Components Liberary which Provide One Stop Solution to Devlopers and Designers for their UI work . Our mission is simple: to provide developers with a seamless, one-stop solution for building stunning user interfaces.",
  },
  {
    question: "Is BloxUI Open Source?",
    answer:
      "Open Source, Community-Driven Excellence Blox UI is proudly open source, powered by a vibrant community of developers like you. Join us in shaping the future of UI development, contribute your ideas, and collaborate on making Blox UI the go-to resource for UI excellence.",
  },
  {
    question: "Why BloxUI! Inspiration and Idea Behind it?",
    answer:
      "As a Developer , I not always want to install dependencies to use UI Liberaries . To tackle this problem i always want to serch for code throughout the web and now we have BLOXUI",
  },
  {
    question: "What can we Except from BloxUI?",
    answer:
      "Building Blocks for Effortless UI Development With Blox UI, you can expect a comprehensive collection of meticulously crafted React.js components. Each component is designed with flexibility and reusability in mind, serving as the perfect building blocks for your next project.",
  },
  {
    question: "How BloxUI is made?",
    answer:
      "well...",
  },
];

export function Faq() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Lets clarify some of your questions
        </h1>
        <p className="text-[#36485C] pb-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
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
