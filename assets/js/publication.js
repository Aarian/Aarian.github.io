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


// function toggleVisibility(id) {
//     var content = document.getElementById(id);
    
//     if (content.classList.contains('show')) {
//         content.classList.remove('show');
//         setTimeout(() => { content.style.display = 'none'; }, 500);
//     } else {
//         content.style.display = 'block';
//         setTimeout(() => { content.classList.add('show'); }, 10);
//     }
// }
