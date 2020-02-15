import AddScheduleDialog from './presentation';
import { addScheduleCloseDialog, addScheduleSetValue } from '../../redux/addSchedule/actions';
import { connect } from 'react-redux';
import { asyncSchedulesAddItem } from '../../redux/schedules/effects';

const mapStateToProps = state => ({ schedule: state.addSchedule });

const mapDispatchToProps = dispatch => ({
	closeDialog: () => {
		dispatch(addScheduleCloseDialog());
	},
	saveSchedule: schedule => {
		dispatch(asyncSchedulesAddItem(schedule));
		dispatch(addScheduleCloseDialog());
	},
	setSchedule: value => {
		dispatch(addScheduleSetValue(value));
	}
});
const mergeProps = (stateProps, dispatchProps) => ({
	...stateProps,
	...dispatchProps,
	saveSchedule: () => {
		const {
			schedule: { form: schedule }
		} = stateProps;
		dispatchProps.saveSchedule(schedule);
	}
});
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddScheduleDialog);
