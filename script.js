const billAmount=document.querySelector('#bill-amount');
const cashAmount=document.querySelector('#cash-amount');
const submitBtn=document.querySelector('#submit-btn');
const outputEl=document.querySelector('#output-box');

const availableNotes=[2000,500,100,20,10,5,1];

submitBtn.addEventListener('click', validateBillAmountAndCashValue);

function validateBillAmountAndCashValue(){
    hideMessage();
    if(billAmount.value>0){
        if(cashAmount.value >= billAmount.value){
            const amountReturned = cashAmount.value - billAmount.value;
            calculateChange(amountReturned);

        }else{
            showMessage("Do you wanna wash plates?");
        }
    }else{
        showMessage("Invalid Bill Amount");
        
    }
}

function hideMessage(message){
    message.style.display="none";

}

function showMessage(message){
    message.style.display="block";
    message.innerText="The Bill Amount should be greater than 0"
}

function calculateChange(amountReturned){
    for(let i=0;i<availableNotes.length;i++){
        const numberOfNotes=Math.trunc(amountReturned/availableNotes[0]);
        amountReturned%=availableNotes[0];
        numberOfNotes[i].innerText=numberOfNotes;
    }

}