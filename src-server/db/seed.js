const mongoose = require( 'backbone');
const Item = require('./models/itemModel');
const connectToDB = require('./db-connect.js')
const PROJECT_NAME = require('../config/projectName.js')
const axios = require('axios')

if(typeof PROJECT_NAME !== 'string' ){ 
	require('./src-server/cli/setProjectName.js')
	throw new Error(`\n${chalk.bgRed.bold('There must be a project name exported from :')} ${chalk.grey.bold('./src-server/config/projectName.js')} \n ${chalk.bgWhite.black(' you must execute: ')} ${chalk.cyan.bold('npm run set-project-name')}` ) 
}

let dataSet = [
	{item: "IKEA Sofa", category: 'furniture',imgLink: 'http://www.ikea.com/us/en/images/products/ektorp-sofa-beige__0386819_PE559167_S4.JPG', price: 45, description: `IKEA Sofa. Good condition. Color: Green. Size: Length 86", Width 38", Height 18" (floor to seat cushion).\nFirst $45.00 takes it!`},
	{item: "freezer", category: 'misc', imgLink: 'http://c.shld.net/rpx/i/s/pi/mp/4540/prod_8983379720?src=http%3A%2F%2Fd3d71ba2asa5oz.cloudfront.net%2F60000063%2Fimages%2Fcrf150ss-1_vl1.jpg&d=225b46d8d9dc44092f10507e24db21d5601fc466&hei=245&wid=245&op_sharpen=1&qlt=85', price: 59, description: `Ice cold. Works just fine. Just got a bigger one and no longer need`},
	{item: `15" Saddle trail ride special `, category: 'misc', imgLink: 'https://www.outfitterssupply.com/images/CY1661_irontunnel.jpg', price: 400, description: `Was my ex wife's. She loved to ride horses. I need this gone. Pure craftman leather construction, built to last for ages.`},
	{item: `DOG KENNEL`, category: 'misc', imgLink: 'https://ak1.ostkcdn.com/images/products/8188057/Midwest-iCrate-Wire-Pet-Crate-91d2975c-fc21-437d-9663-4d7edcfb1e48_600.jpg', price: 22, description: `Dog Kennel, excellent condition. Sturdy. Lightweight to carry. Kennel Cab brand. Measures 48 inches long x 30 inches high x 25 inches wide. $22 cash only.`},
	{item: `Fender Banjo`, category: 'music', imgLink: 'http://media.musiciansfriend.com/is/image/MMGS7/FB-54-5-String-Banjo/510462000000000-00-500x500.jpg', price: 180, description: `Was in a band but now I'm not. Looking to sell or trade, lemme know if you have a drum set or something that's what i really want.`},
	{item: `Tailgate Chairs, 2`, category: 'furniture', imgLink: 'http://www.tigerrags.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/6/2662lawnchair_large.jpg', price: 25, description: `Leaving the country. Priced to sell!`}

]

console.log('connecting to db.....', PROJECT_NAME)
connectToDB(PROJECT_NAME, (err, result)=>{
	console.log('boooo hooooo')
	dataSet.forEach((dataRecord)=>{
		//   SEED ACTION ON EACH RECORD HERE
		// 	dataRecord.sold = false 

      let itemRecord = new Item(dataRecord)
		itemRecord.save((err, savedRecord)=>{
			if (err) console.log(err)
			console.log('saved: ' + savedRecord._id )
		 }) 
	})
})