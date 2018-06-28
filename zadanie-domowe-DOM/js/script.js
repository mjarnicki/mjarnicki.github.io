'use strict';

document.getElementById("oblicz").addEventListener("click",function calculateSalary() {

    var EmployersNo = document.getElementsByClassName("pracownik").length;
    for (var i = 0; i < EmployersNo; i++) {
        var employer = document.getElementsByClassName("pracownik")[i].innerHTML;
        var hours = document.getElementsByClassName("czas")[i].value;
        var rate = document.getElementsByClassName("stawka")[i].value;
        var salary = 0;
        if (hours < 100) {
            document.getElementsByClassName("pracownik")[i].style.backgroundColor = "red";
            salary = hours * rate + " zł";
        } else if ((hours >= 100) && (hours <= 160)) {
            salary = hours * rate + " zł";
        } else {
            salary = (160 * rate) + ((hours - 160) * (rate * 2)) + " zł";
        }
        document.getElementsByClassName("wyplata")[i].innerHTML = salary;
    };
});

document.getElementById("oblicz").addEventListener("click",function bestEmployer() {
    
    
    for (var i = 0; i < 20; i++) {
        var employer = document.getElementsByClassName("pracownik")[i].innerHTML;
        var hours = document.getElementsByClassName("czas")[i].value;
        var hours3digit;
        if (hours.length == 3) {
            hours3digit = document.getElementsByClassName("czas")[i].value;
        } else if (hours.length == 2) {
            hours3digit = "0" + document.getElementsByClassName("czas")[i].value;
        } else if (hours.length == 1) {
            hours3digit = "00" + document.getElementsByClassName("czas")[i].value;
        }
        var total;
        var employ = hours3digit + employer + ",";
        total = employ + total;
        var arrayRaw = total.split(",").sort();
        arrayRaw.pop();
        arrayRaw.reverse();
    }
    
    var firstName = arrayRaw[0].replace(/\d/g, "");
    var secondName = arrayRaw[1].replace(/\d/g, "");
    var thirdName = arrayRaw[2].replace(/\d/g, "");
    
    var firstHours = arrayRaw[0].replace(/[a-zA-ZąĄćĆęĘłŁńŃóÓśŚżŻźŹ]/g, "");
    var secondHours = arrayRaw[1].replace(/[a-zA-ZąĄćĆęĘłŁńŃóÓśŚżŻźŹ]/g, "");
    var thirdHours = arrayRaw[2].replace(/[a-zA-ZąĄćĆęĘłŁńŃóÓśŚżŻźŹ]/g, "");
    
    var firstNode = document.createElement("p"); 
    var firstTextNode = document.createTextNode("Numer 1: " + firstName + " przepracował: " + firstHours + " godzin");  
    firstNode.appendChild(firstTextNode); 
    document.getElementById("najlepsi-pracownicy").appendChild(firstNode);
    
    var secondtNode = document.createElement("p"); 
    var secondTextNode = document.createTextNode("Numer 2: " + secondName + " przepracował: " + secondHours + " godzin");  
    secondtNode.appendChild(secondTextNode); 
    document.getElementById("najlepsi-pracownicy").appendChild(secondtNode);
    
    var thirdNode = document.createElement("p"); 
    var thirdTextNode = document.createTextNode("Numer 3: " + thirdName + " przepracował: " + thirdHours + " godzin");  
    thirdNode.appendChild(thirdTextNode); 
    document.getElementById("najlepsi-pracownicy").appendChild(thirdNode);

});
