var randomChange = document.getElementById('Background');
images = ['Home/Images/home_background.jpg', 'Home/Images/home_background1.jpg', 'Home/Images/home_background2.jpg', 'Home/Images/home_background3.jpg',
    'Home/Images/home_background4.jpg', 'Home/Images/home_background5.jpg', 'Home/Images/home_background6.jpg', 'Home/Images/home_background7.jpg',
    'Home/Images/home_background8.jpg', 'Home/Images/home_background9.jpg', 'Home/Images/home_background10.jpg', 'Home/Images/home_background11.jpg',
    'Home/Images/home_background12.jpg', 'Home/Images/home_background13.jpg', 'Home/Images/home_background14.jpg', 'Home/Images/home_background15.jpg',
    'Home/Images/home_background16.jpg', 'Home/Images/home_background17.jpg', 'Home/Images/home_background18.jpg', 'Home/Images/home_background19.jpg',
    'Home/Images/home_background20.jpg', 'Home/Images/home_background21.jpg', 'Home/Images/home_background22.jpg'];
var imgCount = images.length;
var number = Math.floor(Math.random() * imgCount);

window.onload = function () {
    randomChange.style.backgroundImage = 'url(' + images[number] + ')';
}