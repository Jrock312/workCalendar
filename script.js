$(document).ready(function(){
    const clock =document.getElementById('currentDay');
    

    $(".saveBtn").on("click", function(){
        var value =$(this).siblings(".description").val();
        var time =$(this).parent().attr("id");

        localStorage.setItem(time,value);
    })

    function hourUpdater(){
        var currentHour = moment().hours();
        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id").split("-")[1])
            if (blockHour < currentHour){
                $(this).addClass("past")

            } 
            else if (blockHour===currentHour){

                $(this).removeClass("past");
                $(this).addClass("present");

            }
            else{ $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");

            }
            
        })

    }
    hourUpdater()
var interval =setInterval(hourUpdater,15000)

for (var i = 9; i < 18; i++){

    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
}

setInterval(() =>{
    const now = moment();
    const currentnow = now.format('MMMM Do YYYY, hh:mm:ss a');
    clock.textContent = currentnow;
  }, 1000);

})