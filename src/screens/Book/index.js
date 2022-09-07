import React from 'react'

export function BookPage({id}) {
  console.log(JSON.stringify(id))

  return (
    <div>{id}</div>
  )
}
