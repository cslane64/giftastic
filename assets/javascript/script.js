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
      
      //console.log(response);
      // create div to hold the fooditems
      var  foodDiv= $("<div class='foods'>");
      // store rating data
      var rating = results[i].rating;
      var foodRating = $("<h4>").text("rating: " + rating);
      console.log(foodRating);
      
      //display the rating data
      foodDiv.append(foodRating);
    

      // store image url
      var imageUrl = results[i].images.fixed_height.url;
      // create an element to display the URL
      var foodImage = $("<img>").attr("src", imageUrl);
      console.log(foodImage);
      //display the url
      foodDiv.append(foodImage);
      //appending the movie 

      $("#image-farm").append(foodDiv);
    }   


      
      
      
      
      

      //$("#image-farm").append(foodImage);
      //$("#image-farm").append(foodRating);

    });
  }
  $(document).on("click", ".foodItem", showFoodGifs);

 showButtons();


 
})