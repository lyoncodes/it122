import { expect } from "chai";
import { getResource, addResource, deleteResource } from '../data.js';

const case1 = {
  name: 'parsifal',
  length: 44,
  type: 'sailing-yacht',
  id: 1
}

const case2 = {
  name: 'lo and behold',
  length: 30,
  type: 'sailing-yacht',
  id: 7
}

describe("Boat Module", () => {
  // test hooks
  // beforeEach(() => {
  //   console.log('connect to DB')
  // })

  it('getResource by property returns the correct boat', () => {
    let res = getResource("name", case1.name)
    let res2 = getResource("id", case1.id)
    expect(res).to.deep.equal(case1)
    expect(res2).to.deep.equal(case1)
  })
  it('getResource returns undefined if resource does not exist', () => {
    let res = getResource("name", null)
    expect(res).to.deep.equal(undefined)
  })
  it('addResource successfully adds resource', () => {
    let res = addResource(case2)
    expect(res).to.equal(`${case2.name} successfully added ⛵️`)
  })
  it('addResource rejects duplicate entries', () => {
    let res = addResource(case1)
    expect(res).to.equal(`${case1.name} already exists`)
  })
  it('deleteResource successfully removes element', () => {
    let res = deleteResource(case1)
    expect(res).to.equal(`${case1.name} successfully removed`)
  })
  it('deleteResource for non existant resource returns undefined', () => {
    let res = deleteResource(case2)
    expect(res).to.equal(undefined)
  })
});

export { addCase }