import green from 'material-ui/colors/green';
import blue from 'material-ui/colors/blue';

export default (theme: any): any => ({
	card: {
		marginBottom: theme.spacing.unit * 3,
		cursor: 'pointer',
	},
	avatarTrain: {
		backgroundColor: green[500],
	},
	avatarFlight: {
		backgroundColor: blue[500],
	}
})