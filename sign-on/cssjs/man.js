    // đk chuyển sang php 
   
        
   // Kiểm tra màu của các viền
function checkBorderColors() {
const passwordInput = document.getElementById('psw');
const taikhoanInput = document.getElementById("taikhoan");
const confirmPasswordInput = document.getElementById('psw-repeat');
const passwordBorderColor = passwordInput.style.borderColor;
const confirmPasswordBorderColor = confirmPasswordInput.style.borderColor;
const emailBorderColor = taikhoanInput.style.borderColor;

// Nếu cả ba viền đều có màu xanh lá cây (rgb(0, 255, 0))
if (passwordBorderColor === "rgb(0, 255, 0)" && confirmPasswordBorderColor === "rgb(0, 255, 0)" && emailBorderColor === "rgb(0, 255, 0)") {
 // Chuyển đến trang PHP
 return true;
} else {
 // Nếu có ít nhất một viền không có màu xanh lá cây, không thực hiện chuyển trang và hiển thị cảnh báo
 alert("Vui lòng điền thông tin đúng và đủ trước khi đăng ký!");
 return false;
}
}





//  mật khẩu 

// Lấy các phần tử input và các phần tử thông báo từ DOM
const passwordInput = document.getElementById('psw');
const confirmPasswordInput = document.getElementById('psw-repeat');
const confirmPasswordtrue = document.getElementById('text-color-password-true');
const confirmPasswordflase = document.getElementById('text-color-password-flase');
const confirmPassword1 = document.getElementById('text-color-password');

// Định nghĩa hàm kiểm tra sự khớp nhau của mật khẩu
function checkPasswordMatch() {
   const password = passwordInput.value;
   const confirmPassword = confirmPasswordInput.value;
   
   if (password === confirmPassword && (password !== "" || confirmPassword !== "")) {
   // Nếu mật khẩu khớp nhau, đặt màu xanh lá cây cho khung nhập liệu
   confirmPasswordtrue.style.display = 'block'; // Ẩn thông báo lỗi
   confirmPasswordflase.style.display = 'none'; // Hiển thị thông báo thành công
   passwordInput.style.border = "2px solid rgb(0, 255, 0)";
   confirmPasswordInput.style.border = "2px solid rgb(0, 255, 0)";
   confirmPassword1.style.display = 'none'; // Ẩn thông báo thành công
   } else if (password === "" || confirmPassword === "") {
   // Nếu mật khẩu không khớp nhau hoặc có một trong hai mật khẩu rỗng, đặt màu đỏ cho khung nhập liệu
   confirmPasswordtrue.style.display = 'none'; // Hiển thị thông báo lỗi
   confirmPasswordflase.style.display = 'none'; // Ẩn thông báo thành công
   confirmPassword1.style.display = 'block'; // Ẩn thông báo thành công
   passwordInput.style.border = "2px solid rgb(255, 0, 8)";
   confirmPasswordInput.style.border = "2px solid rgb(255, 0, 8)";
   } else {
   // Nếu mật khẩu không khớp nhau, đặt màu đỏ cho khung nhập liệu
   confirmPasswordtrue.style.display = 'none'; // Hiển thị thông báo lỗi
   confirmPasswordflase.style.display = 'block'; // Ẩn thông báo thành công
   passwordInput.style.border = "2px solid rgb(255, 0, 8)";
   confirmPasswordInput.style.border = "2px solid rgb(255, 0, 8)";
   confirmPassword1.style.display = 'none'; // Ẩn thông báo thành công
}

}

// Gắn sự kiện blur vào input nhập lại mật khẩu để kiểm tra sự khớp nhau khi click ra khỏi input
confirmPasswordInput.addEventListener('blur', checkPasswordMatch);









//  phần xác thực tài khoản 

 document.addEventListener("DOMContentLoaded", function() {
   const taikhoanInput = document.getElementById("taikhoan");
   const trueText = document.getElementById("text-color-true");
   const falseText = document.getElementById("text-color-flase");
   let prevInputValue = "";

   // Sự kiện khi người dùng nhập liệu
   taikhoanInput.addEventListener("input", function() {
     const inputValue = taikhoanInput.value.trim();
     // Nếu trường nhập liệu trống và trước đó không trống
     if (inputValue === "" && prevInputValue !== "") {
       // Cập nhật ngay lập tức khi xóa hết nội dung
       validateInput();
     }
     // Lưu trạng thái hiện tại của trường nhập liệu
     prevInputValue = inputValue;
   });

   // Sự kiện khi người dùng rời khỏi trường nhập liệu
   taikhoanInput.addEventListener("blur", function() {
     // Cập nhật style khi người dùng click ra ngoài
     validateInput();
   });

   // Hàm kiểm tra và cập nhật trạng thái hiển thị
   function validateInput() {
     const inputValue = taikhoanInput.value.trim();
     const phoneRegex = /^\d{11}$/; // Số điện thoại bắt đầu với 0 và ít nhất 10 chữ số
     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Kiểm tra định dạng email

     if (inputValue === "") {
       taikhoanInput.style.border = "none";
       trueText.style.display = "none";
       falseText.style.display = "none";
     } else {
       if (phoneRegex.test(inputValue) || emailRegex.test(inputValue)) {
         trueText.style.display = "block";
         falseText.style.display = "none";
         taikhoanInput.style.border = "2px solid rgb(0, 255, 0)";
       } else {
         falseText.style.display = "block";
         trueText.style.display = "none";
         taikhoanInput.style.border = "2px solid rgb(255, 0, 8)";
       }
     }
   }
 });
  