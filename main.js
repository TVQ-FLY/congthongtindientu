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
}, 3000);


// Date time colum right 
function displayDateTime() {
    const now = new Date();
    const dayNumber = (now.getDay() === 0) ? 8 : now.getDay() + 1; // Chủ nhật sẽ là 8, các ngày khác cộng thêm 1
    const options = { 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true
    };
    const dateStr = now.toLocaleDateString('vi-VN', options);
    const timeStr = now.toLocaleTimeString('vi-VN', {hour12: true});

    document.getElementById('dateTime').innerHTML = `Thứ ${dayNumber}, ${dateStr}, ${timeStr} PM`;
}

// Gọi hàm lần đầu để hiển thị ngay lập tức
displayDateTime();

// Cập nhật thời gian mỗi giây
setInterval(displayDateTime, 1000);


