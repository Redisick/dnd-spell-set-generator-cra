import React from 'react';
import { useState } from 'react';
import './App.css';
import SpellCard from './SpellCard';


const API_URL = 'https://dnd-api.cyclic.app';

const CL_AND_ARC = [
    {
        clId: '12',
        clName: 'Бард',
        archetypes: [
            {
                num: '0',
                name: 'Архетип'
            },
            {
                num: '107',
                name: 'Коллегия духов'
            }        
        ]
    },
    {
        clId: '13',
        clName: 'Жрец',
        archetypes: [
            {
                num: '0',
                name: 'Архетип'
            },
            {
                num: '146',
                name: 'Домен бури'
            },
            {
                num: '147',
                name: 'Домен войны'
            },
            {
                num: '148',
                name: 'Домен жизни'
            },
            {
                num: '149',
                name: 'Домен знаний'
            },
            {
                num: '150',
                name: 'Домен обмана'
            },
            {
                num: '151',
                name: 'Домен природы'
            },
            {
                num: '152',
                name: 'Домен света'
            },
            {
                num: '153',
                name: 'Домен смерти'
            },
            {
                num: '154',
                name: 'Домен магии'
            },
            {
                num: '155',
                name: 'Домен кузни'
            },
            {
                num: '156',
                name: 'Домен упокоения'
            },
            {
                num: '157',
                name: 'Домен мира'
            },
            {
                num: '158',
                name: 'Домен порядка'
            },
            {
                num: '159',
                name: 'Домен сумерек'
            }        
        ]
    },
    {
        clId: '16',
        clName: 'Паладин',
        archetypes: [
            {
                num: '0',
                name: 'Архетип'
            },
            {
                num: '183',
                name: 'Клятва преданности'
            }
            ,
            {
                num: '184',
                name: 'Клятва древних'
            },
            {
                num: '185',
                name: 'Клятва мести'
            },
            {
                num: '186',
                name: 'Клятвопреступник'
            },
            {
                num: '187',
                name: 'Клятва короны'
            },
            {
                num: '188',
                name: 'Клятва искупления'
            },
            {
                num: '189',
                name: 'Клятва покорения'
            },
            {
                num: '190',
                name: 'Клятва славы'
            },
            {
                num: '191',
                name: 'Клятва смотрителей'
            }       
        ]
    },
    {
        clId: '17',
        clName: 'Следопыт',
        archetypes: [
            {
                num: '0',
                name: 'Архетип'
            },
            {
                num: '203',
                name: 'Странник горизонта'
            } 
            ,
            {
                num: '204',
                name: 'Сумрачный охотник'
            },
            {
                num: '205',
                name: 'Убийца монстров'
            },
            {
                num: '206',
                name: 'Странник фей'
            },
            {
                num: '207',
                name: 'Хранитель роя'
            },
            {
                num: '208',
                name: 'Наездник на дрейке'
            }       
        ]
    },
    {
        clId: '19',
        clName: 'Чародей',
        archetypes: [
            {
                num: '0',
                name: 'Архетип'
            },
            {
                num: '211',
                name: 'Божественная душа'
            },
            {
                num: '212',
                name: 'Теневая магия'
            },
            {
                num: '214',
                name: 'Аберрантный разум'
            },
            {
                num: '215',
                name: 'Заводная душа'
            }        
        ]
    },
    {
        clId: '20',
        clName: 'Колдун',
        archetypes: [
            {
                num: '0',
                name: 'Архетип'
            },
            {
                num: '164',
                name: 'Архифея'
            },
            {
                num: '165',
                name: 'Исчадие'
            },
            {
                num: '166',
                name: 'Великий Древний'
            },
            {
                num: '167',
                name: 'Бессмертный'
            },
            {
                num: '168',
                name: 'Ведьмовской клинок'
            },
            {
                num: '169',
                name: 'Небожитель'
            },
            {
                num: '170',
                name: 'Бездонный'
            },
            {
                num: '171',
                name: 'Гений'
            },
            {
                num: '172',
                name: 'Нежить'
            }        
        ]
    },
    {
        clId: '21',
        clName: 'Волшебник',
        archetypes: [
            {
                num: '0',
                name: 'Архетип'
            },
            {
                num: '135',
                name: 'Магия хронургии'
            },
            {
                num: '136',
                name: 'Магия гравитургии'
            }         
        ]
    },
    {
        clId: '22',
        clName: 'Друид',
        archetypes: [
            {
                num: '0',
                name: 'Архетип'
            },
            {
                num: '139',
                name: 'Круг земли'
            },
            {
                num: '143',
                name: 'Круг дикого огня'
            },
            {
                num: '144',
                name: 'Круг звёзд'
            },
            {
                num: '145',
                name: 'Круг спор'
            }         
        ]
    },
    {
        clId: '23',
        clName: 'Изобретатель',
        archetypes: [
            {
                num: '0',
                name: 'Архетип'
            },
            {
                num: '160',
                name: 'Алхимик'
            },
            {
                num: '161',
                name: 'Артиллерист'
            },
            {
                num: '162',
                name: 'Боевой кузнец'
            },
            {
                num: '163',
                name: 'Бронник'
            }         
        ]
    },
    {
        clId: '01',
        clName: 'Монах',
        archetypes: [
            {
                num: '0',
                name: 'Архетип'
            },
            {
                num: '174',
                name: 'Путь тени'
            },
            {
                num: '175',
                name: 'Путь четырёх стихий'
            },
            {
                num: '179',
                name: 'Путь солнечной души'
            }       
        ]
    },
    {
        clId: '02',
        clName: 'Плут',
        archetypes: [
            {
                num: '0',
                name: 'Архетип'
            },
            {
                num: '194',
                name: 'Мистический ловкач'
            }  
        ]
    }
];

