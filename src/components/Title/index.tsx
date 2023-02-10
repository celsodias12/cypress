import React from 'react'

type TitleProps = {
  children: string
}

export function Title({ children }: TitleProps) {
  return <h1>{children}</h1>
}
