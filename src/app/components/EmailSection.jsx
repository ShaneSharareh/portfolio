"use client"

import React, { useState } from "react";


const EmailSection = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:${"shane.s.sharareh@gmail.com"}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    // Open the default email client
    window.location.href = mailtoLink;

    // Clear form inputs after submission (optional)
    setSubject("");
    setMessage("");
  };

  return (
    <section id="contact" className="max-w-max mx-auto my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h2 class="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Contact:</h2>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I am actively seeking new opportunities. Whether you have a question or would like to connect, please feel free to reach out. I will respond promptly.
        </p>
        <a
  href="mailto:shane.s.sharareh@gmail.com"
  className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full text-center block"
>
  Let's Connect
</a>
      </div>
      <div>
       
      </div>
    </section>
  );
};

export default EmailSection;