"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function ProgressBarProvider() {
  return (
    <ProgressBar
      height="2px"
      color="#DA9060"
      options={{ easing: "ease", speed: 500 }}
    />
  );
}
