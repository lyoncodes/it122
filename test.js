import { expect } from "chai";
import { getAll, getResource } from './data.js';

const boat1 = {
  name: 'parsifal',
  length: 44,
  type: 'sailing-yacht',
  id: 1
}

describe("Boat Module", () => {
  beforeEach(() => {
    console.log('holla!')
  })
  it('getResource by name returns the correct boat', () => {
    let res = getResource("name", boat1.name)
    expect(res).to.deep.equal(boat1)
  })
  it('getResource by id returns the correct boat', () => {
    let res = getResource("id", boat1.id)
    expect(res).to.deep.equal(boat1)
  })
  it('length is a number', () => {
    expect(typeof(boat1.length)) === Number
  })
  it('Objects should be equal', () => {
    expect(boat1).to.deep.equal({
      name: 'parsifal',
      length: 44,
      type: 'sailing-yacht',
      id: 1
    })
  });
});