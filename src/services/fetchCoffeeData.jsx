import axios from "axios";

async function fetchCoffeeData() {
    try {
        const response = await axios.get("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json");

        return response.data;
    } catch(error) {
        console.error(`Error fetching coffee listing: ${error.message}`);
    }
}

export { fetchCoffeeData };