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
    id: 6
  }
]

const getAll = () => { 
  return boats;
}

const getResource = (resource, id) => {
  return boats.find(el => el[`${resource}`] == id)
}

const addResource = (resource) => {
  if(!getResource('id', resource.id)){
    boats.push(resource)
    return `${resource.name} successfully added ⛵️`
  } else {
    return `${resource.name} already exists`
  }
}

const deleteResource = (resource) => {
  if(getResource('id', resource.id)) {
    boats.splice(boats.indexOf(resource), 1)
    return `${resource.name} successfully removed`
  } else {
    return undefined
  }
}

export { getAll, getResource, addResource, deleteResource }