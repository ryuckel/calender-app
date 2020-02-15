import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import CalendarBoard from './components/CalendarBoard/container';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import Navigation from './components/Navigation/container';
import DayjsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import AddScheduleDialog from './components/AddScheduleDialog/container';
import CurrentScheduleDialog from './components/CurrentScheduleDialog/container';
import thunk from 'redux-thunk';

dayjs.locale('ja');

import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
	<Provider store={store}>
		<MuiPickersUtilsProvider utils={DayjsUtils}>
			<Navigation />
			<CalendarBoard />
			<AddScheduleDialog />
			<CurrentScheduleDialog />
		</MuiPickersUtilsProvider>
	</Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
