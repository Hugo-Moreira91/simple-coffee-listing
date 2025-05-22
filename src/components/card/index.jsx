import styled from "styled-components";
import { Rating } from "./rating";

const Card = ({ coffee }) => {
    return (
        <CardContainer>
            <ImageContainer>
                <img src={coffee.image} alt={coffee.name} />
                <PopularTag $popular={coffee.popular}>
                    {coffee.popular ? "Popular" : ""}
                </PopularTag>
            </ImageContainer>
            <ProductHeader>
                <h3>{coffee.name}</h3>
                <PriceTag>{coffee.price}</PriceTag>
            </ProductHeader>
            <ProductMeta>
                <Rating rating={coffee.rating} votes={coffee.votes} />
                {!coffee.available && <AvailabilityStatus>Sold out</AvailabilityStatus>}
            </ProductMeta>
        </CardContainer>
    )
}

const CardContainer = styled.section`
    width: 16.25rem;
`

const ImageContainer = styled.div`
    position: relative;
    height: 10rem;

    img {
        border-radius: .75rem;
    }
`

const PopularTag = styled.span`
    position: absolute;
    top: .5rem;
    left: .55rem;
    font-size: 0.625rem;
    padding: .25rem .75rem;
    border-radius: 1rem;
    color: var(--color-text-popular);
    background-color: ${({ $popular }) => $popular ? 'var(--color-highlight)' : 'transparent'};
`

const ProductHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: .75rem;

    h3 {
        font-size: 1rem;
        font-weight: var(--font-weight-medium);
        color: var(--color-text-label);
    }
`

const PriceTag = styled.p`
    font-size: .75rem;
    font-weight: var(--font-weight-bold);
    padding: .25rem .5rem;
    border-radius: .25rem;
    color: var(--color-text-price);
    background-color: var(--color-price-tag);
`

const ProductMeta = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AvailabilityStatus = styled.span`
    font-size: .875rem;
    font-weight: var(--font-weight-bold);
    color: var(--color-text-soldout);
`

export default Card;