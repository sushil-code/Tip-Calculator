
function calculate()
        {
            let bill,tip,person,tipPerPerson,total;
            bill=Number(document.getElementById("bill").value);
            tip=Number(document.getElementById("tip").value);
            person=Number(document.getElementById("person").value);
            tipPerPerson=(bill*tip)/(100*person);
            total=bill/person + tipPerPerson;
            tipPerPerson=tipPerPerson.toFixed(2);
            total=total.toFixed(2);
            document.getElementById("tipPerPerson").value= "$"+tipPerPerson;
            document.getElementById("total").value="$"+ total;
        }



