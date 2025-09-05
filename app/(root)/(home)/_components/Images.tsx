"use client"

import { imagesData } from "@/constants/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

export default function Images() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const images = gsap.utils.toArray<HTMLImageElement>(".images-img");

            gsap.from(images, {
                y: 400,
                opacity: 0,
                scale: 0,
                stagger: 2,
                duration: 10,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: images[0],
                    start: "top 90%",
                    end: "bottom -30%",
                    toggleActions: "play none none reverse",
                    scrub: true,
                },
            });

            ScrollTrigger.create({
                trigger: ".images-section",
                pin: true,
                start: "top 10%",
                end: "+=1400"
            })
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="grid grid-cols-4 w-full gap-2.5 items-center images-section overflow-hidden">
            {imagesData.map((imgArray, index) => (
                <div className="grid h-full content-between" style={{ gridRow: index === 0 || 2 ? 2 : 1 }} key={index}>
                    {imgArray.map((img, index) =>
                        <img src={img.src} alt="fintechhub cowork" className="w-full images-img" key={index} />
                    )}
                </div>
            ))}
        </section>
    );
}
