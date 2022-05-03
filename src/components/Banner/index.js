import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export const Banner = () => {
    return (
        <Flex
            bg="primary"
            direction={{ base: "column", xl: "row" }}
            minH="44.6rem"
            justify="center"
            align="center"
            overflow="hidden"
        >
            <Box
                w={{ base: "100%", xl: "60%" }}
                mb={{ base: "-10px", md: "-100px" }}
            >
                <BannerHeader />
            </Box>
            <Box w={{ base: "100%", xl: "60%" }}>
                <BannerImage />
            </Box>
        </Flex>
    );
};

const BannerHeader = () => {
    return (
        <Flex py="14" px="10" justify="center" align="center">
            <Flex direction="column">
                <Heading
                    color="textSecondary"
                    maxW="400px"
                    fontSize={{ base: "4xl", md: "6xl" }}
                >
                    Header will come here
                </Heading>
                <Text
                    as="span"
                    borderBottom="3px solid #FFCC00"
                    w="60px"
                ></Text>
                <Text mt="5" color="rgba(0, 0, 0, 0.4)" fontWeight="600">
                    Body Text or caption will come here
                </Text>
                <Flex
                    mt="10"
                    direction={{ base: "column", md: "row" }}
                    align={{ base: "center", md: "inherit" }}
                >
                    <Image
                        src="/applelogo.png"
                        w="249px"
                        h="88px"
                        alt="Apple Logo"
                    ></Image>
                    <Image
                        src="/googlelogo.png"
                        w="251px"
                        h="88px"
                        alt="Google Logo"
                    ></Image>
                </Flex>
            </Flex>
        </Flex>
    );
};

const BannerImage = () => {
    return (
        <Flex
            justify="center"
            align="center"
            direction="column"
            mt={{ base: "44", lg: "56" }}
            // px="10"
        >
            <Image
                src="/bannerBgLogo.png"
                transform="scale(1.0)"
                objectFit="cover"
            ></Image>
            <Image
                zIndex="10000"
                mt={{ sm: "-500px", base: "-650px", "2xl": "-700px" }}
                w={{ sm: "447px", md: "447px", "2xl": "547px" }}
                h={{ sm: "630px", md: "730px", "2xl": "830px" }}
                src="/bannerlogo.png"
                objectFit="cover"
            ></Image>
        </Flex>
    );
};
