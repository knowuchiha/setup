import React                          from 'react';
import { connect }                    from 'react-redux';
import TableRow                       from '@material-ui/core/TableRow';
import TableCell                      from '@material-ui/core/TableCell';

const Row = (props) => {
	const { curr, value }  = props;

	return (
		<TableRow>
			<TableCell align = 'center'>{curr}</TableCell>
			<TableCell align = 'center'>{value}</TableCell>
		</TableRow>
	);

};

function mapDispatchToProps (dispatch) {
	return {
	};
}

function mapStateToProps (state) {
	return  {
	}
}

export default connect (mapStateToProps, mapDispatchToProps)(Row);
