import { Flex } from "../ui/flex";
import { H1, Link, Muted } from "../ui/typography";
import { ThemeToggle } from "./theme-toggle";

export const Nav = () => {
  return (
    <nav>
      <Flex flexDirection="row" alignItems="center" class="p-5">
        <H1>
          <Link href="/random">pitch toss!</Link>
        </H1>
        <div>
          <Flex flexDirection="row" class="gap-2" justifyContent="start">
            <Link href="/random">random</Link>
            <Link disabled href="/metronome">
              <Muted>metronome (coming soon)</Muted>
            </Link>
            <Link disabled href="#">
              <Muted>tuner (coming soon)</Muted>
            </Link>
          </Flex>
        </div>
        <ThemeToggle />
      </Flex>
    </nav>
  );
};
