var job = document.getElementById('job');
        job.innerHTML = job.textContent.replace(/\S/g, "<h2 class='eachJobLetter'>$&</h2>");

       function animation () { anime.timeline({loop: false})
            .add({
                targets: '.eachJobLetter',
                rotateY: [-90, 0],
                duration: 1300,
                delay: (el, i) => 45 * i
                }).add({
                targets: '.eachJobLetter',
                // opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
                });
        }

    document.addEventListener('DOMContentLoaded', animation());

