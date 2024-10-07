import type { JSX } from "solid-js";
import { cn } from "~/lib/utils";

export const ExtraLarge = (props: { children: JSX.Element }) => {
  return (
    <h1 class="scroll-m-20 text-9xl font-extrabold tracking-tight lg:text-6xl">
      {props.children}
    </h1>
  );
};

export const H1 = (props: { children: JSX.Element }) => {
  return (
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {props.children}
    </h1>
  );
};

export const H2 = (props: { children: JSX.Element }) => {
  return (
    <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {props.children}
    </h2>
  );
};

export const H3 = (props: { children: JSX.Element }) => {
  return (
    <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
      {props.children}
    </h3>
  );
};

export const H4 = (props: { children: JSX.Element }) => {
  return (
    <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
      People stopped telling jokes
    </h4>
  );
};

export const P = (props: { children: JSX.Element }) => {
  return <p class="leading-7 [&:not(:first-child)]:mt-6">{props.children}</p>;
};

export const Large = (props: { children: JSX.Element }) => {
  return <div class="text-lg font-semibold">{props.children}</div>;
};

export const Small = (props: { children: JSX.Element }) => {
  return (
    <small class="text-sm font-medium leading-none">{props.children}</small>
  );
};

export const Muted = (props: { children: JSX.Element }) => {
  return <p class="text-muted-foreground">{props.children}</p>;
};

export const Text = (props: { children: JSX.Element }) => {
  return <small class="text-base font-medium">{props.children}</small>;
};

export const Link = (props: {
  children: JSX.Element;
  href: string;
  disabled?: boolean;
}) => {
  return (
    <a
      aria-disabled={true}
      href={props.href}
      class={cn(
        props.disabled && "cursor-not-allowed",
        !props.disabled && "cursor-pointer"
      )}
    >
      {props.children}
    </a>
  );
};
