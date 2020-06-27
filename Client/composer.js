function fillSideTable() {

    let firstGame = document.getElementById('itFirstGame');
    let latestGame = document.getElementById('itLatestGame');

    let composerWorks = document.getElementById('wtList');

    if (composerWorks.childElementCount != 0) {
        firstGame.innerHTML = composerWorks.firstElementChild.firstElementChild.innerText;
        latestGame.innerHTML = composerWorks.lastElementChild.firstElementChild.innerText;
    }
}


window.onload = function() {
    this.fillSideTable()
}