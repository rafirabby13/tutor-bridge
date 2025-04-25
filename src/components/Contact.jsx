/* eslint-disable react/no-unescaped-entities */
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import Swal from "sweetalert2";
import ContactInfo from "./ContactInfo.jsx";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Send Emil to Rafi?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send Email!",
    }).then((result) => {
      if (result.isConfirmed) {
        emailjs
          .sendForm("service_vpkxgkp", "template_qut7tdf", form.current, {
            publicKey: "u6maY1mTe0XfC72by",
          })
          .then(
            () => {
              // console.log("SUCCESS!");
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
        Swal.fire({
          title: "Email Sent!",
          text: "Your file has been sent.",
          icon: "success",
        });
        e.target.reset();
      }
    });
  };
  return (
    <div className=" py-10 " id="contact">
      <div className="container mx-auto px-4">
        <div className="md:w-3/5">
          <h2 className="text-xl md:text-4xl font-bold  mb-4 p-2 md:p-6 shadow-md shadow-blue-400">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 contact">
          {/* Left Section: Form */}
          <div className=" p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold text-[#DAD3BE] mb-6">
              Get in Touch
            </h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block  font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mt-2 p-3   rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02995D]"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block  font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-2 p-3   rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02995D]"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block  font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full mt-2 p-3   rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02995D] "
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button className="w-full text-[#eae5d7] bg-[#6B8A7A] py-2 px-4 text-xl font-semibold rounded hover:bg-[#6B8A7A] transition duration-300">
                Send Email
              </button>
            </form>
          </div>

          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
