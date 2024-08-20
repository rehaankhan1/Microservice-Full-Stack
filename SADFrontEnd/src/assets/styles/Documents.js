import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  padding: 3rem 2rem 4rem;

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem;
  }

  /* Tab button */
  button {
    width: 9rem;
    height: 3rem;
    font-size: 16px;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 1rem;
    box-sizing: border-box;
    border-color: var(--primary-800); /* Match border color with background */
  }

  /* Active tab button */
  button.active {
    background-color: var(--primary-800);
    color: white;

  }
`;

export default Wrapper;
