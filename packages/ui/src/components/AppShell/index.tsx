import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { useStore } from "store";

import {
  AppShell as MantineAppShell,
  Header,
  Title,
  MantineProvider,
  Navbar,
  Text,
} from "@mantine/core";
import { MainLink } from "../MainLink";

import { NavLink } from "../shared/types";
import { RouteType } from "./types";

type AppShellProps = {
  title: string;
  colorScheme?: "light" | "dark";
  routes: RouteType[];
  navLinks: NavLink[];
};

export const AppShell: React.FunctionComponent<AppShellProps> = ({
  title,
  colorScheme,
  routes,
  navLinks,
}) => {
  const { movies } = useStore();

  return (
    <BrowserRouter>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <MantineAppShell
          padding="md"
          header={
            <Header
              height={60}
              p="xs"
              sx={{ display: "flex" }}
              styles={(theme) => ({
                main: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[8]
                      : theme.colors.gray[0],
                },
              })}
            >
              <Title sx={{ flexGrow: 1 }}>{title}</Title>
              <Text size="xl">{movies.length} selected</Text>
            </Header>
          }
          navbar={
            <Navbar width={{ base: 300 }} height={500} p="xs">
              {navLinks.map((link) => (
                <MainLink {...link} key={link.path} />
              ))}
            </Navbar>
          }
        >
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Routes>
          <Outlet />
        </MantineAppShell>
      </MantineProvider>
    </BrowserRouter>
  );
};
