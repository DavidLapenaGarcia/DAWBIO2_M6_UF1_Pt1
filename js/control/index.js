/*
@name= (document).ready()
@author= David Lapena Garcia
@version= 1.0
@description = Starts the app. First, shows the correct frame and hides the others
Then, makes the logo dance.
@date = 10-12-2018
@params= none
@return = none
*/
$(document).ready(function (){
  fn1();
});

/*
@name= fn1
@author= David Lapena Garcia
@version= 1.0
@description = Show frame[0] and hide the others.
@date = 10-12-2018
@params= none
@return = none
*/
function fn1(){
    hideAllFrames();
    $("#Frame1").show();
}

/*
@name= fn2
@author= David Lapena Garcia
@version= 1.0
@description = Show frame[1] and hide the others.
@date = 10-12-2018
@params= none
@return = none
*/
function fn2(){
    hideAllFrames();
    $("#Frame2").show();
}

/*
@name= fn3
@author= David Lapena Garcia
@version= 1.0
@description = Show frame[2] and hide the others.
@date = 10-12-2018
@params= none
@return = none
*/
function fn3(){
    hideAllFrames();
    $("#Frame3").show();
}

/*
@name= hideAllFrames
@author= David Lapena Garcia
@version= 1.0
@description = Hides the Form-frame and shows the Chromosome-rame
@date = 10-12-2018
@params= none
@return = none
*/
function hideAllFrames(){
  $("#Frame1").hide();
  $("#Frame2").hide();
  $("#Frame3").hide();
};


