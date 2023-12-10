 export default function Statistics ({good, neutral, bad, total, persent}) {
    return (
        <div>
            {!total ? "There is no feedback" : <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                {total ? <li>Total: {total}</li> : false}
                {total ? <li>Positive feedback: {persent}%</li> : false}
            </ul>}
            </div>
    )
}