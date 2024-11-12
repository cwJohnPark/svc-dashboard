"use client";

import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const DropDownMenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      {isOpen ? (
        <>
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </>
      ) : (
        <>
          {
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          }
        </>
      )}
    </>
  );
};

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        className="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group hover:bg-gray-500 dark:text-white dark:hover:bg-gray-700"
        onClick={toggleMenu}
      >
        <Square3Stack3DIcon className="size-6 text-slate-700" />
        <span className="flex-1 ml-3 text-left whitespace-nowrap">Pages</span>
        <DropDownMenuIcon isOpen={isOpen} />
      </button>
      {isOpen && (
        <ul className="pl-8 mt-2 space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:bg-gray-500 dark:hover:bg-gray-700 dark:text-white group"
            >
              Subpage 1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:bg-gray-500 dark:hover:bg-gray-700 dark:text-white group"
            >
              Subpage 2
            </a>
          </li>
        </ul>
      )}
    </>
  );
};

export default DropDownMenu;
