const logo = document.querySelectorAll("#logo path");
    for (let i = 0; i < logo.length; i++) {
        // console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
    }

setTimeout(() => {
    const body = document.querySelector('body');
    const logoDiv = document.querySelector('.logoDiv');
    /*const container = document.querySelector('.container');*/

    // 👇️ removes element from DOM
    // body.style.overflow = 'visible';
    /*container.style.visibility = 'visible';*/

    logoDiv.style.display = 'none';

    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
}, 2500); // 👈️ time in milliseconds

// navbar
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("header");
var bigHeader = document.getElementById('big-heading');
const numberedHeadings = document.querySelectorAll('.numbered-heading');

window.addEventListener('scroll', function(e) {
    last_scroll_position = window.scrollY;


    // Scrolling down
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
        // header.removeClass('slideDown').addClass('slideUp');
        header.classList.remove("slideDown");
        header.classList.add("slideUp");

        // Scrolling up
    }
    else if (new_scroll_position > last_scroll_position) {
        // header.removeClass('slideUp').addClass('slideDown');
        header.classList.remove("slideUp");
        header.classList.add("slideDown");
    }

    new_scroll_position = last_scroll_position;
});

//hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-menu");
/*const headerLinks = document.querySelector(".headerLinks");*/
const body = document.querySelector('body');
const html = document.querySelector('html');
const aside = document.querySelector('.aside');
const container = document.querySelector('.container');
const about = document.getElementById('about');
const hero = document.querySelector('.hero');
const footer = document.querySelector('.footer');

hamburger.addEventListener("click", () => {

    var asd = window.matchMedia("(max-width: 900px)")
    myFunction(asd) // Call listener function at run time
    asd.addListener(myFunction) // Attach listener function on state chang

    function myFunction(asd) {
        if (asd.matches) {
            const visibility = aside.getAttribute('aria-hidden');

                if(visibility === "true") {
                    aside.setAttribute('aria-hidden', "false");
                    aside.setAttribute('data-visible', "true");

                    aside.style.visibility = "visible";
                    body.style.overflow = "hidden";
                    html.style.overflow = "hidden";


                    /* Any browser which supports CSS3 */
                    container.style.filter = "blur(5px)";
                    about.style.filter = "blur(5px)";
                    hero.style.filter = "blur(5px)";
                    footer.style.filter = "blur(5px)";


                    /*/!* Firefox version 34 and earlier *!/*/
                    /*container.style.filter = "url(\"blur.svg#gaussian_blur\")";*/

                    /*/!* Webkit in Chrome 52, Safari 9, Opera 39, and earlier *!/*/
                    /*--webkit--container.style.filter = "blur(3px)";*/

                } else {
                    aside.setAttribute('aria-hidden', "true");
                    aside.setAttribute('data-visible', "false");
                    aside.style.visibility = "hidden";
                    body.style.overflow = "auto";
                    html.style.overflow = "auto";


                    /* Any browser which supports CSS3 */
                    container.style.filter = "blur(0px)";
                    about.style.filter = "blur(0px)";
                    hero.style.filter = "blur(0px)";
                    footer.style.filter = "blur(0px)";




                    /*/!* Firefox version 34 and earlier *!/*/
                    /*container.style.filter = "url()";*/

                    /*/!*!/!* Webkit in Chrome 52, Safari 9, Opera 39, and earlier *!/!*!/
                    --webkit--container.style.filter = "blur(0px)";*/
                }
        }

        /*if(body.style.overflow === 'visible') {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }*/
    }


    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
   /* headerLinks.classList.toggle("headerLinksActive");*/

});
function closeHamburgerMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    aside.setAttribute('aria-hidden', "true");
    aside.setAttribute('data-visible', "false");
    aside.style.visibility = "hidden";
    body.style.overflow = "auto";
    html.style.overflow = "auto";


    /* Any browser which supports CSS3 */
    container.style.filter = "blur(0px)";
    about.style.filter = "blur(0px)";
    hero.style.filter = "blur(0px)";
    footer.style.filter = "blur(0px)";
    // headerLinks.classList.remove("headerLinksActive");
}

