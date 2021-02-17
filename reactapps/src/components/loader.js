import React            from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import '../styles/loader.css';

const Component = (props) => {

	return (
		<div className = "loader-propagate">
			<CircularProgress />
		</div>
	);
}

export default Component;
