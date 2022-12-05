import * as React from "react";
import {
  AppShell as MantineAppShel,
  Header,
  Title,
  MantineProvider,
} from "@mantine/core";

export const AppShell: React.FunctionComponent<{
  title: string;
  colorScheme?: "light" | "dark";
}> = ({ title, colorScheme }) => (
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
      <h1>Hello Mantine!</h1>
    </MantineAppShel>
  </MantineProvider>
);
