import styled from "styled-components";

export const container = styled.main  `
img{
    height: 17rem;
	filter: grayscale();
	border-radius: 2rem;
	border: none;
	box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.5);
	margin-bottom: 1rem;
	transition: filter 0.4s ease-in-out;
    padding: 2rem;
    &:hover{
        filter: brightness();
        padding: 2.5rem;
        transition: 0.2s;
    }
}
`