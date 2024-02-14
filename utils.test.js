 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  function sum (first, second){
    return first + second;
  }

  // test('adds 1 + 2  to equal 3', () =>{
  //   expect(sum(1,2)).toBe(3)
  // })

  describe('test formatTitle', () =>{
    test('esnure that the entire set of words is returned', () =>{
      const result = formatTitle("hello world")
      expect(result).toBe('Hello World')
    }),

    test('the same number of words is returned', () =>{
      const result = formatTitle("one two three a b c")
      expect(result.split(' ').length).toBe(6)
    }),

    test('if actually uppercased', () =>{
      const result = formatTitle('word');
      expect(result.charAt(0)).toBe('W');
    }),

    test('not empty', () => {
      const result = formatTitle('x');
      expect(result.length).toBeGreaterThan(0);
    });

    test('null should throw a TypeError', () => {
      const callback = () => {
        const result = formatTitle(null);
      }
      expect(callback).toThrow(TypeError);
    });

  })

  describe('test shortenBio', () => {
    test('testData returns expected result', () => {
      const result = shortenBio(testData.bio)
      expect(result).toBe('About the Speaker: Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi...')
    })
  })

  describe('test convertLength', () => {
    test('testData return correct resuklt', () => {
      const result = convertLength(testData.length)
      expect(result.length).toBe(2)
      expect(result[0]).toBe(1)
      expect(result[1]).toBe(5)
    })
  })

  describe('test convertLength', () => {
    test('testData return correct hours', () => {
      const result = convertLength(testData.length)
 
      expect(result[0]).toBe(1)
    
    })
  })

  describe('test convertLength', () => {
    test('testData return correct minutes', () => {
      const result = convertLength(testData.length)
     
      expect(result[1]).toBe(5)
    })
  })