import Button from "./published-components/client/buttons/Button";
import CallToAction from "./published-components/client/headings/CallToAction";
import H1 from "./published-components/client/headings/H1";
import H3 from "./published-components/client/headings/H3";
import H4 from "./published-components/client/headings/H4";
import BoldParagraph from "./published-components/client/paragraphs/BoldParagraph";
import LeadingParagraph from "./published-components/client/paragraphs/LeadingParagraph";
import LinkParagraph from "./published-components/client/paragraphs/LinkParagraph";
import Paragraph from "./published-components/client/paragraphs/Paragraph";

export default function Home() {
  return (
    <main className="h-fit min-h-screen w-screen bg-light-1 dark:bg-dark-1">
      <div className="mx-auto w-full max-w-[90rem]">
        <CallToAction
          className="pt-36"
          title="Open source, community built, and easy to use"
          subtitle="Learn how to include the Component Nest in your project."
        >
          <Button href="/docs">Jump In</Button>
        </CallToAction>
        <div className="mt-8 flex w-full flex-col items-center">
          <H3>A component library built for</H3>
          <Paragraph>
            <LinkParagraph href="https://nextjs.org/">Next.js</LinkParagraph> in
            combination with{" "}
            <LinkParagraph href="https://tailwindcss.com/">
              Tailwind
            </LinkParagraph>
          </Paragraph>
        </div>
        <H1 className="mt-6">Contributing</H1>
        <LeadingParagraph className="indent-6">
          Do you want to see <BoldParagraph>all the code</BoldParagraph> for
          this webiste? That's great! Since this is an open source project you
          can view the code on our{" "}
          <LinkParagraph
            href={"https://github.com/Mschroeder95/component-nest"}
          >
            GitHub
          </LinkParagraph>
          . If you are really ambitious you can even create some components and
          open a pull request!
        </LeadingParagraph>
        <Paragraph className="indent-6">
          This project is still in early stages of development, if you don't see
          a component that you want to use in your project please consider
          making it reusable and adding to our project. Together we can build an
          amazing component library with incredible code reusability.
        </Paragraph>
        <H4 className="mt-6">Distributed via NPM</H4>
        <Paragraph>
          Release branches are configured to automatically publish new
          components to our{" "}
          <LinkParagraph href="https://www.npmjs.com/package/component-nest">
            npm package
          </LinkParagraph>
        </Paragraph>
      </div>
    </main>
  );
}
