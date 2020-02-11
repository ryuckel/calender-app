import { createCalendar } from '../../services/calendar';
import { connect } from 'react-redux';
import CalendarBoard from './presentation';

const mapStateToProps = state => ({ calendar: state.calendar });

const mergeProps = (stateProps, dispatchProps) => ({
	...stateProps,
	...dispatchProps,
	month: stateProps.calendar,
	calendar: createCalendar(stateProps.calendar)
});

export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);
