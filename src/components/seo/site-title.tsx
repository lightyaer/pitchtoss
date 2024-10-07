import { Title } from "@solidjs/meta";
import type { JSX } from "solid-js";

export const SiteTitle = (props: { children: JSX.Element }) => {
  return <Title>{props.children} | pitchtoss</Title>;
};
