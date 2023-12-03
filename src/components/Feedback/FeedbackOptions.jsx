import css from "./Feedback.module.css"

export default function FeedbackOptions({ options, action }) {
    const arr = Object.keys(options);

    return (
<ul className={css.feedbackOptions}>
    {arr.map(option => (
        <li key={option}>
        <button className={css.btn} type="button" onClick={() => action(option)}>{option}</button>
        </li>
      ))}
</ul>
    )
}