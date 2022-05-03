import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Stack,
    useDisclosure,
    useMediaQuery,
} from "@chakra-ui/react";
import { useRef } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { NavLink } from "../NavLink";
import { LogoImage } from "../SVG";

export const Navbar = () => {
    const [isLesserThan960] = useMediaQuery("(max-width: 960px)");
    return <>{isLesserThan960 ? <MobileView /> : <DesktopView />}</>;
};

const DesktopView = () => {
    return (
        <Flex justify="space-between" bg="primary" px="10" py="5">
            <Flex w="30%" justify="center" align="center">
                <LogoImage />
            </Flex>
            <Flex align="center" w="60%">
                <Stack direction="row" spacing={{ base: "7", xl: "10" }} mt="1">
                    {NavLinks?.map((element) => {
                        return (
                            <Box key={element.id}>
                                <NavLink
                                    label={element.label}
                                    href={element.href}
                                    fontWeight="600"
                                />
                            </Box>
                        );
                    })}
                </Stack>
            </Flex>
            <Flex flex="1" align="center" justify="flex-end">
                <SignUpLoginBtn />
            </Flex>
        </Flex>
    );
};
const MobileView = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
        <>
            <Flex justify="space-between" bg="primary" px="10" py="5">
                <Box w="30%">
                    <LogoImage />
                </Box>
                <Flex align="center">
                    <Box>
                        <HiMenuAlt2
                            onClick={onOpen}
                            size="30px"
                            color="black"
                            cursor="pointer"
                        />
                    </Box>
                </Flex>
            </Flex>

            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg="primary">
                    <DrawerCloseButton color="red" />
                    <DrawerHeader>
                        <Flex w="100%" justify="center">
                            <LogoImage fillColor="red" textColor="black" />
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing="5">
                            {NavLinks?.map((element) => {
                                return (
                                    <Box key={element.id}>
                                        <NavLink
                                            label={element.label}
                                            href={element.href}
                                            fontWeight="600"
                                        />
                                    </Box>
                                );
                            })}
                            {/* <NavLink
                                icon={AiOutlineHome}
                                label="Home"
                                href="#"
                                bg="gray.200"
                            />
                            <NavLink
                                icon={SiEventstore}
                                label="Events"
                                href="#"
                                bg="gray.200"
                            />
                            <NavLink
                                icon={BsInfoCircle}
                                label="About Us"
                                href="#"
                                bg="gray.200"
                            />
                            <NavLink
                                icon={SiBloglovin}
                                label="Benefits"
                                href="#"
                                bg="gray.200"
                            />
                            <NavLink
                                icon={RiContactsLine}
                                label="Get the App"
                                href="#"
                                bg="gray.200"
                            />
                            <NavLink
                                icon={RiContactsLine}
                                label="I'm Photographer"
                                href="#"
                                bg="gray.200"
                            /> */}
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

const SignUpLoginBtn = () => {
    return (
        <Button
            color="white"
            py="6"
            px={{ base: "5", xl: "7" }}
            style={{
                background:
                    "linear-gradient(268.75deg, #3E6588 3.84%, #2887AF 100%)",
                borderRadius: "6px",
            }}
        >
            Sign Up or Login
        </Button>
    );
};

const NavLinks = [
    {
        id: 1,
        href: "#",
        label: "Home",
    },
    { id: 3, href: "#", label: "About Us" },
    { id: 4, href: "#", label: "Benfits" },
    { id: 5, href: "#", label: "Get the App" },
    { id: 6, href: "#", label: "I’m a Photographer" },
];
