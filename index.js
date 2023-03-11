const array = [1, 2, [1.1, 1.2, 1.3], 3]

function generateList(array) {
    const list = document.createElement('ul')
    for (let i = 0; i < array.length; i++) {
        const item = document.createElement('li')
    if (Array.isArray(array[i])) {
      item.appendChild(generateList(array[i]))
    } else {
      item.textContent = array[i]
    }
    list.appendChild(item)
  }
    document.body.appendChild(list)
    return list
}

generateList(array)
