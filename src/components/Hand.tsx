import React from 'react'
import {TPlayCard} from '../types'
import {Card} from './Card'

type TProps = {
  playCards: TPlayCard[]
}

export const Hand: React.FC<TProps> = ({playCards}) => <>
  {playCards.map(({suit, card}, idx) => <>
    <Card key={idx} suit={suit} card={card}/>
  </>)}
</>