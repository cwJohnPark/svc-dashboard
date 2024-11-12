import React from "react";

export default function SideBarSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ul className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
      <li>{children}</li>
    </ul>
  );
}
