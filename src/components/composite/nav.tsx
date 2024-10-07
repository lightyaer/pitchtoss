import { ThemeToggle } from "~/components/composite/theme-toggle";
import { Flex } from "~/components/ui/flex";
import { H1, Link, Muted } from "~/components/ui/typography";

export const Nav = () => {
  return (
    <nav>
      <Flex flexDirection="row" alignItems="center" class="p-5">
        <H1>
          <Link href="/random">pitch toss!</Link>
        </H1>

        <ThemeToggle />
      </Flex>
      <div class="flex-1 mb-10">
        <Flex
          flexDirection="col"
          class="gap-2 md:flex-row"
          justifyContent="evenly"
        >
          <Link href="/random">random</Link>
          <Link disabled href="/metronome">
            <Muted>metronome (coming soon)</Muted>
          </Link>
          <Link disabled href="#">
            <Muted>tuner (coming soon)</Muted>
          </Link>
          <Link href="/about">about</Link>
        </Flex>
      </div>
    </nav>
  );
};
