import type { JSX } from "solid-js";

export function Moon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>moon</title>
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9"
      />
    </svg>
  );
}
