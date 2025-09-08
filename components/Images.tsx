"use client"

import { imagesGsap } from "@/animations/gsap";
import { imagesData } from "@/constants/constants";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Images() {
    useEffect(() => {
        imagesGsap()
    }, []);

    return (
        <section className="grid grid-cols-4 w-full gap-2.5 items-center images-section overflow-hidden">
            {imagesData.map((imgArray, index) => (
                <div className="grid h-full content-between" style={{ gridRow: index === 0 || 2 ? 2 : 1 }} key={index}>
                    {imgArray.map((img, index) =>
                        <Image src={img.src} alt="fintechhub cowork" className="w-full images-img" key={index} width={img.width} height={img.height} />
                    )}
                </div>
            ))}
        </section>
    );
}
