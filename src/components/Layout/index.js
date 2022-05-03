import { Divider } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../Banner";
import { Navbar } from "../Navbar";

export const BasicLayout = () => {
    return (
        <>
            <Navbar />
            <Divider />
            <Banner />
        </>
    );
};
