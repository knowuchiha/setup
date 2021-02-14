import React, { useEffect }  from 'react';
import { connect }           from 'react-redux';
import { addNumber }         from '../redux/actions/increment';

const Body = (props) => {
	const { addNumber, count }  = props;

	useEffect(()=>{
		console.log(count);
	},[count])

	const handleClick = () => {
		addNumber(count + 2);
	}

	return(
		<div onClick = { handleClick }>
			click me !!
		</div>
	);
}

function mapStateToProps (state) {
    return  {
        count  : state.increment.count,
    };
}

function mapDispatchToProps (dispatch) {
    return {
        addNumber  : data => dispatch (addNumber (data)),
    };
}


export default connect (mapStateToProps,mapDispatchToProps)(Body);
