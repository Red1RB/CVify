'use client';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-6 md:px-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">CVify</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Transform your resume into a recruiter-ready masterpiece with AI-powered insights.
          </p>
        </div>

        <div className="flex flex-col md:items-center">
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
            <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
            <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="flex md:justify-end flex-col md:flex-row gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 text-2xl transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 text-2xl transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 text-2xl transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CVify. All rights reserved.
      </div>
    </footer>
  );
}
