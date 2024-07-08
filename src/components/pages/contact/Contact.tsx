"use client";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ahfba009@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "01609408970",
  },
];

const Contact = () => {
  return (
    <section className="mt-24 pb-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1.4,
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
        className="container mx-auto"
      >
        {/* title */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl text-white/60">Get in touch</h1>
        </div>
        {/* contact section */}
        <div
          className="flex gap-[30px] xl:gap-20 flex-col  items-center xl:items-start xl:flex-row mt-8
       xl:justify-center
        "
        >
          {/* col 1 */}
          <div className="w-full xl:w-auto">
            <ContactForm />
          </div>
          {/* col 2 */}
          <div>
            <h3 className="text-white/60 mb-3"> Talk to me </h3>
            {/* contact card section */}
            <ul className="flex flex-col gap-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="h-[50px] w-[50px] bg-[#27272c] flex items-center justify-center text-[28px] text-accent">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white/60"> {item.title} </h3>
                    <p className="text-xl">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Contact;
