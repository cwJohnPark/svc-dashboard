import React from "react";
import DropDownMenu from "@/components/DropDownMenu";

const Sidebar = () => {
  return (
    <>
      <aside className="fixed top-0 left-0 w-64 h-full" aria-label="Sidenav">
        <div
          className="overflow-y-auto py-5 px-3 h-full
          border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700
          text-slate-50 dark:text-gray-200
        "
        >
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700 group"
              >
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <DropDownMenu />
          </ul>
          <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:bg-gray-500 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ml-3">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