const asideLinks = document.querySelectorAll('.aside-links');
asideLinks.forEach((link) => {
    link.addEventListener("click", closeHamburgerMenu);
});

container.addEventListener("click", closeHamburgerMenu);
about.addEventListener("click", closeHamburgerMenu);
hero.addEventListener("click", closeHamburgerMenu);
footer.addEventListener("click", closeHamburgerMenu);

document.querySelectorAll(".nav-link").forEach((link) =>
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        /*headerLinks.classList.remove("headerLinksActive");*/
    })
);


$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("#header").css("box-shadow", "0 2px 15px rgba(0,0,0,0.5)");

    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("#header").css("box-shadow", "none");
    }

});


const toggleDarkMode =  document.querySelectorAll('#toggleDarkMode');
const darkModeBg = document.getElementsByClassName('darkModeBg');
const lightMode = document.querySelectorAll('#lightMode');
const darkMode = document.querySelectorAll('#darkMode');

const projectDescription = document.getElementsByClassName('project-description');
const projectTitle = document.getElementsByClassName('project-title');
const svgLinks = document.getElementsByClassName('svgLinks');
const projectTechList = document.getElementsByClassName('project-tech-list');
const techList = document.getElementsByClassName('techList');
const firstNav = document.querySelector('.firstNav');

let mode = localStorage.getItem("mode");
var test = window.matchMedia("(max-width: 900px)")
let cursorFlash = document.getElementById('cursor');
const title = document.querySelector('.title');

