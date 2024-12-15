alert("Внимание. Сайт сделан с адаптивом до 1023px!")

//Часы
let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
  let currentTime = new Date();

  hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000)


const btnAll = document.getElementById("open-modal_all");
const modalAll = document.getElementById("modal_all");

const closeBtn = document.querySelector(".modal-close");

btnAll.onclick = () =>{
  modalAll.classList.add("modal-active");

  modalAll.addEventListener("click",hideModal);

  function closeModal() {
    modalAll.classList.remove("modal-active");
  }

  function hideModal(event) {
    if (event.target === modalAll) {
      closeModal();
    }
  }
}



const btnhtml = document.getElementById("open-modal_html");
const modalhtml = document.getElementById("modal_html");

btnhtml.onclick = () => {
  modalhtml.classList.add("modal-active");

  modalhtml.addEventListener("click", hideModal);

  function closeModal() {
    modalhtml.classList.remove("modal-active");
  }

  function hideModal(event) {
    if (event.target === modalhtml) {
      closeModal();
    }
  }
}

const btncss = document.getElementById("open-modal_css");
const modalcss = document.getElementById("modal_css");


btncss.onclick = () => {
  modalcss.classList.add("modal-active");

  modalcss.addEventListener("click", hideModal);

  function closeModal() {
    modalcss.classList.remove("modal-active");
  }

  function hideModal(event) {
    if (event.target === modalcss) {
      closeModal();
    }
  }
}

const btnjs = document.getElementById("open-modal_js");
const modaljs = document.getElementById("modal_js");


btnjs.onclick = () => {
  modaljs.classList.add("modal-active");

  modaljs.addEventListener("click", hideModal);

  function closeModal() {
    modaljs.classList.remove("modal-active");
  }

  function hideModal(event) {
    if (event.target === modaljs) {
      closeModal();
    }
  }
}
const btngit = document.getElementById("open-modal_git");
const modalgit = document.getElementById("modal_git");


btngit.onclick = () => {
  modalgit.classList.add("modal-active");

  modalgit.addEventListener("click", hideModal);

  function closeModal() {
    modalgit.classList.remove("modal-active");
  }

  function hideModal(event) {
    if (event.target === modalgit) {
      closeModal();
    }
  }
}





//слайдер
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
  showSlider('next');
}

prevDom.onclick = function () {
  showSlider('prev');
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext)
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
  let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

  if (type === 'next') {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add('next');
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add('prev');
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext)
}