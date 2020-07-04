$(document).ready(function() {
    $("#email").blur(function() {
        var mail = $(this).val();
        const regex = /^\w+@[a-zA-Z]{3,}\.com$/i;
        if (regex.test(mail) == true) {
            $("#resultemail").text('');
            $(this).css("border", "1px solid #ccc");
        } else {
            $("#resultemail").text('Vui lòng ghi đúng định dạng!');
            $(this).css("border", "1px solid red");
            $("#resultemail").css("color", "red");
        }
    });
});
$(document).ready(function() {
    $("#email").blur(function() {
        var mail = $(this).val();
        if (mail != "resgigi99@gmail.com") {
            $("#resultemail").text('');
            $(this).css("border", "1px solid #ccc");
        } else {
            $("#resultemail").text("Tài khoản đã được đăng ký");
            $("#resultemail").css("align-item", "center");
            $("#resultemail").css("color", "red");
            $("#resultemail").css("border-radius", "2px");
        }
    });
});
/*
 $("#resultemail").text("Tài khoản đã được đăng ký");
        $("#resultemail").css("align-item", "center");
        $("#resultemail").css("color", "red");
        $("#resultemail").css("border-radius", "2px");*/
$(document).ready(function() {
    $("#phonenum").blur(function() {
        var mobile = $(this).val();
        const regex = /^(0|\+84)(1\d{3,4,5,6,7,9}|[2-9]\d{8,9})$/;
        if (regex.test(mobile) == true) {
            $("#resultnum").text('');
            $(this).css("border", "1px solid #ccc");
        } else {
            $("#resultnum").text('Vui lòng ghi đúng định dạng!');;
            $(this).css("border", "1px solid red"),
                $("#resultnum").css("color", "red");
        }
    });
});
$(document).ready(function() {
    $("#username").blur(function() {
        var name = $(this).val();
        if (name == '') {
            $("#resultname").text('Vui lòng không để trống tên!');
            $(this).css("border", "1px solid red");
            $("#resultname").css("color", "red");
        } else {
            $("#resultname").text('');
            $(this).css("border", "1px solid #ccc");
        }
    });
});
$(document).ready(function() {
    $("#password").blur(function() {
        var pass = $(this).val();
        if (pass.length < 6) {
            $("#resultpass").text('Mật khẩu phải trên 6 kí tự!');
            $(this).css("border", "1px solid red");
            $("#resultpass").css("color", "red");
        } else {
            $("#resultpass").text('');
            $(this).css("border", "1px solid #ccc");
        }
    });
});
$(document).ready(function() {
    $("#repassword").blur(function() {
        var pass = $("#password").val();
        var pass2 = $(this).val();
        if (pass != pass2) {
            $("#resultrepass").text('Mật khẩu không giống nhau!');
            $(this).css("border", "1px solid red");
            $("#resultrepass").css("color", "red");
        } else {
            $("#resultrepass").text('');
            $(this).css("border", "1px solid #ccc");
        }
    });
});

$(document).ready(function() {
    $("#date").blur(function() {
        var date = $(this).val();
        if (date == '') {
            $("#resultdate").text('Vui lòng chọn ngày tháng năm sinh!');
            $(this).css("border", "1px solid red");
            $("#resultdate").css("color", "red");
        } else {
            $("#resultdate").text('');
            $(this).css("border", "1px solid #ccc");
        }
    });
});






function validate() {
    var u = document.getElementById("username").value;
    var e = document.getElementById("email").value;
    var d = document.getElementById("date").value;
    var f = document.getElementById("phonenum").value;
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("repassword").value;
    var at = e.indexOf("@");
    var dot = e.lastIndexOf(".");
    var space = e.indexOf(" ");
    var noww = new Date();
    Date.now() - d
    var check = true;
    if (u == "") {
        $("#resultname").text("Vui lòng nhập tên !");
        $("#resultname").css("align-item", "center");
        $("#resultname").css("color", "red");
        $("#resultname").css("border-radius", "2px");
        check = false;
    }
    if (f == "") {
        $("#resultnum").text("Vui lòng nhập số điện thoại của bạn!");
        $("#resultnum").css("align-item", "center");
        $("#resultnum").css("color", "red");
        $("#resultnum").css("border-radius", "2px");
        check = false;
    }
    if (e == "") {
        $("#resultemail").text("Vui lòng nhập Email!");
        $("#resultemail").css("align-item", "center");
        $("#resultemail").css("color", "red");
        $("#resultemail").css("border-radius", "2px");
        check = false;
    }

    if (d == "") {
        $("#resultdate").text("Vui lòng nhập ngày tháng năm sinh!");
        $("#resultdate").css("align-item", "center");
        $("#resultdate").css("color", "red");
        $("#resultdate").css("border-radius", "2px");
        check = false;
    }

    if (p2 == "") {
        $("#resultrepass").text("Vui lòng xác minh mật khẩu!");
        $("#resultrepass").css("align-item", "center");
        $("#resultrepass").css("color", "red");
        $("#resultrepass").css("border-radius", "2px");
        check = false;
    }
    if (p1.value != p2.value) {
        $("#result").text("Mật khẩu không trùng nhau!");
        $("#result").css("color", "red");
        check = false;
    }
    if (p1.length < 6) {
        $("#resultpass").text("Mật khẩu phải trên 6 ký tự!");
        $("#resultpass").css("align-item", "center");
        $("#resultpass").css("color", "red");
        $("#resultpass").css("border-radius", "2px");
        check = false;
    }
    if ((at != -1) && //có ký tự @
        (at != 0) && //ký tự @ không nằm ở vị trí đầu
        (dot != -1) && //có ký tự .
        (dot > at + 1) && (dot < e.length - 1) //phải có ký tự nằm giữa @ và . cuối cùng
        &&
        (space == -1)) //không có khoẳng trắng 
    {
        check = true;
    } else {
        $("#resultemail").text("Email không hợp lệ!");
        $("#resultemail").css("align-item", "center");
        $("#resultemail").css("color", "red");
        $("#resultemail").css("border-radius", "2px");
        check = false
    }
    if (Date.now() - d < 18) {
        $("#result").text("Tuổi phải lớn hơn 18");
    }
    if (check == false) {
        //setTimeout(function(){window.location.reload();} , 5000);
        $("#result").text("Đăng ký thất bại, vui lòng thử lại!");
        $("#result").css("color", "black")
    } else {
        $("#result").text("Chúc mừng bạn đã đăng ký thành công! Tự động chuyển về trang chủ...");
        $("#result").css("color", "black");
        setTimeout(function() {
            document.location.href = 'index.html';;
        }, 2000);

    }
}