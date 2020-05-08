export type suit = 'spade' | 'heart' | 'diamond' | 'club'

export type card = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'

export type playCard = {
  suit: suit
  card: card
  pair?: 0 | 1
}