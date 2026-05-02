// @ts-expect-error — unstable_ViewTransition is available when experimental.viewTransition is enabled
import { unstable_ViewTransition as ViewTransition } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return <ViewTransition>{children}</ViewTransition>;
}
