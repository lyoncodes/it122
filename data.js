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

const getAllTheBoats = () => { 
  return boats;
}

const getBoatByName = (name) => {
  return boats.find(el => el.name == name)
}

const getBoat = (id) => {
  return boats.find(el => el.id == id)
}

export { boats, getAllTheBoats, getBoat, getBoatByName }