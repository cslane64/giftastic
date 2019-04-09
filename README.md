# giftastic
Gif-tastic Homework assignment 6

Requirements

Use key presses from the user to interact with the site.
Add buttons to allow for different catagories to be selected.
Display gif's based on the catagory button that was pushed.
Gif's appear as stills. When the user clicks on them they begin to animate. User clicks on them again and the gif goes back to a still.
Description •	Click on one of the catagories to display 10 gifs. •	You can also add your own catagory if you would like  •	Click on your gif's to make them animate • Click on them again and they will stop and go back to the still image.

Technologies Used •	HTML/CSS •	JavaScript • jQuery • AJAX • api's

Code Explanation • Food is something that I cannot get enough of, so why not select different catagories of food or food items and watch them animate •	HTML, AJAX, giphy api amd some dynamic jquery manipulation of the DOM are used to create and place elements on the page •	An array of food items populate the top of the page.  •	A small form is available to add food catagories or items. Once you submit your prefernce, an button will be included at the top with the other buttons.  •	If the user selects one of these buttons, an api call is made, inserting the name of the clicked button into the queryURL. •	When the api returns the top 10 gif images, the html is created to display the rating and the still image.  •	When the user clicks one of the gif's the data state of that gif changes and it displays the animated gif. •	When the user clicks that image again, the state changes to still and the still image is shown again. •	CSS was used to add a more appealing visual aspect to the project. 


Live Link https://cslane64.github.io/giftastic/
