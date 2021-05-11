import {serverDBL} from './serverDBL'
const getStartElems = () =>{
    return (dispatch) =>{
        serverDBL.getStartItems()  
        .then((res) => dispatch(loader(res)))  
    }
}
const getPageElems = (currentPage) =>{
    return (dispatch) =>{
        serverDBL.getPageItems(currentPage)  
        .then((res) => dispatch(loader(res)))  
    }
}
const loader = (data) => {
    return {
        type: 'LOADER',
        payload: data 
    } 
}
const onInput = (data) => {
    return {
        type: 'GET_TEXT',
        payload: data 
    } 
}

const closeModal = () => {
    return {
        type: 'CLOSE_MODAL'
    } 
}
const onBottomItems = () => {
    return {
        type: 'ON_BOTTOM_ITEMS',
    } 
}
const onTopItems = () => {
    return {
        type: 'ON_TOP_ITEMS',
    } 
}
const changePage = (data) => {
    return {
        type: 'CHANGE_PAGE',
        payload: data
    } 
}

export {
    getStartElems,
    getPageElems,
    onInput,
    onBottomItems,
    onTopItems,
    loader,
    closeModal,
    changePage,
}
