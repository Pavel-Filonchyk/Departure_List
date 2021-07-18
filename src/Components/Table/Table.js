import React from 'react';

export default function Table ({cell}) {
    const {date, city, gate, distance} = cell
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
