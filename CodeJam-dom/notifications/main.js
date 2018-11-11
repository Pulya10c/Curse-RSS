const TEXT_NOTIFICATION = ['1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore', 
                        '2Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo', 
                        '3Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                        '4Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        '5Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        '6Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat,'
                        ];

const notificationClosed = document.getElementById("notification");
const checkboxDisable = document.getElementById("checkboxValue");
const closeBox = document.getElementById('closeButton');
const pointSlider = document.getElementsByClassName('dots');
const keyD = document.getElementById('backwards');
const keyU = document.getElementById('forward');
const ul = document.getElementsByTagName('ul');
let indexSlider = 0;

window.onload = function () {
    slideContent (4);
    console.log(localStorage.getItem('KeyStorage'));
    if (localStorage.getItem('KeyStorage') != null && localStorage.getItem('KeyStorage') == 'GoodBay') {
        notificationClosed.style.display = 'none';
    } 
    else {
        setTimeout (function () {console.log(localStorage.getItem('KeyStorage'));notificationClosed.style.display = 'flex'}, 0);
    }    
    closeBox.addEventListener('click', function(e) {
        if(checkboxDisable.checked) {
            localStorage.setItem('KeyStorage','GoodBay');
            } 
            e.preventDefault();
            notificationClosed.style.display = 'none';
            
        });
    
}