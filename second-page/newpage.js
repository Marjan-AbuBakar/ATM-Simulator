
let input = document.getElementById('inp')
let input_1 = document.getElementById('inp2')
let text = document.getElementById('txt')
let balance = 3000;
//SUBMIT FUNCTION
function sub() {

    let conv1 = Number(input.value)
    let conv2 = Number(input_1.value)
    if (conv1 > 0 && conv2 > 0) {
        text.innerHTML = 'Please use only one box at a time!';
        text.style.color = "red"
        text.style.width = "300px"
        text.style.fontSize = "21px";
        return;
    }
    if (input.value === "" && input_1.value === "") {
        text.innerHTML = 'Please enter a number in one of the boxes!'
        text.style.color = "red"
        text.style.width = "300px"
        text.style.fontSize = "21px";
        return;
    }
    if (conv1 > 0) {
        if (conv1 <= balance) {
            let newbalance = balance -= conv1;
            text.innerHTML = 'Successfully withdrawn Rs:' + conv1 + ' Remaining balance is Rs:' + newbalance;
            text.style.color = "blue"
            text.style.width = "300px"
            text.style.fontSize = "21px";
        }
        else {
            text.innerHTML = 'wrong'
        }
    }
    else if (conv2 > 0) {
        let newbalance = balance += conv2;
        text.innerHTML = 'Successfuly deposited Rs:' + conv2 + " Balance is now Rs:" + newbalance
        text.style.color = "green"
        text.style.width = "300px"
        text.style.fontSize = "21px";
    }
    input.value = "";
    input_1.value = "";
}

//EXIT ---------
function exit() {
    window.open('atm.html', '_blank')
}

