import React from 'react';

class Table extends React.Component {
    render(){
        const {date, city, gate, distance} = this.props.cell
        return(
        <table border="1px" cols="5">
            <tr>
                <td width="100"
                    >{date}
                </td>
                <td width="100"
                    >{city}</td>
                <td width="100"
                    >{gate}</td>
                <td width="100"
                    >{distance}</td>
            </tr>
      </table>
        )
    }
}

export default Table