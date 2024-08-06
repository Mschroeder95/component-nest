"use client";

import { ClassName, HasChildNodes } from "../../shared-interfaces";

interface SideBarProps extends ClassName {
  children: JSX.Element[];
}
export default function SideBar({ className, children }: SideBarProps) {
  return (
    <aside className={`flex h-full w-fit flex-col overflow-y-auto py-4`}>
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
