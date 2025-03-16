"use client";

import Image from "next/image";
import { Text } from "@/components/Text";
import { SkillItem } from "@/components/techImages";
import starsBg from "@/assets/images/stars.png";
import logoHTW from "@/assets/images/logohtw.png";
import logoLeo from "@/assets/images/leopoldLogo.png"

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

export const AboutPage = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const borderedDivRef = useRef<HTMLDivElement>(null);
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const cvData = [
    {
      image: logoLeo,
      date: "August 2019 - Juli 2022",
      title: "Fachhochschulreife mit Schwerpunkt auf Medienwirtschaft",
      description: [
        "Erste Eindrücke in der Entwicklung von Webseiten",
        "Beschaffungsprozesse planen, steuern, kontrollieren",
        "Bedeutung des Marketings verstehen und Märkte untersuchen",
        "Marketingforschung betreiben und kommunikationspolitische Instrumente einsetzen",
        "Produkt- und Preispolitik marktorientiert einsetzen",
        "Produkte und Dienstleistung vertreiben",
        "Beschaffung von Betriebsmiteln planen, durchführen und bewerten",
        "Unternehmerische Entscheidungen treffen und umsetzen",
      ],
      techStack: [],
    },
    {
      image: logoHTW,
      date: "März 2024 - Jetzt",
      title: "Internationaler Studiengang Medieninformatik - Bachelor",
      description: [
        "Grundlagen der Website Programmierung",
        "Medientheorie",
        "Grundlagen der Programmierung",
        "International English for Media and Computing",
        "Computersystem",
        "Netzwerke",
      ],
      techStack: [],
    },
  ];

  const filterSkills = (skillNames: string[]) => {
    return SkillItem.skills.filter((skill) => skillNames.includes(skill.name));
  };

  return (
    <section className="py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          className="border border-[#c4b5fd]/15 p-4 rounded-xl overflow-hidden relative group"
          animate={{ backgroundPositionX: starsBg.width }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          <Text colorTitle="Werdegang" className="text-center" />
          <Text
            title="Lebenslauf"
            className="text-center font-semibold mb-12"
          />

          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {cvData.map((item, index) => (
              <li key={index}>
                {index > 0 && <hr className="bg-[#c4b5fd]" />}
                <div className="timeline-middle">
                  <div className="w-12 h-12 rounded-full border-2 border-[#c4b5fd] bg-zinc-700 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={47}
                      height={47}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div
                  className={`timeline-${
                    index % 2 === 0 ? "start" : "end"
                  } mb-10 mt-5 md:${
                    index % 2 === 0 ? "text-end" : "text-start"
                  }`}
                >
                  <time className="font-serif font-bold text-[#c4b5fd] m-1">
                    {item.date}
                  </time>
                  <div className="text-lg md:text-xl font-black ">
                    {item.title}
                  </div>
                  {typeof item.description === "string" ? (
                    <p className="text-zinc-300 mt-2 text-left">
                      {item.description}
                    </p>
                  ) : (
                    <ul className="text-zinc-300 mt-2 text-left list-none pl-5 space-y-2">
                      {item.description.map((point, idx) => (
                        <li key={idx} className="relative pl-5">
                          <span className="absolute left-0 top-0">•</span>
                          <span className="inline-block w-full whitespace-pre-wrap">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div
                    className={`flex flex-wrap gap-2 mt-4 ${
                      index % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                  >
                    {filterSkills(item.techStack).map((skill) => (
                      <Image
                        key={skill.name}
                        src={skill.iconType}
                        alt={skill.name}
                        width={24}
                        height={24}
                        className="rounded"
                      />
                    ))}
                  </div>
                </div>
                {index < cvData.length - 1 && <hr className="bg-[#c4b5fd]" />}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
