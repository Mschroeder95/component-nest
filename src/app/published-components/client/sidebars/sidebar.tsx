"use client";

import { ClassName, HasChildNodes } from "../../shared-interfaces";

interface SideBarProps extends ClassName {
  children: JSX.Element[];
}
export default function SideBar({ className, children }: SideBarProps) {
  return (
    <aside
      className={`hidden h-full w-fit flex-col overflow-y-auto py-4 md:flex lg:flex xl:flex`}
    >
      {children.map((child, index) => {
        return (
          <div key={index} className="h-fit w-fit py-2">
            {child}
          </div>
        );
      })}
    </aside>
  );
}
