"use client";

import React, { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.substring(1);
      const targetElement = targetId ? document.getElementById(targetId) : null;

      if (targetElement) {
        event.preventDefault(); // Standardverhalten verhindern
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleClick as EventListener);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick as EventListener);
      });
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/50 rounded-full bg-white/10 backdrop-blur">
        <a href="#home" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a
          href="#contact"
          className="nav-item bg-white/50 text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
