$(document).ready(function() {
    $("#textob").blur(function() {
        var text = $(this).val();
        if (text == '') {
            $("#eSub0").text('Thông tin bắt buộc!');
            $(this).css("border", "1px solid red");
            $("#eSub0").css("color", "red");
        } else {
            $("#eSub0").text(' ');
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
    $("#textUudiem").blur(function() {
        var text = $(this).val();
        if (text == '') {
            $("#eSub1").text('Thông tin bắt buộc!');
            $(this).css("border", "1px solid red");
            $("#eSub1").css("color", "red");
        } else {
            $("#eSub1").text(' ');
            $(this).css("border", "1px solid #ccc");
        }
    });
});
$(document).ready(function() {
    $("#textCaithien").blur(function() {
        var text = $(this).val();
        if (text == '') {
            $("#eSub2").text('Thông tin bắt buộc!');
            $(this).css("border", "1px solid red");
            $("#eSub2").css("color", "red");
        } else {
            $("#eSub2").text(' ');
            $(this).css("border", "1px solid #ccc");
        }
    });
});
$(document).ready(function() {
    $("#textTrainghiem").blur(function() {
        var text = $(this).val();
        if (text == '') {
            $("#eSub3").text('Thông tin bắt buộc!');
            $(this).css("border", "1px solid red");
            $("#eSub3").css("color", "red");
        } else {
            $("#eSub3").text(' ');
            $(this).css("border", "1px solid #ccc");
        }
    });
});
$(document).ready(function() {
    $("#textsub").blur(function() {
        var text = $(this).val();
        if (text == '') {
            $("#eSub").text('Thông tin bắt buộc!');
            $(this).css("border", "1px solid red");
            $("#eSub").css("color", "red");
        } else {
            $("#eSub").text(' ');
            $(this).css("border", "1px solid #ccc");
        }
    });
});

$(document).ready(function() {
    $("#danhgia").click(function() {
        var text = document.getElementById("textob").value;
        var text1 = document.getElementById("textsub").value;
        var text2 = document.getElementById("textUudiem").value;
        var text3 = document.getElementById("textCaithien").value;
        var text4 = document.getElementById("textTrainghiem").value;

        if (text == "" || text1 == "" || text2 == "" || text3 == "" || text4 == "") { $("#resultrating").text("Sai thông tin! Vui lòng nhập lại"); } else
            $("#resultrating").text("Đã gửi đánh giá");
    });
});
$(document).ready(function() {
    $("#close").click(function() {
        var text = document.getElementById("textob").value;
        var text1 = document.getElementById("textsub").value;
        var text2 = document.getElementById("textUudiem").value;
        var text3 = document.getElementById("textCaithien").value;
        var text4 = document.getElementById("textTrainghiem").value;
        if (text == "" || text1 == "" || text2 == "" || text3 == "" || text4 == "") { $("#resultrating").text("Sai thông tin! Vui lòng nhập lại"); } else { document.location.href = 'thanksrating.html'; }
    });
});


$(document).ready(function() {
    $("#backhome").click(function() {
        document.location.href = 'index2.html';

    });
});


function validate() {
    var text = document.getElementById("textob").value;
    var text1 = document.getElementById("textsub").value;
    var text2 = document.getElementById("textUudiem").value;
    var text3 = document.getElementById("textCaithien").value;
    var text4 = document.getElementById("textTrainghiem").value;
    if (text == '') {
        $("#eSub").text('Thông tin bắt buộc!');
        $(this).css("border", "1px solid red");
        $("#eSub").css("color", "red");
    } else {
        $("#eSub").text(' ');
        $(this).css("border", "1px solid #ccc");
        $("#eSub").css("color", "red");
    }
    if (text1 == '') {
        $("#eSub1").text('Thông tin bắt buộc!');
        $(this).css("border", "1px solid red");
        $("#eSub1").css("color", "red");
    } else {
        $("#eSub1").text(' ');
        $(this).css("border", "1px solid #ccc");
    }
    if (text2 == '') {
        $("#eSub2").text('Thông tin bắt buộc!');
        $(this).css("border", "1px solid red");
        $("#eSub2").css("color", "red");
    } else {
        $("#eSub2").text(' ');
        $(this).css("border", "1px solid #ccc");
    }
    if (text3 == '') {
        $("#eSub3").text('Thông tin bắt buộc!');
        $(this).css("border", "1px solid red");
        $("#eSub3").css("color", "red");
    } else {
        $("#eSub3").text(' ');
        $(this).css("border", "1px solid #ccc");
    }
    if (text4 == '') {
        $("#eSub4").text('Thông tin bắt buộc!');
        $(this).css("border", "1px solid red");
        $("#eSub4").css("color", "red");
    } else {
        $("#eSub4").text(' ');
        $(this).css("border", "1px solid #ccc");
    }
}