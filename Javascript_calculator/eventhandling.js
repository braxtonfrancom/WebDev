document.addEventListener('DOMContentLoaded', function() {
    const favoriteIcons = document.createElement('span');
    favoriteIcons.classList.add('favorite-icons');
    document.body.appendChild(favoriteIcons);

    const facebookImg = createIcon("facebook.png", "Facebook", "https://www.facebook.com");
    const instagramImg = createIcon("instagram.png", "Instagram", "https://www.instagram.com");
    const linkedinImg = createIcon("linkedin.png", "LinkedIn", "https://www.linkedin.com");
    const twitterImg = createIcon("twitter.png", "Twitter", "https://twitter.com");
    const youtubeImg = createIcon("youtube.png", "YouTube", "https://www.youtube.com");
    const amazonImg = createIcon("amazon.png", "Amazon", "https://www.amazon.com");

    favoriteIcons.appendChild(facebookImg);
    favoriteIcons.appendChild(instagramImg);
    favoriteIcons.appendChild(linkedinImg);
    favoriteIcons.appendChild(twitterImg);
    favoriteIcons.appendChild(youtubeImg);
    favoriteIcons.appendChild(amazonImg);

    const iconText = document.createElement('div');
    iconText.id = "iconText";
    iconText.innerHTML = `
        <p>In: </p>
        <p>Out: </p>
        <p>Mouse X: , Y: </p>
    `;
    document.body.appendChild(iconText);

    let enlargedImg = null;

    favoriteIcons.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        document.getElementById('iconText').querySelectorAll('p')[2].textContent = "Mouse X: " + mouseX + ", Y: " + mouseY;
    });

    function createIcon(src, alt, link) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.style.height = "100px";
        img.addEventListener('mouseenter', function() {
            document.getElementById('iconText').querySelectorAll('p')[0].textContent = "In: " + alt;
            img.style.opacity = 0.5;
        });
        img.addEventListener('mouseleave', function() {
            document.getElementById('iconText').querySelectorAll('p')[1].textContent = "Out: " + alt;
            img.style.opacity = 1.0;
        });
        img.addEventListener('dblclick', function() {
            window.open(link, '');
        });
        img.addEventListener('click', function() {
            if (enlargedImg) {
                document.body.removeChild(enlargedImg);
            }
            enlargedImg = document.createElement('img');
            enlargedImg.src = src;
            enlargedImg.style.height = "200px";
            document.body.appendChild(enlargedImg);
        });
        return img;
    }
});