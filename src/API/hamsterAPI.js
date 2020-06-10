const API = 'http://localhost:3000/hamsters'

export const getHamsters = () => {
    fetch(API)
        .then(res => res.json)
        .then(data => {
            console.log(data)
        })
}

export const getRandomHamster = () => {
    fetch(`${API}/random`)
        .then(res => res.json)
        .then(data => {
            console.log(data)
        })
}