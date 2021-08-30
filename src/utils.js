const APP_ID = "ea1d37d5";
const APP_KEY = "fd382a172ba8d6668c0430dc9c14a181";

export const performSearch = async searchTerm => {

	const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${ searchTerm }&app_id=${ APP_ID }&app_key=${ APP_KEY }`);
	const data = await response.json();
	return data;
}