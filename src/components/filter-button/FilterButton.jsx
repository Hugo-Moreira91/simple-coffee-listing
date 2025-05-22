import styled from "styled-components";

const FilterButton = ({ children, selected, onClick }) => {
    return (
        <Button selected={selected} onClick={onClick}>
            {children}
        </Button>
    )
}

const Button = styled.button`
    font-weight: var(--font-weight-bold);
    border: 0;
    border-radius: .5rem;
    margin: 0 .33rem;
    padding: .575rem .725rem;
    letter-spacing: .03rem;
    color: var(--color-button-text);
    background-color: ${({ selected }) => selected ? 'var(--color-button)' : 'transparent'};
    cursor: pointer;
`

export { FilterButton };