import React, { useEffect, useState }  from 'react';
import { connect }           from 'react-redux';
import Button                from '@material-ui/core/Button';
import InputLabel            from '@material-ui/core/InputLabel';
import MenuItem              from '@material-ui/core/MenuItem';
import FormControl           from '@material-ui/core/FormControl';
import Select                from '@material-ui/core/Select';

import '../../styles/landing.css';

const Body = (props) => {

	const [curr, setCurr] = useState('');
var obj = [
	{'symbol' : 'INR', 'curr' : 'Indian Rupee (INR)'},
	{'symbol' : 'AUD', 'curr' : 'Australian Dollar (AUD)'},
	{'symbol' : 'CAD', 'curr' : 'Canadian Dollar (CAD)'},
	{'symbol' : 'JPY', 'curr' : 'Japanese Yen (JPY)'},
]

	useEffect(()=>{
	},[])

	const handleClick = async () => {
		let url = `https://api.exchangeratesapi.io/latest?base=${curr}`; 
		const exchangeFetched = await fetch(url);
		const data = await exchangeFetched.json();
		console.log('=====================',data);
	}

	const handleChange = (e) => {
		console.log('=====================');
		setCurr(e.target.value);
	}

	return(
		<div>
			<FormControl variant="outlined" className = 'landing-form'>
				<Select className = 'landing-form-select' 
					value={curr}
					onChange={handleChange}
				>
					{
					obj.map((row,i)=>(
						<MenuItem key = {i} value= {row.symbol}>{row.curr}</MenuItem>
						))
					}
				</Select>
			</FormControl>
			<p>
				<Button variant="contained" size = "large" color="primary" onClick = {handleClick}>
					Search
				</Button>
			</p>
		</div>
		);
}

function mapStateToProps (state) {
	return  {
	};
}

function mapDispatchToProps (dispatch) {
	return {
	};
}


export default connect (mapStateToProps,mapDispatchToProps)(Body);
