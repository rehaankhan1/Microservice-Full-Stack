import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 2px 0 0 rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--background-secondary-color);
      border-right: 1px solid var(--primary-900);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.2s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
      margin-left: 1rem;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 5.9rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 0.5rem;
      margin-left: 0.3rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      padding: 0.7rem 0.7rem;
      padding-left: 3.6rem;
      text-transform: capitalize;
      transition: padding-left 0.2s ease-in-out;
    }
    .nav-link:hover {
      padding-left: 4rem;
      color: var(--primary-500);
      transition: var(--transition);
    }
    .icon {
      font-size: 2rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--primary-500);
    }
    .logo {
      width: 8rem;
      margin-left: 0.5rem;
    }
  }
`;
export default Wrapper;
