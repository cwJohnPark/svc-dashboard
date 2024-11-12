"use client";
import { Menu } from "../../app/libs/model";
import React, { createContext, useState } from "react";

export const SidebarContext = createContext({
  currentMenu: Menu.DASHBOARD,
  setMenu: (menu: Menu) => {},
});

export default function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentMenu, setCurrentMenu] = useState<Menu>(Menu.DASHBOARD);

  return (
    <SidebarContext.Provider value={{ currentMenu, setMenu: setCurrentMenu }}>
      {children}
    </SidebarContext.Provider>
  );
}
