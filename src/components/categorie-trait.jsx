import React from 'react'


export default function CategorieTrait(props) {
    return (
             
                    
            
                        <tr >
                          <td>{props.datadata.nom}</td>
                          <td>{props.datadata.description}</td>
                          <td>
                            <button type="button" className="btn btn-outline-danger p-2 "><i className="fas fa-trash-alt" /></button>
                            <button type="button" className="btn btn-outline-warning p-2 "><i className="fas fa-edit" />
                            </button>
                          </td>
                        </tr>
                       
                       
                       
                     
                  
    )
}
