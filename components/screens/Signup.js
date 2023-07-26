import React, {useState}from "react";
import { StatusBar } from 'expo-status-bar';

//formik
import { formik } from 'formik';

// icons
import {Ionicons, octicons, Fontisto } from '@expo/vector-icons';
import logo from '../../assets/image/pic.jpg';


import {
    StyledContainer,
    InnerContainer,
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
import {View} from 'react-native';

//colors
const {brand, darkLight, primary } = colors;

const Signup = () => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
    <StyledContainer>
        <statuBar style="dark" />
        <InnerContainer>
            <PageLogo resizeMode="cover" source={logo} />
            <PageTitle>login App</PageTitle>
            <subTitle>Account signup</subTitle>

            <formik
                initialValue={{ email: '', password: '' }}
                onSubmit={(values) => {
                    console.log(values);
                } }
            >
                {({handleChange, handleBlur, handleSubmit, values}) => (
                <StyledFormArea>
                <MyTextInput
                   label="Email Address"
                   icon="mail"
                   placeholder="andj@gmail,com"
                   placeholderTextColor={darkLight} 
                   onchangeText={handleChange('email')}
                   onBlur={handleBlur('email')}
                   value={values.email}
                   KeybordType="email-address"
                />
                <MyTextInput
                   label="Email Address"
                   icon="mail"
                   placeholder="andj@gmail,com"
                   placeholderTextColor={darkLight} 
                   onchangeText={handleChange('email')}
                   onBlur={handleBlur('email')}
                   value={values.email}
                   KeybordType="email-address"
                />
                <MyTextInput
                   label="Email Address"
                   icon="mail"
                   placeholder="andj@gmail,com"
                   placeholderTextColor={darkLight} 
                   onchangeText={handleChange('email')}
                   onBlur={handleBlur('email')}
                   value={values.email}
                   KeybordType="email-address"
                />
                <MyTextInput
                   label="password"
                   icon="lock"
                   placeholder="* * * * * * * *"
                   placeholderTextColor={darkLight} 
                   onchangeText={handleChange('password')}
                   onBlur={handleBlur('password')}
                   value={values.password}
                   secureTextEntry={hidePassword}
                   isPassword={true}
                   hidePassword={hidePassword}
                   setHidePassword={setHidePassword}
                />
                <MyTextInput
                   label="password"
                   icon="lock"
                   placeholder="* * * * * * * *"
                   placeholderTextColor={darkLight} 
                   onchangeText={handleChange('password')}
                   onBlur={handleBlur('password')}
                   value={values.password}
                   secureTextEntry={hidePassword}
                   isPassword={true}
                   hidePassword={hidePassword}
                   setHidePassword={setHidePassword}
                />
                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>
                </StyledButton>
                <line/>
                <StyledButton google={true}onPress={handleSubmit}>
                    <Fontisto name="google" color={primary} size={25} />
                    <ButtonText google={true}>Sign in with Google </ButtonText>
                </StyledButton>
                <ExtraView>
                    <ExtraText>Don't have an account already? </ExtraText>
                    <TextLinkConent>signup</TextLinkConent>
                </ExtraView>
                </StyledFormArea>
    )}

            </formik>
        </InnerContainer>
    </StyledContainer>
    );
};
const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...Props}) => {
    return(<View>
        <LeftIcon>
          <octicons name={icon} size={30} color={brand} />
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

export default Signup;