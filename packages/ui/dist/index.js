import { jsx as _jsx } from "react/jsx-runtime";
import { AppShell as MantineAppShel, Header, Title, MantineProvider, } from "@mantine/core";
export const AppShell = ({ title, colorScheme }) => (_jsx(MantineProvider, Object.assign({ withGlobalStyles: true, withNormalizeCSS: true, theme: { colorScheme } }, { children: _jsx(MantineAppShel, Object.assign({ header: _jsx(Header, Object.assign({ height: 60, p: "xs", sx: { display: "flex" }, styles: (theme) => ({
                main: {
                    backgroundColor: theme.colorScheme === "dark"
                        ? theme.colors.dark[8]
                        : theme.colors.gray[0],
                },
            }) }, { children: _jsx(Title, { children: title }) })) }, { children: _jsx("h1", { children: "Hello Mantine!" }) })) })));
