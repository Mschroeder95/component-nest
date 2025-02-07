import Button from "../published-components/components/client/buttons/Button";
import ColorModeToggle from "../published-components/components/client/buttons/ColorModeToggle";
import CallToAction from "../published-components/components/client/headings/CallToAction";
import H1 from "../published-components/components/client/headings/H1";
import H2 from "../published-components/components/client/headings/H2";
import H3 from "../published-components/components/client/headings/H3";
import H4 from "../published-components/components/client/headings/H4";
import H5 from "../published-components/components/client/headings/H5";
import H6 from "../published-components/components/client/headings/H6";
import {
  MoonIcon,
  SunIcon,
  ThreeBarsIcon,
} from "../published-components/components/client/icons/icons";
import TextAreaInput from "../published-components/components/client/input/TextAreaInput";
import TextLink from "../published-components/components/client/links/TextLink";
import Modal from "../published-components/components/client/modals/Modal";
import BoldParagraph from "../published-components/components/client/paragraphs/BoldParagraph";
import FirstLetterParagraph from "../published-components/components/client/paragraphs/FirstLetterParagraph";
import ItalicParagraph from "../published-components/components/client/paragraphs/ItalicParagraph";
import LeadingParagraph from "../published-components/components/client/paragraphs/LeadingParagraph";
import LinkParagraph from "../published-components/components/client/paragraphs/LinkParagraph";
import Paragraph from "../published-components/components/client/paragraphs/Paragraph";
import UnderlineParagraph from "../published-components/components/client/paragraphs/UnderlineParagraph";
import SideBar from "../published-components/components/client/sidebars/SideBar";
import Select from "../published-components/components/client/input/Select";
import Input from "../published-components/components/client/input/Input";

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
    {
      category: "Headings",
      title: "Call To Action",
      details: <></>,
      display: (
        <CallToAction
          title={"This is a call to action"}
          subtitle={
            "A call to action can be used to draw attention to something that we want the user to do."
          }
        >
          <div className="flex flex-row gap-4">
            <Button>Like Clicking This Button</Button>
            <Button>Or Maybe This Button Too</Button>
          </div>
        </CallToAction>
      ),
      snippet: `
<CallToAction 
title={'This is a call to action'} 
subtitle={'A call to action can be used to draw attention to something that we want the user to do.'}>
  <div className='flex flex-row gap-4'>
    <Button>Like Clicking This Button</Button>
    <Button>Or Maybe This Button Too</Button>
  </div>
</CallToAction>
      `,
    },
    {
      category: "Icons",
      title: "Icons",
      details: (
        <>
          <Paragraph>
            Icons are easy to use and all extend the{" "}
            <BoldParagraph>IconElement</BoldParagraph> to make it easy enforce
            them as children to components that reqiure icons or use icons
            optionally.
          </Paragraph>
        </>
      ),
      display: (
        <div className="grid max-h-[15rem] grid-cols-10 gap-2 overflow-y-auto text-light-font-color-1 dark:text-dark-font-color-1">
          <SunIcon></SunIcon>
          <MoonIcon></MoonIcon>
          <ThreeBarsIcon></ThreeBarsIcon>
        </div>
      ),
      snippet: `
<div className='grid'>
  <SunIcon></SunIcon>
  <MoonIcon></MoonIcon>
  <ThreeBarsIcon></ThreeBarsIcon>
</div>
      `,
    },
    {
      category: "Modals",
      title: "Modal",
      details: <></>,
      display: (
        <Modal onDismiss={() => {}} center={false} display="block">
          <H4>Modals are fun</H4>
          <LeadingParagraph>
            Modals give us something to do and then they are dismissed.
          </LeadingParagraph>
          <Paragraph>Do you like modals?</Paragraph>
          <div className="flex flex-row gap-4">
            <Button>Yes</Button>
            <Button>No</Button>
          </div>
        </Modal>
      ),
      snippet: `
<Modal onDismiss={()=>{}} center={false} display='block'>
  <H4>Modals are fun</H4>
  <LeadingParagraph>Modals give us something to do and then they are dismissed.</LeadingParagraph>
  <Paragraph>Do you like modals?</Paragraph>
  <div className='flex flex-row gap-4'>
    <Button>Yes</Button>
    <Button>No</Button>
  </div>
</Modal>
      `,
    },
    {
      category: "Sidebars",
      title: "Sidebar",
      details: <></>,
      display: (
        <SideBar>
          {[
            <TextLink onClick={() => {}}>Sidebar Option</TextLink>,
            <TextLink onClick={() => {}}>Sidebar Option</TextLink>,
            <TextLink onClick={() => {}}>Sidebar Option</TextLink>,
            <TextLink onClick={() => {}}>Sidebar Option</TextLink>,
            <TextLink onClick={() => {}}>Sidebar Option</TextLink>,
            <TextLink onClick={() => {}}>Sidebar Option</TextLink>,
            <TextLink onClick={() => {}}>Sidebar Option</TextLink>,
            <TextLink onClick={() => {}}>Sidebar Option</TextLink>,
            <TextLink onClick={() => {}}>Sidebar Option</TextLink>,
            <TextLink onClick={() => {}}>Sidebar Option</TextLink>,
            <TextLink onClick={() => {}}>Sidebar Option</TextLink>,
            <TextLink onClick={() => {}}>Sidebar Option</TextLink>,
            <TextLink onClick={() => {}}>Sidebar Option</TextLink>,
            <TextLink onClick={() => {}}>Sidebar Option</TextLink>,
            <TextLink onClick={() => {}}>Sidebar Option</TextLink>,
            <TextLink onClick={() => {}}>Sidebar Option</TextLink>,
          ]}
        </SideBar>
      ),
      snippet: `
<SideBar>
  {
    [
    <TextLink onClick={()=>{}}>Sidebar Option</TextLink>,
    <TextLink onClick={()=>{}}>Sidebar Option</TextLink>,
    <TextLink onClick={()=>{}}>Sidebar Option</TextLink>,
    <TextLink onClick={()=>{}}>Sidebar Option</TextLink>,
    ...
    ]
  }
</SideBar>
      `,
    },
    {
      category: "Links",
      title: "Text Link",
      details: <></>,
      display: <TextLink>Click Me</TextLink>,
      snippet: `
<TextLink>Click Me</TextLink>
      `,
    },
    {
      category: "Paragraphs",
      title: "Mixed Paragraphs",
      details: <></>,
      display: (
        <FirstLetterParagraph>
          <BoldParagraph>Paragraphs </BoldParagraph>
          are best when they are used{" "}
          <LinkParagraph href="#">together</LinkParagraph>,{" "}
          <UnderlineParagraph>because</UnderlineParagraph> it makes paragraphs
          look better.
        </FirstLetterParagraph>
      ),
      snippet: `
<FirstLetterParagraph>
  <BoldParagraph>Paragraphs </BoldParagraph> 
  are best when they are used <LinkParagraph href='#'>together</LinkParagraph>, <UnderlineParagraph>because</UnderlineParagraph> it makes paragraphs look better
</FirstLetterParagraph>
      `,
    },
    {
      category: "Paragraphs",
      title: "Bold Paragraph",
      details: <></>,
      display: (
        <BoldParagraph>
          Integer vel ante nibh. Mauris maximus eros quam, aliquam molestie odio
          auctor sit amet. Proin quis placerat lorem, vel mattis orci. Aliquam
          id venenatis ipsum. Proin consectetur eros ut ligula tempus ornare.
          Nulla semper congue justo vitae volutpat. Donec id mollis leo.
          Maecenas molestie, augue non laoreet interdum, diam eros accumsan
          nisl, a condimentum ante tellus nec risus. Curabitur scelerisque vitae
          ipsum quis posuere. Curabitur rhoncus tempus justo, sit amet feugiat
          sem ultrices sed. Sed ut sagittis lorem. Proin ut scelerisque urna.
          Aliquam id lobortis sapien, vitae tincidunt mauris. Pellentesque eget
          ante pharetra, rutrum justo id, luctus tellus.
        </BoldParagraph>
      ),
      snippet: `
<BoldParagraph>...text content...</BoldParagraph>
      `,
    },
    {
      category: "Paragraphs",
      title: "First Letter Paragraph",
      details: <></>,
      display: (
        <FirstLetterParagraph>
          Integer vel ante nibh. Mauris maximus eros quam, aliquam molestie odio
          auctor sit amet. Proin quis placerat lorem, vel mattis orci. Aliquam
          id venenatis ipsum. Proin consectetur eros ut ligula tempus ornare.
          Nulla semper congue justo vitae volutpat. Donec id mollis leo.
          Maecenas molestie, augue non laoreet interdum, diam eros accumsan
          nisl, a condimentum ante tellus nec risus. Curabitur scelerisque vitae
          ipsum quis posuere. Curabitur rhoncus tempus justo, sit amet feugiat
          sem ultrices sed. Sed ut sagittis lorem. Proin ut scelerisque urna.
          Aliquam id lobortis sapien, vitae tincidunt mauris. Pellentesque eget
          ante pharetra, rutrum justo id, luctus tellus.
        </FirstLetterParagraph>
      ),
      snippet: `
<FirstLetterParagraph>...text content...</FirstLetterParagraph>
      `,
    },
    {
      category: "Paragraphs",
      title: "Italic Paragraph",
      details: <></>,
      display: (
        <ItalicParagraph>
          Integer vel ante nibh. Mauris maximus eros quam, aliquam molestie odio
          auctor sit amet. Proin quis placerat lorem, vel mattis orci. Aliquam
          id venenatis ipsum. Proin consectetur eros ut ligula tempus ornare.
          Nulla semper congue justo vitae volutpat. Donec id mollis leo.
          Maecenas molestie, augue non laoreet interdum, diam eros accumsan
          nisl, a condimentum ante tellus nec risus. Curabitur scelerisque vitae
          ipsum quis posuere. Curabitur rhoncus tempus justo, sit amet feugiat
          sem ultrices sed. Sed ut sagittis lorem. Proin ut scelerisque urna.
          Aliquam id lobortis sapien, vitae tincidunt mauris. Pellentesque eget
          ante pharetra, rutrum justo id, luctus tellus.
        </ItalicParagraph>
      ),
      snippet: `
<ItalicParagraph>...text content...</ItalicParagraph>
      `,
    },
    {
      category: "Paragraphs",
      title: "Leading Paragraph",
      details: <></>,
      display: (
        <LeadingParagraph>
          Integer vel ante nibh. Mauris maximus eros quam, aliquam molestie odio
          auctor sit amet. Proin quis placerat lorem, vel mattis orci. Aliquam
          id venenatis ipsum. Proin consectetur eros ut ligula tempus ornare.
          Nulla semper congue justo vitae volutpat. Donec id mollis leo.
          Maecenas molestie, augue non laoreet interdum, diam eros accumsan
          nisl, a condimentum ante tellus nec risus. Curabitur scelerisque vitae
          ipsum quis posuere. Curabitur rhoncus tempus justo, sit amet feugiat
          sem ultrices sed. Sed ut sagittis lorem. Proin ut scelerisque urna.
          Aliquam id lobortis sapien, vitae tincidunt mauris. Pellentesque eget
          ante pharetra, rutrum justo id, luctus tellus.
        </LeadingParagraph>
      ),
      snippet: `
<LeadingParagraph>...text content...</LeadingParagraph>
      `,
    },
    {
      category: "Paragraphs",
      title: "Link Paragraph",
      details: <></>,
      display: (
        <LinkParagraph href="#">
          Integer vel ante nibh. Mauris maximus eros quam, aliquam molestie odio
          auctor sit amet. Proin quis placerat lorem, vel mattis orci. Aliquam
          id venenatis ipsum. Proin consectetur eros ut ligula tempus ornare.
          Nulla semper congue justo vitae volutpat. Donec id mollis leo.
          Maecenas molestie, augue non laoreet interdum, diam eros accumsan
          nisl, a condimentum ante tellus nec risus. Curabitur scelerisque vitae
          ipsum quis posuere. Curabitur rhoncus tempus justo, sit amet feugiat
          sem ultrices sed. Sed ut sagittis lorem. Proin ut scelerisque urna.
          Aliquam id lobortis sapien, vitae tincidunt mauris. Pellentesque eget
          ante pharetra, rutrum justo id, luctus tellus.
        </LinkParagraph>
      ),
      snippet: `
<LinkParagraph href='#'>...text content...</LinkParagraph>
      `,
    },
    {
      category: "Paragraphs",
      title: "Underline Paragraph",
      details: <></>,
      display: (
        <UnderlineParagraph>
          Integer vel ante nibh. Mauris maximus eros quam, aliquam molestie odio
          auctor sit amet. Proin quis placerat lorem, vel mattis orci. Aliquam
          id venenatis ipsum. Proin consectetur eros ut ligula tempus ornare.
          Nulla semper congue justo vitae volutpat. Donec id mollis leo.
          Maecenas molestie, augue non laoreet interdum, diam eros accumsan
          nisl, a condimentum ante tellus nec risus. Curabitur scelerisque vitae
          ipsum quis posuere. Curabitur rhoncus tempus justo, sit amet feugiat
          sem ultrices sed. Sed ut sagittis lorem. Proin ut scelerisque urna.
          Aliquam id lobortis sapien, vitae tincidunt mauris. Pellentesque eget
          ante pharetra, rutrum justo id, luctus tellus.
        </UnderlineParagraph>
      ),
      snippet: `
<UnderlineParagraph>...text content...</UnderlineParagraph>
      `,
    },
    {
      category: "Input",
      title: "Text Input",
      details: <></>,
      display: (
        <Input
          id="myFieldId"
          type="text"
          name="myField"
          label="Input Some Text"
          error="blah blah blah"
          hint="asdfasdf asdf asdf asdf"
          placeholder="placeholder"
          required={true}
        ></Input>
      ),
      snippet: `
TODO
      `,
    },
    {
      category: "Input",
      title: "Text Input",
      details: <></>,
      display: (
        <Input
          id="myDateId"
          type="date"
          name="myDate"
          label="Input Some Text"
          hint="asdfasdf asdf asdf asdf"
          placeholder="placeholder"
          required={true}
        ></Input>
      ),
      snippet: `
TODO
      `,
    },
    {
      category: "Input",
      title: "Text Area",
      details: <></>,
      display: (
        <TextAreaInput
          id="myTextAreaId"
          name="myTextArea"
          label="Input Some Text"
          hint="asdfasdf asdf asdf asdf"
          required={true}
          className="w-[40rem]"
          placeholder="placeholder"
        ></TextAreaInput>
      ),
      snippet: `
TODO
      `,
    },
    {
      category: "Input",
      title: "Text Area",
      details: <></>,
      display: (
        <TextAreaInput
          id="myTextAreaId"
          name="myTextArea"
          label="Input Some Text"
          hint="asdfasdf asdf asdf asdf"
          required={true}
          className="w-[40rem]"
          error="This is an error"
          placeholder="placeholder"
        ></TextAreaInput>
      ),
      snippet: `
TODO
      `,
    },
    {
      category: "Input",
      title: "Select",
      details: <></>,
      display: (
        <Select
          id="myTextAreaId"
          name="myTextArea"
          label="Input Some Text"
          hint="asdfasdf asdf asdf asdf"
          required={true}
          className="w-[40rem]"
          error="This is an error"
          options={[
            {
              displayName: "WI",
              value: "wisconsin",
            },
            {
              displayName: "NY",
              value: "New York",
            },
          ]}
        ></Select>
      ),
      snippet: `
TODO
      `,
    },
  ],
};
