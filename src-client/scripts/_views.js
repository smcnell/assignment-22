
import Backbone from 'backbone'
import {ListingModel, ListingCollection} from './_models.js'


export const HomeView = Backbone.View.extend({
	el: '#app-container',

	// events: {
	// 	'click .item-details' : 'handleOneItemDetails',
  //   'click .add-your-own-item' : 'handleForm'
	// },

  _buildEachItem: function(theItemModels){
		let htmlStr = theItemModels.map(function(singleItemModel){
console.log(singleItemModel.attributes)
    	return `
			 <tr>
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

		`
	},

	render: function(theItemModels){
		this.el.innerHTML = this._buildHomeHtmlTemplate(theItemModels)
	}
})
