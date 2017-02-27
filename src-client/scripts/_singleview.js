import Backbone from 'backbone'
export const SingleItemView= Backbone.View.extend({

    el: '#app-container',




_buildSingleItemTemplate: function(itemObj){
console.log(itemObj)
// console.log(image)

  return `
  <div class= "mylovelyitem">
    <div class="pic-container">
          <h2> $${itemObj.price} </h2>
    <h1>${itemObj.item} </h1>
    <hr>
        <img class="my-single-pic" src="${itemObj.imgLink}" alt="...">
        </br>

      </div>
    <div class="my-item-info">
      </div>
      <p> ${itemObj.description} </p>
    </div>
  </div>

  `
},

render: function(itemObj){

  this.el.innerHTML=this._buildSingleItemTemplate(itemObj)
}
  })
