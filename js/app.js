let date = new Date();
let x = date.getHours();
if(x >= 6 && x < 12)
{
    alert("Good Morning!");
    document.getElementById("img").src = 'https://i.tribune.com.pk/media/images/5-59555_photo-wallpaper-the-sun-dawn-coffee-mornin1626689182-0/5-59555_photo-wallpaper-the-sun-dawn-coffee-mornin1626689182-0.jpg';
    document.getElementById("img").alt = "Morning";
}
else if (x >= 12 && x < 18)
{
    alert("Good Afternoon!");
    document.getElementById("img").src = 'https://media.wnyc.org/i/800/0/h/85/1/160924154.jpg';
    document.getElementById("img").alt = "Afternoon";
}
else if (x >= 18 && x < 24)
{
    alert("Good Evening!");
    document.getElementById("img").src = 'https://wallpapercave.com/wp/wp4441417.jpg';
    document.getElementById("img").alt = "Evening";
}
else
{
    alert("Good Night!");
    document.getElementById("img").src = 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Midnight_Mist.jpg';
    document.getElementById("img").alt = "Night";
}