const SPELL_LABELS = [
    'Заговор',
    '1 ур.',
    '2 ур.',
    '3 ур.',
    '4 ур.',
    '5 ур.',
    '6 ур.',
    '7 ур.',
    '8 ур.',
    '9 ур.'
];

const LIL_GUY = '¯\\_(ツ)_/¯';

const App = () => {

    const [spells, setSpells] = useState([]);

    const [searchClass, setSearchClass] = useState('12'); // classId
    const [searchArchetype, setSearchArchetype] = useState('0'); // archetypeId

    const [searchData, setSearchData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // заговоры, заклинания ур 1-9     

    const [noSpellSign, setNoSpellSign] = useState(LIL_GUY);

    const searchSpellsByClassAndLevel = async(cl, arc, arr) => { 
        setSpells([]);     
        const spellSet = [];
        let classAndArchetype = '';

        if (cl.substring(0,1) !== '0'){//class is specified
            classAndArchetype = 'class' + cl;
            if (arc !== '0'){
                classAndArchetype += '/archetype' + arc; //both
            }
        }
        else {//only archetype
            classAndArchetype += 'archetype' + arc;
        }
        
        for (let i = 0; i < arr.length; i++){ // <arr.length
            if (arr[i] > 0){
                const resultsOfSearch = [];
                //going through pages
                let p = 0;
                let data = 0;
                let response = 0;

                do {
                    p++;
                    response = await fetch(`${API_URL}/spells/${classAndArchetype}/level${i}/${p}`);
                    data = await response.json();  
                    if  (data.length > 0){
                        resultsOfSearch.push(...data);
                    }  

                }while (data.length === 25) //25 spells per page on dnd.su

                if (resultsOfSearch.length > 0){
                    let amount = 0;
                    const chosen = [];
                    if (arr[i] <= resultsOfSearch.length){
                        amount = arr[i];                          
                    }
                    else {
                        amount = resultsOfSearch.length;  
                    }

                    while (amount > 0){
                        let rng = Math.floor(Math.random() * resultsOfSearch.length);  
                        //check if already been used                      
                        let flagNew = false;
                        while (!flagNew){
                            if (chosen.includes(rng)){
                                rng = Math.floor(Math.random() * resultsOfSearch.length); 
                            }
                            if (!chosen.includes(rng)){
                                flagNew = true;
                            }
                        }
                        chosen.push(rng);
                        spellSet.push(resultsOfSearch[rng]); //choose random spells from results
                        amount--;
                    }                                      
                }        
            }
        }
        if (spellSet.length === 0) {
            setNoSpellSign(LIL_GUY);
        }
        setSpells(spellSet);
        
    }

    function handleIncrementClick(index) {
        const nextSearchData = searchData.map((s, i) => {
          if (i === index && s+1 <= 30) {
            return s + 1;
          } else {
            return s;
          }
        });
        setSearchData(nextSearchData);
    }

    function handleDecrementClick(index) {
        const nextSearchData = searchData.map((s, i) => {
          if (i === index && s-1 >= 0) {
            return s - 1;
          } else {
            return s;
          }
        });
        setSearchData(nextSearchData);
    }

    function hiddenOrNot(clId) {
        if (clId === searchClass){
            return '';
        }else {
            return 'hidden';
        }
    }

    return (
        <div className='app'> 
            <div className='top-part'>         
            <h1>                               
                Удачные заклинания?            
            </h1>
            <h3>Когда не успеваешь подготовиться к ваншоту</h3>                                     
            <h2><i class="fa-solid fa-wand-magic-sparkles"></i></h2>

            <div className='search'>
                <div className='select'>
                    <select 
                        value={searchClass}
                        onChange = {(e) => {
                            setSearchClass(e.target.value);
                            setSearchArchetype('0')
                        }}
                        >
                        {
                            CL_AND_ARC.map((cl) => (
                                <option id={CL_AND_ARC.indexOf(cl)} value={cl.clId}>{cl.clName}</option>
                            ))
                        }                                            
                    </select>
                </div>
                
                <div className='select'>
                {                     
                    CL_AND_ARC.map((cl) => (                    
                        <select id = {cl.clId}                     
                            className={hiddenOrNot(cl.clId)}
                            value={searchArchetype}
                            onChange = {(e) => setSearchArchetype(e.target.value)}
                        > 
                                                                                               
                        {                           
                            cl.archetypes.map((arc) => (
                                <option value={arc.num}>{arc.name}</option>
                            ))                         
                        } 
                                                                                  
                        </select>                                           
                    ))
                }
                </div>               
              
                <ul className='ul-spell-counter'>
                    {
                        searchData.map((counter, i) => (
                        <li className='li-spell-counter' key={i}>                            
                            <button className='inc-button' onClick={() => {
                                handleIncrementClick(i);
                            }}>+</button>
                            <p className='counter'>{counter}</p>   
                            <button className='dec-button' onClick={() => {
                                handleDecrementClick(i);
                            }}>-</button>     
                            <p className='spell-counter-label'>{SPELL_LABELS[i]}</p>                                               
                        </li>
                    ))}
                </ul>

                <button className='go-button' 
                    onClick = {() => {
                        setNoSpellSign(<i class="fa-solid fa-spinner"></i>);
                        searchSpellsByClassAndLevel(searchClass, searchArchetype, searchData);                       
                    }}
                    >
                    <i class="fa-solid fa-angles-right"></i>
                </button>
            </div>
            </div> 

            {
                spells?.length > 0
                ? (
                    <div className='container'>
                        {spells.map((spell) => (
                            <SpellCard spell={spell} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>                      
                        <h2 className='empty-sign'>{noSpellSign}</h2>
                    </div>
                )
            }
        <footer>
            <p className='desc-text'>Генератор набора заклинаний D&D</p> 
            <p className='additoinal-text'>
                Все заклинания взяты с <a href='https://dnd.su/' target='blank'>DnD.su</a>
            </p> 
            <p className='made-by-text'>Made by Redisick</p>
        </footer>
        </div>
    );
};

export default App;