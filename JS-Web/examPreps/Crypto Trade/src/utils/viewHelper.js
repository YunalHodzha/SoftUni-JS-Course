exports.getSelectedOption = (platform) => {
    let payment;

    switch (platform) {
        case 'paypal':
            payment = "PayPal";
            break;
        case 'credit-card':
            payment = "Credit Card";
            break;
        case 'debit-card':
            payment = "Debit Card";
            break;
        case 'crypto-wallet':
            payment = "Crypto Wallet";
            break;
    }


    const titles = [
        'Crypto Wallet',
        'Credit Card',
        'Debit Card',
        'PayPal',
    ];

    const options = titles.map((title) => ({
        title: `${title}`,
        value: `${title}`,
        selected: `${title}` === payment,
    }));

    return options;
};