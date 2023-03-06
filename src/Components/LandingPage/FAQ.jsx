import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";

const plus = (
  <BsPlus className="bg-emerald-600 text-white rounded-full min-w-fit" />
);
const minus = (
  <BiMinus className="bg-emerald-600 text-white rounded-full min-w-fit" />
);

function Icon({ id, open }) {
  return (
    <svg
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    ></svg>
  );
}

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <section
      id="faqs"
      className="w-screen flex flex-col justify-between items-center px-[5%] md:px-[10%]"
    >
      <div className="text-center mb-24">
        <h1 className="text-4xl font-bold mb-6">Frequently asked questions</h1>
        <p>
          Have a specific question? Check out our <br />
          <button
            type="button"
            className="text-customBlue font-semibold cursor-pointer px-4 py-2 rounded-sm border-[1px] border-customBlue mt-6"
          >
            Support Center
          </button>
        </p>
      </div>
      <div className="max-w-xl">
        <Accordion open={open === 1} icon={<Icon />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            <p className="flex justify-center items-center text-start gap-4 py-0">
              {open === 1 ? minus : plus}
              How long does it take to hire Developers?
            </p>
          </AccordionHeader>
          <AccordionBody>
            The entire process takes around 2-10 days. A clear job description
            and fast interview turnarounds can reduce this duration.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            <p className="flex justify-center items-center text-start gap-4">
              {open === 2 ? minus : plus}
              How are the developer's skills verified?
            </p>
          </AccordionHeader>
          <AccordionBody>
            Firstly, we understand their technical knowledge through Technical
            Test. Secondly, we manually verify all data points through different
            sources to ensure the highest quality of talent.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            <p className="flex justify-center items-center text-start gap-4">
              {open === 3 ? minus : plus}
              How does the payment cycle work?
            </p>
          </AccordionHeader>
          <AccordionBody>
            Monthly to yearly, we have different options that companies can
            choose from.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon />}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            <p className="flex justify-center items-center text-start gap-4">
              {open === 4 ? minus : plus}
              What if you want to add or remove developers?
            </p>
          </AccordionHeader>
          <AccordionBody>
            We assign every company an account manager. Please do reach out to
            your point of contact to add and remove developers as per
            requirement.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} icon={<Icon />}>
          <AccordionHeader onClick={() => handleOpen(5)}>
            <p className="flex justify-center items-center text-start gap-4">
              {open === 5 ? minus : plus}
              Can we hire them on a permanent basis?
            </p>
          </AccordionHeader>
          <AccordionBody>
            Yes you can hire them on permanent basis, after 6 months of contact
            pay one fixed finding fees and hire them on your payroll, Try before
            you buy. We are really flexible depends on your need.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 6} icon={<Icon />}>
          <AccordionHeader onClick={() => handleOpen(6)}>
            <p className="flex justify-center items-center text-start gap-4">
              {open === 6 ? minus : plus}
              Who are the Experts?
            </p>
          </AccordionHeader>
          <AccordionBody>
            Our Experts are highly experienced industry experts, IIT alumni
            working at some of the best tech companies in the world.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(7)}>
            <p className="flex justify-center items-center text-start gap-4">
              {open === 7 ? minus : plus}
              Is it possible to get the developers on location?
            </p>
          </AccordionHeader>
          <AccordionBody>
            We recently started in Metro cities in India and Globally; Check
            with sales team for feasibility! So far we deployed only 700
            engineers at location.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 8} icon={<Icon />}>
          <AccordionHeader onClick={() => handleOpen(8)}>
            <p className="flex justify-center items-center text-start gap-4">
              {open === 8 ? minus : plus}
              Who is eligible for the program ?
            </p>
          </AccordionHeader>
          <AccordionBody>
            Working professionals,company's, under graduate and post graduated
            students ,with an intent to apply for software developer jobs at the
            end of the program can apply.
          </AccordionBody>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
