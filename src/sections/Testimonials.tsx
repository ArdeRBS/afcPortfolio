"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Interaktive Webanwendungen",
    position: "",
    text: "Entwicklung von dynamischen Webseiten, die durch Nutzerinteraktionen personalisierte Erlebnisse bieten.",
  },
  {
    name: "Mobile App-Entwicklung",
    position: "",
    text: "Erstellung von benutzerfreundlichen Apps für iOS und Android zur Lösung spezifischer Bedürfnisse.",
  },
  {
    name: "Chatbot-Entwicklung",
    position: "",
    text: "Programmierung eines Chatbots zur Verbesserung der Nutzerinteraktion.",
  },
  {
    name: "Social Media Dashboard",
    position: "",
    text: "Erstellen eines Dashboards zur Analyse und Verwaltung von Social Media-Konten.",
  },
  {
    name: "E-Learning-Plattform",
    position: "",
    text: "Aufbau einer Plattform für interaktive und benutzerfreundliche Online-Kurse.",
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Future Projects"
          title="Zukünftige Projekte"
          description="Zukünftige Projekte will ich nutzen, um innovative, benutzerfreundliche digitale Lösungen zu entwickeln, die die Medienlandschaft prägen."
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="test-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
