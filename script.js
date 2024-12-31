function ChangeTheme() {
    try {
        if($('#checkbox').prop("checked")) {
            $('body').addClass("darkMode");
            // $('container').addClass("containerDark");
            localStorage.setItem("darkmode", 1);
        } else {
            $('body').removeClass("darkMode");
            // $('container').removeClass("containerDark");
            localStorage.setItem("darkmode", 0);
        }

    } catch (e) {
        console.log(e.message)
    } 
}

function checkModeSaved() {
    try {
        var dm = localStorage.getItem("darkmode")==1
        $('#checkbox').prop("checked", dm);
        ChangeTheme()
    } catch {
        console.log(e.message)
    }
}