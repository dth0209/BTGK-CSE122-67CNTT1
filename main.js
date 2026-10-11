const form = document.getElementById("formdangky");
const hoTen = document.getElementById("hoten");
const email = document.getElementById("email");
const matKhau = document.getElementById("matkhau");

const loiHoTen = document.getElementById("loihoten");
const loiEmail = document.getElementById("loiemail");
const loiMatKhau = document.getElementById("loimatkhau");

form.addEventListener("submit", function(event) {
  // Chặn không cho trang web load lại
  event.preventDefault();

  let hopLe = true;

  if (hoTen.value.trim() === "") {
    loiHoTen.innerText = "Họ và tên không được để trống!";
    hoTen.className = "onhap vienloi";
    hopLe = false;
  } else {
    loiHoTen.innerText = "";
    hoTen.className = "onhap vienxanh";
  }

  const mauEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    loiEmail.innerText = "Vui lòng nhập email!";
    email.className = "onhap vienloi";
    hopLe = false;
  } else if (!mauEmail.test(email.value.trim())) {
    loiEmail.innerText = "Email không đúng định dạng!";
    email.className = "onhap vienloi";
    hopLe = false;
  } else {
    loiEmail.innerText = "";
    email.className = "onhap vienxanh";
  }

  if (matKhau.value.trim() === "") {
    loiMatKhau.innerText = "Vui lòng nhập mật khẩu!";
    matKhau.className = "onhap vienloi";
    hopLe = false;
  } else if (matKhau.value.length < 8) {
    loiMatKhau.innerText = "Mật khẩu không hợp lệ!";
    matKhau.className = "onhap vienloi";
    hopLe = false;
  } else {
    loiMatKhau.innerText = "";
    matKhau.className = "onhap vienxanh";
  }

  if (hopLe === true) {
    alert("Đăng ký thành công!");
    form.reset();
    hoTen.className = "onhap";
    email.className = "onhap";
    matKhau.className = "onhap";
  }
});
