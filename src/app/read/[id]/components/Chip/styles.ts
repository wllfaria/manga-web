import styled from 'styled-components'

export const Chip = styled.div`
  padding: 8px;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.dark.background.secondary};
  margin: 0;
  color: ${(props) => props.theme.colors.dark.text.body};
  margin-right: 8px;
  margin-top: 8px;
`
