import VanillaTilt from "vanilla-tilt";

export const teachersCardTitl = (card: HTMLElement) => {
    VanillaTilt.init(card, {
        max: 15,
        speed: 500,
        glare: true,
        "max-glare": 0.2,
        scale: 1.02,
    });
}