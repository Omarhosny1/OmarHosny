import type { HTMLAttributes } from "react";

import accessibility from "../../assets/accessibility.svg";
import email from "../../assets/baseline-email.svg";
import code from "../../assets/code.svg";
import css from "../../assets/css-solid.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import html from "../../assets/html-solid.svg";
import javascript from "../../assets/javascript-fill.svg";
import linkedin from "../../assets/linkedin.svg";
import nextjs from "../../assets/nextjs-fill.svg";
import performance from "../../assets/performance.svg";
import react from "../../assets/react.svg";
import reactquery from "../../assets/reactquery.svg";
import redux from "../../assets/redux-fill.svg";
import responsive from "../../assets/responsive.svg";
import restApi from "../../assets/rest-api.svg";
import seo from "../../assets/seo.svg";
import supabase from "../../assets/supabase-fill.svg";
import tailwind from "../../assets/tailwind.svg";
import typescript from "../../assets/typescript.svg";

type IconProps = HTMLAttributes<HTMLSpanElement>;

type MaskIconProps = IconProps & { src: string };

function MaskIcon({ src, style, className, ...props }: MaskIconProps) {
  return (
    <span
      aria-hidden="true"
      {...props}
      className={className ?? "size-[1em]"}
      style={{
        display: "inline-block",
        flexShrink: 0,
        backgroundColor: "currentColor",
        maskImage: `url("${src}")`,
        maskMode: "alpha",
        maskPosition: "center",
        maskRepeat: "no-repeat",
        maskSize: "contain",
        WebkitMaskImage: `url("${src}")`,
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        ...style,
      }}
    />
  );
}

export function GithubIcon(props: IconProps) {
  return <MaskIcon src={github} {...props} />;
}

export function NextJsIcon(props: IconProps) {
  return <MaskIcon src={nextjs} {...props} />;
}

export function LinkedinIcon(props: IconProps) {
  return <MaskIcon src={linkedin} {...props} />;
}

export function HtmlIcon(props: IconProps) {
  return <MaskIcon src={html} {...props} />;
}

export function CssIcon(props: IconProps) {
  return <MaskIcon src={css} {...props} />;
}

export function JsIcon(props: IconProps) {
  return <MaskIcon src={javascript} {...props} />;
}

export function TypeScriptIcon(props: IconProps) {
  return <MaskIcon src={typescript} {...props} />;
}

export function ReactIcon(props: IconProps) {
  return <MaskIcon src={react} {...props} />;
}

export function TailwindIcon(props: IconProps) {
  return <MaskIcon src={tailwind} {...props} />;
}

export function PerformanceOptimizationIcon(props: IconProps) {
  return <MaskIcon src={performance} {...props} />;
}

export function SEOIcon(props: IconProps) {
  return <MaskIcon src={seo} {...props} />;
}

export function RQIcon(props: IconProps) {
  return <MaskIcon src={reactquery} {...props} />;
}

export function ReduxIcon(props: IconProps) {
  return <MaskIcon src={redux} {...props} />;
}

export function SupabaseIcon(props: IconProps) {
  return <MaskIcon src={supabase} {...props} />;
}

export function GitIcon(props: IconProps) {
  return <MaskIcon src={git} {...props} />;
}

export function RestAPIIcon(props: IconProps) {
  return <MaskIcon src={restApi} {...props} />;
}

export function AccessabilityIcon(props: IconProps) {
  return <MaskIcon src={accessibility} {...props} />;
}

export function ResponsiveIcon(props: IconProps) {
  return <MaskIcon src={responsive} {...props} />;
}

export function EmailIcon(props: IconProps) {
  return <MaskIcon src={email} {...props} />;
}

export function CodeIcon(props: IconProps) {
  return <MaskIcon src={code} {...props} />;
}
