'use strict';

function calculateSalary() {

    var EmployersNo = document.getElementsByClassName("pracownik").length;
    for (var i = 0; i < EmployersNo; i++) {
        var hours = document.getElementsByClassName("czas")[i].value;
        var rate = document.getElementsByClassName("stawka")[i].value;
        var salary = 0;
        if (hours < 100)
        {
            document.getElementsByClassName("pracownik")[i].style.backgroundColor = "red";
            salary = hours * rate
        }
        else if ((hours >= 100) && (hours <= 160)){
            salary = hours * rate
        }
        else
        {
            salary = (160 * rate) + ((hours - 160) * (rate * 2));
        }
        document.getElementsByClassName("wyplata")[i].innerHTML = salary;
    }
};


calculateSalary();
