"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 720;
const FRAMES_PER_SEQ = 240;

export default function CanvasScroller() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const { scrollYProgress } = useScroll();

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            for (let i = 0; i < TOTAL_FRAMES; i++) {
                const img = new Image();
                let folder = "redbull1";
                let frameNumber = i + 1;

                if (i >= 2 * FRAMES_PER_SEQ) {
                    folder = "redbull3";
                    frameNumber = i - 2 * FRAMES_PER_SEQ + 1;
                } else if (i >= FRAMES_PER_SEQ) {
                    folder = "redbull2";
                    frameNumber = i - FRAMES_PER_SEQ + 1;
                }

                const paddedNumber = String(frameNumber).padStart(3, "0");
                img.src = `/jpeg/${folder}/ezgif-frame-${paddedNumber}.jpg`;
                loadedImages.push(img);
            }
            setImages(loadedImages);
        };

        loadImages();
    }, []);

    const drawFrame = (frameIndex: number) => {
        if (!canvasRef.current || images.length === 0 || !images[frameIndex]) return;

        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        const img = images[frameIndex];
        if (img.complete) {
            // Draw image to cover canvas exactly
            const { width, height } = canvasRef.current;
            const imgRatio = img.width / img.height;
            const canvasRatio = width / height;

            let drawWidth = width;
            let drawHeight = height;
            let x = 0;
            let y = 0;

            if (canvasRatio > imgRatio) {
                drawHeight = width / imgRatio;
                y = (height - drawHeight) / 2;
            } else {
                drawWidth = height * imgRatio;
                x = (width - drawWidth) / 2;
            }

            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(img, x, y, drawWidth, drawHeight);
        }
    };

    // Draw first frame when images are initially loaded
    useEffect(() => {
        if (images.length > 0 && images[0].complete) {
            drawFrame(0);
        } else if (images.length > 0) {
            images[0].onload = () => drawFrame(0);
        }
    }, [images]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const frameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.floor(latest * TOTAL_FRAMES)
        );
        // Request animation frame for smooth drawing
        requestAnimationFrame(() => {
            drawFrame(frameIndex);
        });
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Redraw current frame on resize
                const latest = scrollYProgress.get();
                const frameIndex = Math.min(
                    TOTAL_FRAMES - 1,
                    Math.floor(latest * TOTAL_FRAMES)
                );
                drawFrame(frameIndex);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial sizing
        return () => window.removeEventListener("resize", handleResize);
    }, [images, scrollYProgress]);

    return (
        <div className="fixed top-0 left-0 w-full h-[100vh] -z-10 bg-redbull-black">
            <canvas
                ref={canvasRef}
                className="block w-full h-full object-cover"
            />
            {/* Fallback dark overlay to make text readable */}
            <div className="absolute inset-0 bg-black/40" />
        </div>
    );
}
