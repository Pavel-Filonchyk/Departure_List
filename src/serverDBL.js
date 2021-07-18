export const serverDBL = {
    getStartItems () {
    return fetch('http://localhost:3001/list/?page=1&size=4', {credentians: "include"})
        .then((response) => {
            return response.json()
        })
    },
    getPageItems (p) {
        return fetch(`http://localhost:3001/list/?page=${p}&size=4`, {credentians: "include"})
            .then((response) => {
                return response.json()
            })
        }
}
