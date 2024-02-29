//Praksis Pinakon CRUD - Create Read Update Delete

//Populate & Insert
let products = ['milk', 'egg'];

//sto telos isago 2 methodoi
products[products.length] = 'honey';
products.push('honey');

//sti arxi na isago
products.unshift('honey');

//Isago opoudipote. Sti thesi 1 diagrapse 0 antikimena kai isigage to orange
products.splice(1, 0, 'orange')

//Dixno to me tipoma
alert(products.join());




//Delete

//Diagrafo apo to telos (i pop epistefi tin timi)
let product = products.pop();

//delete apo arxi
let shiftedProduct = products.shift();

//apo opiodipote simio pinaka.  Thesi 1 tou pinaka diagrapsi 1 stixio
let deletedProducts = products.splice(1, 1);

alert(products.join());


//Search. Epistefi thesi stixio, an oxi epistrefi -1
let orangePosition = products.indexOf('orange');
alert(orangePosition);


//Update
products[0]='oranges'
alert(products.join())


//Traverse. Diasxiso kai ektiposo stixia
for (let i = 0; i < products.length; i++){
    document.write(products[i] + ' ');
}

for (let kk of products){
    document.write(kk + '--');
}