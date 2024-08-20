import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 2rem;
  h2 {
    text-transform: none;
  }
  & > h1 {
    font-weight: 900;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 1120px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`;
export default Wrapper;
