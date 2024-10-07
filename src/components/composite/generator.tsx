import { pitchStore, random } from "~/core/pitch/pitch";
import { Button } from "../ui/button";
import { Flex } from "../ui/flex";
import { ExtraLarge, Muted } from "../ui/typography";
import { PitchSelector } from "./pitch-selector";
import { onMount } from "solid-js";

export const Generator = () => {
  onMount(() => {
    const handleClick = (event: KeyboardEvent) => {
      console.log(event.key);
      if (event.key === " ") {
        random();
      }
    };

    document.addEventListener("keydown", handleClick);

    return () => document.removeEventListener("keydown", handleClick);
  });

  return (
    <Flex
      flexDirection="col"
      alignItems="center"
      justifyContent="center"
      class="gap-10"
    >
      <ExtraLarge>{pitchStore.randomPitch}</ExtraLarge>
      <Flex flexDirection="col" class="gap-2">
        <Button type="button" size="lg" onClick={() => random()}>
          random
        </Button>
        <Muted>(space)</Muted>
      </Flex>

      <PitchSelector />
    </Flex>
  );
};
