import styled from 'styled-components/native';
import {rgba} from 'polished';

interface StadiumImageProps {
    size: number;
}

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const HeaderContainer = styled.View`
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
`;

export const TeamImage = styled.Image`
    height: 120px;
    width: 120px;
    margin-bottom: 20px;
`;

export const TeamName = styled.Text`
    color: ${props=> props.theme.text};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const TeamDetail = styled.Text`
    color: ${props => rgba(props.theme.text, 0.6)};
    font-size: 15px;
    margin-bottom: 5px;
`;

export const DetailContainer = styled.View`
    padding: 0px 20px;
`;

export const Title = styled.Text`
    color: ${props=> props.theme.text};
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const Card = styled.View`
    background-color: ${props=> props.theme.tertiary};
    border-radius: 10px;
    padding: 10px;
    `;

export const StadiumImage = styled.Image<StadiumImageProps>`
    height: ${props => props.size ? `${props.size * 0.5}px` : '200px'};
    border-radius: 10px;
    margin-bottom: 10px;
`;
    
export const SubTitle = styled.Text`
    color: ${props=> props.theme.text};
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`;

export const StadiumDetailContainer = styled.View`
    padding-top: 10px;
`;
    
export const DescriptionLabel = styled.Text`
    color: ${props=> props.theme.text};
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
`;
    
export const DescriptionText = styled.Text`
    color: ${props => rgba(props.theme.text, 0.6)};
    font-size: 15px;
    margin-bottom: 10px;
`;

export const ScrollContainer = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        paddingBottom: 60
    }
}))`
    flex: 1;
`;