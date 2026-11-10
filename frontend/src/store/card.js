const ADD_CARD = 'card/ADD_CARD';
const GET_CARDS = 'card/GET_CARDS';

const addCard = (card) => {
    return {
        type: ADD_CARD,
        payload: card
    }
}

// const getCard = (cards) => {
//     return {
//         type: GET_CARDS,
//         payload: cards
//     }
// }

export const addACard = (cardName) => async (dispatch) => {
    const card = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`)
    if (!card.ok) {
        window.alert('Card not found. Please check your spelling and try again.')
        return
    }

    const data = await card.json()

    const card_faces = data.card_faces ? data.card_faces : [data]
    const name = data.name
    const release_date = data.released_at
    const image_url = card.image_url
    const mana_cost = data.mana_cost
    const cmc = data.cmc
    const type_line = data.type_line
    const oracle_text = data.oracle_text
    const power = data.power
    const toughness = data.toughness
    const loyalty = data.loyalty
    const colors = data.colors
    const color_identity = data.color_identity
    const keywords = data.keywords
    const legalities = data.legalities
    const games = data.games
    const reserved = data.reserved
    const game_changes = data.game_challenges

    const res = await fetch('/api/cards/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            card_faces,
            name,
            release_date,
            image_url,
            mana_cost,
            cmc,
            type_line,
            oracle_text,
            power,
            toughness,
            loyalty,
            colors,
            color_identity,
            keywords,
            legalities,
            games,
            reserved,
            game_changes
        })
    })

    if (res.ok) {
        const data = await res.json()
        dispatch(addCard(data))
        return data
    } else if (res.status < 500) {
        const data = await res.json()
        if (data.errors) {
            return data.errors
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

const cardReducer = (state = {}, action) => {
    let newState;
    switch(action.type) {
        case ADD_CARD:
            newState = {...state, ...action.payload}
            return newState
        default:
            return state
    }
}

export default cardReducer;