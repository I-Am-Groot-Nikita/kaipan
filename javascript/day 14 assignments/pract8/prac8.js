valDate = () => {
    //getting value of date
    var date = document.getElementById("date").value;

    //format of date
    let dateformat = /^\d{2}[\-]\d{2}[\-]\d{4}$/;

    //checking if string is empty or not
    if (date == "") {
        document.getElementById("msg").innerHTML = "Please enter date in MM-DD-YYYY format";
    }

    //if format matches
    else if (date.match(dateformat)) {
        //splitting date,month and year
        let operator = date.split('-');
        // Extract the string into month, date and year  and converting into int  
        let datepart = [];
        if (operator.length > 1) {
            datepart = date.split('-');
        }
        let month = parseInt(datepart[0]);
        let day = parseInt(datepart[1]);
        let year = parseInt(datepart[2]);

        //validation of year
        if (year < 1000) {
            document.getElementById("msg").innerHTML = "Invalid year must be more then 1000";
        }
        else {
            //vadition of month
            if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                //validation of day
                if (day > 31 || day < 1) {
                    //to check if the date is out of range
                    document.getElementById("msg").innerHTML = "Invalid day. Day should be within the range 1 to 31";
                }
                else {
                    document.getElementById("msg").innerHTML = "You have entered valid date. Its " + date + ". Thank you.";
                }
            }
            //vadition of month
            else if (month == 4 || month == 6 || month == 9 || month == 11) {
                //validation of day
                if (day > 30 || day < 1) {
                    //to check if the date is out of range
                    document.getElementById("msg").innerHTML = "Invalid day. Day should be within the range 1 to 30";
                }
                else {
                    document.getElementById("msg").innerHTML = "You have entered valid date. Its " + date + ". Thank you.";
                }
            }
            //validation of feburay month according to leap year
            else if (month == 2) {
                let leapYear = false;
                //checking leap year
                if ((!(year % 4) && year % 100) || !(year % 400)) { leapYear = true; }
                //if not leap year but day is more then 28
                if ((leapYear == false) && (day >= 29 || day < 1)) {
                    document.getElementById("msg").innerHTML = "Invalid day. Day should be within the range 1 to 28";
                }
                //if leap year and day is more than 29
                else if ((leapYear == true) && (day > 29 || day < 1)) {
                    document.getElementById("msg").innerHTML = "Invalid day. Day should be within the range 1 to 29";
                }
                //valid day
                else {
                    document.getElementById("msg").innerHTML = "You have entered valid date. Its " + date + ". Thank you.";
                }

            }
            //if month is invalid
            else {
                document.getElementById("msg").innerHTML = "Invalid month. Month should be within the range 1 to 12";
            }
        }
    }


    //if format doesn't match
    else {
        document.getElementById("msg").innerHTML = "Invalid date. Please enter date in MM-DD-YYYY format";
    }

}

