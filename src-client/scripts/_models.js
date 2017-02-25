

import Backbone from 'backbone'
import $ from 'jquery'

export const ListingModel = Backbone.Model.extend({
	urlRoot: '/api/item',
	idAttribute: '_id'
})

export const ListingCollection = Backbone.Collection.extend({
	model: ListingModel,
	url: '/api/item',

parse: function(rawServerRes){
console.log('parsing Response')
console.log(rawServerRes)
return rawServerRes
},
})
