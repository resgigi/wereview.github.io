//jQuery time
var Account = [
    { email: "resgigi99@gmail.com", password: "123456" },
    { email: "admin@email.com", password: "asdasd" },
    { email: "parnert@email.com", password: "123456" }
]

$(document).ready(function() {
    $("#btAdd").click(function() {
        check = true;
        var mess = "";
        for (var i = 0; i < Account.length; i++) {
            if (Account[i].email == $.trim($("#inputEmail").val()) && (Account[i].password == $.trim($("#inputPassword").val()))) {
                check = true;
                $("#result").text("Đăng nhập thành công");
                break;
            } else {
                check = false;
                $("#result").text("Đăng nhập thất bại ! Vui lòng thử lại sau giây lát");
                break;
            }
        }
    });
});
$(document).ready(function() {
    $("#close").click(function() {
        check = true;
        var mess = "";
        for (var i = 0; i < Account.length; i++) {
            if (Account[i].email == $.trim($("#inputEmail").val()) && (Account[i].password == $.trim($("#inputPassword").val()))) {
                check = true;
                document.location.href = 'index2.html';
                break;
            } else {
                check = false;
                setTimeout(function() { location.reload(); }, 500);
                break;
            }
        }
    });
});