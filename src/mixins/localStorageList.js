export default {
  methods: {
    deleteElementFromStorage (array, index) {
      let parsedArray = JSON.parse(localStorage.getItem(array) || '[]')
      parsedArray.splice(index, 1)
      localStorage.setItem(array, parsedArray)
    },
    addElementToStorage (array, element) {
      let parsedArray = JSON.parse(localStorage.getItem(array) || '[]')
      parsedArray.push(element)
      localStorage.setItem(array, parsedArray)
    }
  }
}