const policySelected = (selectObject) => {

    console.log(selectObject.value);
    document.getElementById("petDetails").hidden = true;
    document.getElementById("propertyDetails").hidden = true;
    document.getElementById("vehicleDetails").hidden = true;

    document.getElementById(selectObject.value).hidden = false;
}

const accordionFold = (clickedButton) => {    
    clickedButton.classList.toggle("active");
    var section = document.getElementsByName(clickedButton.attachedSection)[0];        
    console.log(section);   
    if (section.hidden) {
        section.hidden = false;
      } else {
        section.hidden = true;;
      }
}