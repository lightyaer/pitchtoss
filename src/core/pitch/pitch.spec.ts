import { describe, expect, test } from "bun:test";
import { PITCHES } from "~/core/pitch/PITCHES";
import { addPitch, pitchStore, random, removePitch, reset } from "./pitch";
import type { SelectedPitches } from "~/types/pitch";

describe("pitch store", () => {
	test("should add pitch", () => {
		addPitch(PITCHES["C#"]);
		expect(pitchStore.pitches["C#"]).toBe(0);
	});

	test("should remove pitch", () => {
		addPitch(PITCHES["C#"]);
		removePitch(PITCHES["C#"]);
		expect(pitchStore.pitches["C#"]).toBeUndefined();
	});

	test("should reset pitches", () => {
		reset();

		for (const pitch in pitchStore.pitches) {
			expect(pitchStore.pitches[pitch as keyof SelectedPitches]).toBe(0);
		}
	});

	test("should generate random pitch", () => {
		let randomPitches = [];

		for (const index of Array(100).keys()) {
			random();
			randomPitches.push(pitchStore.randomPitch);
			expect(pitchStore.pitches[pitchStore.randomPitch]).toBe(1);
			if (index % 7 === 0) {
				randomPitches = [];
			}
			expect(new Set(randomPitches).size).toBe(randomPitches.length);
		}
	});
});
