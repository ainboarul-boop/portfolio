"use client";

import Image from "next/image";
import { images } from "@/lib/images";
import { useState, useEffect } from "react";

export default function PortfolioImagePage() {

    const [image, setImage] = useState(images);

    useEffect(() => {
        console.log(image, "Images");
    }, [])

    return (
        <div className="">
            {/* {image.map((image,index) => {

            })} */}
        </div>
    )


}