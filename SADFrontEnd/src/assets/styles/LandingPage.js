import styled from "styled-components";

const Wrapper = styled.section`
    align-items: center;
    justify-content: center;
  .nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    height: var(--nav-height);
    display: block;
    align-items: center;
    justify-content: center;
  }
  .nav-cont {
    margin-left:6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo-cont {
    flex-grow: 1;
    margin: 1rem 35rem;
  }
  .logo {
    width: 9rem;
    display: flex;
  }
  .main-img{
    width: 36rem;
  }
  .box {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }

  h1 {
    font-weight: 900;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
    font-size: 2.3rem;
  }
  p {
    line-height: 3;
    font-size: 1.2rem;
    font-style: italic;
    color: var(--text-secondary-color);
    margin-bottom: 1rem;
    max-width: 39em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 1rem 1rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
    .logo {
      width: 180px;
      display: flex;
      margin: 1rem 17.8rem;
    }
  }
`;
export default Wrapper;
