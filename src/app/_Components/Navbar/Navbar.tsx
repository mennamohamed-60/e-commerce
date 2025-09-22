"use client";

import React, { useState } from "react";
import logo from "@images/freshcart-logo.svg";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { CartRes } from "@/app/_interfaces/cart.types";
import { usePathname } from "next/navigation";

export default function Navbar() {


  const { data } = useQuery<CartRes>({
    queryKey: ["/cart"],
    queryFn: async () => {
      const res = await fetch(`/api/cart`);
      const payload = await res.json();
      return payload;
    },
  });
  const [isOpen, setOpen] = useState(false);
  const {  status } = useSession();
  const pathname = usePathname();

  function handelLogout() {
    signOut({ callbackUrl: "/login" });


  }


   const navLinks = [
    { href: "/", label: "Home" },
    { href: "/cart", label: "Cart" },
    { href: "/wishlist", label: "Wishlist" },
    { href: "/products", label: "Products" },
    { href: "/Categories", label: "Categories" },
    { href: "/brands", label: "Brands" },
  ];

  return (
    <nav className="bg-gray-100 border-gray-200 fixed top-0 w-full z-50 shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={logo} className="h-8 w-auto" alt="fresh cart Logo" />
        </Link>

       
        <button
          onClick={() => setOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

      
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center gap-40 lg:justify-between lg:w-auto`}
          id="navbar-default"
        >
       
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 text-center md:text-left">
            {navLinks.map(({ href, label }) => (
              <li key={href} className="me-0">
                <Link
                  href={href}
                  className={`block py-2 px-3 ${
                    pathname === href
                      ? "text-black font-bold" 
                      : "text-zinc-500 md:hover:text-zinc-800"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          
          <ul className="font-medium flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 items-center md:ml-10">
            {status == "authenticated" ? (
              <>
               

                <li className="me-0">
                  <Link
                    href="/cart"
                    className="block py-2 px-3 text-zinc-500 relative md:hover:text-zinc-800"
                  >
                    <span className="absolute top-0.5 right-0.5 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {data?.numOfCartItems}
                    </span>
                    <i className="fa-solid fa-cart-shopping fa-lg"></i>
                  </Link>
                </li>

                <li className="me-0" onClick={handelLogout}>
                  <span className="block py-2 px-3 cursor-pointer text-zinc-500 md:hover:text-zinc-800">
                    Log out
                  </span>
                </li>
              </>
            ) : (
              <>
                <li className="me-0">
                  <Link
                    href="/login"
                    className="block py-2 px-3 text-zinc-500 md:hover:text-zinc-800"
                  >
                    Log in
                  </Link>
                </li>
                <li className="me-0">
                  <Link
                    href="/signup"
                    className="block py-2 px-3 text-zinc-500 md:hover:text-zinc-800"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
