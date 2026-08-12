"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Send,
  Globe,
  User,
  MessageSquare,
  Mail,
  Phone,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
].sort((a, b) => a.localeCompare(b));
const ContactPage = () => {
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [captchaError, setCaptchaError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const generateCaptcha = () => {
    setCaptcha({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1,
    });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const onSubmit = (data) => {
    const total = captcha.num1 + captcha.num2;
    if (parseInt(data.captchaResult) !== total) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    console.log("Form Data:", data);
    alert("Message Sent Successfully!");
    reset();
    generateCaptcha();
  };

  return (
    <section className="bg-white pt-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">
                Get In Touch
              </h2>
              <p className="text-slate-500 font-medium italic">
                Send a secure message to the USFRANC Network Management team.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <User size={12} className="text-primary" /> Full Name*
                  </label>
                  <Input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your Name"
                    className={
                      errors.name ? "border-red-500" : "border-slate-200"
                    }
                  />
                  {errors.name && (
                    <span className="text-red-500 text-[10px]">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Mail size={12} className="text-primary" /> Email*
                  </label>
                  <Input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email",
                      },
                    })}
                    placeholder="name@email.com"
                    className={
                      errors.email ? "border-red-500" : "border-slate-200"
                    }
                  />
                  {errors.email && (
                    <span className="text-red-500 text-[10px]">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Phone size={12} className="text-primary" /> Phone Number*
                  </label>
                  <Input
                    {...register("phone", { required: "Phone is required" })}
                    placeholder="+1 234..."
                    className={
                      errors.phone ? "border-red-500" : "border-slate-200"
                    }
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-[10px]">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Globe size={12} className="text-primary" /> Country*
                  </label>
                  <select
                    {...register("country", { required: "Required" })}
                    className="w-full h-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Country</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <MessageSquare size={12} className="text-primary" />{" "}
                    Subject/Query*
                  </label>
                  <Input
                    {...register("subject", { required: "Required" })}
                    placeholder="Partnership, Tech..."
                    className={
                      errors.subject ? "border-red-500" : "border-slate-200"
                    }
                  />
                  {errors.subject && (
                    <span className="text-red-500 text-[10px]">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Video size={12} className="text-primary" /> Skype ID
                    (Optional)
                  </label>
                  <Input
                    {...register("skypeId")}
                    placeholder="live:cid.xxxx"
                    className="border-slate-200"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Enter Message*
                </label>
                <Textarea
                  {...register("message", {
                    required: "Message cannot be empty",
                  })}
                  placeholder="How can we help you?"
                  className="min-h-30 border-slate-200"
                />
                {errors.message && (
                  <span className="text-red-500 text-[10px]">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-slate-700">
                    Verify: {captcha.num1} + {captcha.num2} ={" "}
                  </span>
                  <Input
                    {...register("captchaResult", { required: true })}
                    className={`w-20 bg-white ${captchaError ? "border-red-500" : ""}`}
                    placeholder="?"
                  />
                </div>
                {captchaError && (
                  <span className="text-red-500 text-[10px] font-bold">
                    Incorrect Sum
                  </span>
                )}
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-primary/90 hover:bg-primary text-white font-bold rounded-lg shadow-lg">
                <Send size={16} className="mr-2" /> Send Message
              </Button>
            </form>
          </div>

          {/* RIGHT COLUMN: GOOGLE MAP */}
          <div className="h-full min-h-125 lg:min-h-150 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl sticky top-8">
            <iframe
              title="USFRANC HQ"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=45%20Fitzroy%20Street,%20London,%20England,%20W1T%206EB,%20UK+(USFRANC%20LTD)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="grayscale hover:grayscale-0 transition-all duration-700"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
