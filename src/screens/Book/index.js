import React from 'react'

import { useLocation } from 'react-router-dom'

export function BookPage() {

  const params = useLocation();

  console.log(params)

  return (
   <h1></h1>
  )
}
