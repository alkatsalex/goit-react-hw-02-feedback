import css from "./Feedback.module.css"

export default function FeedbackOptions({ options, action }) {
    

    return (
<ul className={css.feedbackOptions}>
    {options.map(option => (
        <li key={option}>
        <button className={css.btn} type="button" onClick={() => action(option)}>{option}</button>
        </li>
      ))}
</ul>
    )
}