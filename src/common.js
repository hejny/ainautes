console.log('common.js loaded');

// !!! Remove logging

function shuffleElements() {
    const containers = Array.from(document.querySelectorAll('.shuffle'));
    console.log(containers);

    for (const container of containers) {
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
    }
}

shuffleElements();

/*
document.addEventListener('load', () => {
    console.log('load event fired');
    shuffleElements();
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    shuffleElements();
});
*/
