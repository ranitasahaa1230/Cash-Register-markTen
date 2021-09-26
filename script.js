const billAmount=document.querySelector('#bill-amount');
const cashAmount=document.querySelector('#cash-amount');

const nextBtn=document.querySelector('#next-btn');
const submitBtn=document.querySelector('#submit-btn');

const cashGivenDiv=document.querySelector('.cashGivenInput');
const changeReturnDiv = document.querySelector(".changeReturn");

const output= document.querySelector("#output");

const message=document.querySelector('#error-message');
const Notes=document.querySelectorAll('.no-of-notes');

const availableNotes=[2000,500,100,20,10,5,1];


nextBtn.addEventListener('click', submitHandler);

//if bill amt filled, display cash given input field
function submitHandler(){
    hideMessage();
    if(Number(billAmount.value)>0){
        nextBtn.style.display="none";
        cashGivenDiv.style.display="block";
    }else{
        showMessage("Enter valid bill amount");
    }
}

//check btn clicked handler
submitBtn.addEventListener('click', validateBillAndCashAmount);

function validateBillAndCashAmount(){
    clearNoOfNotes();
    hideMessage();

    let billAmtValue= Number(billAmount.value);
    let cashGivenValue= Number(cashAmount.value);

    if(billAmtValue>0 && cashGivenValue>0){

        if(!Number.isInteger(cashGivenValue)){
            showMessage("Enter valid amount in cash given field");
            return;
        }
        if(billAmtValue > cashGivenValue){
            showMessage("Cash is less than bill, please enter right amount");
            return;
        }
        //if input valid calculate no. of notes
        calculateChange(billAmtValue, cashGivenValue);
    }else{
        showMessage("Enter valid bill amount and cash given to continue");
        }
}

//if check button clicked without refreshing the page, clear the no of notes values on the screen
function clearNoOfNotes(){
    for(let notes of availableNotes){
        notes.innerText = "";
    }
}

//to calculate no. of notes
function calculateChange(bill,cash){
    let amountReturned=cash-bill;
    if(amountReturned<1){
        showMessage("No amount should be returned");
        return;
    }
    changeReturnDiv.style.display="block";

    for(let i=0;i<availableNotes.length;i++){
        const numberOfNotes= Math.trunc(amountReturned / availableNotes[i]);
        // console.log(numberOfNotes);
        amountReturned%=availableNotes[i];
        Notes[i].innerText = numberOfNotes;
    }

}

function showMessage(msg){
    // console.log("here")
    message.style.display="block";
    message.innerText=msg;
    changeReturnDiv.style.display = "none";
}

function hideMessage(){
    message.style.display="none";

}

