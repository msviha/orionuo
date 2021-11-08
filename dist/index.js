var config = Shared.GetVar('config', {
    updateRate: 500,
    mobMaster: {
        sayColor: '0x00B3',
        renameNameType: 'autoName'
    },
    autoHandlers: {
        autoRename: {
            enabled: true,
            renameMounts: false
        },
        printDamageDiffOnly: false
    },
    targeting: {
        highlightEnemySilent: true
    },
    statusBarWrapper: {
        autoCloseTimer: 10000
    },
    statusBar: {
        scale: 100,
        borderColor: '#ff3f3f3f',
        targetIndicators: [
            { targetAlias: { alias: 'lastattack' }, color: '#ffe62a00', active: false },
            { targetAlias: { alias: 'laststatus' }, color: '#ffFFD700', active: false },
            { targetAlias: { alias: 'lasttarget' }, color: '#ff4169E1', active: false },
        ]
    },
    klamak: {
        showReadyMessage: true,
        position: 'LeftTop',
        type: 'Line|Bar',
        text: 'Drink',
        xFromPosition: 0,
        yFromPosition: 215,
        textColor: '0x88B',
        font: 0,
        backgroundColor: '0x88B'
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
        },
        invisTimer: {
            position: 'LeftTop',
            type: 'Line|Bar',
            text: 'Invis',
            xFromPosition: 0,
            yFromPosition: 110,
            textColor: '0x88B',
            font: 0,
            backgroundColor: '0x88B'
        },
        invisLongTimer: {
            position: 'LeftTop',
            type: 'Line|Bar',
            text: 'InvisL',
            xFromPosition: 0,
            yFromPosition: 165,
            textColor: '0x88B',
            font: 0,
            backgroundColor: '0x88B'
        }
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
            backgroundColor: 'red'
        },
        showInnerMessages: true
    }
});
var responseDelay = 350;
var gameObject = {
    uncategorized: {
        atlas: {
            graphic: '0x0FBE',
            color: '0x0B98'
        },
        mapa: {
            graphic: '0x14EB',
            color: '0x0000'
        },
        emptyBottles: {
            name: 'empty bottles',
            graphic: '0x0F0E',
            color: '0x0000'
        },
        emptyKad: {
            graphic: '0x1843',
            color: '0x0000'
        },
        bandy: {
            name: 'clean bandages',
            graphic: '0x0E21',
            color: '0x0000',
            bag: {
                x: 123,
                y: 20
            }
        },
        krvavaBanda1: {
            name: 'bloody bandages',
            graphic: '0x0E22',
            color: '0x0000'
        },
        krvavaBanda2: {
            name: 'bloody bandages',
            graphic: '0x0E20',
            color: '0x0000'
        },
        sipy: {
            name: 'arrow',
            graphic: '0x0F3F',
            color: '0x0000'
        },
        sipky: {
            name: 'crossbow bolt',
            graphic: '0x1BFB',
            color: '0x0000'
        },
        sipyToulec: {
            graphic: '0x1EA0',
            color: '0x0747'
        },
        sipkyToulec: {
            graphic: '0x1EA0',
            color: '0x083A'
        },
        kapsarskeNaradicko: {
            graphic: '0x1EB8',
            color: '0x0749'
        },
        salat: {
            name: 'Ginseng Salad',
            graphic: '0x09EC',
            color: '0x06AB'
        },
        nbRuna: {
            graphic: '0x1F14',
            color: '0x0B1D'
        },
        recallRune: {
            graphic: '0x1F14',
            color: '0x0482'
        },
        anyKey: {
            graphic: '0x1012',
            bag: {
                x: 160,
                y: 5
            }
        },
        nbDagger: {
            graphic: '0x0F51',
            color: '0x0B80',
            bag: {
                x: 150,
                y: 30
            }
        },
        mortar: {
            graphic: '0x0E9B',
            color: '0x0000',
            bag: {
                x: 116,
                y: 24
            }
        },
        lockpicks: {
            graphic: '0x14FB',
            color: '0x0000'
        },
        apprenticesPoisoningKit: {
            graphic: '0x1837',
            color: '0x0000'
        },
        prut: {
            graphic: '0x0DBF',
            color: '0x0000'
        },
        hodf: {
            graphic: '0x136C',
            color: '0x0B89'
        },
        petarda: {
            graphic: '0x1BE0',
            color: '0x061C'
        },
        adaHammer: {
            graphic: '0x1438',
            color: '0x044C'
        },
        dusty: {
            mytheril: {
                graphic: '0x103D',
                color: '0x052D'
            },
            black: {
                graphic: '0x103D',
                color: '0x0455'
            },
            blood: {
                graphic: '0x103D',
                color: '0x0280'
            }
        },
        necroMystic: {
            graphic: '0x1F0B',
            color: '0x0485'
        }
    },
    tools: {
        saw: {
            graphic: '0x1035',
            color: '0x0000'
        },
        sewingKit: {
            graphic: '0x0F9D',
            color: '0x0000'
        },
        silverHammer: {
            graphic: '0x13E3',
            color: '0x0B87'
        },
        tinkerTools: {
            graphic: '0x1EBC',
            color: '0x0000'
        }
    },
    resources: {
        logs: {
            graphic: '0x1BDD',
            color: '0x0000'
        },
        cloth: {
            graphic: '0x175D',
            color: '0x0000'
        },
        furs: {
            graphic: '0x11FA',
            color: '0x0000'
        },
        ore: {
            anyOre: {
                graphic: '0x19B9'
            },
            one: {
                graphic: '0x19B7'
            },
            two: {
                graphic: '0x19BA'
            },
            three: {
                graphic: '0x19B8'
            },
            iron: {
                graphic: '0x19B9',
                color: '0x0000'
            }
        },
        boards: {
            graphic: '0x1BD7',
            color: '0x0000'
        },
        ingots: {
            iron: {
                graphic: '0x1BEF',
                color: '0x0000'
            },
            copper: {
                graphic: '0x1BE3',
                color: '0x0000'
            },
            bronze: {
                graphic: '0x1BEF',
                color: '0x06D6'
            },
            silver: {
                graphic: '0x1BF5',
                color: '0x0000'
            },
            gold: {
                graphic: '0x1BE9',
                color: '0x0000'
            },
            rose: {
                graphic: '0x1BEF',
                color: '0x0665'
            },
            shadow: {
                graphic: '0x1BEF',
                color: '0x0770'
            },
            verite: {
                graphic: '0x1BEF',
                color: '0x07D1'
            },
            valorite: {
                graphic: '0x1BEF',
                color: '0x0515'
            },
            blood: {
                graphic: '0x1BEF',
                color: '0x04C2'
            },
            black: {
                graphic: '0x1BEF',
                color: '0x0455'
            },
            mytheril: {
                graphic: '0x1BEF',
                color: '0x052D'
            }
        },
        stones: {
            pieceOfAmber: {
                graphic: '0x0F25',
                color: '0x0000'
            },
            diamonds: {
                graphic: '0x0F26',
                color: '0x0000'
            },
            tourmalines: {
                graphic: '0x0F18',
                color: '0x0000'
            },
            amethyst: {
                graphic: '0x0F16',
                color: '0x0000'
            },
            rubies: {
                graphic: '0x0F13',
                color: '0x0000'
            },
            citrines: {
                graphic: '0x0F15',
                color: '0x0000'
            },
            emeralds: {
                graphic: '0x0F10',
                color: '0x0000'
            },
            starSapphire: {
                graphic: '0x0F0F',
                color: '0x0000'
            },
            sapphires: {
                graphic: '0x0F11',
                color: '0x0000'
            }
        },
        foldedCloth: {
            graphic: '0x175D',
            color: '0x0000'
        },
        thread: {
            graphic: '0x0FA0',
            color: '0x0000'
        },
        pilesOfHides: {
            graphic: '0x1078',
            color: '0x0000'
        },
        pitcherOfWater: {
            graphic: '0x0FF8',
            color: '0x0000'
        },
        fairyDust: {
            graphic: '0x103D',
            color: '0x0B52'
        },
        soulShard: {
            graphic: '0x0FC4',
            color: '0x0498'
        },
        magicCoins: {
            graphic: '0x0EED',
            color: '0x0B81'
        }
    },
    crafting: {
        carpentry: {
            miscellaneous: {
                boards: {
                    graphic: '0x1BD7',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.saw',
                        refill: {
                            resources: [{ item: 'gameObject.resources.logs', count: 2 }]
                        },
                        menu: {
                            name: 'Carpentry',
                            selections: ['Miscellaneous', 'Boards']
                        },
                        outputCount: 3
                    }
                },
                krabiceKadi: {
                    graphic: '0x185E',
                    color: '0x07E0',
                    make: {
                        tool: 'gameObject.tools.saw',
                        refill: {
                            resources: [{ item: 'gameObject.resources.logs', count: 2 }],
                            crafting: [{ item: 'gameObject.crafting.tinkering.containers.kadNaPotiony', count: 20 }]
                        },
                        menu: {
                            name: 'Carpentry',
                            selections: ['Miscellaneous', 'Krabice kadi']
                        }
                    }
                }
            },
            containersAndParts: {
                barrelLid: {
                    graphic: '0x1DB8',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.saw',
                        refill: {
                            resources: [{ item: 'gameObject.resources.logs', count: 1 }],
                            crafting: [{ item: 'gameObject.crafting.carpentry.miscellaneous.boards', count: 2 }]
                        },
                        menu: {
                            name: 'Carpentry',
                            selections: ['Containers & Cont. parts', 'Barrel Lid']
                        }
                    }
                },
                barrelStaves: {
                    graphic: '0x1EB1',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.saw',
                        refill: {
                            resources: [{ item: 'gameObject.resources.logs', count: 3 }]
                        },
                        menu: {
                            name: 'Carpentry',
                            selections: ['Containers & Cont. parts', 'Barrel Staves']
                        }
                    }
                },
                formaNaLahve: {
                    graphic: '0x0E7F',
                    color: '0x0909',
                    make: {
                        tool: 'gameObject.tools.saw',
                        refill: {
                            resources: [{ item: 'gameObject.resources.logs', count: 1 }],
                            crafting: [
                                { item: 'gameObject.crafting.carpentry.containersAndParts.barrelLid', count: 2 },
                                { item: 'gameObject.crafting.carpentry.containersAndParts.barrelStaves', count: 2 },
                            ]
                        },
                        menu: {
                            name: 'Carpentry',
                            selections: ['Containers & Cont. parts', 'Forma na lahve']
                        }
                    }
                },
                washBasin: {
                    graphic: '0x1008',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.saw',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.logs', count: 1 },
                                { item: 'gameObject.resources.ingots.iron', count: 2 },
                                { item: 'gameObject.resources.pitcherOfWater', count: 1 },
                            ],
                            crafting: [
                                { item: 'gameObject.crafting.carpentry.miscellaneous.boards', count: 2 },
                                { item: 'gameObject.crafting.tinkering.parts.nails', count: 2 },
                            ]
                        },
                        menu: {
                            name: 'Carpentry',
                            selections: ['Containers & Cont. parts', 'Wash Basin']
                        }
                    }
                },
                woodenBox: {
                    graphic: '0x0E7D',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.saw',
                        refill: {
                            resources: [{ item: 'gameObject.resources.logs', count: 4 }],
                            crafting: [
                                { item: 'gameObject.crafting.tinkering.parts.hinge', count: 2 },
                                { item: 'gameObject.crafting.tinkering.parts.nails', count: 1 },
                            ]
                        },
                        menu: {
                            name: 'Carpentry',
                            selections: ['Containers & Cont. parts', 'Wooden Box']
                        }
                    }
                }
            },
            deedToShips: {
                deedToSmallShip: {
                    graphic: '0x14F1',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.saw',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.logs', count: 30 },
                                { item: 'gameObject.resources.foldedCloth', count: 20 },
                            ],
                            crafting: [
                                { item: 'gameObject.crafting.tinkering.parts.hinge', count: 20 },
                                { item: 'gameObject.crafting.tinkering.parts.nails', count: 35 },
                                { item: 'gameObject.crafting.carpentry.miscellaneous.boards', count: 250 },
                            ]
                        },
                        menu: {
                            name: 'Carpentry',
                            selections: ['Deeds to Ships', 'Deed to a small ship']
                        }
                    }
                }
            }
        },
        tinkering: {
            parts: {
                nails: {
                    graphic: '0x102E',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [{ item: 'gameObject.resources.ingots.iron', count: 1 }]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Parts', 'Nails']
                        }
                    }
                },
                barrelHoops: {
                    graphic: '0x10E1',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.copper', count: 1 },
                                { item: 'gameObject.resources.ingots.iron', count: 1 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Parts', 'Barrel Hoops']
                        }
                    }
                },
                hinge: {
                    graphic: '0x1055',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [{ item: 'gameObject.resources.ingots.iron', count: 1 }]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Parts', 'Hinge']
                        }
                    }
                },
                springs: {
                    graphic: '0x105D',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [{ item: 'gameObject.resources.ingots.iron', count: 1 }]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Parts', 'Springs']
                        }
                    }
                },
                gears: {
                    graphic: '0x1053',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [{ item: 'gameObject.resources.ingots.iron', count: 1 }]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Parts', 'Gears']
                        }
                    }
                }
            },
            wires: {
                iron: {
                    graphic: '0x1876',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [{ item: 'gameObject.resources.ingots.iron', count: 2 }]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Iron Wire']
                        }
                    }
                },
                vlasec: {
                    graphic: '0x0FA0',
                    color: '0x02B3',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.iron', count: 1 },
                                { item: 'gameObject.resources.thread', count: 4 },
                            ],
                            crafting: [{ item: 'gameObject.crafting.tinkering.wires.ironString', count: 2 }]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Vlasec']
                        }
                    }
                },
                ironString: {
                    graphic: '0x1420',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [{ item: 'gameObject.resources.ingots.iron', count: 1 }],
                            crafting: [{ item: 'gameObject.crafting.tinkering.wires.iron', count: 1 }]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Iron String']
                        }
                    }
                },
                copper: {
                    graphic: '0x1879',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.copper', count: 2 },
                                { item: 'gameObject.resources.ingots.iron', count: 2 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Copper Wire']
                        }
                    }
                },
                rose: {
                    graphic: '0x1876',
                    color: '0x0665',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.rose', count: 2 },
                                { item: 'gameObject.resources.ingots.iron', count: 2 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Rose Wire']
                        }
                    }
                },
                silver: {
                    graphic: '0x1877',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.silver', count: 2 },
                                { item: 'gameObject.resources.ingots.iron', count: 2 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Silver Wire']
                        }
                    }
                },
                gold: {
                    graphic: '0x1878',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.gold', count: 2 },
                                { item: 'gameObject.resources.ingots.iron', count: 2 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Gold Wire']
                        }
                    }
                },
                shadow: {
                    graphic: '0x1876',
                    color: '0x0770',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.shadow', count: 2 },
                                { item: 'gameObject.resources.ingots.iron', count: 2 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Shadow Wire']
                        }
                    }
                },
                blood: {
                    graphic: '0x1876',
                    color: '0x04C2',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.blood', count: 2 },
                                { item: 'gameObject.resources.ingots.iron', count: 2 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Blood Rock Wire']
                        }
                    }
                },
                black: {
                    graphic: '0x1876',
                    color: '0x0455',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.black', count: 2 },
                                { item: 'gameObject.resources.ingots.iron', count: 2 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Black Rock Wire']
                        }
                    }
                },
                mytheril: {
                    graphic: '0x1876',
                    color: '0x052D',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.mytheril', count: 2 },
                                { item: 'gameObject.resources.ingots.iron', count: 2 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Mytheril Wire']
                        }
                    }
                }
            },
            containers: {
                bottle: {
                    graphic: '0x0F0E',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.logs', count: 2 },
                                { item: 'gameObject.resources.ore.anyOre', count: 5 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Bottle']
                        }
                    }
                },
                kadNaPotiony: {
                    graphic: '0x1843',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.logs', count: 2 },
                                { item: 'gameObject.resources.ore.iron', count: 2 },
                                { item: 'gameObject.resources.ingots.bronze', count: 1 },
                                { item: 'gameObject.resources.ingots.iron', count: 1 },
                            ],
                            crafting: [
                                { item: 'gameObject.crafting.carpentry.containersAndParts.formaNaLahve', count: 1 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Kad na potiony']
                        }
                    }
                },
                metalchest: {
                    graphic: '0x09AB',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.logs', count: 2 },
                                { item: 'gameObject.resources.ingots.shadow', count: 20 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Metal Chest']
                        }
                    }
                },
                goldChest: {
                    graphic: '0x0E40',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.logs', count: 2 },
                                { item: 'gameObject.resources.ingots.gold', count: 5 },
                                { item: 'gameObject.resources.ingots.iron', count: 15 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Gold Chest']
                        }
                    }
                },
                goldenBoxW: {
                    graphic: '0x0E80',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.logs', count: 5 },
                                { item: 'gameObject.resources.ingots.gold', count: 5 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Golden Box (W)']
                        }
                    }
                },
                goldenBoxN: {
                    graphic: '0x09A8',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.logs', count: 5 },
                                { item: 'gameObject.resources.ingots.gold', count: 5 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Golden Box (N)']
                        }
                    }
                },
                animalBox: {
                    graphic: '0x09A8',
                    color: '0x051E',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.logs', count: 5 },
                                { item: 'gameObject.resources.furs', count: 5 },
                            ],
                            crafting: [{ item: 'gameObject.crafting.tinkering.containers.goldenBoxW', count: 1 }]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Animal Box']
                        }
                    }
                },
                secureChestN: {
                    graphic: '0x14F0',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.logs', count: 2 },
                                { item: 'gameObject.resources.ingots.gold', count: 5 },
                                { item: 'gameObject.resources.ingots.iron', count: 15 },
                                { item: 'gameObject.resources.stones.diamonds', count: 2 },
                                { item: 'gameObject.resources.stones.tourmalines', count: 2 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Secure Chest (N)']
                        }
                    }
                },
                secureChestW: {
                    graphic: '0x14F0',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.logs', count: 2 },
                                { item: 'gameObject.resources.ingots.gold', count: 5 },
                                { item: 'gameObject.resources.ingots.iron', count: 15 },
                                { item: 'gameObject.resources.stones.diamonds', count: 2 },
                                { item: 'gameObject.resources.stones.tourmalines', count: 2 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Secure Chest (W)']
                        }
                    }
                },
                doubleSecureChestN: {
                    graphic: '0x14F0',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.logs', count: 2 },
                                { item: 'gameObject.resources.ingots.gold', count: 5 },
                                { item: 'gameObject.resources.ingots.iron', count: 15 },
                                { item: 'gameObject.resources.stones.diamonds', count: 2 },
                                { item: 'gameObject.resources.stones.rubies', count: 4 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Double Secure Chest']
                        }
                    }
                },
                doubleSecureChestW: {
                    graphic: '0x14F0',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.logs', count: 2 },
                                { item: 'gameObject.resources.ingots.gold', count: 5 },
                                { item: 'gameObject.resources.ingots.iron', count: 15 },
                                { item: 'gameObject.resources.stones.diamonds', count: 2 },
                                { item: 'gameObject.resources.stones.rubies', count: 4 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Double Secure Chest']
                        }
                    }
                },
                guildSecureChestW: {
                    graphic: '0x14F0',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.logs', count: 5 },
                                { item: 'gameObject.resources.ingots.gold', count: 5 },
                                { item: 'gameObject.resources.ingots.copper', count: 10 },
                                { item: 'gameObject.resources.ingots.iron', count: 15 },
                                { item: 'gameObject.resources.ingots.mytheril', count: 1 },
                                { item: 'gameObject.resources.stones.diamonds', count: 1 },
                                { item: 'gameObject.resources.stones.citrines', count: 2 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Guild Secure Chest']
                        }
                    }
                },
                univerzalAnimalBox: {
                    graphic: '0x09A8',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.logs', count: 5 },
                                { item: 'gameObject.resources.furs', count: 5 },
                            ],
                            crafting: [{ item: 'gameObject.crafting.tinkering.containers.animalBox', count: 1 }]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Univerzal Animal Box']
                        }
                    }
                }
            },
            tools: {
                apprenticesPoisoningKit: {
                    graphic: '0x1837',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.mytheril', count: 5 },
                                { item: 'gameObject.resources.stones.citrines', count: 5 },
                                { item: 'gameObject.resources.stones.diamonds', count: 5 },
                                { item: 'gameObject.resources.stones.sapphires', count: 5 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Tools', "Apprentice's Poisoning Kit (trenink)"]
                        }
                    }
                },
                lockpickX50: {
                    graphic: '0x14FB',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.iron', count: 1 },
                                { item: 'gameObject.resources.ingots.bronze', count: 50 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Tools', '50x Lockpick']
                        },
                        outputCount: 50
                    }
                },
                lockpickX1: {
                    graphic: '0x14FB',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.iron', count: 1 },
                                { item: 'gameObject.resources.ingots.bronze', count: 2 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Tools', 'Lockpick']
                        },
                        outputCount: 1
                    }
                },
                spulkaDratu: {
                    graphic: '0x1420',
                    color: '0x08B0',
                    make: {
                        tool: 'gameObject.tools.silverHammer',
                        toolTarget: 'gameObject.resources.ingots.iron',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.iron', count: 2 },
                            ],
                            crafting: [{ item: 'gameObject.crafting.tinkering.wires.ironString', count: 25 }]
                        },
                        menu: {
                            name: 'Blacksmithing',
                            selections: ['Tools', 'Spulka dratu']
                        }
                    }
                },
                velkaSpulkaDratu: {
                    graphic: '0x1420',
                    color: '0x0B49',
                    make: {
                        tool: 'gameObject.tools.silverHammer',
                        toolTarget: 'gameObject.resources.ingots.iron',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.iron', count: 2 },
                            ],
                            crafting: [{ item: 'gameObject.crafting.blacksmithing.tools.spulkaDratu', count: 10 }]
                        },
                        menu: {
                            name: 'Blacksmithing',
                            selections: ['Tools', 'Velka spulka dratu']
                        }
                    }
                }
            },
            keys: {
                magicKey: {
                    graphic: '0x1837',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.copper', count: 5 },
                                { item: 'gameObject.resources.ingots.gold', count: 5 },
                                { item: 'gameObject.resources.ingots.silver', count: 5 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Keys', 'Magic Key']
                        }
                    }
                }
            },
            specialItems: {
                magicBall: {
                    graphic: '0x0E2D',
                    color: '0x0B86',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.gold', count: 1 },
                                { item: 'gameObject.resources.ingots.iron', count: 1 },
                                { item: 'gameObject.resources.stones.pieceOfAmber', count: 1 },
                                { item: 'gameObject.resources.stones.starSapphire', count: 3 },
                            ],
                            crafting: [
                                { item: 'gameObject.crafting.tinkering.parts.springs', count: 2 },
                                { item: 'gameObject.crafting.tinkering.wires.copper', count: 5 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Special Items', 'Magic Ball (10 charges)']
                        }
                    }
                },
                crystalBall: {
                    graphic: '0x0E2D',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.gold', count: 5 },
                                { item: 'gameObject.resources.ingots.iron', count: 1 }
                            ],
                            crafting: [
                                { item: 'gameObject.crafting.tinkering.wires.silver', count: 5 }
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Special Items', 'Crystal Ball (1 charge)']
                        }
                    }
                },
                rechargeCrystal1: {
                    graphic: '0x1F1C',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.gold', count: 2 },
                                { item: 'gameObject.resources.stones.amethyst', count: 2 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Special Items', 'Recharge Crystal +1']
                        }
                    }
                },
                rechargeCrystal3: {
                    graphic: '0x1F1C',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.gold', count: 3 },
                                { item: 'gameObject.resources.stones.citrines', count: 3 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Special Items', 'Recharge Crystal +3']
                        }
                    }
                },
                rechargeCrystal5: {
                    graphic: '0x1F1C',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.gold', count: 5 },
                                { item: 'gameObject.resources.stones.diamonds', count: 5 },
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Special Items', 'Recharge Crystal +5']
                        }
                    }
                },
                starStoneWeaponForm: {
                    graphic: '0x183A',
                    color: '0x00FE',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.gold', count: 10 },
                                { item: 'gameObject.resources.ingots.silver', count: 10 },
                                { item: 'gameObject.resources.ingots.iron', count: 2 },
                                { item: 'gameObject.resources.magicCoins', count: 500 }
                            ],
                            crafting: [
                                { item: 'gameObject.crafting.tinkering.wires.gold', count: 10 }
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Special Items', 'Star Stone Weapon Form']
                        }
                    }
                }
            }
        },
        tailoring: {
            headwear: {
                bandana: {
                    graphic: '0x153F',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.sewingKit',
                        toolTarget: 'gameObject.resources.foldedCloth',
                        refill: {
                            resources: [{ item: 'gameObject.resources.foldedCloth', count: 1 }]
                        },
                        menu: {
                            name: 'Cloth',
                            selections: ['Headwear', 'Bandana']
                        }
                    }
                }
            },
            footwear: {
                sandals: {
                    graphic: '0x170D',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.sewingKit',
                        toolTarget: 'gameObject.resources.pilesOfHides',
                        refill: {
                            resources: [{ item: 'gameObject.resources.pilesOfHides', count: 4 }]
                        },
                        menu: {
                            name: 'Leather',
                            selections: ['Footwear', 'Sandals']
                        }
                    }
                }
            }
        },
        blacksmithing: {
            tools: {
                petardCauldron: {
                    graphic: '0x0990',
                    color: '0x04B1',
                    make: {
                        tool: 'gameObject.tools.silverHammer',
                        toolTarget: 'gameObject.resources.ingots.iron',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.iron', count: 10 },
                                { item: 'gameObject.resources.ingots.rose', count: 6 },
                                { item: 'gameObject.resources.ingots.blood', count: 1 },
                            ],
                            crafting: [{ item: 'gameObject.crafting.tinkering.wires.iron', count: 5 }]
                        },
                        menu: {
                            name: 'Blacksmithing',
                            selections: ['Tools', 'Petard Cauldron']
                        }
                    }
                },
                sekera: {
                    graphic: '0x0F43',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.silverHammer',
                        toolTarget: 'gameObject.resources.ingots.iron',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.iron', count: 4 },
                                { item: 'gameObject.resources.logs', count: 1 },
                            ]
                        },
                        menu: {
                            name: 'Blacksmithing',
                            selections: ['Tools', 'Hatchet']
                        }
                    }
                },
                krumpac: {
                    graphic: '0x0E85',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.silverHammer',
                        toolTarget: 'gameObject.resources.ingots.iron',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.iron', count: 4 },
                                { item: 'gameObject.resources.logs', count: 1 },
                            ]
                        },
                        menu: {
                            name: 'Blacksmithing',
                            selections: ['Tools', 'Pick axe']
                        }
                    }
                },
                bloodSphere: {
                    graphic: '0x0E2D',
                    color: '0x0846',
                    make: {
                        tool: 'gameObject.tools.silverHammer',
                        toolTarget: 'gameObject.resources.ingots.iron',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.iron', count: 5 },
                                { item: 'gameObject.resources.fairyDust', count: 1 },
                            ],
                            crafting: [
                                { item: 'gameObject.crafting.tinkering.wires.rose', count: 15 },
                                { item: 'gameObject.crafting.tinkering.wires.blood', count: 15 },
                            ]
                        },
                        menu: {
                            name: 'Blacksmithing',
                            selections: ['Tools', 'Blood Rock Sphere']
                        }
                    }
                },
                blackSphere: {
                    graphic: '0x0E2D',
                    color: '0x0B15',
                    make: {
                        tool: 'gameObject.tools.silverHammer',
                        toolTarget: 'gameObject.resources.ingots.iron',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.iron', count: 5 },
                                { item: 'gameObject.resources.fairyDust', count: 1 },
                            ],
                            crafting: [
                                { item: 'gameObject.crafting.tinkering.wires.shadow', count: 15 },
                                { item: 'gameObject.crafting.tinkering.wires.black', count: 15 },
                            ]
                        },
                        menu: {
                            name: 'Blacksmithing',
                            selections: ['Tools', 'Black Rock Sphere']
                        }
                    }
                },
                mytherilSphere: {
                    graphic: '0x0E2D',
                    color: '0x0B8A',
                    make: {
                        tool: 'gameObject.tools.silverHammer',
                        toolTarget: 'gameObject.resources.ingots.iron',
                        refill: {
                            resources: [
                                { item: 'gameObject.resources.ingots.iron', count: 5 },
                                { item: 'gameObject.resources.fairyDust', count: 1 },
                                { item: 'gameObject.resources.soulShard', count: 1 },
                            ],
                            crafting: [
                                { item: 'gameObject.crafting.tinkering.wires.gold', count: 15 },
                                { item: 'gameObject.crafting.tinkering.wires.mytheril', count: 15 },
                            ]
                        },
                        menu: {
                            name: 'Blacksmithing',
                            selections: ['Tools', 'Mytheril Sphere']
                        }
                    }
                }
            },
            ironWeapons: {
                swordsAndBlades: {
                    dagger: {
                        graphic: '0x0F51',
                        color: '0x0000',
                        make: {
                            tool: 'gameObject.tools.silverHammer',
                            toolTarget: 'gameObject.resources.ingots.iron',
                            refill: {
                                resources: [{ item: 'gameObject.resources.ingots.iron', count: 1 }]
                            },
                            menu: {
                                name: 'Blacksmithing',
                                selections: [
                                    'Iron Weapons',
                                    { item: 'Swords & Blades', menu: 'Iron Swords & Blades' },
                                    'Dagger',
                                ]
                            }
                        }
                    }
                }
            },
            veriteWeapons: {
                veriteSpearsAndForks: {
                    veriteSpear: {
                        graphic: '0x0F62',
                        color: '0x08A1',
                        make: {
                            tool: 'gameObject.tools.silverHammer',
                            toolTarget: 'gameObject.resources.ingots.iron',
                            refill: {
                                resources: [
                                    { item: 'gameObject.resources.ingots.iron', count: 2 },
                                    { item: 'gameObject.resources.ingots.verite', count: 12 }
                                ]
                            },
                            menu: {
                                name: 'Blacksmithing',
                                selections: [
                                    'Verite Weapons',
                                    { item: 'Verite Spears & Forks', menu: 'Verite Spears & Forks' },
                                    'Verite Spear',
                                ]
                            }
                        }
                    }
                }
            }
        }
    },
    potions: {
        tmr: {
            name: 'Total Mana Refresh Potion',
            graphic: '0x0F09',
            color: '0x0003',
            bag: {
                x: 25,
                y: 5
            },
            kad: {
                name: 'Nadoba s Total Mana Refresh',
                graphic: '0x1843',
                color: '0x0003'
            },
            gmMortarSelection: 'Total Mana Refresh (612 Eyes of Newt nebo 306 Blue Eyes of Newt)',
            alchemySelection: 'Total Mana Refresh',
            reagent: 'eyes_of_newt',
            reagentsCount: 6
        },
        mr: {
            name: 'Mana Refresh Potion',
            graphic: '0x0F09',
            color: '0x0005',
            kad: {
                name: 'Nadoba s Mana Refresh',
                graphic: '0x1843',
                color: '0x0005'
            },
            alchemySelection: 'Mana Refresh',
            reagent: 'eyes_of_newt',
            reagentsCount: 3
        },
        gb: {
            name: 'Greater Blood potion',
            graphic: '0x0F0C',
            color: '0x0025',
            kad: {
                name: 'Nadoba s Greater Blood',
                graphic: '0x1843',
                color: '0x0025'
            }
        },
        gh: {
            name: 'Greater Heal Potion',
            graphic: '0x0F0C',
            color: '0x0000',
            bag: {
                x: 25,
                y: 15
            },
            kad: {
                name: 'Nadoba s Greater Heal',
                graphic: '0x1843',
                color: '0x08A7'
            },
            gmMortarSelection: 'Greater Heal (714 Ginsengs)',
            alchemySelection: 'Greater Heal',
            reagent: 'gi',
            reagentsCount: 7
        },
        gs: {
            name: 'Greater Strength Potion',
            graphic: '0x0F09',
            color: '0x0000',
            bag: {
                x: 25,
                y: 25
            },
            kad: {
                name: 'Nadoba s Greater Strength',
                graphic: '0x1843',
                color: '0x0481'
            },
            gmMortarSelection: 'Greater Strength (612 Mandrake Roots)',
            alchemySelection: 'Greater Strength',
            reagent: 'mr',
            reagentsCount: 6
        },
        tr: {
            name: 'Total Refresh potion',
            graphic: '0x0F0B',
            color: '0x0000',
            bag: {
                x: 80,
                y: 5
            },
            kad: {
                name: 'Nadoba s Total Refresh',
                graphic: '0x1843',
                color: '0x014D'
            },
            gmMortarSelection: 'Total Refresh (510 Black Pearls)',
            alchemySelection: 'Total Refresh',
            reagent: 'bp',
            reagentsCount: 5
        },
        gc: {
            name: 'Greater Cure Potion',
            graphic: '0x0F07',
            color: '0x0000',
            bag: {
                x: 80,
                y: 15
            },
            kad: {
                name: 'Nadoba s Greater Cure',
                graphic: '0x1843',
                color: '0x0842'
            },
            gmMortarSelection: 'Greater Cure (612 Garlics)',
            alchemySelection: 'Greater Cure',
            reagent: 'ga',
            reagentsCount: 6
        },
        dp: {
            name: 'Deathly Poison Potion',
            graphic: '0x0F0A',
            color: '0x0000',
            bag: {
                x: 80,
                y: 15
            },
            kad: {
                name: 'Nadoba s Deadly Poison',
                graphic: '0x1843',
                color: '0x08A2'
            },
            gmMortarSelection: 'Deadly Poison (1020 Nightshades)',
            alchemySelection: 'Deadly Poison',
            reagent: 'ns',
            reagentsCount: 10
        },
        lc: {
            graphic: '0x0F07',
            color: '0x0000',
            bag: {
                x: 80,
                y: 15
            },
            kad: {
                graphic: '0x1843',
                color: '0x0091'
            },
            alchemySelection: 'Lesser Cure Potion',
            reagent: 'ga',
            reagentsCount: 2
        },
        ns: {
            name: 'Nightsight Potion',
            graphic: '0x0F06',
            color: '0x0000',
            kad: {
                name: 'Nadoba s Nightsight',
                graphic: '0x1843',
                color: '0x03C4'
            },
            alchemySelection: 'Nightsight',
            reagent: 'ss',
            reagentsCount: 2
        },
        ag: {
            name: 'Agility Potion',
            graphic: '0x0F08',
            color: '0x0000',
            kad: {
                name: 'Nadoba s Agility',
                graphic: '0x1843',
                color: '0x00BF'
            },
            alchemySelection: 'Agility Potion',
            reagent: 'bm',
            reagentsCount: 2
        },
        ga: {
            name: 'Greater Agility Potion',
            graphic: '0x0F08',
            color: '0x0000',
            kad: {
                name: 'Nadoba s Greater Agility',
                graphic: '0x1843',
                color: '0x00BF'
            },
            gmMortarSelection: 'Greater Agility (306 Blood Mosses)',
            alchemySelection: 'Greater Agility Potion',
            reagent: 'bm',
            reagentsCount: 3
        },
        shrink: {
            name: 'Shrink',
            graphic: '0x0F09',
            color: '0x045E',
            bag: {
                x: 80,
                y: 25
            },
            kad: {
                name: 'Nadoba s Shrink',
                graphic: '0x1843',
                color: '0x0724'
            },
            gmMortarSelection: 'Shrink (306 Batwings)',
            alchemySelection: 'Shrink',
            reagent: 'batwing',
            reagentsCount: 3
        },
        lavabomb: {
            name: 'Lava Bomb',
            graphic: '0x0F0D',
            color: '0x000E',
            kad: {
                name: 'Nadoba s Lava Bomb',
                graphic: '0x1843',
                color: '0x000E'
            },
            gmMortarSelection: 'Lava Bomb (612 Volcanic Ashes)',
            alchemySelection: 'Lava Bomb',
            reagent: 'volcanic_ash',
            reagentsCount: 6
        },
        invis: {
            name: 'Invisibility',
            graphic: '0x0F09',
            color: '0x0B77',
            kad: {
                graphic: '0x1843',
                color: '0x0B77'
            },
            gmMortarSelection: "Invisibility (408 Wyrm's Hearts)",
            alchemySelection: 'Invisibility',
            reagent: 'wyrms_heart',
            reagentsCount: 4
        },
        lp: {
            graphic: '0x0F0A',
            color: '0x0000',
            kad: {
                graphic: '0x1843',
                color: '0x089F'
            },
            alchemySelection: 'Lesser Poison',
            reagent: 'ns',
            reagentsCount: 2
        },
        halucination: {
            name: 'Hallucination',
            graphic: '0x0F06',
            color: '0x0B90',
            kad: {
                graphic: '0x1843',
                color: '0x0B90'
            },
            alchemySelection: 'Hallucination',
            reagent: 'serpent_scales',
            reagentsCount: 6
        },
        esenceRefresh: {
            graphic: '0x0EFE',
            color: '0x005B',
            bag: {
                x: 0,
                y: 0
            }
        },
        jabara: {
            graphic: '0x0F01',
            color: '0x005B',
            kad: {
                graphic: '0x0C67',
                color: '0x049B'
            },
            bag: {
                x: 5,
                y: 0
            }
        },
        cinchona: {
            graphic: '0x0F02',
            color: '0x0835',
            kad: {
                graphic: '0x0C41',
                color: '0x0BA9'
            },
            bag: {
                x: 10,
                y: 0
            }
        }
    },
    books: {
        unholySpellbook: {
            graphic: '0x0EFA',
            color: '0x0413',
            bag: {
                x: 142,
                y: 5
            }
        },
        highMagicSpellBook: {
            graphic: '0x0EFA',
            color: '0x0021',
            bag: {
                x: 142,
                y: 5
            }
        },
        bookOfDead: {
            graphic: '0x0EFA',
            color: '0x0455',
            bag: {
                x: 132,
                y: 5
            }
        },
        travelBook: {
            graphic: '0x0FEF',
            color: '0x0482',
            bag: {
                x: 122,
                y: 5
            }
        },
        runeBook: {
            graphic: '0x0FF0',
            color: '0x08A5',
            bag: {
                x: 112,
                y: 5
            }
        },
        cestovniKniha: {
            graphic: '0x22C5',
            color: '0x0000',
            bag: {
                x: 117,
                y: 5
            }
        }
    },
    taming: {
        staffs: {
            training: {
                graphic: '0x13F4',
                color: '0x04B9'
            },
            taming: {
                graphic: '0x13F4',
                color: '0x076B'
            },
            tamingShrink: {
                graphic: '0x13F4',
                color: '0x096D'
            }
        }
    },
    music: {
        harp: {
            graphic: '0x0EB2',
            color: '0x0000'
        },
        lute: {
            graphic: '0x0EB3',
            color: '0x0000'
        },
        drum: {
            graphic: '0x0E9C',
            color: '0x0000'
        }
    },
    rings: {
        rr: {
            graphic: '0x108A',
            color: '0x0496',
            bag: {
                x: 50,
                y: 35
            }
        },
        grr: {
            graphic: '0x108A',
            color: '0x0B21',
            bag: {
                x: 53,
                y: 35
            }
        },
        grr2: {
            graphic: '0x108A',
            color: '0x0B98',
            bag: {
                x: 56,
                y: 35
            }
        },
        ggr: {
            graphic: '0x108A',
            color: '0x0000',
            bag: {
                x: 59,
                y: 35
            }
        }
    },
    neklances: {
        titan: {
            graphic: '0x1088',
            color: '0x0485',
            bag: {
                x: 64,
                y: 35
            }
        }
    },
    scrolls: {
        blank: {
            graphic: '0x0E34',
            color: '0x0000'
        },
        standard: {
            kvf: {
                graphic: '0x1F5F',
                color: '0x0000',
                timer: 5000,
                minMana: 20
            },
            bolt: {
                graphic: '0x1F56',
                color: '0x0000'
            },
            pog: {
                graphic: '0x1F4A',
                color: '0x0000',
                timer: 4000,
                minMana: 5
            },
            ijs: {
                graphic: '0x1F50',
                color: '0x0000',
                timer: 9600,
                minMana: 7
            },
            port: {
                graphic: '0x1F42',
                color: '0x0000'
            },
            ef: {
                graphic: '0x1F5E',
                color: '0x0000'
            },
            para: {
                graphic: '0x1F52',
                color: '0x0000',
                timer: 4000,
                minMana: 7
            },
            wos: {
                graphic: '0x1F44',
                color: '0x0000'
            },
            ivm: {
                graphic: '0x1F49',
                color: '0x0000'
            },
            ress: {
                graphic: '0x1F67',
                color: '0x0000',
                minMana: 25
            },
            recall: {
                graphic: '0x1F4C',
                color: '0x0000'
            },
            heal: {
                graphic: '0x1F31',
                color: '0x0000',
                minMana: 3
            },
            react: {
                graphic: '0x1F2D',
                color: '0x0000'
            },
            str: {
                graphic: '0x1F3C',
                color: '0x0000'
            },
            bless: {
                graphic: '0x1F3D',
                color: '0x0000'
            },
            pf: {
                graphic: '0x1F5B',
                color: '0x0000'
            },
            dispel: {
                graphic: '0x1F55',
                color: '0x0000'
            },
            bs: {
                graphic: '0x1F4D',
                color: '0x0000'
            },
            protect: {
                graphic: '0x1F3B',
                color: '0x0000'
            },
            eelm: {
                graphic: '0x1F6A',
                color: '0x0000'
            }
        },
        necro: {
            vfp: {
                name: 'Fire Bolt scroll',
                graphic: '0x0E35',
                color: '0x0070',
                minMana: 20
            },
            haluze: {
                graphic: '0x0E35',
                color: '0x0010'
            },
            kalnox: {
                name: 'Summon Undead scroll',
                graphic: '0x0E35',
                color: '0x0005'
            }
        }
    },
    regy: {
        mr: {
            graphic: '0x0F86',
            bag: {
                x: 20,
                y: 180
            }
        },
        ss: {
            graphic: '0x0F8D',
            bag: {
                x: 35,
                y: 180
            }
        },
        bm: {
            graphic: '0x0F7B',
            bag: {
                x: 50,
                y: 180
            }
        },
        bp: {
            graphic: '0x0F7A',
            bag: {
                x: 61,
                y: 180
            }
        },
        ga: {
            graphic: '0x0F84',
            bag: {
                x: 80,
                y: 180
            }
        },
        gi: {
            graphic: '0x0F85',
            bag: {
                x: 92,
                y: 180
            }
        },
        ns: {
            graphic: '0x0F88',
            bag: {
                x: 110,
                y: 180
            }
        },
        sa: {
            graphic: '0x0F8C',
            bag: {
                x: 125,
                y: 180
            }
        }
    },
    necroRegy: {
        executioners_cap: {
            graphic: '0x0F83',
            bag: {
                x: 155,
                y: 180
            }
        },
        blackmoor: {
            graphic: '0x0F79',
            bag: {
                x: 155,
                y: 180
            }
        },
        fertile_dirt: {
            graphic: '0x0F81',
            bag: {
                x: 155,
                y: 180
            }
        },
        obsidian: {
            graphic: '0x0F89',
            bag: {
                x: 155,
                y: 180
            }
        },
        serpent_scales: {
            graphic: '0x0F8E',
            bag: {
                x: 155,
                y: 180
            }
        },
        bloodspawn: {
            graphic: '0x0F7C',
            bag: {
                x: 155,
                y: 180
            }
        },
        deamon_blood: {
            graphic: '0x0F7D',
            bag: {
                x: 155,
                y: 180
            }
        },
        daemon_bones: {
            graphic: '0x0F80',
            bag: {
                x: 155,
                y: 180
            }
        },
        pumice: {
            graphic: '0x0F8B',
            bag: {
                x: 155,
                y: 180
            }
        },
        dragons_blood: {
            graphic: '0x0F82',
            bag: {
                x: 155,
                y: 180
            }
        },
        volcanic_ash: {
            graphic: '0x0F8F',
            bag: {
                x: 155,
                y: 180
            }
        },
        wyrms_hearts: {
            graphic: '0x0F91',
            bag: {
                x: 155,
                y: 180
            }
        },
        brimstone: {
            graphic: '0x0F7F',
            bag: {
                x: 155,
                y: 180
            }
        },
        batwings: {
            graphic: '0x0F78',
            bag: {
                x: 155,
                y: 180
            }
        },
        bones: {
            graphic: '0x0F7E',
            bag: {
                x: 155,
                y: 180
            }
        },
        eyes_of_newt: {
            graphic: '0x0F87',
            color: '0x0000',
            bag: {
                x: 155,
                y: 180
            }
        }
    },
    mystics: {
        flower: {
            name: 'Flower',
            graphic: '0x0DC3',
            color: '0x005B'
        },
        stone: {
            name: 'Stone',
            graphic: '0x136C',
            color: '0x0B94'
        },
        plant: {
            name: 'Stone',
            graphic: '0x0CB0',
            color: '0x0899'
        },
        leaf: {
            name: 'Leaf',
            graphic: '0x0DBD',
            color: '0x0B9F'
        },
        stick: {
            name: 'Stick',
            graphic: '0x1A9D',
            color: '0x0481'
        },
        beeds: {
            name: 'Beeds',
            graphic: '0x108B',
            color: '0x0BB5'
        },
        mushroom: {
            name: 'Mushroom',
            graphic: '0x0D16',
            color: '0x00A3'
        },
        ball: {
            name: 'Ball',
            graphic: '0x0E73',
            color: '0x0B9F'
        },
        crystal: {
            name: 'Crystal',
            graphic: '0x0F5A',
            color: '0x0044'
        }
    },
    fish: {
        modra: {
            graphic: '0x09CD',
            color: '0x084C'
        }
    },
    klamak: {
        lvl1: {
            bird: {
                graphic: '0x20EE',
                color: '0xFFFF'
            },
            giantRat: {
                graphic: '0x20D0',
                color: '0xFFFF'
            },
            rat: {
                graphic: '0x2123',
                color: '0xFFFF'
            },
            chicken: {
                graphic: '0x20D1',
                color: '0xFFFF'
            },
            rabbit: {
                graphic: '0x2125',
                color: '0x090C'
            }
        },
        lvl2: {
            squirrel: {
                graphic: '0x2D97',
                color: '0xFFFF'
            },
            cat: {
                graphic: '0x211B',
                color: '0xFFFF'
            },
            jackRabbit: {
                graphic: '0x2125',
                color: '0x0FFFF'
            },
            wolf: {
                graphic: '0x20EA',
                color: '0xFFFF'
            },
            goat: {
                graphic: '0x2108',
                color: '0xFFFF',
                gWidth: 41,
                gHeight: 36
            },
            dog: {
                graphic: '0x211C',
                color: '0xFFFF'
            },
            boar: {
                graphic: '0x2101',
                color: '0xFFFF'
            },
            bullFrog: {
                graphic: '0x2130',
                color: '0xFFFF'
            }
        },
        lvl3: {
            blackBear: {
                graphic: '0x2118',
                color: '0xFFFF'
            },
            bull: {
                graphic: '0x20EF',
                color: '0xFFFF'
            },
            hind: {
                graphic: '0x20D4',
                color: '0xFFFF'
            },
            hart: {
                graphic: '0x20D4',
                color: '0xFFFF'
            },
            gorilla: {
                graphic: '0x20F5',
                color: '0xFFFF'
            },
            sheep: {
                graphic: '0x20EB',
                color: '0xFFFF'
            },
            cow: {
                graphic: '0x2103',
                color: '0xFFFF'
            },
            brownBear: {
                graphic: '0x20CF',
                color: '0xFFFF'
            }
        },
        lvl4: {
            panther: {
                graphic: '0x2119',
                color: '0xFFFF'
            },
            cougar: {
                graphic: '0x2119',
                color: '0xFFFF'
            },
            eagle: {
                graphic: '0x211D',
                color: '0xFFFF'
            },
            timberWolf: {
                graphic: '0x20EA',
                color: '0xFFFF'
            }
        },
        lvl5: {
            leopard: {
                graphic: '0x2119',
                color: '0xFFFF'
            },
            polar: {
                graphic: '0x20E1',
                color: '0xFFFF'
            },
            grizzly: {
                graphic: '0x211E',
                color: '0xFFFF'
            },
            snake: {
                graphic: '0x20FC',
                color: '0xFFFF'
            },
            alligator: {
                graphic: '0x2131',
                color: '0xFFFF'
            }
        }
    },
    medic: {
        kpz: {
            graphic: '0x09B0',
            color: '0x0493'
        },
        kpzActive: {
            graphic: '0x09B0',
            color: '0x0494'
        }
    },
    poisonGuns: {
        spear: {
            graphic: '0x0F62',
            color: '0x08A1'
        },
        halberd: {
            graphic: '0x143E',
            color: '0x08A1'
        }
    },
    shields: {
        round: {
            metalShield: {
                graphic: '0x1B7B',
                color: '0xFFFF'
            },
            buckler: {
                graphic: '0x1B73',
                color: '0xFFFF'
            },
            woodenShield: {
                graphic: '0x1B7A',
                color: '0xFFFF'
            },
            bronzeShield: {
                graphic: '0x1B72',
                color: '0xFFFF'
            }
        },
        other: {
            metalKiteShield: {
                graphic: '0x1B74',
                color: '0xFFFF'
            },
            heaterShield: {
                graphic: '0x1B76',
                color: '0xFFFF'
            },
            woodenKiteShield: {
                graphic: '0x1B78',
                color: '0xFFFF'
            },
            lucerna: {
                graphic: '0x0A15',
                color: '0xFFFF'
            }
        }
    },
    weapons: {
        archery: {
            repeatingCrossbow: {
                graphic: '0x26C3',
                color: '0xFFFF'
            },
            crossbow: {
                graphic: '0x0F4F',
                color: '0xFFFF'
            },
            heawyCrossbow: {
                graphic: '0x13FC',
                color: '0xFFFF'
            },
            bow: {
                graphic: '0x13B1',
                color: '0xFFFF'
            },
            kratkyElfskyLuk: {
                graphic: '0x2D1F',
                color: '0xFFFF'
            }
        },
        swordsmanship: {
            halbert: {
                graphic: '0x143E',
                color: '0xFFFF'
            },
            bardiche: {
                graphic: '0x0F4D',
                color: '0xFFFF'
            },
            katana: {
                graphic: '0x13FE',
                color: '0xFFFF'
            },
            cutlass: {
                graphic: '0x1440',
                color: '0xFFFF'
            },
            vikingSword: {
                graphic: '0x13B9',
                color: '0xFFFF'
            },
            lba: {
                graphic: '0x13FA',
                color: '0xFFFF'
            },
            battleAxe: {
                graphic: '0x0F47',
                color: '0xFFFF'
            },
            longSword: {
                graphic: '0x0F60',
                color: '0xFFFF'
            },
            executionersAxe: {
                graphic: '0x0F45',
                color: '0xFFFF'
            },
            scimitar: {
                graphic: '0x13B5',
                color: '0xFFFF'
            },
            broadSword: {
                graphic: '0x0F5E',
                color: '0xFFFF'
            },
            axe: {
                graphic: '0x0F49',
                color: '0xFFFF'
            },
            doubleAxe: {
                graphic: '0x0F4B',
                color: '0xFFFF'
            },
            twoHandedAxe: {
                graphic: '0x1442',
                color: '0xFFFF'
            },
            bastardSword: {
                graphic: '0x13B9',
                color: '0xFFFF'
            },
            bow: {
                graphic: '0x13B1',
                color: '0xFFFF'
            },
            paladinsSword: {
                graphic: '0x26CE',
                color: '0xFFFF'
            },
            cleaver: {
                graphic: '0x0EC2',
                color: '0xFFFF'
            },
            slicer: {
                graphic: '0x2D23',
                color: '0xFFFF'
            },
            hatchet: {
                graphic: '0x0F43',
                color: '0xFFFF'
            },
            deamonBane: {
                graphic: '0x2D28',
                color: '0xFFFF'
            },
            warAxe: {
                graphic: '0x13AF',
                color: '0xFFFF'
            },
            machette: {
                graphic: '0x13AF',
                color: '0xFFFF'
            }
        },
        macefighting: {
            mace: {
                graphic: '0x0F5C',
                color: '0xFFFF'
            },
            maul: {
                graphic: '0x143A',
                color: '0xFFFF'
            },
            hammerPick: {
                graphic: '0x143C',
                color: '0xFFFF'
            },
            club: {
                graphic: '0x13B3',
                color: '0xFFFF'
            },
            warMace: {
                graphic: '0x1406',
                color: '0xFFFF'
            },
            warHammer: {
                graphic: '0x1438',
                color: '0xFFFF'
            },
            blackStaff: {
                graphic: '0x0DF0',
                color: '0xFFFF'
            }
        },
        fencing: {
            warFork: {
                graphic: '0x1404',
                color: '0xFFFF'
            },
            pithcFork: {
                graphic: '0x0E87',
                color: '0xFFFF'
            },
            spear: {
                graphic: '0x0F62',
                color: '0xFFFF'
            },
            kryss: {
                graphic: '0x1401',
                color: '0xFFFF'
            },
            kryss2: {
                graphic: '0x1400',
                color: '0xFFFF'
            },
            dagger: {
                graphic: '0x0F51',
                color: '0xFFFF'
            },
            shortSpear: {
                graphic: '0x1402',
                color: '0xFFFF'
            },
            guardiansLungbreaker: {
                graphic: '0x26c5',
                color: '0xFFFF'
            },
            drapy: {
                graphic: '0x27ab',
                color: '0xFFFF'
            }
        }
    }
};
var trackingFilter = {
    '0x2106': [],
    '0x2107': [],
    '0x20F9': ['Imp'],
    '0x20D9': ['Gargoyle'],
    '0x2100': []
};
function displayDrinkInfo(potionName) {
    var drinkTimer = 17500;
    var gsTimer = 130000;
    var time = 1000;
    Orion.Wait(time);
    while (Orion.Timer(TimersEnum.drink) >= 1000) {
        if (time >= drinkTimer) {
            Scripts.Utils.playerPrint("[ MUZES PIT ]", ColorEnum.green);
            break;
        }
        var addTime = 250;
        Orion.Wait(addTime);
        time += addTime;
    }
    if (potionName === PotionsEnum.gs) {
        while (Orion.Timer(TimersEnum.gs) >= 1000) {
            if (time >= gsTimer) {
                Scripts.Utils.playerPrint("[ konci GS ]", ColorEnum.orange);
                break;
            }
            var addTime = 250;
            Orion.Wait(addTime);
            time += addTime;
        }
    }
}
function scheduleClick(s) {
    Orion.Wait(350);
    Orion.Click(s);
}
function customStatusBarCallBack(s) {
    var code = CustomGumpResponse.ReturnCode();
    var serial = s.toString(16);
    if (code === CustomStatusBarEnum.close) {
        Scripts.Statusbar.close(serial);
    }
    else if (code === CustomStatusBarEnum.click) {
        if (Orion.HaveTarget()) {
            Orion.TargetObject(serial);
            Orion.CancelTarget();
            Orion.AddObject('lasttarget', serial);
            return;
        }
        Orion.Terminate('scheduleClick');
        Orion.Exec('scheduleClick', true, [s]);
        if (Player.WarMode()) {
            if (Orion.Timer(s) === -1 || Orion.Timer(s) > 300) {
                Scripts.Utils.resetTimer(s);
            }
            else {
                Orion.Terminate('scheduleClick');
                Orion.Attack(s);
            }
        }
    }
}
function tbGumpUpdateLoop() {
    while (true) {
        Scripts.TbGump.searchTextAndUpdateGump();
        Orion.Wait(500);
    }
}
function tbCustomGumpCallBack() {
    var code = CustomGumpResponse.ReturnCode();
    if (code === 0) {
        Orion.Terminate('tbGumpUpdateLoop');
    }
}
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function version() {
    Orion.Print(-1, '+-------------');
    Orion.Print(-1, 'msviha/orionuo');
    Orion.Print(-1, 'version 1.3.0');
    Orion.Print(-1, '-------------+');
}
function Autostart() {
    var _a;
    version();
    Orion.ClearJournal();
    Shared.AddArray('customStatusBars', []);
    Shared.AddVar('ws', false);
    var autoRename = config === null || config === void 0 ? void 0 : config.autoHandlers.autoRename.enabled;
    var autoHandlers = autoRename;
    var autoDinstance = 20;
    var previousLastAttackSerial;
    var previousLastAttackHp;
    var previousPlayerHp;
    Scripts.Dress.saveEquip();
    Orion.Exec('userAutostart');
    while (true) {
        Scripts.Utils.printDamage(Player.Serial(), previousPlayerHp);
        previousPlayerHp = Player.Hits();
        var lastAttackSerial = Orion.ClientLastAttack();
        var lastAttack = Scripts.Utils.getLivingObjectInDistance(lastAttackSerial);
        if (lastAttack) {
            if (previousLastAttackSerial !== lastAttackSerial) {
                previousLastAttackHp = lastAttack.Hits();
                Scripts.Utils.printDamage(lastAttackSerial, previousLastAttackHp, true);
            }
            else {
                Scripts.Utils.printDamage(lastAttackSerial, previousLastAttackHp);
                previousLastAttackHp = lastAttack.Hits();
            }
            previousLastAttackSerial = lastAttackSerial;
        }
        if (Orion.InJournal('World save has been initiated.', 'sys')) {
            Shared.AddVar('ws', true);
            Scripts.Utils.playerPrint("World save !!!", ColorEnum.red);
            Orion.ClearJournal('World save has been initiated.', 'sys');
            Orion.Wait(5000);
            Orion.Click(Player.Serial());
            var time = Orion.Now() + 20000;
            while (!(((_a = Orion.InJournal(Player.Name(), 'my', Player.Serial())) === null || _a === void 0 ? void 0 : _a.Text().indexOf(Player.Name())) > -1) &&
                Orion.Now() < time &&
                !Player.Dead()) {
                Orion.Wait(50);
            }
            Scripts.Utils.playerPrint("World save DONE", ColorEnum.green);
            Orion.Wait(1500);
            Shared.AddVar('ws', false);
        }
        var nearCharacters = Orion.FindTypeEx('any', '0xFFFF', 'ground', 'live', autoDinstance);
        Scripts.Statusbar.setMobileArray(nearCharacters);
        if (autoHandlers) {
            if (autoRename) {
                var doneList = Shared.GetArray('autoHandlers.autoRename.doneList', new Array());
                var renameMounts = config === null || config === void 0 ? void 0 : config.autoHandlers.autoRename.renameMounts;
                var _loop_1 = function (i) {
                    var char = nearCharacters[i];
                    if (char.Serial() === Player.Serial()) {
                        return "continue";
                    }
                    if (doneList.some(function (o) {
                        o.serial === char.Serial() && o.graphic === char.Graphic();
                    })) {
                        return "continue";
                    }
                    if (!renameMounts &&
                        '0x00DF|0x00DC|0x00DA|0x00E2|0x00CC|0x00E4|0x00D2|0x00DB|0x00C8'
                            .split('|')
                            .indexOf(char.Graphic()) > -1) {
                        if (!(char === null || char === void 0 ? void 0 : char.CanChangeName())) {
                            Orion.GetStatus(char === null || char === void 0 ? void 0 : char.Serial());
                            Orion.RequestName(char === null || char === void 0 ? void 0 : char.Serial());
                            Scripts.Utils.waitForCond(function () { return char === null || char === void 0 ? void 0 : char.CanChangeName(); }, 150);
                        }
                        return "continue";
                    }
                    if (Scripts.MobMaster.rename(char)) {
                        var doneItem = { graphic: char.Graphic(), serial: char.Serial() };
                        doneList.push(doneItem);
                        Shared.AddArray('autoHandlers.autoRename.doneList', doneList);
                        return "break";
                    }
                };
                for (var i = 0; i < nearCharacters.length; i++) {
                    var state_1 = _loop_1(i);
                    if (state_1 === "break")
                        break;
                }
            }
        }
        Scripts.Statusbar.updateStatusbars();
        Orion.Wait((config === null || config === void 0 ? void 0 : config.updateRate) || 500);
    }
}
function autoStealing(autoheal) {
    Scripts.Stealing.autoStealing(autoheal);
}
function addCutWeapon() {
    Scripts.Loot.addCutWeapon();
}
function addLootBag() {
    Scripts.Loot.addLootBag();
}
function addMount() {
    Scripts.Mount.addMount();
}
function alchemy(potionName) {
    Scripts.Alchemy.mix(potionName);
}
function autoAmmoRefill() {
    Scripts.Rang.autoAmmoRefill();
}
function mix(potionName) {
    Scripts.Alchemy.mixOne(potionName);
}
function attackLast() {
    Orion.Attack(Orion.ClientLastAttack());
}
function bishopToggle() {
    Scripts.Clerik.bishopToggle();
}
function bowcraftTrain() {
    Scripts.Crafting.bowcraftTrain();
}
function bandageSelf(minimalCountForWarn, failedMessage) {
    if (minimalCountForWarn === void 0) { minimalCountForWarn = 10; }
    if (failedMessage === void 0) { failedMessage = true; }
    Scripts.Common.bandageSelf(minimalCountForWarn, undefined, failedMessage);
}
function cartography() {
    Scripts.Cartography.cartography();
}
function carveBody(carveNearestBodyAutomatically) {
    if (carveNearestBodyAutomatically === void 0) { carveNearestBodyAutomatically = false; }
    Scripts.Loot.carveBody(carveNearestBodyAutomatically);
}
function cast(spell, target) {
    Scripts.Spells.cast(spell, target);
}
function castNecroScroll(scroll, target) {
    Scripts.Spells.castNecroScroll(scroll, target);
}
function castScroll(scroll, target, backupHeadCast) {
    Scripts.Spells.castScroll(scroll, target, backupHeadCast);
}
function cestovniKniha(selection, destination) {
    if (selection === void 0) { selection = PortBookOptionsEnum.kop; }
    Scripts.Port.cestovniKniha(selection, destination);
}
function cleanObjectInBag(object, objectName) {
    Scripts.Clean.cleanObjectInBag(object, objectName);
}
function closeStandardStatusBars(notoriety, closeInactiveOnly) {
    if (closeInactiveOnly === void 0) { closeInactiveOnly = true; }
    Scripts.Statusbar.closeStandardStatusBars(notoriety, closeInactiveOnly);
}
function craftNext() {
    Scripts.Crafting.listMakeMenu();
}
function craftSelect() {
    Scripts.Crafting.confirmMakeMenu();
}
function drink(potionName, switchWarModeWhenNeeded, displayTimers, refillEmptyLimit, displayInvisLongTimer) {
    if (switchWarModeWhenNeeded === void 0) { switchWarModeWhenNeeded = true; }
    if (displayTimers === void 0) { displayTimers = true; }
    if (refillEmptyLimit === void 0) { refillEmptyLimit = 0; }
    if (displayInvisLongTimer === void 0) { displayInvisLongTimer = false; }
    Scripts.Potions.drinkPotion(potionName, switchWarModeWhenNeeded, displayTimers, true, refillEmptyLimit, displayInvisLongTimer);
}
function drinkFill(potionName, switchWarModeWhenNeeded, displayTimers, refillEmptyLimit, displayInvisLongTimer) {
    if (switchWarModeWhenNeeded === void 0) { switchWarModeWhenNeeded = true; }
    if (displayTimers === void 0) { displayTimers = true; }
    if (refillEmptyLimit === void 0) { refillEmptyLimit = 2; }
    if (displayInvisLongTimer === void 0) { displayInvisLongTimer = false; }
    Scripts.Potions.drinkPotion(potionName, switchWarModeWhenNeeded, displayTimers, true, refillEmptyLimit, displayInvisLongTimer);
}
function drum(target) {
    Scripts.Music.drum(target);
}
function ef(self, scroll, timer) {
    if (self === void 0) { self = false; }
    if (scroll === void 0) { scroll = false; }
    if (timer === void 0) { timer = 70000; }
    Scripts.Spells.ef(self, scroll, timer);
}
function efMount(scroll, timer) {
    Scripts.Spells.efMount(scroll, timer);
}
function enemy() {
    Scripts.Targeting.addEnemy();
}
function equip() {
    Scripts.Dress.equip();
}
function fillPotion(potionName, switchWarModeWhenNeeded) {
    if (switchWarModeWhenNeeded === void 0) { switchWarModeWhenNeeded = true; }
    Scripts.Potions.fillPotion(potionName, switchWarModeWhenNeeded);
}
function fishTrain(walkingCoordinates) {
    Scripts.Fishing.fishTrain(walkingCoordinates);
}
function friend() {
    Scripts.Targeting.addFriend();
}
function gmMortar(potionName) {
    Scripts.Alchemy.gmMortar(potionName);
}
function harp(target) {
    Scripts.Music.harp(target);
}
function healPets() {
    Scripts.PetCommander.healPetsToggle();
}
function hideAll() {
    Scripts.Common.hideAll();
}
function hiding(allowRehid, doubleTapToRehid) {
    if (allowRehid === void 0) { allowRehid = true; }
    if (doubleTapToRehid === void 0) { doubleTapToRehid = false; }
    Scripts.Hiding.hiding(allowRehid, doubleTapToRehid);
}
function inscription(circle, spell, quantity, useManaRef) {
    if (quantity === void 0) { quantity = 0; }
    if (useManaRef === void 0) { useManaRef = false; }
    Scripts.Inscription.inscription(circle, spell, quantity, useManaRef);
}
function killAll() {
    Scripts.PetCommander.killAll();
}
function killTarget() {
    Scripts.PetCommander.killTarget();
}
function lavaBomb() {
    Scripts.Common.lavaBomb();
}
function light(shouldCast) {
    if (shouldCast === void 0) { shouldCast = true; }
    shouldCast = parseParam(shouldCast);
    Scripts.Common.svetlo(shouldCast);
}
function lockpicking() {
    Scripts.Lockpicking.lockpicking();
}
function loot(cut) {
    if (cut === void 0) { cut = true; }
    Scripts.Loot.corpses(parseParam(cut));
}
function lootAll(delay) {
    if (delay === void 0) { delay = responseDelay; }
    Scripts.Loot.lootAllFrom(delay);
}
function lumber() {
    Scripts.Lumber.lumber();
}
function lute(target) {
    Scripts.Music.lute(target);
}
function make(count, objectAsString, setInputs) {
    if (setInputs === void 0) { setInputs = true; }
    Scripts.Crafting.make(count, objectAsString, setInputs);
}
function manualTarget(opts) {
    if (opts === void 0) { opts = TARGET_OPTS_DEFAULTS; }
    opts = __assign(__assign({}, TARGET_OPTS_DEFAULTS), opts);
    Scripts.Targeting.manualTarget(opts);
}
function medikHiding() {
    Scripts.Clerik.medikHiding();
}
function mm(requiredCountInTarget) {
    if (requiredCountInTarget) {
        var parsedParam = parseParam(requiredCountInTarget);
        requiredCountInTarget = typeof parsedParam === 'number' ? parsedParam : 0;
    }
    Scripts.Common.massMove(requiredCountInTarget, true);
}
function mmc(requiredCountInTarget) {
    if (requiredCountInTarget) {
        var parsedParam = parseParam(requiredCountInTarget);
        requiredCountInTarget = typeof parsedParam === 'number' ? parsedParam : 0;
    }
    Scripts.Common.massMove(requiredCountInTarget, false);
}
function mount() {
    Scripts.Mount.mountAndDismount();
}
function moveRegs() {
    Scripts.Utils.moveRegs();
}
function mysticCounter() {
    Scripts.Common.mysticCounter();
}
function nbRune() {
    Scripts.Port.nbRune();
}
function necroMystic(message) {
    Scripts.Necromancer.necroMystic(message);
}
function nextWeapon(showName) {
    if (showName === void 0) { showName = false; }
    Scripts.Dress.nextWeapon(showName);
}
function ocaruj(dusty) {
    if (dusty === void 0) { dusty = OcarovaniEnum.mytheril; }
    Scripts.Craft.ocaruj(dusty);
}
function openContainer() {
    Scripts.Common.openContainer();
}
function poisonTrain(keepRunning) {
    if (keepRunning === void 0) { keepRunning = false; }
    keepRunning ? Scripts.Common.poisonTrainAuto() : Scripts.Common.poisonTrain();
}
function poisonLastAttack() {
    Scripts.Common.poisonLastAttack();
}
function previousWeapon(showName) {
    if (showName === void 0) { showName = false; }
    Scripts.Dress.nextWeapon(showName, true);
}
function resetEnemies() {
    Scripts.Targeting.resetEnemies();
}
function resetFriends() {
    Scripts.Targeting.resetFriends();
}
function resetStats() {
    Scripts.Dress.resetStats();
}
function KPZPull() {
    Scripts.Clerik.KPZPull();
}
function KPZJump() {
    Scripts.Clerik.KPZJump();
}
function KPZHpSwitch() {
    Scripts.Clerik.KPZHpSwitch();
}
function resetWeapons() {
    Scripts.Dress.resetWeaponsArray();
}
function rozbij(ingy, kolik) {
    if (ingy === void 0) { ingy = OcarovaniEnum.mytheril; }
    if (kolik === void 0) { kolik = 5; }
    Scripts.Craft.rozbij(ingy, kolik);
}
function saveEquip() {
    Scripts.Dress.saveEquip();
}
function shrinkAll() {
    Scripts.Taming.shrinkAll();
}
function statusAll(notoriery, position, id, alwaysClear, offset, shiftX, shiftY) {
    if (notoriery === void 0) { notoriery = []; }
    if (position === void 0) { position = 'RightTop'; }
    if (id === void 0) { id = 0; }
    if (alwaysClear === void 0) { alwaysClear = false; }
    if (offset === void 0) { offset = 5; }
    if (shiftX === void 0) { shiftX = 0; }
    if (shiftY === void 0) { shiftY = 0; }
    Scripts.Statusbar.statusAll(notoriery, position, id, alwaysClear, offset, shiftX, shiftY);
}
function statusBar() {
    Scripts.Statusbar.create();
}
function stealing() {
    Scripts.Stealing.stealing();
}
function summon(creature, target) {
    Scripts.Spells.summon(creature, target);
}
function tailoringTrain() {
    Scripts.Crafting.tailoringTrain();
}
function taming(allAround, opts) {
    if (allAround === void 0) { allAround = false; }
    if (opts === void 0) { opts = TAMING_OPTS_DEFAULTS; }
    opts = __assign(__assign({}, TAMING_OPTS_DEFAULTS), opts);
    allAround ? Scripts.Taming.tameAnimalsAround(opts) : Scripts.Taming.taming(opts);
}
function tamingTrain(robeOfDruids) {
    if (robeOfDruids === void 0) { robeOfDruids = true; }
    Scripts.Taming.trainOnAnimalsAround(robeOfDruids);
}
function targetNext(timeToStorePreviousTargets, additionalFlags, notoriety, opts) {
    if (timeToStorePreviousTargets === void 0) { timeToStorePreviousTargets = 1500; }
    if (opts === void 0) { opts = TARGET_OPTS_DEFAULTS; }
    opts = __assign(__assign({}, TARGET_OPTS_DEFAULTS), opts);
    Scripts.Targeting.targetNext(false, timeToStorePreviousTargets, additionalFlags, notoriety, opts);
}
function targetPrevious(timeToStorePreviousTargets, additionalFlags, notoriety, opts) {
    if (timeToStorePreviousTargets === void 0) { timeToStorePreviousTargets = 1500; }
    if (opts === void 0) { opts = TARGET_OPTS_DEFAULTS; }
    opts = __assign(__assign({}, TARGET_OPTS_DEFAULTS), opts);
    Scripts.Targeting.targetNext(true, timeToStorePreviousTargets, additionalFlags, notoriety, opts);
}
function tbGump() {
    Scripts.TbGump.main();
}
function terminateAll() {
    Orion.Terminate('all', 'Autostart|userAutostart');
}
function tracking(who) {
    if (who === void 0) { who = 'Players'; }
    Scripts.Tracking.tracking(who);
}
function travelBook(selection) {
    if (selection === void 0) { selection = PortBookOptionsEnum.kop; }
    Scripts.Port.travelBook(selection);
}
function turboRess(bandageAfterRess) {
    if (bandageAfterRess === void 0) { bandageAfterRess = false; }
    Scripts.Clerik.turboRess(bandageAfterRess);
}
function turboRessFull() {
    Scripts.Clerik.turboRessFull();
}
function unlock() {
    Scripts.Lockpicking.unlock();
}
function use(object, name, minimalCountForWarn) {
    if (name === void 0) { name = ''; }
    Scripts.Utils.use(object, name, minimalCountForWarn);
}
function useGGR() {
    Scripts.Jewelry.useGGR();
}
function useKlamak(lvl, useAim, priorityList, ignoreSerials) {
    if (useAim === void 0) { useAim = false; }
    return Scripts.Klamak.useKlamak(lvl, useAim, priorityList, ignoreSerials);
}
function useRR() {
    Scripts.Jewelry.useRR();
}
function useShrinkKad() {
    Scripts.Taming.useShrinkKad();
}
function webDestroyer() {
    Scripts.Common.webDestroyer();
}
function wos(scroll, timer) {
    if (scroll === void 0) { scroll = false; }
    if (timer === void 0) { timer = 70000; }
    Scripts.Spells.wos(scroll, timer);
}
function sortBackpackCaleb() {
    Scripts.Clean.sortBackpackCaleb();
}
function mobKill(targets, useSavedTarget) {
    Scripts.MobMaster.mobKill(targets, useSavedTarget);
}
function mobKillAll(targets, useSavedTarget) {
    Scripts.MobMaster.mobKillAll(targets, useSavedTarget);
}
function mobGo() {
    Scripts.MobMaster.mobGo();
}
function mobCome() {
    Scripts.MobMaster.mobCome();
}
function mobStop() {
    Scripts.MobMaster.mobStop();
}
function attackTarget(targets) {
    Scripts.TargetingEx.attack(targets);
}
function shrinkOne() {
    Scripts.MobMaster.shrinkOne();
}
function bandageTarget(targets, showTarget, minimalCountToWarn) {
    Scripts.Healing.bandageTarget(targets, showTarget, minimalCountToWarn);
}
function equipSlotWeapon(slotCode, type, options) {
    Scripts.Combat.equipSlotWeapon(slotCode, type, options);
}
function switchShield(options) {
    Scripts.Combat.switchShield(options);
}
function switchWeapon(options) {
    Scripts.Combat.switchWeapon(options);
}
function vampRakevLow() {
    Vampire.coffin(CoffinMenuSelection.low);
}
function vampRakevMedium() {
    Vampire.coffin(CoffinMenuSelection.medium);
}
function vampRakevHigh() {
    Vampire.coffin(CoffinMenuSelection.high);
}
function craftBandana() {
    Scripts.Craft.bandana();
}
function parseParam(param) {
    if (param === 'true') {
        return true;
    }
    else if (param === 'false') {
        return false;
    }
    else if (parseInt(param).toString().length === param.length) {
        return parseInt(param);
    }
    return param;
}
var Scripts;
(function (Scripts) {
    var Auto = (function () {
        function Auto() {
        }
        Auto.lagProtection = function (enemy, run) {
            if (run === void 0) { run = 1; }
            if (enemy.Hits() > 0) {
                return;
            }
            var px = Player.X();
            var py = Player.Y();
            var ex = enemy.X();
            var ey = enemy.Y();
            Scripts.Utils.log('lagProtection - monster hp < 1');
            var staminaIgnore = Orion.OAOptionGet('IgnoreStaminaCheck');
            if (staminaIgnore === '0') {
                Orion.Print('zapinam docasne stamina ignore');
                Orion.OAOptionSet('IgnoreStaminaCheck', '1');
            }
            var x = px > ex ? ex - 1 : ex + 1;
            var y = py > ey ? ey - 1 : ey + 1;
            Orion.WalkTo(x, y, enemy.Z(), 1, 255, run, undefined, 1000);
            if (staminaIgnore === '0') {
                Orion.Print('vypinam stamina ignore');
                Orion.OAOptionSet('IgnoreStaminaCheck', '0');
            }
        };
        Auto.getToDistanceIfNeeded = function (enemy, distance, run, maxWalkingTime) {
            if (distance === void 0) { distance = 1; }
            if (run === void 0) { run = 1; }
            if (maxWalkingTime === void 0) { maxWalkingTime = 20000; }
            var px = Player.X();
            var py = Player.Y();
            var ex = enemy.X();
            var ey = enemy.Y();
            var success = false;
            if ((px > ex && px - ex > 1) ||
                (px < ex && ex - px > 1) ||
                (py > ey && py - ey > 1) ||
                (py < ey && ey - py > 1)) {
                Scripts.Utils.log("going closer to enemy - Player{x: " + px + ", y: " + py + ", z: " + Player.Z() + "} Enemy{x: " + ex + ", y: " + ey + ", z: " + enemy.Z() + "}");
                success = Orion.WalkTo(enemy.X(), enemy.Y(), enemy.Z(), distance, 255, run, undefined, maxWalkingTime);
                if (!success && Orion.InJournal('You are frozen')) {
                    Orion.ClearJournal('You are frozen');
                    Scripts.Spells.cast('Magic Arrow', TargetEnum.self);
                    Orion.Wait(2500);
                    success = Orion.WalkTo(enemy.X(), enemy.Y(), enemy.Z(), distance, 255, run, undefined, maxWalkingTime);
                }
            }
            return success;
        };
        Auto.killObject = function (serialToKill, poisonTrain, waitUntilDead, kill, distance, lagProtection) {
            if (poisonTrain === void 0) { poisonTrain = false; }
            if (waitUntilDead === void 0) { waitUntilDead = true; }
            if (kill === void 0) { kill = true; }
            if (distance === void 0) { distance = 1; }
            if (lagProtection === void 0) { lagProtection = true; }
            var enemy = Orion.FindObject(serialToKill);
            if (!enemy) {
                return;
            }
            var run = Player.MaxStam() - 30 < Player.Stam() ? 1 : 0;
            lagProtection && Scripts.Auto.lagProtection(enemy, run);
            Scripts.Auto.getToDistanceIfNeeded(enemy, distance, run);
            poisonTrain && distance <= 1 && Scripts.Common.poisonTrain(serialToKill);
            Orion.Wait(responseDelay);
            if (!kill) {
                Orion.Ignore(enemy.Serial());
                return;
            }
            Orion.AddObject('lasttarget', serialToKill);
            var macro = Orion.CreateClientMacro('AttackLast');
            macro.Play();
            if (enemy && waitUntilDead) {
                while (enemy && !enemy.Dead()) {
                    Scripts.Auto.getToDistanceIfNeeded(enemy, distance, run);
                    Orion.Wait(responseDelay);
                    macro.Play();
                    Orion.Wait(1000);
                    enemy = Orion.FindObject(serialToKill);
                }
            }
        };
        return Auto;
    }());
    Scripts.Auto = Auto;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Clean = (function () {
        function Clean() {
        }
        Clean.cleanBag = function () {
            Scripts.Clean.cleanObjectInBag(gameObject.potions, 'potions');
            Scripts.Clean.cleanObjectInBag(gameObject.books, 'books');
            Scripts.Clean.cleanObjectInBag(gameObject.regy, 'regy');
            Scripts.Clean.cleanObjectInBag(gameObject.necroRegy, 'necroRegy');
            Scripts.Clean.cleanObjectInBag(gameObject.uncategorized, 'uncategorized');
            Scripts.Clean.cleanObjectInBag(gameObject.rings, 'rings');
        };
        Clean.cleanObjectInBag = function (object, objectName) {
            if (isMyGameObject(object)) {
                Scripts.Clean.cleanMyGameObjectInBag(object, objectName);
                return;
            }
            for (var key in object) {
                Scripts.Clean.cleanObjectInBag(object[key], key);
            }
        };
        Clean.cleanObjectInBagCoord = function (object, objectName, recuseSearch, coordinates, delta) {
            if (recuseSearch === void 0) { recuseSearch = true; }
            if (coordinates === void 0) { coordinates = { x: 100, y: 100 }; }
            if (isMyGameObject(object)) {
                return Clean.cleanMyGameObjectInBag(object, objectName, recuseSearch, coordinates, delta);
            }
            else {
                var coord = coordinates;
                var list = Clean.findUniqueGameObjects(object);
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    coord = Clean.cleanObjectInBagCoord(item, 'Multi item ' + i, recuseSearch, coord, delta);
                }
            }
            return coordinates;
        };
        Clean.getSerialsFromMyGameObject = function (type, recuseSearch) {
            if (recuseSearch === void 0) { recuseSearch = true; }
            if (type.color) {
                return Orion.FindType(type.graphic, type.color, 'backpack', '', 'finddistance', '', recuseSearch);
            }
            else {
                return Orion.FindType(type.graphic, 'any', 'backpack', '', 'findDistance', '', recuseSearch);
            }
        };
        Clean.cleanMyGameObjectInBag = function (type, tName, recuseSearch, coordinates, delta) {
            var _a, _b, _c;
            if (recuseSearch === void 0) { recuseSearch = true; }
            var serials = Clean.getSerialsFromMyGameObject(type, recuseSearch);
            var bag = (_a = type.bag) === null || _a === void 0 ? void 0 : _a.objectAlias;
            if (bag && !Orion.FindObject(bag)) {
                Orion.AddObject(bag);
                Orion.Print(ColorEnum.none, "Target your [" + bag + "] for object [" + (tName === null || tName === void 0 ? void 0 : tName.toUpperCase()) + "]");
                Scripts.Utils.waitWhileTargeting();
            }
            !bag && (bag = 'backpack');
            var x = (coordinates === null || coordinates === void 0 ? void 0 : coordinates.x) || ((_b = type.bag) === null || _b === void 0 ? void 0 : _b.x) || 100;
            var y = (coordinates === null || coordinates === void 0 ? void 0 : coordinates.y) || ((_c = type.bag) === null || _c === void 0 ? void 0 : _c.y) || 100;
            var d = delta || 3;
            if (serials.length && Orion.FindObject(serials[0]).Count() > 1 && serials.length > 1) {
                for (var _i = 0, serials_1 = serials; _i < serials_1.length; _i++) {
                    var serial = serials_1[_i];
                    Orion.MoveItem(serial, 0, 'backpack');
                }
                serials = Clean.getSerialsFromMyGameObject(type, recuseSearch);
            }
            for (var i = 0; i < serials.length; i++) {
                Orion.MoveItem(serials[i], 0, bag, x, y);
                x += d;
                Orion.Wait(450);
            }
            return { x: x, y: y };
        };
        Clean.findUniqueGameObjects = function (object) {
            var list = new Array();
            if (isMyGameObject(object)) {
                list.push(object);
            }
            else {
                for (var key in object) {
                    list.push.apply(list, Clean.findUniqueGameObjects(object[key]));
                }
            }
            var resultList = new Array();
            var _loop_2 = function (i) {
                var item = list[i];
                if (!resultList.some(function (o) {
                    return o.graphic === item.graphic && o.color === item.color;
                })) {
                    resultList.push(item);
                }
            };
            for (var i = 0; i < list.length; i++) {
                _loop_2(i);
            }
            return resultList;
        };
        Clean.getGameObjectList = function (object) {
            var list = new Array();
            if (isMyGameObject(object)) {
                list.push(object);
            }
            else {
                for (var key in object) {
                    list.push.apply(list, Clean.getGameObjectList(object[key]));
                }
            }
            return list;
        };
        Clean.sortBackpackCaleb = function () {
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0E9B', color: '0x0000', bag: { x: 10, y: 30 } }, 'Mortar');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0FF0', color: '0x08A5', bag: { x: 10, y: 45 } }, 'Rune book');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0FEF', color: '0x0482', bag: { x: 10, y: 60 } }, 'Travel Book');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0EFA', color: '0xFFFF', bag: { x: 10, y: 75 } }, 'Spell book');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x176B', color: '0x0000', bag: { x: 10, y: 90 } }, 'Key Ring');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x10E4', color: '0x0000', bag: { x: 10, y: 105 } }, 'Drawing knife');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x1837', color: '0x0000', bag: { x: 10, y: 120 } }, 'Poison Kit');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x12CA', color: '0x0B4E', bag: { x: 20, y: 130 } }, 'Soska samana');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x1374', color: '0x0B4C', bag: { x: 10, y: 140 } }, 'Voditko');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0E21', color: '0x0000', bag: { x: 10, y: 155 } }, 'Clean bandages');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x1EB8', color: '0x0749', bag: { x: 10, y: 170 } }, 'Kapsarske Naradicko');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0FC4', color: '0x0B83', bag: { x: 150, y: 30 } }, 'DuchStepi');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0E26', color: '0x0B83', bag: { x: 170, y: 30 } }, 'DuchPralesa');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x1F19', color: '0xFFFF', bag: { x: 120, y: 10 } }, 'Stone Vamp Krystal');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x1843', color: '0x04CC', bag: { x: 150, y: 10 } }, 'Stone imunka');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x1B17', color: '0x0493', bag: { x: 170, y: 10 } }, 'Greezi Artefakt');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x22C5', color: '0x0000', bag: { x: 180, y: 30 } }, 'Cestovni Kniha');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x1EA0', color: '0xFFFF', bag: { x: 180, y: 45 } }, 'Quiver');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0F9E', color: '0xFFFF', bag: { x: 180, y: 60 } }, 'Nuzky');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x1F06', color: '0x0B18', bag: { x: 180, y: 75 } }, 'Lock naramek');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0FBD', color: '0xFFFF', bag: { x: 180, y: 90 } }, 'Klan kniha');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x1940', color: '0xFFFF', bag: { x: 180, y: 105 } }, 'Klan kad');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0E75', color: '0xFFFF', bag: { x: 180, y: 120 } }, 'Backpack');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0E79', color: '0xFFFF', bag: { x: 180, y: 130 } }, 'Beltpouch');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x09B0', color: '0xFFFF', bag: { x: 180, y: 140 } }, 'Beltpouch 2');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x09A8', color: '0x049B', bag: { x: 180, y: 140 } }, 'Gold bedna');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x1F14', color: '0x0B1D', bag: { x: 165, y: 170 } }, 'NbRuna');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x227A', color: '0x0498', bag: { x: 180, y: 155 } }, 'Dungeon scrool');
            Scripts.Clean.cleanObjectInBag({ graphic: '0x0F0E', color: '0x0000', bag: { x: 180, y: 170 } }, 'Empty bottle');
            Clean.cleanObjectInBagCoord(gameObject.weapons, 'weapons', false, { x: 40, y: 130 }, 6);
            Clean.cleanObjectInBagCoord(gameObject.regy, 'regy', false, { x: 15, y: 180 }, 6);
            Clean.cleanObjectInBagCoord(gameObject.necroRegy, 'necroRegy', false, { x: 70, y: 180 }, 2);
            Clean.cleanObjectInBagCoord(gameObject.potions, 'potions', false, { x: 40, y: 10 }, 3);
            Clean.cleanObjectInBagCoord(gameObject.rings, 'rings', false, { x: 20, y: 45 }, 6);
            Clean.cleanObjectInBagCoord(gameObject.klamak, 'klamak', false, { x: 20, y: 10 }, 1);
            Clean.cleanObjectInBagCoord(gameObject.uncategorized.hodf, 'hodf', false, { x: 20, y: 55 }, 6);
        };
        return Clean;
    }());
    Scripts.Clean = Clean;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Combat = (function () {
        function Combat() {
        }
        Combat.switchShield = function (options) {
            var _a, _b;
            if (Combat.checkDenyEquip()) {
                Scripts.Utils.playerPrint("deny weapon", ColorEnum.orange, true);
                return;
            }
            var recuseSearch = (_a = options === null || options === void 0 ? void 0 : options.recuseSearch) !== null && _a !== void 0 ? _a : false;
            var shields = Scripts.Utils.getSerialsFromMyGameObjects(gameObject.shields, recuseSearch, ["LeftHand", "RightHand"]).sort(function (a, b) { return parseInt(a, 16) - parseInt(b, 16); });
            var leftHandObj = Orion.ObjAtLayer("LeftHand");
            var shield = (shields === null || shields === void 0 ? void 0 : shields.length) > 0 ? shields[0] : null;
            if ((leftHandObj === null || leftHandObj === void 0 ? void 0 : leftHandObj.Exists()) && shields.indexOf(leftHandObj.Serial()) > -1 && shields.indexOf(leftHandObj.Serial()) < shields.length - 1) {
                shield = shields[shields.indexOf(leftHandObj.Serial()) + 1];
            }
            if (shield && ((_b = Orion.FindObject(shield)) === null || _b === void 0 ? void 0 : _b.Exists())) {
                Orion.Equip(shield);
                Orion.AddObject("__LastShield", shield);
            }
        };
        Combat.switchWeapon = function (options) {
            var _a, _b, _c, _d;
            if (Combat.checkDenyEquip()) {
                Scripts.Utils.playerPrint("deny weapon", ColorEnum.orange, true);
                return;
            }
            var recuseSearch = (_a = options === null || options === void 0 ? void 0 : options.recuseSearch) !== null && _a !== void 0 ? _a : false;
            var ensureShield = (_b = options === null || options === void 0 ? void 0 : options.ensureShield) !== null && _b !== void 0 ? _b : true;
            var weapons = Scripts.Utils.getSerialsFromMyGameObjects(gameObject.weapons, recuseSearch, ["LeftHand", "RightHand"]).sort(function (a, b) { return parseInt(a, 16) - parseInt(b, 16); });
            var handObj = (_c = Orion.ObjAtLayer("RightHand")) !== null && _c !== void 0 ? _c : Orion.ObjAtLayer("LeftHand");
            var weapon = (weapons === null || weapons === void 0 ? void 0 : weapons.length) > 0 ? weapons[0] : null;
            if ((handObj === null || handObj === void 0 ? void 0 : handObj.Exists()) && weapons.indexOf(handObj.Serial()) > -1 && weapons.indexOf(handObj.Serial()) < weapons.length - 1) {
                weapon = weapons[weapons.indexOf(handObj.Serial()) + 1];
            }
            if (weapon && ((_d = Orion.FindObject(weapon)) === null || _d === void 0 ? void 0 : _d.Exists())) {
                Orion.Equip(weapon);
                Orion.AddObject("__LastWeapon", weapon);
                Scripts.Utils.waitForCond(function () {
                    var _a, _b;
                    if (((_b = ((_a = Orion.ObjAtLayer("RightHand")) !== null && _a !== void 0 ? _a : Orion.ObjAtLayer("LeftHand"))) === null || _b === void 0 ? void 0 : _b.Serial()) === weapon) {
                        return true;
                    }
                    return false;
                }, 500);
            }
            if (ensureShield) {
                Combat.ensureShield();
            }
        };
        Combat.ensureShield = function () {
            var leftHandObj = Orion.ObjAtLayer("LeftHand");
            if (!(leftHandObj === null || leftHandObj === void 0 ? void 0 : leftHandObj.Exists())) {
                var shield = Orion.FindObject("__LastShield");
                if (!(shield === null || shield === void 0 ? void 0 : shield.Exists())) {
                    Combat.switchShield();
                }
                else {
                    Orion.AddObject("__LastShield", shield.Serial());
                    Orion.Equip(shield.Serial());
                }
            }
        };
        Combat.equipSlotWeapon = function (slotCode, type, options) {
            var _a, _b, _c, _d, _e, _f, _g;
            if (Combat.checkDenyEquip()) {
                Scripts.Utils.playerPrint("deny weapon", ColorEnum.orange, true);
                return;
            }
            var slotPrefix = "Slot_";
            var ensureShield = (_a = options === null || options === void 0 ? void 0 : options.ensureShield) !== null && _a !== void 0 ? _a : true;
            var add = (_b = options === null || options === void 0 ? void 0 : options.add) !== null && _b !== void 0 ? _b : false;
            var recuseSearch = (_c = options === null || options === void 0 ? void 0 : options.recuseSearch) !== null && _c !== void 0 ? _c : false;
            var printColor = (_d = options === null || options === void 0 ? void 0 : options.printColor) !== null && _d !== void 0 ? _d : ColorEnum.pureWhite;
            var graphic = (_e = type === null || type === void 0 ? void 0 : type.graphic) !== null && _e !== void 0 ? _e : "any";
            var color = (_f = type === null || type === void 0 ? void 0 : type.color) !== null && _f !== void 0 ? _f : "any";
            var fullCode = slotPrefix + slotCode;
            var slotItem = Orion.FindObject(fullCode);
            if (!(slotItem === null || slotItem === void 0 ? void 0 : slotItem.Exists()) || type && (graphic !== "any" && slotItem.Graphic() !== graphic || color !== "any" && slotItem.Color() !== color)) {
                var types = Orion.FindTypeEx(graphic, color, 'backpack', '', '', '', recuseSearch);
                if (type && types && types.length > 0) {
                    slotItem = types[0];
                }
                else if (add) {
                    Orion.WaitForAddObject(fullCode);
                    Orion.Wait(100);
                    slotItem = Orion.FindObject(fullCode);
                }
            }
            var handObj = (_g = Orion.ObjAtLayer("RightHand")) !== null && _g !== void 0 ? _g : Orion.ObjAtLayer("LeftHand");
            if (slotItem === null || slotItem === void 0 ? void 0 : slotItem.Exists()) {
                if ((handObj === null || handObj === void 0 ? void 0 : handObj.Serial()) !== slotItem.Serial()) {
                    Orion.Equip(slotItem.Serial());
                    Scripts.Utils.waitForCond(function () {
                        var _a, _b;
                        if (((_b = ((_a = Orion.ObjAtLayer("RightHand")) !== null && _a !== void 0 ? _a : Orion.ObjAtLayer("LeftHand"))) === null || _b === void 0 ? void 0 : _b.Serial()) === slotItem.Serial()) {
                            return true;
                        }
                        return false;
                    }, 500);
                    Scripts.Utils.playerPrint("[ " + slotCode + " ]", printColor);
                }
                else {
                    Scripts.Utils.playerPrint(slotCode, printColor, true);
                }
                Orion.AddObject(fullCode, slotItem.Serial());
            }
            else {
                Orion.RemoveObject(fullCode);
                Scripts.Utils.playerPrint("[ !" + slotCode + " ]", ColorEnum.red);
            }
            if (ensureShield) {
                Combat.ensureShield();
            }
        };
        Combat.currentWeapon = function () {
            var _a;
            return (_a = Orion.ObjAtLayer("RightHand")) !== null && _a !== void 0 ? _a : Orion.ObjAtLayer("LeftHand");
        };
        Combat.checkDenyEquip = function () {
            var currentWeapon = Combat.currentWeapon();
            if ((currentWeapon === null || currentWeapon === void 0 ? void 0 : currentWeapon.Graphic()) === "0x13b5" && (currentWeapon === null || currentWeapon === void 0 ? void 0 : currentWeapon.Color()) === "0x052d") {
                return true;
            }
            else if ((currentWeapon === null || currentWeapon === void 0 ? void 0 : currentWeapon.Graphic()) === "0x0e89" && (currentWeapon === null || currentWeapon === void 0 ? void 0 : currentWeapon.Color()) === "0x05a6") {
                return true;
            }
            return false;
        };
        return Combat;
    }());
    Scripts.Combat = Combat;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Common = (function () {
        function Common() {
        }
        Common.svetlo = function (shouldCast) {
            if (shouldCast === void 0) { shouldCast = true; }
            var ns = gameObject.potions.ns;
            var kad = Orion.FindType(ns.kad.graphic, ns.kad.color);
            if (kad.length) {
                Orion.WaitTargetObject('self');
                Orion.UseObject(kad[0]);
            }
            else if (shouldCast) {
                if (Player.Hidden()) {
                    Scripts.Utils.playerPrint('Odhidni pro svetlo z hlavy', ColorEnum.orange);
                }
                else {
                    Scripts.Spells.cast('Night Sight', TargetEnum.self);
                }
            }
        };
        Common.shrinkKad = function () {
            var shrink = gameObject.potions.ns;
            var kad = Orion.FindType(shrink.kad.graphic, shrink.kad.color);
            if (kad.length) {
                Orion.UseObject(kad[0]);
            }
            else {
                Scripts.Utils.log('NEMAS SHRINK KAD', ColorEnum.red);
            }
        };
        Common.bandageSelf = function (minimalCountToWarn, pathToNoBandagesWavFile, failedMessage) {
            if (minimalCountToWarn === void 0) { minimalCountToWarn = 10; }
            if (pathToNoBandagesWavFile === void 0) { pathToNoBandagesWavFile = 'C:/critical.wav'; }
            if (failedMessage === void 0) { failedMessage = true; }
            var bandagesSerials = Orion.FindType(gameObject.uncategorized.bandy.graphic);
            var count = Scripts.Utils.countItemsBySerials(bandagesSerials);
            if (!count) {
                Orion.PlayWav(pathToNoBandagesWavFile);
                Scripts.Utils.playerPrint('!! NEMAS BANDY !!', ColorEnum.red);
                return;
            }
            var res = Scripts.Utils.waitWhileSomethingInJournal(['Obvazal jsi'], 10, responseDelay * 2);
            if (res === 0) {
                Scripts.Utils.log('Uz si hazes bandu, musis pockat az dojde');
                return;
            }
            ;
            var pattern = [
                'You put the bloody',
                'You apply',
                'Chces vytvorit',
                'reach that',
                'Targeting Cancelled',
                'reach the target',
            ];
            Orion.ClearJournal(pattern.join('|'));
            Orion.BandageSelf();
            Orion.Wait(responseDelay);
            Scripts.Utils.waitWhileSomethingInJournal(pattern, 3000);
            Orion.InJournal('You apply') && Orion.PrintFast(Player.Serial(), ColorEnum.red, 0, "bandage failed");
            count--;
            if (count <= minimalCountToWarn) {
                Scripts.Utils.playerPrint("posledni" + (count > 4 ? 'ch' : '') + " " + count + " band" + (count > 4 ? '' : count > 1 ? 'y' : 'a'), ColorEnum.red);
            }
        };
        Common.massMove = function (requiredCountInTarget, onlyType) {
            if (requiredCountInTarget === void 0) { requiredCountInTarget = 0; }
            if (onlyType === void 0) { onlyType = true; }
            Scripts.Utils.createGameObjectSelections([
                { ask: 'Co chces prehazovat ?', addObject: 'massMoveItem' },
                { ask: 'Kam to chces nahazet (container) ?', addObject: 'massMoveTargetContainer' },
            ]);
            var itemObject = Orion.FindObject('massMoveItem');
            var stackable = Scripts.Utils.isItemStackable(itemObject.Serial());
            var count = stackable ? Scripts.Utils.askForCount() : 0;
            itemObject = Orion.FindObject('massMoveItem');
            var graphic = itemObject.Graphic();
            var color = onlyType ? '0xFFFF' : itemObject.Color();
            var container = itemObject.Container();
            var serialsToMove = Orion.FindType(graphic, color, container, undefined, undefined, undefined, false);
            Orion.OpenContainer('massMoveTargetContainer');
            var typesInTargetContainer = Orion.FindType(graphic, color, 'massMoveTargetContainer');
            var coordinates;
            var stackableTarget;
            var totalInTarget = Scripts.Utils.countObjectInContainer({ graphic: graphic, color: color }, 'massMoveTargetContainer');
            while (serialsToMove.length && (!requiredCountInTarget || totalInTarget !== requiredCountInTarget)) {
                var s = serialsToMove[0];
                if (typesInTargetContainer.length) {
                    if (!coordinates && !stackableTarget) {
                        var targetContainerItem = Orion.FindObject(typesInTargetContainer[0]);
                        stackableTarget = targetContainerItem.Serial();
                        coordinates = {
                            x: targetContainerItem.X(),
                            y: targetContainerItem.Y()
                        };
                    }
                }
                Orion.MoveItem(s, count, stackable && stackableTarget ? stackableTarget : 'massMoveTargetContainer', coordinates === null || coordinates === void 0 ? void 0 : coordinates.x, coordinates === null || coordinates === void 0 ? void 0 : coordinates.y);
                stackable && (stackableTarget = s);
                Orion.Wait(responseDelay);
                typesInTargetContainer = Orion.FindType(graphic, color, 'massMoveTargetContainer');
                serialsToMove = Orion.FindType(graphic, color, container, undefined, undefined, undefined, false);
                totalInTarget = Scripts.Utils.countObjectInContainer({ graphic: graphic, color: color }, 'massMoveTargetContainer');
            }
            Scripts.Utils.playerPrint("Mas uz " + totalInTarget + " techto itemu v containeru");
        };
        Common.refillReagent = function (reagent, sourceContainerName, count) {
            if (count === void 0) { count = 100; }
            Orion.Print(-1, 'Refilling...');
            Orion.Print(-1, reagent ? 'true' : 'false');
            var countInSource = Orion.Count(reagent.graphic, -1, sourceContainerName, undefined, false);
            Orion.Print(-1, countInSource + " left in source");
            if (countInSource <= count) {
                Orion.Print(ColorEnum.red, 'Not enough ' + reagent);
                return false;
            }
            var regFound = Orion.FindType(reagent.graphic, -1, sourceContainerName, undefined, undefined, undefined, false);
            if (regFound.length) {
                Orion.MoveItem(regFound[0], count, 'backpack');
                Orion.Wait(250);
            }
            return true;
        };
        Common.mysticCounter = function () {
            var _a;
            Orion.ClearJournal();
            var recepts = Orion.FindType('0x14ED', '0x06ED');
            var mystics = __assign({}, gameObject.mystics);
            for (var _i = 0, recepts_1 = recepts; _i < recepts_1.length; _i++) {
                var recept = recepts_1[_i];
                Orion.UseObject(recept);
                Orion.Wait(responseDelay);
                for (var m in mystics) {
                    !mystics[m].required && (mystics[m].required = 0);
                    var text = (_a = Orion.InJournal(m.charAt(0).toUpperCase() + m.slice(1))) === null || _a === void 0 ? void 0 : _a.Text();
                    if (text) {
                        mystics[m].required += parseInt(text.replace(/x.*/, ''));
                    }
                }
                Orion.ClearJournal();
            }
            Orion.Print(-1, '* zbyva doplnit *');
            for (var m in mystics) {
                var required = mystics[m].required;
                var have = Scripts.Utils.countObjectInContainer(mystics[m], 'backpack');
                var count = required - have < 0 ? 0 : required - have;
                Orion.Print(-1, m + ': ' + count.toString());
            }
            Orion.Print(-1, '*****************');
        };
        Common.hideAll = function () {
            Orion.Timer('resendTime') === -1 && Orion.SetTimer('resendTime', 10000);
            !Orion.GetGlobal('hideAll') && Orion.SetGlobal('hideAll', '0');
            var hidden = !!parseInt(Orion.GetGlobal('hideAll'));
            var timer = Orion.Timer('resendTime');
            if (!hidden) {
                var mobiles = Orion.FindType('any', 'any', 'ground', 'mobile', 15);
                for (var _i = 0, mobiles_1 = mobiles; _i < mobiles_1.length; _i++) {
                    var m = mobiles_1[_i];
                    Orion.Hide(m);
                }
                Orion.SetGlobal('hideAll', '1');
            }
            else if (timer >= 10000) {
                Scripts.Utils.resetTimer('resendTime');
                Orion.Resend();
                Orion.SetGlobal('hideAll', '0');
            }
            else {
                Scripts.Utils.log("jeste nemuzes dat znovu resync/resend, pockej jeste " + (10000 - timer) / 1000 + " sekund(y)");
            }
        };
        Common.lavaBomb = function () {
            var bomb = gameObject.potions.lavabomb;
            var bombSerial = Scripts.Utils.findFirstType(bomb);
            if (!bombSerial) {
                Scripts.Potions.fillPotion(PotionsEnum.lavabomb);
                bombSerial = Scripts.Utils.findFirstType(bomb);
                if (!bombSerial) {
                    return;
                }
            }
            else {
                Orion.Drop(bombSerial);
                Orion.Wait(responseDelay);
                Orion.MoveItem(bombSerial);
                Orion.Wait(responseDelay);
            }
            Orion.UseObject(bombSerial);
        };
        Common.webDestroyer = function () {
            var webs = Orion.FindType('0x0EE3|0x0EE4|0x0EE5|0x0EE6', '0x0000', 'ground', 'item', 1);
            for (var _i = 0, webs_1 = webs; _i < webs_1.length; _i++) {
                var web = webs_1[_i];
                Orion.UseObject(web);
                Orion.Wait(100);
            }
        };
        Common.poisonLastAttack = function () {
            var kitSerial = Scripts.Utils.findFirstType(gameObject.uncategorized.apprenticesPoisoningKit);
            if (kitSerial) {
                Orion.WarMode(true);
                Orion.Wait(50);
                Orion.WaitTargetObject(Orion.ClientLastAttack());
                Orion.UseObject(kitSerial);
            }
        };
        Common.poisonTrain = function (serialToPoison) {
            if (!serialToPoison) {
                var mobiles = Orion.FindType('any', 'any', 'ground', 'fast|live|mobile|ignoreself', 1, NotorietyEnum.red + "|" + NotorietyEnum.gray);
                if (!mobiles.length) {
                    Scripts.Utils.playerPrint('neni tu nikdo na poison train', ColorEnum.red);
                    return;
                }
                serialToPoison = mobiles[0];
            }
            var kitSerial = Scripts.Utils.findFirstType(gameObject.uncategorized.apprenticesPoisoningKit);
            if (kitSerial) {
                Orion.WarMode(true);
                Orion.WaitTargetObject(serialToPoison);
                Orion.UseObject(kitSerial);
            }
        };
        Common.poisonTrainAuto = function () {
            var kitSerial = Scripts.Utils.findFirstType(gameObject.uncategorized.apprenticesPoisoningKit);
            if (!kitSerial) {
                Scripts.Utils.playerPrint('nemas poison kit na treneni', ColorEnum.red);
                return;
            }
            while (true) {
                if (Orion.InJournal('Kdyz se snazis')) {
                    Orion.WarMode(true);
                    Orion.ClearJournal();
                    Orion.Wait(responseDelay);
                }
                var targets = Orion.FindType('any', 'any', 'ground', 'fast|live|mobile|ignoreself', 1, NotorietyEnum.red + "|" + NotorietyEnum.gray);
                if (targets.length) {
                    var target = targets[0];
                    Orion.WaitTargetObject(target);
                    Orion.UseObject(kitSerial);
                }
                Orion.Wait(responseDelay);
            }
        };
        Common.openBank = function () {
            Orion.ClearJournal();
            Orion.Wait(350);
            Orion.Say('Bank');
            return Orion.WaitForContainerGump(500) && !!Orion.InJournal('stones in your bank box');
        };
        Common.openContainer = function () {
            Scripts.Utils.createGameObjectSelections([{ ask: 'Target container to open', addObject: 'openContainer' }]);
            var container = Orion.FindObject('openContainer');
            if (!container) {
                return;
            }
            var bezpecnaColor = '0x0B1C';
            if (container.Color() === bezpecnaColor) {
                var x = container.X();
                var y = container.Y();
                var z = container.Z();
                var klicAlias = "bezpecnyKlic_" + Player.Name() + "_(" + x + "," + y + "," + z + ")";
                var klicObj = Orion.FindObject(klicAlias);
                if (klicObj) {
                    Orion.MoveItem(klicAlias);
                }
                else {
                    Orion.ClearJournal();
                    Orion.Wait(1000);
                    var klice = Orion.FindType('0x1012', '0x0003');
                    for (var _i = 0, klice_1 = klice; _i < klice_1.length; _i++) {
                        var serial = klice_1[_i];
                        Orion.ClearJournal('Bezpecny klic');
                        Orion.Wait(50);
                        Orion.Click(serial);
                        Scripts.Utils.waitWhileSomethingInJournal(['Bezpecny klic'], 5000);
                        if (!Orion.InJournal('Bezpecny klic')) {
                            Scripts.Utils.log('neco se rozbilo', ColorEnum.red);
                            throw 'e';
                        }
                        var msg = Orion.InJournal('Bezpecny klic');
                        var c = msg.Text().match(/\d+/g);
                        var alias = "bezpecnyKlic_" + Player.Name() + "_(" + c[0] + "," + c[1] + "," + c[2] + ")";
                        Orion.AddObject(alias, serial);
                        if (alias === klicAlias) {
                            Orion.MoveItem(alias);
                            break;
                        }
                    }
                }
                Orion.Wait(responseDelay);
            }
            Orion.OpenContainer('openContainer');
        };
        return Common;
    }());
    Scripts.Common = Common;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Dress = (function () {
        function Dress() {
        }
        Dress.resetStats = function () {
            var currentEquip = Scripts.Dress.getSerialsFromCurrentEquip();
            var tbObj = gameObject.books.travelBook;
            var travelBook = Scripts.Utils.findFirstType(tbObj);
            var cestovniObj = gameObject.books.cestovniKniha;
            var cestovniBook = Scripts.Utils.findFirstType(cestovniObj);
            if (!travelBook && !cestovniBook) {
                Scripts.Utils.log('NEMAS TRAVEL BOOK NEBO CESTOVNI KNIHU', ColorEnum.red);
                return;
            }
            if (travelBook) {
                Scripts.Port.travelBook(PortBookOptionsEnum.opravaStats);
            }
            else {
                Scripts.Port.cestovniKniha(PortBookOptionsEnum.opravaStats);
            }
            Orion.Wait(responseDelay);
            Scripts.Dress.equip(currentEquip);
        };
        Dress.getSerialsFromCurrentEquip = function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
            var serials = [];
            serials.push((_a = Orion.ObjAtLayer(14, 'self')) === null || _a === void 0 ? void 0 : _a.Serial());
            serials.push((_b = Orion.ObjAtLayer(2, 'self')) === null || _b === void 0 ? void 0 : _b.Serial());
            serials.push((_c = Orion.ObjAtLayer(13, 'self')) === null || _c === void 0 ? void 0 : _c.Serial());
            serials.push((_d = Orion.ObjAtLayer(4, 'self')) === null || _d === void 0 ? void 0 : _d.Serial());
            serials.push((_e = Orion.ObjAtLayer(24, 'self')) === null || _e === void 0 ? void 0 : _e.Serial());
            serials.push((_f = Orion.ObjAtLayer(19, 'self')) === null || _f === void 0 ? void 0 : _f.Serial());
            serials.push((_g = Orion.ObjAtLayer(6, 'self')) === null || _g === void 0 ? void 0 : _g.Serial());
            serials.push((_h = Orion.ObjAtLayer(7, 'self')) === null || _h === void 0 ? void 0 : _h.Serial());
            serials.push((_j = Orion.ObjAtLayer(10, 'self')) === null || _j === void 0 ? void 0 : _j.Serial());
            serials.push((_k = Orion.ObjAtLayer(1, 'self')) === null || _k === void 0 ? void 0 : _k.Serial());
            serials.push((_l = Orion.ObjAtLayer(22, 'self')) === null || _l === void 0 ? void 0 : _l.Serial());
            serials.push((_m = Orion.ObjAtLayer(3, 'self')) === null || _m === void 0 ? void 0 : _m.Serial());
            serials.push((_o = Orion.ObjAtLayer(17, 'self')) === null || _o === void 0 ? void 0 : _o.Serial());
            serials.push((_p = Orion.ObjAtLayer(12, 'self')) === null || _p === void 0 ? void 0 : _p.Serial());
            serials.push((_q = Orion.ObjAtLayer(20, 'self')) === null || _q === void 0 ? void 0 : _q.Serial());
            return serials;
        };
        Dress.saveEquip = function () {
            var equipSerials = Scripts.Dress.getSerialsFromCurrentEquip();
            Shared.AddArray('savedEquip', equipSerials);
            Scripts.Utils.playerPrint('ULOZEN EQUIP');
        };
        Dress.equip = function (eq) {
            if (!eq) {
                eq = Shared.GetArray('savedEquip');
            }
            for (var _i = 0, eq_1 = eq; _i < eq_1.length; _i++) {
                var s = eq_1[_i];
                if (!s) {
                    continue;
                }
                if (Player.Weight() <= Player.MaxWeight()) {
                    Orion.Equip(s);
                    Orion.Wait(200);
                }
                else {
                    Scripts.Utils.log('EQUIP NEBUDE SPUSTEN SI PODHOZEN', ColorEnum.red);
                    return;
                }
            }
        };
        Dress.nextWeapon = function (showName, previous) {
            if (showName === void 0) { showName = false; }
            if (previous === void 0) { previous = false; }
            var currentWeaponIndex = Shared.GetVar('currentWeaponArrayIndex', -1);
            var weapons = Shared.GetArray('weapons');
            if (!(weapons === null || weapons === void 0 ? void 0 : weapons.length)) {
                Scripts.Utils.playerPrint('Nemas nasetovane zadne zbrane, zkus dat nejdrive _resetWeapons');
                return;
            }
            if (previous) {
                currentWeaponIndex--;
                currentWeaponIndex < 0 && (currentWeaponIndex = weapons.length - 1);
            }
            else {
                currentWeaponIndex++;
                weapons.length === currentWeaponIndex && (currentWeaponIndex = 0);
            }
            Shared.AddVar('currentWeaponArrayIndex', currentWeaponIndex);
            var w = weapons[currentWeaponIndex];
            var weaponAlias = w.alias;
            var weaponName = w.name;
            var weapon = Orion.FindObject(weaponAlias);
            if (!weapon) {
                Scripts.Utils.playerPrint("nenasel jsem zbran " + weaponAlias, ColorEnum.red);
            }
            else {
                showName && Scripts.Utils.playerPrint(weaponName, ColorEnum.orange);
                Orion.Equip(weaponAlias);
                Orion.Wait(responseDelay);
            }
            if (!Orion.ObjAtLayer(2, 'self')) {
                var shield = Orion.FindObject('shield');
                if (shield) {
                    Orion.Equip('shield');
                }
            }
        };
        Dress.addWeapon = function (index) {
            Scripts.Utils.playerPrint("Add weapon on slot " + index);
            var alias = "weapon" + index;
            var selection = Orion.WaitForAddObject(alias, 60000);
            return selection === 1;
        };
        Dress.addShield = function () {
            Scripts.Utils.playerPrint("Add shield");
            var alias = "shield";
            var selection = Orion.WaitForAddObject(alias, 60000);
            return selection === 1;
        };
        Dress.resetWeaponsArray = function () {
            var i = 1;
            var weapons = [];
            while (Scripts.Dress.addWeapon(i)) {
                var alias = "weapon" + i;
                Orion.Click(alias);
                Orion.Wait(responseDelay);
                var weapon = Orion.FindObject(alias);
                weapons.push({ alias: alias, name: weapon.Name() });
                i++;
            }
            Scripts.Dress.addShield();
            Shared.AddArray('weapons', weapons);
        };
        return Dress;
    }());
    Scripts.Dress = Dress;
})(Scripts || (Scripts = {}));
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Scripts;
(function (Scripts) {
    var Jewelry = (function () {
        function Jewelry() {
        }
        Jewelry.useRR = function () {
            var rr = gameObject.rings.rr;
            var grr = gameObject.rings.grr;
            var grr2 = gameObject.rings.grr2;
            var hodf = gameObject.uncategorized.hodf;
            var rrSerials = Orion.FindType(rr.graphic, rr.color);
            var grrSerials = Orion.FindType(grr.graphic, grr.color);
            var grr2Serials = Orion.FindType(grr2.graphic, grr2.color);
            var hodfSerials = Orion.FindType(hodf.graphic, hodf.color);
            var rings = __spreadArrays(rrSerials, grrSerials, grr2Serials, hodfSerials);
            if (!rings.length) {
                Scripts.Utils.playerPrint("Nemas Reflex ringy", ColorEnum.red);
                return;
            }
            Orion.ClearJournal();
            for (var _i = 0, rings_1 = rings; _i < rings_1.length; _i++) {
                var ring = rings_1[_i];
                var ringObject = Orion.FindObject(ring);
                var x = ringObject.X();
                var y = ringObject.Y();
                Orion.UseObject(ring);
                if (Orion.InJournal('It too soon to use it again')) {
                    Orion.MoveItem(ring, 0, 'backpack', x, y);
                    break;
                }
            }
        };
        Jewelry.useGGR = function () {
            var ggrObj = gameObject.rings.ggr;
            var ggrSerials = Orion.FindType(ggrObj.graphic, ggrObj.color);
            if (!ggrSerials.length) {
                Scripts.Utils.playerPrint("Nemas Great Gold ringy", ColorEnum.red);
                return;
            }
            var ggrSerial = ggrSerials[0];
            Orion.UseObject(ggrSerial);
            Orion.Wait(50);
            Orion.MoveItem(ggrSerial, 0, 'backpack', ggrObj.bag.x, ggrObj.bag.y);
        };
        return Jewelry;
    }());
    Scripts.Jewelry = Jewelry;
})(Scripts || (Scripts = {}));
function displayKlamakInfo() {
    var klamakTimer = Scripts.Klamak.getKlamakTimerByAnimalLoreSkill();
    var time = 1000;
    Orion.Wait(time);
    while (Orion.Timer(TimersEnum.klamak) >= 1000) {
        if (time >= klamakTimer) {
            Scripts.Utils.playerPrint("[ KLAMAK READY ]", ColorEnum.pureWhite);
            break;
        }
        var addTime = 250;
        Orion.Wait(addTime);
        time += addTime;
    }
}
var Scripts;
(function (Scripts) {
    var Klamak = (function () {
        function Klamak() {
        }
        Klamak.next = function () {
            var lists = ['petlvl1', 'petlvl2', 'petlvl3', 'petlvl4', 'petlvl5'];
            var current = Orion.GetGlobal('klamak');
            if (!current) {
                Orion.SetGlobal('klamak', lists[0]);
            }
            else {
                var currentIndex = lists.indexOf(current);
                var nextIndex = currentIndex + 1 === lists.length ? 0 : currentIndex + 1;
                Orion.SetGlobal('klamak', lists[nextIndex]);
            }
            var nextList = Orion.GetGlobal('klamak');
            Scripts.Utils.playerPrint(nextList);
        };
        Klamak.useKlamak = function (lvl, useAim, priorityList, ignoreSerials) {
            if (useAim === void 0) { useAim = false; }
            if (priorityList === void 0) { priorityList = []; }
            if (ignoreSerials === void 0) { ignoreSerials = []; }
            var level = gameObject.klamak['lvl' + lvl];
            var findSerial = '';
            for (var _i = 0, priorityList_1 = priorityList; _i < priorityList_1.length; _i++) {
                var klamakName = priorityList_1[_i];
                for (var itemName in level) {
                    if (klamakName === itemName) {
                        var klamak = level[itemName];
                        var klamakSerials = Orion.FindType(klamak.graphic, klamak.color);
                        var s = klamakSerials.filter(function (i) { return ignoreSerials.indexOf(i) === -1; });
                        if (s.length) {
                            findSerial = s[0];
                            break;
                        }
                    }
                }
                if (findSerial !== '') {
                    break;
                }
            }
            if (findSerial === '') {
                for (var itemName in level) {
                    if (priorityList.indexOf(itemName) > -1) {
                        continue;
                    }
                    var klamak = level[itemName];
                    var klamakSerials = Orion.FindType(klamak.graphic, klamak.color);
                    var s = klamakSerials.filter(function (i) { return ignoreSerials.indexOf(i) === -1; });
                    if (s.length) {
                        findSerial = s[0];
                        break;
                    }
                }
            }
            if (findSerial === '') {
                Scripts.Utils.playerPrint("[ nemas pety " + lvl + " ]", ColorEnum.red);
                return false;
            }
            if (useAim) {
                var selection = Orion.WaitForAddObject('klamakTarget');
                if (selection === 0) {
                    return false;
                }
                var target = {};
                if (selection === 1) {
                    var targetGameObject = Orion.FindObject('klamakTarget');
                    target.x = targetGameObject.X();
                    target.y = targetGameObject.Y();
                    target.z = targetGameObject.Z();
                }
                else {
                    target.x = SelectedTile.X();
                    target.y = SelectedTile.Y();
                    target.z = SelectedTile.Z();
                }
                Orion.MoveItem(findSerial, 1, 'ground', target.x, target.y, target.z);
                Orion.Wait(responseDelay);
            }
            Orion.WarMode(true);
            Orion.Wait(100);
            Orion.ClearJournal('You cannot unshrink creature');
            Orion.UseObject(findSerial);
            var unshrinkSuccess = Scripts.Utils.waitWhileSomethingInJournal(['You cannot unshrink creature'], 100, 5) !== 0;
            unshrinkSuccess && Scripts.Klamak.klamakCooldown();
            return true;
        };
        Klamak.klamakCooldown = function () {
            var petCoolDown = Scripts.Klamak.getKlamakTimerByAnimalLoreSkill();
            Scripts.Klamak.displayKlamakTimer(petCoolDown);
            (config === null || config === void 0 ? void 0 : config.klamak.showReadyMessage) && Orion.Exec('displayKlamakInfo', false);
        };
        Klamak.displayKlamakTimer = function (timer) {
            if (timer === void 0) { timer = 0; }
            if (timer <= 0) {
                return;
            }
            var klamakTimerConfig = config === null || config === void 0 ? void 0 : config.klamak.timer;
            Orion.AddDisplayTimer(TimersEnum.klamak, timer, (klamakTimerConfig === null || klamakTimerConfig === void 0 ? void 0 : klamakTimerConfig.position) || 'LeftTop', (klamakTimerConfig === null || klamakTimerConfig === void 0 ? void 0 : klamakTimerConfig.type) || 'Line|Bar', (klamakTimerConfig === null || klamakTimerConfig === void 0 ? void 0 : klamakTimerConfig.text) || 'Klamak', (klamakTimerConfig === null || klamakTimerConfig === void 0 ? void 0 : klamakTimerConfig.xFromPosition) || 0, (klamakTimerConfig === null || klamakTimerConfig === void 0 ? void 0 : klamakTimerConfig.yFromPosition) || 215, (klamakTimerConfig === null || klamakTimerConfig === void 0 ? void 0 : klamakTimerConfig.textColor) || '0x88B', (klamakTimerConfig === null || klamakTimerConfig === void 0 ? void 0 : klamakTimerConfig.font) || 0, (klamakTimerConfig === null || klamakTimerConfig === void 0 ? void 0 : klamakTimerConfig.backgroundColor) || '0x88B');
            Scripts.Utils.resetTimer(TimersEnum.klamak);
        };
        Klamak.getKlamakTimerByAnimalLoreSkill = function () {
            var animalLoreSkill = Orion.SkillValue('Animal Lore');
            var klamakTimer = 0;
            if (animalLoreSkill >= 1100) {
                klamakTimer = 2000;
            }
            else if (animalLoreSkill >= 1000) {
                klamakTimer = 7000;
            }
            else if (animalLoreSkill >= 900) {
                klamakTimer = 18000;
            }
            else if (animalLoreSkill >= 600) {
                klamakTimer = 42000;
            }
            else if (animalLoreSkill >= 500) {
                klamakTimer = 49000;
            }
            return klamakTimer;
        };
        return Klamak;
    }());
    Scripts.Klamak = Klamak;
})(Scripts || (Scripts = {}));
var LOOT_BAG = 'loot/bag';
var Scripts;
(function (Scripts) {
    var Loot = (function () {
        function Loot() {
        }
        Loot.addLootBag = function () {
            Scripts.Utils.playerPrint('Target your loot bag');
            return Orion.WaitForAddObject(LOOT_BAG, 60000);
        };
        Loot.addCutWeapon = function () {
            Scripts.Utils.playerPrint('Target your cut weapon');
            return Orion.WaitForAddObject('cutWeapon', 60000);
        };
        Loot.carveBody = function (carveNearestBodyAutomatically) {
            if (carveNearestBodyAutomatically === void 0) { carveNearestBodyAutomatically = false; }
            var CUT_WEAPON = 'cutWeapon';
            var cutWeapon = Orion.FindObject(CUT_WEAPON);
            if (!cutWeapon) {
                var nbDaggerSerial = Scripts.Utils.findFirstType(gameObject.uncategorized.nbDagger, 1);
                if (!nbDaggerSerial) {
                    Scripts.Utils.createGameObjectSelections([{ ask: 'Cim budes rezat ?', addObject: CUT_WEAPON }]);
                    cutWeapon = Orion.FindObject(CUT_WEAPON);
                }
                else {
                    cutWeapon = Orion.FindObject(nbDaggerSerial);
                }
            }
            if (carveNearestBodyAutomatically) {
                var body = Orion.FindType('0x2006', '-1', 'ground', 'near', 3);
                if (body.length) {
                    Orion.WaitTargetObject(body[0]);
                }
            }
            Orion.UseObject(cutWeapon.Serial());
        };
        Loot.corpses = function (cut) {
            if (cut === void 0) { cut = true; }
            Orion.ClearJournal('You put the');
            var snapshot = this.getBagSnapshot();
            this.lootCorpsesAround(cut);
            Orion.Wait(350);
            this.displayLoot();
            this.moveLootToLootBag(snapshot);
        };
        Loot.lootAllFrom = function (delay) {
            if (delay === void 0) { delay = responseDelay; }
            Scripts.Utils.targetObjectNotSelf('lootAllContainer', "Target object to loot");
            Orion.OpenContainer('lootAllContainer', 5000, "Container not found");
            var itemsInCorpse = Orion.FindType('any', 'any', 'lootAllContainer');
            if (itemsInCorpse.length) {
                for (var _i = 0, itemsInCorpse_1 = itemsInCorpse; _i < itemsInCorpse_1.length; _i++) {
                    var itemId = itemsInCorpse_1[_i];
                    Orion.MoveItem(itemId, 0, 'myLootBag');
                    Orion.Wait(delay);
                }
            }
        };
        Loot.lootCorpsesAround = function (cut) {
            var listOfCorpses = Orion.FindType('0x2006', '-1', 'ground', 'fast', 2, 'red');
            var LHand = Orion.ObjAtLayer(1);
            var RHand = Orion.ObjAtLayer(2);
            while (listOfCorpses.length) {
                for (var _i = 0, listOfCorpses_1 = listOfCorpses; _i < listOfCorpses_1.length; _i++) {
                    var id = listOfCorpses_1[_i];
                    Scripts.Loot.lootCorpseId(id, cut);
                    Orion.Ignore(id);
                    Orion.Wait(100);
                }
                listOfCorpses = Orion.FindType('0x2006', '-1', 'ground', 'fast', 2, 'red');
            }
            Scripts.Dress.equip([LHand === null || LHand === void 0 ? void 0 : LHand.Serial(), RHand === null || RHand === void 0 ? void 0 : RHand.Serial()]);
            var itemsOnGround = Orion.FindList('lootItems', 'ground', 'fast', 4);
            this.grabItems(itemsOnGround);
        };
        Loot.lootCorpseId = function (corpseId, cut) {
            Orion.OpenContainer(corpseId, 5000, "Container id " + corpseId + " not found");
            var hasLootBag = Orion.Count('0x0E76', '0x049A', corpseId) > 0;
            if (hasLootBag && cut) {
                if (Orion.FindObject('cutWeapon')) {
                    Orion.CancelWaitTarget();
                    Orion.WaitTargetObject(corpseId);
                    Orion.UseObject('cutWeapon');
                }
                Orion.Wait(250);
            }
            var itemsInCorpse = Orion.FindList('lootItems', corpseId);
            if (itemsInCorpse.length) {
                this.grabItems(itemsInCorpse);
            }
        };
        Loot.grabItems = function (serials) {
            var serverLagActionsLeft = 4;
            for (var _i = 0, serials_2 = serials; _i < serials_2.length; _i++) {
                var serial = serials_2[_i];
                Orion.MoveItem(serial, 0);
                Orion.Wait(serverLagActionsLeft > 0 ? 150 : 500);
                serverLagActionsLeft--;
            }
        };
        Loot.getBagSnapshot = function () {
            return Orion.FindType(-1, -1, 'backpack', 'item', undefined, undefined, false);
        };
        Loot.moveLootToLootBag = function (oldSnapshot, lootBag) {
            if (lootBag === void 0) { lootBag = LOOT_BAG; }
            if (!Orion.FindObject(lootBag)) {
                return;
            }
            this.getBagSnapshot()
                .filter(function (serial) { return oldSnapshot.indexOf(serial) < 0; })
                .forEach(function (serial, i) {
                Orion.MoveItem(serial, 0, lootBag);
                Orion.Wait(i > 4 ? 500 : 250);
            });
        };
        Loot.displayLoot = function () {
            var excludes = [
                'Loot',
                'gold coins',
                'Black Pearlss',
                'Ginsengs',
                'Sulfurous Ashs',
                'Nightshades',
                'Garlics',
                'Blood Mosss',
                "Spider's Silk",
                "Spider's Silks",
                'Mandrake Rootss',
                "Serpent's Scales",
                'Brimstones',
                'Boness',
                'Eyes of Newts',
                "Wyrm's Heartss",
                'Volcanic Ashs',
                "Executioner's Caps",
                'Fertile Dirts',
                'Blackmoors',
                'Pumices',
                'Obsidians',
                'Bloodspawns',
                'Daemon Bloods',
                'Daemon Boness',
                "Serpent's Scaless",
                'Batwingss',
                "Dragon's Bloods",
            ];
            var aliases = {
                'Ancient Bone Helmet': '+5 Necro Helm',
                'Ancient Bone Arms': '+5 Necro Arms',
                'Ancient Bone Gloves': '+5 Necro Gloves',
                'Ancient Bone Leggins': '+5 Necro Legs',
                'Ancient Bone Chest': '+5 Necro Chest',
                'Ancient Skeleton Helmet': '+15 Necro Helm',
                'Ancient Skeleton Arms': '+15 Necro Arms',
                'Ancient Skeleton Gloves': '+15 Necro Gloves',
                'Ancient Skeleton Leggins': '+15 Necro Legs',
                'Ancient Skeleton Chest': '+15 Necro Chest',
                'Ancient Liche Helmet': '+25 Necro Helm',
                'Ancient Liche Arms': '+25 Necro Arms',
                'Ancient Liche Gloves': '+25 Necro Gloves',
                'Ancient Liche Leggins': '+25 Necro Legs',
                'Ancient Liche Chest': '+25 Necro Chest'
            };
            var parseLootItem = function (itemName) {
                var types = {
                    'of Ruin': '+1',
                    'of Might': '+3',
                    'of Force': '+5',
                    'of Power': '+7',
                    'of Vanquishing': '+9',
                    'of Defense': '+5',
                    'of Guarding': '+10',
                    'of Hardening': '+15',
                    'of Fortification': '+20',
                    'of Invulnerability': '+25'
                };
                for (var suffix in types) {
                    if (itemName.indexOf(suffix) > 0) {
                        return types[suffix] + " " + itemName.replace(suffix, '');
                    }
                }
                return itemName;
            };
            for (var i = 0; Orion.JournalLine(i); i++) {
                var lootText = Orion.JournalLine(i).Text();
                if (lootText.indexOf('You put the') == 0) {
                    var loot_1 = lootText.replace('You put the ', '').replace(' in your pack.', '');
                    if (loot_1.length && excludes.indexOf(loot_1) < 0) {
                        var displayLoot = aliases[loot_1] || parseLootItem(loot_1);
                        Scripts.Utils.playerPrint(displayLoot, ColorEnum.green);
                        if (displayLoot === 'Dark Chest of Wonders') {
                            Orion.UseType('0x0E80', '0x0123');
                            Orion.Wait(100);
                        }
                    }
                }
            }
        };
        return Loot;
    }());
    Scripts.Loot = Loot;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var MobMaster = (function () {
        function MobMaster() {
        }
        MobMaster.rename = function (mob) {
            var chars = 'abcdefghijklmnopqrstuvwxyz';
            var mobSerial = mob === null || mob === void 0 ? void 0 : mob.Serial();
            var canRename = mob === null || mob === void 0 ? void 0 : mob.CanChangeName();
            var mobName = mob === null || mob === void 0 ? void 0 : mob.Name();
            if (!canRename && Scripts.Targeting.isFriendlyTargetType(mob === null || mob === void 0 ? void 0 : mob.Graphic(), mob === null || mob === void 0 ? void 0 : mob.Color(), null)) {
                Orion.GetStatus(mobSerial);
                Orion.RequestName(mobSerial);
                if (Scripts.Utils.waitForCond(function () {
                    return mob === null || mob === void 0 ? void 0 : mob.CanChangeName();
                }, 125)) {
                    mobName = mob === null || mob === void 0 ? void 0 : mob.Name();
                    canRename = mob === null || mob === void 0 ? void 0 : mob.CanChangeName();
                }
            }
            if (canRename) {
                if (!mobName || mobName.length === 0) {
                    Orion.GetStatus(mobSerial);
                    Orion.RequestName(mobSerial);
                    mobName = mob === null || mob === void 0 ? void 0 : mob.Name();
                }
                if (!MobMaster.isRenamedByPlayer(mobName)) {
                    var resultName = '';
                    for (var r = 0; r < 5; r++) {
                        var rand = Orion.Random(chars.length);
                        resultName = resultName + chars[rand];
                    }
                    resultName = MobMaster.getPlayerShorCode() + resultName;
                    resultName =
                        resultName.substring(0, resultName.length - 2) +
                            resultName[resultName.length - 2].toLocaleUpperCase() +
                            resultName[resultName.length - 1].toLocaleUpperCase();
                    Orion.RenameMount(mobSerial, resultName);
                    var sychr = 0;
                    var newName = mobName;
                    while (newName === mobName && sychr < 400) {
                        Orion.GetStatus(mobSerial);
                        Orion.RequestName(mobSerial);
                        Orion.Wait(100);
                        var mobObj = Orion.FindObject(mobSerial);
                        if (mobObj) {
                            newName = mobObj === null || mobObj === void 0 ? void 0 : mobObj.Name();
                        }
                        else {
                            break;
                        }
                        sychr += 100;
                    }
                    var renameSuccess = newName !== mobName;
                    if (renameSuccess) {
                        Orion.CharPrint(mobSerial, ColorEnum.pureWhite, "[ " + newName + " ]");
                        return true;
                    }
                }
            }
            return false;
        };
        MobMaster.resetMobCommands = function () {
            Shared.RemoveVar('mobgo.lastSerial');
            Shared.RemoveVar('mobkill.target');
            Shared.RemoveVar('mobkill.lastSerial');
        };
        MobMaster.resolveSayColor = function () {
            return (config === null || config === void 0 ? void 0 : config.mobMaster.sayColor) || '0x00B3';
        };
        MobMaster.resolveMobkillTarget = function (targets, useSavedTarget) {
            if (useSavedTarget === void 0) { useSavedTarget = true; }
            var target = new Scripts.TargetResult();
            if (useSavedTarget) {
                var storedSerial = Shared.GetVar('mobkill.target');
                if (storedSerial) {
                    target.gameObject(storedSerial);
                }
            }
            if (!target.isValid() && targets) {
                target = Scripts.TargetingEx.getTarget(targets);
            }
            if (target.isValid() && target.gameObject().Mobile() && !target.gameObject().Dead()) {
                Shared.AddVar('mobkill.target', target.gameObject().Serial());
            }
            return target;
        };
        MobMaster.resolveMobkillPets = function (currentTarget) {
            var storedPets = new Array();
            var currentPets = Orion.FindTypeEx('!0x0190|!0x0191', '0xFFFF', 'ground', 'live', 18).filter(function (obj) {
                return obj.CanChangeName() && !storedPets.some(function (a) { return a.Serial() == obj.Serial(); });
            });
            currentPets.sort(function (a, b) {
                if (a.Serial() > b.Serial())
                    return 0;
                else
                    return 1;
            });
            currentPets.forEach(function (element) {
                storedPets.push(element);
            });
            for (var i = storedPets.length - 1; i >= 0; i--) {
                if (!Orion.FindObject(storedPets[i].Serial()) || !storedPets[i].Exists()) {
                    storedPets.splice(i);
                }
            }
            if ((currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.isValid()) && (currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.gameObject().Mobile()) &&
                !(currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.gameObject().Dead())) {
                storedPets = storedPets.filter(function (obj) {
                    return obj.Serial() !== currentTarget.gameObject().Serial();
                });
            }
            return storedPets;
        };
        MobMaster.mobKillAll = function (targets, useSavedTarget) {
            var _a, _b, _c, _d, _e, _f, _g;
            if (useSavedTarget === void 0) { useSavedTarget = true; }
            var target = MobMaster.resolveMobkillTarget(targets, useSavedTarget);
            var storedPets = MobMaster.resolveMobkillPets(target);
            if ((storedPets === null || storedPets === void 0 ? void 0 : storedPets.length) && (target === null || target === void 0 ? void 0 : target.isValid()) && ((_a = target === null || target === void 0 ? void 0 : target.gameObject()) === null || _a === void 0 ? void 0 : _a.Mobile()) &&
                !((_b = target === null || target === void 0 ? void 0 : target.gameObject()) === null || _b === void 0 ? void 0 : _b.Dead())) {
                for (var _i = 0, storedPets_1 = storedPets; _i < storedPets_1.length; _i++) {
                    var pet = storedPets_1[_i];
                    var sayColor = MobMaster.resolveSayColor();
                    Scripts.Utils.ensureName(pet);
                    Scripts.Utils.ensureName(target.gameObject());
                    var fastTimer = Orion.Timer('mobkill.fastprintsufix');
                    var hitColor = MobMaster.getPrintEnemyColorByHits((_c = target.gameObject()) === null || _c === void 0 ? void 0 : _c.Hits(), (_d = target.gameObject()) === null || _d === void 0 ? void 0 : _d.MaxHits());
                    sayColor = hitColor;
                    if (fastTimer > 3000) {
                        Orion.PrintFast((_e = target.gameObject()) === null || _e === void 0 ? void 0 : _e.Serial(), hitColor, 0, "[" + ((_f = target.gameObject()) === null || _f === void 0 ? void 0 : _f.Hits()) + "/" + ((_g = target.gameObject()) === null || _g === void 0 ? void 0 : _g.MaxHits()) + "]");
                        Orion.SetTimer('mobkill.fastprintsufix');
                    }
                    else if (fastTimer < 0) {
                        Orion.SetTimer('mobkill.fastprintsufix');
                    }
                    target.waitTarget();
                    Scripts.Utils.sayWithColor(pet.Name() + " kill", sayColor);
                    var success = Orion.WaitForTarget(1000);
                }
            }
            else {
                Scripts.Utils.playerPrint('[ no pets target ]', ColorEnum.orange);
            }
        };
        MobMaster.mobKill = function (targets, useSavedTarget) {
            var _a, _b, _c, _d, _e;
            if (useSavedTarget === void 0) { useSavedTarget = true; }
            var target = MobMaster.resolveMobkillTarget(targets, useSavedTarget);
            var storedPets = MobMaster.resolveMobkillPets(target);
            var lastSerial = Shared.GetVar('mobkill.lastSerial', '');
            var pet = Orion.FindObject('0');
            if (storedPets && storedPets.length > 0) {
                if (!lastSerial || lastSerial === '') {
                    pet = storedPets[0];
                    lastSerial = pet.Serial();
                }
                else {
                    for (var i = 0; i < storedPets.length; i++) {
                        var nextPet = storedPets[i];
                        if (nextPet.Exists() && nextPet.Serial() === lastSerial) {
                            if (i === storedPets.length - 1) {
                                pet = storedPets[0];
                                lastSerial = pet.Serial();
                            }
                            else {
                                pet = storedPets[i + 1];
                                lastSerial = pet.Serial();
                            }
                            break;
                        }
                    }
                }
                if (pet === null || pet === void 0 ? void 0 : pet.Exists()) {
                    Shared.AddVar('mobkill.lastSerial', lastSerial);
                    var sayColor = MobMaster.resolveSayColor();
                    Scripts.Utils.ensureName(pet);
                    if ((target === null || target === void 0 ? void 0 : target.isValid()) && (target === null || target === void 0 ? void 0 : target.gameObject().Mobile()) && !(target === null || target === void 0 ? void 0 : target.gameObject().Dead())) {
                        var fastTimer = Orion.Timer('mobkill.fastprintsufix');
                        var hitColor = MobMaster.getPrintEnemyColorByHits((_a = target.gameObject()) === null || _a === void 0 ? void 0 : _a.Hits(), (_b = target.gameObject()) === null || _b === void 0 ? void 0 : _b.MaxHits());
                        sayColor = hitColor;
                        if (fastTimer > 3000) {
                            Orion.PrintFast((_c = target.gameObject()) === null || _c === void 0 ? void 0 : _c.Serial(), hitColor, 0, "[" + ((_d = target.gameObject()) === null || _d === void 0 ? void 0 : _d.Hits()) + "/" + ((_e = target.gameObject()) === null || _e === void 0 ? void 0 : _e.MaxHits()) + "]");
                            Orion.SetTimer('mobkill.fastprintsufix');
                        }
                        else if (fastTimer < 0) {
                            Orion.SetTimer('mobkill.fastprintsufix');
                        }
                        Scripts.Utils.ensureName(target.gameObject());
                        target.waitTarget();
                    }
                    Scripts.Utils.sayWithColor(pet.Name() + " kill", sayColor);
                }
                else {
                    Shared.RemoveVar('mobkill.lastSerial');
                }
            }
            else {
                Shared.RemoveVar('mobkill.lastSerial');
            }
        };
        MobMaster.shrinkOne = function () {
            var pets = Orion.FindTypeEx('!0x0190|!0x0191', '0xFFFF', 'ground', 'live', 2);
            var ignoreList = Shared.GetArray('mobmaster.shrinkOne.ignoreList', Array());
            Orion.ClearJournal('Ale co to delas?|Bez bliz|Zviratko bylo shrinknuto');
            pets = pets
                .filter(function (a) { return a.CanChangeName() && a.Exists() && !ignoreList.some(function (p) { return p === a.Serial(); }); })
                .sort(function (a, b) { return a.Hits() - b.Hits(); });
            if (pets.length > 0) {
                for (var i = 0; i < pets.length; i++) {
                    var pet = pets[i];
                    Orion.PrintFast(pet.Serial(), ColorEnum.green, 0, 'pet');
                    Orion.WaitTargetObject(pet.Serial());
                    this.useShrinkKad();
                    var resultIndex = Scripts.Utils.waitWhileSomethingInJournal(['Ale co to delas?', 'Bez bliz', 'Zviratko bylo shrinknuto'], 500);
                    if (resultIndex > -1) {
                        if (Orion.InJournal('Ale co to delas?')) {
                            Orion.PrintFast(pet.Serial(), ColorEnum.red, 0, 'ignore');
                            ignoreList.push(pet.Serial());
                        }
                        else {
                            Shared.AddArray('mobmaster.shrinkOne.ignoreList', ignoreList);
                        }
                    }
                    break;
                }
            }
            else {
                Orion.PrintFast(Player.Serial(), ColorEnum.green, 0, 'no pets');
            }
            Shared.AddArray('mobmaster.shrinkOne.ignoreList', ignoreList);
            var shrinkKlamakList = Scripts.Clean.getGameObjectList(gameObject.klamak);
            for (var i = 0; i < shrinkKlamakList.length; i++) {
                var shrinked = Orion.FindTypeEx(shrinkKlamakList[i].graphic, shrinkKlamakList[i].color || '0xFFFF', 'ground', 'item', 2);
                if (shrinked && shrinked.length) {
                    for (var o = 0; o < shrinked.length; o++) {
                        Orion.MoveItem(shrinked[o].Serial(), 1, 'backpack', 20, 20);
                        Orion.Wait(350);
                        break;
                    }
                }
            }
        };
        MobMaster.useShrinkKad = function () {
            var kad = gameObject.potions.shrink.kad;
            Orion.UseType(kad.graphic, kad.color);
        };
        MobMaster.mobCome = function () {
            Scripts.TargetingEx.cancelResetTarget();
            var sayColor = MobMaster.resolveSayColor();
            MobMaster.resetMobCommands();
            Scripts.Utils.sayWithColor('all come', sayColor);
        };
        MobMaster.mobStop = function () {
            Scripts.TargetingEx.cancelResetTarget();
            var sayColor = MobMaster.resolveSayColor();
            MobMaster.resetMobCommands();
            Scripts.Utils.sayWithColor('all stop', sayColor);
        };
        MobMaster.mobGo = function () {
            Scripts.TargetingEx.cancelResetTarget();
            var text = 'all go';
            var sayColor = MobMaster.resolveSayColor();
            var lastMob = Orion.FindObject(Shared.GetVar('mobgo.lastSerial'));
            var statusMob = Orion.FindObject('laststatus');
            if (!lastMob || !lastMob.Exists()) {
                lastMob = statusMob;
            }
            if (lastMob && lastMob.Exists() && lastMob.CanChangeName()) {
                Scripts.Utils.ensureName(lastMob);
                Shared.AddVar('mobgo.lastSerial', lastMob.Serial());
                var hitColor = MobMaster.getPrintAlieColorByHits(lastMob.Hits(), lastMob.MaxHits());
                text = lastMob.Name() + " go";
                sayColor = hitColor;
                var fastTimer = Orion.Timer('mobgo.fastprintsufix');
                if (fastTimer > 2000) {
                    Orion.PrintFast(lastMob.Serial(), hitColor, 0, MobMaster.mobNameSufix(lastMob.Name()));
                    Orion.SetTimer('mobgo.fastprintsufix');
                }
                else if (fastTimer < 0) {
                    Orion.SetTimer('mobgo.fastprintsufix');
                }
            }
            else {
                Shared.RemoveVar('mobgo.lastSerial');
            }
            Scripts.Utils.sayWithColor(text, sayColor);
        };
        MobMaster.getPrintAlieColorByHits = function (hits, maxHits) {
            var c = '0x023b';
            if (hits && maxHits) {
                var perc = hits / maxHits;
                if (perc >= 0.8)
                    c = '0x003e';
                else if (perc >= 0.6)
                    c = '0x003f';
                else if (perc >= 0.4)
                    c = '0x0040';
                else if (perc >= 0.2)
                    c = '0x0041';
                else if (perc >= 0.1)
                    c = '0x0042';
            }
            return c;
        };
        MobMaster.getPrintEnemyColorByHits = function (hits, maxHits) {
            var c = '0x021d';
            if (hits && maxHits) {
                var perc = hits / maxHits;
                if (perc >= 0.8)
                    c = '0x0025';
                else if (perc >= 0.6)
                    c = '0x0026';
                else if (perc >= 0.4)
                    c = '0x0027';
                else if (perc >= 0.2)
                    c = '0x0028';
                else if (perc >= 0.1)
                    c = '0x0029';
            }
            return c;
        };
        MobMaster.getPlayerShorCode = function () {
            var playerShorCode = Shared.GetVar('playerShorCode');
            if (!playerShorCode || playerShorCode === '') {
                var name_1 = Player.Name();
                if (!name_1 || name_1 === '') {
                    Orion.GetStatus(Player.Serial());
                    Orion.RequestName(Player.Serial());
                    name_1 = Player.Name();
                }
                name_1 = name_1.toLocaleLowerCase();
                name_1 = name_1.replace(' ', '');
                name_1 = name_1.replace('-', '');
                name_1 = name_1.replace("'", '');
                name_1 = name_1.replace('_', '');
                name_1 = name_1.replace('.', '');
                name_1 = name_1.replace(',', '');
                playerShorCode = name_1;
                if (name_1.length > 2) {
                    var mid = (name_1.length / 2) | 0;
                    playerShorCode = name_1[0] + name_1[mid] + name_1[name_1.length - 1];
                }
                Shared.AddVar('playerShorCode', playerShorCode);
            }
            return playerShorCode;
        };
        MobMaster.mobNameSufix = function (name) {
            var result = null;
            if (name && name.length > 1) {
                result = name[name.length - 2] + name[name.length - 1];
            }
            return result;
        };
        MobMaster.isRenamedByPlayer = function (name) {
            if (name && name.length > 0) {
                var code = MobMaster.getPlayerShorCode();
                if (!code.length || name.length < code.length) {
                    return false;
                }
                for (var i = 0; i < code.length; i++) {
                    if (name[i] != code[i]) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        };
        return MobMaster;
    }());
    Scripts.MobMaster = MobMaster;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Mount = (function () {
        function Mount() {
        }
        Mount.mountAndDismount = function () {
            if (Orion.ObjAtLayer('Mount')) {
                Orion.UseObject('self');
            }
            else if (!Orion.FindObject('myMount')) {
                Scripts.Mount.resolveNewMount();
            }
            else {
                Orion.UseObject('myMount');
            }
        };
        Mount.resolveNewMount = function () {
            Orion.ClearJournal();
            Orion.Wait(50);
            if (Scripts.Mount.mountMyPet()) {
                return;
            }
            Scripts.Mount.unshrinkAndMount();
        };
        Mount.mountMyPet = function () {
            var mountsGraphic = '0x00DF|0x00DC|0x00DA|0x00E2|0x00CC|0x00E4|0x00D2|0x00DB|0x00C8';
            var groundPets = Orion.FindType(mountsGraphic, '0xFFFF', 'ground', 'live', 5);
            for (var _i = 0, groundPets_1 = groundPets; _i < groundPets_1.length; _i++) {
                var pet = groundPets_1[_i];
                var petObject = Orion.FindObject(pet);
                if (petObject.CanChangeName()) {
                    Orion.AddObject('myMount', pet);
                    Orion.UseObject(pet);
                    if (!Orion.InJournal('reach the creature')) {
                        return true;
                    }
                    Orion.ClearJournal();
                }
            }
            return false;
        };
        Mount.unshrinkAndMount = function () {
            var shrinkedMountsGraphic = '0x211F|0x2121|0x2124|0x20F6|0x2120|0x2135|0x2136|0x2137|0x20DD';
            var shrinkedMounts = Orion.FindType(shrinkedMountsGraphic, '0xFFFF');
            var mountsGraphic = '0x00DF|0x00DC|0x00DA|0x00E2|0x00CC|0x00E4|0x00D2|0x00DB|0x00C8';
            if (!shrinkedMounts.length) {
                return;
            }
            Orion.WarMode(true);
            Orion.ClearJournal();
            Orion.UseObject(shrinkedMounts[0]);
            Orion.Wait(responseDelay);
            if (Orion.InJournal('You cannot unshrink creature here or now')) {
                Orion.ClearJournal('You cannot unshrink creature');
                Scripts.Utils.log('You cannot unshrink creature here or now', ColorEnum.red);
                throw 'e';
            }
            Scripts.Klamak.klamakCooldown();
            var groundPets = Orion.FindType(mountsGraphic, '0xFFFF', 'ground', 'live', 5);
            for (var _i = 0, groundPets_2 = groundPets; _i < groundPets_2.length; _i++) {
                var pet = groundPets_2[_i];
                var petObject = Orion.FindObject(pet);
                if (petObject.CanChangeName()) {
                    Orion.AddObject('myMount', pet);
                    Orion.UseObject(pet);
                    break;
                }
            }
        };
        Mount.addMount = function () {
            Scripts.Utils.targetObjectNotSelf('myMount', "Target your mount");
        };
        return Mount;
    }());
    Scripts.Mount = Mount;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var PetCommander = (function () {
        function PetCommander() {
        }
        PetCommander.getUsedNames = function () {
            var usedNames = [];
            var myPets = Scripts.PetCommander.getMyPets();
            for (var _i = 0, myPets_1 = myPets; _i < myPets_1.length; _i++) {
                var pet = myPets_1[_i];
                usedNames.push(pet.name);
            }
            return usedNames;
        };
        PetCommander.getMyPets = function () {
            return Shared.GetArray('myPets', []);
        };
        PetCommander.filterPetsInDistance = function () {
            var myPets = Scripts.PetCommander.getMyPets();
            for (var _i = 0, myPets_2 = myPets; _i < myPets_2.length; _i++) {
                var pet = myPets_2[_i];
                var petObject = Orion.FindObject(pet.serial);
                if (!petObject || petObject.Distance() > 12) {
                    Scripts.PetCommander.removeFromMyPets(pet.name);
                }
            }
            return Scripts.PetCommander.getMyPets();
        };
        PetCommander.removeFromMyPets = function (name) {
            var myPets = Scripts.PetCommander.getMyPets();
            for (var i = 0; i < myPets.length; i++) {
                if (myPets[i].name === name) {
                    myPets.splice(i, 1);
                    Shared.AddArray('myPets', myPets);
                    break;
                }
            }
        };
        PetCommander.renameAndSavePet = function (petSerial) {
            var petName = Scripts.PetCommander.getRandomAvailableName();
            var pet = { serial: petSerial, name: petName };
            Orion.RenameMount(pet.serial, pet.name);
            Scripts.PetCommander.savePet(pet);
            return pet;
        };
        PetCommander.getNextPetByIndex = function (index) {
            var myPets = Shared.GetArray('myPets', []);
            if (myPets.length - 1 < index) {
                return;
            }
            return myPets[index];
        };
        PetCommander.ignoreMyPets = function () {
            var myPets = Scripts.PetCommander.getMyPets();
            for (var _i = 0, myPets_3 = myPets; _i < myPets_3.length; _i++) {
                var p = myPets_3[_i];
                Orion.Ignore(p.serial);
            }
        };
        PetCommander.getAvailableNames = function () {
            var usedNames = Scripts.PetCommander.getUsedNames();
            var namesPool = [
                'Andres',
                'Blanca',
                'Carlos',
                'Dolores',
                'Enrique',
                'Felicia',
                'Guillermo',
                'Hilda',
                'Ignacio',
                'Jimena',
                'Kevin',
                'Linda',
                'Marty',
                'Nora',
                'Olaf',
                'Damrey',
                'Haikui',
                'Kirogi',
                'Tembin',
                'Bolaven',
                'Sanba',
                'Jelawat',
                'Ewiniar',
                'Malaksi',
                'Gaemi',
                'Prapiroon',
                'Maria',
                'SonTinh',
                'Bopha',
                'Wukong',
                'Sonamu',
                'Shanshan',
                'Yagi',
                'Leepi',
                'Bebinca',
                'Rumbia',
                'Soulik',
                'Cimaron',
                'Jebi',
                'Mangkhut',
                'Utor',
                'Trami',
                'Yutu',
                'Toraji',
                'Usagi',
                'Pabuk',
                'Wutip',
                'Sepat',
                'Fitow',
                'Danas',
                'Nari',
                'Wipha',
                'Francisco',
                'Lekima',
                'Krosa',
                'Haiyan',
                'Podul',
                'Lingling',
                'Kaziki',
                'Faxai',
                'Peipah',
                'Tapah',
                'Mitag',
                'Hagibis',
                'Neoguri',
                'Rammasun',
                'Matmo',
                'Halong',
                'Nakri',
                'Fengshen',
                'Kalmaegi',
                'Kanmuri',
                'Phanfone',
                'Vongfong',
                'Nuri',
                'Sinlaku',
                'Hagupit',
                'Jangmi',
                'Mekkhala',
                'Higos',
                'Bavi',
                'Maysak',
                'Haishen',
                'Noul',
                'Dolphin',
                'Kujira',
                'Chanhom',
                'Linfa',
                'Nangka',
                'Soudelor',
                'Molave',
                'Goni',
                'Morakot',
                'Etau',
                'Vamco',
                'Krovanh',
                'Dujuan',
                'Mujigae',
                'Choiwan',
                'Koppu',
                'Ketsana',
                'Parma',
                'Melor',
                'Nepartak',
                'Lupit',
                'Mirinae',
                'Nida',
                'Omais',
                'Conson',
                'Chanthu',
                'Dianmu',
                'Mindulle',
                'Lionrock',
                'Kompasu',
                'Namtheun',
                'Malou',
                'Meranti',
                'Fanapi',
                'Malakas',
                'Megi',
                'Chaba',
                'Aere',
                'Songda',
                'Sarika',
                'Haima',
                'Meari',
                'Tokage',
                'Muifa',
                'Merbok',
                'Nanmadol',
                'Talas',
                'Noru',
                'Kulap',
                'Roke',
                'Sonca',
                'Nesat',
                'Haitang',
                'Nalgae',
                'Banyan',
                'Washi',
                'Pakhar',
                'Sanvu',
                'Mawar',
                'Guchol',
                'Patricia',
                'Rick',
                'Sandra',
                'Terry',
                'Vivian',
                'Waldo',
                'Xina',
                'York',
                'Zelda',
                'Agatha',
                'Blas',
                'Celia',
                'Darby',
                'Estelle',
                'Frank',
                'Georgette',
                'Howard',
                'Isis',
                'Javier',
                'Kay',
                'Lester',
                'Madeline',
                'Newton',
                'Orlene',
                'Paine',
                'Roslyn',
                'Seymour',
                'Tina',
                'Virgil',
                'Winifred',
                'Xavier',
                'Yolanda',
                'Zeke',
                'Adrian',
                'Beatriz',
                'Calvin',
                'Dora',
                'Eugene',
                'Fernanda',
                'Greg',
                'Hilary',
                'Irwin',
                'Jova',
                'Kenneth',
                'Lidia',
                'Max',
                'Norma',
                'Otis',
                'Pilar',
                'Ramon',
                'Selma',
                'Todd',
                'Veronica',
                'Wiley',
                'Xina',
                'York',
                'Zelda',
                'Aletta',
                'Bud',
                'Carlotta',
                'Daniel',
                'Emilia',
                'Fabio',
                'Gilma',
                'Hector',
                'Ileana',
                'John',
                'Kristy',
                'Lane',
                'Miriam',
                'Norman',
                'Olivia',
                'Paul',
                'Rosa',
                'Sergio',
                'Tara',
                'Vicente',
                'Willa',
                'Xavier',
                'Yolanda',
                'Zeke',
                'Alvin',
                'Barbara',
                'Cosme',
                'Dalila',
                'Erick',
                'Flossie',
                'Gil',
                'Henriette',
                'Ivo',
                'Juliette',
                'Kiko',
                'Lorena',
                'Manuel',
                'Narda',
                'Octave',
                'Priscilla',
                'Raymond',
                'Sonia',
                'Tico',
                'Velma',
                'Wallis',
                'Xina',
                'York',
                'Zelda',
                'Amanda',
                'Boris',
                'Cristina',
                'Douglas',
                'Elida',
                'Fausto',
                'Genevieve',
                'Hernan',
                'Iselle',
                'Julio',
                'Karina',
                'Lowell',
                'Marie',
                'Norbert',
                'Odile',
                'Polo',
                'Rachel',
                'Simon',
                'Trudy',
                'Vance',
                'Winnie',
                'Xavier',
                'Yolanda',
                'Zeke',
                'Talim',
                'Doksuri',
                'Khanun',
                'Vicente',
                'Saola',
            ];
            var availableNames = namesPool.filter(function (i) { return usedNames.indexOf(i) === -1; });
            return availableNames;
        };
        PetCommander.getRandomAvailableName = function () {
            var namesPool = Scripts.PetCommander.getAvailableNames();
            if (!namesPool.length) {
                Scripts.Utils.playerPrint('chyba');
                return 'Chyba';
            }
            var random = Math.floor(Math.random() * namesPool.length);
            return namesPool[random];
        };
        PetCommander.savePet = function (pet) {
            var myPets = Scripts.PetCommander.getMyPets();
            myPets.push(pet);
            Shared.AddArray('myPets', myPets);
        };
        PetCommander.getNewPet = function () {
            var monstersAlive = Orion.FindType('!0x0190|!0x0191', '0xFFFF', 'ground', 'live', 12);
            for (var _i = 0, monstersAlive_1 = monstersAlive; _i < monstersAlive_1.length; _i++) {
                var serial = monstersAlive_1[_i];
                var isMyMonster = Orion.FindObject(serial).CanChangeName();
                if (isMyMonster) {
                    var pet = Scripts.PetCommander.renameAndSavePet(serial);
                    Orion.Ignore(serial);
                    return pet;
                }
            }
        };
        PetCommander.killTarget = function () {
            var pet = Scripts.PetCommander.getNewPet();
            var myPets = Scripts.PetCommander.filterPetsInDistance();
            if (!pet && myPets.length) {
                var killIndex = Shared.GetVar('nextPetKillIndex', 0);
                if (killIndex >= myPets.length) {
                    killIndex = 0;
                }
                pet = Scripts.PetCommander.getNextPetByIndex(killIndex);
                Shared.AddVar('nextPetKillIndex', ++killIndex);
            }
            if (!pet) {
                return;
            }
            Orion.IgnoreReset();
            var petObject = Orion.FindObject(pet.serial);
            Scripts.PetCommander.ignoreMyPets();
            if (!petObject) {
                Scripts.PetCommander.removeFromMyPets(pet.name);
                myPets = Scripts.PetCommander.getMyPets();
                if (myPets.length) {
                    Scripts.PetCommander.killTarget();
                    return;
                }
                return;
            }
            Orion.Say(pet.name + " kill");
        };
        PetCommander.killAll = function () {
            while (Scripts.PetCommander.getNewPet()) { }
            var myPets = Scripts.PetCommander.filterPetsInDistance();
            if (!myPets.length) {
                return;
            }
            Orion.IgnoreReset();
            for (var _i = 0, myPets_4 = myPets; _i < myPets_4.length; _i++) {
                var pet = myPets_4[_i];
                var petObject = Orion.FindObject(pet.serial);
                if (!petObject || petObject.Distance() > 12) {
                    Scripts.PetCommander.removeFromMyPets(pet.name);
                }
                else {
                    Orion.WaitTargetObject(Orion.ClientLastAttack());
                    Orion.Say(pet.name + " kill");
                    var success = Orion.WaitForTarget(1000);
                    !success && Scripts.PetCommander.removeFromMyPets(pet.name);
                }
            }
            Scripts.PetCommander.ignoreMyPets();
        };
        PetCommander.healPetsToggleStart = function () {
            Scripts.Utils.playerPrint('Healing pets START', ColorEnum.green);
            Shared.AddVar('healPetsToggle', true);
        };
        PetCommander.healPetsToggleStop = function (message) {
            Scripts.Utils.playerPrint('Healing pets STOP', ColorEnum.red);
            message && Scripts.Utils.playerPrint(message, ColorEnum.orange);
            Shared.AddVar('healPetsToggle', false);
        };
        PetCommander.sortPetsByHits = function (arr) {
            return arr.sort(function (a, b) {
                var pet1 = Orion.FindObject(a.serial);
                var pet2 = Orion.FindObject(b.serial);
                if (!pet1) {
                    return -1;
                }
                if (!pet2) {
                    return 1;
                }
                return pet1.MaxHits() - pet1.Hits() > pet2.MaxHits() - pet2.Hits() ? 1 : -1;
            });
        };
        PetCommander.healPetsToggle = function () {
            Orion.ClearJournal();
            var toggle = Shared.GetVar('healPetsToggle', false);
            toggle ? Scripts.PetCommander.healPetsToggleStop() : Scripts.PetCommander.healPetsToggleStart();
            toggle = Shared.GetVar('healPetsToggle');
            while (toggle) {
                while (Scripts.PetCommander.getNewPet()) { }
                var myPets = Scripts.PetCommander.filterPetsInDistance();
                if (!myPets.length) {
                    Scripts.PetCommander.healPetsToggleStop('Nemas zadne pety');
                    break;
                }
                else if (myPets.length > 1) {
                    Scripts.PetCommander.sortPetsByHits(myPets);
                }
                var distance = false;
                var heal = false;
                for (var _i = 0, myPets_5 = myPets; _i < myPets_5.length; _i++) {
                    var p = myPets_5[_i];
                    Orion.ClearJournal();
                    var pet = Orion.FindObject(p.serial);
                    if (!pet) {
                        continue;
                    }
                    if (pet.Distance() <= 6) {
                        distance = true;
                        if (pet.MaxHits() <= pet.Hits() || heal) {
                            continue;
                        }
                        Scripts.Utils.playerPrint("Healing [" + pet.Name() + "]");
                        var b = Scripts.Utils.findFirstType(gameObject.uncategorized.bandy);
                        Orion.WaitTargetObject(p.serial);
                        Orion.UseObject(b);
                        var previousHp = pet.Hits();
                        Scripts.Utils.waitWhileSomethingInJournal([
                            'You put',
                            'You apply',
                            'Chces vytvorit',
                            'must be able to reach',
                            'Nemuzes pouzit bandy',
                        ]);
                        if (Orion.InJournal('Chces vytvorit|Nemuzes pouzit bandy|must be able to reach')) {
                            Orion.Wait(responseDelay);
                            continue;
                        }
                        heal = true;
                        Scripts.Utils.printDamage(p.serial, previousHp);
                    }
                    else if (pet.MaxHits() > pet.Hits()) {
                        Orion.PrintFast(p.serial, '0x0021', 0, "potrebuji heal");
                    }
                }
                if (!distance) {
                    Scripts.PetCommander.healPetsToggleStop('Musis jit bliz');
                    break;
                }
                if (!heal) {
                    Scripts.Utils.playerPrint('hlidam pety');
                    Orion.Wait(1000);
                }
                toggle = Shared.GetVar('healPetsToggle');
            }
        };
        return PetCommander;
    }());
    Scripts.PetCommander = PetCommander;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Port = (function () {
        function Port() {
        }
        Port.nbRune = function (waitForKop) {
            if (waitForKop === void 0) { waitForKop = false; }
            var selections = [
                {
                    type: SelectionTypeEnum.gump,
                    selection: 1
                },
            ];
            var nbRuna = gameObject.uncategorized.nbRuna;
            var serial = Scripts.Utils.findFirstType(nbRuna);
            if (!serial) {
                Scripts.Utils.log('NEMAS NB RUNU', ColorEnum.red);
            }
            Scripts.Utils.useAndSelect(serial, selections);
            if (waitForKop) {
                var teleported = Scripts.Utils.waitWhileSomethingInJournal(['been teleported'], 40000) !== -1;
                !teleported && Scripts.Utils.useAndSelect(serial, selections);
            }
        };
        Port.rune = function (runeSerial, waitForKop) {
            if (waitForKop === void 0) { waitForKop = false; }
            var selections = [
                {
                    type: SelectionTypeEnum.menu,
                    selection: { name: 'Jak chces runu pouzit?', selection: 'Recall' }
                },
            ];
            Scripts.Utils.useAndSelect(runeSerial, selections);
            if (waitForKop) {
                var teleported = Scripts.Utils.waitWhileSomethingInJournal(['been teleported'], 40000) !== -1;
                !teleported && Scripts.Utils.useAndSelect(runeSerial, selections);
            }
        };
        Port.travelBook = function (selection, waitForKop) {
            if (selection === void 0) { selection = PortBookOptionsEnum.kop; }
            if (waitForKop === void 0) { waitForKop = false; }
            var selections;
            switch (selection) {
                case PortBookOptionsEnum.opravaStats:
                    selections = [
                        {
                            type: SelectionTypeEnum.gump,
                            selection: 2
                        },
                        {
                            type: SelectionTypeEnum.menu,
                            selection: { name: '', selection: 'Ano, oprav' }
                        },
                    ];
                    break;
                case PortBookOptionsEnum.mark:
                    selections = [
                        {
                            type: SelectionTypeEnum.gump,
                            selection: 4
                        },
                        {
                            type: SelectionTypeEnum.gump,
                            selection: 3
                        },
                    ];
                    break;
                case PortBookOptionsEnum.nabiti:
                    selections = [
                        {
                            type: SelectionTypeEnum.gump,
                            selection: 1
                        },
                    ];
                    break;
                default:
                    selections = [
                        {
                            type: SelectionTypeEnum.gump,
                            selection: 4
                        },
                        {
                            type: SelectionTypeEnum.gump,
                            selection: 1
                        },
                    ];
            }
            var book = gameObject.books.travelBook;
            var serial = Scripts.Utils.findFirstType(book);
            if (!serial) {
                Scripts.Utils.log('NEMAS TRAVEL BOOK', ColorEnum.red);
            }
            Scripts.Utils.useAndSelect(serial, selections);
            if (selection === PortBookOptionsEnum.kop && waitForKop) {
                var teleported = Scripts.Utils.waitWhileSomethingInJournal(['been teleported'], 40000) !== -1;
                !teleported && Scripts.Utils.useAndSelect(serial, selections);
            }
        };
        Port.cestovniKniha = function (selection, destination) {
            if (selection === void 0) { selection = PortBookOptionsEnum.kop; }
            var selections;
            switch (selection) {
                case PortBookOptionsEnum.opravaStats:
                    selections = [
                        {
                            type: SelectionTypeEnum.gump,
                            selection: 2
                        },
                        {
                            type: SelectionTypeEnum.menu,
                            selection: { name: '', selection: 'Ano, oprav' }
                        },
                    ];
                    break;
                case PortBookOptionsEnum.mark:
                    selections = [
                        {
                            type: SelectionTypeEnum.gump,
                            selection: 7
                        },
                    ];
                    break;
                default:
                    selections = [
                        {
                            type: SelectionTypeEnum.gump,
                            selection: destination ? destination : 5
                        },
                    ];
            }
            var book = gameObject.books.cestovniKniha;
            var serial = Scripts.Utils.findFirstType(book);
            if (!serial) {
                Scripts.Utils.log('NEMAS CESTOVNI KNIHU', ColorEnum.red);
            }
            Scripts.Utils.useAndSelect(serial, selections);
        };
        return Port;
    }());
    Scripts.Port = Port;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Potions = (function () {
        function Potions() {
        }
        Potions.getEmptyBottle = function () {
            var eb = gameObject.uncategorized.emptyBottles;
            var emptyBottles = Scripts.Utils.findFirstType(eb);
            if (!emptyBottles) {
                Scripts.Utils.log("Nemas prazdne lahve", ColorEnum.red);
                throw 'Nemas prazdne lahve';
            }
            return emptyBottles;
        };
        Potions.getKadForPotion = function (potion) {
            var kad = Scripts.Utils.findFirstType(potion.kad);
            if (!kad) {
                var find = Orion.FindType(potion.kad.graphic, potion.kad.color, 'ground', 'near|item', 3);
                find.length && (kad = find[0]);
            }
            if (!kad) {
                Scripts.Utils.log("Nemas kad s potionem", ColorEnum.red);
                throw 'Nemas kad s potionem';
            }
            return kad;
        };
        Potions.drinkPotion = function (potionName, switchWarModeWhenNeeded, displayTimers, displayInfo, refillEmptyLimit, displayInvisLongTimer) {
            if (switchWarModeWhenNeeded === void 0) { switchWarModeWhenNeeded = true; }
            if (displayTimers === void 0) { displayTimers = true; }
            if (displayInfo === void 0) { displayInfo = true; }
            if (refillEmptyLimit === void 0) { refillEmptyLimit = 0; }
            if (displayInvisLongTimer === void 0) { displayInvisLongTimer = false; }
            if (!isPotionsEnum(potionName)) {
                return;
            }
            var potion = null;
            var p = gameObject.potions[potionName];
            var kad = Scripts.Utils.findFirstType(p.kad);
            if (kad) {
                var types = Orion.FindType(p.graphic, p.color);
                if (types && types.length > 0) {
                    potion = types[0];
                }
            }
            else {
                potion = Scripts.Utils.findFirstType(p);
            }
            if (!potion) {
                Scripts.Potions.fillPotion(potionName, switchWarModeWhenNeeded);
                potion = Scripts.Utils.findFirstType(p);
                if (!potion) {
                    Scripts.Utils.playerPrint("!! NEMAS [ " + potionName + " ] !!", ColorEnum.red);
                    return;
                }
            }
            var succMsg = 'You put the empty bottle';
            var failMsg = 'drink another potion';
            var paraMsg = 'reach that';
            var messages = [succMsg, failMsg, paraMsg];
            var drinkTimer = 17500;
            var gsTimer = 130000;
            var invisTimer = 27000;
            var invisLongTimer = 328500;
            Orion.UseObject(potion);
            var m = Scripts.Utils.waitWhileSomethingInJournal(messages, 1000, 1000);
            if (m === 0) {
                var potionTimer = config === null || config === void 0 ? void 0 : config.drinkPotion.timer;
                displayTimers &&
                    Orion.AddDisplayTimer(TimersEnum.drink, drinkTimer, (potionTimer === null || potionTimer === void 0 ? void 0 : potionTimer.position) || 'LeftTop', (potionTimer === null || potionTimer === void 0 ? void 0 : potionTimer.type) || 'Line|Bar', (potionTimer === null || potionTimer === void 0 ? void 0 : potionTimer.text) || 'Drink', (potionTimer === null || potionTimer === void 0 ? void 0 : potionTimer.xFromPosition) || 0, (potionTimer === null || potionTimer === void 0 ? void 0 : potionTimer.yFromPosition) || 0, (potionTimer === null || potionTimer === void 0 ? void 0 : potionTimer.textColor) || '0x88B', (potionTimer === null || potionTimer === void 0 ? void 0 : potionTimer.font) || 0, (potionTimer === null || potionTimer === void 0 ? void 0 : potionTimer.backgroundColor) || '0x88B');
                Scripts.Utils.resetTimer(TimersEnum.drink);
                var potionsCount = Orion.Count(p.graphic, p.color);
                Scripts.Utils.playerPrint("[ " + potionName + " " + potionsCount + " ]", potionsCount === 0 ? ColorEnum.red : ColorEnum.green);
                if (potionName === PotionsEnum.gs) {
                    var gsPotionTimer = config === null || config === void 0 ? void 0 : config.drinkPotion.gsTimer;
                    displayTimers &&
                        Orion.AddDisplayTimer(TimersEnum.gs, gsTimer, (gsPotionTimer === null || gsPotionTimer === void 0 ? void 0 : gsPotionTimer.position) || 'LeftTop', (gsPotionTimer === null || gsPotionTimer === void 0 ? void 0 : gsPotionTimer.type) || 'Line|Bar', (gsPotionTimer === null || gsPotionTimer === void 0 ? void 0 : gsPotionTimer.text) || 'GS', (gsPotionTimer === null || gsPotionTimer === void 0 ? void 0 : gsPotionTimer.xFromPosition) || 0, (gsPotionTimer === null || gsPotionTimer === void 0 ? void 0 : gsPotionTimer.yFromPosition) || 55, (gsPotionTimer === null || gsPotionTimer === void 0 ? void 0 : gsPotionTimer.textColor) || '0x88B', (gsPotionTimer === null || gsPotionTimer === void 0 ? void 0 : gsPotionTimer.font) || 0, (gsPotionTimer === null || gsPotionTimer === void 0 ? void 0 : gsPotionTimer.backgroundColor) || '0x88B');
                    Scripts.Utils.resetTimer(TimersEnum.gs);
                }
                if (potionName === PotionsEnum.invis) {
                    var invisPotionTimer = config === null || config === void 0 ? void 0 : config.drinkPotion.invisTimer;
                    for (var a = 0; a < 10; a++) {
                        var id = TimersEnum.invis + '_' + a;
                        if (Orion.DisplayTimerExists(id))
                            continue;
                        displayTimers &&
                            Orion.AddDisplayTimer(id, invisTimer, (invisPotionTimer === null || invisPotionTimer === void 0 ? void 0 : invisPotionTimer.position) || 'LeftTop', (invisPotionTimer === null || invisPotionTimer === void 0 ? void 0 : invisPotionTimer.type) || 'Line|Bar', (invisPotionTimer === null || invisPotionTimer === void 0 ? void 0 : invisPotionTimer.text) || 'Invis', ((invisPotionTimer === null || invisPotionTimer === void 0 ? void 0 : invisPotionTimer.xFromPosition) || 0) + a * 55, (invisPotionTimer === null || invisPotionTimer === void 0 ? void 0 : invisPotionTimer.yFromPosition) || 110, (invisPotionTimer === null || invisPotionTimer === void 0 ? void 0 : invisPotionTimer.textColor) || '0x88B', (invisPotionTimer === null || invisPotionTimer === void 0 ? void 0 : invisPotionTimer.font) || 0, (invisPotionTimer === null || invisPotionTimer === void 0 ? void 0 : invisPotionTimer.backgroundColor) || '0x88B');
                        break;
                    }
                    if (displayInvisLongTimer) {
                        var invisLongPotionTimer = config === null || config === void 0 ? void 0 : config.drinkPotion.invisLongTimer;
                        for (var a = 0; a < 10; a++) {
                            var id = TimersEnum.invisLong + '_' + a;
                            if (Orion.DisplayTimerExists(id))
                                continue;
                            displayTimers &&
                                Orion.AddDisplayTimer(id, invisLongTimer, (invisLongPotionTimer === null || invisLongPotionTimer === void 0 ? void 0 : invisLongPotionTimer.position) || 'LeftTop', (invisLongPotionTimer === null || invisLongPotionTimer === void 0 ? void 0 : invisLongPotionTimer.type) || 'Line|Bar', (invisLongPotionTimer === null || invisLongPotionTimer === void 0 ? void 0 : invisLongPotionTimer.text) || 'InvisL', ((invisLongPotionTimer === null || invisLongPotionTimer === void 0 ? void 0 : invisLongPotionTimer.xFromPosition) || 0) + a * 55, (invisLongPotionTimer === null || invisLongPotionTimer === void 0 ? void 0 : invisLongPotionTimer.yFromPosition) || 165, (invisLongPotionTimer === null || invisLongPotionTimer === void 0 ? void 0 : invisLongPotionTimer.textColor) || '0x88B', (invisLongPotionTimer === null || invisLongPotionTimer === void 0 ? void 0 : invisLongPotionTimer.font) || 0, (invisLongPotionTimer === null || invisLongPotionTimer === void 0 ? void 0 : invisLongPotionTimer.backgroundColor) || '0x88B');
                            break;
                        }
                    }
                    Orion.RemoveTimer(TimersEnum.gs);
                }
                displayInfo && Orion.Exec('displayDrinkInfo', false, [potionName.toString()]);
            }
            else if (m === 1) {
                var remainingTime = drinkTimer - Orion.Timer(TimersEnum.drink);
                remainingTime > 0 &&
                    Scripts.Utils.playerPrint("potion timer " + ((drinkTimer - Orion.Timer(TimersEnum.drink)) / 1000).toFixed(2) + "s", ColorEnum.red);
                if (refillEmptyLimit &&
                    refillEmptyLimit &&
                    Orion.Count(gameObject.uncategorized.emptyBottles.graphic, gameObject.uncategorized.emptyBottles.color) > refillEmptyLimit) {
                    Scripts.Potions.fillPotion(potionName, switchWarModeWhenNeeded);
                }
            }
            else if (m === 2) {
                Scripts.Utils.playerPrint("You can't reach that", ColorEnum.orange);
            }
            else {
                Scripts.Utils.log('Nenalezena drink hlaska v journalu za posledni vterinu', ColorEnum.red);
            }
            Orion.ClearJournal(succMsg + "|" + failMsg + "|" + paraMsg);
        };
        Potions.fillPotion = function (potionName, switchWarModeWhenNeeded, kadSerial, emptyBottleSerial) {
            if (switchWarModeWhenNeeded === void 0) { switchWarModeWhenNeeded = true; }
            if (!isPotionsEnum(potionName)) {
                return;
            }
            var p = gameObject.potions[potionName];
            var potionKad = kadSerial || Scripts.Potions.getKadForPotion(p);
            var emptyBottle = emptyBottleSerial || Scripts.Potions.getEmptyBottle();
            Orion.ClearJournal();
            Orion.WaitTargetObject(emptyBottle);
            Orion.UseObject(potionKad);
            Orion.Wait(responseDelay);
            if (Orion.InJournal('Pri praci s nadobou nemuzes delat neco')) {
                if (!switchWarModeWhenNeeded) {
                    Scripts.Utils.log('Nemuzes pit, kdyz neco delas', ColorEnum.red);
                    return;
                }
                Scripts.Utils.playerPrint('[War mode]', ColorEnum.red);
                Orion.WarMode(true);
                Orion.Wait(100);
                Orion.WaitTargetObject(emptyBottle);
                Orion.UseObject(potionKad);
                Orion.Wait(responseDelay);
            }
        };
        Potions.potionToKad = function (potionName, switchWarModeWhenNeeded, kadSerial) {
            if (switchWarModeWhenNeeded === void 0) { switchWarModeWhenNeeded = true; }
            if (!isPotionsEnum(potionName)) {
                return;
            }
            var p = gameObject.potions[potionName];
            var potionKad = kadSerial || Scripts.Potions.getKadForPotion(p);
            var potion = Scripts.Utils.findFirstType(p);
            if (!potion) {
                Scripts.Utils.log("Nemas lahvicku s " + potionName, ColorEnum.red);
                throw 'err';
            }
            Orion.ClearJournal();
            Orion.WaitTargetObject(potion);
            Orion.UseObject(potionKad);
            Orion.Wait(responseDelay);
        };
        return Potions;
    }());
    Scripts.Potions = Potions;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Spells = (function () {
        function Spells() {
        }
        Spells.cast = function (spell, target, existingWaitTargetHook) {
            if (existingWaitTargetHook === void 0) { existingWaitTargetHook = false; }
            if (!existingWaitTargetHook) {
                var targetResult = Scripts.TargetingEx.getTarget(target);
                if (targetResult.success()) {
                    targetResult.waitTarget();
                }
                else if (target) {
                    Scripts.Utils.log("Target not found: '" + target + "'", ColorEnum.orange);
                }
            }
            Orion.Cast(spell);
        };
        Spells.summon = function (creature, target) {
            Orion.CancelWaitMenu();
            Orion.WaitMenu('What do you want to summon', creature);
            Scripts.Spells.cast('Summ. Creature', target);
        };
        Spells.castScroll = function (scroll, target, backupHeadCast, existingWaitTargetHook) {
            if (existingWaitTargetHook === void 0) { existingWaitTargetHook = false; }
            var s = gameObject.scrolls['standard'][scroll];
            if (s.minMana > Player.Mana()) {
                Scripts.Utils.playerPrint('!! MANA !!', ColorEnum.red);
                return;
            }
            if (Orion.Count(s.graphic) < 1) {
                var reason = 'NEMAS SVITKY';
                backupHeadCast
                    ? Scripts.Spells.backupHeadCast(reason, backupHeadCast, target)
                    : Scripts.Utils.playerPrint(reason, ColorEnum.red);
                return;
            }
            Orion.ClearJournal();
            !existingWaitTargetHook && Scripts.TargetingEx.getTarget(target).waitTarget();
            Orion.UseType(s.graphic);
            Scripts.Utils.waitWhileSomethingInJournal(['Select Target', "You can't cast"]);
            if (Orion.InJournal('Select Target')) {
                s.timer &&
                    Orion.AddDisplayTimer('scroll', s.timer, 'AboveChar', 'bar', '', 0, 75, '0x100', 1, 'yellow');
            }
            else {
                var reason = 'TIMER';
                backupHeadCast
                    ? Scripts.Spells.backupHeadCast(reason, backupHeadCast, target)
                    : Scripts.Utils.playerPrint(reason, ColorEnum.red);
            }
        };
        Spells.backupHeadCast = function (reason, spell, target, silent) {
            if (silent === void 0) { silent = true; }
            if (!silent) {
                Scripts.Utils.playerPrint(reason + ' - backup cast', ColorEnum.orange);
            }
            Scripts.Spells.cast(spell, target);
        };
        Spells.castNecroScroll = function (scroll, target) {
            var s = gameObject.scrolls['necro'][scroll];
            if (s.minMana > Player.Mana()) {
                Scripts.Utils.playerPrint('!! MANA !!', ColorEnum.red);
                return;
            }
            var scrollSerial = Scripts.Utils.findFirstType(s);
            if (!scrollSerial) {
                Scripts.Utils.playerPrint('NEMAS SVITKY ' + scroll, ColorEnum.red);
                return;
            }
            Orion.ClearJournal();
            Scripts.TargetingEx.getTarget(target).waitTarget();
            Orion.UseObject(scrollSerial);
            Scripts.Utils.waitWhileSomethingInJournal(['Select Target', "You can't cast"]);
            if (Orion.InJournal('Select Target')) {
                s.timer &&
                    Orion.AddDisplayTimer('scroll', s.timer, 'AboveChar', 'bar', '', 0, 75, '0x100', 1, 'yellow');
            }
            else {
                Scripts.Utils.playerPrint('TIMER', ColorEnum.red);
            }
        };
        Spells.castUntilSuccess = function (spell, target, castTime) {
            do {
                Orion.WarMode(true);
                Orion.ClearJournal();
                Scripts.Spells.cast(spell, target);
                Orion.Wait(castTime);
            } while (Orion.InJournal('fizzles'));
            Orion.WarMode(true);
        };
        Spells.wos = function (scroll, displayTimer) {
            if (scroll === void 0) { scroll = false; }
            if (displayTimer === void 0) { displayTimer = 70000; }
            var target = Scripts.Utils.waitTargetTileOrObject();
            if (!target) {
                return;
            }
            scroll ?
                Scripts.Spells.castScroll(ScrollEnum.wos, undefined, undefined, true) :
                Scripts.Spells.cast('Wall of Stone', undefined, true);
            if (target.mobile) {
                return;
            }
            Orion.ClearJournal('Target is not in line of sight|The spell fizzles');
            var existingWalls = Orion.FindType('0x0080', '0x0000', 'ground', undefined, 18);
            var keepChecking = true;
            var timer = 2500;
            var wait = 20;
            var timerObjectSerial = '';
            while (keepChecking && timer) {
                Orion.ClearJournal('Target is not in line of sight|The spell fizzles');
                if (Orion.InJournal('Target is not in line of sight|The spell fizzles')) {
                    keepChecking = false;
                }
                var walls = Orion.FindType('0x0080', '0x0000', 'ground', undefined, 18);
                var newWalls = walls.filter(function (i) { return existingWalls.indexOf(i) === -1; });
                var found = false;
                for (var _i = 0, newWalls_1 = newWalls; _i < newWalls_1.length; _i++) {
                    var serial = newWalls_1[_i];
                    var o = Orion.FindObject(serial);
                    if (o.X() === target.x && o.Y() === target.y) {
                        timerObjectSerial = serial;
                        found = true;
                        keepChecking = false;
                        break;
                    }
                }
                Orion.Wait(wait);
                timer -= wait;
            }
            var id = Math.random().toString();
            Orion.AddDisplayTimer(id, displayTimer, 'AboveChar', 'Rectangle', undefined, Orion.ClientOptionGet('GameWindowX'), Orion.ClientOptionGet('GameWindowY') + 30, 'any', 1, '0x000000FE');
            Orion.DisplayTimerSetObject(id, timerObjectSerial);
        };
        Spells.efMount = function (scroll, timer) {
            if (scroll === void 0) { scroll = false; }
            if (timer === void 0) { timer = 70000; }
            if (Orion.ObjAtLayer('Mount')) {
                Orion.UseObject('self');
                Orion.Wait(100);
            }
            var targetGameObject = Orion.FindObject('myMount');
            if (!targetGameObject) {
                Scripts.Utils.log('nemas zaregistrovane jezditko', ColorEnum.red);
                return;
            }
            Scripts.Spells.ef(false, scroll, timer, 'myMount');
        };
        Spells.ef = function (self, scroll, timer, targetSerial) {
            if (self === void 0) { self = false; }
            if (scroll === void 0) { scroll = false; }
            if (timer === void 0) { timer = 70000; }
            var target = {};
            if (targetSerial) {
                Orion.WaitTargetObject(targetSerial);
                var targetObject = Orion.FindObject(targetSerial);
                target = {
                    x: targetObject.X(),
                    y: targetObject.Y(),
                    z: targetObject.Z(),
                    mobile: targetObject.Mobile()
                };
            }
            else {
                if (self) {
                    Orion.WaitTargetObject('self');
                }
                else {
                    target = Scripts.Utils.waitTargetTileOrObject();
                    if (!target) {
                        return;
                    }
                }
            }
            scroll ?
                Scripts.Spells.castScroll(ScrollEnum.ef, undefined, undefined, true) :
                Scripts.Spells.cast('Energy Field', undefined, true);
            var timerObjectSerial = '';
            if (self) {
                var keepChecking = true;
                var timer_1 = 5000;
                var wait = 20;
                while (keepChecking && timer_1) {
                    Orion.ClearJournal('Target is not in line of sight|The spell fizzles');
                    if (Orion.InJournal('Target is not in line of sight|The spell fizzles')) {
                        keepChecking = false;
                    }
                    var walls = Orion.FindType('0x3947', '0x0000', 'ground', undefined, 0);
                    if (walls.length) {
                        timerObjectSerial = walls[0];
                        break;
                    }
                    Orion.Wait(wait);
                    timer_1 -= wait;
                }
            }
            else {
                var existingWalls_1 = Orion.FindType('0x3947|0x3956', '0x0000', 'ground', undefined, 18);
                var keepChecking = true;
                var timer_2 = 4500;
                var wait = 20;
                while (keepChecking && timer_2) {
                    Orion.ClearJournal('Target is not in line of sight|The spell fizzles');
                    if (Orion.InJournal('Target is not in line of sight|The spell fizzles')) {
                        keepChecking = false;
                    }
                    var walls = Orion.FindType('0x3947|0x3956', '0x0000', 'ground', undefined, 18);
                    var newWalls = walls.filter(function (i) { return existingWalls_1.indexOf(i) === -1; });
                    var found = false;
                    for (var _i = 0, newWalls_2 = newWalls; _i < newWalls_2.length; _i++) {
                        var serial = newWalls_2[_i];
                        var o = Orion.FindObject(serial);
                        if (o.X() === target.x && o.Y() === target.y) {
                            timerObjectSerial = serial;
                            found = true;
                            keepChecking = false;
                            break;
                        }
                    }
                    Orion.Wait(wait);
                    timer_2 -= wait;
                }
            }
            if (timerObjectSerial) {
                var id = Math.random().toString();
                Orion.AddDisplayTimer(id, timer, 'AboveChar', 'Rectangle', undefined, Orion.ClientOptionGet('GameWindowX'), Orion.ClientOptionGet('GameWindowY') + 30, 'any', 1, '0x000000FE');
                Orion.DisplayTimerSetObject(id, timerObjectSerial);
            }
        };
        return Spells;
    }());
    Scripts.Spells = Spells;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Statusbar = (function () {
        function Statusbar() {
        }
        Statusbar.create = function (mobile, coordinates, autoCloseTimer) {
            if (!mobile) {
                Scripts.Utils.createGameObjectSelections([{ ask: 'Target mobile', addObject: 'lastCustomStatusBar' }]);
                mobile = Orion.FindObject('lastCustomStatusBar');
            }
            else if (mobile && typeof mobile === 'string') {
                mobile = Orion.FindObject(mobile);
            }
            if (!mobile) {
                return;
            }
            mobile = mobile;
            var serial = mobile.Serial();
            var name = mobile.Name();
            var max = mobile.MaxHits();
            var hp = mobile.Hits();
            var statusBars = Shared.GetArray(GlobalEnum.customStatusBars, []);
            var statusBar = {
                serial: serial,
                hp: hp,
                max: max,
                name: name,
                poisoned: mobile.Poisoned(),
                visible: false,
                dead: mobile.Dead(),
                targetIndicators: Statusbar.resolveIndicators(mobile),
                autoCloseTimer: autoCloseTimer
            };
            statusBars.push(statusBar);
            Shared.AddVar(serial, true);
            Shared.AddArray(GlobalEnum.customStatusBars, statusBars);
            var gump = Orion.CreateCustomGump(parseInt(serial, 16));
            if (coordinates) {
                gump.SetX(coordinates.x);
                gump.SetY(coordinates.y);
                gump.Update();
            }
            gump.SetCallback("customStatusBarCallBack " + serial);
            Scripts.Statusbar.updateStatusBarGumpForObject(mobile, statusBar, gump, true);
        };
        Statusbar.close = function (serial, gump) {
            var statusBars = Shared.GetArray(GlobalEnum.customStatusBars, []);
            var mobileKey = TimersEnum.statusBarTimer + "_" + serial;
            Shared.AddVar(serial, false);
            Orion.RemoveTimer(mobileKey);
            gump = gump !== null && gump !== void 0 ? gump : Orion.CreateCustomGump(parseInt(serial, 16));
            gump === null || gump === void 0 ? void 0 : gump.Clear();
            gump === null || gump === void 0 ? void 0 : gump.Close();
            for (var i = statusBars.length - 1; i > -1; i--) {
                if (statusBars[i].serial === serial) {
                    statusBars.splice(i, 1);
                }
            }
            Shared.AddArray(GlobalEnum.customStatusBars, statusBars);
        };
        Statusbar.exists = function (serial) {
            var statusBars = Shared.GetArray(GlobalEnum.customStatusBars, []);
            var exists = Shared.GetVar(serial, false);
            return exists && statusBars.some(function (a) { return a.serial === serial; });
        };
        Statusbar.updateStatusbars = function () {
            var statusBars = Shared.GetArray(GlobalEnum.customStatusBars, []);
            for (var _i = 0, statusBars_1 = statusBars; _i < statusBars_1.length; _i++) {
                var statusBar_1 = statusBars_1[_i];
                if (!Shared.GetVar(statusBar_1.serial, true)) {
                    continue;
                }
                var gump = Orion.CreateCustomGump(parseInt(statusBar_1.serial, 16));
                var mobile = Orion.FindObject(statusBar_1.serial);
                if (Scripts.Statusbar.resolveAutoClose(statusBar_1, gump)) {
                    continue;
                }
                if (mobile) {
                    Scripts.Statusbar.updateStatusBarGumpForObject(mobile, statusBar_1, gump);
                }
                else if (statusBar_1.visible) {
                    statusBar_1.visible = false;
                    Scripts.Statusbar.redrawBodyToNoObject(statusBar_1, gump);
                }
            }
            Shared.AddArray(GlobalEnum.customStatusBars, statusBars);
        };
        Statusbar.resolveAutoClose = function (statusBar, gump) {
            var mobile = Orion.FindObject(statusBar.serial);
            var mobileKey = TimersEnum.statusBarTimer + "_" + statusBar.serial;
            var timerExists = Orion.TimerExists(mobileKey);
            if (statusBar.autoCloseTimer && statusBar.autoCloseTimer > 0 && !mobile) {
                if (!timerExists) {
                    Orion.SetTimer(mobileKey);
                }
                else if (Orion.Timer(mobileKey) > statusBar.autoCloseTimer) {
                    Scripts.Statusbar.close(statusBar.serial, gump);
                    return true;
                }
            }
            else if (timerExists) {
                Orion.RemoveTimer(mobileKey);
            }
            return false;
        };
        Statusbar.resolveIndicators = function (mobile) {
            var _a, _b, _c, _d;
            var targetIndicators = (_b = (_a = config === null || config === void 0 ? void 0 : config.statusBar) === null || _a === void 0 ? void 0 : _a.targetIndicators) !== null && _b !== void 0 ? _b : [];
            var result = [];
            for (var _i = 0, targetIndicators_1 = targetIndicators; _i < targetIndicators_1.length; _i++) {
                var indicator = targetIndicators_1[_i];
                var clone = {
                    targetAlias: { alias: (_c = indicator.targetAlias) === null || _c === void 0 ? void 0 : _c.alias },
                    color: indicator.color,
                    active: false
                };
                var targetResult = Scripts.TargetingEx.resolveTraget([indicator.targetAlias]);
                clone.active =
                    mobile &&
                        mobile.Serial() &&
                        targetResult.isValid() &&
                        mobile.Serial() === ((_d = targetResult.gameObject()) === null || _d === void 0 ? void 0 : _d.Serial());
                result.push(clone);
            }
            return result;
        };
        Statusbar.resolveActiveIndicators = function (statusBar) {
            var result = [];
            for (var _i = 0, _a = statusBar.targetIndicators; _i < _a.length; _i++) {
                var indicator = _a[_i];
                if (indicator.active) {
                    result.push(indicator);
                }
            }
            return result;
        };
        Statusbar.indicatorChanged = function (statusBar, indicators) {
            if (!indicators || indicators.length <= 0) {
                return true;
            }
            return statusBar.targetIndicators.some(function (a) {
                return indicators.some(function (b) { return b.targetAlias.alias === a.targetAlias.alias && b.active !== a.active; });
            });
        };
        Statusbar.updateStatusBarGumpForObject = function (mobile, statusBar, gump, forceUpdate) {
            if (forceUpdate === void 0) { forceUpdate = false; }
            var name = mobile.Name();
            name = name.length > 17 ? name.substr(0, 15) + '..' : name;
            var dead = mobile.Dead();
            var poisoned = mobile.Poisoned();
            var hp = mobile.Hits();
            var max = mobile.MaxHits();
            var currentIndicators = Statusbar.resolveIndicators(mobile);
            var indicatorsChanged = Statusbar.indicatorChanged(statusBar, currentIndicators);
            if (!forceUpdate &&
                statusBar.visible &&
                statusBar.dead === dead &&
                statusBar.hp === hp &&
                statusBar.max === max &&
                statusBar.name === name &&
                statusBar.poisoned === poisoned &&
                !indicatorsChanged) {
                return;
            }
            var updateText = false;
            if (statusBar.dead !== dead || (!statusBar.visible && dead) || indicatorsChanged) {
                statusBar.dead = dead;
                statusBar.targetIndicators = currentIndicators;
                statusBar.visible = true;
                updateText = true;
                gump.Clear();
                Scripts.Statusbar.drawBody(gump, mobile.Notoriety(), dead);
                Scripts.Statusbar.drawIndicators(gump, Statusbar.resolveActiveIndicators(statusBar));
            }
            if (!statusBar.visible) {
                statusBar.visible = true;
                updateText = true;
                gump.Clear();
                Scripts.Statusbar.drawBody(gump, mobile.Notoriety(), dead);
                Scripts.Statusbar.drawIndicators(gump, Statusbar.resolveActiveIndicators(statusBar));
            }
            if (statusBar.name !== name || updateText) {
                statusBar.name = name;
                Scripts.Statusbar.drawName(gump, name);
            }
            !max && (max = statusBar.max);
            hp < 0 && (hp = 0);
            if (statusBar.hp !== hp || statusBar.max !== max || statusBar.poisoned !== poisoned || updateText) {
                statusBar.hp = hp;
                statusBar.max = max;
                statusBar.poisoned = poisoned;
                if (!updateText) {
                    gump.Clear();
                    Scripts.Statusbar.drawBody(gump, mobile.Notoriety(), dead);
                    Scripts.Statusbar.drawIndicators(gump, Statusbar.resolveActiveIndicators(statusBar));
                    Scripts.Statusbar.drawName(gump, name);
                }
                Scripts.Statusbar.drawHP(gump, hp, max, poisoned);
            }
            gump.Update();
        };
        Statusbar.drawBody = function (gump, notoriety, dead) {
            var _a, _b;
            if (dead === void 0) { dead = false; }
            var borderColor = (_b = (_a = config === null || config === void 0 ? void 0 : config.statusBar) === null || _a === void 0 ? void 0 : _a.borderColor) !== null && _b !== void 0 ? _b : "#ff3f3f3f";
            var ARGBcolor = dead
                ? "#ffff4dff"
                : typeof notoriety === 'number'
                    ? Scripts.Utils.getARGBColorByNotoriety(notoriety)
                    : "#ccffffff";
            gump.AddColoredPolygone(0, 0, 140, 42, borderColor);
            gump.AddColoredPolygone(1, 1, 138, 40, "#ff000000");
            gump.AddColoredPolygone(1, 1, 138, 22, "#ffa0a0a0");
            gump.AddColoredPolygone(2, 2, 136, 21, ARGBcolor);
            gump.AddHitBox(CustomStatusBarEnum.click, 0, 0, 140, 42, 1);
        };
        Statusbar.drawIndicators = function (gump, flags) {
            var y = 3;
            for (var _i = 0, flags_1 = flags; _i < flags_1.length; _i++) {
                var flag = flags_1[_i];
                Scripts.Statusbar.drawIndicator(gump, 140, y, flag.color);
                y += 6;
            }
        };
        Statusbar.drawIndicator = function (gump, x, y, color) {
            var _a, _b;
            var borderColor = (_b = (_a = config === null || config === void 0 ? void 0 : config.statusBar) === null || _a === void 0 ? void 0 : _a.borderColor) !== null && _b !== void 0 ? _b : "#ff3f3f3f";
            gump.AddColoredPolygone(x, y, 6, 6, borderColor);
            gump.AddColoredPolygone(x, y + 1, 5, 5, color);
        };
        Statusbar.redrawBodyToNoObject = function (s, gump) {
            gump.Clear();
            Scripts.Statusbar.drawBody(gump, undefined, s.dead);
            Scripts.Statusbar.drawName(gump, s.name);
            Scripts.Statusbar.drawHP(gump, s.hp, s.max, s.poisoned);
            gump.Update();
        };
        Statusbar.drawName = function (gump, name) {
            gump.AddText(4, 2, '0', name, 0, 202);
        };
        Statusbar.drawHP = function (gump, hp, max, poisoned) {
            var lineLength = 138;
            var relative = lineLength / max;
            var current = hp * relative;
            var over = hp > max;
            var currentColor = poisoned ? '#00FF00' : Scripts.Utils.determineHpColorRGB((current * 100) / lineLength);
            gump.AddColoredPolygone(1, 24, over ? lineLength : current, 17, currentColor);
            gump.AddText(4, 23, ColorEnum.pureWhite, hp + "/" + max, 0, 201);
        };
        Statusbar.getHoveringStatusBar = function () {
            var _a, _b, _c;
            var statusBars = Shared.GetArray(GlobalEnum.customStatusBars, []);
            var mousePosition = Orion.GetMousePosition();
            if ((mousePosition === null || mousePosition === void 0 ? void 0 : mousePosition.X()) && (mousePosition === null || mousePosition === void 0 ? void 0 : mousePosition.Y())) {
                var mouseX = mousePosition === null || mousePosition === void 0 ? void 0 : mousePosition.X();
                var mouseY = mousePosition === null || mousePosition === void 0 ? void 0 : mousePosition.Y();
                for (var _i = 0, statusBars_2 = statusBars; _i < statusBars_2.length; _i++) {
                    var statusBar_2 = statusBars_2[_i];
                    if (!Shared.GetVar(statusBar_2.serial, true)) {
                        continue;
                    }
                    var position = Orion.GetGumpPosition('custom', statusBar_2.serial);
                    var scale = ((_b = (_a = config === null || config === void 0 ? void 0 : config.statusBar) === null || _a === void 0 ? void 0 : _a.scale) !== null && _b !== void 0 ? _b : 100) / 100;
                    if ((position === null || position === void 0 ? void 0 : position.X()) > -1 &&
                        (position === null || position === void 0 ? void 0 : position.Y()) > -1 &&
                        mouseX - (position === null || position === void 0 ? void 0 : position.X()) >= 0 &&
                        mouseX - (position === null || position === void 0 ? void 0 : position.X()) <= 140 * scale &&
                        mouseY - (position === null || position === void 0 ? void 0 : position.Y()) >= 0 &&
                        mouseY - (position === null || position === void 0 ? void 0 : position.Y()) <= 42 * scale && ((_c = Orion.FindObject(statusBar_2.serial)) === null || _c === void 0 ? void 0 : _c.Exists())) {
                        return statusBar_2;
                    }
                }
            }
            return null;
        };
        Statusbar.setMobileArray = function (nearCharactersUpdate) {
            var mobileArray = Shared.GetArray('mobileArray', []);
            nearCharactersUpdate.forEach(function (gameObject) {
                var found = false;
                mobileArray.forEach(function (mobile) {
                    if (mobile.serial === gameObject.Serial()) {
                        mobile = {
                            serial: gameObject.Serial(),
                            notoriety: gameObject.Notoriety()
                        };
                        found = true;
                        return;
                    }
                });
                if (!found) {
                    mobileArray.push({
                        serial: gameObject.Serial(),
                        notoriety: gameObject.Notoriety()
                    });
                }
            });
            Shared.AddArray('mobileArray', mobileArray);
        };
        Statusbar.closeStandardStatusBars = function (notoriety, closeInactiveOnly) {
            if (closeInactiveOnly === void 0) { closeInactiveOnly = true; }
            var mobileArray = Shared.GetArray('mobileArray', []);
            if (notoriety) {
                notoriety.forEach(function (n) {
                    var notorietyNum = Scripts.Utils.getNotorietyNumberFromEnum(n);
                    mobileArray = mobileArray.filter(function (m) {
                        return m.notoriety === notorietyNum;
                    });
                });
            }
            if (closeInactiveOnly) {
                mobileArray = mobileArray.filter(function (m) {
                    return !Orion.ObjectExists(m.serial);
                });
            }
            mobileArray.forEach(function (m) {
                m.serial !== Player.Serial() && Orion.CloseStatusbar(m.serial);
            });
        };
        Statusbar.statusAll = function (notoriery, position, id, alwaysClear, offset, shiftX, shiftY) {
            var _a, _b;
            if (notoriery === void 0) { notoriery = []; }
            if (position === void 0) { position = 'RightTop'; }
            if (id === void 0) { id = 0; }
            if (alwaysClear === void 0) { alwaysClear = false; }
            if (offset === void 0) { offset = 5; }
            if (shiftX === void 0) { shiftX = 0; }
            if (shiftY === void 0) { shiftY = 0; }
            var scale = ((_b = (_a = config === null || config === void 0 ? void 0 : config.statusBar) === null || _a === void 0 ? void 0 : _a.scale) !== null && _b !== void 0 ? _b : 100) / 100;
            var barHeight = 42 * scale;
            var barWidth = 140 * scale;
            var notorieties = notoriery.join('|');
            var nearCharacters = Orion.FindTypeEx('any', '0xFFFF', 'ground', 'mobile|ignoreself', 18, notorieties);
            var gameWindowX = Orion.ClientOptionGet('GameWindowX');
            var gameWindowY = Orion.ClientOptionGet('GameWindowY');
            var gameWindowWidth = Orion.ClientOptionGet('GameWindowWidth');
            var gameWindowHeight = Orion.ClientOptionGet('GameWindowHeight');
            var statusAllStatusBars = Shared.GetArray("statusAllStatusBars" + id, []);
            if (alwaysClear) {
                for (var _i = 0, statusAllStatusBars_1 = statusAllStatusBars; _i < statusAllStatusBars_1.length; _i++) {
                    var serial = statusAllStatusBars_1[_i];
                    Scripts.Statusbar.close(serial);
                }
                statusAllStatusBars = [];
            }
            for (var _c = 0, nearCharacters_1 = nearCharacters; _c < nearCharacters_1.length; _c++) {
                var char = nearCharacters_1[_c];
                statusAllStatusBars.indexOf(char.Serial()) === -1 && statusAllStatusBars.push(char.Serial());
            }
            var positionId = 0;
            for (var _d = 0, statusAllStatusBars_2 = statusAllStatusBars; _d < statusAllStatusBars_2.length; _d++) {
                var serial = statusAllStatusBars_2[_d];
                if (!Scripts.Statusbar.exists(serial) && !Orion.FindObject(serial)) {
                    continue;
                }
                var x = 0;
                var y = 0;
                switch (position) {
                    case 'RightTop':
                        x = gameWindowX + gameWindowWidth + shiftX;
                        y = (gameWindowY + shiftY) + ((barHeight + offset) * positionId);
                        break;
                    case 'LeftTop':
                        x = gameWindowX - barWidth + shiftX;
                        y = (gameWindowY + shiftY) + ((barHeight + offset) * positionId);
                        break;
                    case 'TopLeft':
                        x = gameWindowX + shiftX + ((barWidth + offset) * positionId);
                        y = gameWindowY - barHeight + shiftY;
                        break;
                    case 'BottomLeft':
                        x = gameWindowX + shiftX + ((barWidth + offset) * positionId);
                        y = gameWindowY + gameWindowHeight + shiftY;
                        break;
                    default:
                        break;
                }
                !Scripts.Statusbar.exists(serial) && Scripts.Statusbar.create(serial, { x: x, y: y });
                var gump = Orion.CreateCustomGump(parseInt(serial, 16));
                gump.SetX(x);
                gump.SetY(y);
                gump.Update();
                positionId++;
            }
            Shared.AddArray("statusAllStatusBars" + id, statusAllStatusBars);
        };
        return Statusbar;
    }());
    Scripts.Statusbar = Statusbar;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Targeting = (function () {
        function Targeting() {
        }
        Targeting.addFriend = function () {
            Scripts.Utils.playerPrint('Add friend');
            var selection = Orion.WaitForAddObject('lastAddedFriend', 60000);
            if (selection !== 1) {
                throw 'e';
            }
            var friend = Orion.FindObject('lastAddedFriend');
            Orion.AddFriend(friend.Name(), friend.Serial());
            return friend.Serial();
        };
        Targeting.addEnemy = function () {
            Scripts.Utils.playerPrint('Add enemy');
            var selection = Orion.WaitForAddObject('lastAddedEnemy', 60000);
            if (selection !== 1) {
                throw 'e';
            }
            var enemy = Orion.FindObject('lastAddedEnemy');
            Orion.AddEnemy(enemy.Name(), enemy.Serial());
            return enemy.Serial();
        };
        Targeting.resetFriends = function () {
            Orion.ClearFriendList();
            while (Scripts.Targeting.addFriend()) { }
        };
        Targeting.resetEnemies = function () {
            Orion.ClearEnemyList();
            while (Scripts.Targeting.addEnemy()) { }
        };
        Targeting.targetNext = function (reverse, timeToStorePreviousTargets, additionalFlags, notoriety, opts) {
            if (reverse === void 0) { reverse = false; }
            if (timeToStorePreviousTargets === void 0) { timeToStorePreviousTargets = 1500; }
            if (additionalFlags === void 0) { additionalFlags = []; }
            if (notoriety === void 0) { notoriety = []; }
            if (Orion.Timer('targetTimer') === -1) {
                Orion.SetTimer('targetTimer');
                Orion.SetGlobal('targetStore', '[]');
            }
            Orion.Timer('targetTimer') > timeToStorePreviousTargets && Orion.SetGlobal('targetStore', '[]');
            Scripts.Utils.resetTimer('targetTimer');
            var storeAsString = Orion.GetGlobal('targetStore');
            var store = JSON.parse(storeAsString);
            for (var _i = 0, store_1 = store; _i < store_1.length; _i++) {
                var item = store_1[_i];
                Orion.Ignore(item.serial);
            }
            var currentIndex = parseInt(Orion.GetGlobal('currentTargetIndex'));
            if (store.length &&
                ((currentIndex < store.length - 1 && !reverse) ||
                    (reverse && currentIndex))) {
                currentIndex += reverse ? -1 : 1;
                Orion.SetGlobal('currentTargetIndex', currentIndex.toString());
                Orion.SetGlobal('currentTarget', store[currentIndex]);
            }
            else {
                var flags = ['near', 'mobile', 'live', 'ignoreself'].concat(additionalFlags).join('|');
                var noto = notoriety.join('|') || undefined;
                var nearestNewTarget = Orion.FindType('any', 'any', 'ground', flags, 15, noto);
                var resolved = false;
                while (!resolved && (nearestNewTarget === null || nearestNewTarget === void 0 ? void 0 : nearestNewTarget.length) && flags.indexOf('ignorefriendlytypes') !== -1) {
                    var t = Orion.FindObject(nearestNewTarget[0]);
                    var isFriendly = Scripts.Targeting.isFriendlyTargetType(t.Graphic(), t.Color(), t.Name());
                    if (!isFriendly) {
                        resolved = true;
                    }
                    else {
                        Orion.Ignore(t.Serial());
                        nearestNewTarget = Orion.FindType('any', 'any', 'ground', flags, 15, noto);
                    }
                }
                var isSomeNewTargetAround = !!(nearestNewTarget === null || nearestNewTarget === void 0 ? void 0 : nearestNewTarget.length);
                if (isSomeNewTargetAround) {
                    currentIndex = reverse ? 0 : store.length;
                    var item = { serial: nearestNewTarget[0], name: Orion.FindObject(nearestNewTarget[0]).Name() };
                    reverse ? store.unshift(item) : store.push(item);
                    Orion.SetGlobal('targetStore', JSON.stringify(store));
                }
                else {
                    if (typeof currentIndex !== 'number') {
                        Scripts.Utils.playerPrint("NO TARGET", ColorEnum.green);
                        return;
                    }
                    currentIndex = reverse ? store.length - 1 : 0;
                }
                Orion.SetGlobal('currentTargetIndex', currentIndex.toString());
                Orion.SetGlobal('currentTarget', store[currentIndex]);
            }
            Orion.IgnoreReset();
            if (!store[currentIndex]) {
                Scripts.Utils.playerPrint("NO TARGET", ColorEnum.green);
                return;
            }
            var enemySerial = store[currentIndex].serial;
            var enemy = Orion.FindObject(enemySerial);
            if (enemy) {
                Scripts.Targeting.highlightEnemy(enemySerial, enemy, opts.showStatusBar, opts.targetIndication, opts.statusBarPosition);
            }
            else {
                var enemyNameFromStore = store[currentIndex].name;
                Scripts.Utils.playerPrint("[" + enemyNameFromStore + "] out of distance", ColorEnum.red);
            }
        };
        Targeting.manualTarget = function (opts) {
            var selection = Orion.WaitForAddObject('manualTargetEnemy');
            Scripts.Utils.waitWhileTargeting();
            if (selection !== 1) {
                return;
            }
            var enemy = Orion.FindObject('manualTargetEnemy');
            if (enemy && enemy.Mobile() && !enemy.Dead()) {
                Scripts.Targeting.highlightEnemy('manualTargetEnemy', enemy, opts.showStatusBar, opts.targetIndication, opts.statusBarPosition);
            }
        };
        Targeting.highlightEnemy = function (enemySerial, enemy, showStatusBar, targetIndicationEnum, statusBarPosition) {
            var _a;
            if (showStatusBar === void 0) { showStatusBar = true; }
            if (targetIndicationEnum === void 0) { targetIndicationEnum = TargetIndicationEnum.large; }
            var notoColor = Scripts.Utils.getColorByNotoriety(enemy.Notoriety());
            if (!((_a = config.targeting) === null || _a === void 0 ? void 0 : _a.highlightEnemySilent)) {
                Scripts.Utils.playerPrint("[" + (enemy.Name() || 'target') + "]: " + enemy.Hits() + "/" + enemy.MaxHits(), notoColor);
                Orion.CharPrint(enemySerial, notoColor, "[" + (enemy.Name() || 'target') + "]: " + enemy.Hits() + "/" + enemy.MaxHits());
            }
            else {
                Orion.CharPrint(enemySerial, notoColor, "[" + enemy.Hits() + "/" + enemy.MaxHits() + "]");
            }
            targetIndicationEnum !== TargetIndicationEnum.none &&
                Scripts.Utils.printColoredHpBar(enemySerial, (enemy.Hits() / enemy.MaxHits()) * 100);
            showStatusBar && Scripts.Utils.updateCurrentStatusBar(enemySerial, statusBarPosition);
            Orion.ClearHighlightCharacters();
            Orion.AddObject('lastattack', enemySerial);
            Orion.AddHighlightCharacter(enemySerial, Scripts.Utils.getColorByNotoriety(enemy.Notoriety()));
        };
        Targeting.isFriendlyTargetType = function (graphic, color, name) {
            var friendly = [
                { graphic: '0x000E', color: '0x0000', exceptionNames: ['Earth Elemental'] },
                { graphic: '0x000D', color: '0x0B77' },
                { graphic: '0x0039', color: '0x0835' },
                { graphic: '0x0003', color: '0x0835' },
                { graphic: '0x00D4', color: '0x0712', exceptionNames: ['Grizzly Bear'] },
                { graphic: '0x00E8', color: '0x01BB' },
                { graphic: '0x00D8', color: '0x0000' },
                { graphic: '0x0015', color: '0x0757' },
                { graphic: '0x00CC', color: '0x0000' },
                { graphic: '0x003C', color: '0x0751' },
                { graphic: '0x0090', color: '0x4001' },
                { graphic: '0x003A', color: '0x0B87' },
                { graphic: '0x003A', color: '0x084C' },
                { graphic: '0x00D3', color: '0x0712' },
                { graphic: '0x00E1', color: '0x0712' },
                { graphic: '0x00DD', color: '0x0712' },
                { graphic: '0x0003', color: '0x049C' },
                { graphic: '0x001A', color: '0x0835' },
                { graphic: '0x0027', color: '0x0966' },
            ];
            for (var _i = 0, friendly_1 = friendly; _i < friendly_1.length; _i++) {
                var f = friendly_1[_i];
                if (f.graphic === graphic &&
                    f.color === color &&
                    (!f.exceptionNames || f.exceptionNames.indexOf(name) === -1)) {
                    return true;
                }
            }
            return false;
        };
        Targeting.targetNextMonster = function (reverse, timeToStorePreviousTargets, notoriety, statusWrapperOpt) {
            var _a;
            if (reverse === void 0) { reverse = false; }
            if (timeToStorePreviousTargets === void 0) { timeToStorePreviousTargets = 1500; }
            if (notoriety === void 0) { notoriety = ['gray', 'criminal', 'orange', 'red']; }
            var timer = Orion.Timer('tnm.prevTimer');
            var targets = Shared.GetArray('tnm.targets', []);
            var lastSerial = Shared.GetVar('tnm.lastSerial', '');
            if (timer < 0 || timer > timeToStorePreviousTargets) {
                Scripts.Utils.resetTimer('tnm.prevTimer');
                Shared.RemoveVar('tnm.lastSerial');
                lastSerial = '';
                targets = [];
                var noto = notoriety.join('|') || undefined;
                var friendList_1 = Orion.GetFriendList();
                var nearCharacters = Orion.FindTypeEx('any', '0xFFFF', 'ground', 'mobile|live|ignoreself', 18, noto)
                    .filter(function (a) { return !a.CanChangeName() && !friendList_1.some(function (f) { return f === a.Serial(); }); })
                    .sort(function (a, b) { return a.Distance() - b.Distance(); });
                for (var _i = 0, nearCharacters_2 = nearCharacters; _i < nearCharacters_2.length; _i++) {
                    var char = nearCharacters_2[_i];
                    Scripts.Utils.ensureName(char);
                    if ((char.Name() &&
                        char.Name().length === 8 &&
                        char.Name()[0].toLowerCase() === char.Name()[0] &&
                        char.Name()[char.Name().length - 1].toUpperCase() ===
                            char.Name()[char.Name().length - 1]) ||
                        Targeting.isFriendlyTargetType(char.Graphic(), char.Color(), char.Name())) {
                        continue;
                    }
                    var targetObj = {
                        serial: char.Serial(),
                        distance: char.Distance(),
                        priority: 0
                    };
                    targets.push(targetObj);
                }
                targets.sort(function (a, b) {
                    if (a.distance < b.distance)
                        return -1;
                    else if (a.distance > b.distance)
                        return 1;
                    if (a.priority > b.priority)
                        return -1;
                    else if (a.priority < b.priority)
                        return 1;
                    var chrA = Orion.FindObject(a.serial);
                    var chrB = Orion.FindObject(b.serial);
                    if (chrA && chrB && chrA.MaxHits() > chrB.MaxHits())
                        return -1;
                    else if (chrA && chrB && chrA.MaxHits() < chrB.MaxHits())
                        return 1;
                    if (chrA && chrB && chrA.Hits() < chrB.Hits())
                        return -1;
                    else if (chrA && chrB && chrA.Hits() > chrB.Hits())
                        return 1;
                    return 0;
                });
                Shared.AddArray('tnm.targets', targets);
            }
            var result = new Scripts.TargetResult();
            if (targets.length > 0) {
                if (!lastSerial || lastSerial === '' || !((_a = Orion.FindObject(lastSerial)) === null || _a === void 0 ? void 0 : _a.Exists())) {
                    result.gameObject(targets[0].serial);
                    lastSerial = result.gameObject().Serial();
                }
                else {
                    for (var i = 0; i < targets.length; i++) {
                        var nextPet = Orion.FindObject(targets[i].serial);
                        if ((nextPet === null || nextPet === void 0 ? void 0 : nextPet.Exists()) && nextPet.Serial() === lastSerial) {
                            if (i === targets.length - 1) {
                                result.gameObject(targets[0].serial);
                                lastSerial = targets[0].serial;
                            }
                            else {
                                result.gameObject(targets[i + 1].serial);
                                lastSerial = targets[i + 1].serial;
                            }
                            break;
                        }
                    }
                }
            }
            else {
                Scripts.Utils.playerPrint('[ no targets ]', ColorEnum.green, true);
                Shared.RemoveVar('tnm.lastSerial');
            }
            if (result.isValid()) {
                Shared.AddVar('tnm.lastSerial', result.gameObject().Serial());
                Targeting.showStatusBarOnWrapper(result.gameObject().Serial(), statusWrapperOpt);
                Orion.ClientLastTarget(result.gameObject().Serial());
                Scripts.Targeting.highlightEnemy(result.gameObject().Serial(), result.gameObject(), false, TargetIndicationEnum.none, { x: 300, y: 300 });
            }
            return result;
        };
        Targeting.showStatusBarOnWrapper = function (serial, statusWrapperOpt) {
            var _a, _b, _c, _d, _e, _f;
            var barObj = Orion.FindObject(serial);
            var enabled = (statusWrapperOpt === null || statusWrapperOpt === void 0 ? void 0 : statusWrapperOpt.enabled) === true;
            if ((barObj === null || barObj === void 0 ? void 0 : barObj.Exists()) && barObj.Mobile() && !barObj.Dead() && enabled) {
                var startX = (_a = statusWrapperOpt === null || statusWrapperOpt === void 0 ? void 0 : statusWrapperOpt.x) !== null && _a !== void 0 ? _a : 200;
                var startY = (_b = statusWrapperOpt === null || statusWrapperOpt === void 0 ? void 0 : statusWrapperOpt.y) !== null && _b !== void 0 ? _b : 150;
                var maxCount = (_c = statusWrapperOpt === null || statusWrapperOpt === void 0 ? void 0 : statusWrapperOpt.maxCount) !== null && _c !== void 0 ? _c : 10;
                var deltaX = (_d = statusWrapperOpt === null || statusWrapperOpt === void 0 ? void 0 : statusWrapperOpt.deltaX) !== null && _d !== void 0 ? _d : 30;
                var deltaY = (_e = statusWrapperOpt === null || statusWrapperOpt === void 0 ? void 0 : statusWrapperOpt.deltaY) !== null && _e !== void 0 ? _e : 30;
                var custBars = (statusWrapperOpt === null || statusWrapperOpt === void 0 ? void 0 : statusWrapperOpt.useCustBars) === true;
                var count = 0;
                if (Scripts.TargetingEx.isEnemy(barObj)) {
                    count = Shared.GetVar('showStatusBarOnWrapper.enemy.count', 0);
                    Shared.AddVar('showStatusBarOnWrapper.enemy.count', ++count);
                }
                if (custBars) {
                    var exists = Scripts.Statusbar.exists(serial);
                    if (!exists) {
                        Scripts.Statusbar.create(serial, {
                            x: startX + deltaX * (count % maxCount),
                            y: startY + deltaY * (count % maxCount)
                        }, (_f = config === null || config === void 0 ? void 0 : config.statusBarWrapper) === null || _f === void 0 ? void 0 : _f.autoCloseTimer);
                    }
                }
                else {
                    Orion.ShowStatusbar(serial, startX + deltaX * (count % maxCount), startY + deltaY * (count % maxCount));
                }
            }
        };
        return Targeting;
    }());
    Scripts.Targeting = Targeting;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var TargetingEx = (function () {
        function TargetingEx() {
        }
        TargetingEx.cancelResetTarget = function () {
            Orion.CancelWaitTarget();
        };
        TargetingEx.attack = function (targets) {
            var _a, _b;
            var target = TargetingEx.getTarget(targets);
            if (target.isValid()) {
                Orion.GetStatus((_a = target.gameObject()) === null || _a === void 0 ? void 0 : _a.Serial());
                Orion.Attack((_b = target.gameObject()) === null || _b === void 0 ? void 0 : _b.Serial());
            }
            else {
                Scripts.Utils.playerPrint('[ no target ]', ColorEnum.green);
            }
        };
        TargetingEx.isEnemy = function (obj) {
            var friendList = Orion.GetFriendList();
            if (obj &&
                !obj.CanChangeName() &&
                friendList.indexOf(obj === null || obj === void 0 ? void 0 : obj.Serial()) == -1 &&
                (obj.Notoriety() === NotorietyNum.criminal ||
                    obj.Notoriety() === NotorietyNum.gray ||
                    obj.Notoriety() === NotorietyNum.red ||
                    obj.Notoriety() === NotorietyNum.orange)) {
                return true;
            }
            return false;
        };
        TargetingEx.getAliveAlies = function (distance) {
            if (distance === void 0) { distance = 18; }
            var friendList = Orion.GetFriendList();
            var arr = new Array();
            if (friendList.length) {
                for (var i = 0; i < friendList.length; i++) {
                    var friend_1 = Orion.FindObject(friendList[i]);
                    if (friend_1 && !friend_1.Dead() && friend_1.Exists() && friend_1.Distance() <= distance) {
                        arr.push(friend_1);
                    }
                }
            }
            var mount = Orion.FindObject('myMount');
            if (mount && mount.Exists()) {
                arr.push(mount);
            }
            return arr;
        };
        TargetingEx.getAliveAttackPets = function (distance) {
            if (distance === void 0) { distance = 18; }
            var arr = new Array();
            var nearCharacters = Orion.FindTypeEx('0x00D6|0x0005', '0xFFFF', 'ground', 'live', 6);
            if (nearCharacters && nearCharacters.length) {
                for (var i = 0; i < nearCharacters.length; i++) {
                    var friend_2 = nearCharacters[i];
                    if (friend_2 && !friend_2.Dead() && friend_2.Exists() && friend_2.Distance() <= distance) {
                        arr.push(friend_2);
                    }
                }
            }
            return arr;
        };
        TargetingEx.getAlivePetsAndAlies = function (distance) {
            if (distance === void 0) { distance = 18; }
            var arr = this.getAliveAlies(distance);
            arr.push.apply(arr, this.getAliveAttackPets(distance));
            return arr;
        };
        TargetingEx.parseTargetAlias = function (value) {
            if (value) {
                var splitValue = value.split(',');
                var alias = splitValue[0].trim().toLowerCase();
                if (splitValue.length > 1 && parseInt(splitValue[1]) > 0) {
                    return { alias: alias, maxDistance: parseInt(splitValue[1]) };
                }
                else {
                    return { alias: alias };
                }
            }
            throw new Error("Non-exist target alias: " + value);
        };
        TargetingEx.getTargetAliases = function (targets) {
            var targetAliases = new Array();
            if (targets && typeof targets === 'string') {
                for (var _i = 0, _a = targets.split('|'); _i < _a.length; _i++) {
                    var target = _a[_i];
                    targetAliases.push(TargetingEx.parseTargetAlias(target));
                }
            }
            else if (targets && targets.length) {
                targetAliases.push.apply(targetAliases, targets);
            }
            else if (targets) {
                targetAliases.push(TargetingEx.parseTargetAlias(targets));
            }
            return targetAliases;
        };
        TargetingEx.getTargetResult = function (serial, targetAlias, optCondition) {
            var _a;
            var result = new Scripts.TargetResult();
            var obj = Orion.FindObject(serial);
            if ((obj === null || obj === void 0 ? void 0 : obj.Exists()) &&
                obj.Distance() <= ((_a = targetAlias === null || targetAlias === void 0 ? void 0 : targetAlias.maxDistance) !== null && _a !== void 0 ? _a : 20) &&
                (!optCondition || optCondition(obj))) {
                result.gameObject(obj === null || obj === void 0 ? void 0 : obj.Serial());
            }
            return result;
        };
        TargetingEx.getTargetResultFromArray = function (gameObjects, targetAlias, optCondition, optSort) {
            var _a;
            var result = new Scripts.TargetResult();
            var filtered = gameObjects.filter(function (obj) { var _a; return obj.Distance() <= ((_a = targetAlias === null || targetAlias === void 0 ? void 0 : targetAlias.maxDistance) !== null && _a !== void 0 ? _a : 20) && (!optCondition || optCondition(obj)); });
            if (optSort)
                filtered.sort(function (a, b) { return optSort(a, b); });
            if (filtered.length > 0) {
                result.gameObject((_a = filtered[0]) === null || _a === void 0 ? void 0 : _a.Serial());
            }
            return result;
        };
        TargetingEx.isMobileInjured = function (gameObject) {
            return (gameObject && !gameObject.Dead() && (gameObject.Hits() < gameObject.MaxHits() || gameObject.Poisoned()));
        };
        TargetingEx.resolveTragetManual = function (target) {
            var result = new Scripts.TargetResult();
            var selection = Orion.WaitForAddObject('TargetResult_Manual');
            if (selection === 0) {
                return;
            }
            if (selection === 1) {
                result = TargetingEx.getTargetResult('TargetResult_Manual', target);
            }
            else {
                result.selectedTile(SelectedTile);
            }
            return result;
        };
        TargetingEx.getTarget = function (targets, maxDistance) {
            TargetingEx.cancelResetTarget();
            Orion.CancelTarget();
            Orion.SetLOSOptions('sphere|spherecheckcorners');
            return TargetingEx.resolveTraget(targets, maxDistance);
        };
        TargetingEx.resolveTraget = function (targets, maxDistance) {
            var _a, _b, _c, _d;
            var result = new Scripts.TargetResult();
            var targetAliases = TargetingEx.getTargetAliases(targets);
            for (var _i = 0, targetAliases_1 = targetAliases; _i < targetAliases_1.length; _i++) {
                var target = targetAliases_1[_i];
                target.maxDistance = (_b = (_a = target.maxDistance) !== null && _a !== void 0 ? _a : maxDistance) !== null && _b !== void 0 ? _b : 20;
                result = new Scripts.TargetResult();
                if (target.alias === TargetEnum.manual) {
                    result = TargetingEx.resolveTragetManual(target);
                }
                else if (target.alias === TargetEnum.self) {
                    result.gameObject(Player.Serial());
                }
                else if (target.alias === TargetEnum.selfinjured) {
                    result = TargetingEx.getTargetResult(Player.Serial(), target, function (obj) {
                        return TargetingEx.isMobileInjured(obj);
                    });
                }
                else if (target.alias === TargetEnum.lasttarget) {
                    result = TargetingEx.getTargetResult(Orion.ClientLastTarget(), target);
                }
                else if (target.alias === TargetEnum.lasttargetmobile) {
                    result = TargetingEx.getTargetResult(Orion.ClientLastTarget(), target, function (obj) {
                        return obj.Mobile();
                    });
                }
                else if (target.alias === TargetEnum.laststatus) {
                    result = TargetingEx.getTargetResult('laststatus', target);
                }
                else if (target.alias === TargetEnum.lastattack) {
                    result = TargetingEx.getTargetResult(Orion.ClientLastAttack(), target);
                }
                else if (target.alias === TargetEnum.laststatusenemy) {
                    result = TargetingEx.getTargetResult('laststatus', target, function (obj) {
                        return TargetingEx.isEnemy(obj);
                    });
                }
                else if (target.alias === TargetEnum.mount) {
                    result = TargetingEx.getTargetResult('myMount', target);
                }
                else if (target.alias === TargetEnum.hover) {
                    result = TargetingEx.getTargetResult((_d = (_c = Scripts.Statusbar.getHoveringStatusBar()) === null || _c === void 0 ? void 0 : _c.serial) !== null && _d !== void 0 ? _d : '', target);
                }
                else if (target.alias === TargetEnum.nearinjuredalie) {
                    result = TargetingEx.getTargetResultFromArray(TargetingEx.getAlivePetsAndAlies(maxDistance), target, TargetingEx.isMobileInjured, function (a, b) { return a.Distance() - b.Distance(); });
                }
                else if (target.alias === TargetEnum.nearinjuredalielos) {
                    result = TargetingEx.getTargetResultFromArray(TargetingEx.getAlivePetsAndAlies(maxDistance), target, function (obj) {
                        return TargetingEx.isMobileInjured(obj) && obj.InLOS();
                    }, function (a, b) { return a.Distance() - b.Distance(); });
                }
                else if (target.alias === TargetEnum.mostinjuredalie) {
                    result = TargetingEx.getTargetResultFromArray(TargetingEx.getAlivePetsAndAlies(maxDistance), target, TargetingEx.isMobileInjured, function (a, b) { return a.Hits() - b.Hits(); });
                }
                else if (target.alias === TargetEnum.mostinjuredalielos) {
                    result = TargetingEx.getTargetResultFromArray(TargetingEx.getAlivePetsAndAlies(maxDistance), target, function (obj) {
                        return TargetingEx.isMobileInjured(obj) && obj.InLOS();
                    }, function (a, b) { return a.Hits() - b.Hits(); });
                }
                else if (target.alias) {
                    result = TargetingEx.getTargetResult(target.alias, target);
                }
                if (result.success()) {
                    break;
                }
            }
            return result;
        };
        return TargetingEx;
    }());
    Scripts.TargetingEx = TargetingEx;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var TargetResult = (function () {
        function TargetResult() {
        }
        TargetResult.prototype.success = function () {
            return this.isValid() || this.isStatic();
        };
        TargetResult.prototype.gameObject = function (serial) {
            if (serial) {
                this.serial = serial;
            }
            return Orion.FindObject(this.serial);
        };
        TargetResult.prototype.selectedTile = function (selectedTile) {
            if (selectedTile) {
                this.tile = selectedTile;
                if (selectedTile.IsGameObject) {
                    this.gameObject(selectedTile.Serial());
                }
            }
            return this.tile;
        };
        TargetResult.prototype.isValid = function () {
            var _a;
            return this.serial && ((_a = Orion.FindObject(this.serial)) === null || _a === void 0 ? void 0 : _a.Exists());
        };
        TargetResult.prototype.isStatic = function () {
            return !this.isValid() && this.tile !== undefined;
        };
        TargetResult.prototype.X = function () {
            if (this.isValid()) {
                return this.gameObject().X();
            }
            else if (this.isStatic()) {
                return this.selectedTile().X();
            }
            return undefined;
        };
        TargetResult.prototype.Y = function () {
            if (this.isValid()) {
                return this.gameObject().Y();
            }
            else if (this.isStatic()) {
                return this.selectedTile().Y();
            }
            return undefined;
        };
        TargetResult.prototype.Z = function () {
            if (this.isValid()) {
                return this.gameObject().Z();
            }
            else if (this.isStatic()) {
                return this.selectedTile().Z();
            }
            return undefined;
        };
        TargetResult.prototype.waitTarget = function () {
            var _a, _b, _c, _d;
            Scripts.TargetingEx.cancelResetTarget();
            if (this.isValid()) {
                Orion.WaitTargetObject(this.serial);
            }
            else if (this.isStatic()) {
                Orion.WaitTargetTile(((_a = this.tile) === null || _a === void 0 ? void 0 : _a.Graphic()) || '0xFFFF', (_b = this.tile) === null || _b === void 0 ? void 0 : _b.X(), (_c = this.tile) === null || _c === void 0 ? void 0 : _c.Y(), (_d = this.tile) === null || _d === void 0 ? void 0 : _d.Z());
            }
        };
        return TargetResult;
    }());
    Scripts.TargetResult = TargetResult;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.selectMenu = function (menuName, selections, firstCall) {
            if (firstCall === void 0) { firstCall = true; }
            if (!selections || !selections.length) {
                return;
            }
            var s = __spreadArrays(selections);
            firstCall && Orion.CancelWaitMenu();
            Scripts.Utils.worldSaveCheckWait();
            var menuToSelect = s[0];
            Orion.WaitMenu(typeof menuName === 'string' ? menuName : menuName.menu, typeof menuToSelect === 'string' ? menuToSelect : menuToSelect.item);
            s.splice(0, 1);
            Scripts.Utils.selectMenu(menuToSelect, s, false);
        };
        Utils.useAndSelect = function (serial, selections, use) {
            var _a;
            if (use === void 0) { use = true; }
            use && Orion.UseObject(serial);
            var selectionsDupe = __spreadArrays(selections);
            var selection = selectionsDupe.shift();
            if (selection.type === SelectionTypeEnum.gump) {
                var s = selection.selection;
                if (!Orion.WaitForGump(2000)) {
                    return;
                }
                (_a = Orion.GetLastGump()) === null || _a === void 0 ? void 0 : _a.Select(Orion.CreateGumpHook(s));
            }
            else if (selection.type === SelectionTypeEnum.menu) {
                var s = selection.selection;
                if (!Orion.WaitForMenu(2000)) {
                    return;
                }
                var lastMenu = Orion.GetMenu('last');
                if (lastMenu.Name().indexOf(s.name) === 0) {
                    lastMenu.Select(s.selection);
                }
            }
            if (selectionsDupe.length) {
                Scripts.Utils.useAndSelect(serial, selectionsDupe, false);
            }
        };
        Utils.refill = function (obj, sourceContainerId, quantity, targetContainerId, refillJustWhenIHaveNothing, itemName, sourceContainerIsItemOnGround) {
            if (quantity === void 0) { quantity = 1; }
            if (targetContainerId === void 0) { targetContainerId = 'backpack'; }
            if (refillJustWhenIHaveNothing === void 0) { refillJustWhenIHaveNothing = false; }
            if (sourceContainerIsItemOnGround === void 0) { sourceContainerIsItemOnGround = false; }
            var serialsInTargetContainer = Orion.FindType(obj.graphic, obj.color || '0xFFFF', targetContainerId);
            var serialsInSourceContainer = sourceContainerIsItemOnGround
                ? [sourceContainerId]
                : Orion.FindType(obj.graphic, obj.color || '0xFFFF', sourceContainerId);
            var itemsInTarget = Scripts.Utils.countObjectInContainer(obj, targetContainerId);
            var itemsInSource = Scripts.Utils.countObjectInContainer(obj, sourceContainerId, sourceContainerIsItemOnGround);
            if (itemsInTarget > quantity) {
                return Scripts.Utils.moveItems(serialsInTargetContainer, sourceContainerId, itemsInTarget - quantity);
            }
            else if (itemsInTarget < quantity) {
                if (refillJustWhenIHaveNothing && itemsInTarget) {
                    return 0;
                }
                if (!itemsInSource) {
                    Scripts.Utils.log("Nemas dostatek " + (itemName ? itemName : obj.graphic) + " pro doplneni", ColorEnum.orange);
                    return quantity;
                }
                return Scripts.Utils.moveItems(serialsInSourceContainer, targetContainerId, quantity - itemsInTarget);
            }
            return 0;
        };
        Utils.getObjSerials = function (obj, container) {
            if (container === void 0) { container = 'backpack'; }
            return Orion.FindType(obj.graphic, obj.color || '0xFFFF', container);
        };
        Utils.getColorByNotoriety = function (notoriety) {
            var notoColor = 906;
            switch (notoriety) {
                case 1:
                    notoColor = 2119;
                    break;
                case 3:
                    notoColor = 906;
                    break;
                case 6:
                    notoColor = 33;
                    break;
                default:
                    notoColor = 906;
            }
            return notoColor;
        };
        Utils.countObjectInContainer = function (obj, container, containerIsObjItemOnGround) {
            if (container === void 0) { container = 'backpack'; }
            if (containerIsObjItemOnGround === void 0) { containerIsObjItemOnGround = false; }
            var serials = containerIsObjItemOnGround ? [container] : Scripts.Utils.getObjSerials(obj, container);
            return Scripts.Utils.countItemsBySerials(serials);
        };
        Utils.countItemsBySerials = function (itemsSerials) {
            var result = 0;
            for (var _i = 0, itemsSerials_1 = itemsSerials; _i < itemsSerials_1.length; _i++) {
                var item = itemsSerials_1[_i];
                result += Orion.FindObject(item).Count();
            }
            return result;
        };
        Utils.moveObjectToContainer = function (obj, fromContainer, targetContainer) {
            if (fromContainer === void 0) { fromContainer = 'backpack'; }
            if (isMyGameObject(obj)) {
                var count = Scripts.Utils.countObjectInContainer(obj, fromContainer);
                var serials = Scripts.Utils.getObjSerials(obj, fromContainer);
                Scripts.Utils.moveItems(serials, targetContainer, count);
            }
            else {
                for (var key in obj) {
                    Scripts.Utils.moveObjectToContainer(obj[key], fromContainer, targetContainer);
                }
            }
        };
        Utils.moveItems = function (itemsSerials, targetContainerId, quantity) {
            if (quantity < 1) {
                return 0;
            }
            var needToMove = quantity;
            for (var _i = 0, itemsSerials_2 = itemsSerials; _i < itemsSerials_2.length; _i++) {
                var item = itemsSerials_2[_i];
                var itemCount = Orion.FindObject(item).Count();
                if (needToMove > itemCount) {
                    Orion.MoveItem(item, itemCount, targetContainerId);
                    needToMove -= itemCount;
                }
                else {
                    Orion.ClearJournal();
                    Orion.MoveItem(item, quantity, targetContainerId);
                    Orion.Wait(responseDelay * 2);
                    var i = Orion.FindObject(item);
                    if (quantity === 1 &&
                        !Scripts.Utils.countObjectInContainer({ graphic: i.Graphic(), color: i.Color() })) {
                        Orion.MoveItem(item, 2, targetContainerId);
                        Orion.Wait(responseDelay);
                    }
                    needToMove = 0;
                }
                Orion.Wait(responseDelay);
                if (needToMove < 1) {
                    break;
                }
            }
            return needToMove;
        };
        Utils.waitWhileSomethingInJournal = function (messages, wait, timeAhead, flags) {
            if (flags === void 0) { flags = 'sys'; }
            var messagesAsString = messages.join('|');
            var keepWait = true;
            var startTime = timeAhead ? Orion.Now() - timeAhead : 0;
            while (keepWait && !Player.Dead()) {
                var journalMessage = Orion.InJournal(messagesAsString, undefined, undefined, 'any', startTime, Orion.Now());
                if (journalMessage) {
                    for (var i = 0; i < messages.length; i++) {
                        var m = messages[i];
                        if (journalMessage.Text().indexOf(m) > -1) {
                            return i;
                        }
                    }
                }
                Orion.Wait(10);
                if (wait) {
                    wait -= 10;
                    keepWait = wait > 0;
                }
            }
            return -1;
        };
        Utils.worldSaveCheckWait = function () {
            if (Orion.InJournal('World save has been')) {
                Orion.Wait(25000);
                Orion.ClearJournal('World save has been', 'sys');
            }
        };
        Utils.log = function (message, color) {
            if (color === void 0) { color = ColorEnum.none; }
            Orion.Print(color, message);
        };
        Utils.playerPrint = function (message, color, fastPrint) {
            if (color === void 0) { color = ColorEnum.none; }
            if (fastPrint === void 0) { fastPrint = false; }
            Utils.charPrint(Player.Serial(), message, color, fastPrint);
        };
        Utils.charPrint = function (serial, message, color, fastPrint) {
            if (color === void 0) { color = ColorEnum.none; }
            if (fastPrint === void 0) { fastPrint = false; }
            if (fastPrint) {
                Orion.PrintFast(serial, color, 0, message);
            }
            else {
                Orion.CharPrint(serial, color, message);
            }
        };
        Utils.waitTarget = function (target) {
            if (target === TargetEnum.lastattack) {
                Orion.WaitTargetObject(Orion.ClientLastAttack());
            }
            else if (target === TargetEnum.self) {
                Orion.WaitTargetObject(Player.Serial());
            }
            else if (target !== undefined) {
                Orion.WaitTargetObject(target);
            }
        };
        Utils.resetTimer = function (timer) {
            Orion.RemoveTimer(timer);
            Orion.SetTimer(timer);
        };
        Utils.waitWhileTargeting = function () {
            while (Orion.HaveTarget()) {
                Orion.Wait(50);
            }
        };
        Utils.getCoordinatesForDirection = function (direction) {
            var x = Player.X();
            var y = Player.Y();
            var nextCoordinates = { x: Player.X(), y: Player.Y() };
            switch (direction) {
                case DirectionEnum.West:
                    nextCoordinates = { x: x - 1, y: y };
                    break;
                case DirectionEnum.North:
                    nextCoordinates = { x: x, y: y - 1 };
                    break;
                case DirectionEnum.East:
                    nextCoordinates = { x: x + 1, y: y };
                    break;
                default:
                    nextCoordinates = { x: x, y: y + 1 };
                    break;
            }
            return nextCoordinates;
        };
        Utils.getSerialsFromMyGameObject = function (type, recuseSearch, layers) {
            var _a;
            if (recuseSearch === void 0) { recuseSearch = true; }
            var list = [];
            if (layers) {
                for (var _i = 0, layers_1 = layers; _i < layers_1.length; _i++) {
                    var layer = layers_1[_i];
                    var objAtLayer = Orion.ObjAtLayer(layer);
                    if (objAtLayer && objAtLayer.Graphic && (objAtLayer === null || objAtLayer === void 0 ? void 0 : objAtLayer.Graphic()) === type.graphic && (!type.color || type.color === "any" || ((_a = type.color) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "0xffff" || (objAtLayer === null || objAtLayer === void 0 ? void 0 : objAtLayer.Color()) === type.color)) {
                        list.push(objAtLayer.Serial());
                    }
                }
            }
            if (type.color) {
                list.push.apply(list, Orion.FindType(type.graphic, type.color, 'backpack', '', '', '', recuseSearch));
            }
            else {
                list.push.apply(list, Orion.FindType(type.graphic, 'any', 'backpack', '', '', '', recuseSearch));
            }
            return list;
        };
        Utils.getSerialsFromMyGameObjects = function (object, recuseSearch, layers) {
            if (recuseSearch === void 0) { recuseSearch = true; }
            var list = new Array();
            if (isMyGameObject(object)) {
                var findList = Utils.getSerialsFromMyGameObject(object, recuseSearch, layers);
                if (findList) {
                    list = list.concat(findList);
                }
            }
            else {
                for (var key in object) {
                    list = list.concat(Utils.getSerialsFromMyGameObjects(object[key], recuseSearch, layers));
                }
            }
            return list;
        };
        Utils.findMyDefinitionForGameObject = function (gameObject, obj) {
            var graphic = gameObject.Graphic().toUpperCase();
            var color = gameObject.Color().toUpperCase();
            obj === undefined && (obj = gameObject);
            if (isMyGameObject(obj)) {
                if (obj.graphic.toUpperCase() === graphic &&
                    ((!obj.color && color === '0X0000') || obj.color.toUpperCase() === color)) {
                    return obj;
                }
                return;
            }
            var myDefinition;
            for (var key in obj) {
                myDefinition = Scripts.Utils.findMyDefinitionForGameObject(gameObject, obj[key]);
                if (isMyGameObject(myDefinition)) {
                    return myDefinition;
                }
            }
        };
        Utils.parseObject = function (objectAsString) {
            var arr = objectAsString.split('.');
            arr.shift();
            var item = gameObject;
            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                var i = arr_1[_i];
                item = item[i];
            }
            return item;
        };
        Utils.updateCurrentStatusBar = function (newSerial, position) {
            var currentStatusBarSerial = Orion.GetGlobal('currentStatusBarSerial');
            currentStatusBarSerial && Orion.CloseStatusbar(currentStatusBarSerial);
            Orion.SetGlobal('currentStatusBarSerial', newSerial);
            Orion.ShowStatusbar(newSerial, position.x, position.y);
        };
        Utils.determineHpColor = function (percent) {
            var c = Math.ceil((percent * 3) / 100);
            return c === 1 ? ColorEnum.red : c === 2 ? ColorEnum.orange : ColorEnum.green;
        };
        Utils.determineHpColorRGB = function (percent) {
            var c = Math.ceil((percent * 3) / 100);
            return c === 1 ? '#FF0000' : c === 2 ? '#FFFF00' : '#007B00';
        };
        Utils.getARGBColorByNotoriety = function (notoriety, hexaOpacity) {
            if (hexaOpacity === void 0) { hexaOpacity = 'ff'; }
            switch (notoriety) {
                case 1:
                    return "#" + hexaOpacity + "26beed";
                    break;
                case 2:
                    return "#" + hexaOpacity + "00cc00";
                    break;
                case 3:
                    return "#" + hexaOpacity + "999999";
                    break;
                case 4:
                    return "#" + hexaOpacity + "999999";
                    break;
                case 5:
                    return "#" + hexaOpacity + "ff8c1a";
                    break;
                case 6:
                    return "#" + hexaOpacity + "e62a00";
                    break;
                default:
                    return "#" + hexaOpacity + "ffff1a";
            }
        };
        Utils.printColoredHpBar = function (target, percent) {
            var fullBoxCount = Math.ceil((percent * 6) / 100);
            var color = Scripts.Utils.determineHpColor(percent);
            var text = '';
            for (var i = 0; i < 6; i++) {
                text += i < fullBoxCount ? '\u25A0' : '\u25A1';
            }
            Orion.CharPrint(target, color, text);
        };
        Utils.getLivingObjectInDistance = function (objectSerial) {
            var o = Orion.FindObject(objectSerial);
            return o && !o.Dead() ? o : null;
        };
        Utils.printDamage = function (serial, previousHp, force) {
            var _a;
            if (force === void 0) { force = false; }
            var o = Orion.FindObject(serial);
            var hp = o.Hits();
            var max = o.MaxHits();
            var diff = hp - previousHp;
            if (diff !== 0 || force) {
                diff !== 0 &&
                    Orion.PrintFast(serial, diff > 0 ? ColorEnum.green : ColorEnum.red, 0, "" + (diff > 0 ? '+' : '') + diff.toString());
                if (!((_a = config.autoHandlers) === null || _a === void 0 ? void 0 : _a.printDamageDiffOnly)) {
                    Orion.PrintFast(serial, Scripts.Utils.determineHpColor((hp / max) * 100), 0, "[" + hp + "/" + max + "]");
                }
            }
        };
        Utils.moveRegs = function (from, to) {
            if (from === void 0) { from = null; }
            if (to === void 0) { to = null; }
            var resolveContainers = function (from, to) {
                if (!from) {
                    Scripts.Utils.playerPrint('Odkial presunieme regy?');
                    Orion.WaitForAddObject('moveRegs/sourceContainerName', 60000);
                    Orion.Wait(100);
                }
                var sourceContainerName = from ? from.Serial() : 'moveRegs/sourceContainerName';
                if (!to) {
                    Scripts.Utils.playerPrint('Kam presunieme regy?');
                    Orion.WaitForAddObject('moveRegs/targetContainerName', 60000);
                    Orion.Wait(100);
                }
                var targetContainerName = to ? to.Serial() : 'moveRegs/targetContainerName';
                return {
                    sourceContainerName: sourceContainerName,
                    targetContainerName: targetContainerName
                };
            };
            var _a = resolveContainers(from, to), sourceContainerName = _a.sourceContainerName, targetContainerName = _a.targetContainerName;
            for (var reg in gameObject.regy) {
                var regFound = Orion.FindType(gameObject.regy[reg].graphic, gameObject.regy[reg].color || -1, sourceContainerName, undefined, undefined, undefined, false);
                if (regFound.length) {
                    Orion.MoveItem(regFound[0], undefined, targetContainerName);
                    Orion.Wait(250);
                }
            }
            for (var reg in gameObject.necroRegy) {
                var regFound = Orion.FindType(gameObject.necroRegy[reg].graphic, gameObject.necroRegy[reg].color || -1, sourceContainerName, undefined, undefined, undefined, false);
                if (regFound.length) {
                    Orion.MoveItem(regFound[0], undefined, targetContainerName);
                    Orion.Wait(250);
                }
            }
        };
        Utils.use = function (val, name, minimalCountForWarn, warnWavPath) {
            if (name === void 0) { name = ''; }
            if (isMyGameObject(val)) {
                val = [val];
            }
            var serials = [];
            for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
                var o = val_1[_i];
                var oSerials = Orion.FindType(o.graphic, o.color);
                for (var _a = 0, oSerials_1 = oSerials; _a < oSerials_1.length; _a++) {
                    var s = oSerials_1[_a];
                    serials.push(s);
                }
            }
            if (!serials.length) {
                for (var _b = 0, val_2 = val; _b < val_2.length; _b++) {
                    var o = val_2[_b];
                    if (!o.name) {
                        continue;
                    }
                    var oSerials = Orion.FindType(o.graphic);
                    for (var _c = 0, oSerials_2 = oSerials; _c < oSerials_2.length; _c++) {
                        var s = oSerials_2[_c];
                        Orion.Click(s);
                        Orion.Wait(100);
                        if (Orion.FindObject(s).Name().indexOf(o.name) === 0) {
                            serials.push(s);
                        }
                    }
                }
            }
            var count = Scripts.Utils.countItemsBySerials(serials);
            if (!count && warnWavPath) {
                Orion.PlayWav(warnWavPath);
                Scripts.Utils.playerPrint("!! NEMAS " + name + " !!", ColorEnum.red);
                return;
            }
            if ((minimalCountForWarn !== undefined && count <= minimalCountForWarn) ||
                (minimalCountForWarn === undefined && !count)) {
                Scripts.Utils.playerPrint("[ " + name + " " + count + " ]", ColorEnum.red);
            }
            if (count) {
                Orion.UseObject(serials[0]);
            }
        };
        Utils.setTargetAlias = function (targetAliasToSet, message) {
            if (message === void 0) { message = 'nastav target'; }
            var selection = Orion.WaitForAddObject(targetAliasToSet, 60000);
            Orion.Print('-1', message);
            if (selection !== 1) {
                throw 'bad target';
            }
        };
        Utils.findFirstType = function (myGameObject, layer) {
            var _a, _b;
            var graphic = myGameObject.graphic;
            var color = myGameObject.color;
            var name = myGameObject.name;
            var serials = Orion.FindType(graphic, color);
            if (serials.length) {
                return serials[0];
            }
            if (layer !== undefined) {
                var l = Orion.ObjAtLayer(layer);
                if (l && l.Graphic() === graphic && (l.Color() === color || color === undefined || color.toLowerCase() === "0xffff")) {
                    return l.Serial();
                }
            }
            if (!name) {
                return;
            }
            serials = Orion.FindType(graphic);
            for (var _i = 0, serials_3 = serials; _i < serials_3.length; _i++) {
                var s = serials_3[_i];
                if (((_a = Orion.FindObject(s)) === null || _a === void 0 ? void 0 : _a.Name()) === '') {
                    Orion.Click(s);
                    Orion.Wait(100);
                }
                if (Orion.FindObject(s).Name().indexOf(name) === 0) {
                    return s;
                }
            }
            if (layer !== undefined) {
                var l = Orion.ObjAtLayer(layer);
                if (((_b = Orion.FindObject(l === null || l === void 0 ? void 0 : l.Serial())) === null || _b === void 0 ? void 0 : _b.Name()) === '') {
                    Orion.Click(l.Serial());
                    Orion.Wait(100);
                }
                if (l && l.Graphic() === graphic && l.Name() === name) {
                    return l.Serial();
                }
            }
        };
        Utils.walkToSerial = function (serial, distance) {
            if (distance === void 0) { distance = 1; }
            var o = Orion.FindObject(serial);
            Orion.WalkTo(o.X(), o.Y(), o.Z(), distance);
            Orion.Wait(1000);
        };
        Utils.targetObjectNotSelf = function (objectAlias, message) {
            if (message === void 0) { message = 'Target object'; }
            Scripts.Utils.playerPrint(message);
            var selection = Orion.WaitForAddObject(objectAlias, 60000);
            if (selection !== 1) {
                Scripts.Utils.playerPrint("Cancel");
                throw 'cancel';
            }
            else if (Orion.FindObject(objectAlias).Serial() === Player.Serial()) {
                Scripts.Utils.playerPrint("Zameruj lepe :-)");
                Scripts.Utils.targetObjectNotSelf(objectAlias, message);
                return;
            }
        };
        Utils.createGameObjectSelections = function (selections) {
            for (var _i = 0, selections_1 = selections; _i < selections_1.length; _i++) {
                var s = selections_1[_i];
                Scripts.Utils.playerPrint(s.ask);
                var selection = Orion.WaitForAddObject(s.addObject, 60000);
                if (selection !== 1) {
                    Scripts.Utils.log('All selections must be game objects', ColorEnum.red);
                    throw 'err';
                }
            }
        };
        Utils.openContainer = function (s, maxWaitingTime) {
            if (maxWaitingTime === void 0) { maxWaitingTime = 2000; }
            Orion.OpenContainer(s);
            while (!Orion.GumpExists('container', s) && maxWaitingTime > 0) {
                maxWaitingTime -= 100;
                Orion.Wait(100);
            }
            if (maxWaitingTime <= 0) {
                throw 'e';
            }
        };
        Utils.isItemStackable = function (serial) {
            var itemObject = Orion.FindObject(serial);
            var checkSerials = Orion.FindType(itemObject.Graphic(), itemObject.Color(), itemObject.Container());
            var stackable = false;
            for (var _i = 0, checkSerials_1 = checkSerials; _i < checkSerials_1.length; _i++) {
                var s = checkSerials_1[_i];
                if (Orion.FindObject(s).Count() > 1) {
                    stackable = true;
                    break;
                }
            }
            if (!stackable && checkSerials.length > 1) {
                var itemToMove = Orion.FindObject(checkSerials[0]);
                var x = itemToMove.X();
                var y = itemToMove.Y();
                var container = itemToMove.Container();
                Orion.MoveItem(checkSerials[0], 1, checkSerials[1]);
                Orion.Wait(responseDelay);
                if (Orion.FindObject(checkSerials[1])) {
                    Orion.MoveItem(checkSerials[0], 1, container, x, y);
                    Orion.Wait(responseDelay);
                    stackable = false;
                }
                else {
                    stackable = true;
                }
            }
            return stackable;
        };
        Utils.askForCount = function () {
            var _a;
            Scripts.Utils.playerPrint('Po kolika kusech to budes prehazovat ?');
            Orion.ClearJournal();
            while (!Orion.InJournal('', 'my')) {
                Orion.Wait(500);
            }
            var text = (_a = Orion.InJournal('', 'my')) === null || _a === void 0 ? void 0 : _a.Text();
            if (!text) {
                Scripts.Utils.log('Nic jsi nenapsal ?', ColorEnum.red);
                throw 'err';
            }
            var count = parseInt(text.replace(Player.Name() + ':', ''), 10);
            if (typeof count !== 'number' || count < 0) {
                Scripts.Utils.log('Spatne zadany pocet', ColorEnum.red);
                throw 'err';
            }
            return count;
        };
        Utils.waitTargetTileOrObject = function () {
            var target = {};
            var selection = Orion.WaitForAddObject('wosTarget');
            if (selection === 0) {
                return;
            }
            if (selection === 1) {
                var targetGameObject = Orion.FindObject('wosTarget');
                target.x = targetGameObject.X();
                target.y = targetGameObject.Y();
                target.z = targetGameObject.Z();
                target.mobile = targetGameObject.Mobile();
                Orion.WaitTargetObject('wosTarget');
            }
            else {
                target.x = SelectedTile.X();
                target.y = SelectedTile.Y();
                target.z = SelectedTile.Z();
                Orion.WaitTargetTile(SelectedTile.Graphic(), target.x, target.y, target.z);
            }
            return target;
        };
        Utils.sayWithColor = function (text, color) {
            var originalState = Orion.GetFontColor();
            var orignalValue = Orion.GetFontColorValue();
            Orion.SetFontColor(true, color);
            Orion.Say(text);
            Orion.SetFontColor(originalState, orignalValue);
        };
        Utils.ensureName = function (obj) {
            var result = '';
            if (obj && !obj.Name()) {
                Orion.RequestName(obj.Serial());
                result = obj.Name();
            }
            return result;
        };
        Utils.waitForCond = function (condFce, timeout) {
            var counter = 0;
            while (condFce() !== true && counter < timeout) {
                counter += 25;
                Orion.Wait(25);
            }
            if (counter >= timeout) {
                return false;
            }
            return true;
        };
        Utils.getNotorietyNumberFromEnum = function (notoriety) {
            switch (notoriety) {
                case NotorietyEnum.blue:
                    return 1;
                case NotorietyEnum.green:
                    return 2;
                case NotorietyEnum.gray:
                    return 3;
                case NotorietyEnum.criminal:
                    return 4;
                case NotorietyEnum.orange:
                    return 5;
                case NotorietyEnum.red:
                    return 6;
                case NotorietyEnum.yellow:
                    return 7;
            }
        };
        return Utils;
    }());
    Scripts.Utils = Utils;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Clerik = (function () {
        function Clerik() {
        }
        Clerik.bishopToggle = function () {
            var helm = Orion.FindObject('bishopToggleHelm');
            var bishopHelm = Scripts.Utils.findFirstType({ graphic: '0x1DB9', color: '0x0BB0' }, 6);
            if (!bishopHelm) {
                Scripts.Utils.playerPrint('nemas Bishopku', ColorEnum.red);
            }
            if (!helm) {
                var helmSerial = Scripts.Utils.findFirstType({ graphic: '0x1412', color: '0xFFFF' }, 6);
                if (!helmSerial) {
                    Scripts.Utils.createGameObjectSelections([
                        {
                            ask: 'Target you primary helmet',
                            addObject: 'bishopToggleHelm'
                        },
                    ]);
                }
                else {
                    Orion.AddObject('bishopToggleHelm', helmSerial);
                }
            }
            var currentHelm = Orion.ObjAtLayer('Helmet');
            if (!currentHelm) {
                Orion.UseObject(bishopHelm);
            }
            else if (currentHelm.Serial() === bishopHelm) {
                Orion.UseObject('bishopToggleHelm');
            }
            else {
                Orion.UseObject(bishopHelm);
            }
        };
        Clerik.turboRess = function (bandageAfterRess) {
            if (bandageAfterRess === void 0) { bandageAfterRess = false; }
            var closestGhosts = Orion.FindType(-1, -1, 'ground', 'human|dead|fast', 1);
            if ((closestGhosts === null || closestGhosts === void 0 ? void 0 : closestGhosts.length) < 1) {
                return Scripts.Utils.playerPrint('Nevidis zadneho ducha k oziveni');
            }
            Orion.WaitTargetObject(closestGhosts[0]);
            Orion.UseType(gameObject.uncategorized.bandy.graphic);
            Orion.Wait(100);
            if (bandageAfterRess) {
                Orion.WaitTargetObject(closestGhosts[0]);
                Orion.UseType(gameObject.uncategorized.bandy.graphic);
            }
        };
        Clerik.turboRessFull = function () {
            var getBloodyBandageGraphic = function () {
                if (Orion.Count(gameObject.uncategorized.krvavaBanda1.graphic) >= 30) {
                    return gameObject.uncategorized.krvavaBanda1.graphic;
                }
                else if (Orion.Count(gameObject.uncategorized.krvavaBanda2.graphic) >= 30) {
                    return gameObject.uncategorized.krvavaBanda2.graphic;
                }
                return null;
            };
            var closestGhosts = Orion.FindType(-1, -1, 'ground', 'human|dead|fast', 1);
            if ((closestGhosts === null || closestGhosts === void 0 ? void 0 : closestGhosts.length) < 1) {
                return Scripts.Utils.playerPrint('Nevidis zadneho ducha k oziveni');
            }
            var bloodyBandageGraphic = getBloodyBandageGraphic();
            if (bloodyBandageGraphic) {
                Orion.WaitTargetObject(closestGhosts[0]);
                Orion.UseType(bloodyBandageGraphic);
                Orion.Wait(100);
                Orion.WaitTargetObject(closestGhosts[0]);
                Orion.UseType(gameObject.uncategorized.bandy.graphic);
            }
            else {
                Scripts.Clerik.turboRess(true);
            }
        };
        Clerik.KPZPull = function () {
            Clerik.useKPZ(function () {
                Scripts.Utils.playerPrint(MedicActionsEnum.pull, ColorEnum.green);
                Orion.Cast('Greater Heal');
            });
        };
        Clerik.KPZJump = function () {
            Clerik.useKPZ(function () {
                Scripts.Utils.playerPrint(MedicActionsEnum.jump, ColorEnum.green);
                Orion.Cast('Protection');
            });
        };
        Clerik.KPZHpSwitch = function () {
            Clerik.useKPZ(function () {
                Scripts.Utils.playerPrint(MedicActionsEnum.switchHp, ColorEnum.green);
                Orion.Cast('Reactive Armor');
            });
        };
        Clerik.useKPZ = function (cb) {
            var kpzList = Orion.FindType(gameObject.medic.kpz.graphic, gameObject.medic.kpz.color, 'backpack');
            var kpz = kpzList.length > 0 ? kpzList[0] : null;
            Orion.ClearJournal();
            if (!kpz) {
                Scripts.Utils.playerPrint('Nemas KPZ');
                return false;
            }
            Orion.UseObject(kpz);
            Scripts.Utils.waitWhileSomethingInJournal(['activated KPZ', 't use that yet', 'pouze v dungeon zone'], 3000);
            if (Orion.InJournal('activated KPZ')) {
                cb();
            }
        };
        Clerik.medikHiding = function () {
            if (Player.Hidden()) {
                Scripts.Utils.playerPrint('V hidu uz jsi.');
                return;
            }
            Orion.ClearJournal();
            Orion.Print(ColorEnum.none, 'Start Medik Hiding');
            var headerStit = Orion.FindType('0x1B76');
            if (headerStit.length) {
                Orion.UseType('0x1B76');
            }
            else {
                Orion.Disarm();
            }
            Orion.UseSkill('Hiding');
            Orion.Wait(100);
            if (Orion.InJournal('You must wait')) {
                Orion.ClearJournal('You must wait');
                return;
            }
            Orion.Wait(100);
            Orion.UseType('0x0A15');
            Orion.Exec('_hidingPreoccupiedCheck', true);
        };
        return Clerik;
    }());
    Scripts.Clerik = Clerik;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Craft = (function () {
        function Craft() {
        }
        Craft.ocaruj = function (dusty, loot) {
            if (dusty === void 0) { dusty = OcarovaniEnum.mytheril; }
            if (loot === void 0) { loot = false; }
            var target = 'ocarujMrtvolku';
            var timer = 'ocarovani';
            var dustSerial = Scripts.Utils.findFirstType(gameObject.uncategorized.dusty[dusty]);
            if (!dustSerial) {
                Scripts.Utils.playerPrint('Nemam dusty', ColorEnum.red);
                return;
            }
            Scripts.Utils.createGameObjectSelections([{ ask: 'Jakou mrtvolku budes ocarovavat ?', addObject: target }]);
            var o = Orion.FindObject(target);
            if (o.Distance() > 3) {
                Scripts.Utils.playerPrint('Musis k ni dobehnout');
                Orion.AddDisplayTimer(timer, 5000, 'AboveChar', 'bar', 'Hiding', 0, 100, '0x100', 0, 'white');
            }
            var w = 5000;
            while (o.Distance() > 3 && w) {
                Orion.Wait(500);
                w -= 500;
            }
            if (o.Distance() > 3) {
                Scripts.Utils.playerPrint('Mrtvola nebyla v dosahu..');
                return;
            }
            Orion.RemoveDisplayTimer(timer);
            Scripts.Utils.openContainer(target);
            var lootPytelSerials = Orion.FindType('0x0E76', '0x049A', target);
            if (!lootPytelSerials.length) {
                Scripts.Utils.playerPrint('Nevidim loot pytel', ColorEnum.red);
                return;
            }
            Orion.WaitTargetObject(lootPytelSerials[0]);
            Orion.UseObject(dustSerial);
            if (loot) {
                Orion.Wait(responseDelay);
                Scripts.Loot.lootCorpseId(target);
            }
        };
        Craft.rozbij = function (ingy, count) {
            if (ingy === void 0) { ingy = OcarovaniEnum.mytheril; }
            if (count === void 0) { count = 5; }
            var adaHammer = Scripts.Utils.findFirstType(gameObject.uncategorized.adaHammer, 2);
            if (!adaHammer) {
                Scripts.Utils.playerPrint('Nemam Ada Hammer', ColorEnum.red);
                return;
            }
            var ingySerial = Scripts.Utils.findFirstType(gameObject.resources.ingots[ingy]);
            if (!ingySerial) {
                Scripts.Utils.playerPrint('Nemam Myth Ingy', ColorEnum.red);
                return;
            }
            Orion.Drop(ingySerial, count);
            Orion.Wait(responseDelay);
            Orion.WaitTargetObject(ingySerial);
            Orion.UseObject(adaHammer);
            Orion.Wait(responseDelay);
            var dust = gameObject.uncategorized.dusty[ingy];
            var dusty = Orion.FindType(dust.graphic, dust.color, 'ground', 'item', 1);
            if (!dusty.length) {
                Scripts.Utils.playerPrint('neco se pokazilo.. nevidim pode mnou dusty', ColorEnum.red);
            }
            else {
                Orion.MoveItem(dusty[0]);
            }
        };
        Craft.bandana = function () {
            var bandana = Orion.FindObject(Scripts.Utils.findFirstType({ graphic: "0x153F", color: "0xffff" }, 6));
            var helmet = Orion.ObjAtLayer("Helmet");
            var checkWeight = Player.Weight() <= Player.MaxWeight();
            if (checkWeight) {
                if (bandana) {
                    if (bandana.Layer() === 6) {
                        Orion.Unequip("Helmet");
                        Orion.Wait(200);
                    }
                    Orion.UseObject(bandana.Serial());
                    if (helmet && bandana.Serial() !== helmet.Serial()) {
                        Orion.Wait(200);
                        Orion.UseObject(helmet.Serial());
                    }
                }
                else {
                    Orion.CharPrint(Player.Serial(), ColorEnum.red, "Nemas bandanu");
                }
            }
            else {
                if (bandana && bandana.Exists()) {
                    Orion.UseObject(bandana.Serial());
                }
                Orion.CharPrint(Player.Serial(), ColorEnum.red, "Overweight");
            }
        };
        return Craft;
    }());
    Scripts.Craft = Craft;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Necromancer = (function () {
        function Necromancer() {
        }
        Necromancer.necroMystic = function (msg) {
            var necroMystic = gameObject.uncategorized.necroMystic;
            var mysticSerial = Scripts.Utils.findFirstType(necroMystic, 6);
            if (!mysticSerial) {
                Scripts.Utils.playerPrint('Nemas necro mystic !!!');
                return;
            }
            var mount = Orion.ObjAtLayer('Mount');
            if (mount) {
                Orion.UseObject('self');
                while (Orion.ObjAtLayer('Mount')) {
                    Orion.Wait(50);
                }
            }
            var previousHelmet = Orion.ObjAtLayer('Helmet');
            Orion.UseObject(mysticSerial);
            if (!Player.Hidden()) {
                Orion.Say(msg);
            }
            if (previousHelmet && previousHelmet.Serial() !== mysticSerial) {
                Orion.Wait(responseDelay);
                Orion.UseObject(previousHelmet.Serial());
            }
            Orion.Wait(responseDelay);
            mount && Scripts.Mount.mountAndDismount();
        };
        return Necromancer;
    }());
    Scripts.Necromancer = Necromancer;
})(Scripts || (Scripts = {}));
function _autoAmmoRefill() {
    var hasArrowsInQuiver = true;
    var hasBoltsInQuiver = true;
    while (true) {
        Orion.Wait(1500);
        if (Player.Dead()) {
            continue;
        }
        var naplnenyToulec = Scripts.Utils.waitWhileSomethingInJournal([
            'sipu bylo pridano do magickeho toulce',
            'sipek bylo pridano do magickeho toulce'
        ], 2000);
        Orion.ClearJournal('bylo pridano do magickeho toulce');
        hasArrowsInQuiver = hasArrowsInQuiver || naplnenyToulec === 0;
        hasBoltsInQuiver = hasBoltsInQuiver || naplnenyToulec === 1;
        var arrowsQuiverGameObject = gameObject.uncategorized.sipyToulec;
        var arrowsGameObject = gameObject.uncategorized.sipy;
        var boltsQuiverGameObject = gameObject.uncategorized.sipkyToulec;
        var boltsGameObject = gameObject.uncategorized.sipky;
        hasArrowsInQuiver = Scripts.Rang.checkAndRefillAmmo(hasArrowsInQuiver, arrowsQuiverGameObject, arrowsGameObject, 'sipy');
        hasBoltsInQuiver = Scripts.Rang.checkAndRefillAmmo(hasBoltsInQuiver, boltsQuiverGameObject, boltsGameObject, 'sipky');
    }
}
var Scripts;
(function (Scripts) {
    var Rang = (function () {
        function Rang() {
        }
        Rang.autoAmmoRefill = function () {
            Orion.Wait(100);
            Scripts.Utils.playerPrint('Hlidacka sipek a sipu aktivovana', ColorEnum.green);
            Orion.Exec('_autoAmmoRefill', true);
        };
        Rang.checkAndRefillAmmo = function (hasAmmoInQuiver, quiverGameObject, ammoGameObject, type) {
            if (hasAmmoInQuiver === void 0) { hasAmmoInQuiver = true; }
            if (!hasAmmoInQuiver) {
                return hasAmmoInQuiver;
            }
            var quiverSerial = Scripts.Utils.findFirstType(quiverGameObject);
            var ammoCount = Scripts.Utils.countObjectInContainer(ammoGameObject);
            if (ammoCount < 5 && quiverSerial) {
                Scripts.Utils.playerPrint("Dosly " + type + ", vytahuju nove", ColorEnum.green);
                Orion.UseObject(quiverSerial);
                Orion.Wait(responseDelay);
                Orion.Click(quiverSerial);
                hasAmmoInQuiver = !!Scripts.Utils.waitWhileSomethingInJournal(['quiver (0)', 'quiver'], 2000, 50);
                Orion.ClearJournal('quiver');
                if (!hasAmmoInQuiver) {
                    ammoCount = Scripts.Utils.countObjectInContainer(ammoGameObject);
                    Scripts.Utils.playerPrint("vytahnuto poslednich " + ammoCount + " " + (type === 'sipy' ? 'sipu' : 'sipek') + " ", ColorEnum.red);
                }
            }
            return hasAmmoInQuiver;
        };
        return Rang;
    }());
    Scripts.Rang = Rang;
})(Scripts || (Scripts = {}));
var Vampire = (function () {
    function Vampire() {
    }
    Vampire.coffin = function (menuSelection) {
        var keySerial = Orion.FindType('0x186A', '0x0695').shift();
        if (!keySerial) {
            return Scripts.Utils.playerPrint("nemas klicek od rakve", ColorEnum.red);
        }
        Orion.UseObject(keySerial);
        Orion.WaitForMenu();
        var menu = Orion.GetMenu("last");
        if (!menu) {
            return Scripts.Utils.playerPrint("nepodarilo sa otvoriť menu", ColorEnum.red);
        }
        return menu.Select(menuSelection);
    };
    return Vampire;
}());
var Scripts;
(function (Scripts) {
    var TbGump = (function () {
        function TbGump() {
        }
        TbGump.main = function () {
            TbGump.resetJournalAndScores();
            TbGump.updateGump();
            Orion.Exec('tbGumpUpdateLoop', true);
        };
        TbGump.updateGump = function () {
            var gump = Orion.CreateCustomGump(TbGumpEnum.tbCustomGumpSerial);
            gump.Clear();
            TbGump.drawBox(gump);
            TbGump.drawText(gump);
            gump.Update();
        };
        TbGump.resetJournalAndScores = function () {
            Orion.ClearJournal(TbGumpEnum.kotaPattern + "|" + TbGumpEnum.scorePattern + "|" + TbGumpEnum.sysScorePattern);
            Shared.AddArray(TbGumpEnum.sharedArrayKoty, []);
            Shared.AddVar(TbGumpEnum.sharedVarOrderScore, '0');
            Shared.AddVar(TbGumpEnum.sharedVarChaosScore, '0');
        };
        TbGump.searchTextAndUpdateGump = function () {
            var kotaPattern = 'je nyni pod kontrolou';
            var scorePattern = '--- SKORE ---';
            var sysScorePattern = '<SCORES>';
            var kotaMsg = Orion.InJournal(kotaPattern);
            if (kotaMsg) {
                var text = kotaMsg.Text();
                if (text) {
                    var koty = Shared.GetArray(TbGumpEnum.sharedArrayKoty, []);
                    var match = text.match(/(.*)\s\(.*kontrolou\s(.*)/);
                    var name_2 = match[1];
                    name_2 = name_2.length > 7 ? name_2.substring(0, 7) + '...' : name_2;
                    var order = match[2] === 'Orderu';
                    var found = false;
                    for (var i = 0; i < koty.length; i++) {
                        var kota = koty[i];
                        if (kota.name === name_2) {
                            kota.order = order;
                            found = true;
                            break;
                        }
                    }
                    !found && koty.push({ name: name_2, order: order });
                    Shared.AddArray(TbGumpEnum.sharedArrayKoty, koty);
                }
                Orion.ClearJournal(kotaPattern);
            }
            var scoreMsg = Orion.InJournal(scorePattern);
            if (scoreMsg) {
                Orion.ClearJournal(scorePattern);
                var text = scoreMsg.Text();
                if (text) {
                    var match = text.match(/(.*):/);
                    var kota = match[1];
                    var orderMsg = Orion.InJournal(kota + ": Order");
                    var chaosMsg = Orion.InJournal(kota + ": Chaos");
                    if (orderMsg) {
                        var orderScoreText = orderMsg.Text();
                        Shared.AddVar(TbGumpEnum.sharedVarOrderScore, orderScoreText.match(/Order:\s(\d*)/)[1]);
                        Orion.ClearJournal(kota + ": Order");
                    }
                    if (chaosMsg) {
                        var chaosScoreText = chaosMsg.Text();
                        Shared.AddVar(TbGumpEnum.sharedVarChaosScore, chaosScoreText.match(/Chaos:\s(\d*)/)[1]);
                        Orion.ClearJournal(kota + ": Chaos");
                    }
                }
            }
            var sysScoreMsg = Orion.InJournal(sysScorePattern);
            if (sysScoreMsg) {
                var text = sysScoreMsg.Text();
                if (text) {
                    var match = text.match(/\d+/g);
                    Shared.AddVar(TbGumpEnum.sharedVarOrderScore, match[0]);
                    Shared.AddVar(TbGumpEnum.sharedVarChaosScore, match[1]);
                }
                Orion.ClearJournal(sysScorePattern);
            }
            if (kotaMsg || scoreMsg || sysScoreMsg) {
                TbGump.updateGump();
            }
        };
        TbGump.drawBox = function (gump) {
            var width = 160;
            var height = 80;
            var padding = 1;
            var borderColor = '#ff3f3f3f';
            var backgroundColor = '#ff000000';
            gump.AddColoredPolygone(0, 0, width, height, borderColor);
            gump.AddColoredPolygone(padding, padding, width - 2 * padding, height - 2 * padding, backgroundColor);
            gump.SetCallback("tbCustomGumpCallBack");
            gump.AddHitBox(TbGumpEnum.tbCustomGumpSerial, 0, 0, width, height, 1);
            gump.AddTilePic(-5, 7, '0x1BC4', '0x0B77');
            gump.AddTilePic(0, 47, '0x1BC3', '0x0B77');
        };
        TbGump.drawText = function (gump) {
            var koty = Shared.GetArray(TbGumpEnum.sharedArrayKoty, []);
            var orderScore = Shared.GetVar(TbGumpEnum.sharedVarOrderScore, '0');
            var chaosScore = Shared.GetVar(TbGumpEnum.sharedVarChaosScore, '0');
            var textSerial = 3000;
            gump.AddText(43, 12, '0x0BAF', orderScore, 0, textSerial++);
            gump.AddText(43, 47, '0x0BAF', chaosScore, 0, textSerial++);
            var kotaCounter = 0;
            for (var _i = 0, koty_1 = koty; _i < koty_1.length; _i++) {
                var kota = koty_1[_i];
                var y = 20 * kotaCounter;
                var color = kota.order ? '#ff0000ff' : '#ffff0000';
                gump.AddColoredPolygone(80, y + 3, 8, 14, color);
                gump.AddText(90, y + 1, '0x0837', kota.name, 0, textSerial++);
                kotaCounter++;
            }
        };
        return TbGump;
    }());
    Scripts.TbGump = TbGump;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var reagentsContainerName = 'alchemy/reagentsContainerName';
    var Alchemy = (function () {
        function Alchemy() {
        }
        Alchemy.getMortar = function () {
            var mortars = Orion.FindType(gameObject.uncategorized.mortar.graphic);
            if (!mortars.length) {
                Scripts.Utils.log("Nemas mortar", ColorEnum.red);
                throw 'Nemas mortar';
            }
            return mortars[0];
        };
        Alchemy.mixOne = function (p) {
            var potion = typeof p === 'string' ? gameObject.potions[p] : p;
            var mortar = this.getMortar();
            var reagent = gameObject.regy[potion.reagent] || gameObject.necroRegy[potion.reagent];
            Scripts.Utils.worldSaveCheckWait();
            Orion.ClearJournal();
            Scripts.Utils.playerPrint("Mixing " + potion.alchemySelection);
            Scripts.Utils.selectMenu('Vyber typ potionu', [potion.alchemySelection]);
            Orion.UseObject(mortar);
            Scripts.Utils.waitWhileSomethingInJournal(['You pur', 'You completed', 'You toss', 'Nemas dostatecny'], 60000);
            if (Orion.InJournal('Nemas dostatecny')) {
                Orion.UseObject(reagentsContainerName);
                Orion.Wait(100);
                Orion.Print(-1);
                if (!Scripts.Common.refillReagent(reagent, reagentsContainerName, potion.reagentsCount * 10)) {
                    Scripts.Utils.log('Dosly regy', ColorEnum.red);
                    return false;
                }
                return false;
            }
            if (Orion.InJournal('You toss')) {
                return false;
            }
            Scripts.Utils.worldSaveCheckWait();
            Orion.ClearJournal();
            Orion.UseObject(mortar);
            Scripts.Utils.waitWhileSomethingInJournal(['You pour'], 60000);
            Orion.Wait(responseDelay);
            return true;
        };
        Alchemy.mix = function (potionName) {
            if (!isPotionsEnum(potionName)) {
                return;
            }
            Scripts.Utils.createGameObjectSelections([{ ask: 'Kontajner s regmi?', addObject: reagentsContainerName }]);
            Orion.UseObject(reagentsContainerName);
            Orion.Wait(100);
            var p = gameObject.potions[potionName];
            while (true) {
                var result = this.mixOne(p);
                Orion.Wait(responseDelay);
                if (result) {
                    Scripts.Utils.worldSaveCheckWait();
                    Orion.ClearJournal();
                    var potion = Scripts.Utils.findFirstType(p);
                    var kad = Scripts.Potions.getKadForPotion(p);
                    Orion.WaitTargetObject(potion);
                    Orion.UseObject(kad);
                    Scripts.Utils.waitWhileSomethingInJournal(['You put'], 60000);
                }
            }
        };
        Alchemy.gmMortar = function (potionName) {
            if (!isPotionsEnum(potionName)) {
                return;
            }
            var p = gameObject.potions[potionName];
            var cilovaKadSerial = Scripts.Potions.getKadForPotion(p);
            var isEmptyKad = Orion.FindType(gameObject.uncategorized.emptyKad.graphic, gameObject.uncategorized.emptyKad.color);
            if (!isEmptyKad) {
                Scripts.Utils.log('Nemas praznou kad', ColorEnum.red);
                return;
            }
            Scripts.Utils.playerPrint("Target gmmortar for making \"" + potionName + "\"");
            Orion.WaitForAddObject('gmMortar', 60000);
            var _loop_3 = function () {
                Orion.ClearJournal();
                Orion.Wait(50);
                var kadePrevious = Orion.FindType(gameObject.uncategorized.emptyKad.graphic);
                Scripts.Utils.selectMenu('Vyber typ potionu', [p.gmMortarSelection]);
                Orion.UseObject('gmMortar');
                Scripts.Utils.waitWhileSomethingInJournal(['You put the Nadoba', 'Musis mit']);
                if (Orion.InJournal('Musis mit')) {
                    Scripts.Utils.log('Dosly regy', ColorEnum.red);
                    return { value: void 0 };
                }
                var kadeNew = Orion.FindType(gameObject.uncategorized.emptyKad.graphic);
                var michnutaKadSerial = kadeNew.filter(function (i) { return kadePrevious.indexOf(i) === -1; })[0];
                Orion.ClearJournal();
                Orion.Wait(50);
                Orion.WaitTargetObject(cilovaKadSerial);
                Orion.UseObject(michnutaKadSerial);
                Scripts.Utils.waitWhileSomethingInJournal(['Prelil jsi']);
                Orion.ClearJournal();
                Orion.Wait(responseDelay);
                var emptyBottle = Scripts.Potions.getEmptyBottle();
                Orion.WaitTargetObject(emptyBottle);
                Orion.UseObject(michnutaKadSerial);
                Scripts.Utils.waitWhileSomethingInJournal(['You put']);
                Orion.ClearJournal();
                Orion.Wait(50);
                Orion.WaitTargetType(p.graphic, p.color);
                Orion.UseObject(cilovaKadSerial);
                Scripts.Utils.waitWhileSomethingInJournal(['You put']);
            };
            while (true) {
                var state_2 = _loop_3();
                if (typeof state_2 === "object")
                    return state_2.value;
            }
        };
        return Alchemy;
    }());
    Scripts.Alchemy = Alchemy;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Cartography = (function () {
        function Cartography() {
        }
        Cartography.cartography = function () {
            Scripts.Utils.playerPrint('Target atlas with maps');
            Orion.WaitForAddObject('atlasResourse', 60000);
            var atlasResourse = Orion.FindObject('atlasResourse');
            if (!atlasResourse ||
                atlasResourse.Graphic() !== gameObject.uncategorized.atlas.graphic ||
                atlasResourse.Color() !== gameObject.uncategorized.atlas.color) {
                Scripts.Utils.log('Musis vybrat atlas !!!', ColorEnum.red);
                return;
            }
            Scripts.Utils.playerPrint('Target atlas to recycle maps');
            Orion.WaitForAddObject('atlasRecycle', 60000);
            var atlasRecycle = Orion.FindObject('atlasRecycle');
            if (!atlasRecycle ||
                atlasRecycle.Graphic() !== gameObject.uncategorized.atlas.graphic ||
                atlasRecycle.Color() !== gameObject.uncategorized.atlas.color) {
                Scripts.Utils.log('Musis vybrat atlas !!!', ColorEnum.red);
                return;
            }
            var menuName = 'What sort of map do you want to draw ?';
            while (true) {
                Scripts.Utils.worldSaveCheckWait();
                Orion.ClearJournal();
                Orion.CancelWaitTarget();
                Orion.WaitTargetObject('self');
                Orion.UseObject(atlasResourse.Serial());
                Scripts.Utils.waitWhileSomethingInJournal(['Vyjmul jsi mapu z atlasu']);
                Orion.ClearJournal('You put the map');
                var mapa = Scripts.Utils.findFirstType(gameObject.uncategorized.mapa);
                Scripts.Utils.selectMenu(menuName, ['Regional Map']);
                Orion.Wait(responseDelay);
                Orion.UseObject(mapa);
                if (!Scripts.Utils.waitWhileSomethingInJournal(['an unusable map', 'You put the map'])) {
                    continue;
                }
                mapa = Scripts.Utils.findFirstType(gameObject.uncategorized.mapa);
                Orion.WaitTargetObject(mapa);
                Orion.UseObject(atlasRecycle.Serial());
                Scripts.Utils.waitWhileSomethingInJournal(['Zrecykloval jsi mapu', 'Uschoval jsi mapu']);
            }
        };
        return Cartography;
    }());
    Scripts.Cartography = Cartography;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Crafting = (function () {
        function Crafting() {
        }
        Crafting.setInputs = function (itemName) {
            Scripts.Utils.playerPrint("Kde je container se surovinami ?");
            Orion.WaitForAddObject('resourcesContainer', 60000);
            Orion.UseObject('resourcesContainer');
            Scripts.Utils.playerPrint("Kam hazet hotove vyrobky ?");
            Orion.WaitForAddObject('outputContainer', 60000);
        };
        Crafting.makeProgress = function () {
            Orion.ClearJournal();
            Scripts.Utils.waitWhileSomethingInJournal(['You fail', 'You put', 'failed']);
            return !!Orion.InJournal('You put');
        };
        Crafting.refOrMake = function (count, resourcePath) {
            var res = Scripts.Utils.parseObject(resourcePath);
            var itemName = resourcePath.replace(/[^.]*\.[^.]*\./, '');
            var missingCount = Scripts.Utils.refill(res, 'resourcesContainer', count, 'backpack', false, itemName);
            if (missingCount && res.make) {
                Scripts.Crafting.make(missingCount, resourcePath, false);
                Orion.Wait(responseDelay);
                missingCount = Scripts.Utils.countObjectInContainer(res);
                missingCount = Scripts.Utils.refill(res, 'resourcesContainer', missingCount, 'backpack', false, itemName);
            }
            if (missingCount) {
                Scripts.Utils.log("nemas dostatek " + itemName, ColorEnum.red);
                throw "nemas dostatek " + itemName;
            }
        };
        Crafting.make = function (count, objectAsString, setInputs) {
            var _a, _b, _c, _d;
            if (setInputs === void 0) { setInputs = true; }
            Orion.ClearJournal();
            var itemObject = Scripts.Utils.parseObject(objectAsString);
            var itemName = objectAsString.replace(/[^.]*\.[^.]*\./, '');
            if (!itemObject.make) {
                Scripts.Utils.log(itemName + " nelze vyrobit", ColorEnum.red);
                throw itemName + " nelze vyrobit";
            }
            if (!isMakeProps(itemObject.make)) {
                throw "!isMakeProps";
            }
            if (setInputs) {
                Scripts.Crafting.setInputs(objectAsString);
            }
            var finishedCount = 0;
            var totalTries = 0;
            while (count > 0) {
                Scripts.Utils.worldSaveCheckWait();
                Orion.ClearJournal();
                if ((_a = itemObject.make.refill) === null || _a === void 0 ? void 0 : _a.crafting) {
                    for (var _i = 0, _e = (_b = itemObject.make.refill) === null || _b === void 0 ? void 0 : _b.crafting; _i < _e.length; _i++) {
                        var ref = _e[_i];
                        Scripts.Crafting.refOrMake(ref.count, ref.item);
                    }
                }
                if ((_c = itemObject.make.refill) === null || _c === void 0 ? void 0 : _c.resources) {
                    for (var _f = 0, _g = (_d = itemObject.make.refill) === null || _d === void 0 ? void 0 : _d.resources; _f < _g.length; _f++) {
                        var ref = _g[_f];
                        Scripts.Crafting.refOrMake(ref.count, ref.item);
                    }
                }
                Orion.ClearJournal();
                var tool = Scripts.Utils.parseObject(itemObject.make.tool);
                var toolTarget = itemObject.make.toolTarget
                    ? Scripts.Utils.parseObject(itemObject.make.toolTarget)
                    : undefined;
                Scripts.Utils.selectMenu(itemObject.make.menu.name, itemObject.make.menu.selections);
                toolTarget && Orion.WaitTargetType(toolTarget.graphic, toolTarget.color);
                Orion.UseType(tool.graphic, tool.color);
                var success = Scripts.Crafting.makeProgress();
                if (success) {
                    var outputCount = itemObject.make.outputCount || 1;
                    count -= outputCount;
                    finishedCount++;
                    var item = Scripts.Utils.findFirstType(itemObject);
                    setInputs && Orion.MoveItem(item, outputCount, 'outputContainer');
                    Orion.Wait(responseDelay);
                }
                Scripts.Utils.log("vyrobeno " + itemName + " - " + finishedCount + " / " + ++totalTries);
            }
        };
        Crafting.countMaterialForOneItem = function (objectAsString, callStack, count, crafting) {
            var _a, _b, _c, _d;
            if (callStack === void 0) { callStack = 0; }
            if (count === void 0) { count = 1; }
            if (crafting === void 0) { crafting = true; }
            var itemObject = Scripts.Utils.parseObject(objectAsString);
            if (!itemObject.make) {
                return;
            }
            var currentItemName = objectAsString.replace(/[^.]*\.[^.]*\./, '');
            var tab = '   ';
            var space = '';
            for (var i = 0; i < callStack; i++) {
                space += tab;
            }
            if (crafting) {
                Orion.Print(ColorEnum.red, space + "Na vyrobu " + count + "x " + currentItemName + " budes potrebovat:");
            }
            if ((_a = itemObject.make.refill) === null || _a === void 0 ? void 0 : _a.crafting) {
                for (var _i = 0, _e = (_b = itemObject.make.refill) === null || _b === void 0 ? void 0 : _b.crafting; _i < _e.length; _i++) {
                    var ref = _e[_i];
                    var refItemName = ref.item.replace(/[^.]*\.[^.]*\./, '');
                    Orion.Print(ColorEnum.none, "" + space + ref.count * count + "x " + refItemName);
                    Scripts.Crafting.countMaterialForOneItem(ref.item, callStack + 1, ref.count * count, true);
                }
            }
            if ((_c = itemObject.make.refill) === null || _c === void 0 ? void 0 : _c.resources) {
                for (var _f = 0, _g = (_d = itemObject.make.refill) === null || _d === void 0 ? void 0 : _d.resources; _f < _g.length; _f++) {
                    var ref = _g[_f];
                    var refItemName = ref.item.replace(/[^.]*\.[^.]*\./, '');
                    Orion.Print(ColorEnum.none, "" + space + ref.count * count + "x " + refItemName);
                    Scripts.Crafting.countMaterialForOneItem(ref.item, callStack + 1, ref.count * count, false);
                }
            }
        };
        Crafting.makeFromSelection = function () {
            var _a;
            var pathAsString = Shared.GetVar('currentListMakeItemPath');
            if (!pathAsString) {
                return;
            }
            Scripts.Crafting.countMaterialForOneItem(pathAsString);
            Scripts.Utils.playerPrint("" + pathAsString, ColorEnum.red);
            Scripts.Utils.playerPrint('Kolik chces vyrobit ?');
            Orion.ClearJournal();
            while (!Orion.InJournal('', 'my')) {
                Orion.Wait(500);
            }
            var text = (_a = Orion.InJournal('', 'my')) === null || _a === void 0 ? void 0 : _a.Text();
            if (!text) {
                return;
            }
            var count = parseInt(text.replace(Player.Name() + ':', ''), 10);
            Orion.Print(-1, count.toString());
            Scripts.Crafting.make(count, pathAsString);
        };
        Crafting.listMakeMenu = function () {
            var timer = Orion.Timer('listMakeMenuTimer');
            var highlightIndex;
            var list;
            if (timer === -1 || timer > 3000) {
                Shared.AddVar('currentListMakeItemPath', 'gameObject.crafting');
                highlightIndex = undefined;
                list = [];
                for (var item in gameObject.crafting) {
                    list.push(item);
                }
                Shared.AddArray('listMakeMenu', list);
            }
            else {
                highlightIndex = Shared.GetVar('highlightIndex');
                list = Shared.GetArray('listMakeMenu');
            }
            Scripts.Utils.resetTimer('listMakeMenuTimer');
            if (list.length < 5) {
                highlightIndex =
                    highlightIndex === undefined || highlightIndex + 1 === list.length ? 0 : highlightIndex + 1;
            }
            else {
                highlightIndex = 2;
                var temp = list.shift();
                list.push(temp);
                Shared.AddArray('listMakeMenu', list);
            }
            Shared.AddVar('highlightIndex', highlightIndex);
            var i = 0;
            for (i; i < list.length && i < 5; i++) {
                Scripts.Utils.playerPrint(list[i], i === highlightIndex ? ColorEnum.red : ColorEnum.none);
            }
            for (i; i < 5; i++) {
                Scripts.Utils.playerPrint('');
            }
        };
        Crafting.confirmMakeMenu = function () {
            var _a;
            if (typeof Shared.GetVar('highlightIndex') !== 'number' || !((_a = Shared.GetArray('listMakeMenu')) === null || _a === void 0 ? void 0 : _a.length)) {
                return;
            }
            var currentItemAsString = Shared.GetVar('currentListMakeItemPath', 'gameObject.crafting');
            var currentItem = Scripts.Utils.parseObject(currentItemAsString);
            var highlightIndex = Shared.GetVar('highlightIndex');
            var list = Shared.GetArray('listMakeMenu');
            var newItem = currentItem[list[highlightIndex]];
            Shared.AddVar('currentListMakeItemPath', currentItemAsString + '.' + list[highlightIndex]);
            if (!newItem.make) {
                var newList = [];
                for (var item in newItem) {
                    newList.push(item);
                }
                Shared.AddArray('listMakeMenu', newList);
                Shared.AddVar('highlightIndex', undefined);
                Scripts.Crafting.listMakeMenu();
            }
            else {
                Scripts.Crafting.makeFromSelection();
            }
        };
        Crafting.bowcraftTrain = function () {
            Scripts.Utils.createGameObjectSelections([
                { ask: 'Target container with logs', addObject: 'logsContainer' },
                { ask: 'Target container with shafts', addObject: 'shaftsContainer' },
            ]);
            var dagger = Scripts.Utils.findFirstType(gameObject.crafting.blacksmithing.ironWeapons.swordsAndBlades.dagger, 1);
            if (!dagger) {
                Scripts.Utils.log('nemas dagger', ColorEnum.red);
            }
            while (true) {
                Orion.ClearJournal();
                Orion.Wait(50);
                var logs = Scripts.Utils.findFirstType(gameObject.resources.logs);
                if (!logs) {
                    var shafts = Orion.FindType('0x1BD4');
                    Orion.MoveItem(shafts[0], 0, 'shaftsContainer');
                    Orion.Wait(responseDelay);
                }
                Scripts.Utils.refill(gameObject.resources.logs, 'logsContainer', 20, undefined, true, 'logs');
                var l = Scripts.Utils.findFirstType(gameObject.resources.logs);
                Orion.MoveItem(l, 1, 'backpack', 20, 20);
                Orion.Wait(responseDelay);
                Scripts.Utils.selectMenu('Bowcraft', ['Shafts']);
                Orion.WaitTargetObject(l);
                Orion.UseObject(dagger);
                Scripts.Utils.waitWhileSomethingInJournal(['You fail to create', 'You put the Unfinished']);
                Orion.UseType('0x1BD6');
                Orion.Wait(responseDelay);
            }
        };
        Crafting.tailoringTrain = function () {
            Scripts.Utils.createGameObjectSelections([
                { ask: 'Target container with folded cloth', addObject: 'clothContainer' }
            ]);
            var kitO = { graphic: '0x0F9D', color: '0x0000' };
            var kit = Scripts.Utils.findFirstType(kitO);
            var scissorsO = { graphic: '0x0F9E', color: '0x0000' };
            var scissors = Scripts.Utils.findFirstType(scissorsO);
            if (!kit) {
                Scripts.Utils.log('nemas sewing kit', ColorEnum.red);
            }
            if (!scissors) {
                Scripts.Utils.log('nemas scissors', ColorEnum.red);
            }
            while (true) {
                Orion.ClearJournal();
                Orion.Wait(50);
                Scripts.Utils.refill(gameObject.resources.foldedCloth, 'clothContainer', 20, undefined, true, 'folded cloth');
                var c = Scripts.Utils.findFirstType(gameObject.resources.foldedCloth);
                Orion.MoveItem(c, 1, 'backpack', 20, 20);
                Orion.Wait(responseDelay);
                Scripts.Utils.selectMenu('Cloth', ['Headwear', 'Bandana']);
                Orion.WaitTargetObject(c);
                Orion.UseObject(kit);
                Scripts.Utils.waitWhileSomethingInJournal(['Tailoring failed', 'You put the bandana']);
                var bandana = Orion.FindType('0x153F', '0x0000');
                while (bandana.length) {
                    Orion.WaitTargetObject(bandana[0]);
                    Orion.UseType('0x0F9E');
                    Orion.Wait(responseDelay);
                    bandana = Orion.FindType('0x153F', '0x0000');
                }
                Orion.Wait(100);
                var bandage = Orion.FindType('0x0E21', '0x0000');
                if (bandage.length) {
                    Orion.MoveItem(bandage[0], undefined, 'clothContainer');
                }
                Orion.Wait(responseDelay);
            }
        };
        return Crafting;
    }());
    Scripts.Crafting = Crafting;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Fishing = (function () {
        function Fishing() {
        }
        Fishing.fishTrain = function (wayPoints) {
            var distance = 6;
            var prut = Scripts.Utils.findFirstType(gameObject.uncategorized.prut);
            if (!wayPoints) {
                wayPoints = [{ x: Player.X(), y: Player.Y() }];
            }
            for (var _i = 0, wayPoints_1 = wayPoints; _i < wayPoints_1.length; _i++) {
                var w = wayPoints_1[_i];
                Orion.WalkTo(w.x, w.y, Player.Z(), 1, undefined);
                for (var x = distance * -1; x <= distance; x++) {
                    for (var y = distance * -1; y <= distance; y++) {
                        Orion.ClearJournal();
                        Orion.Wait(responseDelay);
                        while (!Orion.InJournal('no fish here|Try fishing in water')) {
                            Orion.ClearJournal();
                            Orion.WaitTargetTileRelative('any', x, y, Player.Z());
                            Orion.UseObject(prut);
                            Scripts.Utils.waitWhileSomethingInJournal([
                                'You fish a while',
                                'You pull out',
                                'no fish here',
                                'Try fishing in water',
                            ]);
                        }
                        Orion.ClearJournal();
                    }
                }
            }
        };
        return Fishing;
    }());
    Scripts.Fishing = Fishing;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Healing = (function () {
        function Healing() {
        }
        Healing.bandageTarget = function (targets, showTarget, minimalCountToWarn) {
            var _a;
            if (showTarget === void 0) { showTarget = false; }
            if (minimalCountToWarn === void 0) { minimalCountToWarn = 10; }
            var target = Scripts.TargetingEx.getTarget(targets, 5);
            var bandagesSerials = Orion.FindType(gameObject.uncategorized.bandy.graphic);
            var count = Scripts.Utils.countItemsBySerials(bandagesSerials);
            if (!count) {
                Scripts.Utils.playerPrint('[ nemas bandy ]', ColorEnum.red);
                return;
            }
            var bandTimer = (_a = config === null || config === void 0 ? void 0 : config.bandage) === null || _a === void 0 ? void 0 : _a.bandageTimer;
            if (!target.isValid() && (showTarget || !targets)) {
                Orion.RemoveTimer(TimersEnum.bandage);
                Orion.CharPrint(Player.Serial(), ColorEnum.green, '[ band > ? ]');
                var resultObj = Orion.WaitForAddObject('LastBandageChar', 4000);
                if (resultObj === 1) {
                    target.gameObject(Orion.FindObject('LastBandageChar').Serial());
                }
            }
            if (target.isValid()) {
                Orion.AddDisplayTimer(TimersEnum.bandage, (bandTimer === null || bandTimer === void 0 ? void 0 : bandTimer.timeout) || 2500, (bandTimer === null || bandTimer === void 0 ? void 0 : bandTimer.position) || 'AboveChar', (bandTimer === null || bandTimer === void 0 ? void 0 : bandTimer.type) || 'Bar', (bandTimer === null || bandTimer === void 0 ? void 0 : bandTimer.text) || 'band..', (bandTimer === null || bandTimer === void 0 ? void 0 : bandTimer.xFromPosition) || 0, (bandTimer === null || bandTimer === void 0 ? void 0 : bandTimer.yFromPosition) || 100, (bandTimer === null || bandTimer === void 0 ? void 0 : bandTimer.textColor) || '0x88B', (bandTimer === null || bandTimer === void 0 ? void 0 : bandTimer.font) || 0, (bandTimer === null || bandTimer === void 0 ? void 0 : bandTimer.backgroundColor) || '0x88B');
                Scripts.Utils.resetTimer(TimersEnum.bandage);
                target.waitTarget();
                Orion.UseObject(bandagesSerials[0]);
                Scripts.Utils.charPrint(target.gameObject().Serial(), 'band..', ColorEnum.green, true);
            }
            else {
                Scripts.Utils.playerPrint('[ vsichni ok ]', ColorEnum.green, true);
            }
            if (count - 1 <= minimalCountToWarn) {
                Scripts.Utils.playerPrint("posledni" + (count > 4 ? 'ch' : '') + " " + count + " band" + (count > 4 ? '' : count > 1 ? 'y' : 'a'), ColorEnum.red);
            }
        };
        return Healing;
    }());
    Scripts.Healing = Healing;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Hiding = (function () {
        function Hiding() {
        }
        Hiding.hiding = function (allowRehid, doubleTapToRehid) {
            if (allowRehid === void 0) { allowRehid = true; }
            if (doubleTapToRehid === void 0) { doubleTapToRehid = false; }
            var allowRehidString = allowRehid === true ? '1' : '';
            var doubleTapToRehidString = doubleTapToRehid === true ? '1' : '';
            Orion.Exec('_hiding', true, [allowRehidString, doubleTapToRehidString]);
        };
        return Hiding;
    }());
    Scripts.Hiding = Hiding;
})(Scripts || (Scripts = {}));
function _hiding(allowRehid, doubleTapToRehid) {
    if (Player.Hidden()) {
        if (!allowRehid) {
            Scripts.Utils.playerPrint('V hidu uz jsi.');
            return;
        }
        else if (doubleTapToRehid && (!Orion.TimerExists('hidingTimer') || Orion.Timer('hidingTimer') > 200)) {
            Scripts.Utils.playerPrint('V hidu uz jsi.');
            Orion.SetTimer('hidingTimer');
            return;
        }
    }
    Orion.ClearJournal();
    Orion.Print(ColorEnum.none, 'Start Hiding');
    Orion.UseSkill('Hiding');
    Orion.Wait(100);
    if (Orion.InJournal('You must wait')) {
        Orion.ClearJournal('You must wait');
        return;
    }
    Orion.Exec('_hidingPreoccupiedCheck', true, [allowRehid, doubleTapToRehid]);
}
function _hidingPreoccupiedCheck(allowRehid, doubleTapToRehid) {
    var _a, _b;
    var hidTimer = (_a = config === null || config === void 0 ? void 0 : config.hiding) === null || _a === void 0 ? void 0 : _a.timer;
    Orion.AddDisplayTimer(TimersEnum.hiding, 2000, (hidTimer === null || hidTimer === void 0 ? void 0 : hidTimer.position) || 'AboveChar', (hidTimer === null || hidTimer === void 0 ? void 0 : hidTimer.type) || 'bar', (hidTimer === null || hidTimer === void 0 ? void 0 : hidTimer.text) || 'Hiding', (hidTimer === null || hidTimer === void 0 ? void 0 : hidTimer.xFromPosition) || 0, (hidTimer === null || hidTimer === void 0 ? void 0 : hidTimer.yFromPosition) || 100, (hidTimer === null || hidTimer === void 0 ? void 0 : hidTimer.textColor) || '0x100', (hidTimer === null || hidTimer === void 0 ? void 0 : hidTimer.font) || 0, (hidTimer === null || hidTimer === void 0 ? void 0 : hidTimer.backgroundColor) || 'red');
    Scripts.Utils.waitWhileSomethingInJournal(['You have hidden yourself well', 't seem to hide here', 'preoccupied'], 3000);
    Orion.RemoveDisplayTimer(TimersEnum.hiding);
    var showMsg = (_b = config === null || config === void 0 ? void 0 : config.hiding) === null || _b === void 0 ? void 0 : _b.showInnerMessages;
    if (Orion.InJournal('You have hidden yourself well') && showMsg) {
        Orion.CharPrint(Player.Serial(), ColorEnum.green, '[ Hidden ]');
    }
    else if (Orion.InJournal('t seem to hide here') && showMsg) {
        Orion.CharPrint(Player.Serial(), ColorEnum.red, '[ FAILED ]');
    }
    else if (Orion.InJournal('preoccupied')) {
        Orion.WarMode(true);
        Orion.Wait(100);
        Orion.Print(ColorEnum.none, 'preoccupied - trying to hide again');
        Orion.Exec('_hiding', true, [allowRehid, doubleTapToRehid]);
    }
}
var Scripts;
(function (Scripts) {
    var Inscription = (function () {
        function Inscription() {
        }
        Inscription.inscription = function (circle, spell, quantity, useManaRef) {
            if (quantity === void 0) { quantity = 0; }
            if (useManaRef === void 0) { useManaRef = false; }
            var menuName = 'Spell Circles';
            var spellCircle = "Spell Circle " + circle;
            var blank = gameObject.scrolls.blank;
            Scripts.Utils.playerPrint('Target your container with blank scrolls');
            var selection_1 = Orion.WaitForAddObject('blankScrollsContainer', 60000);
            Scripts.Utils.playerPrint('Target your container where to put finished scrolls');
            var selection_2 = Orion.WaitForAddObject('scrollsContainer', 60000);
            Scripts.Utils.playerPrint("Target finished [" + spell + "] scroll");
            var selection_3 = Orion.WaitForAddObject('finishedScroll', 60000);
            if (1 !== selection_1 || 1 !== selection_2 || 1 !== selection_3) {
                Scripts.Utils.log('All selections must be game objects', ColorEnum.red);
                return;
            }
            var finishedScroll = {
                graphic: Orion.FindObject('finishedScroll').Graphic(),
                color: Orion.FindObject('finishedScroll').Color()
            };
            var finishedCount = 0;
            var totalTries = 0;
            while (quantity === 0 || finishedCount !== quantity) {
                Scripts.Utils.worldSaveCheckWait();
                Scripts.Utils.refill(blank, 'blankScrollsContainer', 10, 'backpack', true);
                Orion.ClearJournal();
                Scripts.Utils.selectMenu(menuName, [spellCircle, spell]);
                Orion.Wait(responseDelay);
                Orion.UseType(blank.graphic, blank.color);
                Scripts.Utils.waitWhileSomethingInJournal(['You fail', 'You put the']);
                if (Orion.InJournal('You put the')) {
                    finishedCount++;
                    var scroll_1 = Orion.FindType(finishedScroll.graphic, finishedScroll.color, 'backpack');
                    Orion.MoveItem(scroll_1[0], 1, 'scrollsContainer');
                    Orion.Wait(responseDelay);
                }
                totalTries++;
                Scripts.Utils.log("napsano " + finishedCount + " / " + totalTries);
                if (Player.Mana() + (useManaRef ? 35 : 70) < Player.Int()) {
                    var isDrinkTimerSet = Orion.Timer(TimersEnum.drink) !== -1;
                    while (isDrinkTimerSet && Orion.Timer(TimersEnum.drink) < 18000) {
                        Orion.UseSkill('Meditation');
                        Orion.Wait(3050);
                    }
                    Scripts.Potions.drinkPotion(useManaRef ? PotionsEnum.mr : PotionsEnum.tmr);
                }
            }
        };
        return Inscription;
    }());
    Scripts.Inscription = Inscription;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Lockpicking = (function () {
        function Lockpicking() {
        }
        Lockpicking.unlock = function (targetSerial) {
            Orion.SetTimer('unlockTimer');
            if (!targetSerial) {
                Scripts.Utils.playerPrint('Target what do you want to unlock');
                Orion.WaitForAddObject('unlockTarget', 60000);
                targetSerial = Orion.FindObject('unlockTarget').Serial();
            }
            var l = gameObject.uncategorized.lockpicks;
            var lockpicks = Orion.FindType(l.graphic, l.color);
            var unlocked = false;
            while (lockpicks.length && !unlocked) {
                Orion.ClearJournal();
                var timer = Orion.Timer('unlockTimer');
                if (timer < 500) {
                    Orion.Wait(500 - timer);
                    Scripts.Utils.resetTimer('unlockTimer');
                }
                var lockpick = lockpicks[0];
                Orion.CancelWaitTarget();
                Orion.WaitTargetObject(targetSerial);
                Orion.UseObject(lockpick);
                Scripts.Utils.waitWhileSomethingInJournal(['You fail', 'cannot be'], 500);
                Orion.InJournal('cannot be') && (unlocked = true);
                lockpicks = Orion.FindType(l.graphic, l.color);
            }
            if (!unlocked) {
                Scripts.Utils.log('No lockpicks !!! Cannot unlock container !!!', ColorEnum.red);
            }
            return unlocked;
        };
        Lockpicking.lock = function (targetSerial, key) {
            if (!targetSerial) {
                Scripts.Utils.playerPrint('Target what do you want to lock');
                Orion.WaitForAddObject('lockTarget', 60000);
                targetSerial = Orion.FindObject('lockTarget').Serial();
            }
            if (!key) {
                Scripts.Utils.playerPrint('Target the key');
                Orion.WaitForAddObject('lockKey', 60000);
                key = Orion.FindObject('lockKey').Serial();
            }
            Orion.ClearJournal();
            Orion.CancelWaitTarget();
            Orion.WaitTargetObject(targetSerial);
            Orion.UseObject(key);
            Scripts.Utils.waitWhileSomethingInJournal(['You lock', 'You unlock']);
            if (Orion.InJournal('You unlock')) {
                Orion.WaitTargetObject(targetSerial);
                Orion.UseObject(key);
            }
        };
        Lockpicking.lockpicking = function (targetSerial, key) {
            if (!targetSerial) {
                Scripts.Utils.playerPrint('Target what do you want to lock');
                Orion.WaitForAddObject('lockTarget', 60000);
                targetSerial = Orion.FindObject('lockTarget').Serial();
            }
            if (!key) {
                Scripts.Utils.playerPrint('Target the key');
                Orion.WaitForAddObject('lockKey', 60000);
                key = Orion.FindObject('lockKey').Serial();
            }
            while (true) {
                Scripts.Lockpicking.lock(targetSerial, key);
                if (!Scripts.Lockpicking.unlock(targetSerial)) {
                    break;
                }
            }
        };
        return Lockpicking;
    }());
    Scripts.Lockpicking = Lockpicking;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Lumber = (function () {
        function Lumber() {
        }
        Lumber.lumber = function () {
            var akce = false;
            Shared.AddArray('trees', []);
            Shared.AddArray('harvestedTrees', []);
            var _loop_4 = function () {
                Orion.ClearJournal(undefined, 'sys');
                var savedTrees = Shared.GetArray('trees', []);
                var newTreesAround = Scripts.Lumber.findTreesAround();
                var all = savedTrees.concat(newTreesAround.filter(function (obj) {
                    return !savedTrees.some(function (obj2) {
                        return obj.x === obj2.x && obj.y === obj2.y;
                    });
                }));
                Shared.AddArray('trees', all);
                var x = Player.X();
                var y = Player.Y();
                var z = Player.Z();
                var harvestedTrees = Shared.GetArray('harvestedTrees', []);
                var treesToHarv = all.filter(function (obj) {
                    return !harvestedTrees.some(function (obj2) {
                        return obj.x === obj2.x && obj.y === obj2.y;
                    });
                });
                var nearestIndex = Scripts.Lumber.findNearestTree(treesToHarv);
                if (nearestIndex === -1) {
                    Scripts.Utils.log('Nejsou v dosahu dalsi stromy');
                    return { value: void 0 };
                }
                var coordinates = treesToHarv[nearestIndex];
                harvestedTrees.push(coordinates);
                Shared.AddArray('harvestedTrees', harvestedTrees);
                Orion.WalkTo(coordinates.x, coordinates.y, coordinates.z, 1);
                var msg = 0;
                if (akce) {
                    Scripts.Utils.waitWhileSomethingInJournal(['akce skoncila'], 60000, undefined, undefined);
                    Orion.Wait(responseDelay);
                    akce = false;
                }
                if (Orion.InJournal('attacking you')) {
                    var i = 0;
                    while (!Orion.WalkTo(treesToHarv[i].x, treesToHarv[i].y, treesToHarv[i].z, 1, undefined, 1)) {
                        i++;
                    }
                    return "continue";
                }
                var reds = Orion.FindType('any', 'any', 'ground', 'mobile|ignoreself', 18, NotorietyEnum.red);
                if (reds.length) {
                    var o = Orion.FindObject(reds[0]);
                    if (o) {
                        Orion.Print('pozor na ' + o.Name());
                    }
                    return "continue";
                }
                do {
                    Orion.ClearJournal(undefined, 'sys');
                    Orion.WaitTargetTile('tree', coordinates.x, coordinates.y, coordinates.z);
                    Orion.UseType('0x0F43');
                    msg = Scripts.Utils.waitWhileSomethingInJournal(['You put the', 'destroyed hatchet', 'no logs left', 'way to use that', 'fail to produce'], undefined, undefined, undefined);
                    if (Orion.InJournal('attacking you')) {
                        var i = 0;
                        while (!Orion.WalkTo(treesToHarv[i].x, treesToHarv[i].y, treesToHarv[i].z, 1, undefined, 1)) {
                            i++;
                        }
                        continue;
                    }
                    if (msg === 1) {
                        continue;
                    }
                    if (msg === 2) {
                        akce = true;
                        break;
                    }
                    Scripts.Utils.waitWhileSomethingInJournal(['akce skoncila'], undefined, undefined, undefined);
                    if (Orion.InJournal('found something special')) {
                        var specialLogs = Orion.FindType('0x1BDD', '!0x0000', 'ground', '', 3);
                        Orion.MoveItem(specialLogs[0]);
                    }
                    else {
                        var logs = Orion.FindType('0x1BDD', '0x0000');
                        logs.length && Orion.Drop(logs[0]);
                    }
                    Orion.Wait(responseDelay);
                    if (Player.MaxWeight() - 30 < Player.Weight()) {
                        Scripts.Port.travelBook(PortBookOptionsEnum.kop);
                        return { value: void 0 };
                    }
                } while (msg !== 2 && msg !== 3);
            };
            while (!Player.Dead()) {
                var state_3 = _loop_4();
                if (typeof state_3 === "object")
                    return state_3.value;
            }
        };
        Lumber.findTreesAround = function () {
            var dist = 9;
            var coordinates = [];
            var px = Player.X();
            var py = Player.Y();
            var rect = Orion.GetTilesInRect('tree', px - dist, py - dist, px + dist, py + dist);
            for (var i = 0; i < rect.length; i++) {
                var t = rect[i];
                coordinates.push({ x: t.X(), y: t.Y(), z: t.Z() });
            }
            var trees = __spreadArrays(coordinates);
            var reds = Orion.FindType('any', 'any', 'ground', 'mobile|ignoreself', 18, NotorietyEnum.red);
            if (reds.length) {
                for (var i = coordinates.length - 1; i >= 0; i--) {
                    var t = coordinates[i];
                    for (var _i = 0, reds_1 = reds; _i < reds_1.length; _i++) {
                        var r = reds_1[_i];
                        var ro = Orion.FindObject(r);
                        var rx = ro.X();
                        var ry = ro.Y();
                        var dx = t.x > rx ? t.x - rx : rx - t.x;
                        var dy = t.y > ry ? t.y - ry : ry - t.y;
                        if (dx < 15 && dy < 15) {
                            trees.splice(i, 1);
                            break;
                        }
                    }
                }
            }
            return trees;
        };
        Lumber.findNearestTree = function (trees) {
            var index = -1;
            var dist = 999;
            var px = Player.X();
            var py = Player.Y();
            for (var i = 0; i < trees.length; i++) {
                var t = trees[i];
                var x = t.x;
                var y = t.y;
                var dx = x > px ? x - px : px - x;
                var dy = y > py ? y - py : py - y;
                var d = dx + dy;
                if (dist > d) {
                    dist = d;
                    index = i;
                }
            }
            return index;
        };
        return Lumber;
    }());
    Scripts.Lumber = Lumber;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Magery = (function () {
        function Magery() {
        }
        Magery.castSpell = function (spellName, targets) {
            var targetResult = Scripts.TargetingEx.getTarget(targets);
            if (targetResult.success()) {
                targetResult.waitTarget();
            }
            else {
                Orion.CharPrint(Player.Serial(), ColorEnum.pureWhite, spellName);
            }
            Orion.Cast(spellName);
        };
        return Magery;
    }());
    Scripts.Magery = Magery;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Mining = (function () {
        function Mining() {
        }
        Mining.getUnwantedOre = function () {
            return [
                { color: '0x0000', message: 'iron' },
                { color: '0x0289', message: 'Copper' },
                { color: '0x01BF', message: 'Bronze' },
                { color: '0x0482', message: 'Silver' },
                { color: '0x0322', message: 'Shadow' },
                { color: '0x0665', message: 'Rose' },
                { color: '0x0160', message: 'Golden' },
                { color: '0x01CB', message: 'Verite' },
                { color: '0x0253', message: 'Valorite' },
                { color: '0x04C2', message: 'Blood' },
                { color: '0x0455', message: 'Black' },
                { color: '0x0006', message: 'Sapphire' },
                { color: '0x0041', message: 'Emerald' },
                { color: '0x002C', message: 'Citrine' },
                { color: '0x0015', message: 'Amethyst' },
                { color: '0x0027', message: 'Ruby' },
                { color: '0x03E9', message: 'Diamond' },
            ];
        };
        Mining.getWantedOreColorsFilter = function () {
            var unwantedOre = Scripts.Mining.getUnwantedOre();
            var colorsArray = [];
            for (var _i = 0, unwantedOre_1 = unwantedOre; _i < unwantedOre_1.length; _i++) {
                var ore = unwantedOre_1[_i];
                colorsArray.push("!" + ore.color);
            }
            return colorsArray.join('|');
        };
        Mining.dropUnwantedOre = function () {
            var unwantedOre = Scripts.Mining.getUnwantedOre();
            var ores = [
                '0x19B7',
                '0x19BA',
                '0x19B8',
                '0x19B9',
            ];
            var drop = false;
            for (var _i = 0, unwantedOre_2 = unwantedOre; _i < unwantedOre_2.length; _i++) {
                var ore = unwantedOre_2[_i];
                if (!Orion.InJournal(ore.message)) {
                    continue;
                }
                drop = true;
                for (var _a = 0, ores_1 = ores; _a < ores_1.length; _a++) {
                    var oreGraphic = ores_1[_a];
                    var serials = Orion.FindType(oreGraphic);
                    if (!serials.length) {
                        continue;
                    }
                    for (var _b = 0, serials_4 = serials; _b < serials_4.length; _b++) {
                        var serial = serials_4[_b];
                        var oreObject = Orion.FindObject(serial);
                        if (ore.color === oreObject.Color()) {
                            Orion.Drop(serial);
                        }
                    }
                }
            }
            return drop;
        };
        Mining.pickOresAround = function (distance) {
            if (distance === void 0) { distance = 3; }
            var colors = Scripts.Mining.getWantedOreColorsFilter();
            var stop = false;
            while (!stop && !Player.Dead()) {
                stop = true;
                var oresAround = Orion.FindType('0x19B7|0x19BA|0x19B8|0x19B9', colors, 'ground', 'item', distance);
                for (var _i = 0, oresAround_1 = oresAround; _i < oresAround_1.length; _i++) {
                    var ore = oresAround_1[_i];
                    if (distance === 0) {
                        Orion.MoveItem(ore);
                    }
                    else {
                        var oreObject = Orion.FindObject(ore);
                        if (!oreObject || (oreObject.X() === Player.X() && oreObject.Y() === Player.Y())) {
                            continue;
                        }
                        var count = oreObject.Count();
                        if (count > 50) {
                            Orion.MoveItem(ore, 50);
                            stop = false;
                        }
                        else {
                            Orion.MoveItem(ore);
                        }
                    }
                    Orion.Wait(responseDelay);
                }
            }
        };
        Mining.mineAround = function () {
            Orion.ClearJournal(undefined, 'sys');
            var radius = 2;
            for (var x = radius; x >= radius * -1; x--) {
                for (var y = radius; y >= radius * -1; y--) {
                    Scripts.Utils.playerPrint("mineAround: x: " + x + ", y: " + y, ColorEnum.green);
                    while (!Player.Dead() &&
                        !(Orion.InJournal('There is no ore') || Orion.InJournal('Try mining in rock'))) {
                        Orion.ClearJournal(undefined, 'sys');
                        Orion.UseType('0x0E85');
                        if (Orion.WaitForTarget(1000)) {
                            Orion.TargetTileRelative('any', x, y, 0);
                        }
                        while (!(Orion.InJournal('You put the') ||
                            Orion.InJournal('There is no ore') ||
                            Orion.InJournal('Try mining') ||
                            Orion.InJournal('You loosen') ||
                            Orion.InJournal('You destroy'))) {
                            Orion.Wait(200);
                        }
                    }
                    Orion.ClearJournal(undefined, 'sys');
                }
                Scripts.Mining.pickOresAround();
            }
        };
        Mining.kopaniFire = function (direction, fullMine) {
            var west = 6;
            var south = 4;
            var east = 2;
            var north = 0;
            var x = Player.X();
            var y = Player.Y();
            if (Player.Direction() !== direction) {
                Orion.Step(direction, true);
                Orion.Wait(Orion.OptionFastRotation() ? 50 : 100);
            }
            Orion.Step(direction, false);
            Orion.Wait(415);
            var right = direction === 6 ? 0 : direction + 2;
            if (Player.X() === x && Player.Y() === y) {
                Scripts.Mining.kopaniFire(right, fullMine);
            }
            else {
                var relativeKopY = x - Player.X();
                var relativeKopX = Player.Y() - y;
                Orion.ClearJournal();
                var keepMine = true;
                while (keepMine && !Orion.InJournal('There is no ore') && !Orion.InJournal('Try mining')) {
                    Orion.ClearJournal();
                    Orion.UseType('0x0E85');
                    if (Orion.WaitForTarget(1000)) {
                        Orion.TargetTileRelative('any', relativeKopX, relativeKopY, 0);
                    }
                    while (!(Orion.InJournal('You put the') ||
                        Orion.InJournal('There is no ore') ||
                        Orion.InJournal('Try mining') ||
                        Orion.InJournal('You loosen') ||
                        Orion.InJournal('You destroy'))) {
                        Orion.Wait(200);
                    }
                    if (Orion.InJournal('You loosen')) {
                        continue;
                    }
                    if (!Orion.InJournal('You put the')) {
                        continue;
                    }
                    Scripts.Mining.dropUnwantedOre();
                }
                if (relativeKopY > 0) {
                    Scripts.Mining.kopaniFire(south, fullMine);
                }
                else if (relativeKopY < 0) {
                    Scripts.Mining.kopaniFire(north, fullMine);
                }
                else if (relativeKopX > 0) {
                    Scripts.Mining.kopaniFire(east, fullMine);
                }
                else {
                    Scripts.Mining.kopaniFire(west, fullMine);
                }
            }
        };
        return Mining;
    }());
    Scripts.Mining = Mining;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Music = (function () {
        function Music() {
        }
        Music.harp = function (targetAlias) {
            Scripts.Music.useMusicInstrument(gameObject.music.harp, "Nemas Harfu", targetAlias);
        };
        Music.lute = function (targetAlias) {
            Scripts.Music.useMusicInstrument(gameObject.music.lute, "Nemas Loutnu", targetAlias);
        };
        Music.drum = function (targetAlias) {
            Scripts.Music.useMusicInstrument(gameObject.music.drum, "Nemas Buben", targetAlias);
        };
        Music.useMusicInstrument = function (instrument, missingMessage, targetAlias) {
            if (!targetAlias) {
                targetAlias = 'musicTarget';
                Scripts.Utils.setTargetAlias(targetAlias, 'Komu chces zahrat ?');
            }
            var instrumentSerials = Orion.FindType(instrument.graphic, instrument.color);
            Orion.WarMode(true);
            if (!instrumentSerials.length) {
                Scripts.Utils.playerPrint(missingMessage, ColorEnum.red);
                return;
            }
            Orion.WaitTargetObject(targetAlias);
            Orion.UseObject(instrumentSerials[0]);
        };
        return Music;
    }());
    Scripts.Music = Music;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Stealing = (function () {
        function Stealing() {
        }
        Stealing.getStealingIgnoreList = function () {
            return [
                {
                    name: 'Grizzly Bear',
                    graphic: '0x00D4',
                    color: '0x0712'
                },
                {
                    name: 'Walrus',
                    graphic: '0x00DD',
                    color: '0x0712'
                },
                {
                    name: 'Magic Drake',
                    graphic: '0x003C',
                    color: '0x0712'
                },
                {
                    name: 'Giant Viper',
                    graphic: '0x0015',
                    color: '0x0712'
                },
                {
                    name: 'Giant Spider',
                    graphic: '0x001C',
                    color: '0x0712'
                },
                {
                    name: 'Death Vortex',
                    graphic: '0x000D',
                    color: '0x0B77'
                },
                {
                    name: 'Skeleton Warrior',
                    graphic: '0x0039',
                    color: '0x0835'
                },
                {
                    name: 'Wraith',
                    graphic: '0x001A',
                    color: '0x0835'
                },
                {
                    name: 'Dark Oclock',
                    graphic: '0x00D2',
                    color: '0x0966'
                },
                {
                    name: 'Angel Spirit',
                    graphic: '0x003A',
                    color: '0x0B87'
                },
                {
                    name: 'Awaken Spirit',
                    graphic: '0x003A',
                    color: '0x084C'
                },
                {
                    name: 'Horse',
                    graphic: '0x00CC',
                    color: '0x0000'
                },
                {
                    name: 'Brown Bear',
                    graphic: '0x00D3',
                    color: '0x0712'
                }
            ];
        };
        Stealing.getStealingTarget = function () {
            var targets = Orion.FindTypeEx('any', 'any', 'ground', 'fast|live|mobile|ignoreself', 1, NotorietyEnum.red);
            if (!targets.length) {
                return;
            }
            var stealingIgnoreList = Scripts.Stealing.getStealingIgnoreList();
            var globalStealChars = Orion.GetGlobal('stolenFromChars');
            if (!globalStealChars) {
                return targets[0].Serial();
            }
            var stolenFromChars = globalStealChars.split('|');
            for (var _i = 0, targets_1 = targets; _i < targets_1.length; _i++) {
                var target = targets_1[_i];
                if (target.Serial() && stolenFromChars.indexOf(target.Serial()) === -1) {
                    for (var _a = 0, stealingIgnoreList_1 = stealingIgnoreList; _a < stealingIgnoreList_1.length; _a++) {
                        var ignore = stealingIgnoreList_1[_a];
                        if (ignore.color !== target.Color() || ignore.graphic !== target.Graphic()) {
                            return target.Serial();
                        }
                    }
                }
            }
        };
        Stealing.autoStealing = function (autoheal) {
            Scripts.Utils.playerPrint('utomaticke okradani aktivovano');
            var staying = false;
            while (true) {
                var px = Player.X();
                var py = Player.Y();
                if (Player.Hits() >= Player.MaxHits() &&
                    !Orion.HaveTarget() &&
                    staying &&
                    !Orion.ScriptRunning('_hiding') &&
                    !Orion.ScriptRunning('_hidingPreoccupiedCheck')) {
                    Scripts.Stealing.stealing();
                }
                if (Player.Hits() < Player.MaxHits() && autoheal) {
                    bandageSelf();
                    Orion.Wait(1950);
                }
                Orion.Wait(333);
                staying = Player.X() === px && Player.Y() === py;
            }
        };
        Stealing.stealing = function () {
            var stealingStartSkill = parseInt(Orion.GetGlobal('stealingStartSkill'));
            if (!stealingStartSkill) {
                Orion.SetGlobal('stealingStartSkill', Orion.SkillValue('Stealing'));
                stealingStartSkill = Orion.SkillValue('Stealing');
            }
            var kapsarskeNaradicko = Scripts.Utils.findFirstType(gameObject.uncategorized.kapsarskeNaradicko);
            if (!kapsarskeNaradicko) {
                Scripts.Utils.playerPrint('Nemas okradatko');
                return;
            }
            if (Player.Hits() < Player.MaxHits()) {
                Scripts.Utils.playerPrint('Nemas plno HP');
                return;
            }
            var px = Player.X();
            var py = Player.Y();
            Orion.UseObject(kapsarskeNaradicko);
            Orion.Wait(1150);
            var target = '';
            var attempted = false;
            while (Player.Hits() >= Player.MaxHits() &&
                px == Player.X() &&
                py == Player.Y() &&
                Orion.HaveTarget()) {
                target = Scripts.Stealing.getStealingTarget();
                Orion.Wait(100);
                if (target) {
                    Orion.WarMode(true);
                    Orion.TargetObject(target);
                    attempted = true;
                    Scripts.Utils.playerPrint('Okradam monstrum...');
                    break;
                }
                Orion.Wait(250);
            }
            if (!attempted) {
                Orion.CancelTarget();
                Scripts.Utils.playerPrint('Stealing zrusen - pohyb/ubrano/target');
            }
            Orion.Wait(150);
            if (Orion.InJournal('ukradl|vsimla|silna|Tohle nejde okrast|To nejde') && target) {
                var globalStealChars = Orion.GetGlobal('stolenFromChars');
                Orion.SetGlobal('stolenFromChars', globalStealChars + "|" + target);
                Orion.ClearJournal();
                var currentPoisonSkill = Orion.SkillValue('Stealing');
                if (stealingStartSkill !== currentPoisonSkill) {
                    var gainSkill = (currentPoisonSkill - stealingStartSkill) / 10;
                    Orion.Print("Dnes Stealing narostl o " + gainSkill + "%");
                }
            }
            if (Orion.InJournal('Okradeni se nepovedlo|To chces krast na takovou dalku|Krast musis v klidu')) {
                Orion.ClearJournal();
                Scripts.Stealing.stealing();
            }
        };
        return Stealing;
    }());
    Scripts.Stealing = Stealing;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Taming = (function () {
        function Taming() {
        }
        Taming.useTrainingTamingStaff = function (targetSerial) {
            var staff = Scripts.Utils.findFirstType(gameObject.taming.staffs.training, 2);
            if (!staff) {
                Scripts.Utils.log('missing training taming staff', ColorEnum.red);
                return false;
            }
            Orion.WaitTargetObject(targetSerial);
            Orion.UseObject(staff);
            while (!Orion.InJournal('What do you want to use this on')) {
                Orion.Wait(500);
                Orion.WaitTargetObject(targetSerial);
                Orion.UseObject(staff);
            }
            return true;
        };
        Taming.waitOnTaming = function (animalSerial, walkTo) {
            if (walkTo === void 0) { walkTo = true; }
            var animal = Orion.FindObject(animalSerial);
            var groundItemsSerials = Orion.FindType('any', 'any', 'ground', 'item', 3);
            while (!(Orion.InJournal('Your taming failed') ||
                Orion.InJournal('Ochoceni se nezdarilo') ||
                Orion.InJournal('Too far') ||
                Orion.InJournal('Nelze ochocit') ||
                Orion.InJournal('Jsi prilis vzdalen') ||
                Orion.InJournal('Jsi moc daleko') ||
                Orion.InJournal('Not tamable') ||
                Orion.InJournal('nelze ochocit') ||
                Orion.InJournal('byl tamnut') ||
                Orion.InJournal('Cannot learn anything more') ||
                Orion.InJournal('You are not able to tame this animal'))) {
                Orion.Wait(500);
                animal = Orion.FindObject(animalSerial);
                if (animal) {
                    groundItemsSerials = Orion.FindType('any', 'any', 'ground', 'item', 3);
                    walkTo && Orion.WalkTo(animal.X(), animal.Y(), animal.Z(), 1);
                }
            }
            if (Orion.InJournal('byl tamnut')) {
                Orion.Wait(200);
                var newGroundItemsSerials = Orion.FindType('any', 'any', 'ground', 'item', 3);
                var filter = newGroundItemsSerials.filter(function (i) { return groundItemsSerials.indexOf(i) === -1; });
                return filter[0];
            }
            return;
        };
        Taming.dressRobeOfDruids = function () {
            var robeOfDruids = Orion.FindObject('0x4034E76C');
            if (!robeOfDruids) {
                return false;
            }
            Orion.UseObject(robeOfDruids.Serial());
            return !!Orion.InJournal('You feel more powerful');
        };
        Taming.undressRobe = function () {
            Orion.Unequip('Robe');
            Orion.Wait(1000);
        };
        Taming.trainOnAnimal = function (animalSerial, ranger) {
            if (ranger === void 0) { ranger = true; }
            Scripts.Utils.log('train on animal serial ' + animalSerial);
            var animal = Orion.FindObject(animalSerial);
            if (!animal) {
                return;
            }
            Orion.SetGlobal('tamingCounter', (parseInt(Orion.GetGlobal('tamingCounter'), 10) + 1).toString(10));
            if (parseInt(Orion.GetGlobal('tamingCounter'), 10) > 100) {
                if (ranger) {
                    Scripts.Taming.dressRobeOfDruids();
                }
                else {
                    Orion.Equip('fightWeapon');
                    Scripts.Auto.killObject(animalSerial);
                    return;
                }
            }
            Orion.ClearJournal();
            if (!Scripts.Taming.useTrainingTamingStaff(animalSerial)) {
                return;
            }
            Scripts.Taming.waitOnTaming(animalSerial);
            if (Orion.InJournal('You are not able to tame this animal') ||
                Orion.InJournal('Cannot learn anything more') ||
                Orion.InJournal('Not tamable')) {
                if (ranger && Scripts.Taming.dressRobeOfDruids()) {
                    Scripts.Taming.trainOnAnimal(animalSerial, ranger);
                    return;
                }
                ranger && Scripts.Taming.undressRobe();
                Scripts.Utils.log('kill animal serial ' + animalSerial);
                Orion.Equip('fightWeapon');
                Scripts.Auto.killObject(animalSerial);
                return;
            }
            if (Orion.InJournal('Your taming failed') || Orion.InJournal('Ochoceni se nezdarilo')) {
                Scripts.Taming.trainOnAnimal(animalSerial, ranger);
                return;
            }
            if (Orion.InJournal('Too far')) {
                Orion.Wait(500);
                Orion.WalkTo(animal.X(), animal.Y(), animal.Z(), 1);
                Orion.Wait(2000);
                Scripts.Taming.trainOnAnimal(animalSerial, ranger);
                return;
            }
            if (Orion.InJournal('byl tamnut|see the target')) {
                ranger && Scripts.Taming.undressRobe();
                return true;
            }
        };
        Taming.trainOnAnimalsAround = function (ranger) {
            if (ranger === void 0) { ranger = true; }
            if (!Orion.FindObject('fightWeapon')) {
                Scripts.Utils.playerPrint('Target your weapon');
                Orion.WaitForAddObject('fightWeapon', 60000);
            }
            Orion.IgnoreReset();
            Orion.ClearJournal();
            ranger && Scripts.Taming.undressRobe();
            var monstersAround = Orion.FindType('!0x0190|!0x0191', '-1', 'ground', 'nothuman|live|near', 22, 'gray');
            while (monstersAround.length) {
                Orion.Ignore(monstersAround[0]);
                Orion.SetGlobal('tamingCounter', '0');
                Scripts.Taming.trainOnAnimal(monstersAround[0], ranger);
                monstersAround = Orion.FindType('!0x0190|!0x0191', '-1', 'ground', 'nothuman|live|near', 22, 'gray');
            }
        };
        Taming.tameAnimalsAround = function (opts) {
            Orion.IgnoreReset();
            Orion.ClearJournal();
            var monstersAround = Orion.FindType('!0x0190|!0x0191', '-1', 'ground', 'nothuman|live|near', 22, 'gray');
            while (monstersAround.length) {
                Orion.Ignore(monstersAround[0]);
                Scripts.Taming.taming(opts, monstersAround[0]);
                monstersAround = Orion.FindType('!0x0190|!0x0191', '-1', 'ground', 'nothuman|live|near', 22, 'gray');
            }
        };
        Taming.useShrinkKad = function () {
            var kad = gameObject.potions.shrink.kad;
            Orion.UseType(kad.graphic, kad.color);
        };
        Taming.taming = function (opts, animalSerial) {
            var loadedStaff = gameObject.taming.staffs.tamingShrink;
            var loadedStaffSerial = Scripts.Utils.findFirstType(loadedStaff, 2);
            var staff = gameObject.taming.staffs.taming;
            var staffSerial = Scripts.Utils.findFirstType(staff, 2);
            if (!loadedStaffSerial && staffSerial) {
                var shrink = gameObject.potions.shrink;
                var shrinkSerials = Orion.FindType(shrink.graphic, shrink.color);
                var shrinkKadSerials = Orion.FindType(shrink.kad.graphic, shrink.kad.color);
                if (shrinkSerials.length) {
                    Orion.WaitTargetObject(shrinkSerials[0]);
                }
                else if (shrinkKadSerials.length) {
                    Orion.WaitTargetObject(shrinkKadSerials[0]);
                }
                else {
                    Scripts.Utils.log('nejsou shrinky', ColorEnum.red);
                    throw 'e';
                }
                Orion.UseObject(staffSerial);
                Scripts.Utils.waitWhileSomethingInJournal(['Hul nabita']);
                Orion.Wait(responseDelay);
            }
            loadedStaffSerial = Scripts.Utils.findFirstType(loadedStaff, 2);
            if (!loadedStaffSerial) {
                Scripts.Utils.playerPrint('Nemas potrebne vybaveni na taming', ColorEnum.red);
                return;
            }
            Orion.ClearJournal();
            if (!animalSerial) {
                Scripts.Utils.playerPrint('Co chces tamnout ?');
                var selection = Orion.WaitForAddObject('tamingTarget');
                if (selection !== 1) {
                    return;
                }
            }
            else {
                Orion.AddObject('tamingTarget', animalSerial);
            }
            var tamnuto = false;
            while (!tamnuto) {
                Orion.WarMode(true);
                Orion.Wait(100);
                var target = Orion.FindObject('tamingTarget');
                if (opts.walkTo) {
                    Orion.WalkTo(target.X(), target.Y(), target.Z(), 1);
                    Orion.Wait(responseDelay);
                }
                if (opts.hiding) {
                    Scripts.Hiding.hiding();
                    Orion.Wait(responseDelay);
                }
                Orion.WaitTargetObject('tamingTarget');
                Orion.UseObject(loadedStaffSerial);
                Orion.Wait(responseDelay);
                opts.hiding && Scripts.Hiding.hiding();
                var pickup = Scripts.Taming.waitOnTaming('tamingTarget', opts.walkTo);
                if (Orion.InJournal('Too far|Jsi prilis vzdalen|Jsi moc daleko')) {
                    if (opts.walkTo) {
                        Orion.WalkTo(target.X(), target.Y(), target.Z(), 1);
                    }
                    else {
                        break;
                    }
                }
                if (Orion.InJournal('Not tamable|nelze ochocit|You are not able to tame this animal')) {
                    Scripts.Utils.playerPrint('Na toto zviratko nemas', ColorEnum.red);
                    break;
                }
                if (Orion.InJournal('byl tamnut')) {
                    pickup && Orion.MoveItem(pickup);
                    tamnuto = true;
                }
                Orion.ClearJournal();
            }
        };
        Taming.shrinkAll = function () {
            var _this = this;
            var petsAround = Orion.FindType('!0x0190|!0x0191', '0xFFFF', 'ground', 'live', 2);
            var availablePets = [];
            while (petsAround.length) {
                var petSerial = petsAround[0];
                var pet = Orion.FindObject(petSerial);
                if (pet.CanChangeName()) {
                    availablePets.push(petSerial);
                }
                Orion.Ignore(petSerial);
                petsAround = Orion.FindType('!0x0190|!0x0191', '0xFFFF', 'ground', 'live', 2);
            }
            Orion.IgnoreReset();
            availablePets.forEach(function (pet) {
                Orion.WaitTargetObject(pet);
                _this.useShrinkKad();
                Orion.Wait(250);
            });
        };
        return Taming;
    }());
    Scripts.Taming = Taming;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Tracking = (function () {
        function Tracking() {
        }
        Tracking.tracking = function (who) {
            if (who === void 0) { who = 'Players'; }
            Orion.CancelWaitMenu();
            Orion.WaitMenu('Tracking', who);
            Orion.UseSkill('Tracking');
        };
        return Tracking;
    }());
    Scripts.Tracking = Tracking;
})(Scripts || (Scripts = {}));
var DirectionEnum;
(function (DirectionEnum) {
    DirectionEnum[DirectionEnum["West"] = 6] = "West";
    DirectionEnum[DirectionEnum["North"] = 0] = "North";
    DirectionEnum[DirectionEnum["East"] = 2] = "East";
    DirectionEnum[DirectionEnum["South"] = 4] = "South";
})(DirectionEnum || (DirectionEnum = {}));
var ColorEnum;
(function (ColorEnum) {
    ColorEnum["none"] = "0xffff";
    ColorEnum["red"] = "0x0021";
    ColorEnum["green"] = "0x0044";
    ColorEnum["orange"] = "0x002c";
    ColorEnum["pureWhite"] = "0x0B1D";
    ColorEnum["yellow"] = "0x0034";
    ColorEnum["blue"] = "0x0002";
})(ColorEnum || (ColorEnum = {}));
var TargetEnum;
(function (TargetEnum) {
    TargetEnum["self"] = "self";
    TargetEnum["lastattack"] = "lastattack";
    TargetEnum["laststatus"] = "laststatus";
    TargetEnum["lasttarget"] = "lasttarget";
    TargetEnum["selfinjured"] = "selfinjured";
    TargetEnum["laststatusenemy"] = "laststatusenemy";
    TargetEnum["mount"] = "mount";
    TargetEnum["nearinjuredalie"] = "nearinjuredalie";
    TargetEnum["nearinjuredalielos"] = "nearinjuredalielos";
    TargetEnum["mostinjuredalie"] = "mostinjuredalie";
    TargetEnum["mostinjuredalielos"] = "mostinjuredalielos";
    TargetEnum["lasttargetmobile"] = "lasttargetmobile";
    TargetEnum["hover"] = "hover";
    TargetEnum["manual"] = "manual";
})(TargetEnum || (TargetEnum = {}));
var CustomStatusBarEnum;
(function (CustomStatusBarEnum) {
    CustomStatusBarEnum[CustomStatusBarEnum["close"] = 0] = "close";
    CustomStatusBarEnum[CustomStatusBarEnum["click"] = 666] = "click";
})(CustomStatusBarEnum || (CustomStatusBarEnum = {}));
var OcarovaniEnum;
(function (OcarovaniEnum) {
    OcarovaniEnum["mytheril"] = "mytheril";
    OcarovaniEnum["black"] = "black";
    OcarovaniEnum["blood"] = "blood";
})(OcarovaniEnum || (OcarovaniEnum = {}));
var PortBookDestinationsEnum;
(function (PortBookDestinationsEnum) {
    PortBookDestinationsEnum[PortBookDestinationsEnum["charge"] = 1] = "charge";
    PortBookDestinationsEnum[PortBookDestinationsEnum["staty"] = 2] = "staty";
    PortBookDestinationsEnum[PortBookDestinationsEnum["brit"] = 3] = "brit";
    PortBookDestinationsEnum[PortBookDestinationsEnum["cech"] = 4] = "cech";
    PortBookDestinationsEnum[PortBookDestinationsEnum["custom"] = 5] = "custom";
    PortBookDestinationsEnum[PortBookDestinationsEnum["customGate"] = 6] = "customGate";
    PortBookDestinationsEnum[PortBookDestinationsEnum["customMark"] = 7] = "customMark";
    PortBookDestinationsEnum[PortBookDestinationsEnum["jhelom"] = 8] = "jhelom";
    PortBookDestinationsEnum[PortBookDestinationsEnum["vesper"] = 9] = "vesper";
    PortBookDestinationsEnum[PortBookDestinationsEnum["yew"] = 10] = "yew";
    PortBookDestinationsEnum[PortBookDestinationsEnum["minoc"] = 11] = "minoc";
    PortBookDestinationsEnum[PortBookDestinationsEnum["scara"] = 12] = "scara";
    PortBookDestinationsEnum[PortBookDestinationsEnum["magin"] = 13] = "magin";
    PortBookDestinationsEnum[PortBookDestinationsEnum["trinsic"] = 14] = "trinsic";
    PortBookDestinationsEnum[PortBookDestinationsEnum["nujelm"] = 15] = "nujelm";
    PortBookDestinationsEnum[PortBookDestinationsEnum["trh"] = 16] = "trh";
    PortBookDestinationsEnum[PortBookDestinationsEnum["cove"] = 17] = "cove";
    PortBookDestinationsEnum[PortBookDestinationsEnum["occlo"] = 18] = "occlo";
    PortBookDestinationsEnum[PortBookDestinationsEnum["moonglow"] = 19] = "moonglow";
    PortBookDestinationsEnum[PortBookDestinationsEnum["templar"] = 20] = "templar";
    PortBookDestinationsEnum[PortBookDestinationsEnum["nara"] = 21] = "nara";
    PortBookDestinationsEnum[PortBookDestinationsEnum["homare"] = 22] = "homare";
    PortBookDestinationsEnum[PortBookDestinationsEnum["zento"] = 23] = "zento";
    PortBookDestinationsEnum[PortBookDestinationsEnum["luna"] = 24] = "luna";
    PortBookDestinationsEnum[PortBookDestinationsEnum["umbra"] = 25] = "umbra";
    PortBookDestinationsEnum[PortBookDestinationsEnum["serpents"] = 26] = "serpents";
})(PortBookDestinationsEnum || (PortBookDestinationsEnum = {}));
var ScrollEnum;
(function (ScrollEnum) {
    ScrollEnum["kvf"] = "kvf";
    ScrollEnum["bolt"] = "bolt";
    ScrollEnum["pog"] = "pog";
    ScrollEnum["ijs"] = "ijs";
    ScrollEnum["port"] = "port";
    ScrollEnum["ef"] = "ef";
    ScrollEnum["para"] = "para";
    ScrollEnum["wos"] = "wos";
    ScrollEnum["ivm"] = "ivm";
    ScrollEnum["ress"] = "ress";
    ScrollEnum["recall"] = "recall";
    ScrollEnum["heal"] = "heal";
    ScrollEnum["str"] = "str";
    ScrollEnum["react"] = "react";
    ScrollEnum["bless"] = "bless";
    ScrollEnum["pf"] = "pf";
    ScrollEnum["dispel"] = "dispel";
    ScrollEnum["bs"] = "bs";
    ScrollEnum["protect"] = "protect";
    ScrollEnum["eelm"] = "eelm";
})(ScrollEnum || (ScrollEnum = {}));
var TargetIndicationEnum;
(function (TargetIndicationEnum) {
    TargetIndicationEnum["none"] = "none";
    TargetIndicationEnum["large"] = "large";
})(TargetIndicationEnum || (TargetIndicationEnum = {}));
var ReagentsEnum;
(function (ReagentsEnum) {
    ReagentsEnum["mr"] = "mr";
    ReagentsEnum["ss"] = "ss";
    ReagentsEnum["bm"] = "bm";
    ReagentsEnum["bp"] = "bp";
    ReagentsEnum["ga"] = "ga";
    ReagentsEnum["gi"] = "gi";
    ReagentsEnum["ns"] = "ns";
    ReagentsEnum["sa"] = "sa";
})(ReagentsEnum || (ReagentsEnum = {}));
var FlagsEnum;
(function (FlagsEnum) {
    FlagsEnum["fast"] = "fast";
    FlagsEnum["near"] = "near";
    FlagsEnum["mobile"] = "mobile";
    FlagsEnum["item"] = "item";
    FlagsEnum["human"] = "human";
    FlagsEnum["nothuman"] = "nothuman";
    FlagsEnum["live"] = "live";
    FlagsEnum["dead"] = "dead";
    FlagsEnum["injured"] = "injured";
    FlagsEnum["next"] = "next";
    FlagsEnum["ignorefriends"] = "ignorefriends";
    FlagsEnum["ignorefriendlytypes"] = "ignorefriendlytypes";
    FlagsEnum["ignoreenemies"] = "ignoreenemies";
    FlagsEnum["ignoreself"] = "ignoreself";
    FlagsEnum["inlos"] = "inlos";
    FlagsEnum["nearmouse"] = "nearmouse";
    FlagsEnum["recurse"] = "recurse";
})(FlagsEnum || (FlagsEnum = {}));
var NotorietyEnum;
(function (NotorietyEnum) {
    NotorietyEnum["blue"] = "blue";
    NotorietyEnum["green"] = "green";
    NotorietyEnum["gray"] = "gray";
    NotorietyEnum["criminal"] = "criminal";
    NotorietyEnum["orange"] = "orange";
    NotorietyEnum["red"] = "red";
    NotorietyEnum["yellow"] = "yellow";
})(NotorietyEnum || (NotorietyEnum = {}));
var NotorietyNum;
(function (NotorietyNum) {
    NotorietyNum[NotorietyNum["blue"] = 1] = "blue";
    NotorietyNum[NotorietyNum["green"] = 2] = "green";
    NotorietyNum[NotorietyNum["gray"] = 3] = "gray";
    NotorietyNum[NotorietyNum["criminal"] = 4] = "criminal";
    NotorietyNum[NotorietyNum["orange"] = 5] = "orange";
    NotorietyNum[NotorietyNum["red"] = 6] = "red";
    NotorietyNum[NotorietyNum["yellow"] = 7] = "yellow";
})(NotorietyNum || (NotorietyNum = {}));
var PotionsEnum;
(function (PotionsEnum) {
    PotionsEnum["tmr"] = "tmr";
    PotionsEnum["mr"] = "mr";
    PotionsEnum["gh"] = "gh";
    PotionsEnum["gs"] = "gs";
    PotionsEnum["ga"] = "ga";
    PotionsEnum["gb"] = "gb";
    PotionsEnum["tr"] = "tr";
    PotionsEnum["gc"] = "gc";
    PotionsEnum["lc"] = "lc";
    PotionsEnum["lp"] = "lp";
    PotionsEnum["dp"] = "dp";
    PotionsEnum["ns"] = "ns";
    PotionsEnum["shrink"] = "shrink";
    PotionsEnum["lavabomb"] = "lavabomb";
    PotionsEnum["invis"] = "invis";
    PotionsEnum["halucination"] = "halucination";
    PotionsEnum["jabara"] = "jabara";
    PotionsEnum["cinchona"] = "cinchona";
    PotionsEnum["esenceRefresh"] = "esenceRefresh";
})(PotionsEnum || (PotionsEnum = {}));
var NecroScrollEnum;
(function (NecroScrollEnum) {
    NecroScrollEnum["vfp"] = "vfp";
    NecroScrollEnum["kalnox"] = "kalnox";
    NecroScrollEnum["haluze"] = "haluze";
})(NecroScrollEnum || (NecroScrollEnum = {}));
var NecromancySpell;
(function (NecromancySpell) {
    NecromancySpell[NecromancySpell["Invalid"] = 0] = "Invalid";
    NecromancySpell[NecromancySpell["SummonUndead"] = 1] = "SummonUndead";
    NecromancySpell[NecromancySpell["AnimateDead"] = 2] = "AnimateDead";
    NecromancySpell[NecromancySpell["NecroArmor"] = 3] = "NecroArmor";
    NecromancySpell[NecromancySpell["Dark"] = 4] = "Dark";
    NecromancySpell[NecromancySpell["FireBolt"] = 5] = "FireBolt";
    NecromancySpell[NecromancySpell["Hallucination"] = 6] = "Hallucination";
    NecromancySpell[NecromancySpell["Clumsy"] = 7] = "Clumsy";
    NecromancySpell[NecromancySpell["Curse"] = 8] = "Curse";
})(NecromancySpell || (NecromancySpell = {}));
var TimersEnum;
(function (TimersEnum) {
    TimersEnum["drink"] = "drink";
    TimersEnum["gs"] = "gs";
    TimersEnum["hiding"] = "hiding";
    TimersEnum["invis"] = "invis";
    TimersEnum["invisLong"] = "invisLong";
    TimersEnum["klamak"] = "klamak";
    TimersEnum["bandage"] = "bandage";
    TimersEnum["statusBarTimer"] = "statusBarTimer";
})(TimersEnum || (TimersEnum = {}));
var GlobalEnum;
(function (GlobalEnum) {
    GlobalEnum["customStatusBars"] = "customStatusBars";
})(GlobalEnum || (GlobalEnum = {}));
var PortBookOptionsEnum;
(function (PortBookOptionsEnum) {
    PortBookOptionsEnum["opravaStats"] = "opravaStats";
    PortBookOptionsEnum["mark"] = "mark";
    PortBookOptionsEnum["kop"] = "kop";
    PortBookOptionsEnum["nabiti"] = "nabiti";
})(PortBookOptionsEnum || (PortBookOptionsEnum = {}));
var SelectionTypeEnum;
(function (SelectionTypeEnum) {
    SelectionTypeEnum["gump"] = "gump";
    SelectionTypeEnum["menu"] = "menu";
})(SelectionTypeEnum || (SelectionTypeEnum = {}));
var MedicActionsEnum;
(function (MedicActionsEnum) {
    MedicActionsEnum["pull"] = "KPZ - Pull";
    MedicActionsEnum["jump"] = "KPZ - Jump";
    MedicActionsEnum["switchHp"] = "KPZ - Switch HP";
})(MedicActionsEnum || (MedicActionsEnum = {}));
var RenameNameType;
(function (RenameNameType) {
    RenameNameType["autoName"] = "autoName";
    RenameNameType["nameList"] = "nameList";
})(RenameNameType || (RenameNameType = {}));
var CoffinMenuSelection;
(function (CoffinMenuSelection) {
    CoffinMenuSelection["low"] = "Sila odpocinku (-1 nabiti)";
    CoffinMenuSelection["medium"] = "Sila spanku (-2 nabiti)";
    CoffinMenuSelection["high"] = "Sila hlubokeho spanku (-3 nabiti)";
})(CoffinMenuSelection || (CoffinMenuSelection = {}));
var TbGumpEnum;
(function (TbGumpEnum) {
    TbGumpEnum["kotaPattern"] = "je nyni pod kontrolou";
    TbGumpEnum["scorePattern"] = "--- SKORE ---";
    TbGumpEnum["sysScorePattern"] = "<SCORES>";
    TbGumpEnum["sharedArrayKoty"] = "koty";
    TbGumpEnum["sharedVarOrderScore"] = "orderScore";
    TbGumpEnum["sharedVarChaosScore"] = "chaosScore";
    TbGumpEnum[TbGumpEnum["tbCustomGumpSerial"] = 786] = "tbCustomGumpSerial";
})(TbGumpEnum || (TbGumpEnum = {}));
var TARGET_OPTS_DEFAULTS = {
    targetIndication: TargetIndicationEnum.none,
    showStatusBar: false,
    statusBarPosition: {
        x: 70,
        y: 20
    }
};
var TAMING_OPTS_DEFAULTS = {
    walkTo: true,
    hiding: false
};
function isMyGameObject(val) {
    return val && val.graphic;
}
function isMakeProps(val) {
    var success = val && val.tool && val.menu;
    !success && Scripts.Utils.log('tool and menu are mandatory properties', ColorEnum.red);
    var outputCountType = typeof val.outputCount === 'undefined' || typeof val.outputCount === 'number';
    success = success && outputCountType;
    !success && Scripts.Utils.log('outputCount is not a number', ColorEnum.red);
    if (val.refill) {
        success = success && isRefillProps(val.refill);
    }
    return success;
}
function isRefillProps(val) {
    var success = true;
    if (val.resources) {
        for (var _i = 0, _a = val.resources; _i < _a.length; _i++) {
            var r = _a[_i];
            success = success && isRefillItem(r);
        }
    }
    if (val.crafting) {
        for (var _b = 0, _c = val.crafting; _b < _c.length; _b++) {
            var c = _c[_b];
            success = success && isRefillItem(c);
        }
    }
    return success;
}
function isRefillItem(val) {
    var success = val && val.item && typeof val.count === 'number';
    !success && Scripts.Utils.log('item should be defined and count should be a number', ColorEnum.red);
    return success;
}
function isPotionsEnum(val) {
    var success = val && PotionsEnum[val] !== undefined;
    if (!success) {
        Scripts.Utils.log("Definice potionu '" + val + "' neexistuje.", ColorEnum.red);
        Scripts.Utils.log("pouzij definici z PotionsEnum \"" + JSON.stringify(PotionsEnum) + "\"");
    }
    return success;
}
function isBagDestination(val) {
    var success = val && typeof val.x === 'number' && typeof val.y === 'number';
    !success && Scripts.Utils.log('x and y should be a number', ColorEnum.red);
    return success;
}
function isArray(val) {
    return val && typeof val.length === 'number';
}
function isStringArray(val) {
    var success = isArray(val);
    for (var _i = 0, val_3 = val; _i < val_3.length; _i++) {
        var v = val_3[_i];
        success = success && typeof v === 'string';
    }
    return success;
}
function isIPotion(val) {
    return val && val.graphic && val.kad;
}
