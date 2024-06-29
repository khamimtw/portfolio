function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")){
        $(target).html("More Info").removeClass("active")
    }else{
        $(target).html("Less Info").addClass("active")
    }

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()
}
function onFormSubmit(e){
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if(!$(email).val()){
        alert("Email harus ada")
    }else if(!$(subject).val()){
        alert("subject dibutuhkan")
    }else if(!$(message).val()){
        alert("Pesan harus diisi")
    }else{
        alert("form telah disubmit")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
        
    }
}