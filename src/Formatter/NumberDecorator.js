import React, { Component } from 'react';

export const NumberDecorator = (WrappedComponent) => {
    return class NumberDecorator extends Component {

        calculateColorClass = (amount) => {
            if (amount < 0) {
                return 'danger'
            }
            return 'success'
        }

        formatToCurrency = (currency) => {
            if (!currency) {
                return '0.00'
            }
            let NF = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            let newCurrency = NF.format(currency)
            return newCurrency
        }

        formatToDecimal = (number) => {
            if (!number) {
                return '0.00'
            }
            let NF = new Intl.NumberFormat('en-US', {
                style: 'decimal',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
            let formattedNumber = NF.format(number)

            return formattedNumber
        }

        formatToInteger = (number) => {
            if (!number) {
                return '0'
            }
            let NF = new Intl.NumberFormat('en-US', {
                style: 'decimal',
                maximumFractionDigits: 0
            })
            let integer = NF.format(number)
            return integer
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    calculateColorClass={this.calculateColorClass}
                    formatToCurrency={this.formatToCurrency}
                    formatToDecimal={this.formatToDecimal}
                    formatToInteger={this.formatToInteger}
                />
            )
        }

    }
}
