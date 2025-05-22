import styled from "styled-components";

const Rating = ({ rating, votes }) => {
    return (
        <RatingContainer>
            {rating ? (
                <>
                    <img src="./src/assets/images/Star_fill.svg" alt="Star fill" />
                    <p>{rating} <span>({votes} votes)</span></p>
                </>
            ) : (
                <>
                    <img src="./src/assets/images/Star.svg" alt="Star" />
                    <span>No ratings</span>
                </>
            )}
        </RatingContainer>
    );
};

const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .35rem;
    margin: .5rem 0;

    p {
        font-size: 0.875rem;
        color: var(--color-text-label);
    }

    span {
        font-size: .875rem;
        font-weight: var(--font-weight-bold);
        color: var(--color-text-muted);
    }
`

export { Rating };