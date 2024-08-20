import styled from "styled-components";

const Wrapper = styled.button`
  background: transparent;
  border-color: transparent;
  margin-right: 0.3rem;
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  .toggle-icon {
    font-size: 1.35rem;
    color: var(--text-color);
  }
`;
export default Wrapper;
