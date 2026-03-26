export const averageYear = (songs) =>
  songs.reduce((acc, curr) => acc + curr.year, 0) / songs.length;

export const filter = (array, callback) => array.filter(callback) // callback -> ()=>{}
