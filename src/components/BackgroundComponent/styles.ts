import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Gradient = styled(LinearGradient).attrs((props) => ({
    colors: [props.theme.secundary, props.theme.primary]
}))`
    flex: 1;
`;