import React from 'react';

const SpellCard = ({ spell }) => {
    return (
    <div className='spell'>
            <p className='spell-title'>{spell.title}</p>
            <p className='spell-level'>{spell.level}</p>
            <p className='spell-school'>{spell.school}</p>
            <p><strong>Время накладывания: </strong>{spell.castingTime}</p>
            <p><strong>Дистанция: </strong>{spell.range}</p>
            <p><strong>Компоненты: </strong>{spell.components}</p>
            <p><strong>Длительность: </strong>{spell.duration}</p>
            {/* <p><strong>Классы: </strong>
                <ul className='spell-list'>
                    {
                        spell.classes.map((cl) => (
                            <li>{cl}</li>
                        ))
                    }
                </ul>               
            </p>
            {
                spell.archetypes?.length > 0
                ? (
                    <p><strong>Архетипы: </strong>
                        <ul className='spell-list'>
                        {
                            spell.archetypes.map((arc) => (
                                <li>{arc}</li>
                            ))
                        }
                        </ul>               
                    </p>
                ) : (
                    <p></p>
                )
            }
             */}
            <p className='spell-description'>{spell.desc}</p>
            <a className='spell-link' href={spell.link} target='blank'>DnD.su <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
    );
}

export default SpellCard;
