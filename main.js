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


// Lấy tất cả các phần tử có class 'hoverDiv'
const divElements = document.querySelectorAll('.hoverDiv');

// Lặp qua mỗi phần tử và thêm sự kiện 'mouseenter' và 'mouseleave'
divElements.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        div.classList.add('hovered');
    });

    div.addEventListener('mouseleave', () => {
        div.classList.remove('hovered');
    });
});


// Date time colum right 
function displayDateTime() {
    const now = new Date();
    const dayNumber = (now.getDay() === 0) ? 8 : now.getDay() + 1; // Chủ nhật sẽ là 8, các ngày khác cộng thêm 1
    const options = { 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric', 
        hour12: false
    };
    const dateStr = now.toLocaleDateString('vi-VN', options);
    const timeStr = now.toLocaleTimeString('vi-VN', {hour12: true});

    document.getElementById('dateTime').innerHTML = `Thứ ${dayNumber}, Ngày ${dateStr}, ${timeStr}`;
}

displayDateTime();
setInterval(displayDateTime, 1000);


// video youtube music
function openCity(evt, play) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(play).style.display = "block";
    evt.currentTarget.className += " active";
}



// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};


// Responsive
const btnOpen = document.querySelector('.open-menu');
const menu = document.querySelector('.nav-item-responsive');

btnOpen.onclick = () =>{
    menu.classList.toggle('hidden');
}
