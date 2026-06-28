"use client";

import { useEffect } from "react";

export function LangBg() {
  useEffect(() => {
    document.documentElement.lang = "bg";
    return () => {
      document.documentElement.lang = "en";
    };
  }, []);
  return null;
}
