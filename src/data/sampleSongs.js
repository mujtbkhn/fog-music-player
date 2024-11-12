import Billie from "../assets/Billie Jean.mp3";
import Beat from "../assets/Beat.mp3";
import DontStop from "../assets/Dont Stop.mp3";
import Rock from "../assets/Rock with You.mp3";
import Smooth from "../assets/Smooth Criminal.mp3";
import billie from "../thumbnails/billie.jpg";

export const sampleSongs = [
    {
        id: '11',
        title: 'Billie Jean',
        plays: '1,040,811,084',
        duration: '4:55',
        album: 'Thriller 25 Super Deluxe Edition',
        thumbnail: billie,
        audioUrl: Billie
    },
    {
        id: '22',
        title: 'Beat It',
        plays: '643,786,045',
        duration: '4:18',
        album: 'Thriller 25 Super Deluxe Edition',
        thumbnail: billie,
        audioUrl: Beat
    },
    {
        id: '33',
        title: 'Smooth Criminal - 2012 Remaster',
        plays: '407,234,004',
        duration: '4:17',
        album: 'Thriller 25 Super Deluxe Edition',
        thumbnail: billie,
        audioUrl: Smooth
    },
    {
        id: '44',
        title: "Don't Stop 'Til You Get Enough",
        plays: '316,391,952',
        duration: '6:05',
        album: 'Bad 25th Anniversary',
        thumbnail: billie,
        audioUrl: DontStop
    },
    {
        id: '55',
        title: 'Rock With You - Single Version',
        plays: '268,187,218',
        duration: '3:40',
        album: 'Off The Wall',
        thumbnail: billie,
        audioUrl: Rock
    }
];