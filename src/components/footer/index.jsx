import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            Coded by <a href="https://github.com/Hugo-Moreira91" target="_blank">Hugo Moreira</a> | Challenge by
            <a href="https://www.devchallenges.io?ref=challenge" target="_blank"> devChallenges.io</a>.
        </Container>
    );
}

const Container = styled.footer`
    font-size: .875rem;
    text-align: center;
    padding: .5rem 0;
    background-color: var(--color-bg);
    color: var(--color-text-body);

    a {
        text-decoration: none;
        color: var(--color-text-label);
        transition: color 200ms ease-in;
    }

    a:hover {
        color: var(--color-text-body);
    }
`

export { Footer };