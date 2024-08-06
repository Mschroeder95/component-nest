import { Button } from "../published-components/client/buttons/Button";
import ColorModeToggle from "../published-components/client/buttons/ColorModeToggle";
import H1 from "../published-components/client/headings/H1";
import H2 from "../published-components/client/headings/H2";
import H3 from "../published-components/client/headings/H3";
import H4 from "../published-components/client/headings/H4";
import H5 from "../published-components/client/headings/H5";
import H6 from "../published-components/client/headings/H6";
import BoldParagraph from "../published-components/client/paragraphs/BoldParagraph";
import LinkParagraph from "../published-components/client/paragraphs/LinkParagraph";
import Paragraph from "../published-components/client/paragraphs/Paragraph";

interface DocsPageItems {
  category: string;
  title: string;
  details: JSX.Element;
  display: JSX.Element;
  snippet: string;
}

interface DocsPageData {
  items: DocsPageItems[];
}

export let docsPageData: DocsPageData = {
  items: [
    {
      category: "Buttons",
      title: "Button",
      details: (
        <>
          <Paragraph>This is a simple example of a button.</Paragraph>
        </>
      ),
      display: <Button>Button Text</Button>,
      snippet: `
<Button>
    Button Text
</Button>
            `,
    },
    {
      category: "Buttons",
      title: "Color Mode Toggle",
      details: (
        <>
          <Paragraph>
            Toggling the color mode is done by updating a cookie{" "}
            <BoldParagraph>x-component-nest-color-mode</BoldParagraph> which is
            used in the root layout.tsx to add either 'dark' or 'light' to the
            root html element. Color classes are set using 'dark' variant, which
            is part of tailwind css
          </Paragraph>
          <Paragraph>
            For more information about how dark mode works in tailwind check out{" "}
            <LinkParagraph href={"https://tailwindcss.com/docs/dark-mode"}>
              this documentation
            </LinkParagraph>
          </Paragraph>
        </>
      ),
      display: <ColorModeToggle></ColorModeToggle>,
      snippet: "<ColorModeToggle></ColorModeToggle>",
    },
    {
      category: "Headings",
      title: "Basic Headings",
      details: <></>,
      display: (
        <div className="flex flex-col flex-wrap gap-2">
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <H3>Heading 3</H3>
          <H4>Heading 4</H4>
          <H5>Heading 5</H5>
          <H6>Heading 6</H6>
        </div>
      ),
      snippet: `
<H1>Heading 1</H1>
<H2>Heading 2</H2>
<H3>Heading 3</H3>
<H4>Heading 4</H4>
<H5>Heading 5</H5>
<H6>Heading 6</H6>
      `,
    },
  ],
};
