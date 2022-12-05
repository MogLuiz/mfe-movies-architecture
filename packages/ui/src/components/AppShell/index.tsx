import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import {
  AppShell as MantineAppShell,
  Header,
  Title,
  MantineProvider,
  Navbar,
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
}) => (
  <BrowserRouter>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
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
            <Title>{title}</Title>
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
