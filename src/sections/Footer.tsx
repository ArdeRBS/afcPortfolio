"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "GitHub",
    href: "https://github.com/ArdeRBS",
  },
  
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-violet-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                key={link.title}
                className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
