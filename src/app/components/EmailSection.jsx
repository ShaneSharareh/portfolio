"use client"

import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email.svg";
import Link from "next/link";
import Image from "next/image";

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
    <section className="max-w-max mx-auto my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h1 className="text-xl text-4xl font-bold text-white my-2">Contact</h1>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll get back to you ASAP!
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