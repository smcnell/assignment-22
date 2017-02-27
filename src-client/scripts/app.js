console.log("working?!")

import Backbone from 'backbone';

console.log('whaaat')

import {ListingModel, ListingCollection, SingleCollection} from './_models.js'
import {HomeView} from './_views.js'
import {FormView} from './_formview.js'
import {SingleItemView} from './_singleview.js'


const AppRouter =  Backbone.Router.extend({
	initialize: function(){
		console.log("?????")
		// let navViewInstance = new NavView()
		Backbone.history.start()
	},
	routes: {
		'item/:id' : 'showSingleItem',
    'new' : 'showNewForm',
		'' : 'showAllListings'
	},

  showAllListings: function(){
  let itemsCollectionsInstance = new ListingCollection()
  itemsCollectionsInstance.fetch().then(function(){
    console.log(itemsCollectionsInstance)
    console.log(itemsCollectionsInstance.models)
    let itemsViewInstance = new HomeView()
    itemsViewInstance.render(itemsCollectionsInstance.models)
  })
},

showNewForm: function(){
  let formViewInstance = new FormView()
  formViewInstance.render()
},

showSingleItem: function(itemId){
  let singleListing = new SingleCollection(itemId)
  singleListing.fetch().then(function(serverRes){
    console.log(serverRes)
    let singleListingResults= serverRes
    let viewInstance= new SingleItemView()

    viewInstance.render(singleListingResults)


  })
},


})

let app = new AppRouter()
