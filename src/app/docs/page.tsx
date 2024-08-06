"use client";

import { useState } from "react";
import TextLink from "../published-components/client/links/TextLink";
import Sidebar from "../published-components/client/sidebars/sidebar";
import { docsPageData } from "./docs-page-data";
import H2 from "../published-components/client/headings/H2";

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
    <main className="h-[calc(100vh-5rem)] w-screen bg-light-1 dark:bg-dark-1">
      <div className="mx-auto flex h-full max-w-[90rem] flex-row">
        <Sidebar>
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
        </Sidebar>
        <div className="flex grow flex-col gap-8 pl-8">
          {docsPageData.items.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col gap-4 ${item.category == selectedCategory ? "flex" : "hidden"}`}
              >
                <H2>{item.title}</H2>
                <div className="flex min-h-[20rem] w-full flex-col items-center justify-center rounded-xl border border-light-4 dark:border-dark-4">
                  {item.display}
                  <pre className="language-html whitespace-normal">
                    <code className="language-html whitespace-pre">
                      {item.snippet}
                    </code>
                  </pre>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
