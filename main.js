// Chuyen doi anh va noi dung cua Content-header khi hover

const rightContents = document.querySelectorAll('.right-content');
const mainImage = document.getElementById('main-image');
const mainTitle = document.getElementById('main-title');
const mainContent = document.getElementById('main-content');

let currentIndex = 0;
const contentArray = Array.from(rightContents);

function updateMainContent(index) {
    const content = contentArray[index];
    mainImage.src = content.getAttribute('data-image');
    mainTitle.textContent = content.getAttribute('data-title');
    mainContent.textContent = content.getAttribute('data-content');

    rightContents.forEach((content) => {
        content.classList.remove('active');
    });
    content.classList.add('active');
}

rightContents.forEach((content, index) => {
    content.addEventListener('mouseover', () => {
        clearInterval(autoSwitch);
        updateMainContent(index);
    });
    content.addEventListener('mouseleave', () => {
        autoSwitch = setInterval(() => {
            currentIndex = (currentIndex + 1) % contentArray.length;
            updateMainContent(currentIndex);
        }, 3000);
    });
});

let autoSwitch = setInterval(() => {
    currentIndex = (currentIndex + 1) % contentArray.length;
    updateMainContent(currentIndex);
}, 2000);


