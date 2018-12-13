/*
@name        = $(document).ready()
@author      = David Lapena Garcia
@version     = 1.0
@description =  First, charge a random number and resets tries count, 
                next prevent the defult values on form tag and call the function/s.
@date        = 10-12-2018
@params      = none
@return      = none
*/
$(document).ready(function(){
    var rand = Math.floor((Math.random() * 400) + 1);
    var tries = 0;
    console.log("rand = "+rand);

    $("#button").click(function(){
        event.preventDefault();
        startGame($("#userInput"));
    })
});

/*
@name        = strartGame
@author      = David Lapena Garcia
@version     = 1.0
@description = First, validates a correct input between 1 and 400.
Next, compares the given value witch the random number and resturns if is bigger or smoller than the given one, 
and informs the user and upgrade the tries.
@date        = 10-12-2018
@params      = none
@return      = none
*/
function startGame(user){
    if(validateInput(user)==null){
        this.tries = this.tries + 1; 
        calculateMatch(user, this.rand);
    }else{
        $("#messageToUser").html(validateInput);
    }
};

/*
@name        = validateInput
@author      = David Lapena Garcia
@version     = 1.0
@description = Validates a correct integer, not empty, and between 1 and 400.
If is not valid, it returns the error in a string. If it is valid, returns null.
@date        = 10-12-2018
@params      = none
@return      = none
*/
function validateInput(user){
    flag=null;
    if(!$.isNumeric(user)){
        flag="It is not a number"
    }else if(user==null || user==""){
        flag="Is empty.";
    }else if(user<1 || user>400){
        flag="It is not between 1 - 400 number."
    }else{
        flag=null;
    }
};

/*
@name        = calculateMatch
@author      = David Lapena Garcia
@version     = 1.0
@description = Validates a correct integer, not empty, and between 1 and 400.
If is not valid, it returns the error in a string. If it is valid, returns null.
@date        = 10-12-2018
@params      = none
@return      = none
*/
function calculateMatch(user, rand){
    if(user < rand){    
        $("#messageTOUser").html("This number is smoller");
    }else if(user > rand){
        $("#messageToUser").html("This number is bigger");
    }else{
        $("#messageToUser").html("CONGRATULETIONS");
    }
};

