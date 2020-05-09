import React from 'react'
import {playCard} from '../types'
import {Card} from './Card'

type props = {
  name: string
  playCards: playCard[]
  winning?: boolean
}

export const Hand: React.FC<props> = ({playCards, name, winning}) => (
  <div className={winning ? 'hand winning' : 'hand'}>
    <h1>{name}</h1>
    {playCards.map(({suit, card, pair}, idx) => (
      <Card
        key={idx}
        suit={suit}
        card={card}
        pair={pair}
      />
    ))}
  </div>
)