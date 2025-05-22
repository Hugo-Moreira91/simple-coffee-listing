import styled from "styled-components";
import { ProductFilters } from "../../components/product-filters/ProductFilters";
import CoffeeList from "../../components/coffee-list";
import { useState } from "react";
import bgCafeLg from "../../assets/images/bg-cafe-lg.jpg";
import bgCafeSm from "../../assets/images/bg-cafe-sm.jpg"; 
import bgCafe from "../../assets/images/bg-cafe.jpg"; 
import vector from "../../assets/images/Vector.svg";

const Home = () => {
    const [selectedFilter, setSelectedFilter] = useState("all");

    return (
        <Main>
            <Container>
                <Heading>
                    <h1>Our Collection</h1>
                    <p>
                        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
                    </p>
                </Heading>
                <ProductFilters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
                <CoffeeList filter={selectedFilter} />
            </Container>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 15rem 0;
    background: var(--color-bg) url(${bgCafeLg}) no-repeat left top;
    background-size: contain;

    @media (max-width: 90rem) {
        padding: 10rem 0;
        background-image: url(${bgCafe});
    }

    @media (max-width: 40rem) {
        padding: 2.5rem 0;
        background-image: url(${bgCafeSm});
    }
`

const Container = styled.section`
    width: 85vw;
    border-radius: .75rem;
    background-color: var(--color-bg-section);

    @media (max-width: 30rem) {
        width: 90vw;
    }
`

const Heading = styled.div`
    max-width: 32.5rem;
    text-align: center;
    margin: 2.5rem auto 0;
    padding-top: 2.5rem;
    background: url(${vector}) no-repeat top right;
    background-size: contain;

    h1 {
        font-size: 2rem;
        letter-spacing: .03rem;
        color: var(--color-text-heading);
    }

    p {
        max-width: 30rem;
        margin: .5rem auto 1.25rem;
        color: var(--color-text-body);
    }

    @media (max-width: 40rem) {
        background-position: center center;
    }

    @media (max-width: 30rem) {
        p {
            font-size: .875rem;
            padding: 0 .5rem;
        }
    }
`

export { Home };