import React from 'react';
import {connect} from 'react-redux';
import Table from '../Table/Table'
import Result from '../Result/Result'
import {onInput, onTopItems, onBottomItems, getStartElems, closeModal, getPageElems} from '../../actions'
import './App.css';


class App extends React.Component {
  
  componentDidMount(){ 
    this.props.getStartElems()
  }
  onSendToServer = (p) => {
    this.props.getPageElems(p)
  }
  handleSubmit = (e) => {
    e.preventDefault()
  }
  onInput = (e) => {
    this.props.onInput(e.target.value)
  }
  closeModal = () => {
    this.props.closeModal()
  }
  onTopItems = () => {
    this.props.onTopItems()
  }
  onBottomItems = () => {
    this.props.onBottomItems()
  }

  render(){
    const {cells, text, pagesSize, totalElems} = this.props
    console.log(cells)
    console.log(text)
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
        <form onSubmit={this.handleSubmit}>
        <input  type="text" placeholder="date city"
          onChange={this.onInput}
        />
        <button type="reset"
          onClick={this.closeModal}
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
              onClick={this.onBottomItems}
            ></i>
            <i className="icon fas fa-chevron-right"
              onClick={this.onTopItems}
            ></i>
          </td>
          <td width="100">City
            <i className="icon fas fa-chevron-left"
              onClick={this.onBottomItems}
            ></i>
            <i className="icon fas fa-chevron-right"
              onClick={this.onTopItems}
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
              onClick={()=>this.onSendToServer(p)}
            >{p}</button >
          })}
        </div>
      </div>
    </div>
  </div>
  
     
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cells: state.cells,
    text: state.text,
    totalElems: state.totalElems,
    pagesSize: state.pagesSize
  }
}
const mapDispatchToProps = {
  getStartElems,
  getPageElems,
  onInput,
  onBottomItems, 
  onTopItems,
  closeModal
}
export default connect( mapStateToProps, mapDispatchToProps)(App)
