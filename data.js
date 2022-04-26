const boats = [
  {
    name: 'parsifal',
    length: 44,
    type: 'sailing-yacht',
    id: 1
  },
  {
    name: 'bluecat',
    length: 32,
    type: 'motor-yacht',
    id: 2
  },
  {
    name: 'obsidian',
    length: 44,
    type: 'sailing-yacht',
    id: 3
  },
  {
    name: 'belladona',
    length: 23,
    type: 'sailing-racer',
    id: 4
  },
  {
    name: 'tipitina',
    length: 65,
    type: 'house',
    id: 5
  },
  {
    name: 'blue cat',
    length: 65,
    type: 'house',
    id: 5
  }
]

const getAll = () => { 
  return boats;
}

const getResource = (resource, id) => {
  return boats.find(el => el[`${resource}`] == id )
}


export { getAll, getResource }