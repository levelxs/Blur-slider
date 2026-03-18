import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            smoothTouch: true,

        });

        const raf = (time) => {
            lenis.raf(time * 1000);
        };

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(raf);
            lenis.destroy();
        };
    }, []);
};

export default useLenis;