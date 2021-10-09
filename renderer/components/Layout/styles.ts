import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;

  display:flex;
  flex-direction: row;

  justify-content: center;

  height: 100vh;

  .editor {
    width: 50%;  
    background:#151515;
  }

  .result {
    width: 50%;
    background:#151515;
  }
`;