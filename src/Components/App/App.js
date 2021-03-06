import React, {useContext, useReducer} from 'react';
import { useEffect} from 'react';

import Table from '../Table/Table'
import Result from '../Result/Result'
import {onInput, onTopItems, loader, onBottomItems, closeModal, getStartElems, getPageElems} from '../../actions'
import './App.css';
import {ContextApp, reducer} from "../../reducer"


export default function App(){
    const {initialState} = useContext(ContextApp)
    const [state, dispatch] = useReducer(reducer, initialState)
    const {cells, text, pagesSize, totalElems} = state
    console.log(cells)

    useEffect(() => {
      //getStartElems()
      fetch('http://localhost:3001/list/?page=1&size=4', {credentians: "include"})
        .then((response) => response.json())
        .then((res) => dispatch(loader(res)))
    }, [])
    const onSendToServer = (p) => {
        //getPageElems(p)
        fetch(`http://localhost:3001/list/?page=${p}&size=4`, {credentians: "include"})
        .then((response) => response.json())
        .then((res) => dispatch(loader(res)))
      }
      const handleSubmit = (e) => {
        e.preventDefault()
      }
      const isOnInput = (e) => {
        dispatch(onInput(e.target.value))
      }
      const isCloseModal = () => {
        dispatch(closeModal())
      }
      const isOnTopItems = () => {
        dispatch(onTopItems())
      }
      const isOnBottomItems = () => {
        dispatch(onBottomItems())
      }
  
    const table = cells.map(cell =>{
      return (<Table
        key={cell.id} 
        cell={cell}
      />)
    })
    const result = cells.filter(value => value.city.toLowerCase() === text || value.date.toLowerCase() === text)
      .map(item =>{
      return (<Result
        key={item.id} 
        item={item}
        />
      )
    })
    let totalPages = Math.ceil(totalElems / pagesSize)  
      let pages = []  
      for (let i=1; i<=totalPages; i++){  
        pages.push(i)
      }
    return (
    <div className="wrapper">
      <div className="center">
        <form onSubmit={handleSubmit}>
        <input  type="text" placeholder="date city"
          onChange={isOnInput}
        />
        <button type="reset"
          onClick={isCloseModal}
        >&times;</button>
      </form>
      <div className = "result">
          {result}
      </div>
      <table border="1px">
      <caption><h3>Departures</h3></caption>
        <tr>
          <td width="100">Date
          <i className="icon fas fa-chevron-left"
              onClick={isOnBottomItems}
            ></i>
            <i className="icon fas fa-chevron-right"
              onClick={isOnTopItems}
            ></i>
          </td>
          <td width="100">City
            <i className="icon fas fa-chevron-left"
              onClick={isOnBottomItems}
            ></i>
            <i className="icon fas fa-chevron-right"
              onClick={isOnTopItems}
            ></i>
          </td>
          <td width="100">Gate</td>
          <td width="100">Distance</td>
        </tr>
      </table>
      {table}
      <div className="wrap_page">
        <div className="pages">
          {pages.map(p =>{   
            return <button className="this.props.currentPage === p" key={p}
              onClick={()=>onSendToServer(p)}
            >{p}</button >
          })}
        </div>
      </div>
    </div>
  </div>
  );
}


