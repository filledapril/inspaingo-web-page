const locations = document.querySelectorAll('div.times div')

const updateTimes = function() {
    locations.forEach(location => {
        const output = location.querySelector('output');
        const timeZone = location.getAttribute('data-timezone')
    
        const now = luxon.DateTime.now().setZone(timeZone);
    
        output.innerHTML = now.toFormat('HH:mm a');
    })
}


updateTimes();

setInterval(function (){
    updateTimes();
}, 1000);
