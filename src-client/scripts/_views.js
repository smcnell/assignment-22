
import Backbone from 'backbone'
import {ListingModel, ListingCollection} from './_models.js'


export const HomeView = Backbone.View.extend({
	el: '#app-container',

	events: {
		'click .one-listing' : 'handleItemClick',
    'click .add-your-own-item' : 'handleForm'
	},

  handleItemClick: function(evt){
	let clickedIconEl=evt.currentTarget
	console.log(clickedIconEl)
	console.log(clickedIconEl.dataset.itemid)
	window.location.hash = `item/${clickedIconEl.dataset.itemid}`
},

  handleForm: function(evt){
  window.location.hash = `new`
},

  _buildEachItem: function(theItemModels){
		let htmlStr = theItemModels.map(function(singleItemModel){
console.log(singleItemModel.attributes)
    	return `
      <div class="col-sm-6 col-md-4" >
			  <div class="thumbnail active-icon one-listing" data-itemid= "${singleItemModel.attributes._id}">
           <img src="${singleItemModel.attributes.imgLink}" alt="...">
           <div class="caption">
            <h3>${singleItemModel.attributes.item}</h3>
            <p>$${singleItemModel.attributes.price}</p>
            <p>${singleItemModel.attributes.description}</p>
           </div>
        </div>
      </div>
      `

		}).join('')

		return htmlStr

	},

	_buildHomeHtmlTemplate: function(theItemModels){


		return `
    <h1> Meg's List </h2>
			<h2 class='bg-primary'>Items for Sale</h2>
			<div class="row">

					${ this._buildEachItem(theItemModels) }
      </div>
      <h3 class= "add-your-own-item"> Unwanted Stuff?  Click <span>HERE</span> to sell your own item on Meg's List </h3>

		`
	},

	render: function(theItemModels){
		this.el.innerHTML = this._buildHomeHtmlTemplate(theItemModels)
	}
})
