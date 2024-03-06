import bulbaPic from './images/bulbasaur.jpg';

export default function Showcase() {
    const favPokemon = 'Bulbasaur';
    const pokeCharacteristics = {
        type: 'Grass',
        move: 'Vine Whip',
    };

    return (
        <div>
            {/* <h1>{favPokemon}&apos;s Showcase Component</h1> */}
            <h1>{`${favPokemon}'s Showcase Component`}</h1>
            <img
                src={bulbaPic}
                alt="Cute photo of our non fav pokemon Bulbasaur"
            />
            <h2>
                {"Bulbasaur's"} type is{' '}
                <span style={{ backgroundColor: 'green', color: 'white' }}>
                    {pokeCharacteristics.type}
                </span>{' '}
                and one of their moves is{' '}
                <span style={{ backgroundColor: 'white', color: 'green' }}>
                    {pokeCharacteristics.move}
                </span>
                .
            </h2>
        </div>
    );
}

//! --------------------------------------------------------------------
//*                        Non-default Export
//! --------------------------------------------------------------------

// export const MyShowcase = function () {
//     return <div>My Showcase</div>;
// };

//! --------------------------------------------------------------------
//*                   a/A / Common Default Export
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
//*                         Not recommended don't do this!!!
//! --------------------------------------------------------------------

// export default () => {
//     return <div>My Arrow Showcase</div>;
// };
