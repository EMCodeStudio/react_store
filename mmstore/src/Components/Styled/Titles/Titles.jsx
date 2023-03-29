
import styled from 'styled-components'

const Title = styled.div`
width: 100%;
height: 100px;
`;

const TitleProduct = styled(Title)`

h2{
  color:var(--color-purple); 
  text-shadow: 2px 2px 40px var(--color-purple-light) ;
  text-transform:uppercase;
}`

export { TitleProduct }