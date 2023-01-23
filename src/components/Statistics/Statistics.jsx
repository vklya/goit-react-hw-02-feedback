import css from './statistics.module.scss';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <ul className={css.statisticsList}>
        <li className={css.statisticItem}>Good: {good}</li>
        <li className={css.statisticItem}>Neutral: {neutral}</li>
        <li className={css.statisticItem}>Bad: {bad}</li>
        <li className={css.statisticItem}>Total: {total}</li>
        <li className={css.statisticItem}>Positive feedback: {positivePercentage}%
        </li>
    </ul>
);


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;