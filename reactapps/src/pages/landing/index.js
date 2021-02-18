import React, { useEffect, 
	useState }               from 'react';
import { connect }           from 'react-redux';
import {dropDown}            from '../../apis/dropDown';
import Loader                from '../../components/loader';
import { setData }           from '../../redux/actions/filter';
import { Grid }              from '@material-ui/core';

import DropDown              from './molecules/dropDown';
import SearchButton          from './molecules/searchButton';
import ExchangeRate          from './molecules/exchangeRate';


import '../../styles/landing.css';

const Body = (props) => {

	const { setData } = props;

	const [ loading, setLoading ] = useState(true);

	const getData = async() =>{
		setLoading(true);

		try {
			let data = await dropDown();
			setData(data);
		}
		catch(err){
			console.log(err);
		}
		setLoading(false);
	}

	useEffect(()=>{
		getData();
	},[])

	 if (loading)
        return <Loader/>;

	return(
		<Grid container spacing = { 2 }>
			<Grid item xs = { 11 } align = 'center'>
				<DropDown/>
			</Grid>
			<Grid item xs = { 11 } align = 'center'>
				<SearchButton/>
			</Grid>
			<Grid item xs = { 12 } align = 'center'>
				<ExchangeRate/>
			</Grid>
		</Grid>
		);
}

function mapStateToProps (state) {
	return  {
	};
}

function mapDispatchToProps (dispatch) {
	return {
		setData : data => dispatch (setData (data)),
	};
}


export default connect (mapStateToProps,mapDispatchToProps)(Body);
