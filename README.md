# Nutritionix API
Wrapper for the Nutritionix API (https://www.nutritionix.com)

## Installation
```bash
npm i nutritionix-api
```

## Requeriments
Nutritionix API key (it's free!). Go to https://developer.nutritionix.com

## Example Usage

### Initial Method
Allow set your APP ID and API KEY

````js
const nutritionix   = require("nutritionix-api");

const YOUR_APP_ID   = ''; // Your APP ID
const YOUR_API_KEY  = ''; // Your KEY

nutritionix.init(YOUR_APP_ID,YOUR_API_KEY);
````


### Natural Search
Returns the nutrients for all foods in the posted query.


````js

const nutritionix = require("nutritionix-api");

nutritionix.init(YOUR_APP_ID,YOUR_API_KEY);

nutritionix.natural.search('Apple').then(result => {
    console.log(result);
});
````

### Utils Nutrients
Gets the superset of possible values used in full_nutrients array.



````js
const nutritionix = require("nutritionix-api");

nutritionix.init(YOUR_APP_ID,YOUR_API_KEY);

nutritionix.utils.nutrients().then(result => {
    console.log(result);
});
````

### Item Get by UPC
Get a food by upc


````js
const nutritionix = require("nutritionix-api");

nutritionix.init(YOUR_APP_ID,YOUR_API_KEY);

const UPC = '025293600898'; // Replace with UPC to search

nutritionix.item.byUpc(UPC).then(result => {
    console.log(result);
});
````
### Item Get by ID
Get a food by nix_item_id


````js
const nutritionix = require("nutritionix-api");

nutritionix.init(YOUR_APP_ID,YOUR_API_KEY);

const ID = '51c36ad997c3e69de4b0756f'; // Replace with ID to search

nutritionix.item.byId(ID).then(result => {
    console.log(result);
});
````

