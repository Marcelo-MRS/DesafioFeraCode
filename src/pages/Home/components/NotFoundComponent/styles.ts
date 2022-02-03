import styled from 'styled-components/native';
import {rgba} from 'polished';

export const NotFoundText = styled.Text`
text-align: center;
font-size: 16px;
color: ${props => rgba(props.theme.text, 0.6)};
`;