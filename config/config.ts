const config = Shared.AddVar('config', {
    updateRate: 500,
    mobMaster: {
        sayColor: '0x00B3',
        renameNameType: 'autoName',
    },
    autoHandlers: {
        autoRename: {
            enabled: false,
            renameMounts: false,
        },
        printDamageDiffOnly: false,
    },
    targeting: {
        highlightEnemySilent: false,
    },
    statusBar: {
        autoCloseTimer: 10000,
        selectedColor: '#ffFF4500',
        opacity: 100
    },    
    drinkPotion: {
        timer: {
            position: 'LeftTop',
            type: 'Line|Bar',
            text: 'Drink',
            xFromPosition: 0,
            yFromPosition: 0,
            textColor: '0x88B',
            font: 0,
            backgroundColor: '0x88B',
        },
        gsTimer: {
            position: 'LeftTop',
            type: 'Line|Bar',
            text: 'GS',
            xFromPosition: 0,
            yFromPosition: 55,
            textColor: '0x88B',
            font: 0,
            backgroundColor: '0x88B',
        },
        invisTimer: {
            position: 'LeftTop',
            type: 'Line|Bar',
            text: 'Invis',
            xFromPosition: 0,
            yFromPosition: 110,
            textColor: '0x88B',
            font: 0,
            backgroundColor: '0x88B',
        },
        invisLongTimer: {
            position: 'LeftTop',
            type: 'Line|Bar',
            text: 'InvisL',
            xFromPosition: 0,
            yFromPosition: 165,
            textColor: '0x88B',
            font: 0,
            backgroundColor: '0x88B',
        },
    },
    hiding: {
        timer: {
            position: 'AboveChar',
            type: 'bar',
            text: 'hid',
            xFromPosition: 0,
            yFromPosition: 100,
            textColor: '0x100',
            font: 0,
            backgroundColor: 'red',
        },
        showInnerMessages: true,
    },
});
