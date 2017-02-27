

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

export const SingleCollection = Backbone.Collection.extend({
  initialize: function(itemId){

	this.url= `/api/item/${itemId}`
},

parse: function(rawServerRes){
console.log('parsing Response')
console.log(rawServerRes)
return rawServerRes
},
model: ListingModel,
url: ''


})
