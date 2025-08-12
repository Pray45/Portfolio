import TextType from "@/components/TextTypeProps";
import TechIcon from "@/components/TechIcon";
import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

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
    username: "@yourXUsername",
    icon: <FaXTwitter className="text-white text-2xl" />,
    link: "https://x.com/yourXUsername",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full h-500 overflow-x-hidden">

      {/* Dot pattern header */}
      <div className="w-full border-t border-b border-[#1b1b1e] flex justify-center">
        <div className="dot_pattern w-full px-5 sm:px-0 sm:w-2/5 sm:border-l sm:border-r border-[#1b1b1e] h-35 sm:h-50 flex justify-center items-center">
          <h1>Pray Patel</h1>
        </div>
      </div>

      {/* Profile Section */}
      <section className="flex relative w-full sm:w-2/5 sm:mx-auto sm:border-l sm:border-r border-[#1b1b1e]">
        <div className="lines_pattern hidden sm:flex absolute inset-0 opacity-50"></div>

        <div className="flex px-5 relative z-10 bg-[#0b0b0d] w-fit sm:border-l sm:border-r border-[#1b1b1e]">
          <img src="/profile.jpeg" className="rounded-full w-25 sm:w-45" alt="" />
        </div>

        <div className="self-end relative bg-[#0b0b0d] w-full">
          <h1 className="text-4xl sm:text-5xl border-b sm:border-t border-[#1b1b1e] py-1.5 sm:py-3">
            Pray Patel
          </h1>
          <span className="sm:text-xl">&gt; </span>
          <TextType
            text={["Hey Pray here..!", "Backend Engineer", "Work in progress..."]}
            className="sm:text-xl"
            typingSpeed={150}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            textColors={["hsl(var(--foreground))"]}
          />
        </div>
      </section>

      {/* Horizontal line separator */}
      <div className="lines_pattern w-full border-t border-b border-[#1b1b1e] flex justify-center items-center">
        <div className="hidden sm:block w-2/5 border-l border-r border-[#1b1b1e] h-10"></div>
        <div className="sm:hidden h-10 w-full"></div>
      </div>

      {/* About Me Heading */}
      <div className="w-full px-5 sm:px-0 sm:w-2/5 sm:mx-auto sm:border-l sm:border-r border-[#1b1b1e]">
        <h1 className="text-3xl py-5">About me</h1>
      </div>

      {/* About Me Text */}
      <div className="w-full border-t border-b border-[#1b1b1e] flex justify-center items-center">
        <div className="w-full px-5 sm:px-0 sm:w-2/5 sm:border-l sm:border-r border-[#1b1b1e]">
          <p className="py-5">
            hey there im pray patel fron cse gec patan
            I am a highly motivated and adaptable individual with a strong
            interest in technology and innovation. I enjoy learning new skills,
            tackling challenges, and finding creative solutions to problems.
            With a passion for continuous improvement and a results-driven
            mindset, I strive to contribute value to every project I work on
            while growing both professionally and personally.
          </p>
        </div>
      </div>

      {/* Separator */}
      <div className="lines_pattern border-t border-b border-[#1b1b1e] flex justify-center items-center"></div>

      {/* Horizontal line separator */}
      <div className="lines_pattern w-full border-t border-b border-[#1b1b1e] flex justify-center items-center">
        <div className="hidden sm:block w-2/5 border-l border-r border-[#1b1b1e] h-10"></div>
        <div className="sm:hidden h-10 w-full"></div>
      </div>

      {/* social links */}

      <div className="w-full px-5 sm:px-0 sm:w-2/5 sm:mx-auto sm:border-l sm:border-r border-[#1b1b1e]">
        <h1 className="text-3xl py-5">Projects</h1>
      </div>

      {/* Separator */}
      <div className="lines_pattern border-t border-b border-[#1b1b1e] flex justify-center items-center"></div>



      {/* About Me Text */}
      <div className="w-full border-t border-b border-[#1b1b1e] flex justify-center items-center">
        <div className="w-full px-5 sm:px-0 sm:w-2/5 sm:border-l sm:border-r border-[#1b1b1e]">
        
        </div>
      </div>



      {/* Horizontal line separator */}
      <div className="lines_pattern w-full border-t border-b border-[#1b1b1e] flex justify-center items-center">
        <div className="hidden sm:block w-2/5 border-l border-r border-[#1b1b1e] h-10"></div>
        <div className="sm:hidden h-10 w-full"></div>
      </div>

      {/* Tech Stack Heading */}
      <div className="w-full px-5 sm:px-0 sm:w-2/5 sm:mx-auto sm:border-l sm:border-r border-[#1b1b1e]">
        <h1 className="text-3xl py-5">Tech Stack</h1>
      </div>

      {/* Tech Stack Content */}
      <div className="w-full border-t border-b border-[#1b1b1e] flex justify-center items-center">
        <div className="w-full px-5 sm:px-0 sm:w-2/5 sm:border-l sm:border-r border-[#1b1b1e]">

          {/* Frontend */}
          <div className="flex py-5">
            <h1 className="text-xl w-30 sm:w-40 py-2">Frontend</h1>
            <div className="flex gap-5 sm:gap-10 flex-wrap">
              <TechIcon src="/stack/react.svg" label="React" />
              <TechIcon src="/stack/motion.svg" label="Framer Motion" />
              <TechIcon src="/stack/tailwindcss.svg" label="Tailwind CSS" />
              <TechIcon src="/stack/nextjs2-dark.svg" label="Next.js" />
            </div>
          </div>

          {/* Separator */}
          <div className="lines_pattern border-t border-b border-[#1b1b1e] flex justify-center items-center"></div>

          {/* Backend */}
          <div className="flex py-5">
            <h1 className="text-xl w-30 sm:w-40 py-2">Backend</h1>
            <div className="flex gap-5 sm:gap-10 flex-wrap">
              <TechIcon src="/stack/nodejs.svg" label="Node.js" />
              <TechIcon src="/stack/graphql.svg" label="GraphQL" />
              <TechIcon src="/stack/Express.svg" label="Express.js" />
            </div>
          </div>

          {/* Separator */}
          <div className="lines_pattern border-t border-b border-[#1b1b1e] flex justify-center items-center"></div>

          {/* Database */}
          <div className="flex py-5">
            <h1 className="text-xl w-30 sm:w-40 py-2">Database</h1>
            <div className="flex gap-5 sm:gap-10 flex-wrap">
              <TechIcon src="/stack/mongodb.svg" label="MongoDB" />
              <TechIcon src="/stack/redis.svg" label="Redis" />
            </div>
          </div>

        </div>
      </div>

      {/* Horizontal line separator */}
      <div className="lines_pattern w-full border-t border-b border-[#1b1b1e] flex justify-center items-center">
        <div className="hidden sm:block w-2/5 border-l border-r border-[#1b1b1e] h-10"></div>
        <div className="sm:hidden h-10 w-full"></div>
      </div>

      {/* social links */}

      <div className="w-full px-5 sm:px-0 sm:w-2/5 sm:mx-auto sm:border-l sm:border-r border-[#1b1b1e]">
        <h1 className="text-3xl py-5">Find me here...</h1>
      </div>

      {/* Separator */}
      <div className="lines_pattern border-t border-b border-[#1b1b1e] flex justify-center items-center"></div>

      <div className="mx-5 sm:mx-0 w-full sm:w-2/5 border-r border-l border-[#1b1b1e] self-center">
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

    </div>
  );
}
