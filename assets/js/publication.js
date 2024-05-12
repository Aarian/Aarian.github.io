// JavaScript for toggling and showing/hiding content
function toggleVisibility(id) {
    var element = document.getElementById(id);
    var content = element.innerHTML;
    //console.log("Visibility toggled for element with ID:", id, "hello",content);
    //element.style.display = 'none'
    if (element.style.display === 'none') {
        //console.log("In if ");
        element.style.display = 'block';
    }
    else {element.style.display = 'none';}
//     if (element.style.display == 'block') {
//        // console.log("In else ");
//         element.style.display = 'none';
//     }
    
//    // console.log("Visibility toggled for element with ID:", id, element.style.display);
}


