const config = Shared.AddVar('config', {
    updateRate: 500,
    mobMaster: {
        sayColor: '0x00B3',
        renameNameType: 'autoName',
    },
    autoHandlers: {
        autoRename: {
            enabled: true,
            renameMounts: false,
        },
        printDamageDiffOnly: true
    },
    targeting: {
        highlightEnemySilent: true
    },
    statusBarWrapper: {
        autoCloseTimer: 10000,
    },
    statusBar: {
        scale: 100,
        borderColor: '#ff3f3f3f',
        targetIndicators: [
            { targetAlias: { alias: 'lastattack' }, color: '#ffe62a00', active: false },
            { targetAlias: { alias: 'laststatus' }, color: '#ffFFD700', active: false },
            { targetAlias: { alias: 'lasttarget' }, color: '#ff4169E1', active: false },
        ],
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
