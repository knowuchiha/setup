import React, {useState}  from 'react';
import { connect }        from 'react-redux';
import Button             from '@material-ui/core/Button';
import Loader             from '../../../components/loader';

import { setExchange }    from '../../../redux/actions/filter';

import '../../../styles/landing.css';

const SearchButton = (props) => {

	const { setExchange, symbol} = props;
	const [loading, setLoading]  = useState(false);

	const handleClick = async () => {
		setLoading(true)
		let url = `https://api.exchangeratesapi.io/latest?base=${symbol}`; 
		const exchangeFetched = await fetch(url);
		const data = await exchangeFetched.json();
		setExchange(data);
		setLoading(false);
	}

	if (loading)
		return <Loader/>

	return(
		<div>
			<Button variant="contained" size = "large" color="primary" onClick = {handleClick}>
				Search
			</Button>
		</div>
		);
}

function mapStateToProps (state) {
	return  {
		symbol : state.filter.symbol,
	};
}

function mapDispatchToProps (dispatch) {
	return {
		 setExchange : data => dispatch (setExchange (data)),
	};
}


export default connect (mapStateToProps,mapDispatchToProps)(SearchButton);
