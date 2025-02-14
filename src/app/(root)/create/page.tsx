"use client";

import {
    FileUploadDropzone,
    FileUploadList,
    FileUploadRoot,
} from "@/components/ui/file-upload"
import Image from "next/image";
import { useState } from "react";
import GLOBE from "/public/globe.svg";

export default function CreateTBI() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);
    // TODO: Get the type of this
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [uploadedImage, setUploadedImage] = useState<null>(null);

    return (
        <>
            <h1 className="text-3xl">Create TBI</h1>
            {!isImageUploaded ? (
                <FileUploadRoot maxW="xl" alignItems="stretch" maxFiles={10}>
                    <FileUploadDropzone
                        bg={"white"}
                        label="Drag and drop here to upload"
                        description=".png, .jpg up to 5MB"
                    />
                    <FileUploadList />
                </FileUploadRoot>
            ) : (
            <>
                <Image src={GLOBE} alt="Uploaded Image" height={100} width={100} />
            </>
            )}
        </>
    );
};
