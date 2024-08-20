import styled from "styled-components";

const Wrapper = styled.section`
  .container-window {
    background: var(--background-color);
    border-radius: var(--border-radius);
    display: grid;
    grid-template-rows: 1fr auto;
    padding: 2rem 2rem 4rem;
    border: 1px solid var(--primary-800);
  }
  .text-here {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: --text-color;
  }
  #dropArea {
    border: 2px dashed #d16aff;
    padding: 5rem;
    cursor: pointer;
    text-align: center;
  }

  #cvInput {
    display: none;
  }

  label {
    display: block;
    margin: 10px 0;
    color: --text-color;
    font-size: 16px;
    cursor: pointer;
  }
  .upload {
    color: --text-color;
    cursor: pointer;
    margin-top: 1rem;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center; 
    border-radius:7rem;
  }
  table {
    width: 100%;

  }
  th,
  td {
    border: 1px solid var(--text-color);
    padding: 1rem;
    text-align: center;
  }
  th {
    border-radius: 0.3rem;
    background-color: var(--primary-800);
    color: white;
    height: 0rem;
  }
  td{
    height: 0rem;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: #2980b9;
  }
  button.view-btn {
    background-color: transparent;
  }
`;

export default Wrapper;
