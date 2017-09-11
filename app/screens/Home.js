import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Logo } from '../components/Logo';
import { Header } from '../components/Header';
import { Container } from '../components/Container';
import { TextInputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.79;
const TEMP_CONVERTSION_DATE = new Date();   

export default class Home extends Component{
    render(){

        return (
            <Container>

                <StatusBar backgroundColor="blue" barStyle="light-content" />

                <Header onClick={this.handleOptionPress} />
                
                <KeyboardAvoidingView behavior="padding">
                <Logo />

                <TextInputWithButton
                    buttonText={TEMP_BASE_CURRENCY}
                    onClick={ this.handlePressBaseCurrency }
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType="numeric"
                    onChangeText={this.handleTextChange}
                />

                <TextInputWithButton
                    buttonText={TEMP_QUOTE_CURRENCY}
                    onClick={ this.handlePressQuoteCurrency }
                    editable={false}
                    value={TEMP_QUOTE_PRICE}
                />

                <LastConverted
                    base={TEMP_BASE_CURRENCY}
                    quote={TEMP_QUOTE_CURRENCY}
                    date={TEMP_CONVERTSION_DATE}
                    conversionRate={TEMP_CONVERSION_RATE}
                />

                <ClearButton text="Reverse Currencies" onClick={this.handleCurrenciesSwap} />
                </KeyboardAvoidingView>
                
            </Container>
        )
    }

    handleOptionPress = () => {
        this.props.navigation.navigate('Options');
    }

    handleCurrenciesSwap = () => {
        console.log('Currency swapped');
    }

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {title: 'Base Currency'});
    }

    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency'});
    }

    handleTextChange = (text) => {
        console.log('chanage text: ', text);
    }
}