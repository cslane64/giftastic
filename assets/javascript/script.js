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
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + foodCat + "&api_key=cVsb8aLGA8HZ0xBrjmxV8Fl7EhKOewfB&limit=10";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.data
      $("#image-farm").empty();
      for (i=0; i < results.length; i++) {
      
      // create div to hold the fooditems
      var  foodDiv= $("<div class='foods'>");
      // store rating data
      var rating = results[i].rating;
      var foodRating = $("<h4>").text("rating: " + rating);
      //console.log(foodRating);
      var animated = results[i].images.fixed_height.url;
      var still = results[i].images.fixed_height_still.url;
      var foodImage = $("<img>");
      $(foodImage).addClass("food-gallery");
      $(foodImage).attr("src", still);
      $(foodImage).attr("data-still", still);
      $(foodImage).attr("data-animated", animated);
      $(foodImage).attr("data-state", "still");
      //display the rating data
      foodDiv.append(foodRating);
      foodDiv.append(foodImage);
      console.log(foodDiv);
      
      $("#image-farm").append(foodDiv);
    }   
    $(".foods").on("click", ".food-gallery", function() {
      
      
      var state = $(this).attr("data-state");
      
      console.log(state)
      if (state === "still") {
        console.log ("state === still is true");
        $(this).attr("src", $(this).attr("data-animated"));
        $(this).attr("data-state", "animated");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });


      
      
      
      
      

      //$("#image-farm").append(foodImage);
      //$("#image-farm").append(foodRating);

    });
  }
  $(document).on("click", ".foodItem", showFoodGifs);

 showButtons();


 
})