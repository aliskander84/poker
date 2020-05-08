import React from 'react'

type props = {
  click: () => void
}

export const Button: React.FC<props> = ({click}) => (
  <div className={'buttons'}>
    <button onClick={click}>Play Again</button>
  </div>
)