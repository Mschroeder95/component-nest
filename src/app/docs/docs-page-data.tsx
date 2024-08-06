import { Button } from "../published-components/client/buttons/Button";
import ColorModeToggle from "../published-components/client/buttons/ColorModeToggle";
import H1 from "../published-components/client/headings/H1";

interface DocsPageItems {
  category: string;
  title: string;
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
      display: <ColorModeToggle></ColorModeToggle>,
      snippet: "<ColorModeToggle></ColorModeToggle>",
    },
    {
      category: "Headings",
      title: "Heading 1",
      display: <H1>Heading 1</H1>,
      snippet: "<H1>Heading 1</H1>",
    },
  ],
};
