"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import MobileMenu from "./MobileMenu";
import Container from "@/components/Container/Container";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    type: "dropdown",
    label: "Home",
    items: [
      { label: "Home", href: "/" },
      { label: "Multi Currency", href: "/multi-currency" },
    ],
    width: "w-48",
  },
  {
    type: "dropdown",
    label: "About",
    items: [
      { label: "Learn USFC", href: "/about" },
      { label: "What is USFC and What not?", href: "/difference" },
      {
        label: "USFC Peer to Peer Transfer Fees",
        href: "/usf-peer-to-peer-transfer-fees",
      },
      { label: "USFRANC assurance statement", href: "/assurance-statement" },
      { label: "Whitepaper", href: "/whitepaper" },
      { label: "Compliance", href: "/compliance" },
      { label: "Aml Compliance", href: "/aml-compliance" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
    width: "w-[560px] grid grid-cols-2",
  },
  {
    type: "dropdown",
    label: "Investors",
    items: [
      {
        label: "Distribution Policy",
        href: "/usfranc-investors-distribution-policy",
      },
      { label: "Terms & Conditions", href: "/investors-terms-and-conditions" },
      { label: "Invest in USFC now", href: "/pre-order" },
    ],
    width: "w-60",
  },
  {
    type: "dropdown",
    label: "Capital Reserve",
    items: [
      { label: "Learn Capital Culture", href: "/capital-reserve" },
      {
        label: "Capital Reserve Transparency",
        href: "/capital-reserve-transparency",
      },
      {
        label: "Capital Investment Overview",
        href: "/capital-investment-overview",
      },
      { label: "Policy", href: "/policy" },
      { label: "Flow Chart", href: "/flow-chart" },
    ],
    width: "w-80",
  },
  {
    type: "dropdown",
    label: "Get USFC",
    items: [
      { label: "Private Sale", href: "/buy" },
      { label: "Order USFRANC Now", href: "/pre-order" },
      { label: "Participation Terms", href: "/participation-terms" },
      {
        label: "Terms & Conditions",
        href: "/participation-terms-and-conditions",
      },
    ],
    width: "w-60",
  },
  {
    type: "dropdown",
    label: "USFF",
    items: [
      { label: "Ecosystem", href: "/ecosystem" },
      { label: "Multi Digital Currency", href: "/multi-digital-currency" },
    ],
    width: "w-60",
  },

  {
    type: "link",
    label: "Wallet",
    href: "/wallet",
  },
  {
    type: "link",
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image src="/logo.webp" alt="logo" width={50} height={50} />
              <h2 className="font-bold text-xl md:text-2xl text-primary">
                USFRANC
              </h2>
            </Link>

            {/* Desktop Nav */}
            <NavigationMenu className="hidden md:flex" viewport={false}>
              <NavigationMenuList className="gap-0">
                {navItems.map((item, i) => (
                  <NavigationMenuItem key={i}>
                    {item.type === "link" ? (
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </NavigationMenuLink>
                    ) : (
                      <>
                        <NavigationMenuTrigger>
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className={`${item.width} p-3 gap-1`}>
                            {item.items.map((sub, idx) => {
                              const isActive = pathname === sub.href;
                              return (
                                <li key={idx}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={sub.href}
                                      className={`block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                                        isActive
                                          ? "bg-gray-100 font-medium"
                                          : ""
                                      }`}
                                    >
                                      {sub.label}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              );
                            })}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div>
              <Button
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#171310] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                asChild
              >
                <Link href="/pre-order">Get USFF Now</Link>
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setShowMenu(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        navItems={navItems}
        isOpen={showMenu}
        onClose={() => setShowMenu(false)}
      />
    </>
  );
}
