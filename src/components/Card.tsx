import React from 'react'
import {card, suit} from '../types'

type props = {
  suit: suit
  card: card
  pair?: 0 | 1
}

export const Card: React.FC<props> = ({suit, card, pair}) => (
  <img
    src={`http://h3h.net/images/cards/${suit}_${card}.svg`}
    alt={'card'}
    className={pair !== undefined ? `card pair${pair}` : 'card'}
  />
)