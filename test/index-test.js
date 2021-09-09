describe('#findAllPermutations', function() {
	it('returns all permutations of a string of length 1', function(){
		let str = 'a'
		expect(findAllPermutations(str)).toEqual(['a'])
	})

	it('returns all permutations of a string of length 3', function(){
		let str = 'abc'
		let returnArray = findAllPermutations(str)
		expect(returnArray.length).toEqual(6)
		expect(returnArray).toContain('abc')
		expect(returnArray).toContain('acb')
		expect(returnArray).toContain('bac')
		expect(returnArray).toContain('bca')
		expect(returnArray).toContain('cab')
		expect(returnArray).toContain('cba')
	})

	it('returns all permutations of a string of length 4', function(){
		let str = 'abcd'
		let returnArray = findAllPermutations(str)
		expect(returnArray.length).toEqual(24)
		expect(returnArray).toContain('abcd')
		expect(returnArray).toContain('abdc')
		expect(returnArray).toContain('adbc')
		expect(returnArray).toContain('adcb')
		expect(returnArray).toContain('acbd')

		expect(returnArray).toContain('bacd')
		expect(returnArray).toContain('bcad')
		expect(returnArray).toContain('cabd')
		expect(returnArray).toContain('cbad')
	})

});
