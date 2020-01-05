const request = require("./services/_request");

const nutritionix = {
    header: {},
    base_url: 'https://trackapi.nutritionix.com/v2/',
    init: function(app_id,key){
        this.header = {
            'x-app-key': key,
            'x-app-id': app_id,
        }
    },
    natural:{
        search: async function(query) {
            return request.ajax("POST", `${nutritionix.base_url}natural/nutrients`, { query: query}, nutritionix.header).then(result => {
                return result.response;
            }).catch(error => {
                return { error: error.error }
            })
        }
    },
    utils:{
        nutrients: async function() {
            return request.ajax("GET", `${nutritionix.base_url}utils/nutrients`, { }, nutritionix.header).then(result => {
                return result.response;
            }).catch(error => {
                return { error: error.error }
            })
        }
    },
    item:{
        byUpc: async function(upc){
            return request.ajax("GET", `${nutritionix.base_url}search/item?upc=${upc}`, {}, nutritionix.header).then(result => {
                return result.response;
            }).catch(error => {
                return {error: error.error }
            })
        },
        byId: async function (nix_item_id){
            return request.ajax("GET", `${nutritionix.base_url}search/item?nix_item_id=${nix_item_id}`, {}, nutritionix.header).then(result => {
                return result.response;
            }).catch(error => {
                return {error: error.error }
            })
        }
    }
}

module.exports = nutritionix;