import { createStore } from "solid-js/store";

export const [metronomeStore, setMetronomeStore] = createStore({
  isPlaying: false,
  bpm: 120,
});

export const play = () => {
  setMetronomeStore("isPlaying", true);
};

export const stop = () => {
  setMetronomeStore("isPlaying", false);
};

export const setBpm = (bpm: number) => {
  setMetronomeStore("bpm", bpm);
};
