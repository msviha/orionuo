Shared.AddVar('config', {
    updateRate: 500,
    drinkPotion: {
        timer: {
            position: 'LeftTop',
            type: 'Line|Bar',
            text: 'Drink',
            xFromPosition: 0,
            yFromPosition: 0,
            textColor: '0x88B',
            font: 0,
            backgroundColor: '0x88B'
        },
        gsTimer: {
            position: 'LeftTop',
            type: 'Line|Bar',
            text: 'GS',
            xFromPosition: 0,
            yFromPosition: 55,
            textColor: '0x88B',
            font: 0,
            backgroundColor: '0x88B'
        }
    },
    hiding: {
        timer: {
            position: 'AboveChar',
            type: 'bar',
            text: 'Hiding',
            xFromPosition: 0,
            yFromPosition: 100,
            textColor: '0x100',
            font: 0,
            backgroundColor: 'red'
        }
    }
});
