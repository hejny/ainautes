function shuffleElements() {
    const shuffleElements = document.querySelectorAll('.shuffle');
    shuffleElements.forEach((element) => {
        const subElements = element.getElementsByClassName('item');
        for (let i = subElements.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            element.appendChild(subElements[i]);
            element.insertBefore(subElements[j], subElements[i]);
        }
    });
}

// Call the shuffleElements function to shuffle the sub-elements initially
shuffleElements();