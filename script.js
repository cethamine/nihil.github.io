
// nihil.lol - almost all rights reserved


const owlIcon = document.querySelector('.material-symbols-outlined');

// hati and sköll are the sons of Fenrir, 
// representing the chase of the sun and moon
const sunAndmoon = document.querySelector('.brand');
// hati is associated with the moon (chasing it) 
// and sköll with the sun (chasing it)
// yhey represent both light and dark, 
// joy and sorrow, 
// yet they are two halves 
// of the same cosmic chase
// they are the enemy and the treacherous, 
// yet they play a vital role 
// in the cycle of day and night

const avatar = document.querySelector('.section__header img');

// const headerItems = Array.from(document.querySelector('.header__nav').children);

const content = document.getElementById('content');

const noContact = document.querySelector('.no__contact');


window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        sunAndmoon.textContent = 'sköll';
    } else {
        sunAndmoon.textContent = 'hati';
    }

    noContact.addEventListener('mouseenter', () => {
        document.addEventListener('mousemove', moveAnchor);
    });

    noContact.addEventListener('mouseleave', () => {
        document.removeEventListener('mousemove', moveAnchor);
        noContact.style.transform = 'translate(0, 0);';
    });

    // yes todo fix this shit
    // i dont care rn ok ok done bam boom


    // headerItems.forEach(item => {
    //     item.addEventListener('click', function () {
    //         const url = this.getAttribute('data-url');
    //         document.querySelector('.active').classList.remove('active');
    //         this.classList.toggle('active');

    //         if (url) {
    //             fetch(url)
    //                 .then(response => response.text())
    //                 .then(data => {
    //                     const tdiv = document.createElement('div');
    //                     tdiv.innerHTML = data;

    //                     const scripts = tdiv.querySelectorAll('script');
    //                     const tdivCode = tdiv.querySelector('#content').children;
    //                     content.innerHTML = '';
    //                     content.appendChild(tdivCode.item(0))

    //                     document.querySelectorAll('#dynamic-script').forEach(script => script.remove());

    //                     scripts.forEach(oldScript => {
    //                         if (oldScript.src) {
    //                             if (!document.querySelector(`script[src="${oldScript.src}"]`)) {
    //                                 const newScript = document.createElement('script');
    //                                 newScript.src = oldScript.src;
    //                                 newScript.defer = true;
    //                                 document.body.appendChild(newScript);
    //                             }
    //                         } else {
    //                             new Function(oldScript.textContent)();
    //                         }
    //                     });
    //                 });
    //         } else {
    //             window.location.href = '/';
    //         }
    //     });
    // });
});


let avatarClicks = 0;
avatar.addEventListener('click', () => {
    const healthPoint = document.querySelector('.healthpoint');
    healthPoint.classList.remove('animate__fadeOutDown');
    void healthPoint.offsetWidth;
    healthPoint.classList.add('animate__fadeOutDown');
    // you thought you could defeat me, 
    // but you have been deceived.
    // oh how wrong you were...
    // >:)

    avatarClicks += 1;
    if (avatarClicks >= 10) {
        // totally not a rick roll
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        // you did not see this at all.
        // DO NOT SPOIL THE FUN OK 
    }
});

owlIcon.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        sunAndmoon.textContent = 'sköll';
    } else {
        localStorage.setItem('theme', 'dark');
        sunAndmoon.textContent = 'hati';
    }
})


// w claude
function moveAnchor(event) {
    const anchor = document.querySelector('.no__contact');
    const container = document.querySelector('.section__body-workspace');

    // Get container and anchor dimensions
    const containerRect = container.getBoundingClientRect();
    const anchorRect = anchor.getBoundingClientRect();

    // Get mouse position relative to the container
    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;

    // Get anchor's current position
    const anchorCenterX = anchorRect.left - containerRect.left + anchorRect.width / 2;
    const anchorCenterY = anchorRect.top - containerRect.top + anchorRect.height / 2;

    // Calculate angle between mouse and anchor
    const angle = Math.atan2(mouseY - anchorCenterY, mouseX - anchorCenterX);

    // Dodge distance
    const dodgeDistance = 50;

    // Calculate new position
    const newX = anchorCenterX - Math.cos(angle) * dodgeDistance;
    const newY = anchorCenterY - Math.sin(angle) * dodgeDistance;

    // Constrain movement within container
    const maxX = containerRect.width - anchorRect.width;
    const maxY = containerRect.height - anchorRect.height;

    const constrainedX = Math.max(0, Math.min(maxX, newX));
    const constrainedY = Math.max(0, Math.min(maxY, newY));

    // Apply translation
    anchor.style.transform = `translate(${constrainedX - anchorCenterX}px, ${constrainedY - anchorCenterY}px)`;
}

// w stackoverflow
document.oncontextmenu = document.body.oncontextmenu = function () { return false; }