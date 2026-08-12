import { Mail, Phone } from "lucide-react";
import React from "react";
import { Field, FieldGroup, FieldSet } from "../../ui/field";
import { Input } from "../../ui/input";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Container from "../../Container/Container";

const Footer = () => {
  const socialLinks = [
    { icon: <FaXTwitter size={20} />, href: "#" },
    { icon: <FaFacebook size={20} />, href: "#" },
    { icon: <FaGithub size={20} />, href: "#" },
    { icon: <FaLinkedin size={20} />, href: "#" },
  ];
  return (
    <section className="bg-slate-100 py-10 px-10 mt-24">
      <Container>
        <footer>
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div>
              <h2 className="font-bold text-2xl hover:text-primary transition duration-300">
                Contact Us
              </h2>
              <ul>
                <li className="flex gap-2 mt-4">
                  <Phone stroke="#7b5e00" size={22} />
                  0033666100010
                </li>
                <li className="flex gap-2 mt-4">
                  <Mail stroke="#7b5e00" size={22} /> support@usfranc.com
                </li>
                <li className="flex gap-2 mt-4">
                  <Mail stroke="#7b5e00" size={22} /> usfranc@bobosohomail.com
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-2xl hover:text-primary transition duration-300">
                Newsletter
              </h2>
              <p className="my-6 text-gray-500">
                Subscribe to stay updated with our latest news and offers.
              </p>
              <div className="flex">
                <FieldSet className="w-full max-w-xs">
                  <FieldGroup>
                    <Field>
                      <Input
                        id="username"
                        type="text"
                        placeholder="user@gmail.com"
                        className={"rounded-r-none rounded-l-lg"}
                      />
                    </Field>
                  </FieldGroup>
                </FieldSet>
                <button className="px-6 py-1 rounded-r-lg rounded-l-none text-white bg-primary cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="md:col-span-12 lg:col-span-3 flex flex-col lg:items-end">
              <h2 className="font-bold text-xl mb-6 border-l-4 border-primary lg:border-l-0 lg:border-r-4 pl-3 lg:pl-0 lg:pr-3 lg:text-right w-full">
                Follow Us
              </h2>
              <ul className="flex gap-4 mt-2">
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
          </div>
          <p className="text-center text-xs text-gray-500 mt-10">
            &copy; {new Date().getFullYear()} USFRANC LTD | Registration N°
            10325829 | England & Wales.
          </p>
        </footer>
      </Container>
    </section>
  );
};

export default Footer;
