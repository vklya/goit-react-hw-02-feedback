import css from './notification.module.scss';
import PropTypes from 'prop-types';

const Notification = ({ text }) => (<p className={css.notif}>{text}</p>);
    


Notification.propTypes = {
    text: PropTypes.string,
};

export default Notification;