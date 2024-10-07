import type { PITCHES } from "~/core/pitch/PITCHES";

export type PitchKey = keyof typeof PITCHES; // Extracts the keys from PITCHES

export type SelectedPitches = {
	[key in PitchKey]?: number; // Key is from PITCHES, value is a number, and keys are optional
};
