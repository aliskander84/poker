import React, {useState} from 'react'
import {Button} from './components/Button'
import {Hand} from './components/Hand'
import {playCard} from './types'
import {suits as suitsConst, cards as cardsConst} from './constants'

export const App: React.FC = () => {
  const [hand1, setHand1] = useState(hands().hand1)
  const [hand2, setHand2] = useState(hands().hand2)

  function replay() {
    const h = hands()
    setHand1(h.hand1)
    setHand2(h.hand2)
  }

  function hands(): {hand1: playCard[], hand2: playCard[]} {
    const cards = deal()
    const hand1 = cards.slice(0,5)
    const hand2 = cards.slice(5,10)
    return {hand1, hand2}
  }
  
  function deal(): playCard[] {
    let cards = []
    while (cards.length < 10) {
      const card = playCard()
      const isDuplicated = cards.filter(c => match(c, card)).length !== 0
      if (!isDuplicated) {
        cards.push(card)
      }
    }
    return cards
  }

  function match(playCard1: playCard, playCard2: playCard) {
    const isSameSuit = playCard1.suit === playCard2.suit
    const isSameCard = playCard1.card === playCard2.card
    return isSameSuit && isSameCard
  }

  function playCard(): playCard {
    const suit = suitsConst[random(suitsConst.length)]
    const card = cardsConst[random(cardsConst.length)]
    return {suit, card}
  }

  function random(limitExcluded: number): number {
    let rand = Math.floor(Math.random() * 100)
    while (rand >= limitExcluded) {
      rand = Math.floor(Math.random() * 100)
    }
    return rand
  }

  return (<>
    <Hand playCards={hand1} player={1} winning={true}/>
    <Hand playCards={hand2} player={2}/>
    <Button click={replay}/>
  </>)
}