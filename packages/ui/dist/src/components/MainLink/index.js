import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { UnstyledButton, Group, Text } from "@mantine/core";
export const MainLink = ({ label, path }) => (_jsx(Link, Object.assign({ to: path }, { children: _jsx(UnstyledButton, Object.assign({ sx: (theme) => ({
            display: "block",
            width: "100%",
            padding: theme.spacing.xs,
            borderRadius: theme.radius.sm,
            color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
            "&:hover": {
                backgroundColor: theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
            },
        }) }, { children: _jsx(Group, { children: _jsx(Text, Object.assign({ size: "sm" }, { children: label })) }) })) })));
