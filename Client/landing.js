let composerList = new Map([
    ["Akira Fujiwara", null],
    ["Asuka Hayazaki", "Asuka_Hayazaki.jpg"],
    ["Grant Kirkhope", "Grant_Kirkhope.jpg"]
]);


let gameList = new Map([
    ['Banjo-Kazooie', "Banjo-Kazooie.jpg"]
]);


function loadComposerTable() {

    //Get the table displaying all of the composers available for information
    let composerTable = document.getElementById('composerTable');

    //Iterate through every registered composer
    composerList.forEach(function(value, key) {

        //Create a new table cell
        let newCell = document.createElement('div');
        newCell.className = "cell composerCell";

        //Fill the cell's name
        let cellName = document.createElement('a');
        cellName.className = "tableCellName";
        cellName.innerHTML = key;
        cellName.href = "./Composers/" + key + ".html";

        //Fill the cell's image
        let cellImage = document.createElement('img');
        cellImage.className = "tableCellImage";

        //If there's a registered image for the composer, display it
        if (value != null) {
            cellImage.src = "../Images/Composers/" + value;
            cellImage.alt = key;
        }

        //Else, set it to a placeholder
        else {
            cellImage.src = "../Images/stock_image.png";
            cellImage.alt = "no_image";
        }

        //Build the table cell
        newCell.append(cellImage);
        newCell.append(cellName);
        composerTable.append(newCell);
    });
}


function loadGameTable() {

    let gameTable = document.getElementById('gameTable');

    gameList.forEach(function(value, key) {

        //Create a new table cell
        let newCell = document.createElement('div');
        newCell.className = "cell";

        //Fill the cell's name
        let cellName = document.createElement('a');
        cellName.className = "tableCellName";
        cellName.innerHTML = key;
        cellName.href = "./Games/" + key + ".html";

        //Fill the cell's image
        let cellImage = document.createElement('img');
        cellImage.className = "tableCellImage";

        //If there's a registered image for the composer, display it
        if (value != null) {
            cellImage.src = "../Images/Games/" + value;
            cellImage.alt = key;
        }

        //Else, set it to a placeholder
        else {
            cellImage.src = "../Images/stock_image.png";
            cellImage.alt = "no_image";
        }

        //Build the table cell
        newCell.append(cellImage);
        newCell.append(cellName);
        gameTable.append(newCell);
    });
}


window.onload = function() {
    this.loadComposerTable();
    this.loadGameTable();
}