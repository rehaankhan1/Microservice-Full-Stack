import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  border: 1px solid var(--primary-900);
  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--primary-900);
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    .main-icon {
      width: 60px;
      height: 60px;
      display: grid;
      place-items: center;
      background: var(--primary-500);
      border-radius: 20%;
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--white);
      margin-right: 1rem;
    }
    .info {
      h2 {
        margin-bottom: 0.5rem;
        margin-right: 1rem;
      }
      p {
        margin: 0;
        text-transform: capitalize;
        letter-spacing: var(--letter-spacing);
        color: var(--text-secondary-color);
      }
    }
    .status-container {
      display: flex;
      place-items: center;
      order: 2; /* Change order for smaller screens */
      margin-top: 1rem; /* Adjust margin-top as needed */
    }

    .status {
      border-radius: var(--border-radius);
      text-align: center;
      width: 13rem;
      height: 2.7rem;
      display: grid;
      align-items: center;
    }
  }
  .content {
    padding: 1rem 1.9rem;
  }
  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    align-items: center;
    @media (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .actions {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: right;
  }
  .edit-btn,
  .delete-btn {
    height: 1.8rem;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
  }
  .edit-btn {
    margin-right: 0.9rem;
  }
`;

export default Wrapper;
