$(document).ready(function() {
    $(".btn").on("click", function() {
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
    })
})
