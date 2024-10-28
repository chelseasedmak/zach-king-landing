
//MUSIC CONTENT LOOP
function enableNavigation() {
    canNavigate = true;
}


document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', prevSlide);


const musicItems = [
    { title: "I'D LIKE TO THINK", imgSrc: "assets/photos/think-photo.png", link: "link.com" },
    { title: "HOLE IN THE WALL", imgSrc: "assets/photos/Hole-Wall-ZJK.png", link: "link.com" },
    { title: "WANNABE COWBOY", imgSrc: "assets/photos/cowboy-photo.png", link: "link.com" },
    { title: "SEE IT FOR MYSELF", imgSrc: "assets/photos/myself-photo.png", link: "link.com" },
    { title: "SMOKE ON MY JACKET", imgSrc: "assets/photos/smoke-photo.png", link: "link.com" },
    { title: "SAME SONG", imgSrc: "assets/photos/same-song-photo.png", link: "link.com" }
];

const carousel = document.getElementById('carousel');

musicItems.forEach(item => {
    const contentDiv = document.createElement('div');
    contentDiv.className = 'music-section-content';

    contentDiv.innerHTML = `
        <img src="${item.imgSrc}" alt="music-cover" class="music-cover">
        <div class="music-section-text">
            <h3>${item.title}</h3>
            <a href="${item.link}" class="music-section-button">LISTEN NOW</a>
        </div>
    `;

    carousel.appendChild(contentDiv);
});

//MUSIC SECTION CAROUSEL
let currentIndex = 0;
const items = document.querySelectorAll('.music-section-content');
const totalItems = items.length;
let canNavigate = true;

function updateCarousel() {
    const itemWidth = document.querySelector('.music-section-content').clientWidth;
    const offset = currentIndex * -itemWidth;
    items.forEach((item) => {
        item.style.transform = `translateX(${offset}px)`;
    });
}


function nextSlide() {
    if (canNavigate) {
        currentIndex = (currentIndex + 1) % totalItems;
        canNavigate = false;
        updateCarousel();
        setTimeout(enableNavigation, 500);
    }
}

function prevSlide() {
    if (canNavigate) {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        canNavigate = false;
        updateCarousel();
        setTimeout(enableNavigation, 500);
    }
}



//TOUR
const events = [
    {
        date: "NOV 15 FRI",
        title: "Conner Smith's Storyteller Tour @ 7pm",
        location: "Wyandotte, MI, United States",
        rsvpLink: "link.com",
        ticketsLink: "link.com"
    },
    {
        date: "NOV 15 FRI",
        title: "Conner Smith's Storyteller Tour @ 7pm",
        location: "Wyandotte, MI, United States",
        rsvpLink: "link.com",
        ticketsLink: "link.com"
    },
    {
        date: "NOV 15 FRI",
        title: "Conner Smith's Storyteller Tour @ 7pm",
        location: "Wyandotte, MI, United States",
        rsvpLink: "link.com",
        ticketsLink: "link.com"
    },
    {
        date: "NOV 15 FRI",
        title: "Conner Smith's Storyteller Tour @ 7pm",
        location: "Wyandotte, MI, United States",
        rsvpLink: "link.com",
        ticketsLink: "link.com"
    },
    {
        date: "NOV 15 FRI",
        title: "Conner Smith's Storyteller Tour @ 7pm",
        location: "Wyandotte, MI, United States",
        rsvpLink: "link.com",
        ticketsLink: "link.com"
    }
];


const eventsContainer = document.getElementById('events-container');


events.forEach((event, index) => {
    const eventDiv = document.createElement('div');
    eventDiv.className = 'tour-event-container';

    eventDiv.innerHTML = `
        <div class="date-location-container">
            <h5 class="tour">${event.date}</h5>
            <p class="tour">${event.title}</p>
            <p class="tour">${event.location}</p>
        </div>
        <div class="tour-buttons-container">
            <a href="${event.rsvpLink}" class="tour-button">RSVP</a>
            <a href="${event.ticketsLink}" class="tour-button">TICKETS</a>
        </div>
    `;

    eventsContainer.appendChild(eventDiv);

    if (index < events.length - 1) {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'line';
        eventsContainer.appendChild(lineDiv);
    }
});
