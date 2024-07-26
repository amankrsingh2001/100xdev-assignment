/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
        {
		id: 1,
		timestamp: 1656076800000,
		price: 20,
		category: 'Cloth',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 20 },{category:"Cloth",totalSpent:20}] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let arr = [];
  let category = [];
  
  transactions.map((item)=>{
    if(category.includes(item.category)){
        arr.forEach((value)=>{
          if(item.category === value.category){
            value.totalSpent += item.price
          }
        })
    }else {
      const obj = {};
      obj.category = item.category
      obj.totalSpent = item.price
      arr.push(obj)
      category.push(item.category)
    }
  })
  return arr;
}

module.exports = calculateTotalSpentByCategory;
