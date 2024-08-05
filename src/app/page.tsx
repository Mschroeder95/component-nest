import H1 from "./published-components/client/headings/H1";
import H2 from "./published-components/client/headings/H2";
import H3 from "./published-components/client/headings/H3";
import H4 from "./published-components/client/headings/H4";
import H5 from "./published-components/client/headings/H5";
import H6 from "./published-components/client/headings/H6";

export default function Home() {
  return (
    <main className="bg-light-1 dark:bg-dark-1">
      <H1>Hello</H1>
      <H2>Test</H2>
      <H3>blah</H3>
      <H4>Hello</H4>
      <H5>Test</H5>
      <H6>blah</H6>
      <div className="h-[2000px] w-screen bg-light-1 dark:bg-dark-1"></div>
    </main>
  );
}
