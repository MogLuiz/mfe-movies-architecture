/// <reference types="react" />
import { NavLink, RouteType } from "./types";
type AppShellProps = {
    title: string;
    colorScheme?: "light" | "dark";
    routes: RouteType[];
    navLinks: NavLink[];
};
export declare const AppShell: React.FunctionComponent<AppShellProps>;
export {};
//# sourceMappingURL=index.d.ts.map