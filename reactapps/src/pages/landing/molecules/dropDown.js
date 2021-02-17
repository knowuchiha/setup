import React, { useState}    from 'react';
import { connect }           from 'react-redux';
import MenuItem              from '@material-ui/core/MenuItem';
import FormControl           from '@material-ui/core/FormControl';
import Select                from '@material-ui/core/Select';

import { setSymbol }         from '../../../redux/actions/filter';

import '../../../styles/landing.css';

const DropDown = (props) => {

	const { data , setSymbol } = props
	const [curr, setCurr]      = useState('');

	const handleChange = (e) => {
		setCurr(e.target.value);
		setSymbol(e.target.value);
	}

	return(
		<div>
			<FormControl variant="outlined" className = 'landing-form'>
				<Select className = 'landing-form-select' 
					value={curr}
					onChange={handleChange}
				>
					{
					data.map((row,i)=>(
					<MenuItem key = {i} value= {row.symbol}>{row.dropDown}</MenuItem>
					))
					}
				</Select>
			</FormControl>
		</div>
		);
}

function mapStateToProps (state) {
	return  {
		data : state.filter.data
	};
}

function mapDispatchToProps (dispatch) {
	return {
		setSymbol  : data => dispatch (setSymbol (data))
	};
}


export default connect (mapStateToProps,mapDispatchToProps)(DropDown);
