"use client";

import { useRouter } from "next/navigation";
import TextLink from "../published-components/client/links/TextLink";
import TopNavbar from "../published-components/client/navbars/TopNavbar";
import { Button } from "../published-components/client/buttons/Button";

export default function Nav() {
  const router = useRouter();

  return (
    <TopNavbar logoPath="/logo-light.png">
      <TextLink text="Docs" onClickOrHref={{ href: "/docs" }}></TextLink>
      <TextLink
        text="GitHub"
        onClickOrHref={{
          href: "https://github.com/Mschroeder95/component-nest",
        }}
      ></TextLink>
      <Button
        text="Learn"
        onClickOrHref={{ href: "https://nextjs.org/" }}
        iconSrc="/next.svg"
      ></Button>
    </TopNavbar>
  );
}
