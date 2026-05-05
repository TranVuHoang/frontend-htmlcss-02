const darkMode = document.querySelector("#darkMode");

// bắt sự kiện click
darkMode.addEventListener("click", () => {
  // kiểm tra có class bx-moon hay không
  if (darkMode.classList.contains("bx-moon")) {
    // đổi icon moon -> sun
    darkMode.classList.replace("bx-moon", "bx-sun");

    // thêm class color vào body
    document.body.classList.toggle("color");
  } else {
    // đổi icon sun -> moon
    darkMode.classList.replace("bx-sun", "bx-moon");

    // xóa class color khỏi body
    document.body.classList.remove("color");
  }
});
