"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: <FaXTwitter size={20} />, href: "#" },
  { icon: <FaFacebook size={20} />, href: "#" },
  { icon: <FaGithub size={20} />, href: "#" },
  { icon: <FaLinkedin size={20} />, href: "#" },
];

function MobileAccordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 font-medium text-gray-800 hover:text-primary transition-colors duration-200"
      >
        <span>{title}</span>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col pb-3 pl-3 gap-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MobileMenu({ navItems, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop — clicking closes menu */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white z-50 shadow-xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <span className="font-bold text-lg text-primary">Menu</span>
              <button
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav Items */}
            <div className="flex-1 overflow-y-auto px-6 py-2">
              {navItems.map((item, i) =>
                item.type === "link" ? (
                  <div
                    key={i}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center py-3 font-medium text-gray-800 hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </div>
                ) : (
                  <MobileAccordion key={i} title={item.label}>
                    {item.items.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.href}
                        onClick={onClose}
                        className="py-2 px-3 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </MobileAccordion>
                ),
              )}
            </div>

            {/* Social Links */}
            <div className="px-6 py-6 border-t border-gray-100">
              <h2 className="font-bold text-base text-gray-700 mb-3">
                Follow Us
              </h2>
              <ul className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.href}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
