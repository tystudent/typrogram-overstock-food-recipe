function getFood() {
    // we get the ingredients(food) and the quantity of recipes(recipe_count) we will display
    var food = document.getElementById("search").value;
    var recipe_count = document.getElementById("recipe_count").value;

    // This is where the API key goes
    var API_KEY = '2c5d19c188b346219ab4f4f61b8d5355';

    // This is where we fetch the data from our API.
    fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey=' + API_KEY + '&ingredients='+ food + '&number=' + recipe_count)
        .then(data => data.json())
        .then(response => {
            // This is where you populate the html elements and
            // element attributes with values from the result
        })
}