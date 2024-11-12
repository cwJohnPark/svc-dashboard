"use client";
import React, { useContext } from "react";
import { Cog8ToothIcon, HomeIcon } from "@heroicons/react/24/outline";
import SidebarItem from "./SideBarItem";
import SideBarSection from "./SideBarSection";
import { SidebarContext } from "./context";
import { Menu } from "@/app/libs/model";

const Sidebar = () => {
  const { currentMenu, setMenu } = useContext(SidebarContext);

  return (
    <>
      <aside className="fixed top-0 left-0 w-64 h-full" aria-label="Sidenav">
        <div
          className="overflow-y-auto py-5 px-4 h-full
          border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700
        "
        >
          <section>
            <p className="text-3xl font-medium">SCV</p>
          </section>
          <SideBarSection>
            <div onClick={() => setMenu(Menu.DASHBOARD)}>
              <SidebarItem
                link="/"
                label="Dashboard"
                active={currentMenu == Menu.DASHBOARD}
                icon={<HomeIcon />}
              />
            </div>
            <div onClick={() => setMenu(Menu.SETTINGS)}>
              <SidebarItem
                link="/"
                label="Settings"
                active={currentMenu == Menu.SETTINGS}
                icon={<Cog8ToothIcon />}
              />
            </div>
          </SideBarSection>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
