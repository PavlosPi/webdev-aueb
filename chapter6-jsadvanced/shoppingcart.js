let cart = ['milk', 'egg'];

function insertHoney() {
    if (cart.indexOf('honey') == -1){
        cart.push('honey');
        alert('Honey inserted')
    } else{
        alert('Honey already exist');
    }
}

function deleteHoney() {
    let deleted = false;
    let output;

    for (let i = cart.length -1; i >= 0; i--) {
        if (cart[i] == 'honey'){
            cart.splice(i, 1);
            //alert('Honey deleted')
            deleted = true
        }
    }

    output = (deleted) ? 'Honey deleted successfully' : 'Honey not found';

    alert(output);
}

//Deuteroσ tropos!
/* function deleteHoney() {
    let position = cart.indexOf('honey');

    if (position == -1){
        alert('Honey not found');
        
    } else{
        cart.splice(position,1);
        alert('Honey deleted successfully');
    }
} */

insertHoney();
insertHoney();
deleteHoney();
deleteHoney();