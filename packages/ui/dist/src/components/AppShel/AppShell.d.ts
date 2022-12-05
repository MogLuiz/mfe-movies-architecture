/// <reference types="react" />
export type Route = {
    element: React.FunctionComponent;
    path: string;
};
export type NavLink = {
    label: string;
    path: string;
};
type AppShellProps = {
    title: string;
    colorScheme?: "light" | "dark";
    routes: Array<Route>;
    navLinks: Array<NavLink>;
};
export declare const AppShell: React.FunctionComponent<AppShellProps>;
export {};
//# sourceMappingURL=AppShell.d.ts.map