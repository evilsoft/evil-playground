const { expect } = require('chai')

describe('Smoke Test', () => {
  it('Reports true for true', () => {
    expect(true).to.be.true
  })

  it('Reports false for false', () => {
    expect(false).to.be.false
  })
})
