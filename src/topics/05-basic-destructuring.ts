
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 120,
    song: 'Hey Jude',
    details: {
        author: 'The Beatles',
        year: 1963
    }
}

const song = 'New Song';

const { 
    song:anotherSong, 
    songDuration:duration,
    details:{ author }

} = audioPlayer;


// console.log('Song:', anotherSong);
// console.log('Duration:', duration);
// console.log('Author:', author);


const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];


console.log('Personaje 3: ', trunks);

export {};