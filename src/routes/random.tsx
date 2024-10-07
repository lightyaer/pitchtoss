import { Generator } from "~/components/composite/generator";
import { Flex } from "~/components/ui/flex";
import { H1, Text } from "~/components/ui/typography";

export default function Home() {
  return (
    <main>
      <Flex
        flexDirection="col"
        alignItems="center"
        justifyContent="center"
        class="gap-4"
      >
        <Text>generate random pitches</Text>
        <Generator />
      </Flex>
    </main>
  );
}
