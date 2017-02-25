export const FormView = Backbone.View.extend({
	el: '#app-container',

	events: {
    		'submit #form-newband' : 'handleFormSubmit'
	},

  handleFormSubmit: function(evt){
		evt.preventDefault();
		//DO VALIDATION LOGIC HERE

		console.log('form submitted')
		let formEl = evt.target


		let dataToBeSaved = {
			agentName : formEl.agent.value ,
			albumArt : "103",
			artist : formEl.artist.value,
			bandMembers : parseInt(formEl.members.value) ,
			bookingCost : parseInt(formEl.cost.value) ,
			country : formEl.country.value,
			onTour : formEl.ontour.checked
		}

		let newBandModl = new BandModel()
		newBandModl.set(dataToBeSaved)

		let viewInstance = this
		newBandModl.save().then(function(){
			// window.location.hash = '«where-i-wanna-nav-to»'
			// this.el.innerHTML ... NO
			// viewInstance.el.innerHTML = `<h1> ${newBandModl.get('artist')} SAVED!!!</h1>`
			window.location.hash = ''
		})

	},

	_buildFormHtmlTemplate: function(){
		return `
    <h2 class="bg-info">New Item</h2>
<form class="" id="form-newItem">
<div class=" field_item">
  <label>Item</label>
  <input type="text" name="item" placeholder="Item"/>
  <p class="flash-msg"></p>
</div>
<hr/>
<div class=" field_price">
  <label>Price</label>
  <input type="text" name="price" placeholder="$"/>
  <p class="flash-msg"></p>
</div>
<hr/>
<div class=" field_forSale">
  <label>For Sale</label>
  <input type="checkbox" name="forsale" placeholder=""/>
  <p class="flash-msg"></p>
</div>
<div class=" field_description">
  <label>Description</label>
  <input type="text" name="description" placeholder="Description of item"/>
  <p class="flash-msg"></p>
</div>
<hr/>
<div class=" field_imageLink">
  <label>Link to Image</label>
  <input type="text" name="imagelink" placeholder="link to image"/>
  <p class="flash-msg"></p>
</div>
<hr/>
<div class=" field_category">
  <label>Category</label>
  <input type="text" name="category" placeholder="category"/>
  <p class="flash-msg"></p>
</div>

<hr/>

  <button class="btn btn-success" type="submit">Submit</button>
  <!-- <button class="btn btn-default">Reset</button> -->
</div>
</form>

		`
	},

	render: function(){
		this.el.innerHTML = this._buildFormHtmlTemplate()
	}
})
