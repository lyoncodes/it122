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
]

const getResource = (resource, id) => {
  console.log(resource, id)
  return boats.find(el => el[`${resource}`] == `${id}` )
}

const getAll = () => { 
  return boats;
}

export { boats, getAll, getResource }