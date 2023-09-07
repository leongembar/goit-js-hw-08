
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = "videoplayer-current-time";

    player.on('timeupdate', throttle((e) => {
        localStorage.setItem(LOCAL_STORAGE_KEY, e.seconds);
      }, 1000)
    );

    player.setCurrentTime(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
