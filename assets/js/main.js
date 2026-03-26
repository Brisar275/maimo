

/*
Ejercicios

Consejos:
1. Para mostrar el resultado de cada ejercicio, escribí un console.log con el formato: console.log('Ex 1.', valor o función).
2. Investigá un poco sobre el uso de reduce.
3. Creá un archivo js llamado utils.js y colocá allí todas las funciones auxiliares. (Ej. 10 y 14)

1) Importar el array songs usando módulos.

2. Usar la función map para crear un nuevo array con el título de cada canción en letras mayúsculas.

3. Usar la función filter para crear un nuevo array con todas las canciones lanzadas antes de 1975.

4. Usar destructuring para crear una variable que almacene el título de la primera canción del array.

5. Usar la función find para obtener el objeto que representa la canción "Hotel California".

6. Usar el operador rest para crear una función que reciba cualquier cantidad de argumentos y devuelva su suma. (Consejo: usar reduce)

7. Usar la función map y template literals para crear un nuevo array con strings en el formato "Título - Artista (Año)" para cada canción.

8. Usar destructuring y la función filter para crear un nuevo array con los títulos de todas las canciones de The Beatles.

9. Usar arrow functions y la función reduce para calcular la cantidad total de años entre las fechas de lanzamiento de todas las canciones. (Consejo: usar reduce)

10. Crear un módulo que exporte una función para calcular el promedio del año de lanzamiento de las canciones del array de entrada. (Consejo: usar reduce)

11. Usar la función find para obtener el objeto que representa la canción con el título más largo.

12. Usar destructuring y template literals para mostrar en consola el título, artista y año del primer elemento del array.

13. Usar el operador rest para crear un nuevo array sin el primer elemento.

14. Importar la función filter() desde un módulo utils.js y usarla para crear un nuevo array con todas las canciones que tengan "Love" en el título.

15. Usar el método every() para verificar si todas las canciones tienen títulos de 5 o más caracteres.

16. Usar el método some() para verificar si hay alguna canción de los años 80.

17. Usar un template literal para crear un string que diga "The Beatles lanzó Let It Be en 1970."

18. Usar el método map() para crear un nuevo array solo con los nombres de los artistas.

19. Crear una función llamada randomSong que devuelva una canción del array songs de forma aleatoria. Mostrar en consola la llamada a esta función 3 veces.

20. Escribir tu propia función usando al menos 3 conceptos.

21. Generar una canción tomando un artista random, un año random y un título random.

22. Mostrar el mensaje 'El clima en [ciudad] es de [temperatura] [unidad]'

const clima = {
  ciudad: "buenos Aires",
  temperatura: 30,
  unidad: "Grados Centígrados",
};

const mostrarClima = () => {}


map: "A cada cosa de esta lista, hazle este cambio y dame la lista nueva". (Transforma)

filter: "De esta lista, déjame pasar solo los que cumplan esta regla". (Filtra/Elimina)

find: "Busca en la lista y tráeme el primero que sea exactamente esto". (Rescata uno solo)

reduce: "Agarra toda esta lista, mézclala toda y dame un único resultado". (Licúa/Acumula)

*/

import songs from "./songs.js";
console.log("Ex 1. modulos: ", songs);


const titulosMayusculas = songs.map(cancion => cancion.title.toUpperCase());
console.log("Ex 2. Títulos en mayúsculas:", titulosMayusculas);


const cancionesViejas = songs.filter(cancion => cancion.year < 1975);
console.log("Ex 3. Canciones antes de 1975:", cancionesViejas);



const [{ title }] = songs;
console.log("Ex 4. Título de la primera canción:", title);


const cancionEncontrada = songs.find(cancion => cancion.title === 'Hotel California');
console.log("Ex 5. Canción encontrada:", cancionEncontrada);


function sumarTodo(...numeros) {
  return numeros.reduce((acu, val) => acu + val, 0);
}
console.log("Ex 6. Suma de 2 números:", sumarTodo(5, 10, 8));  


const listaFormateada = songs.map(cancion => `${cancion.title} - ${cancion.artist} (${cancion.year})`);
console.log("Ex 7. Formato de texto: ", listaFormateada);


const titulosTheBeatles = songs
  .filter(({ artist }) => artist === 'The Beatles')
  .map(({ title }) => title);

console.log("Ex 8. Títulos de The Beatles:", titulosTheBeatles);


const sumaTotalAños = songs.reduce((acumulador, cancion) => acumulador + cancion.year, 0);
console.log("Ex 9. Suma total de los años:", sumaTotalAños);


import { averageYear, filter } from "./utils.js";

const promedio = averageYear(songs);
console.log(`Ex 10. El promedio calculado por tu función es: ${promedio}`);


const maxLongitud = Math.max(...songs.map(cancion => cancion.title.length));
const cancionMasLarga = songs.find(cancion => cancion.title.length === maxLongitud);
console.log(`Ex 11. La canción más larga es: ${cancionMasLarga.title}`);


const [{ title: primerTitulo, artist, year }] = songs;
console.log(`Ex 12. Primera canción: ${primerTitulo} tocada por ${artist} en el año ${year}`);



const [cancionDescartada, ...restoDeCanciones] = songs;
console.log("Ex 13. Array sin la primera canción:", restoDeCanciones);


const cancionesConLove = filter(songs, cancion => cancion.title.includes("Love"));
console.log("Ex 14. Canciones con 'Love':", cancionesConLove);


const todosLargos = songs.every(cancion => cancion.title.length >= 5);
console.log("Ex 15. ¿Todos los títulos tienen 5+ letras?:", todosLargos);


const hayDeLos80 = songs.some(cancion => cancion.year >= 1980 && cancion.year <= 1989);
console.log("Ex 16. ¿Hay canciones de los 80s?:", hayDeLos80);


const b = songs.find(c => c.artist === "The Beatles");
const fraseBeatles = `${b.artist} lanzó ${b.title} en ${b.year}.`;
console.log("Ex 17. Frase:", fraseBeatles);


const soloArtistas = songs.map(c => c.artist);
console.log("Ex 18. Lista de artistas:", soloArtistas);


const randomSong = (lista) => lista[Math.floor(Math.random() * lista.length)];
console.log("Ex 19. canción ramdom: ", randomSong(songs).title);


const infoArtista = (nombre) => {
    const filtrados = songs.filter(s => s.artist === nombre);
    if (filtrados.length === 0) return "No hay canciones.";
    const { title, year } = filtrados[0];
    return `${nombre} tiene ${filtrados.length} temas. Ejemplo: ${title} (${year})`;
};
console.log("Ex 20. Función propia:", infoArtista("Queen"));


const frankenSong = (lista) => {
    const r = (l) => l[Math.floor(Math.random() * l.length)];
    return `Mezcla: "${r(lista).title}" de ${r(lista).artist} (${r(lista).year})`;
};
console.log("Ex 21. Canción mezclada:", frankenSong(songs));


const clima = (ciudad, temp, unidad) => `El clima en ${ciudad} es de ${temp} ${unidad}`;
console.log("Ex 22:", clima("Buenos Aires", 24, "°C"));

