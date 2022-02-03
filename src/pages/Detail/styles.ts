import styled from 'styled-components/native';
import {rgba} from 'polished';

interface StadiumImageProps {
    size: number;
}

export const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        paddingBottom: 60
    }
}))`
    flex: 1;
    background-color: #fff;
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
    color: #282828;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const TeamDetail = styled.Text`
    color: ${rgba('#282828', 0.6)};
    font-size: 15px;
    margin-bottom: 5px;
`;

export const DetailContainer = styled.View`
    padding: 0px 20px;
`;

export const Title = styled.Text`
    color: #282828;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const Card = styled.View`
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
    elevation: 3;
    `;

export const StadiumImage = styled.Image<StadiumImageProps>`
    height: ${props => props.size ? `${props.size * 0.5}px` : '200px'};
    border-radius: 10px;
    margin-bottom: 10px;
`;
    
export const SubTitle = styled.Text`
    color: #282828;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`;

export const StadiumDetailContainer = styled.View`
    padding-top: 10px;
`;
    
export const DescriptionLabel = styled.Text`
    color: #282828;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
`;
    
export const DescriptionText = styled.Text`
    color: ${rgba('#282828', 0.6)};
    font-size: 15px;
    margin-bottom: 10px;
`;