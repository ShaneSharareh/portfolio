"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Next.js</li>
        <li>JavaScript</li>
        <li>ServiceNow</li>
        <li>ASP.NET</li>
        <li>C#</li>
        <li>AngularJS</li>
       
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <h5 className="text-lg">App Academy</h5>
          <p className="text-gray-400">Certificate</p>
          <p className="text-gray-500">01/2021</p>
        </li>
        <li>
        <h5 className="text-lg">California State University San Marcos</h5>
          <p className="text-gray-400">B.S. in Computer Science</p>
          <p className="text-gray-500">06/2017</p>

        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <h5 className="text-lg ">Software Engineer</h5>
          <p className="text-gray-400">Gnarlywood</p>
          <p className="text-gray-500">03/2023 - 05/2024</p>
         
        </li>
        <li>
          <h5 className="text-lg">Software Engineer</h5>
          <p className="text-gray-400">NewRocket</p>
          <p className="text-gray-500">06/2021 - 08/2022</p>
          
        </li>
        <li>
          <h5 className="text-lg">QA Tester</h5>
          <p className="text-gray-400">Kalloc Studios</p>
          <p className="text-gray-500">06/2019 - 03/2020</p>
          
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <h5 className="text-lg ">ServiceNow Certified System Administrator</h5>
          <p className="text-gray-500">Expected: 10/2024</p>
        </li>
        <li>
          <h5 className="text-lg "> ServiceNow
          Certified Application Developer</h5>
          <p className="text-gray-500">Expected: 11/2024</p>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div  className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-me.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">                
          Hi, my name is Shane Sharareh, I am a Software Engineer based in Vista, CA. I have a Bachelor&apos;s in Computer Science from California State University San Marcos and graduated from App Academy. I specialize in JavaScript, React, AngularJS, ASP.NET, C#, and Python. At NewRocket, I customized 6 ServiceNow portals and led an employee center portal project, boosting customer engagement by 50%. In my free time, I enjoy playing guitar and working out. Explore my work and get in touch!</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;