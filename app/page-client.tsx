"use client";

import Lottie from "react-lottie-player";
import HeroSectionAnimation from "@/public/animations/hero-section.json";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function PageClient() {
  return (
    <>
      <div className="flex flex-col sm:flex-row min-h-screen justify-center">
        <div className="flex-1 flex flex-col justify-center gap-4">
          <h1>Welcome to AriaTech👋</h1>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sunt molestiae magnam ipsam, odit in molestias dolore aliquid ea
            labore saepe obcaecati voluptates, excepturi quisquam eligendi
            dicta. Cumque, id culpa!
          </p>
          <div className="flex gap-2 w-full">
            <Link
            href="/auth/login"
              className={`${buttonVariants({ variant: "default" })} flex-1`}
            >
              Login
            </Link>
            <Button variant="outline" className="flex-1">
              Start
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Lottie
            loop
            animationData={HeroSectionAnimation}
            play
            style={{ width: 500, height: 300 }}
            className="object-contain w-full"
          />
        </div>
      </div>
    </>
  );
}
