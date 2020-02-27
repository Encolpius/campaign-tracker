function nextWeek() {
    let today = new Date();
    if (today.getDay() == 3) {
        let nextSession = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        console.log(nextSession)
    }
}

function changeTab(tabName) {
    let tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';
}

window.addEventListener('load', function() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yy = today.getFullYear();
    if (today.getDay() != 2) {
        let nextWeek = new Date(yy, mm, dd + 9);
        let nextdd = String(nextWeek.getDate()).padStart(2, '0');
        let nextmm = String(nextWeek.getMonth()).padStart(2, '0');
        let nextyy = String(nextWeek.getFullYear());
        document.getElementById('conflux_date').innerHTML = nextmm + "/" + nextdd + "/" + nextyy;
    } else {
        document.getElementById('conflux_date').innerHTML = mm + "/" + dd + "/" + yy;
    }
})

changeTab("gos_tab");