import React from 'react'
import {playCard} from '../types'
import {Card} from './Card'

type props = {
  player: number
  playCards: playCard[]
  winning?: boolean
}

export const Hand: React.FC<props> = ({playCards, player, winning}) => (
  <div className={winning ? 'hand winning' : 'hand'}>
    <h1>Player {player}</h1>
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