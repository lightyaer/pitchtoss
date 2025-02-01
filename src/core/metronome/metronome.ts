import { createStore } from "solid-js/store";

export const [metronomeStore, setMetronomeStore] = createStore({
  isPlaying: false,
  tempo: 120,
  beatsPerMeasure: 4,
  subDivisions: 1,
  currentBeat: 0,
  currentSubdivision: 2,
  tickSound: new Audio("/sound-library/Perc_Can_lo.wav"), // Optional: Add a tick sound
  accentSound: new Audio("/sound-library/Perc_Can_hi.wav"), // Optional: Accent for downbeat
  nextTickTime: 0,
  intervalTime: 0,
});

export const getIntervalTime = () => {
  const beatDuration = 60000 / metronomeStore.tempo; // ms per beat
  return beatDuration / metronomeStore.subDivisions; // ms per subdivision
};

export const start = () => {
  if (!metronomeStore.isPlaying) {
    setMetronomeStore({
      isPlaying: true,
      nextTickTime: performance.now(),
      intervalTime: getIntervalTime(),
    });
    scheduleTick();
  }
};

export const scheduleTick = () => {
  if (!metronomeStore.isPlaying) return;

  const currentTime = performance.now();

  // If it's time for the next tick
  if (currentTime >= metronomeStore.nextTickTime) {
    tick();
    // Schedule the next tick
    setMetronomeStore(
      "nextTickTime",
      metronomeStore.nextTickTime + metronomeStore.intervalTime
    );
  }

  // Request the next frame to continue checking
  requestAnimationFrame(() => scheduleTick());
};

export const tick = () => {
  console.log(metronomeStore.currentSubdivision);
  // Handle beat and subdivision counting
  if (metronomeStore.currentSubdivision === 0) {
    console.log("Tick"); // Regular tick
    metronomeStore.tickSound.play(); // Optional: Play regular tick sound

    // if (metronomeStore.currentBeat === 0) {
    //   console.log("Accent!"); // Accent on the downbeat
    //   metronomeStore.accentSound.play(); // Optional: Play accent sound on downbeat
    // } else {
    //   console.log("Tick"); // Regular tick
    //   metronomeStore.tickSound.play(); // Optional: Play regular tick sound
    // }
  }

  // Increment subdivision and handle wrap-around
  setMetronomeStore(
    "currentSubdivision",
    metronomeStore.currentSubdivision + 1
  );
  if (metronomeStore.currentSubdivision >= metronomeStore.subDivisions) {
    setMetronomeStore({
      currentSubdivision: 0,
      currentBeat: metronomeStore.currentBeat + 1,
    });
    if (metronomeStore.currentBeat >= metronomeStore.beatsPerMeasure) {
      setMetronomeStore("currentBeat", 0);
    }
  }
};

export const setTempo = (newTempo: number) => {
  setMetronomeStore({ tempo: newTempo, intervalTime: getIntervalTime() });
};

export const setBeatsPerMeasure = (newBeatsPerMeasure: number) => {
  setMetronomeStore({
    beatsPerMeasure: newBeatsPerMeasure,
    intervalTime: getIntervalTime(),
  });
};

export const setSubdivisions = (newSubdivisions: number) => {
  setMetronomeStore({
    subDivisions: newSubdivisions,
    intervalTime: getIntervalTime(),
  });
};

export const stop = () => {
  setMetronomeStore("isPlaying", false);
};

// // Example usage:
// const advancedMetronome = new AdvancedMetronome(120, 4, 2); // 120 BPM, 4/4 time, eighth notes
// advancedMetronome.start();

// To change tempo:
// advancedMetronome.setTempo(140);

// To change subdivisions (e.g., from eighth notes to triplets):
// advancedMetronome.setSubdivisions(3);

// To stop the metronome:
// advancedMetronome.stop();
