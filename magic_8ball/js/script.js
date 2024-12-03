

function shake (){
    askAQuestion()
    var response = giveAResponse()
    displayResponse(response)
  
}

function askAQuestion(){

}

function giveAResponse(){
    var listOfResponses = getListOfResponses()
    var resp = pickFromList(listOfResponses)
    return resp   
}

function getListOfResponses(){
    return ["yes","no","mabye","ask again"]
}

function pickFromList(){
    return list[0]
}


function displayResponse(aresponse){
alert(aresponse)
}



function pickFromList(list) {

    var length = list.length; 

    var rand = Math.random(); 

    
    var choice = Math.floor(length * rand);

    return list[choice]; 

}

 

 



function displayResponse(aresponse) {

  

    document.getElementById("fortune").innerHTML = aresponse;

}