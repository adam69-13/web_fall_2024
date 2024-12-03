function askName () {
    var nameReturn =document.getElementById ('ask-name');
    var name = prompt('please enter your name' , 'here');
    if (name=='') {
        alert('Please try again');
    } else {
        nameReturn.innerHTML = 'Hello' + name + '! nice to meet you!'
    }
}