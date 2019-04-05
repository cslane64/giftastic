$(document).ready(function(){
var foodItems = ["pizza", "steak", "broccoli", "plums"];


function showButtons() {

    $("#button-farm").empty();

    for (var i = 0; i < foodItems.length; i++){
        var foodButton = $("<button>");
        foodButton.addClass("foodItem");
        foodButton.attr("data-name", foodItems[i]);
        foodButton.text(foodItems[i]);
        $("#button-farm").append(foodButton);
    }
}


//add buttons with on click event
 $("#add-food").on("click", function(event){
    event.preventDefault();
    var food = $("#food-input").val();
    foodItems.push(food);
    showButtons();
    $("#food-input").val("");

 });

 function showFoodGifs() {

    var foodCat = $(this).attr("data-name");
    console.log(foodCat);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + foodCat + "&api_key=cVsb8aLGA8HZ0xBrjmxV8Fl7EhKOewfB&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#image-farm").text(response.rating);
    });
  }
  $(document).on("click", ".foodItem", showFoodGifs);

 showButtons();


 
})