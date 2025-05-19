import ActiveSectionContextProvider from "./active-section";
import React from "react";
import ThemeContextProvider from "./theme-context";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ActiveSectionContextProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </ActiveSectionContextProvider>
  );
}
