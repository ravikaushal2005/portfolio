import React, { useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_33dt99d" ,
       "template_ki0htok" ,
        {
          from_name: form.name,
          to_name: "Ravi Kaushal",
          from_email: form.email,
          to_email: "ravikaushal7284@gmail.com", // ✅ FIXED
          message: form.message,
        },
      "SYjzensbfpdxCg1mJ"

      )
      .then(
        () => {
          setLoading(false);
          alert("✅ Message sent successfully!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("❌ Something went wrong. Try again!");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      
      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none"
            required
          />

          {/* Message */}
          <textarea
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none"
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl text-white font-bold"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Social Icons */}
        <div className="mt-8 flex gap-6 text-2xl text-white">
          <a href="https://www.linkedin.com/in/ravi-kaushal-697a7732b" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://github.com/ravikaushal2005" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://instagram.com/ravikaushal_18_" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

          <a href="https://wa.me/917543074709" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </motion.div>

      {/* 3D Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");