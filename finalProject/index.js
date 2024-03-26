var radioButtons = document.querySelectorAll('input[type="radio"]');


// Loop through each radio button
radioButtons.forEach(function(radioButton) {
    // Add click event listener to each radio button
    radioButton.addEventListener("click", function() {
        // Deselect all other radio buttons in the same group
        radioButtons.forEach(function(btn) {
            if (btn !== radioButton) {
                btn.checked = false;
            }
        });
    });
});



if(radioButtons.checked){

}