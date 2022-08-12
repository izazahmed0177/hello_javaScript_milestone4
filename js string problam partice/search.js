const lyrics='Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni.kala kala sada kala rong jomasa sada kala '

// const doesExist=lyrics.includes('pakhi');
// const doesExist2=lyrics.includes('pakhia');
// console.log(doesExist)
// console.log(doesExist2)

const searchString='Pakhi';
// const doesExist3=lyrics.includes(searchString);

const lyricsLowerCase=lyrics.toLowerCase();

const searchStringLowerCase=searchString.toLowerCase();

const doesExist4=lyricsLowerCase.includes(searchStringLowerCase);
console.log(doesExist4)


// oneline code 

const doesExistOneLine=lyrics.toLowerCase().includes(searchString.toLowerCase());

console.log(doesExistOneLine);

//---------------------------
//indexof

console.log(lyrics.indexOf('kala'))
console.log(lyrics.indexOf('kailla'));
//


if (lyrics.indexOf('sada')!==-1) {
    console.log('exists inside the string')
} else {
    console.log('cannot find it')
}

//startwith

console.log(lyrics.startsWith('Tumi'))

//endwith

const fileName='mybiodata.pdf';
const otherFile='mypic.png';

fileName.endsWith('.pdf')