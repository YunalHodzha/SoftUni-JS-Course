exports.getSelectedOption = (platform) => {
    const titles = [
        'PC',
        'Nintendo',
        'PS4',
        'PS5',
        'XBOX',
    ];

    const options = titles.map((title) => ({
        title: `${title}`,
        value: `${title}`,
        selected: `${title}` === platform,
    }));

    return options;
};