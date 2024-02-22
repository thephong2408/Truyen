document.getElementById("on").addEventListener("click", function() {
    toggleIcons();
  });
  
  document.getElementById("out").addEventListener("click", function() {
    toggleIcons();
  });
  
  function toggleIcons() {
    var iconOn = document.getElementById("on");
    var iconOut = document.getElementById("out");
    var offcanvas = document.getElementById("offcanvas");
    var body = document.getElementById("body-body");
  
    // Kiểm tra nếu biểu tượng "on" đang hiển thị
    if (!iconOn.classList.contains("d-none")) {
      // Ẩn biểu tượng "on" và hiển thị biểu tượng "out"
      body.classList.add("d-none");
      offcanvas.classList.remove("d-none");
      iconOn.classList.add("d-none");
      iconOut.classList.remove("d-none");
    } else {
      // Ngược lại, ẩn biểu tượng "out" và hiển thị biểu tượng "on"
      iconOn.classList.remove("d-none");
      iconOut.classList.add("d-none");
      offcanvas.classList.add("d-none");
      body.classList.remove("d-none");
    }
  }
  // khi thu nhỏ màn hình thì thư mục hiện lên
  window.addEventListener('resize', function() {
    if (window.innerWidth < 1200) {
      document.getElementById('search').classList.add('d-none');
      document.getElementById('myDiv').classList.remove('d-none');
    } else {
      document.getElementById('search').classList.remove('d-none');
      document.getElementById('myDiv').classList.add('d-none');
    }
  });




  function checkScreenSize() {
    var commentDiv = document.getElementById("comment");
    if (window.innerWidth < 1400) {
        // Nếu kích thước màn hình nhỏ hơn 1400px
        commentDiv.classList.remove("col-3");
        commentDiv.classList.add("container");
    } else {
        // Nếu kích thước màn hình lớn hơn hoặc bằng 1400px
        commentDiv.classList.remove("container");
        commentDiv.classList.add("col-3");
    }
}

// Gọi hàm checkScreenSize khi trang được tải và mỗi khi kích thước cửa sổ thay đổi
window.onload = checkScreenSize;
window.onresize = checkScreenSize;




// chuyển từ sáng qua chế đội tối
var isWhite = true; // Biến để theo dõi trạng thái màu

document.getElementById("morning-evening").addEventListener("click", function() {
    var element = document.getElementById("morning-evening");
    var elements1 = document.querySelectorAll("[class*=time]");
    var elements2 = document.querySelectorAll("[class*=a4]");
    var elements3 = document.querySelectorAll("[class*=a1]");
    var elements4 = document.querySelectorAll("[class*=span-item]");
    var elements5 = document.querySelectorAll("[class*=page-link]");
    var elements6 = document.querySelectorAll("[class*=name-dst]");
    var elements7 = document.querySelectorAll("[class*=chap-dst]");
    
    
    if (isWhite) {
        element.style.color = "yellow"; // Nếu là trắng thì thay đổi thành màu vàng
        document.body.style.background = '#414244';
        elements1.forEach(function(el) {
            el.style.color = "#fff";
        });
        elements2.forEach(function(el) {
            el.style.color = "#fff";
        });
        elements5.forEach(function(el) {
            el.style.color = "#252830"; // Đổi màu chữ của elements5 về màu đen
        });
        elements3.forEach(function(el) {
            el.style.color = "#fff"; // Đổi màu chữ của elements3 về màu trắng
        });
        elements4.forEach(function(el) {
          el.style.color = "#fff";
        });
        elements6.forEach(function(el) {
          el.style.color = "#fff";
        });
        elements7.forEach(function(el) {
          el.style.color = "#fff";
        });

    } else {
        element.style.color = "white"; // Nếu không phải trắng thì chuyển về màu trắng
        document.body.style.background = 'white'; //Thêm dòng này để đảm bảo nền được đổi màu
        elements1.forEach(function(el) {
            el.style.color = "#252830"; 
        });
        elements2.forEach(function(el) {
            el.style.color = "#252830"; 
        });
        elements3.forEach(function(el) {
            el.style.color = "#252830"; 
        });
        elements4.forEach(function(el) {
          el.style.color = "#252830"; 
        });
        elements6.forEach(function(el) {
          el.style.color = "#252830"; 
      });
      elements7.forEach(function(el) {
          el.style.color = "#252830"; 
      });
    }
    
    isWhite = !isWhite; 
});






