describe('romanNumerals', function() {
  it('returns \'I\' if input \'1\'', function() {
    expect(romanNumerals(1)).to.equal('I')
  });
  it('returns \'VI\' if input \'6\'', function() {
    expect(romanNumerals(6)).to.equal('VI')
  });
  it('returns \'VIII\' if input \'8\'', function() {
    expect(romanNumerals(8)).to.equal('VIII')
  });
  it('returns \'VIII\' if input \'1666\'', function() {
    expect(romanNumerals(1666)).to.equal('MDCLXVI')
  });
  it('returns \'IV\' if input \'4\'', function() {
    expect(romanNumerals(4)).to.equal('IV')
  });
  it('returns \'IX\' if input \'9\'', function() {
    expect(romanNumerals(9)).to.equal('IX')
  });

  it('returns \'CDXCIX\' if input \'499\'', function() {
    expect(romanNumerals(499)).to.equal('CDXCIX')
  });
  it('returns \'CDXCVIII\' if input \'498\'', function() {
    expect(romanNumerals(498)).to.equal('CDXCVIII')
  });
  it('returns \'XCIX\' if input \'99\'', function() {
    expect(romanNumerals(99)).to.equal('XCIX')
  });
  it('returns \'MMMCMXCIX\' if input \'3999\'', function() {
    expect(romanNumerals(3999)).to.equal('MMMCMXCIX')
  });
});
