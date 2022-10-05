import React from 'react'
import {useParams}  from 'react-router-dom'


export default function FicheLogement() {

  const params = useParams() 
  console.log(params);

  return (
    <div>
      <h1>voici la fiche Logement</h1>
    </div>
  )
}