//disable darkMode
const disableDarkMode = () => {
    const logoDiv = document.querySelector('.logoDiv');

    cursorFlash.style.visibility = "hidden";
    logoDiv.style.background = "#F1EFF6";
    bigHeader.style.color = "#373550";
    body.classList.add("lightBody");
    header.classList.add("lightHeader");
    navMenu.classList.add("lightNav");
    numberedHeadings.forEach(element => {
        element.style.color = "var(--light-violet)";
    });
    title.style.color = "rgb(55, 53, 80)";

    //sideBar
    aside.style.background = "#F1EFF6";
    aside.style.color = "var(--violet)";
    //sideBar

    firstNav.style.color = "var(--violet)";

    for (let q=0; q<toggleDarkMode.length; q++) {
        toggleDarkMode[q].classList.add("lightToggle");
        toggleDarkMode[q].style.background = "var(--orange)";
        toggleDarkMode[q].style.transition = "250ms";
        toggleDarkMode[q].style.left = "0";
    }
    for (let w=0; w<darkMode.length; w++) {
        darkMode[w].style.display = "block";
    }
    for (let e=0; e<lightMode.length; e++) {
        lightMode[e].style.display = "none";

    }
    for (let r=0; r<lightMode.length; r++) {
        darkModeBg[r].style.background = "#E2E1E7";
    }



    // change background of project-desciption.
    for(let a=0; a<projectDescription.length; a++) {
        var x = window.matchMedia("(max-width: 900px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) // Attach listener function on state chang

        function myFunction(x) {
            if (x.matches) {
                projectDescription[a].style.background = "transparent";
                projectDescription[a].style.color = "var(--light-slate)";
                for(let j=0; j<projectTitle.length;j++) {
                    projectTitle[j].style.color = "var(--light-slate)";

                }
               /* for(let k=0; k<svgLinks.length; k++) {
                    svgLinks[k].style.color = "var(--light-slate)";
                }*/
                for(let l=0; l<projectTechList.length; l++) {
                    projectTechList[l].style.color = "var(--light-slate)";
                }
                for(let m=0; m<techList.length; m++) {
                    techList[m].style.color = "var(--light-slate)";
                }

            } else {
                projectDescription[a].style.background = "#F1EFF6";
                projectDescription[a].style.color = "var(--violet)";
                for(let k=0; k<projectTitle.length;k++) {
                    projectTitle[k].style.color = "var(--light-violet)";
                }
                /*for(let k=0; k<svgLinks.length; k++) {
                    svgLinks[k].style.color = "var(--light-violet)";
                }*/
                for(let l=0; l<projectTechList.length; l++) {
                    projectTechList[l].style.color = "var(--slate)";
                }
                for(let m=0; m<techList.length; m++) {
                    techList[m].style.color = "#687798";
                }
            }
        }
    }

    localStorage.setItem('mode', null);
};
//enableDarkMode
const enableDarkMode = () => {
    const logoDiv = document.querySelector('.logoDiv');
    logoDiv.style.background = "var(--violet)";
    bigHeader.style.color = "var(--white)";
    cursorFlash.style.visibility = "visible";
    body.classList.remove("lightBody");
    header.classList.remove("lightHeader");
    navMenu.classList.remove("lightNav");
    firstNav.style.color = "var(--lightest-slate)";
    numberedHeadings.forEach(element => {
        element.style.color = "var(--lightest-slate)";
    });

    title.style.color = "var(--lightest-slate)";
    //sideBar
    aside.style.background = "var(--violet)";
    aside.style.color = "var(--lightest-slate)";
    //sideBar

    for (let q=0; q<toggleDarkMode.length; q++) {
        toggleDarkMode[q].classList.remove("lightToggle");
        toggleDarkMode[q].style.background = "#fff";
        toggleDarkMode[q].style.transition = "250ms";
        toggleDarkMode[q].style.left = "24px";
    }
    for (let w=0; w<darkMode.length; w++) {
        darkMode[w].style.display = "none";
    }
    for (let e=0; e<lightMode.length; e++) {
        lightMode[e].style.display = "block";
    }
    for (let r=0; r<lightMode.length; r++) {
        darkModeBg[r].style.background = "var(--orange)";
    }

    // change background of project-desciption.
     for(let a=0; a<projectDescription.length; a++) {
         var x = window.matchMedia("(max-width: 900px)")
         myFunction(x) // Call listener function at run time
         x.addListener(myFunction) // Attach listener function on state chang

         function myFunction(x) {
             if (x.matches) {
                 projectDescription[a].style.background = "transparent";
                 projectDescription[a].style.color = "var(--light-slate)";
                 for(let j=0; j<projectTitle.length;j++) {
                     projectTitle[j].style.color = "var(--light-slate)";
                 }

                 /*for(let k=0; k<svgLinks.length; k++) {
                     svgLinks[k].style.color = "var(--light-slate)";
                 }*/
                 for(let m=0; m<techList.length; m++) {
                     techList[m].style.color = "var(--light-slate)";
                 }

                } else {
                 projectDescription[a].style.background = "var(--light-violet)";
                 projectDescription[a].style.color = "var(--light-slate)";
                 for(let j=0; j<projectTitle.length;j++) {
                         projectTitle[j].style.color = "var(--light-slate)";
                 }
                /* for(let k=0; k<svgLinks.length; k++) {
                        svgLinks[k].style.color = "var(--lightest-slate)";
                 }*/
                 for(let m=0; m<techList.length; m++) {
                     techList[m].style.color = "#687798";
                 }
             }
         }
    }
    // change color of project-title.


    localStorage.setItem('mode', 'enabled');
};


for(let a=0; a<projectDescription.length;a++) {
    var x = window.matchMedia("(max-width: 900px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

    function myFunction(x) {
        mode = localStorage.getItem("mode");

        if (x.matches) { // If media query matches
            projectDescription[a].style.background = "transparent";
            projectDescription[a].style.color = "var(--light-slate)";
        } else {
            if (mode === "enabled") {
                projectDescription[a].style.background = "var(--light-violet)";
                projectDescription[a].style.color = "var(--light-slate)";
            } else {
                projectDescription[a].style.background = "#FAF8FF";
                projectDescription[a].style.color = "var(--violet)";
            }
        }
    }
}


if (mode === "enabled") {
    enableDarkMode();
} else {
    disableDarkMode();
}

for (let z=0; z<toggleDarkMode.length; z++) {
    toggleDarkMode[z].addEventListener('click', () => {
        mode = localStorage.getItem("mode");
        if (mode !== "enabled") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
}






