import css from './feedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<ul className={css.optionsList}>
                {options.map(name => (
                    <li key={name} className={css.optionsItem}>
                        <button
                            className={css.optionsButton}
                            type="button"
                            onClick={() => onLeaveFeedback(name)}
                        >{name}
                        </button>
                    </li>
        ))}
    </ul>);
};

export default FeedbackOptions;