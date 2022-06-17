import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: darkblue;
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 450px;
    position: fixed;
    left: 12%;
    align-items: center;
    justify-content: center;
    
    input{
        background-color: white;
    }

    button{
        background-color: white;
        color: #000;
        width: 250px;
        margin: 2rem 0 -1rem 0;
    }
    button:hover{
        background-color: lightgrey;
    }
`;