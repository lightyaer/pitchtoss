import { Button } from "~/components/ui/button";
import { Flex } from "~/components/ui/flex";
import { TextField, TextFieldInput } from "~/components/ui/text-field";
import { Muted } from "~/components/ui/typography";
import {
  metronomeStore,
  setSubdivisions,
  setTempo,
  start,
  stop,
} from "~/core/metronome/metronome";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const Metronome = () => {
  return (
    <Flex
      flexDirection="col"
      alignItems="center"
      justifyContent="center"
      class="gap-10"
    >
      <Flex flexDirection="col" class="gap-2">
        <Flex flexDirection="row" class="gap-2" alignItems="center">
          <Button
            type="button"
            size="lg"
            onClick={() => setTempo(metronomeStore.tempo - 10)}
          >
            -
          </Button>

          <TextField>
            <TextFieldInput
              type="number"
              value={metronomeStore.tempo}
              onChange={(e) => setTempo(Number(e.target.value))}
            />
          </TextField>

          <Button
            type="button"
            size="lg"
            onClick={() => setTempo(metronomeStore.tempo + 10)}
          >
            +
          </Button>
        </Flex>
        <Flex flexDirection="row" class="gap-2" alignItems="center">
          <Select
            value={metronomeStore.subDivisions}
            onChange={(value) => setSubdivisions(Number(value))}
            options={[0.5, 1, 2]}
            placeholder="Select a fruit…"
            itemComponent={(props) => (
              <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
            )}
          >
            <SelectTrigger aria-label="Fruit" class="w-[180px]">
              <SelectValue<string>>{metronomeStore.subDivisions}</SelectValue>
            </SelectTrigger>
            <SelectContent />
          </Select>
        </Flex>
      </Flex>

      <Flex flexDirection="col" class="gap-2">
        <Button type="button" size="lg" onClick={() => start()}>
          start
        </Button>
        <Muted>(space)</Muted>
      </Flex>

      <Flex flexDirection="col" class="gap-2">
        <Button type="button" size="lg" onClick={() => stop()}>
          stop
        </Button>
        <Muted>(space)</Muted>
      </Flex>
    </Flex>
  );
};
