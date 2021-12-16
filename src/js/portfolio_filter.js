const buttons = document.querySelectorAll('.portfolio__nav-item');
const cards = document.querySelectorAll(".portfolio__cards-card");

function unlightButtons() {
    buttons.forEach((button) => {
        button.style.color = "#b8b8b8";
    })
}

function filter (category, items) {
    items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category);
        const isShowAll = category.toLowerCase() === 'all';
        if (isItemFiltered && !isShowAll) {
            item.classList.add('hide');
        } else {
            item.classList.remove("hide");
        }
    });
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        unlightButtons();
        button.style.color = "white";
        const currentCategory = button.dataset.filter;
        filter(currentCategory, cards);
    });
})



