import { PITCHES } from "~/core/pitch/PITCHES";
import { createStore } from "solid-js/store";
import type { PitchKey, SelectedPitches } from "~/types/pitch";

interface PitchStore {
  pitches: SelectedPitches;
  randomPitch: PitchKey;
}

export const [pitchStore, setPitchStore] = createStore<PitchStore>({
  pitches: {
    [PITCHES.C]: 1,
    [PITCHES.D]: 0,
    [PITCHES.E]: 0,
    [PITCHES.F]: 0,
    [PITCHES.G]: 0,
    [PITCHES.A]: 0,
    [PITCHES.B]: 0,
  },
  randomPitch: PITCHES.C,
});

export const isSelected = (pitch: PitchKey) =>
  Object.hasOwnProperty.call(pitchStore.pitches, pitch);

export const togglePitch = (pitch: PitchKey) => {
  console.log(Object.hasOwnProperty.call(pitchStore.pitches, pitch));
  if (Object.hasOwnProperty.call(pitchStore.pitches, pitch)) {
    console.log("remove pitch", pitch);
    removePitch(pitch);
  } else {
    console.log("add pitch", pitch);
    addPitch(pitch);
  }
};

export const addPitch = (pitch: PitchKey) =>
  setPitchStore((state) => {
    return { pitches: { ...state.pitches, [pitch]: 0 } };
  });

export const removePitch = (pitch: PitchKey) =>
  setPitchStore((state) => {
    const { [pitch]: _, ...pitches } = state.pitches;
    return { pitches };
  });

const getRemainingPitches = () => {
  const remainingPitches: PitchKey[] = [];

  for (const pitch in pitchStore.pitches) {
    if (pitchStore.pitches[pitch as keyof SelectedPitches] === 0) {
      remainingPitches.push(pitch as PitchKey);
    }
  }
  return remainingPitches;
};

export const random = () => {
  let remainingPitches = getRemainingPitches();

  if (!remainingPitches.length) {
    reset();
    remainingPitches = getRemainingPitches();
  }

  const randomIndex = Math.floor(Math.random() * remainingPitches.length);
  const randomPitch = remainingPitches[randomIndex];

  setPitchStore("pitches", randomPitch as keyof SelectedPitches, 1);
  setPitchStore("randomPitch", randomPitch);
};

export const reset = () => {
  const newState: SelectedPitches = {};
  for (const pitch in pitchStore.pitches) {
    newState[pitch as keyof SelectedPitches] = 0;
  }

  setPitchStore({ pitches: newState });
};
