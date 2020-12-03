let name_field = document.querySelector('#name');
var boarding_station = document.querySelector("#boarding"); 
var destination_station = document.querySelector("#destination"); 
var boarding_time = document.querySelector('#time');
let epass_container = document.querySelector('#epass-container');
let epass = document.querySelector('#epass');
let form = document.querySelector('#form');

const stations = [
    'Kavi Subhash',
    'Shahid Khudiram',
    'Kavi Nazrul',
    'Gitanjali',
    'Masterda Surya Sen',
    'Netaji',
    'Mahanayak Uttam Kumar',
    'Rabindra Sarobar',
    'Kalighat',
    'Jatin Das Park',
    'Netaji Bhavan',
    'Rabindra Sadan',
    'Maidan',
    'Park Street',
    'Esplanade',
    'Chandni Chowk',
    'Central',
    'Mahatma Gandhi Road',
    'Girish Park',
    'Shobhabazar Sutanuti',
    'Shyambazar',
    'Belgachhia',
    'Dum Dum',
    'Noapara'
];

const times = [
    '08:00 AM - 09:00 AM',
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM',
    '07:00 PM - 08:00 PM',
    '08:00 PM - 09:00 PM',
    '09:00 PM - 10:00 PM'
]

const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

stations.forEach(function(station){
    var el = document.createElement("option");
    el.textContent = station;
    el.value = station;
    boarding_station.appendChild(el);

    var el2 = document.createElement("option");
    el2.textContent = station;
    el2.value = station;
    destination_station.appendChild(el2);
});

times.forEach(function(time){
    var el = document.createElement("option");
    el.textContent = time;
    el.value = time;
    boarding_time.appendChild(el);
});

let btn_getPass = document.querySelector('#btn-getPass').addEventListener('click', (e)=>{
    e.preventDefault();
    
    let name = document.querySelector('#e-name');
    let time = document.querySelector('#e-time');
    let boarding = document.querySelector('#e-boarding');
    let destination = document.querySelector('#e-destination');
    let date = document.querySelector('#e-date');
    let bookingDate = document.querySelector('#e-bookingDate');
    
    name.innerHTML = name_field.value;
    time.innerHTML = boarding_time.value;
    boarding.innerHTML = boarding_station.value;
    destination.innerHTML = destination_station.value;
    date.innerHTML = getCurrentDate();
    bookingDate.innerHTML = getCurrentDateTime();
    
    var epasscolor = '';
    switch(time.innerHTML){
        case '08:00 AM - 09:00 AM': 
            epasscolor = 'a8to9';
            break;

        case '09:00 AM - 10:00 AM': 
            epasscolor = 'a9to10';
            break;

        case '10:00 AM - 11:00 AM': 
            epasscolor = 'a10to11';
            break;

        case '11:00 AM - 12:00 PM': 
            epasscolor = 'a11to12';
            break;

        case '12:00 PM - 01:00 PM': 
            epasscolor = 'p12to1';
            break;

        case '01:00 PM - 02:00 PM': 
            epasscolor = 'p1to2';
            break;

        case '02:00 PM - 03:00 PM': 
            epasscolor = 'p2to3';
            break;

        case '03:00 PM - 04:00 PM': 
            epasscolor = 'p3to4';
            break;

        case '04:00 PM - 05:00 PM': 
            epasscolor = 'p4to5';
            break;

        case '05:00 PM - 06:00 PM': 
            epasscolor = 'p5to6';
            break;
            
        case '06:00 PM - 07:00 PM': 
            epasscolor = 'p6to7';
            break;

        case '07:00 PM - 08:00 PM': 
            epasscolor = 'p7to8';
            break;

        case '08:00 PM - 09:00 PM': 
            epasscolor = 'p8to9';
            break;

        case '09:00 PM - 10:00 PM': 
            epasscolor = 'p9to10';
            break;
    }

    epass.className = epasscolor;
    epass_container.style.display = "block";
    form.style.display="none";
    
});

//to pad numbers with leading 0's
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function getCurrentDate(){
    
    let now = new Date()
    let month = monthNames[now.getMonth()];
    let year = now.getFullYear();
    let day = pad(now.getDay()-1, 2);

    return (day + "-"+ month + "-" + year);
}

function getCurrentDateTime(){
    let now = new Date()
    let month = now.getMonth()+1;
    let year = now.getFullYear();
    let day = pad(now.getDay(), 2);

    let hours_minutes = formatTimeShow(now.getHours(), now.getMinutes());

    return (day + "-"+ month + "-" + year.toString().substr(-2) + " " + hours_minutes);
}

function formatTimeShow(hours, minutes) {
    var hour = hours % 12;
    if (hour === 0) h = 12;
    return (hour < 10 ? '' : '') + pad(hour, 2) + ':' + pad(minutes, 2) + (hours < 12 ? ' AM' : ' PM');
}




function closeshow(){
    document.querySelector('#form').style.display = "flex";
    epass_container.style.display = "none";
}