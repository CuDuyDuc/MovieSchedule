import React, { useState } from 'react';
import { Image, Switch } from 'react-native';
import { ButtonComponent, InputComponent, KeyboardAvoidingWrapper, RowComponent, SectionComponent, TextComponent } from '../../components';
import IMAGES from '../../assets/images/Images';
import { FONTFAMILY } from '../../../assets/fonts';
import { Lock, Sms } from 'iconsax-react-native';
import COLORS from '../../assets/colors/Colors';
import { Facebook, Google } from '../../assets/svgs';
import { globalStyle } from '../../styles/globalStyle';

const LoginScreen = ({ navigation }: any) => {

    // Lấy dữ liệu
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember, setIsRemember] = useState(true);
    const [isDisable, setIsDisable] = useState(true);

    return (
        <KeyboardAvoidingWrapper>
            <SectionComponent
                styles={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -250
                }}>
                <Image
                    source={IMAGES.LoginBackgroud}
                    style={{ marginBottom: 10 }} />
            </SectionComponent>
            <SectionComponent>
                <TextComponent
                    title
                    text='Đăng Nhập'
                    size={45}
                    color={COLORS.HEX_BLACK}
                    font={FONTFAMILY.poppins_bold}
                    styles={{ marginBottom: 20, marginTop: -20 }} />
                <InputComponent
                    value={email}
                    placeholder='Email'
                    onChange={val => setEmail(val)}
                    allowClear
                    affix={<Sms size={22} color={COLORS.HEX_LIGHT_GREY} />} />
                <InputComponent
                    value={password}
                    placeholder='Mật khẩu'
                    onChange={val => setPassword(val)}
                    isPassword
                    affix={<Lock size={22} color={COLORS.HEX_LIGHT_GREY} />} />
            </SectionComponent>
            <SectionComponent>
                <RowComponent justify='space-between'>
                    <RowComponent onPress={() => setIsRemember(!isRemember)}>
                        <Switch
                            trackColor={{ false: COLORS.WHITE, true: COLORS.HEX_ORANGE }}
                            thumbColor={isRemember ? COLORS.WHITE : COLORS.HEX_ORANGE}
                            value={isRemember}
                            onChange={() => setIsRemember(!isRemember)} />
                        <TextComponent text='Ghi nhớ tài khoản' color={COLORS.HEX_BLACK} />
                    </RowComponent>
                    <ButtonComponent
                        text='Quên mật khẩu?'
                        onPress={() => navigation.navigate('ForgotPassWord')}
                        type="link" />
                </RowComponent>
            </SectionComponent>
            <SectionComponent styles={{ marginTop: 20 }}>
                <ButtonComponent
                    disable={isDisable}
                    text='ĐĂNG NHẬP'
                    type='orange'
                />
            </SectionComponent>
            <SectionComponent>
                <TextComponent
                    text='Đăng nhập với'
                    color={COLORS.HEX_LIGHT_GREY}
                    styles={{
                        textAlign: 'center',
                        fontSize: 16,
                        fontFamily: FONTFAMILY.poppins_medium,
                        marginBottom: 10
                    }} />
                <RowComponent>
                    <ButtonComponent
                        text='Google'
                        iconFlex='left'
                        type='orange'
                        styles={globalStyle.shadow}
                        textColor={COLORS.HEX_LIGHT_GREY}
                        icon={<Google />}
                    />
                    <ButtonComponent
                        text='Facebook'
                        iconFlex='left'
                        type='orange'
                        styles={globalStyle.shadow}
                        textColor={COLORS.HEX_LIGHT_GREY}
                        icon={<Facebook />} />

                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <RowComponent justify='center'>
                    <TextComponent text="Bạn chưa có tài khoản?  " color={COLORS.HEX_BLACK} />
                    <ButtonComponent type='link' text='Đăng ký' onPress={() => {
                        navigation.navigate('SignUpScreen')
                    }} />
                </RowComponent>
            </SectionComponent>
        </KeyboardAvoidingWrapper>
    )
}

export default LoginScreen;

// <InputComponent value={email} onChange={val => setEmail(val)}/>  bingding dữ liệu 2 chiều
// nghĩa là từ email gán xuống sau khi có sự thay đổi thì gán ngược lại lên.