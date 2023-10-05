function shuffleElements() {
    const containers = Array.from(document.querySelectorAll('.shuffle'));

    for (const container of containers) {
        if (container.dataset.shuffled) {
            continue;
        }

        console.info('🎲 Shuffling', container);

        const items = Array.from(container.childNodes)
            .filter((item) => item instanceof HTMLElement)
            .filter((item) => !item.classList.contains('no-shuffle'));

        for (const item of items) {
            container.removeChild(item);
        }

        const shuffledItems = [...items].sort(() => Math.random() - 0.5);

        for (const item of shuffledItems) {
            container.prepend(item);
            // TODO: Position of no-shuffle is not preserved in true sence, it is just working for our specific case
        }

        container.dataset.shuffled = true;
    }
}

shuffleElements();

document.addEventListener('load', () => {
    shuffleElements();
});

document.addEventListener('DOMContentLoaded', () => {
    shuffleElements();
});

setTimeout(() => {
    shuffleElements();
}, 1000);
