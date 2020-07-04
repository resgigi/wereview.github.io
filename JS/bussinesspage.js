$(document).ready(function() {
    $("#parnertName").blur(function() {
        var text = $(this).val();
        if (text == "") {
            $("#resultname").text("Thông tin bắt buộc!");
            $(this).css("border", "1px solid red");
            $("#resultname").css("color", "red");
        } else {
            $("#resultname").text('');
            $(this).css("border", "1px solid #ccc");
        }
    });
});
/*$(document).ready(function () {
	$("#username").blur(function(){
	   var name = $(this).val();
       if(name==''){
       	$("#resultname").text('Vui lòng không để trống tên');
        $(this).css("border","1px solid red");
        $("#resultname").css("color","red");
       }
       else{
       	$("#resultname").text('');
        $(this).css("border","1px solid #ccc");}
    });
});*/
$(document).ready(function() {
    $("#nguoiDaidien").blur(function() {
        var text = $(this).val();
        if (text == "") {
            $("#daidienname").text("Thông tin bắt buộc!");
            $(this).css("border", "1px solid red");
            $("#daidienname").css("color", "red");
        } else {
            $("#daidienname").text('');
            $(this).css("border", "1px solid #ccc");
        }
    });
});
$(document).ready(function() {
    $("#emailContact").blur(function() {
        var mail = $(this).val();
        const regex = /^\w+@[a-zA-Z]{3,}\.com$/i;
        if (regex.test(mail) == true) {
            $("#emailcontact").text('');
            $(this).css("border", "1px solid #ccc");
        } else {
            $("#emailcontact").text('Vui lòng ghi đúng định dạng!');
            $(this).css("border", "1px solid red");
            $("#emailcontact").css("color", "red");
        }
    });
});
$(document).ready(function() {
    $("#phoneContact").blur(function() {
        var mobile = $(this).val();
        const regex = /^(0|\+84)(1\d{3,4,5,6,7,9}|[2-9]\d{8,9})$/;
        if (regex.test(mobile) == true) {
            $("#phonecontact").text('');
            $(this).css("border", "1px solid #ccc");
        } else {
            $("#phonecontact").text('Vui lòng ghi đúng định dạng!');;
            $(this).css("border", "1px solid red"),
                $("#phonecontact").css("color", "red");
        }
    });
});
$(document).ready(function() {
    $("#noiDung").blur(function() {
        var text = $(this).val();
        if (text == "") {
            $("#content").text("Thông tin bắt buộc!");
            $(this).css("border", "1px solid red");
            $("#content").css("color", "red");
        } else {
            $("#content").text('');
            $(this).css("border", "1px solid #ccc");
        }
    });
});
$(document).ready(function() {
    $("#danhgia").click(function() {
        var text1 = document.getElementById("parnertName").value;
        var text2 = document.getElementById("nguoiDaidien").value;
        var text3 = document.getElementById("emailContact").value;
        var text4 = document.getElementById("phoneContact").value;
        var text5 = document.getElementById("noiDung").value;
        if (text1 == "" || text2 == "" || text3 == "" || text4 == "" || text5 == "") { $("#resultrating").text("Sai thông tin! Vui lòng nhập lại"); } else
            $("#resultrating").text("Đã gửi đánh giá");
    });
});
$(document).ready(function() {
    $("#close").click(function() {
        var text1 = document.getElementById("parnertName").value;
        var text2 = document.getElementById("nguoiDaidien").value;
        var text3 = document.getElementById("emailContact").value;
        var text4 = document.getElementById("phoneContact").value;
        var text5 = document.getElementById("noiDung").value;
        if (text1 == "" || text2 == "" || text3 == "" || text4 == "" || text5 == "") { $("#resultrating").text("Sai thông tin! Vui lòng nhập lại"); } else { document.location.href = 'index2.html#slide-1' }
    });
});

$(document).ready(function() {
    $("#backhome").click(function() {
        document.location.href = 'index2.html';

    });
});



function validate() {
    var u = document.getElementById("parnertName").value;
    var e = document.getElementById("emailContact").value;
    var d = document.getElementById("nguoiDaidien").value;
    var p1 = document.getElementById("phoneContact").value;
    var p2 = document.getElementById("noiDung").value;
    var at = e.indexOf("@");
    var dot = e.lastIndexOf(".");
    var space = e.indexOf(" ");
    var check = true;
    if (u == "") {
        $("#resultname").text("Vui lòng nhập tên Trung Tâm/Trường");
        $("#resultname").css("align-item", "center");
        $("#resultname").css("color", "red");
        $("#resultname").css("border-radius", "2px");
        check = false;
    }

    if (e == "") {
        $("#emailcontact").text("Vui lòng nhập Email liên hệ");
        $("#emailcontact").css("align-item", "center");
        $("#emailcontact").css("color", "red");
        $("#emailcontact").css("border-radius", "2px");
        check = false;
    }
    if (d == "") {
        $("#daidienname").text("Vui lòng nhập tên đại diện");
        $("#daidienname").css("align-item", "center");
        $("#daidienname").css("color", "red");
        $("#daidienname").css("border-radius", "2px");
        check = false;
    }

    if (p2 == "") {
        $("#phonecontact").text("Vui lòng số điện thoại liên hệ");
        $("#phonecontact").css("align-item", "center");
        $("#phonecontact").css("color", "red");
        $("#phonecontact").css("border-radius", "2px");
        check = false;
    }
    if (p1 == "") {
        $("#content").text("Vui lòng nhập nội dung liên hệ");
        $("#content").css("align-item", "center");
        $("#content").css("color", "red");
        $("#content").css("border-radius", "2px");
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
        $("#emailcontact").text("Email không hợp lệ");
        $("#emailcontact").css("align-item", "center");
        $("#emailcontact").css("border-radius", "2px");
        check = false
    }
    if (check == false) {
        //setTimeout(function(){window.location.reload();} , 5000);
        $("#result").text("Đăng ký thất bại, vui lòng thử lại!");
        $("#result").css("color", "black");
    } else {
        $("#result").text("Cám ơn Quý Trung Tâm/Trường đã quan tâm. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất!");
        $("#result").css("color", "black");
        setTimeout(function() {
            document.location.href = 'index2.html';;
        }, 3500);

    }
}