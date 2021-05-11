export const serverDBL = {
    getStartItems () {
    return fetch('/list/?page=1&size=4')
        .then((response) => {
            return response.json()
        })
    },
    getPageItems (currentPage) {
        return fetch(`/list/?page=${currentPage}&size=4`)
            .then((response) => {
                return response.json()
            })
        }
}
