function helloWorld() {
    console.log('Hello World!')
}

function anotherFunction() {
    let a
    const array = [1, 2, 3, 4, 5]
    for (let index = 0; index < array.length; index += 1) {
        const element = array[index]
        console.log(element)
    }
}

helloWorld()
anotherFunction()
