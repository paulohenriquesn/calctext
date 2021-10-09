import styled from '@emotion/styled'

export const Container = styled.div`
display:flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-between;

.total {
  position:absolute;
  bottom:0;
  width: 18rem;
  background:#2a2a2a;

  border: 1px solid;
  border-radius: 2px;

  padding: 0 1rem;
  margin-right: 12px;
  margin-bottom: 12px;
  padding-bottom: 0.6rem;
  padding-top: 0.6rem;

  div {
    display:flex;
    align-items: center;
    h4 {
      margin-left: 8px;
      color:#fff;
      opacity:0.7;
      font-weight: bold;
      font-size: 1.2rem;
    }
    label {
      margin-left: 8px;
      color:#fff;
      opacity:0.7;
      font-weight: bold;
    }
  }
  
}
`