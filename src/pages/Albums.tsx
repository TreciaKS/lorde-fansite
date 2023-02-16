import React, { ReactNode } from 'react'

type AlbumsProps = {
    children: ReactNode
}

const Albums = ({children}: AlbumsProps) => {
  return (
    <div>{children}</div>
  )
}

export default Albums