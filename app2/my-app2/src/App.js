import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useRef }  from 'react';

//adding ellements in an array
// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtist] = useState([]);

//   return(
//     <>
//     <h1>
//       Inspiring Sculptors
//     </h1>

//     <input value={name} onChange={e => setName(e.target.value)}></input>
//     <button onClick={() => {
//       setArtist([
//         ...artists,
//         {id: nextId++, name:name}
//       ]);
//     }}>
//       Add
//     </button>

//     <ul>
//       {artists.map(artist => 
//         (<li key={artist.id}> {artist.name}</li>))}
//     </ul>
//     </>
//   )
// }


//removing elements from array

// let initialArtists = [
//   { id: 0, name: 'Marta Colvin Andrade' },
//   { id: 1, name: 'Lamidi Olonade Fakeye'},
//   { id: 2, name: 'Louise Nevelson'},
// ];

// export default function List() {
//   const [artists, setArtist] = useState(initialArtists);

//   return(
//     <>
//     <h1>removing elements in an array</h1>
//     <ul>
//       {artists.map(artist => (
//         <li key={artist.id}>{artist.name}{''}
//         <button onClick={() => {
//           setArtist(
//             artists.filter(
//               a => a.id !== artist.id
//             )
//           );
//         }}>Delete</button>
//         </li>
//       ))}
//     </ul>
//     </>
//   )
// }



//using ref for a clicking button that counts how many time s it has been clicked
// export default function Counter() {
//   let ref = useRef(0);

//   function handleClick() {
//     ref.current = ref.current+1;
//     alert('you have clicked' + ref.current + 'times!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click Me!
//     </button>
//   )
// }




//building a stopwatch
export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    //start counting
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed =0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return(
    <>
    <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
    </>
  );
}