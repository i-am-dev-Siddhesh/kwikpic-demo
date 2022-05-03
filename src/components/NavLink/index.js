import {
    HStack,
    Icon,
    Link,
    LinkProps,
    useColorModeValue as mode,
    Text,
} from "@chakra-ui/react";
import * as React from "react";

export const NavLink = (props) => {
    const { icon, label, href, ...rest } = props;

    return (
        <Link
            transition="all 0.3s"
            fontWeight="medium"
            fontSize={{ base: "12px", xl: "15px" }}
            userSelect="none"
            color="#3A3A3A"
            _activeLink={{
                bg: mode("gray.200", "gray.700"),
                color: "inherit",
            }}
            _focusVisible={{
                outline: "none",
                boxShadow: "none",
            }}
            {...rest}
        >
            <HStack spacing="4">
                {icon && <Icon as={icon} fontSize="lg" opacity={0.64} />}
                <Text as="span">{label}</Text>
            </HStack>
        </Link>
    );
};
