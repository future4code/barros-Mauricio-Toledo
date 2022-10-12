//ex 3
const add = process.argv[2]
const taskList = ["jogar", "treinar"]

function tasks(add) {
    let newList = [].concat(taskList, add)

    return (newList)
};

const adiciona = tasks(add)

console.log(adiciona)