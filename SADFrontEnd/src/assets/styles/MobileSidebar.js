import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 20px 20px 60px --primary-500, inset -20px -20px 60px #ffffff40;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: var(--background-secondary-color);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--border-radius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .closebtn {
    position: absolute;
    align-items: center;
    margin-top: -1rem;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: black;
    cursor: pointer;
  }
  .nav-links {
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--text-secondary-color);
    padding: 1rem 2rem;
    text-transform: capitalize;
    font-size: 1.1rem;
  }
  .nav-link:hover {
    color: var(--primary-600);
  }
  .icon {
    font-size: 2rem;
    margin-right: 0.9rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--primary-600);
  }
  .logo {
    display: flex;
    align-item: center;
    margin-top: 6rem;
    width: 9rem;
  }
`;
export default Wrapper;
