/// <reference types="react" />
export type Route = {
    element: React.FunctionComponent;
    path: string;
};
export declare const AppShell: React.FunctionComponent<{
    title: string;
    colorScheme?: "light" | "dark";
    routes: Route[];
}>;
//# sourceMappingURL=AppShell.d.ts.map