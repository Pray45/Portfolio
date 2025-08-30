"use client";

import TextType from "@/components/TextTypeProps";
import TechIcon from "@/components/TechIcon";
import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

export default function Home() {
  const projects = [
    {
      title: "Noice",
      description: "Noice where music comes alive, a sleek and powerful full-stack music streaming web-app designed to bring your favorite tunes to your fingertips. Built with modern web technologies, Noice offers an immersive, intuitive, and customizable way to listen",
      link: "https://noice-cv.vercel.app/",
      image: "/noice.png",
      status: "Maintenance",
    },
    {
      title: "Complete-Auth",
      description:
        "The Authentication System is a secure,built with a modern tech stack including Node.js, Express, MongoDB, Zod, Nodemailer and a Next.js frontend. It supports traditional email-password authentication, OTP verification,",
      link: "https://nimbus-brown.vercel.app/",
      image: "/auth.png",
      status: "Completed",
    },
    {
      title: "Potter's chrome",
      description:
        "a custom browser home page UI with a Harry Potter theme, built purely in HTML, CSS, and vanilla JavaScript",
      link: "https://coustom.netlify.app/",
      image: "/potterschrome.png",
      status: "Completed",
    },
  ];

  const socials = [
    {
      name: "LinkedIn",
      username: "Pray Patel",
      icon: <FaLinkedin className="text-blue-500 text-2xl" />,
      link: "https://www.linkedin.com/in/pray-patel/",
    },
    {
      name: "GitHub",
      username: "Pray45",
      icon: <FaGithub className="text-white text-2xl" />,
      link: "https://github.com/Pray45",
    },
    {
      name: "Instagram",
      username: "@patel_pray45",
      icon: <FaInstagram className="text-pink-500 text-2xl" />,
      link: "https://www.instagram.com/patel_pray45/",
    },
    {
      name: "X",
      username: "@patel_pray26161",
      icon: <FaXTwitter className="text-white text-2xl" />,
      link: "https://x.com/patel_pray26161",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPos({ x: e.clientX + 20, y: e.clientY + 20 });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-600 text-green-100";
      case "In Progress":
        return "bg-yellow-600 text-yellow-100";
      case "Maintenance":
        return "bg-red-600 text-red-100";
      default:
        return "bg-gray-600 text-gray-100";
    }
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Dot pattern header */}
      <div className="w-full border-t border-b border-[#1b1b1e] flex justify-center">
        <div className="dot_pattern flex-col w-full px-5  sm:w-200 sm:border-l sm:border-r border-[#1b1b1e] h-35 sm:h-50 flex justify-center">
          <h1 className="p-2 sm:p-5 text-xs sm:text-lg">Pray@arch: ~$ Sudo rm -rf /*</h1>
          <h1 className="p-2 sm:pl-5 text-xs sm:text-lg">Pray@arch: ~$ echo &quot;Just trying to do better than yesterday.&quot;</h1>
        </div>
      </div>

      {/* Profile Section */}
      <section className="flex relative w-full sm:w-200 sm:mx-auto sm:border-l sm:border-r border-[#1b1b1e]">
        <div className="lines_pattern hidden sm:flex absolute inset-0 opacity-50"></div>
        <div className="flex px-5 relative z-10 bg-[#0b0b0d] w-fit sm:border-l sm:border-r border-[#1b1b1e]">
          <img src="/profile.jpeg" className="rounded-full w-25 sm:w-45" alt="Pray Patel profile picture" />
        </div>
        <div className="self-end relative bg-[#0b0b0d] w-full">
          <h1 className="text-4xl sm:text-5xl border-b sm:border-t border-[#1b1b1e] py-1.5 sm:py-3">
            Pray Patel
          </h1>
          <span className="sm:text-xl">&gt; </span>
          <TextType
            text={["Hey Pray here..!", "MERN Developer", "Work in progress..."]}
            className="sm:text-xl"
            typingSpeed={150}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            textColors={["hsl(var(--foreground))"]}
          />
        </div>
      </section>

      {/* Separator */}
      <div className="lines_pattern w-full border-t border-b border-[#1b1b1e] flex justify-center items-center">
        <div className="hidden sm:block w-200 border-l border-r border-[#1b1b1e] h-10"></div>
        <div className="sm:hidden h-10 w-full"></div>
      </div>

      {/* About Me */}
      <div className="w-full px-5  sm:w-200 sm:mx-auto sm:border-l sm:border-r border-[#1b1b1e]">
        <h1 className="text-3xl py-5">About me</h1>
      </div>
      <div className="w-full border-t    border-b border-[#1b1b1e] flex justify-center items-center">
        <div className="w-full px-5  sm:w-200 sm:border-l sm:border-r border-[#1b1b1e]">
          <p className="py-5">
            Hey there, I&apos;m <span className="font-semibold">Pray Patel</span>.  
            With a strong interest in <span className="text-[#00FF88]">Developing something</span>, I enjoy learning new skills, tackling challenges, and finding creative solutions to problems.
          </p>
          <p>
            I&apos;m currently pursuing my <span className="font-medium">B.Tech in CSE</span> at <span className="font-medium">GEC Patan</span> (2nd year).  
            I am Campus Organizer of <span className="text-[#00FF88]">GDGoC</span> at Gec patan. Actively attending and organizing tech events/workshops on campus, I&apos;m highly motivated to engage in and contribute to tech communities.
          </p>
        </div>
      </div>

      {/* Separator */}
      <div className="lines_pattern w-full border-t border-b border-[#1b1b1e] flex justify-center items-center">
        <div className="hidden sm:block w-200 border-l border-r border-[#1b1b1e] h-10"></div>
        <div className="sm:hidden h-10 w-full"></div>
      </div>

      {/* Projects */}
      <div className="lines_pattern w-full border-t border-b border-[#1b1b1e]"></div>
      <div className="w-full px-5  sm:w-200 sm:mx-auto sm:border-l sm:border-r border-[#1b1b1e]">
        <h1 className="text-3xl py-5">Side Projects...</h1>
      </div>
      <div className="w-full border-t border-b border-[#1b1b1e] flex justify-center relative">
        <div className="mx-5 sm:mx-0 w-full sm:w-200 border-l border-r border-[#1b1b1e] px-5 py-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div
              key={i}
              className="border border-[#1b1b1e] bg-[#0b0b0d] hover:bg-[#111113] transition rounded-lg p-4 flex flex-col justify-between relative"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onMouseMove={handleMouseMove}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold">{p.title}</h2>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      p.status
                    )}`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{p.description}</p>
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm text-blue-500 hover:underline"
              >
                View Project ↗
              </a>
            </div>
          ))}
        </div>

        {/* Hover Preview */}
        {hovered !== null && (
          <img
            src={projects[hovered].image}
            alt="Project preview"
            className="fixed pointer-events-none rounded-lg shadow-lg border border-[#1b1b1e] transition-opacity duration-200"
            style={{
              top: `${pos.y}px`,
              left: `${pos.x}px`,
              width: "250px",
            }}
          />
        )}
      </div>

      {/* Tech Stack */}
      <div className="lines_pattern w-full border-t border-b border-[#1b1b1e] flex justify-center items-center">
        <div className="hidden sm:block w-200 border-l border-r border-[#1b1b1e] h-10"></div>
        <div className="sm:hidden h-10 w-full"></div>
      </div>
      <div className="w-full px-5  sm:w-200 sm:mx-auto sm:border-l sm:border-r border-[#1b1b1e]">
        <h1 className="text-3xl py-5">Tech Stack</h1>
      </div>
      <div className="w-full border-t border-b border-[#1b1b1e] flex justify-center items-center">
        <div className="w-full px-5  sm:w-200 sm:border-l sm:border-r border-[#1b1b1e]">
          {/* Frontend */}
          <div className="flex py-5">
            <h1 className="text-xl w-30 sm:w-40 py-2">Frontend</h1>
            <div className="flex gap-5 sm:gap-10 flex-wrap">
              <TechIcon src="/stack/react.svg" label="React" /> 
              <TechIcon src="/stack/tailwindcss.svg" label="Tailwind CSS" />
              <TechIcon src="/stack/nextjs2-dark.svg" label="Next.js" />
            </div>
          </div>
          {/* Backend */}
          <div className="lines_pattern border-t border-b border-[#1b1b1e]"></div>
          <div className="flex py-5">
            <h1 className="text-xl w-30 sm:w-40 py-2">Backend</h1>
            <div className="flex gap-5 sm:gap-10 flex-wrap">
              <TechIcon src="/stack/nodejs.svg" label="Node.js" />
              <TechIcon src="/stack/express.svg" label="express.js" />
            </div>
          </div>
          {/* Database */}
          <div className="lines_pattern border-t border-b border-[#1b1b1e]"></div>
          <div className="flex py-5">
            <h1 className="text-xl w-30 sm:w-40 py-2">Database</h1>
            <div className="flex gap-5 sm:gap-10 flex-wrap">
              <TechIcon src="/stack/mongodb.svg" label="MongoDB" />
              <TechIcon src="/stack/redis.svg" label="Redis" />
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="lines_pattern w-full border-t border-b border-[#1b1b1e] flex justify-center items-center">
        <div className="hidden sm:block w-200 border-l border-r border-[#1b1b1e] h-10"></div>
        <div className="sm:hidden h-10 w-full"></div>
      </div>

      {/* Social Links */}
      <div className="lines_pattern w-full border-t border-b border-[#1b1b1e]"></div>
      <div className="w-full px-5  sm:w-200 sm:mx-auto sm:border-l sm:border-r border-[#1b1b1e]">
        <h1 className="text-3xl py-5">Find me here...</h1>
      </div>
      <div className="lines_pattern border-t border-b border-[#1b1b1e]"></div>
      <div className="mx-5 sm:mx-0 w-full sm:w-200 border-r border-l border-[#1b1b1e] self-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#1b1b1e]">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-5 py-4 hover:bg-[#111113] transition border border-[#1b1b1e]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-md bg-[#0f0f10]">
                  {s.icon}
                </div>
                <div>
                  <p className="font-medium">{s.name}</p>
                  <p className="text-sm text-gray-400">{s.username}</p>
                </div>
              </div>
              <span className="text-gray-500">↗</span>
            </a>
          ))}
        </div>
      </div>

      <div className="lines_pattern w-full border-t border-b border-[#1b1b1e] flex justify-center items-center">
        <div className="hidden sm:block w-200 border-l border-r border-[#1b1b1e] h-10"></div>
        <div className="sm:hidden h-10 w-full"></div>
      </div>

      <div className="w-full px-5  sm:w-200 sm:mx-auto sm:border-l sm:border-r border-[#1b1b1e]">
        <h1 className="text-3xl py-20"></h1>
      </div>
    </div>
  );
}
