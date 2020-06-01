function fillSideTable() {

    let condensedTable = document.getElementById('infoTable');

    let firstGame = document.getElementById('infoTableFirstGame');
    let lastGame = document.getElementById('infoTableLastGame');
    let yearsActive = document.getElementById('infoTableYearsActive');

    let composerWorks = document.getElementById('worksTableList');

    if (composerWorks.childElementCount != 0) {
        firstGame.innerHTML = composerWorks.firstElementChild.firstElementChild.innerText;
        lastGame.innerHTML = composerWorks.lastElementChild.firstElementChild.innerText;
    }
}


window.onload = function() {
    this.fillSideTable()
}