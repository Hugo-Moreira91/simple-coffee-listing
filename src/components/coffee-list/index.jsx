import { useState, useEffect } from "react";
import { fetchCoffeeData } from "../../services/fetchCoffeeData";
import Card from "../card";
import styled from "styled-components";

const CoffeeList = ({ filter }) => {
    const [ coffeeData, setCoffeeData ] = useState([]);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        fetchCoffeeData()
            .then(setCoffeeData)
            .catch(setError);
    }, []);

    const filteredCoffees = filter === "available"
        ? coffeeData.filter((coffee) => coffee.available)
        : coffeeData;

    if (error) return <p>Error loading coffee list!</p>;

    return (
        <CardGrid>
            {filteredCoffees.map((coffee) => (
                <Card key={coffee.id} coffee={coffee} />
            ))}
        </CardGrid>
    );
}

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16.25rem, 1fr));
    place-items: center;
    column-gap: 1.85rem;
    row-gap: 1.5rem;
    max-width: calc(3 * 16.25rem + 4rem);
    margin: 2.5rem auto 5rem;
`

export default CoffeeList;