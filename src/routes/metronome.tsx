import { Metronome } from "~/components/composite/metronome";
import { Flex } from "~/components/ui/flex";
import { Text } from "~/components/ui/typography";

export default function MetronomePage() {
  return (
    <main>
      <Flex
        flexDirection="col"
        alignItems="center"
        justifyContent="center"
        class="gap-4"
      >
        <Text>metronome</Text>
        <Metronome />
      </Flex>
    </main>
  );
}
