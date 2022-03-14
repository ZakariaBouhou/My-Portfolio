var city = document.getElementById('city');
city.innerHTML = city.textContent.replace(/\S/g, "<p class='eachCityLetter'>$&</p>");

       function animation () { anime.timeline({loop: false})
            .add({
            targets: '.eachCityLetter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i+1)
            }).add({
            targets: '.eachCityLetter',
            // opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
            });
        }

    document.addEventListener('DOMContentLoaded', animation());