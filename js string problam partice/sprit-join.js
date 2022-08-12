const lyrics='Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni.kala kala sada kala rong jomasa sada kala ';

console.log(lyrics);

const parts =lyrics.split(' ');
console.log(parts);

const sentences=lyrics.split('.')
console.log(sentences);
console.log('-----------------------');

const chars =lyrics.split('')
console.log(chars);
console.log('-------------');
const partial=lyrics.slice(5,9);
console.log(partial);

const partial2=lyrics.substring(5,9);
console.log(partial2);

const line=[
    'Tumi bondhu kala pakhi ami jeno ki',
    ' bosonto kale tomai bolte pari ni',
    'kala kala sada kala rong jomasa sada kala '
  ];
  const newSong = line.join(' : ')

  console.log(newSong);


