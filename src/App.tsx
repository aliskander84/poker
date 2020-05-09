import React, {useEffect, useState} from 'react'
import {Button} from './components/Button'
import {Hand} from './components/Hand'
import {playCard} from './types'
import {suits as suitsConst, cards as cardsConst} from './constants'

export const App: React.FC = () => {
  const [hand1, setHand1] = useState<playCard[]>([])
  const [hand2, setHand2] = useState<playCard[]>([])
  useEffect(() => {
    replay()
  }, [])

  function replay() {
    // console.log('replay')
    const h = hands()
    setHand1(h.hand1)
    setHand2(h.hand2)
  }

  function hands(): { hand1: playCard[], hand2: playCard[] } {
    const cards = deal()
    const hand1 = pair(cards.slice(0, 5))
    const hand2 = pair(cards.slice(5, 10))
    return {hand1, hand2}
  }

  function pair(hand: playCard[]): playCard[] {
    let h = hand
    let pairNum: 0 | 1 = 0
    h.forEach((playCard, index) => {
      const isPaired1 = h[index].pair !== undefined
      h.forEach((pc, i) => {
        const isSame = index === i
        const isPaired1 = h[index].pair !== undefined
        const isPaired2 = h[i].pair !== undefined
        const isPaired = isPaired1 || isPaired2
        const isPair = playCard.card === pc.card
        if (!isSame && !isPaired && isPair) {
          h[index].pair = pairNum
          h[i].pair = pairNum
          pairNum = 1
        }
      })
    })
    return h
  }

  function deal(): playCard[] {
    let cards = []
    while (cards.length < 10) {
      const card = playCard()
      const isDuplicated = cards.filter(c => matchDuplicates(c, card)).length !== 0
      if (!isDuplicated) {
        cards.push(card)
      }
    }
    return cards
  }

  function matchDuplicates(playCard1: playCard, playCard2: playCard): boolean {
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
    <Hand playCards={hand1} name={'Player 1'} winning={true}/>
    <Hand playCards={hand2} name={'Player 2'}/>
    <Button click={replay}/>
  </>)
}