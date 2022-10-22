import styled from "styled-components";

export const Container = styled.div`
  article {
    margin-top: 5vh;
  }

  p {
    color: black;
    opacity: 0.7;
    margin: 0.3rem 0 1rem 0;
  }

  p + div {
    line-height: 1.5rem;
    width: 70vw;
    margin: 0 auto;
    font-size: 1.2rem;
  }

  h2 {
    color: black;
  }

  .buttonContainer {
    width: 70vw;
    margin: 1rem auto;
    display: flex;
    justify-content: center;


    button {
      background-color: var(--letter);
      color: var(--bg);
      border: 0;
      padding: 8px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
    }
  }
`;
