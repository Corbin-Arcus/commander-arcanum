import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as cardActions from '../../store/card'
import { NavLink, useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CreateCardPage({currentCard, setCurrentCard}) {
    const history = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    const card = useSelector(state => state.card)
    const [cardName, setCardName] = useState('')
    const [errors, setErrors] = useState([])
    // const [toggle, setToggle] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (cardName.length > 100) {
            setErrors(['Card name must be less than 100 characters'])
        }
        else {
            setErrors([])
            await dispatch(cardActions.addACard(cardName))
        }
        setCardName('')
    }

    

    return(
        <div className='create-card-page'>
            <form onSubmit={handleSubmit} className='create-card-form'>
                <ul className='create-card-errors'> 
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <h1>Search for a Card by Name</h1>
                <label>
                    Card Name
                    <input
                        type='text'
                        name='card_name'
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder='Enter card name'
                        required
                    />
                </label>
                <button type='submit'>Search</button>
            </form> 
        </div>
    )
}

export default CreateCardPage;