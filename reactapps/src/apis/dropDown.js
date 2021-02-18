export const dropDown = async () => {

	let hostname = window.location.host;

	try {

		let response = await fetch(`http://${hostname}/apis/dropDown`);

		const data = await response.json();

		return data;

	} catch (error) {
		return {data : error, success : false};
	}
}

