import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import logo from '../../assets/image/pic.jpg';
import { Formik } from 'formik';
import { Ionicons, Fontisto, Octicons } from '@expo/vector-icons';
import { View } from 'react-native';

import { StyledContainer, InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from '../styles';


const {brand, darkLight, primary } = colors;

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <StyledContainer>
            <StatusBar style='dark'/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={logo}/>
                <PageTitle>login App</PageTitle>
                <SubTitle>Account Login</SubTitle>
                <Formik
                     initialValues={{ email: '', password: '' }}
                     onSubmit={(values) => {
                         console.log(values);
                     }}
                >
                      {({handleChange, handleBlur, handleSubmit, values}) => (
                            <StyledFormArea>
                                <MyTextInput
                                    label="Email Address"
                                    icon="mail"
                                    placeholder="andrew@gmail.com"
                                    placeholderTextColor={darkLight}
                                    onchangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    KeyboardType="email-address"
                                />

                                <MyTextInput
                                    label="password"
                                    icon="lock"
                                    placeholder="* * * * * * * *"
                                    placeholderTextColor={darkLight}
                                    onchangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    secureTextEntry={hidePassword}
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                    value={values.password}
                                />
                                <MsgBox>...</MsgBox>
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Login</ButtonText>
                                </StyledButton>
                                <Line/>
                                <StyledButton google={true}onPress={handleSubmit}>
                                    <Fontisto name="google" color={primary} size={25} />
                                    <ButtonText google={true}>Sign in with Google </ButtonText>
                                </StyledButton>
                                <ExtraView>
                                    <ExtraText>Don't have an account already? </ExtraText>
                                    <TextLinkContent>signUp</TextLinkContent>
                                </ExtraView>
                            </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    )
} 

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...Props}) => {
    return(<View>
        <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput{...Props}/>
            {isPassword &&(
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    )

} 

export default Login;