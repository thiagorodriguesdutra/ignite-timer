import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  label {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.6;
  }

  input[type='text'] {
    padding: 0.688rem 0.5rem;
    width: 17rem;
    background: ${(props) => props.theme['gray-800']};
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    font-weight: 700;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  input[type='number'] {
    padding: 0.5rem 0;
    width: 4.5rem;
    background: ${(props) => props.theme['gray-800']};
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    font-weight: 700;
    text-align: center;
  }

  span {
    font-weight: 700;
    line-height: 1.6;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    padding: 2rem 1rem;
    background: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  width: 4rem;
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  overflow: hidden;
  display: flex;
  justify-content: center;
`
