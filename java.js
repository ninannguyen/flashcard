const flipCard = function () {
    $('.front').hide();
    $('.back').show();
}

const addHandlers = () => {
    $(".back").hide();
    $('#flipCard').on('click', flipCard);
}

// ON DOCUMENT READY
$(()=>{
    addHandlers()
})