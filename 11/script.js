var randomInput = document.createElement("input");

randomInput.addEventListener('focus', function(evt){
    console.log(evt);
});

randomInput.addEventListener('keypress', function(evt){
    console.log(evt);
    console.log(evt.key);
})

document.body.appendChild(randomInput)