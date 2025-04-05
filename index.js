let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

showSlide(); // Hiển thị slide đầu tiên
setInterval(showSlide, 3000); // Tự động chuyển ảnh mỗi 3 giây
