import React, {useState} from 'react'
import {Button} from './components/Button'
import {Hand} from './components/Hand'
import {playCard} from './types'
import {suits as suitsConst, cards as cardsConst} from './constants'

export const App: React.FC = () => {
  const [hand1, setHand1] = useState<playCard[]>(hand())
  const [hand2, setHand2] = useState<playCard[]>(hand())

  function random(limit: number): number {
    let rand = Math.floor(Math.random() * 100)
    while (rand > limit) {
      rand = Math.floor(Math.random() * 100)
    }
    return rand
  }

  function hand(): playCard[] {
    let cards: playCard[] = []
    while (cards.length < 5) {
      cards.push({
        suit: suitsConst[random(3)],
        card: cardsConst[random(12)]
      })
    }
    return cards
  }

  function hands(): void {
    setHand1(hand())
    setHand2(hand())
  }

  return (<>
    <Hand playCards={hand1} player={1} winning={true}/>
    <Hand playCards={hand2} player={2}/>
    <Button click={hands}/>
  </>)
}