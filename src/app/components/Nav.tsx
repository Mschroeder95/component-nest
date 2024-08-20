"use client";

import Button from "../published-components/components/client/buttons/Button";
import ColorModeToggle from "../published-components/components/client/buttons/ColorModeToggle";
import TextLink from "../published-components/components/client/links/TextLink";
import TopNavbar from "../published-components/components/client/navbars/TopNavbar";

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
