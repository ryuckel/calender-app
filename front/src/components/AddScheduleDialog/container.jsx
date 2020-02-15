import AddScheduleDialog from './presentation';
import { addScheduleCloseDialog, addScheduleSetValue } from '../../redux/addSchedule/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ schedule: state.addSchedule });

const mapDispatchToProps = dispatch => ({
	closeDialog: () => {
		dispatch(addScheduleCloseDialog());
	},
	setSchedule: value => {
		dispatch(addScheduleSetValue(value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);
