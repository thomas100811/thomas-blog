// 導覽列滾動時加陰影
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// 表單送出時顯示訊息（需配合 formspree 或其他後端服務）
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("感謝你的留言，我會盡快回覆！");
    contactForm.reset();
  });
}

