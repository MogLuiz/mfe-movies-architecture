import { Link } from "react-router-dom";
import { UnstyledButton, Group, Text } from "@mantine/core";
import { NavLink } from "../shared/types";

export const MainLink: React.FunctionComponent<NavLink> = ({ label, path }) => (
  <Link to={path}>
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  </Link>
);
