import Styled from 'styled-components/native';
import  Constants  from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;
//colors
export const colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1f2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10b981",
    red: "#EF4444",
};

const {primary, secondary, tertiary, darkLight, brand, green, red} = colors;

export const StyledContainer = Styled.View`
    flex: 1;
    padding:25px;
    padding-top: ${StatusBarHeight + 10}px ;
    background-color: ${primary};
`;

export const InnerContainer = Styled.View`
      flex:1;
      Width:100%;
      align-items:center;
    `;

export const PageLogo = Styled.Image`
      width: 250px;
      height: 200px;
    `;

export const PageTitle = Styled.Text`
      font-size: 30px;
      text-align: center;
      font-weight: bold;
      color: ${brand};
      padding: 10px;
    `;

export const SubTitle = Styled.Text`
      font-size: 18px;
      margin-bottom: 20px;
      letter-spacing: 1px;
      font-weight: bold;
      color: ${tertiary};    
    `;

export const StyledFormArea = Styled.View`
      width: 90%; 
    `;

export const StyledTextInput = Styled.TextInput`
      background-color: ${secondary};
      padding: 15px;
      padding-left: 55px;
      padding-right: 55px;
      border-radius: 5px;
      font-size: 16px;
      height: 60px;
      margin-vertical: 3px;
      color: ${tertiary};
`;

export const StyledInputLabel = Styled.Text`
      color: ${tertiary};
      font-size: 13px;
      text-align: left;
`;

export const LeftIcon = Styled.View`       
      left: 15px;
      top: 38px;
      position: absolute;
      z-index: 1;
`;
export const RightIcon = Styled.TouchableOpacity`       
      right: 15px;
      top: 38px;
      position: absolute;
      z-index: 1;
`;

export const StyledButton = Styled.TouchableOpacity`
      padding: 15px;
      background-color: ${brand};
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      margin-vertical: 5px;
      height: 60px;

${(props) => props.google == true &&`
      background-color: ${green};
      flex-direction: row;
      justify-content: center;
    `}
`;


export const ButtonText = Styled.Text`
      color: ${primary};
      font-size: 16px; 


  ${(props) => props.google == true &&`
      padding: 25px;
  `}
`;

export const MsgBox = Styled.Text`
      text-align: center;
      font-size: 13px;
`;

export const Line = Styled.View`
      height: 1px;
      width: 100%;
      background-color: ${darkLight};
      margin-vertical: 10px;

`;

export const ExtraView = Styled.View`
      justify-content: center;
      flex-direction: row;
      align-items: center;
      padding: 10px;
`;

export const ExtraText = Styled.Text`
      justify-content: center;
      align-content: center;
      color: ${tertiary};
      font-size: 15px;
`;

export const TextLink = Styled.TouchableOpacity`
      justify-content: center;
      align-items: center;
`;

export const TextLinkContent = Styled.Text`
      color: ${brand};
      font-size: 10px;
`;

