const foodContainers = document.querySelectorAll('.food-container');

foodContainers.forEach(container => {
    const items = container.querySelectorAll('.food-item');
    let currentIndex = 0;

    function showNextItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    function showPreviousItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        items[currentIndex].classList.add('active');
    }

    const prevButton = document.createElement('button');
    prevButton.innerText = 'Previous';
    prevButton.addEventListener('click', showPreviousItem);
    container.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.addEventListener('click', showNextItem);
    container.appendChild(nextButton);

    items[currentIndex].classList.add('active');
});
