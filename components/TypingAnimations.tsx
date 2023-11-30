"use client"
import { type } from "os";
import React, { useEffect, useRef } from "react"
import Typed from "typed.js"




interface TypingAnimationProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed: number;
    loop?: boolean;
}


export default function TypingAnimation({
    strings,
    typeSpeed = 50,
    backSpeed = 30,
    loop = true
}: TypingAnimationProps)  {
    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings,
            typeSpeed,
            backSpeed,
            loop,
        };


        const typed = new Typed(typedRef.current, options)

        return () => {
            typed.destroy();
        };
    }, [strings, typeSpeed, backSpeed, loop])


    return <span ref={typedRef} />

}