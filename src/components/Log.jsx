export default function Log({ turns }) {
    return (<div id="log">
            <ol>
                {turns.map((turn, index) => {
                    const { square, player } = turn;
                    const { row, col } = square;
                    return (
                        <li key={`board-${row}_${col}`}>{player} selected {row + 1}, {col + 1}.</li>
                    )
                })}
            </ol>
        </div>
    )
}