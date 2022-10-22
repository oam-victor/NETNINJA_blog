import styled from 'styled-components';

export const Container = styled.div`
    max-width: 400px;
    margin: 3vh auto 0 auto;
    text-align: center;
    font-weight: bold;

    label{
        text-align: left;
        display: block;
    }
    
    h2{
        font-size: 20px;
        color: var(--color);
        margin-bottom: 30px;
    }

    input, textarea, select{
        width: 100%;
        padding: 6px 10px;
        margin: 10px 0;
        border: 1px solid;
        box-sizing: border-box;
        display: block;
    }

    button{
        background-color: var(--letter);
        color: var(--bg);
        border: 0;
        padding: 8px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
    }

`