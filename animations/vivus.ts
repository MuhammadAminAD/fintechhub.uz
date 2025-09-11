import Vivus from "vivus";

let vivusInstance: Vivus | null = null;

export const loaderVivus = (setIsLoading: (a: boolean) => void) => {
    const svgElement = document.getElementById("my-svg");

    if (!svgElement) {
        console.warn("Vivus: #my-svg elementi topilmadi!");
        setIsLoading(false);
        return;
    }

    if (vivusInstance) {
        vivusInstance.stop();
        vivusInstance = null;
    }

    vivusInstance = new Vivus(
        "my-svg",
        {
            type: "delayed",            
            duration: 200,              
            animTimingFunction: Vivus.EASE,
        },
        () => {
            setTimeout(() => setIsLoading(false), 200);
        }
    );
};

export const destroyVivus = () => {
    if (vivusInstance) {
        vivusInstance.stop();
        vivusInstance = null;
    }
};
