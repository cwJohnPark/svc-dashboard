import React, { useContext } from "react";
import { SidebarContext } from "./context";
import Link from "next/link";

type SidebarItemProps = {
  link: string;
  label: string;
  active: boolean;
  icon: React.ReactNode;
};

export default function SidebarItem({ link, label, active, icon }: SidebarItemProps) {
  return (
    <section className="py-2">
      <Link
        href={link }
        className={`flex items-center p-2 text-base font-normal rounded-lg
                hover:bg-slate-500 hover:text-white transition duration-75
                 dark:text-white dark:hover:bg-gray-700 group
                 ${active ? "bg-gray-300 font-medium" : ""}
                 `}
      >
        <div className="flex flex-row justify-start gap-x-0">
          <div
            className={`size-6 text-slate-700 group-hover:text-white
            `}
          >
            {icon}
          </div>
          <span className="ml-3">{label}</span>
        </div>
      </Link>
    </section>
  );
}
