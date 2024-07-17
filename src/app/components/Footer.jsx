import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email.svg";
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <div className="z-10">
        
        <div className="socials flex gap-4 items-center">
  <Link href="https://github.com/ShaneSharareh">
    <Image src={GithubIcon} alt="Github Icon" width={40} height={40} />
  </Link>
  <Link href="https://www.linkedin.com/in/shanesharareh/">
    <Image src={LinkedinIcon} alt="Linkedin Icon" width={40} height={40} />
  </Link>
  <Link href="mailto:shane.s.sharareh@gmail.com">
    <Image src={EmailIcon} alt="Email Icon" width={40} height={40} />
  </Link>
</div>
</div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;