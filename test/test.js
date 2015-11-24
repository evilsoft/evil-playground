import chai from 'chai'

const { expect } = chai

describe('Smoke Test', function() {
  it('Reports true for true', function() {
    expect(true).to.be.true
  })

  it('Reports false for false', function() {
    expect(false).to.be.false
  })
})
