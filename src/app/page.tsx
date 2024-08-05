import H1 from "./published-components/client/headings/H1";
import H2 from "./published-components/client/headings/H2";
import H3 from "./published-components/client/headings/H3";

export default function Home() {
  return (
    <main className="bg-light-1 dark:bg-dark-1">
      <H1>Hello</H1>
      <H2>Test</H2>
      <H3>blah</H3>
    </main>
  );
}
