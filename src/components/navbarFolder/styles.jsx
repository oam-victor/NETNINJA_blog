import styled from "styled-components";

export const Container = styled.div`
  .navbar {
    display: flex;
    align-items: center;
    border-bottom: 2px solid var(--bg);
    border-bottom: 3px solid var(--letter);

    h1 {
      font-size: 2rem;
      transition: .3s;
    }

    .links {
      margin-left: auto;
    }

    a {
      font-size: 1.2rem;
      margin-left: 16px;
      text-decoration: none;
      padding: 6px;
      font-weight: 600;
      color: var(--letter);
      opacity: 0.7;
      transition: 0.3s;

      &:hover {
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 340px) {
    //galaxy-fold
    .navbar {
      h1 {
        font-size: 1.5rem;
      }
      a{
        font-size: .9rem;
      }
    }
  }
`;
