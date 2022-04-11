window.onload = function() { 

    // create the table (coordinate plane 20 x 20)
    const width = 20;  // i know, that these variables equals each other,
    const height = 20; // but this way allows me to change and set different values for width and height
                       // and the code reads better

    const root = document.getElementById("root");
    let table = "<table>";
    for (let i = 0; i < height; i++) {
        table += '<tr class="row">';
        for (let j = 0; j < width; j++){
            table += '<td class="cell"></td>';
        }
        table += "</tr>";
    }
    root.innerHTML += table;

    // set styles for arrows
    const coordinates = root.getBoundingClientRect();
}