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
    $("#username").blur(function() {
        var name = $(this).val();
        if (name == '') {
            $("#resultname").text('Vui lòng không để trống tên');
            $(this).css("border", "1px solid red");
            $("#resultname").css("color", "red");
        } else {
            $("#resultname").text('');
            $(this).css("border", "1px solid #ccc");
        }
    });
});
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

function validate() {
    var u = document.getElementById("username").value;
    var e = document.getElementById("resultemail").value;
    var p1 = document.getElementById("phonenum").value;
    var at = e.indexOf("@");
    var dot = e.lastIndexOf(".");
    var space = e.indexOf(" ");
    var check = true;
    if (p1 == "") {
        $("#resultnum").text("Vui lòng nhập số điện thoại liên hệ");
        $("#resultnum").css("align-item", "center");
        $("#resultnum").css("border-radius", "2px");
        check = false;
    }
    if (u == "") {
        $("#resultname").text("Vui lòng nhập tên của bạn");
        $("#resultname").css("align-item", "center");
        $("#resultname").css("border-radius", "2px");
        check = false;
    }
    if (e == "") {
        $("#resultemail").text("Vui lòng nhập Email liên hệ");
        $("#resultemail").css("align-item", "center");
        $("#resultemail").css("border-radius", "2px");
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
        $("#resultemail").text("Email không hợp lệ");
        $("#resultemail").css("align-item", "center");
        $("#resultemail").css("border-radius", "2px");
        check = false
    }

    if (check == false) {
        //setTimeout(function(){window.location.reload();} , 5000);
        alert("Vui lòng xem lại thông tin")
    } else {
        alert("Cám ơn bạn đã quan tâm. Tư vấn liên hệ bạn trong thời gian sớm nhất!");
        setTimeout(function() {
            document.location.href = 'index2.html';;
        }, 2000);

    }
}