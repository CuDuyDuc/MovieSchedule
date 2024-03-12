import { View, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { globalStyle } from '../../styles/globalStyle';
import { ArrowLeft } from 'iconsax-react-native';
import COLORS from '../../assets/colors/Colors';
import { FONTFAMILY } from '../../../assets/fonts';
import { LoadingModal } from '../../modal';
import { ButtonComponent, RowComponent, SectionComponent, TextComponent } from '../../components';

const Verification = ({ navigation, route }: any) => {
    const { code, email, password, username} = route.params;
    const [currentCode, setCurrentCode] = useState<string>(code);
    const [codeValues, setCodeValues] = useState<string[]>([]);
    const [newCode, setNewCode] = useState('');
    const [limit, setLimit] = useState(120);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const ref1 = useRef<any>();
    const ref2 = useRef<any>();
    const ref3 = useRef<any>();
    const ref4 = useRef<any>();

    // khi người dùng vừa vào trang xác nhận nó sẽ nhảy ngay đến ref1 tương ứng TextInput thứ 1
    useEffect(() => {
        ref1.current.focus();
    }, []);

    // set lùi thời gian sau mỗi 1 giây tính từ khi gửi mã xác thực đến email. 
    useEffect(() => {
        if (limit > 0) {
            const interval = setInterval(() => {
                setLimit(limit => limit - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [limit]);

    useEffect(() => {
        let item = ``;

        codeValues.forEach(val => (item += val));

        setNewCode(item);
    }, [codeValues]);

    const handleChangeCode = (val: string, index: number) => {
        const data = [...codeValues];
        data[index] = val;

        setCodeValues(data);
    };

    return (
        <View style={globalStyle.container}>
            <SectionComponent>
                <TouchableOpacity style={{ paddingTop: 50, paddingBottom: 10 }}>
                    <ArrowLeft size={24} color={COLORS.WHITE}
                        onPress={() => navigation.goBack()} />
                </TouchableOpacity>
                <TextComponent text='Mã Xác Thực' title font={FONTFAMILY.poppins_bold} />
                <TextComponent
                    text={`Chúng tôi đã gửi mã xác minh vào ${email.replace(/.{1,5}/, (m: any) => '*'.repeat(m.length))}: `}
                    styles={{ paddingBottom: 30 }} />
            </SectionComponent>
            <SectionComponent>
                <RowComponent justify='space-around'>
                    <TextInput
                        keyboardType="number-pad"
                        ref={ref1}
                        value={codeValues[0]}
                        style={[styles.input]}
                        maxLength={1}
                        onChangeText={val => {
                            val.length > 0 && ref2.current.focus();
                            handleChangeCode(val, 0);
                        }}
                        placeholder="-"
                        placeholderTextColor={COLORS.WHITE}
                    />
                    <TextInput
                        ref={ref2}
                        value={codeValues[1]}
                        keyboardType="number-pad"
                        onChangeText={val => {
                            handleChangeCode(val, 1);
                            val.length > 0 && ref3.current.focus();
                        }}
                        style={[styles.input]}
                        maxLength={1}
                        placeholder="-"
                        placeholderTextColor={COLORS.WHITE}
                    />
                    <TextInput
                        keyboardType="number-pad"
                        value={codeValues[2]}
                        ref={ref3}
                        onChangeText={val => {
                            handleChangeCode(val, 2);
                            val.length > 0 && ref4.current.focus();
                        }}
                        style={[styles.input]}
                        maxLength={1}
                        placeholder="-"
                        placeholderTextColor={COLORS.WHITE}
                    />
                    <TextInput
                        keyboardType="number-pad"
                        ref={ref4}
                        value={codeValues[3]}
                        onChangeText={val => {
                            handleChangeCode(val, 3);
                        }}
                        style={[styles.input]}
                        maxLength={1}
                        placeholder="-"
                        placeholderTextColor={COLORS.WHITE}
                    />
                </RowComponent>
            </SectionComponent>
            <SectionComponent styles={{ alignItems: 'center' }}>
                <ButtonComponent 
                    disable= {newCode.length !== 4}
                    text='Tiếp Tục' 
                    type='orange' 
                    styles={{ width: '80%' }}
                     />
            </SectionComponent>
            {errorMessage && (
                <SectionComponent>
                    <TextComponent
                        styles={{ textAlign: 'center' }}
                        text={errorMessage}
                        color={COLORS.RED}
                    />
                </SectionComponent>
            )}
            <SectionComponent>
                {limit > 0 ? (
                    <RowComponent justify="center">
                        <TextComponent text="Re-send code in  " flex={0} />
                        <TextComponent
                            text={`${(limit - (limit % 60)) / 60}:${limit - (limit - (limit % 60))
                                }`}
                            flex={0}
                            color={COLORS.HEX_ORANGE}
                        />
                    </RowComponent>
                ) : (
                    <RowComponent>
                        <ButtonComponent
                            type="link"
                            text="Gửi lại email xác thực"
                        />
                    </RowComponent>
                )}
            </SectionComponent>
            <LoadingModal visible={isLoading} />
        </View>
    )
}

export default Verification;

const styles = StyleSheet.create({
    input: {
        height: 55,
        width: 55,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.HEX_LIGHT_GREY,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontFamily: FONTFAMILY.poppins_bold,
        textAlign: 'center',
        color: COLORS.WHITE,
    },
});