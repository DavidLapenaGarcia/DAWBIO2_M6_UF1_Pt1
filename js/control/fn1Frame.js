/*
@name        = $(document).ready()
@author      = David Lapena Garcia
@version     = 1.0
@description = Prevent the defult values on form tag and call the function
@date        = 10-12-2018
@params      = none
@return      = none
*/
$( document ).ready(function() {
    
    /*
    @name        = $("#buttonForm").clik()
    @author      = David Lapena Garcia
    @version     = 1.0
    @description = Prevent the defult values on form tag and call the function
    @date        = 10-12-2018
    @params      = none
    @return      = none
    */
    $("#buttonForm").click(function(){
        console.log("ok, cliked")
        event.preventDefault();
        toIsPrime();
    })

});


/*
@name        = ToIsPrime
@author      = David Lapena Garcia
@version     = 1.0
@description = Get the input number by user and verifies it.
If is not valid, show an error.
If it is valid, determinats if the number is a prime one or not, and shows to the user.
@date   = 10-12-2018
@params = none
@return = none
*/
function toIsPrime(){
    var userNum = $("#userNum").val();
    var res     = "";

    if(isValidNumber(userNum)==null){
        if(isPrimeOne(userNum)){
            res = "Is a prime one."
        }else{
            res = "Is NOT a prime one."
        }
    }else{
        res = "ERROR in your number: " + isValidNumber(userNum);
    }
    $("#messageToUser").html(res);
    console.log($("#messageToUser").html());
}

/*
@name        = messageToUser
@author      = David Lapena Garcia
@version     = 1.0
@description = Verifies if the nnumber is a correct integer.
If it is, returns null.
If it is not, returns the error in a string.
@date   = 10-12-2018
@params = integer
@return = String or null
*/
function messageToUser(message){
     $("#messageToUser").html(message);
}
/*
@name        = isValidNumber
@author      = David Lapena Garcia
@version     = 1.0
@description = Verifies if the nnumber is a correct integer.
If it is, returns null.
If it is not, returns the error in a string.
@date   = 10-12-2018
@params = integer
@return = String or null
*/
function isValidNumber(userNum){
    flag = "";
    if(userNum==""){
        flag = "Is empty";
    }else if(!$.isNumeric(userNum)){
        flag = "Is not a numerical number";
    }else if(userNum<0){
        flag = "Is under 1. It must be bigger.";
    }else if(userNum>401){
        flag = "Is bigger than 400. It must be lower.";
    }else{
        flag = null;
    }
    return flag;
}

/*
@name        = isPrimeOne
@author      = David Lapena Garcia
@version     = 1.0
@description = Verifies if the nnumber is a correct integer.
If it is, returns null.
If it is not, returns the error in a string.
@date   = 10-12-2018
@params = integer
@return = String or null
*/
function isPrimeOne(userNum){
    
    var flag = true;
    for(var i=2;i<=Math.sqrt(userNum);i++){
        if(userNum%i===0){
            flag = false;
        }
    }
    return flag;
}
