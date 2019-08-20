// Collapse nav for small screens
let toggleNavStatus = false;

let toggleNav = function() {
    let getNav = document.querySelector('#collapse-nav');
    let getNavUl = document.querySelector('#collapse-nav ul');
    let getNavLinks = document.querySelectorAll('#collapse-nav a');

    if (toggleNavStatus === false) {
        getNavUl.style.visibility = "visible";
        getNav.style.width = "100%";

        let arrayLength = getNavLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getNavLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        let arrayLength = getNavLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getNavLinks[i].style.opacity = "0";
        }

        getNav.style.width = "0";
        getNavUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }

}

// Make nav links active upon scroll
const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('section');

function changeLinkState() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);