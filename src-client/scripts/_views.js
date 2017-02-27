
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
			 <tr class="one-listing" data-itemid= "${singleItemModel.attributes._id}">
			<td>${singleItemModel.attributes.item}</td>
			<td>$${singleItemModel.attributes.price}</td>
			<td>${singleItemModel.attributes.description}</td>
			<td><img src="${singleItemModel.attributes.imgLink}"></i></td>
			</tr>
			`
		}).join('')

		return htmlStr

	},

	_buildHomeHtmlTemplate: function(theItemModels){


		return `
    <h1> Meg's List </h2>
			<h2 class='bg-primary'>Items for Sale</h2>
			<table class="table table-striped" id="form-newband">
				<thead>
					<tr>
						<th>Item</th>
						<th>Price</th>
						<th>Description</th>
						<th>Image</th>

					</tr>
				</thead>
				<tbody>
					${ this._buildEachItem(theItemModels) }

				</tbody>
			</table>
      <h3 class= "add-your-own-item"> Unwanted Stuff?  Click <span>HERE</span> to sell your own item on Meg's List </h3>

		`
	},

	render: function(theItemModels){
		this.el.innerHTML = this._buildHomeHtmlTemplate(theItemModels)
	}
})
