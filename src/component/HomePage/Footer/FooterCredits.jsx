import React from "react";
import { SiSpotify } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FooterCredits = () => {
  return (
    <div className="max-w-full border-solid border-gray-300 border-t-2 mx-4 lg:m-8">
      <article className="flex text-2xl lg:text-3xl mt-4">
        <a href="#" className="p-2 rounded-full hover:bg-slate-300 hover-3s">
          <SiSpotify />
        </a>
        <a href="#" className="p-2 rounded-full hover:bg-slate-300 hover-3s">
          <FaFacebook />
        </a>
        <a href="#" className="p-2 rounded-full hover:bg-slate-300 hover-3s">
          <FaPinterest />
        </a>
        <a href="#" className="p-2 rounded-full hover:bg-slate-300 hover-3s">
          <FaInstagram />
        </a>
        <a href="#" className="p-2 rounded-full hover:bg-slate-300 hover-3s">
          <FaYoutube />
        </a>
        <a href="#" className="p-2 rounded-full hover:bg-slate-300 hover-3s">
          <FaTwitter />
        </a>
      </article>

      <ul className=" py-6 flex flex-col gap-6 roboto-regular text-base tracking-wide">
        <li>
          <a href="#" className="hover:underline">
            Privacy Notice
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Consumer Health Privacy Notice
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Do Not Share My Personal Information
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            CA Supply Chain Act
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Accessibility
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Cookie Preferences
          </a>
        </li>
      </ul>
      <p className="roboto-regular text-sm text-gray-500">
        &copy; 2024 Starbucks Coffee Company.All rights reserved.
      </p>
    </div>
  );
};

export default FooterCredits;
