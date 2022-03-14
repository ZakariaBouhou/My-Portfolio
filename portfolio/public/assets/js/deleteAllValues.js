window.onload = () => {

    let deleteButton = document.querySelector("input[type=button]");

    const formElements = document.querySelectorAll('#name, #email, #object, #message');
   
    let contact = document.getElementById("contact");
    
    function deleteAllInput() {

        formElements.forEach(element => {
            element.value = "";
            formElements[0].focus();
        });
        contact.scrollIntoView("smooth");
    }

    deleteButton.addEventListener('click', deleteAllInput);
}