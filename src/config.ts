const config = Shared.GetVar('config', {
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
        printDamageDiffOnly: false,
    },
    targeting: {
        highlightEnemySilent: true,
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
    klamak: {
        showReadyMessage: true,
        timer: {
            displayTimer: true,
            position: 'LeftTop',
            type: 'Line|Bar',
            text: 'Klamak',
            xFromPosition: 0,
            yFromPosition: 215,
            textColor: '0x88B',
            font: 0,
            backgroundColor: '0x88B',
        }
    },
    drinkPotion: {
        timer: {
            displayTimer: true,
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
            displayTimer: true,
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
            displayTimer: true,
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
            displayTimer: true,
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
            displayTimer: true,
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
    castScroll: {
        timer: {
            displayTimer: true,
            position: 'AboveChar',
            type: 'bar',
            text: '',
            xFromPosition: 0,
            yFromPosition: 75,
            textColor: '0x100',
            font: 1,
            backgroundColor: 'yellow'
        }
    },
    teleportTimer: {
        timer: {
            displayTimer: true,
            position:  'RightTop',
            type: 'Line|Bar',
            text: 'Teleport',
            xFromPosition: 0,
            yFromPosition: 265,
            textColor: '0x88B',
            font: 0,
            backgroundColor: '0x88B'
        }
    }
});
