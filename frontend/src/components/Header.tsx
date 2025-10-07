'use client';
import { useState } from 'react';
import Image from 'next/image';
import cvifyLogo from '../../assets/images/cvify_logo.png';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white border-b border-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <Image src={cvifyLogo} className="w-32 h-12" alt="CVify Logo" />
        </a>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700"
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
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar links */}
        <div
          className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:bg-transparent">
            {['Home', 'Over ons', 'Services', 'Prijs', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block py-2 px-3 rounded-sm hover:text-[#FFE2E2] hover:bg-gray-800 md:hover:bg-transparent"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
