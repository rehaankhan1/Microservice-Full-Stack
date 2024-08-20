import styled from "styled-components";

const Wrapper = styled.section`
  .flip-card {
    perspective: 100rem;
    width: 100%;
    height: 9rem;
    position: relative;
    transform-style: preserve-3d;
    cursor: pointer;
    margin-top: 4rem;
    border-radius:5%;
  }

  .flip-card-inner {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.9s ease; /* Use ease for a smoother transition */
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateX(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.6s ease; /* Adjust the transition property */
  }

  .flip-card-front {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);

  }

  .flip-card-back {
    transform: rotateX(180deg);
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    border: 1px double var(--primary-800);
  }

  h1{
    color:var(--primary-600);
    font-size:1.5rem;
  }
  /* Style the content inside the card */
  h2, h4, p {
    margin: 1rem;
  }

  .motivational-quote {
    text-align: center;
  }
  .cursor{
    margin-top: 1rem;
  }
`;

export default Wrapper;
