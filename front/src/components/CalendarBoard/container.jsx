import { createCalendar } from '../../services/calendar';
import { connect } from 'react-redux';
import CalendarBoard from './presentation';
import { addScheduleOpenDialog, addScheduleSetValue } from '../../redux/addSchedule/actions';

const mapStateToProps = state => ({ calendar: state.calendar });

const mapDispatchToProps = dispatch => ({
	openAddScheduleDialog: d => {
		dispatch(addScheduleOpenDialog());

		// ==========ここから追加する==========
		dispatch(addScheduleSetValue({ date: d }));
		// openAddScheduleDialog: () => {
		// 	dispatch(addScheduleOpenDialog());
	}
});

const mergeProps = (stateProps, dispatchProps) => ({
	...stateProps,
	...dispatchProps,
	month: stateProps.calendar,
	calendar: createCalendar(stateProps.calendar)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CalendarBoard);
