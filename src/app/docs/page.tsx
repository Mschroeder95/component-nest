"use client";

import { useState } from "react";
import { docsPageData } from "./docs-page-data";
import TopNavbar from "../published-components/components/client/navbars/TopNavbar";

import SideBar from "../published-components/components/client/sidebars/SideBar";
import H2 from "../published-components/components/client/headings/H2";
import TextLink from "../published-components/components/client/links/TextLink";
import Button from "../published-components/components/client/buttons/Button";

export default function Docs() {
  let categories = Array.from(
    new Set(
      docsPageData.items.map((item) => {
        return item.category;
      }),
    ).values(),
  );
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  //TODO: figure out how to share navbar height
  return (
    <main className="h-[calc(100vh-5rem)] w-screen bg-light-1 px-2 md:py-8 dark:bg-dark-1">
      <TopNavbar className="block md:hidden">
        {categories.map((category) => {
          return (
            <Button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
              }}
            >
              {category}
            </Button>
          );
        })}
      </TopNavbar>
      <div className="md:max-w-screen sm:max-w-screen mx-auto flex h-full max-w-[90rem] flex-row justify-center gap-8">
        <SideBar className="">
          {categories.map((category) => {
            return (
              <TextLink
                key={category}
                selected={category === selectedCategory}
                onClick={() => {
                  setSelectedCategory(category);
                }}
              >
                {category}
              </TextLink>
            );
          })}
        </SideBar>
        <div className="flex grow flex-col gap-8 overflow-y-auto">
          {docsPageData.items.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col gap-4 ${item.category == selectedCategory ? "flex" : "hidden"}`}
              >
                <H2>{item.title}</H2>
                <div className="flex h-fit w-full flex-col">{item.details}</div>
                <div className="flex min-h-[20rem] w-full flex-col rounded-t-xl border border-light-4 dark:border-dark-4">
                  <div className="flex max-h-[30rem] min-h-[10rem] items-center justify-center p-6">
                    {item.display}
                  </div>
                  <div className="w-full grow bg-light-2/75 px-6 py-2 dark:bg-dark-2">
                    <pre className="language-html">
                      <code className="language-html text-light-font-color-1 dark:text-dark-font-color-1">
                        {item.snippet}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
