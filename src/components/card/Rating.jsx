import styled from "styled-components";
import starFill from "../../assets/images/Star_fill.svg";
import star from "../../assets/images/Star.svg"

const Rating = ({ rating, votes }) => {
    return (
        <RatingContainer>
            {rating ? (
                <>
                    <img src={starFill} alt="Star fill" />
                    <p>{rating} <span>({votes} votes)</span></p>
                </>
            ) : (
                <>
                    <img src={star} alt="Star" />
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