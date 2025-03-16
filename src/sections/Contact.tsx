"use client";

import { useState } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleContactClick = () => {
    const email = "ardeschir.felix.2002@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Fehler beim Kopieren der E-Mail-Adresse: ", err);
      });
  };

  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-violet-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Haben Sie eine spannende Projektidee? Ich freue mich darauf,
                gemeinsam mit Ihnen innovative Lösungen zu entwickeln und Ihre
                Vision Realität werden zu lassen.
              </p>
            </div>
            <div>
              <button
                onClick={handleContactClick}
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">
                  {isCopied ? "E-Mail kopiert" : "Contact Me"}
                </span>
                {!isCopied && <ArrowUpRightIcon className="size-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
