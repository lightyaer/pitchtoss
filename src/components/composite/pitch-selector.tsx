import { Button } from "~/components/ui/button";
import { PITCHES } from "~/core/pitch/PITCHES";
import { pitchStore, togglePitch } from "~/core/pitch/pitch";
import type { PitchKey } from "~/types/pitch";

export const PitchSelector = () => {
  const pitches = Object.keys(PITCHES);

  return (
    <div class="mt-10">
      <div class="relative w-80 h-80">
        {pitches.map((pitch, index) => {
          const angle = (index / pitches.length) * 2 * Math.PI - Math.PI / 2;
          const x = Math.cos(angle) * 150 + 160;
          const y = Math.sin(angle) * 150 + 160;
          const isSelected = Object.hasOwnProperty.call(
            pitchStore.pitches,
            pitch
          );

          return (
            <Button
              key={pitch}
              variant={isSelected ? "default" : "outline"}
              size="circle"
              class="absolute"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => togglePitch(pitch as PitchKey)}
            >
              {pitch}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
