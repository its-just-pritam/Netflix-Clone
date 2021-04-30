import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    padding: 70px 56px;
    max-width: 1000px;
    margin: auto;
    flex-direction: column;

    @media (max-width: 1000px){
        padding: 70px 30px;
    }
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 15px;

    @media (max-width: 1000px){
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const Column = styled.div`
    display: flex;
    text-align: left;
    flex-direction: column;
`;

export const Link = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 13px;
    text-decoration: none;
`;

export const Title = styled.p`
    color: #757575;
    margin-bottom: 40px;
    font-size: 16px;
`;

export const Text = styled.p`
    color: #757575;
    margin-bottom: 40px;
    font-size: 13px;
`;

export const Break = styled.p`
    flex-basis: 100%;
    height: 0;
`;