import React                 from 'react';
import { connect }           from 'react-redux';

import Table                from '@material-ui/core/Table';
import TableBody            from '@material-ui/core/TableBody';
import TableContainer       from '@material-ui/core/TableContainer';
import Paper                from '@material-ui/core/Paper';

import '../../../styles/landing.css';

import Header           from '../atoms/tableHeader';
import Row              from '../atoms/tableRow';

const ExchangeRate = (props) => {

	const { exchange } = props;

	if (exchange.rates){
		return(
			<div>
				<TableContainer component = { Paper } >
					<Table>
						<Header/>
						<TableBody>
							{Object.keys(exchange.rates).map(key => 
							<Row key = { key } curr= { key } value = {exchange.rates[key]}/>
							)}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			);
	}
	else
		return null;
}

function mapStateToProps (state) {
	return  {
		exchange : state.filter.exchange,
	};
}

function mapDispatchToProps (dispatch) {
	return {
	};
}


export default connect (mapStateToProps,mapDispatchToProps)(ExchangeRate);
