import React from 'react'
import "./table.css"

function TableHead({rest}) {
  return (
    <div>
      <h4>Dash Board</h4>
      <table className='table'>
      <thead>
         <tr >
        {
        rest.tableHeadData.map((d,i)=>(
           
            <th key={i} className='td'>{d}</th>
        
        ))}
        </tr>
        </thead>
        <tbody>
        {
                rest.tableBodyData.map((d,i)=>(
                    <tr key={i} >
                        <td className='td'>{d.name}</td>
                        <td className='td'>{d.email}</td>
                        <td className='td'>{d.age}</td>
                        <td className='td'>{d.branch}</td>
                        <td className='td'>{d.gender}</td>
                        </tr>

                ))
            }
            </tbody>
            </table>
    </div>
  )
}

export default TableHead