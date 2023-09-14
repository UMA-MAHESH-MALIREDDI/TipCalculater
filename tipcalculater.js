let billamountinput = document.getElementById("billAmount");
let percentageinput = document.getElementById("percentageTip");
let tipamountinput = document.getElementById("tipAmount");
let totalamountinput = document.getElementById("totalAmount");
let errormessageinput = document.getElementById("errorMessage");
let errormessage = "Please Enter a Valid Input";

function calculateTotal() {
    let billamountinputvalue = billamountinput.value;
    let percentageinputvalue = percentageinput.value;

    if (billamountinputvalue === "") {
        errormessageinput.textContent = errormessage;
    } else if (percentageinputvalue === "") {
        errormessageinput.textContent = errormessage;

    } else {
        errormessageinput.textContent = "";
        let billAmount = parseInt(billamountinputvalue);
        let percentageTip = parseInt(percentageinputvalue);

        let Calculatetip = (percentageTip / 100) * billAmount;
        let TotalAmount = Calculatetip + billAmount;

        tipamountinput.value = Calculatetip;
        totalamountinput.value = TotalAmount;
    }
}