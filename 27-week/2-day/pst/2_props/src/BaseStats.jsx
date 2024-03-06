// export default function BaseStats(props) {
//     const { stats } = props;
//     const { hp, attack, defense, speed } = stats;
import './BaseStats.css';

export default function BaseStats({
    clicker,
    stats: { hp, attack, defense, speed },
}) {
    return (
        <div className="base-stats">
            <h1>BaseStats</h1>
            <button onClick={clicker} className="sp-stats">
                Check Special Stats
            </button>

            {/* <button
                onClick={() => {
                    console.log('3 + 5');
                    clicker('special values');
                }}
                className="sp-stats"
            >
                Check Special Stats
            </button> */}

            <table>
                <tbody>
                    <tr>
                        <td>Hit Points</td>
                        <td>{hp}</td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td>{attack}</td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td>{defense}</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>{speed}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
