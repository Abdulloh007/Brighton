let brifShowContent = document.querySelector(".brif__button-show"),
brifContent = document.querySelector(".tabs-wrapper");

brifShowContent.addEventListener('click', () => {
    if (brifContent.style.display === "none") {
        brifContent.style.display = 'flex';
        brifShowContent.textContent = "Закрыть бриф"
    } else {
        brifContent.style.display = 'none';
        brifShowContent.textContent = "Открыть бриф"
    }
})


var containers;
function initDrawers() {
    // Get the containing elements
    containers = document.querySelectorAll(".brif__show-trigger");
    setHeights();
    wireUpTriggers();
    window.addEventListener("resize", setHeights);
}

window.addEventListener("load", initDrawers);

function setHeights() {
    containers.forEach(container => {
        // Get content
        let content = container.querySelector(".brif__content-right-form-contacts");
        // Needed if this is being fired after a resize
        content.removeAttribute("aria-hidden");
        // Height of content to show/hide
        let heightOfContent = content.getBoundingClientRect().height;
        // console.log(content.getBoundingClientRect());
        // Set a CSS custom property with the height of content
            // container.style.setProperty("--containerHeight", `${heightOfContent}px`);
        // Once height is read and set
        setTimeout(e => {
            container.classList.add("height-is-set");
            content.setAttribute("aria-hidden", "true");
        }, 0);
    });
}

function wireUpTriggers() {
    containers.forEach(container => {
        // Get each trigger element
        let btn = container.querySelector(".brif__content-right-item");
        // Get content
        let content = container.querySelector(".brif__content-right-form-contacts");
        btn.addEventListener("click", () => {

            btn.classList.toggle('hide');

            container.setAttribute(
                "data-drawer-showing",
                container.getAttribute("data-drawer-showing") === "true" ? "false" : "true",
            );
            content.setAttribute(
                "aria-hidden",
                content.getAttribute("aria-hidden") === "true" ? "false" : "true",
            );
            });
        });

}
