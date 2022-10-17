// next.d.ts

import type { NextComponentType, NextPageContext, NextLayoutComponentType } from "next";
import type { AppProps } from "next/app";

declare module "next" {
  type NextLayoutComponentType<P = Record<string, unknown>> = NextComponentType<NextPageContext, any, P> & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
}

declare module "next/app" {
  type AppLayoutProps<P = Record<string, unknown>> = AppProps & {
    Component: NextLayoutComponentType;
  };
}
