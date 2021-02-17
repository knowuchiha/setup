export const dropDown = async () => {

	try {

		let response = await fetch(`http://localhost:8000/apis/dropDown`);

		const data = await response.json();

		return data;

	} catch (error) {
		return {data : error, success : false};
	}
}

