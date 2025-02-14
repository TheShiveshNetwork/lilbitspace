import Image from "next/image";
import LOGO from "/public/logo.png";
import { Button, Heading } from "@chakra-ui/react";

export function LandingCTA() {
    return (
        <div className="min-h-screen green-radial-gradient flex flex-col items-center justify-center">
            <Image src={LOGO} alt="lilbitspace" height={100} width={100} />
            <Heading fontSize={"4xl"} fontWeight={"semibold"} mt={4} mb={2} textAlign={"center"}>Welcome to Lilbitspace</Heading>
            <p className="text-lg text-center">A place to share your thoughts and ideas with the world</p>
            <Button colorPalette={"blue"} size={"xl"} fontSize={"lg"} variant={"solid"} px={4} mt={4} fontWeight={400}>Try for free</Button>
        </div>
    );
};
