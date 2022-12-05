import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import {
  AppShell as MantineAppShel,
  Header,
  Title,
  MantineProvider,
} from "@mantine/core";

export type Route = {
  element: React.FunctionComponent;
  path: string;
};

export const AppShell: React.FunctionComponent<{
  title: string;
  colorScheme?: "light" | "dark";
  routes: Route[];
}> = ({ title, colorScheme, routes }) => (
  <BrowserRouter>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
      <MantineAppShel
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
      </MantineAppShel>
    </MantineProvider>
  </BrowserRouter>
);
