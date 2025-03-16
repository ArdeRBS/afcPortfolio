"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Text } from "@/components/Text";
import { SkillItem } from "@/components/techImages";

export const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const cvData: {
    date: string;
    title: string;
    description: string;
    techStack: string[];
  }[] = [
    {
      date: "September 2021 - Februar 2023",
      title: "Werkstudent",
      description:
        "IT-Sicherheit & Produktentwicklung: Modellierung und Implementierung von Sicherheitsprodukten für Penetrationstests, Hardwareauswahl, Endtests. FDM 3D-Druck: Erfahrung mit FDM-Verfahren, CAD-Tools für Gehäuseentwicklung. Technische Dokumentation: Erstellung und Pflege technischer Dokumentationen. Einblicke: Ansible, Cloud Engineering.",
      techStack: [],
    },
    {
      date: "April 2021 - August 2021",
      title: "Praktikant",
      description:
        "Systemadministration Entwurf und Modellierung von Bauteilen mit Autodesk Fusion 360",
      techStack: [],
    },
    {
      date: "2015-2024",
      title: "Bachelor of Engineering",
      description:
        "Meine Abschlussarbeit konzentrierte sich auf die Entwicklung einer App als Reaktionsmessgerät für die Ermittlung motorisch-kognitiver Fähigkeiten",
      techStack: [],
    },
  ];

  // Funktion zum Filtern der Skills basierend auf den Namen
  const filterSkills = (skillNames: string[]) => {
    return SkillItem.skills.filter((skill) => skillNames.includes(skill.name));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.clientWidth;
        const newIndex = Math.round(scrollPosition / cardWidth);
        setCurrentIndex(newIndex);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24">
      <div className="container">
        <Text colorTitle="Lebenslauf" className="text-center" />
        <Text title="Werdegang" className="text-center font-semibold" />
        <Text
          description="schaue dir meinen Lebenslauf an"
          className="text-center"
        />
        <div className="overflow-x-scroll">
          <div className="mt-36 lg:mt-48 flex">
            <div className="flex flex-none gap-8">
              {cvData.map(({ date, title, description, techStack }) => (
                <div
                  className="relative z-0 p-8 md:p-10 lg:p-14 max-w-xs md:max-w-2xl lg:max-w-5xl group"
                  key={title}
                >
                  <div className="absolute size-16 rounded-xl bg-[#c4b5fd] top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="absolute size-16 rounded-xl bg-[#c4b5fd] group-hover:bg-[#c4b5fd] transition duration-300 top-1.5 right-1.5 -z-10 "></div>
                  <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_5%,black_40px)]"></div>
                  <div className="flex justify-center -mt-28">
                    <div className="inline-flex relative">
                      <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 rounded-[100%] group-hover:bg-zinc-950/30 transition duration-300 [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                    </div>
                  </div>
                  {/* datum titel description */}
                  <div className="mt-12">
                    <Text colorTitle={date} />
                    <Text title={title} />
                    <Text description={description} />
                    {/* Technologie-Icons */}
                    <div className="flex flex-wrap gap-2 mt-12">
                      {filterSkills(techStack).map((skill) => (
                        <div key={skill.name}>
                          <Image
                            src={skill.iconType}
                            alt={skill.name}
                            className="w-6 h-6"
                          />
                        </div>
                      ))}
                    </div>
                    {/* learn more button und pfeil */}
                    <div className="flex justify-between mt-6">
                      <button className="text-lg font-semibold  tracking-widest uppercase bg-gradient-to-r from-[#c4b5fd] to-[#38bdf8] bg-clip-text text-transparent ">
                        learn more
                      </button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-8 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:-translate-x-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="bg-[#c4b5fd] inline-flex gap-4 p-2.5 rounded-full">
            {cvData.map((_, index) => (
              <div
                key={index}
                className={`size-2.5 rounded-full transition-colors duration-300 cursor-pointer ${
                  index === currentIndex ? "bg-zinc-800" : "bg-zinc-500"
                }`}
                onClick={() => scrollToIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
