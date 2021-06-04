console.log('dale');

setInterval(() => {
    const images = document.getElementsByTagName('IMG');
    for (x = 0; x < images.length; x++) {
        var videoElement = document.createElement("video");
        var sourceElement = document.createElement("source");
        videoElement.width = 100;
        videoElement.height = 100;
        sourceElement.setAttribute('src', 'https://cdn.discordapp.com/attachments/727607444964114730/850489465495617576/videoplayback.mp4');
        videoElement.appendChild(sourceElement);
        images[x].parentElement.replaceChild(videoElement, images[x]);
        images[x].load();
        images[x].play();
        // images[x].src = "http://images.uncyc.org/pt/thumb/3/3b/Bluezão_Cagando.PNG/300px-Bluezão_Cagando.png";
    }
}, 1000);

setInterval(() => {
    const sources = document.getElementsByTagName('SOURCE');
    const videos = document.getElementsByTagName('VIDEO');
    const iframes = document.getElementsByTagName('IFRAME');
    for (x = 0; x < sources.length; x++) {
        sources[x].setAttribute('src', 'https://cdn.discordapp.com/attachments/727607444964114730/850489465495617576/videoplayback.mp4');
    }
    for (x = 0; x < videos.length; x++) {
        videos[x].load();
        videos[x].play();
    }
    for (x = 0; x < iframes.length; x++) {
        iframes[x].setAttribute('src', 'https://cdn.discordapp.com/attachments/727607444964114730/850489465495617576/videoplayback.mp4');
    }
}, 10000);