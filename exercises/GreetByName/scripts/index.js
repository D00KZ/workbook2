window.onload = init;

function init() {
    // Find the button and connect it to an event handler named onGreetUserBtnClicked
    var greetButton = document.getElementById("greetButton");
    greetButton.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked() {
    // Find the name text field using getElementByID
    var nameField = document.getElementById("nameField");
    
    // Extract the name from the text field
    var userName = nameField.value;
    
    // Use the name to create a string that contains "Hello userNameHere"
    var greetingMessage = "Hello " + userName;
    
    // Display the message using alert
    alert(greetingMessage);
}
