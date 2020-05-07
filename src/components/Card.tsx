import React from 'react'
import {TCard, TSuit} from '../types'

type TProps = {
  suit: TSuit
  card: TCard
}

export const Card: React.FC<TProps> = ({suit, card}) => <>
  <img src={`http://h3h.net/images/cards/${suit}_${card}.svg`} alt={'card'}/>
</>