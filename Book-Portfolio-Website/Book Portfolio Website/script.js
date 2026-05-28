const pages = document.querySelectorAll('.book-page.page-right');

// Set up page turn buttons
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);
        
        // Find the index of this page in the pages array
        let pageIndex = Array.from(pages).indexOf(pageTurn);

        if (pageTurn.classList.contains('turn')) {
            // Turning to the right (Back button)
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - pageIndex;
            }, 500);
        } else {
            // Turning to the left (Next button)
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + pageIndex;
            }, 500);
        }
    }
});

// Contact me button when clicked
const contactMeBtn = document.querySelector('.btn.contact-me');
contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
}

// Back profile button when clicked
const backProfileBtn = document.querySelector('.back-profile');
backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        let pageIndex = pages.length - 1 - index;
        setTimeout(() => {
            pages[pageIndex].classList.remove('turn');
            setTimeout(() => {
                pages[pageIndex].style.zIndex = 20 - pageIndex;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
}

// Opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// Open animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);

// Open animation for pages
pages.forEach((_, index) => {
    let pageIndex = pages.length - 1 - index;
    setTimeout(() => {
        pages[pageIndex].classList.remove('turn');
        setTimeout(() => {
            pages[pageIndex].style.zIndex = 20 - pageIndex;
        }, 500);
    }, (index + 1) * 200 + 2100);
});