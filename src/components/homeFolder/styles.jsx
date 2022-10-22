import styled from 'styled-components';

export const Container = styled.div`
    .blog-preview{
        padding: 10px 16px;
        margin: 0 0 5px 20px;
        border-bottom: 1px solid var(--bg);
        cursor: pointer;

        a{
            text-decoration: none;
        }

        h2{
            font-size: 20px;
            color: var(--letter);
            margin-bottom: 8px;
        }

        p{
            opacity: .7;
            color: var(--authorColor);
        }

        &:hover{
            box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
    }

    .blog-list{
        > h2{
            margin: 40px 0 5px 0;
            color: black;
        }
    }
`