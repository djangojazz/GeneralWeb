var inputFields = document.theform.getElementsByTagName("input");
var myError = document.getElementById('formerror');

var  validationInfo = {
    "myname" : {
        "pattern" : "[A-Za-z ]+, [A-Za-z ]+",
        "placeholder" : "Last Name, First",
        "required" : true},

    "myemail" : { "required" : true},

    "mytelephone" : {
        "pattern" : "\\d{3}[\\-]\\d{3}[\\-]\\d{4}",
        "placeholder" : "xxx-xxx-xxxx" }
};

document.theform.onsubmit = function () {
    for(key in validationInfo){
        var myField = document.getElementById(key);
        if(validationInfo[key].required && (myField.value == '')){
            myError.innerHTML = "Required field " + key + " not filled";
            myField.select();
            return false;
        } // required field empty
    } // check validation
    return true;
}

for(key in inputFields) {
    var myField = inputFields[key];

    myField.onchange = function() {
        var myPattern = this.pattern;
        var myPlaceholder = this.placeholder;
        var isValid = this.value.search(myPattern) >= 0;

        if(!(isValid)) {
            myError.innerHTML = "Input does not match expected pattern. " + myPlaceholder;
        }else { // pattern not valid
            myError.innerHTML = "";
        } // pattern is valid

    } // myField has changed
} // inputFields

document.theform.reference.onchange = function() {
    var id = document.theform.reference.selectedIndex;
    var url = document.theform.reference[id].value;
    window.location.href = url;
}

document.theform.myurl.onblur=function() {
    if(document.theform.myurl.value === ""){
        myError.innerHTML = "The URL field is required";
    } //url empty

    if(document.theform.myurl.value === "http://"){
        myError.innerHTML = "Please enter a valid URL";
    } // empty url
} //onblur

document.theform.myurl.onchange=function() {
    var theURL = document.theform.myurl.value;

    if(theURL.indexOf("http://")){
        myError.innerHTML = "URLs must begin with http://";

        document.theform.myurl.value = "http://" + document.theform.myurl.value;
    }
    else {
        document.getElementById("formerror").innerHTML = "";
    } //if change okay set nothing as error
} // onchange

document.theform.myname.onfocus = function() {
    document.getElementById('mynamehint').innerHTML = "(Enter last name, then first)";
}
document.theform.myname.onblur = function() {
    document.getElementById('mynamehint').innerHTML = "";
}