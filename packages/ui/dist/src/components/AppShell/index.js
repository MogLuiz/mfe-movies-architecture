import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { useStore } from "store";
import { AppShell as MantineAppShell, Header, Title, MantineProvider, Navbar, Text, } from "@mantine/core";
import { MainLink } from "../MainLink";
export const AppShell = ({ title, colorScheme, routes, navLinks, }) => {
    const { movies } = useStore();
    return (_jsx(BrowserRouter, { children: _jsx(MantineProvider, Object.assign({ withGlobalStyles: true, withNormalizeCSS: true, theme: { colorScheme } }, { children: _jsxs(MantineAppShell, Object.assign({ padding: "md", header: _jsxs(Header, Object.assign({ height: 60, p: "xs", sx: { display: "flex" }, styles: (theme) => ({
                        main: {
                            backgroundColor: theme.colorScheme === "dark"
                                ? theme.colors.dark[8]
                                : theme.colors.gray[0],
                        },
                    }) }, { children: [_jsx(Title, Object.assign({ sx: { flexGrow: 1 } }, { children: title })), _jsxs(Text, Object.assign({ size: "xl" }, { children: [movies.length, " selected"] }))] })), navbar: _jsx(Navbar, Object.assign({ width: { base: 300 }, height: 500, p: "xs" }, { children: navLinks.map((link) => (_createElement(MainLink, Object.assign({}, link, { key: link.path })))) })) }, { children: [_jsx(Routes, { children: routes.map((route) => (_jsx(Route, { path: route.path, element: _jsx(route.element, {}) }, route.path))) }), _jsx(Outlet, {})] })) })) }));
};
