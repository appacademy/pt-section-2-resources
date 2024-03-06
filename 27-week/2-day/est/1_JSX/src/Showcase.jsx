import bulbaPic from './images/bulbasaur.jpg';

export default function Showcase() {
    const favPokemon = 'Bulbasaur';

    const pokeCharacteristics = {
        type: 'Grass',
        move: 'Vine Whip',
    };

    // const mySentence =
    //     pokeCharacteristics.move + ' ' + pokeCharacteristics.type;

    return (
        <div>
            <h1>{`${favPokemon}'s Showcase Component`}</h1>
            <img src={bulbaPic} alt="Cute picture of bulbasaur" />
            <h2>
                {"Bulbasaur's"} type is{' '}
                <span style={{ backgroundColor: 'green', color: 'white' }}>
                    {pokeCharacteristics.type}
                </span>{' '}
                and one of their moves is
                <span
                    style={{ backgroundColor: 'white', color: 'green' }}
                >{` ${pokeCharacteristics.move}`}</span>
                .
            </h2>
        </div>
    );
}

//! --------------------------------------------------------------------
//*                            a/A Common Standard
//! --------------------------------------------------------------------

// function Showcase() {
//     return (
//         <div>
//             <h1>Showcase Component</h1>
//         </div>
//     );
// }

// export default Showcase;

//! --------------------------------------------------------------------
//*                          Non default export
//! --------------------------------------------------------------------

export const MyShowcase = function () {
    return <div>My Non-Default Exported Showcase</div>;
};

//! --------------------------------------------------------------------
//*                         Default export of arrow (anon)
//! --------------------------------------------------------------------

//! Do NOT write components like this!
// export default () => {
//     return <div> </div>;
// };
