import React                       from 'react';
import TableHead                   from '@material-ui/core/TableHead';
import TableRow                    from '@material-ui/core/TableRow';
import TableCell                   from '@material-ui/core/TableCell';
import { connect }                 from 'react-redux';


const Header = (props) => {

	return(
		<TableHead>
			<TableRow>
				<TableCell align = 'center'>Currency</TableCell>
				<TableCell align = 'center'>Value</TableCell>
			</TableRow>
		</TableHead>
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

export default connect (mapStateToProps, mapDispatchToProps)(Header);
