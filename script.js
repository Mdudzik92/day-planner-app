$(document).ready(function () {
    var jumboTronEl = document.querySelector(".jumbotron");
    var currentTime = moment().format("LLLL");
    console.log(jumboTronEl)
    jumboTronEl.append(currentTime)
    console.log(currentTime)
    
    $(".btn").on("click", function () {
        var element = $(this).parent().siblings(".col-sm-8")
        var time = $(this).parent().siblings(".col-sm-2")
        element = $(element)
        time = $(time)
        var child = element.children()[0]
        var value = child.value
        var timeValue = time.text()
        // [0].children()[0];
        console.log(value)
        console.log(timeValue)
        localStorage.setItem(timeValue, value)
        var now = moment()
        var moment = moment().format();
    })

    $(".col-sm-8").each(function() {
        console.log(this)
        var hour =   $(this).prev().text();
        console.log(hour)
        var inputText =  localStorage.getItem(hour)
        console.log(hour,inputText)
        $(this).children().val(inputText)
    })

    $( ".row" ).each(function( index ) {
        let row_id = $(this).attr("id")  
        let currentHour = moment().hour()
        let row_time = parseInt(row_id.split("_").pop());
        if (row_time > currentHour){
            $(this).css("background-color", "red")
        } else if (row_time < currentHour) {
            $(this).css("background-color", "lightgray")
        } else {
            $(this).css("background-color", "green")
        }
        console.log(row_id);
        console.log(currentHour)
        });

})
