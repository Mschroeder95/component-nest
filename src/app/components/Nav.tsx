"use client";

import TextLink from "../published-components/client/links/TextLink";
import TopNavbar from "../published-components/client/navbars/TopNavbar";
import Button from "../published-components/client/buttons/Button";
import ColorModeToggle from "../published-components/client/buttons/ColorModeToggle";

export default function Nav() {
  return (
    <TopNavbar
      logoPathDarkMode="/logo-dark.png"
      logoPathLightMode="/logo-light.png"
    >
      <TextLink href="/docs">Docs</TextLink>
      <TextLink href="https://github.com/Mschroeder95/component-nest">
        GitHub
      </TextLink>
      <Button iconSrc="/next.svg" href="https://nextjs.org/">
        Learn
      </Button>
      <ColorModeToggle></ColorModeToggle>
    </TopNavbar>
  );
}
