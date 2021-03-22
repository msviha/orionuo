var config = Shared.GetVar('config', {
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
var responseDelay = 350;
var gameObject = {
    uncategorized: {
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
                                { item: 'gameObject.crafting.carpentry.containersAndParts.barrelStaves', count: 2 }
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
                            resources: [{ item: 'gameObject.resources.logs', count: 1 },
                                { item: 'gameObject.resources.ingots.iron', count: 2 },
                                { item: 'gameObject.resources.pitcherOfWater', count: 1 }],
                            crafting: [{ item: 'gameObject.crafting.carpentry.miscellaneous.boards', count: 2 }, { item: 'gameObject.crafting.tinkering.parts.nails', count: 2 }]
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
                                { item: 'gameObject.crafting.tinkering.parts.nails', count: 1 }
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
                                { item: 'gameObject.resources.foldedCloth', count: 20 }
                            ],
                            crafting: [
                                { item: 'gameObject.crafting.tinkering.parts.hinge', count: 20 },
                                { item: 'gameObject.crafting.tinkering.parts.nails', count: 35 },
                                { item: 'gameObject.crafting.carpentry.miscellaneous.boards', count: 250 }
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
                                { item: 'gameObject.resources.ingots.iron', count: 1 }
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
                            resources: [
                                { item: 'gameObject.resources.ingots.iron', count: 1 }
                            ]
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
                            resources: [
                                { item: 'gameObject.resources.ingots.iron', count: 2 }
                            ]
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
                                { item: 'gameObject.resources.thread', count: 4 }
                            ],
                            crafting: [
                                { item: 'gameObject.crafting.tinkering.wires.ironString', count: 2 }
                            ]
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
                            resources: [
                                { item: 'gameObject.resources.ingots.iron', count: 1 }
                            ],
                            crafting: [
                                { item: 'gameObject.crafting.tinkering.wires.iron', count: 1 }
                            ]
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
                                { item: 'gameObject.resources.ingots.iron', count: 2 }
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
                                { item: 'gameObject.resources.ingots.iron', count: 2 }
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
                                { item: 'gameObject.resources.ingots.iron', count: 2 }
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
                                { item: 'gameObject.resources.ingots.iron', count: 2 }
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
                                { item: 'gameObject.resources.ingots.iron', count: 2 }
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
                                { item: 'gameObject.resources.ingots.iron', count: 2 }
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
                                { item: 'gameObject.resources.ingots.iron', count: 2 }
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
                                { item: 'gameObject.resources.ingots.iron', count: 2 }
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
                                { item: 'gameObject.resources.ore.anyOre', count: 5 }
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
                                { item: 'gameObject.resources.ingots.iron', count: 1 }
                            ],
                            crafting: [
                                { item: 'gameObject.crafting.carpentry.containersAndParts.formaNaLahve', count: 1 }
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
                                { item: 'gameObject.resources.ingots.shadow', count: 20 }
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
                                { item: 'gameObject.resources.ingots.iron', count: 15 }
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
                                { item: 'gameObject.resources.ingots.gold', count: 5 }
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
                                { item: 'gameObject.resources.ingots.gold', count: 5 }
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
                                { item: 'gameObject.resources.furs', count: 5 }
                            ],
                            crafting: [
                                { item: 'gameObject.crafting.tinkering.containers.goldenBoxW', count: 1 }
                            ]
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
                                { item: 'gameObject.resources.stones.tourmalines', count: 2 }
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
                                { item: 'gameObject.resources.stones.tourmalines', count: 2 }
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
                                { item: 'gameObject.resources.stones.rubies', count: 4 }
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
                                { item: 'gameObject.resources.stones.rubies', count: 4 }
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
                                { item: 'gameObject.resources.stones.citrines', count: 2 }
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
                                { item: 'gameObject.resources.furs', count: 5 }
                            ],
                            crafting: [
                                { item: 'gameObject.crafting.tinkering.containers.animalBox', count: 1 }
                            ]
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
                                { item: 'gameObject.resources.stones.sapphires', count: 5 }
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Tools', 'Apprentice\'s Poisoning Kit (trenink)']
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
                                { item: 'gameObject.resources.ingots.bronze', count: 50 }
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Tools', '50x Lockpick']
                        },
                        outputCount: 50
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
                                { item: 'gameObject.resources.ingots.silver', count: 5 }
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
                                { item: 'gameObject.resources.stones.starSapphire', count: 3 }
                            ],
                            crafting: [
                                { item: 'gameObject.crafting.tinkering.parts.springs', count: 2 },
                                { item: 'gameObject.crafting.tinkering.wires.copper', count: 5 }
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Special Items', 'Magic Ball (10 charges)']
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
                                { item: 'gameObject.resources.stones.amethyst', count: 2 }
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
                                { item: 'gameObject.resources.stones.citrines', count: 3 }
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
                                { item: 'gameObject.resources.stones.diamonds', count: 5 }
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Special Items', 'Recharge Crystal +5']
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
                                { item: 'gameObject.resources.ingots.blood', count: 1 }
                            ],
                            crafting: [
                                { item: 'gameObject.crafting.tinkering.wires.iron', count: 5 }
                            ]
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
                                { item: 'gameObject.resources.logs', count: 1 }
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
                                { item: 'gameObject.resources.logs', count: 1 }
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
                                { item: 'gameObject.resources.fairyDust', count: 1 }
                            ],
                            crafting: [{ item: 'gameObject.crafting.tinkering.wires.rose', count: 15 },
                                { item: 'gameObject.crafting.tinkering.wires.blood', count: 15 }
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
                                { item: 'gameObject.resources.fairyDust', count: 1 }
                            ],
                            crafting: [{ item: 'gameObject.crafting.tinkering.wires.shadow', count: 15 },
                                { item: 'gameObject.crafting.tinkering.wires.black', count: 15 }
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
                                { item: 'gameObject.resources.soulShard', count: 1 }
                            ],
                            crafting: [{ item: 'gameObject.crafting.tinkering.wires.gold', count: 15 },
                                { item: 'gameObject.crafting.tinkering.wires.mytheril', count: 15 }
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
                                selections: ['Iron Weapons', { item: 'Swords & Blades', menu: 'Iron Swords & Blades' }, 'Dagger']
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
            alchemySelection: 'Total Mana Refresh'
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
            alchemySelection: 'Mana Refresh'
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
            alchemySelection: 'Greater Heal'
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
            alchemySelection: 'Greater Strength'
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
            alchemySelection: 'Total Refresh'
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
            alchemySelection: 'Greater Cure'
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
            alchemySelection: 'Deadly Poison'
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
            alchemySelection: 'Lesser Cure Potion'
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
            alchemySelection: 'Nightsight'
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
            alchemySelection: 'Agility Potion'
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
            alchemySelection: 'Shrink'
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
            alchemySelection: 'Lava Bomb'
        },
        invis: {
            graphic: '0x0F09',
            color: '0x0B77',
            kad: {
                graphic: '0x1843',
                color: '0x0B77'
            },
            gmMortarSelection: 'Invisibility (408 Wyrm\'s Hearts)',
            alchemySelection: 'Invisibility'
        },
        lp: {
            graphic: '0x0F0A',
            color: '0x0000',
            kad: {
                graphic: '0x1843',
                color: '0x089F'
            },
            alchemySelection: 'Lesser Poison'
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
                color: '0x0000'
            },
            recall: {
                graphic: '0x1F4C',
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
                color: '0x01BB'
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
                graphic: '0x09A8',
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
    poisonGuns: {
        spear: {
            graphic: '0x0F62',
            color: '0x08A1'
        },
        halberd: {
            graphic: '0x143E',
            color: '0x08A1'
        }
    }
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
    var serial = (s.toString)(16);
    if (code === CustomStatusBarEnum.close) {
        Shared.AddVar(s, false);
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
    Orion.Print(-1, 'version 0.1.8');
    Orion.Print(-1, '-------------+');
}
function Autostart() {
    var _a;
    version();
    Orion.ClearJournal();
    Shared.AddArray('customStatusBars', []);
    Shared.AddVar('ws', false);
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
                Orion.Now() < time && !Player.Dead()) {
                Orion.Wait(50);
            }
            Scripts.Utils.playerPrint("World save DONE", ColorEnum.green);
            Orion.Wait(1500);
            Shared.AddVar('ws', false);
        }
        Scripts.Statusbar.updateStatusbars();
        Orion.Wait((config === null || config === void 0 ? void 0 : config.updateRate) || 500);
    }
}
function addCutWeapon() {
    Scripts.Loot.addCutWeapon();
}
function addMount() {
    Scripts.Mount.addMount();
}
function alchemy(potionName) {
    Scripts.Potions.alchemy(potionName);
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
function cestovniKniha(selection) {
    if (selection === void 0) { selection = PortBookOptionsEnum.kop; }
    Scripts.Port.cestovniKniha(selection);
}
function cleanObjectInBag(object, objectName) {
    Scripts.Clean.cleanObjectInBag(object, objectName);
}
function craftNext() {
    Scripts.Crafting.listMakeMenu();
}
function craftSelect() {
    Scripts.Crafting.confirmMakeMenu();
}
function drink(potionName, switchWarModeWhenNeeded, displayTimers) {
    if (switchWarModeWhenNeeded === void 0) { switchWarModeWhenNeeded = true; }
    if (displayTimers === void 0) { displayTimers = true; }
    Scripts.Potions.drinkPotion(potionName, switchWarModeWhenNeeded, displayTimers);
}
function drum(target) {
    Scripts.Music.drum(target);
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
    Scripts.Potions.gmMortar(potionName);
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
function hiding() {
    Scripts.Hiding.hiding();
}
function inscription(circle, spell, quantity) {
    if (quantity === void 0) { quantity = 0; }
    Scripts.Inscription.inscription(circle, spell, quantity);
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
    cut = parseParam(cut);
    Scripts.Loot.lootCorpsesAround(cut);
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
function refillManager(stuff, containerPathsToSearch, clean) {
    if (clean === void 0) { clean = true; }
    Scripts.Refill.manager(stuff, containerPathsToSearch, clean);
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
function statusBar() {
    Scripts.Statusbar.create();
}
function summon(creature, target) {
    Scripts.Spells.summon(creature, target);
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
    Scripts.Klamak.useKlamak(lvl, useAim, priorityList, ignoreSerials);
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
            if (px > ex && px - ex > 1 ||
                px < ex && ex - px > 1 ||
                py > ey && py - ey > 1 ||
                py < ey && ey - py > 1) {
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
        Clean.cleanMyGameObjectInBag = function (type, tName) {
            var _a, _b, _c;
            var serials = Scripts.Utils.getSerialsFromMyGameObject(type);
            var bag = (_a = type.bag) === null || _a === void 0 ? void 0 : _a.objectAlias;
            if (bag && !Orion.FindObject(bag)) {
                Orion.AddObject(bag);
                Orion.Print(ColorEnum.none, "Target your [" + bag + "] for object [" + (tName === null || tName === void 0 ? void 0 : tName.toUpperCase()) + "]");
                Scripts.Utils.waitWhileTargeting();
            }
            !bag && (bag = 'backpack');
            var x = ((_b = type.bag) === null || _b === void 0 ? void 0 : _b.x) || 100;
            var y = ((_c = type.bag) === null || _c === void 0 ? void 0 : _c.y) || 100;
            if (serials.length && Orion.FindObject(serials[0]).Count() > 1 && serials.length > 1) {
                for (var _i = 0, serials_1 = serials; _i < serials_1.length; _i++) {
                    var serial = serials_1[_i];
                    Orion.MoveItem(serial, 0, 'backpack');
                }
                serials = Scripts.Utils.getSerialsFromMyGameObject(type);
            }
            for (var i = 0; i < serials.length; i++) {
                Orion.MoveItem(serials[i], 0, bag, x, y);
                x += 3;
                Orion.Wait(450);
            }
        };
        return Clean;
    }());
    Scripts.Clean = Clean;
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
                Scripts.Spells.cast('Night Sight', TargetEnum.self);
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
            Orion.ClearJournal('You put the bloody|You apply|Chces vytvorit');
            Orion.BandageSelf();
            while (!Orion.InJournal('You put') && !Orion.InJournal('You apply') && !Orion.InJournal('Chces vytvorit')) {
                Orion.Wait(200);
            }
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
                { ask: 'Kam to chces nahazet (container) ?', addObject: 'massMoveTargetContainer' }
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
                var mobiles = Orion.FindType('any', "any", "ground", 'mobile', 15);
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
            Scripts.Utils.createGameObjectSelections([
                { ask: 'Target container to open', addObject: 'openContainer' }
            ]);
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
                Orion.Equip(s);
                Orion.Wait(200);
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
            var rrSerials = Orion.FindType(rr.graphic, rr.color);
            var grrSerials = Orion.FindType(grr.graphic, grr.color);
            var grr2Serials = Orion.FindType(grr2.graphic, grr2.color);
            var rings = __spreadArrays(rrSerials, grrSerials, grr2Serials);
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
                if (Orion.InJournal("It too soon to use it again")) {
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
                Scripts.Utils.playerPrint("[ nemas pety ]", ColorEnum.red);
                return;
            }
            if (useAim) {
                var selection = Orion.WaitForAddObject('klamakTarget');
                if (selection === 0) {
                    return;
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
                Orion.MoveItem(findSerial, 1, "ground", target.x, target.y, target.z);
                Orion.Wait(responseDelay);
            }
            Orion.WarMode(true);
            Orion.Wait(100);
            Orion.UseObject(findSerial);
        };
        return Klamak;
    }());
    Scripts.Klamak = Klamak;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Loot = (function () {
        function Loot() {
        }
        Loot.addCutWeapon = function () {
            Scripts.Utils.playerPrint('Target your cut weapon');
            return Orion.WaitForAddObject('cutWeapon', 60000);
        };
        Loot.lootCorpsesAround = function (cut, weapon) {
            var listOfCorpses = Orion.FindType('0x2006', '-1', 'ground', 'fast', 2, 'red');
            while (listOfCorpses.length) {
                for (var _i = 0, listOfCorpses_1 = listOfCorpses; _i < listOfCorpses_1.length; _i++) {
                    var id = listOfCorpses_1[_i];
                    if (cut && !Orion.FindObject(id).IsHuman()) {
                        Orion.UseObject('cutWeapon');
                        Orion.WaitForTarget(1000);
                        Orion.TargetObject(id);
                        if (weapon) {
                            Orion.UseObject('fightWeapon');
                            Orion.WaitForTarget(1000) && Orion.CancelTarget();
                        }
                    }
                    Scripts.Loot.lootCorpseId(id);
                    Orion.Ignore(id);
                    Orion.Wait(100);
                }
                listOfCorpses = Orion.FindType('0x2006', '-1', 'ground', 'fast', 2, 'red');
            }
        };
        Loot.lootCorpseId = function (id) {
            var serverLagActionsLeft = 4;
            Orion.OpenContainer(id, 5000, "Container id " + id + " not found");
            var itemsInCorpse = Orion.FindList('lootItems', id);
            if (itemsInCorpse.length) {
                for (var _i = 0, itemsInCorpse_1 = itemsInCorpse; _i < itemsInCorpse_1.length; _i++) {
                    var itemId = itemsInCorpse_1[_i];
                    Orion.MoveItem(itemId, 0, "myLootBag");
                    Orion.Wait(serverLagActionsLeft ? 50 : 350);
                    serverLagActionsLeft--;
                }
            }
        };
        Loot.lootAllFrom = function (delay) {
            if (delay === void 0) { delay = responseDelay; }
            Scripts.Utils.targetObjectNotSelf('lootAllContainer', "Target object to loot");
            Orion.OpenContainer('lootAllContainer', 5000, "Container not found");
            var itemsInCorpse = Orion.FindType('any', 'any', 'lootAllContainer');
            if (itemsInCorpse.length) {
                for (var _i = 0, itemsInCorpse_2 = itemsInCorpse; _i < itemsInCorpse_2.length; _i++) {
                    var itemId = itemsInCorpse_2[_i];
                    Orion.MoveItem(itemId, 0, "myLootBag");
                    Orion.Wait(delay);
                }
            }
        };
        Loot.carveBody = function (carveNearestBodyAutomatically) {
            if (carveNearestBodyAutomatically === void 0) { carveNearestBodyAutomatically = false; }
            var CUT_WEAPON = 'cutWeapon';
            var cutWeapon = Orion.FindObject(CUT_WEAPON);
            if (!cutWeapon) {
                var nbDaggerSerial = Scripts.Utils.findFirstType(gameObject.uncategorized.nbDagger, 1);
                if (!nbDaggerSerial) {
                    Scripts.Utils.createGameObjectSelections([
                        { ask: 'Cim budes rezat ?', addObject: CUT_WEAPON }
                    ]);
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
        return Loot;
    }());
    Scripts.Loot = Loot;
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
            for (var _i = 0, shrinkedMounts_1 = shrinkedMounts; _i < shrinkedMounts_1.length; _i++) {
                var m = shrinkedMounts_1[_i];
                Orion.ClearJournal();
                Orion.UseObject(m);
                Orion.Wait(responseDelay);
                if (Orion.InJournal('You cannot unshrink creature here or now')) {
                    Scripts.Utils.log('You cannot unshrink creature here or now', ColorEnum.red);
                    throw 'e';
                }
                var groundPets = Orion.FindType(mountsGraphic, '0xFFFF', 'ground', 'live', 5);
                for (var _a = 0, groundPets_2 = groundPets; _a < groundPets_2.length; _a++) {
                    var pet = groundPets_2[_a];
                    var petObject = Orion.FindObject(pet);
                    if (petObject.CanChangeName()) {
                        Orion.AddObject('myMount', pet);
                        Orion.UseObject(pet);
                        break;
                    }
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
                'Andres', 'Blanca', 'Carlos', 'Dolores', 'Enrique', 'Felicia', 'Guillermo', 'Hilda', 'Ignacio', 'Jimena', 'Kevin', 'Linda', 'Marty', 'Nora', 'Olaf', 'Damrey',
                'Haikui', 'Kirogi', 'Tembin', 'Bolaven', 'Sanba', 'Jelawat', 'Ewiniar', 'Malaksi', 'Gaemi', 'Prapiroon', 'Maria', 'SonTinh', 'Bopha', 'Wukong', 'Sonamu',
                'Shanshan', 'Yagi', 'Leepi', 'Bebinca', 'Rumbia', 'Soulik', 'Cimaron', 'Jebi', 'Mangkhut', 'Utor', 'Trami', 'Yutu', 'Toraji', 'Usagi', 'Pabuk', 'Wutip', 'Sepat',
                'Fitow', 'Danas', 'Nari', 'Wipha', 'Francisco', 'Lekima', 'Krosa', 'Haiyan', 'Podul', 'Lingling', 'Kaziki', 'Faxai', 'Peipah', 'Tapah', 'Mitag', 'Hagibis', 'Neoguri',
                'Rammasun', 'Matmo', 'Halong', 'Nakri', 'Fengshen', 'Kalmaegi', 'Kanmuri', 'Phanfone', 'Vongfong', 'Nuri', 'Sinlaku', 'Hagupit', 'Jangmi', 'Mekkhala', 'Higos',
                'Bavi', 'Maysak', 'Haishen', 'Noul', 'Dolphin', 'Kujira', 'Chanhom', 'Linfa', 'Nangka', 'Soudelor', 'Molave', 'Goni', 'Morakot', 'Etau', 'Vamco', 'Krovanh', 'Dujuan',
                'Mujigae', 'Choiwan', 'Koppu', 'Ketsana', 'Parma', 'Melor', 'Nepartak', 'Lupit', 'Mirinae', 'Nida', 'Omais', 'Conson', 'Chanthu', 'Dianmu', 'Mindulle', 'Lionrock',
                'Kompasu', 'Namtheun', 'Malou', 'Meranti', 'Fanapi', 'Malakas', 'Megi', 'Chaba', 'Aere', 'Songda', 'Sarika', 'Haima', 'Meari', 'Tokage', 'Muifa', 'Merbok',
                'Nanmadol', 'Talas', 'Noru', 'Kulap', 'Roke', 'Sonca', 'Nesat', 'Haitang', 'Nalgae', 'Banyan', 'Washi', 'Pakhar', 'Sanvu', 'Mawar', 'Guchol', 'Patricia', 'Rick',
                'Sandra', 'Terry', 'Vivian', 'Waldo', 'Xina', 'York', 'Zelda', 'Agatha', 'Blas', 'Celia', 'Darby', 'Estelle', 'Frank', 'Georgette', 'Howard', 'Isis', 'Javier', 'Kay', 'Lester',
                'Madeline', 'Newton', 'Orlene', 'Paine', 'Roslyn', 'Seymour', 'Tina', 'Virgil', 'Winifred', 'Xavier', 'Yolanda', 'Zeke', 'Adrian', 'Beatriz', 'Calvin', 'Dora', 'Eugene',
                'Fernanda', 'Greg', 'Hilary', 'Irwin', 'Jova', 'Kenneth', 'Lidia', 'Max', 'Norma', 'Otis', 'Pilar', 'Ramon', 'Selma', 'Todd', 'Veronica', 'Wiley', 'Xina', 'York', 'Zelda',
                'Aletta', 'Bud', 'Carlotta', 'Daniel', 'Emilia', 'Fabio', 'Gilma', 'Hector', 'Ileana', 'John', 'Kristy', 'Lane', 'Miriam', 'Norman', 'Olivia', 'Paul', 'Rosa', 'Sergio', 'Tara',
                'Vicente', 'Willa', 'Xavier', 'Yolanda', 'Zeke', 'Alvin', 'Barbara', 'Cosme', 'Dalila', 'Erick', 'Flossie', 'Gil', 'Henriette', 'Ivo', 'Juliette', 'Kiko', 'Lorena', 'Manuel',
                'Narda', 'Octave', 'Priscilla', 'Raymond', 'Sonia', 'Tico', 'Velma', 'Wallis', 'Xina', 'York', 'Zelda', 'Amanda', 'Boris', 'Cristina', 'Douglas', 'Elida', 'Fausto', 'Genevieve',
                'Hernan', 'Iselle', 'Julio', 'Karina', 'Lowell', 'Marie', 'Norbert', 'Odile', 'Polo', 'Rachel', 'Simon', 'Trudy', 'Vance', 'Winnie', 'Xavier', 'Yolanda', 'Zeke', 'Talim',
                'Doksuri', 'Khanun', 'Vicente', 'Saola'
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
            var random = Math.floor(Math.random() * (namesPool.length));
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
                return (pet1.MaxHits() - pet1.Hits()) > (pet2.MaxHits() - pet2.Hits()) ? 1 : -1;
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
                            'Nemuzes pouzit bandy'
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
            var selections = [{
                    type: SelectionTypeEnum.gump,
                    selection: 1
                }];
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
            var selections = [{
                    type: SelectionTypeEnum.menu,
                    selection: { name: 'Jak chces runu pouzit?', selection: 'Recall' }
                }];
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
                    selections = [{
                            type: SelectionTypeEnum.gump,
                            selection: 2
                        }, {
                            type: SelectionTypeEnum.menu,
                            selection: { name: '', selection: 'Ano, oprav' }
                        }];
                    break;
                case PortBookOptionsEnum.mark:
                    selections = [{
                            type: SelectionTypeEnum.gump,
                            selection: 4
                        }, {
                            type: SelectionTypeEnum.gump,
                            selection: 3
                        }];
                    break;
                case PortBookOptionsEnum.nabiti:
                    selections = [{
                            type: SelectionTypeEnum.gump,
                            selection: 1
                        }];
                    break;
                default:
                    selections = [{
                            type: SelectionTypeEnum.gump,
                            selection: 4
                        }, {
                            type: SelectionTypeEnum.gump,
                            selection: 1
                        }];
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
        Port.cestovniKniha = function (selection) {
            if (selection === void 0) { selection = PortBookOptionsEnum.kop; }
            var selections;
            switch (selection) {
                case PortBookOptionsEnum.opravaStats:
                    selections = [{
                            type: SelectionTypeEnum.gump,
                            selection: 2
                        }, {
                            type: SelectionTypeEnum.menu,
                            selection: { name: '', selection: 'Ano, oprav' }
                        }];
                    break;
                case PortBookOptionsEnum.mark:
                    selections = [{
                            type: SelectionTypeEnum.gump,
                            selection: 7
                        }];
                    break;
                default:
                    selections = [{
                            type: SelectionTypeEnum.gump,
                            selection: 5
                        }];
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
        Potions.getMortar = function () {
            var mortars = Orion.FindType(gameObject.uncategorized.mortar.graphic);
            if (!mortars.length) {
                Scripts.Utils.log("Nemas mortar", ColorEnum.red);
                throw 'Nemas mortar';
            }
            return mortars[0];
        };
        Potions.drinkPotion = function (potionName, switchWarModeWhenNeeded, displayTimers, displayInfo) {
            if (switchWarModeWhenNeeded === void 0) { switchWarModeWhenNeeded = true; }
            if (displayTimers === void 0) { displayTimers = true; }
            if (displayInfo === void 0) { displayInfo = true; }
            if (!isPotionsEnum(potionName)) {
                return;
            }
            var p = gameObject.potions[potionName];
            var potion = Scripts.Utils.findFirstType(p);
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
            Orion.UseObject(potion);
            var m = Scripts.Utils.waitWhileSomethingInJournal(messages, 1000, 1000);
            if (m === 0) {
                var potionTimer = config === null || config === void 0 ? void 0 : config.drinkPotion.timer;
                displayTimers && Orion.AddDisplayTimer(TimersEnum.drink, drinkTimer, (potionTimer === null || potionTimer === void 0 ? void 0 : potionTimer.position) || 'LeftTop', (potionTimer === null || potionTimer === void 0 ? void 0 : potionTimer.type) || 'Line|Bar', (potionTimer === null || potionTimer === void 0 ? void 0 : potionTimer.text) || 'Drink', (potionTimer === null || potionTimer === void 0 ? void 0 : potionTimer.xFromPosition) || 0, (potionTimer === null || potionTimer === void 0 ? void 0 : potionTimer.yFromPosition) || 0, (potionTimer === null || potionTimer === void 0 ? void 0 : potionTimer.textColor) || '0x88B', (potionTimer === null || potionTimer === void 0 ? void 0 : potionTimer.font) || 0, (potionTimer === null || potionTimer === void 0 ? void 0 : potionTimer.backgroundColor) || '0x88B');
                Scripts.Utils.resetTimer(TimersEnum.drink);
                var potionsCount = Orion.Count(p.graphic, p.color);
                Scripts.Utils.playerPrint("[ " + potionName + " " + potionsCount + " ]", potionsCount === 0 ? ColorEnum.red : ColorEnum.green);
                if (potionName === PotionsEnum.gs) {
                    var gsPotionTimer = config === null || config === void 0 ? void 0 : config.drinkPotion.gsTimer;
                    displayTimers && Orion.AddDisplayTimer(TimersEnum.gs, gsTimer, (gsPotionTimer === null || gsPotionTimer === void 0 ? void 0 : gsPotionTimer.position) || 'LeftTop', (gsPotionTimer === null || gsPotionTimer === void 0 ? void 0 : gsPotionTimer.type) || 'Line|Bar', (gsPotionTimer === null || gsPotionTimer === void 0 ? void 0 : gsPotionTimer.text) || 'GS', (gsPotionTimer === null || gsPotionTimer === void 0 ? void 0 : gsPotionTimer.xFromPosition) || 0, (gsPotionTimer === null || gsPotionTimer === void 0 ? void 0 : gsPotionTimer.yFromPosition) || 55, (gsPotionTimer === null || gsPotionTimer === void 0 ? void 0 : gsPotionTimer.textColor) || '0x88B', (gsPotionTimer === null || gsPotionTimer === void 0 ? void 0 : gsPotionTimer.font) || 0, (gsPotionTimer === null || gsPotionTimer === void 0 ? void 0 : gsPotionTimer.backgroundColor) || '0x88B');
                    Scripts.Utils.resetTimer(TimersEnum.gs);
                }
                displayInfo && Orion.Exec('displayDrinkInfo', false, [potionName.toString()]);
            }
            else if (m === 1) {
                var remainingTime = drinkTimer - Orion.Timer(TimersEnum.drink);
                remainingTime > 0 && Scripts.Utils.playerPrint("potion timer " + ((drinkTimer - Orion.Timer(TimersEnum.drink)) / 1000).toFixed(2) + "s", ColorEnum.red);
            }
            else if (m === 2) {
                Scripts.Utils.playerPrint("You can't reach that", ColorEnum.orange);
            }
            else {
                Scripts.Utils.log('Nenalezena drink hlaska v journalu za posledni vterinu', ColorEnum.red);
            }
            Orion.ClearJournal(succMsg + "|" + failMsg + "|" + paraMsg);
        };
        Potions.gmMortar = function (potionName) {
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
            var _loop_1 = function () {
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
                var state_1 = _loop_1();
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        };
        Potions.alchemy = function (potionName) {
            if (!isPotionsEnum(potionName)) {
                return;
            }
            var p = gameObject.potions[potionName];
            var mortar = Scripts.Potions.getMortar();
            while (true) {
                Scripts.Utils.worldSaveCheckWait();
                Orion.ClearJournal();
                Scripts.Utils.selectMenu('Vyber typ potionu', [p.alchemySelection]);
                Orion.UseObject(mortar);
                Scripts.Utils.waitWhileSomethingInJournal(['You completed', 'You toss', 'Nemas dostatecny'], 60000);
                if (Orion.InJournal('Nemas dostatecny')) {
                    Scripts.Utils.log('Dosly regy', ColorEnum.red);
                    return;
                }
                if (Orion.InJournal('You toss')) {
                    continue;
                }
                Scripts.Utils.worldSaveCheckWait();
                Orion.ClearJournal();
                Orion.UseObject(mortar);
                Scripts.Utils.waitWhileSomethingInJournal(['You pour'], 60000);
                Orion.Wait(responseDelay);
                Scripts.Utils.worldSaveCheckWait();
                Orion.ClearJournal();
                var potion = Scripts.Utils.findFirstType(p);
                var kad = Scripts.Potions.getKadForPotion(p);
                Orion.WaitTargetObject(potion);
                Orion.UseObject(kad);
                Scripts.Utils.waitWhileSomethingInJournal(['You put'], 60000);
                Orion.Wait(responseDelay);
            }
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
    var Refill = (function () {
        function Refill() {
        }
        Refill.manager = function (stuff, containerPathsToSearch, clean) {
            if (clean === void 0) { clean = true; }
            var canTakeFromBank = Scripts.Common.openBank();
            for (var _i = 0, stuff_1 = stuff; _i < stuff_1.length; _i++) {
                var i = stuff_1[_i];
                Scripts.Refill.universalRefill(i.item, i.total, canTakeFromBank, containerPathsToSearch);
                clean && Scripts.Clean.cleanObjectInBag(Scripts.Utils.parseObject(i.item));
            }
            Scripts.Utils.playerPrint("vazis: " + Player.Weight() + "/" + Player.MaxWeight());
        };
        Refill.universalRefill = function (gameObjectAsString, total, canTakeFromBank, containerPathsToSearch) {
            if (canTakeFromBank === void 0) { canTakeFromBank = false; }
            var item = Scripts.Utils.parseObject(gameObjectAsString);
            if (Scripts.Utils.countObjectInContainer(item) === total) {
                return;
            }
            var name = gameObjectAsString.split('.')[gameObjectAsString.split('.').length - 1];
            var allowedDistance = 5;
            var itemToFind = isIPotion(item) ? item.kad : item;
            if (!containerPathsToSearch) {
                containerPathsToSearch = [];
            }
            else if (isStringArray(containerPathsToSearch)) {
                containerPathsToSearch = [__spreadArrays(containerPathsToSearch)];
            }
            var containerPaths = containerPathsToSearch;
            var itemSerial;
            var lastContainerSerial;
            var needToTakeToBackpack = false;
            if (containerPaths.length) {
                for (var _i = 0, containerPaths_1 = containerPaths; _i < containerPaths_1.length; _i++) {
                    var path = containerPaths_1[_i];
                    if (!path.length) {
                        return;
                    }
                    var firstContainer = Orion.FindObject(path[0]);
                    if (!firstContainer) {
                        continue;
                    }
                    if (firstContainer.Container() === Player.BankSerial()) {
                        if (!canTakeFromBank) {
                            continue;
                        }
                    }
                    else {
                        Orion.WalkTo(firstContainer.X(), firstContainer.Y(), firstContainer.Z(), 1);
                        isIPotion(item) && (needToTakeToBackpack = true);
                    }
                    for (var _a = 0, path_1 = path; _a < path_1.length; _a++) {
                        var container = path_1[_a];
                        if (!Orion.GumpExists('container', container)) {
                            Orion.OpenContainer(container);
                            Orion.Wait(responseDelay);
                        }
                    }
                    lastContainerSerial = path[path.length - 1];
                    var items = Orion.FindType(itemToFind.graphic, itemToFind.color || '0xFFFF', lastContainerSerial, 'item', undefined, undefined, false);
                    if (items.length) {
                        itemSerial = items[0];
                    }
                    if (itemSerial) {
                        break;
                    }
                }
            }
            if (!itemSerial) {
                needToTakeToBackpack = false;
                var items = Orion.FindType(itemToFind.graphic, itemToFind.color || '0xFFFF', 'ground', 'item', allowedDistance);
                if (items.length) {
                    itemSerial = items[0];
                    lastContainerSerial = itemSerial;
                }
                else if (canTakeFromBank) {
                    lastContainerSerial = Player.BankSerial();
                    var items_1 = Orion.FindType(itemToFind.graphic, itemToFind.color || '0xFFFF', Player.BankSerial(), 'item', undefined, undefined, false);
                    items_1.length && (itemSerial = items_1[0]);
                }
            }
            if (itemSerial) {
                if (isIPotion(item)) {
                    var eb = gameObject.uncategorized.emptyBottles;
                    var emptyBottleSerials = Orion.FindType(eb.graphic, eb.color, lastContainerSerial === itemSerial ? 'ground' : lastContainerSerial, 'near|item', 3);
                    var emptyBottleSerial = emptyBottleSerials.length ? emptyBottleSerials[0] : undefined;
                    Scripts.Refill.refillPotions(name, total, itemSerial, needToTakeToBackpack, emptyBottleSerial);
                }
                else {
                    Scripts.Utils.refill(item, lastContainerSerial, total, undefined, undefined, undefined, lastContainerSerial === itemSerial);
                }
            }
            else {
                Scripts.Utils.playerPrint("nenalezen item \"" + name + "\"", ColorEnum.red);
            }
        };
        Refill.refillPotions = function (potionName, total, kadSerial, needToTakeKadToBackpack, emptyBottleSerial) {
            if (needToTakeKadToBackpack === void 0) { needToTakeKadToBackpack = false; }
            var kad = Orion.FindObject(kadSerial);
            var kadPosition = { x: kad.X(), y: kad.Y() };
            var kadContainer = kad.Container();
            var potion = gameObject.potions[potionName];
            var refillCount = total - Scripts.Utils.countObjectInContainer(potion);
            if (refillCount === 0) {
                return;
            }
            if (needToTakeKadToBackpack) {
                Orion.MoveItem(kadSerial, 0, 'backpack');
                Orion.Wait(responseDelay);
            }
            while (refillCount > 0 || refillCount < 0) {
                if (refillCount > 0) {
                    Scripts.Potions.fillPotion(potionName, true, kadSerial, emptyBottleSerial);
                    refillCount--;
                }
                else {
                    Scripts.Potions.potionToKad(potionName, true, kadSerial);
                    refillCount++;
                }
            }
            if (needToTakeKadToBackpack) {
                Orion.Wait(responseDelay);
                Orion.MoveItem(kadSerial, 0, kadContainer, kadPosition.x, kadPosition.y);
            }
        };
        return Refill;
    }());
    Scripts.Refill = Refill;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Spells = (function () {
        function Spells() {
        }
        Spells.cast = function (spell, target) {
            Scripts.Utils.waitTarget(target);
            Orion.Cast(spell);
        };
        Spells.summon = function (creature, target) {
            Orion.CancelWaitMenu();
            Orion.WaitMenu('What do you want to summon', creature);
            Scripts.Spells.cast('Summ. Creature', target);
        };
        Spells.castScroll = function (scroll, target, backupHeadCast) {
            var s = gameObject.scrolls['standard'][scroll];
            if (s.minMana > Player.Mana()) {
                Scripts.Utils.playerPrint('!! MANA !!', ColorEnum.red);
                return;
            }
            if (Orion.Count(s.graphic) < 1) {
                var reason = 'NEMAS SVITKY';
                backupHeadCast ? Scripts.Spells.backupHeadCast(reason, backupHeadCast, target) : Scripts.Utils.playerPrint(reason, ColorEnum.red);
                return;
            }
            Orion.ClearJournal();
            Scripts.Utils.waitTarget(target);
            Orion.UseType(s.graphic);
            Scripts.Utils.waitWhileSomethingInJournal(['Select Target', 'You can\'t cast']);
            if (Orion.InJournal('Select Target')) {
                s.timer && Orion.AddDisplayTimer('scroll', s.timer, 'AboveChar', 'bar', '', 0, 75, '0x100', 1, 'yellow');
            }
            else {
                var reason = 'TIMER';
                backupHeadCast ? Scripts.Spells.backupHeadCast(reason, backupHeadCast, target) : Scripts.Utils.playerPrint(reason, ColorEnum.red);
            }
        };
        Spells.backupHeadCast = function (reason, spell, target) {
            Scripts.Utils.playerPrint(reason + ' - backup cast', ColorEnum.orange);
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
                Scripts.Utils.playerPrint("NEMAS SVITKY " + scroll, ColorEnum.red);
                return;
            }
            Orion.ClearJournal();
            Scripts.Utils.waitTarget(target);
            Orion.UseObject(scrollSerial);
            Scripts.Utils.waitWhileSomethingInJournal(['Select Target', 'You can\'t cast']);
            if (Orion.InJournal('Select Target')) {
                s.timer && Orion.AddDisplayTimer('scroll', s.timer, 'AboveChar', 'bar', '', 0, 75, '0x100', 1, 'yellow');
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
        Spells.wos = function (scroll, timer) {
            if (scroll === void 0) { scroll = false; }
            if (timer === void 0) { timer = 70000; }
            var target = Scripts.Utils.waitTargetTileOrObject();
            if (!target) {
                return;
            }
            scroll ? Scripts.Spells.castScroll(ScrollEnum.wos) : Scripts.Spells.cast('Wall of Stone');
            Orion.ClearJournal('Target is not in line of sight|The spell fizzles');
            var castResult = Scripts.Utils.waitWhileSomethingInJournal(['Target is not in line of sight', 'The spell fizzles'], 2500);
            if (castResult === 0 || castResult === 1) {
                return;
            }
            var timerObjectSerial = '';
            var walls = Orion.FindType('0x0080', '0x0000', 'ground', undefined, 18);
            var found = false;
            for (var _i = 0, walls_1 = walls; _i < walls_1.length; _i++) {
                var serial = walls_1[_i];
                var o = Orion.FindObject(serial);
                if (o.X() === target.x && o.Y() === target.y) {
                    timerObjectSerial = serial;
                    found = true;
                    break;
                }
            }
            if (!found) {
                return;
            }
            var id = Math.random().toString();
            Orion.AddDisplayTimer(id, timer, 'AboveChar', 'Rectangle', undefined, Orion.ClientOptionGet('GameWindowX'), Orion.ClientOptionGet('GameWindowY') + 30, 'any', 1, '0x000000FE');
            Orion.DisplayTimerSetObject(id, timerObjectSerial);
        };
        Spells.ef = function (self, scroll, timer) {
            if (self === void 0) { self = false; }
            if (scroll === void 0) { scroll = false; }
            if (timer === void 0) { timer = 70000; }
            var target = {};
            self ? Orion.WaitTargetObject('self') : (target = Scripts.Utils.waitTargetTileOrObject());
            scroll ? Scripts.Spells.castScroll(ScrollEnum.ef) : Scripts.Spells.cast('Energy Field');
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
                var keepChecking = true;
                var timer_2 = 4500;
                var wait = 20;
                while (keepChecking && timer_2) {
                    Orion.ClearJournal('Target is not in line of sight|The spell fizzles');
                    if (Orion.InJournal('Target is not in line of sight|The spell fizzles')) {
                        keepChecking = false;
                    }
                    var walls = Orion.FindType('0x3947', '0x0000', 'ground', undefined, 18);
                    var found = false;
                    for (var _i = 0, walls_2 = walls; _i < walls_2.length; _i++) {
                        var serial = walls_2[_i];
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
        Statusbar.create = function () {
            Scripts.Utils.createGameObjectSelections([{ ask: 'Target mobile', addObject: 'lastCustomStatusBar' }]);
            var o = Orion.FindObject('lastCustomStatusBar');
            var serial = o.Serial();
            var name = o.Name();
            var max = o.MaxHits();
            var hp = o.Hits();
            var statusBars = Shared.GetArray(GlobalEnum.customStatusBars, []);
            var s = {
                serial: serial,
                hp: hp,
                max: max,
                name: name,
                poisoned: o.Poisoned(),
                visible: false,
                dead: o.Dead()
            };
            statusBars.push(s);
            Shared.AddVar(serial, true);
            Shared.AddArray(GlobalEnum.customStatusBars, statusBars);
            var gump = Orion.CreateCustomGump(parseInt(serial, 16));
            gump.SetCallback("customStatusBarCallBack " + serial);
            Scripts.Statusbar.updateStatusBarGumpForObject(o, s, gump, true);
        };
        Statusbar.updateStatusbars = function () {
            var statusBars = Shared.GetArray(GlobalEnum.customStatusBars, []);
            for (var _i = 0, statusBars_1 = statusBars; _i < statusBars_1.length; _i++) {
                var s = statusBars_1[_i];
                if (!Shared.GetVar(s.serial, true)) {
                    continue;
                }
                var gump = Orion.CreateCustomGump(parseInt(s.serial, 16));
                var o = Orion.FindObject(s.serial);
                if (o) {
                    Scripts.Statusbar.updateStatusBarGumpForObject(o, s, gump);
                }
                else if (s.visible) {
                    s.visible = false;
                    Scripts.Statusbar.redrawBodyToNoObject(s, gump);
                }
            }
            Shared.AddArray(GlobalEnum.customStatusBars, statusBars);
        };
        Statusbar.updateStatusBarGumpForObject = function (o, s, gump, forceUpdate) {
            if (forceUpdate === void 0) { forceUpdate = false; }
            var name = o.Name();
            var dead = o.Dead();
            var poisoned = o.Poisoned();
            var hp = o.Hits();
            var max = o.MaxHits();
            if (!forceUpdate && s.visible && s.dead === dead && s.hp === hp &&
                s.max === max && s.name === name && s.poisoned === poisoned) {
                return;
            }
            var updateText = false;
            if (s.dead !== dead || (!s.visible && dead)) {
                s.dead = dead;
                s.visible = true;
                updateText = true;
                gump.Clear();
                var ARGBcolor = Scripts.Utils.getARGBColorByNotoriety(o.Notoriety(), 'cc');
                Scripts.Statusbar.drawBody(gump, o.Notoriety(), dead);
            }
            if (!s.visible) {
                s.visible = true;
                updateText = true;
                gump.Clear();
                Scripts.Statusbar.drawBody(gump, o.Notoriety());
            }
            if (s.name !== name || updateText) {
                s.name = name;
                Scripts.Statusbar.drawName(gump, name);
            }
            !max && (max = s.max);
            hp < 0 && (hp = 0);
            if (s.hp !== hp || s.max !== max || s.poisoned !== poisoned || updateText) {
                s.hp = hp;
                s.max = max;
                s.poisoned = poisoned;
                if (!updateText) {
                    gump.Clear();
                    Scripts.Statusbar.drawBody(gump, o.Notoriety());
                    Scripts.Statusbar.drawName(gump, name);
                }
                Scripts.Statusbar.drawHP(gump, hp, max, poisoned);
            }
            gump.Update();
        };
        Statusbar.drawBody = function (gump, notoriety, dead) {
            if (dead === void 0) { dead = false; }
            var ARGBcolor = dead ? '#ffff4dff' : typeof notoriety === 'number' ? Scripts.Utils.getARGBColorByNotoriety(notoriety) : '#ccffffff';
            gump.AddColoredPolygone(0, 0, 170, 50, ARGBcolor);
            gump.AddHitBox(CustomStatusBarEnum.click, 0, 0, 170, 50, 1);
        };
        Statusbar.redrawBodyToNoObject = function (s, gump) {
            gump.Clear();
            Scripts.Statusbar.drawBody(gump);
            Scripts.Statusbar.drawName(gump, s.name);
            Scripts.Statusbar.drawHP(gump, s.hp, s.max, s.poisoned);
            gump.Update();
        };
        Statusbar.drawName = function (gump, name) {
            gump.AddText(10, 7, '0', "" + name, 0, 202);
        };
        Statusbar.drawHP = function (gump, hp, max, poisoned) {
            var lineLength = 70;
            var relative = lineLength / max;
            var current = hp * relative;
            var over = hp > max;
            var currentColor = poisoned ? '#00FF00' : Scripts.Utils.determineHpColorRGB(current * 100 / lineLength);
            gump.AddText(10, 25, '0', hp + "/" + max, 0, 201);
            gump.AddLine(89, 35, 161, 35, 'black', 10, 101);
            gump.AddLine(90, 35, (over ? lineLength : current) + 90, 35, currentColor, 8, 102);
            gump.AddText(152, 25, '0', over ? "<basefont size='small' color='red'>+</basefont>" : ' ', 0, 103);
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
            Orion.AddFriend(enemy.Name(), enemy.Serial());
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
            if (store.length && ((currentIndex < store.length - 1 && !reverse) ||
                (reverse && currentIndex))) {
                currentIndex += (reverse ? -1 : 1);
                Orion.SetGlobal('currentTargetIndex', currentIndex.toString());
                Orion.SetGlobal('currentTarget', store[currentIndex]);
            }
            else {
                var flags = ['near', 'mobile', 'live', 'ignoreself'].concat(additionalFlags).join('|');
                var noto = notoriety.join('|') || undefined;
                var nearestNewTarget = Orion.FindType("any", "any", "ground", flags, 15, noto);
                var resolved = false;
                while (!resolved && (nearestNewTarget === null || nearestNewTarget === void 0 ? void 0 : nearestNewTarget.length) && flags.indexOf('ignorefriendlytypes') !== -1) {
                    var t = Orion.FindObject(nearestNewTarget[0]);
                    var isFriendly = Scripts.Targeting.isFriendlyTargetType(t.Graphic(), t.Color(), t.Name());
                    if (!isFriendly) {
                        resolved = true;
                    }
                    else {
                        Orion.Ignore(t.Serial());
                        nearestNewTarget = Orion.FindType("any", "any", "ground", flags, 15, noto);
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
            if (showStatusBar === void 0) { showStatusBar = true; }
            if (targetIndicationEnum === void 0) { targetIndicationEnum = TargetIndicationEnum.large; }
            var notoColor = Scripts.Utils.getColorByNotoriety(enemy.Notoriety());
            Scripts.Utils.playerPrint("[" + (enemy.Name() || 'target') + "]: " + enemy.Hits() + "/" + enemy.MaxHits(), notoColor);
            Orion.CharPrint(enemySerial, notoColor, "[" + (enemy.Name() || 'target') + "]: " + enemy.Hits() + "/" + enemy.MaxHits());
            targetIndicationEnum !== TargetIndicationEnum.none && Scripts.Utils.printColoredHpBar(enemySerial, enemy.Hits() / enemy.MaxHits() * 100);
            showStatusBar && Scripts.Utils.updateCurrentStatusBar(enemySerial, statusBarPosition);
            Orion.ClearHighlightCharacters();
            Orion.AddObject('lastattack', enemySerial);
            Orion.AddHighlightCharacter(enemySerial, Scripts.Utils.getColorByNotoriety(enemy.Notoriety()));
        };
        Targeting.isFriendlyTargetType = function (graphic, color, name) {
            var friendly = [
                { graphic: '0x000E', color: '0x0000', exceptionNames: ['Earth Elemental'] },
                { graphic: '0x000D', color: '0x0000' },
                { graphic: '0x0039', color: '0x0835' },
                { graphic: '0x0003', color: '0x0835' },
                { graphic: '0x00D4', color: '0x0712', exceptionNames: ['Grizzly Bear'] },
                { graphic: '0x00E8', color: '0x01BB' },
                { graphic: '0x00D8', color: '0x0000' },
                { graphic: '0x0015', color: '0x0757' },
                { graphic: '0x00CC', color: '0x0000' }
            ];
            for (var _i = 0, friendly_1 = friendly; _i < friendly_1.length; _i++) {
                var f = friendly_1[_i];
                if (f.graphic === graphic && f.color === color && (!f.exceptionNames || f.exceptionNames.indexOf(name) === -1)) {
                    return true;
                }
            }
            return false;
        };
        return Targeting;
    }());
    Scripts.Targeting = Targeting;
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
            var serialsInSourceContainer = sourceContainerIsItemOnGround ? [sourceContainerId] : Orion.FindType(obj.graphic, obj.color || '0xFFFF', sourceContainerId);
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
                    if (quantity === 1 && !Scripts.Utils.countObjectInContainer({ graphic: i.Graphic(), color: i.Color() })) {
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
            if (Orion.InJournal("World save has been")) {
                Orion.Wait(25000);
                Orion.ClearJournal('World save has been', 'sys');
            }
        };
        Utils.log = function (message, color) {
            if (color === void 0) { color = ColorEnum.none; }
            Orion.Print(color, message);
        };
        Utils.playerPrint = function (message, color) {
            if (color === void 0) { color = ColorEnum.none; }
            Orion.CharPrint(Player.Serial(), color, message);
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
        Utils.getSerialsFromMyGameObject = function (type) {
            if (type.color) {
                return Orion.FindType(type.graphic, type.color);
            }
            else {
                return Orion.FindType(type.graphic);
            }
        };
        Utils.findMyDefinitionForGameObject = function (gameObject, obj) {
            var graphic = gameObject.Graphic().toUpperCase();
            var color = gameObject.Color().toUpperCase();
            obj === undefined && (obj = gameObject);
            if (isMyGameObject(obj)) {
                if (obj.graphic.toUpperCase() === graphic &&
                    (!obj.color && color === '0X0000' || obj.color.toUpperCase() === color)) {
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
            var c = Math.ceil(percent * 3 / 100);
            return c === 1 ? ColorEnum.red : c === 2 ? ColorEnum.orange : ColorEnum.green;
        };
        Utils.determineHpColorRGB = function (percent) {
            var c = Math.ceil(percent * 3 / 100);
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
            var fullBoxCount = Math.ceil(percent * 6 / 100);
            var color = Scripts.Utils.determineHpColor(percent);
            var text = '';
            for (var i = 0; i < 6; i++) {
                text += i < fullBoxCount ? '\u25A0' : '\u25A1';
            }
            Orion.CharPrint(target, color, text);
        };
        Utils.getLivingObjectInDistance = function (objectSerial) {
            var o = Orion.FindObject(objectSerial);
            return (o && !o.Dead()) ? o : null;
        };
        Utils.printDamage = function (serial, previousHp, force) {
            if (force === void 0) { force = false; }
            var o = Orion.FindObject(serial);
            var hp = o.Hits();
            var max = o.MaxHits();
            var diff = hp - previousHp;
            if (diff !== 0 || force) {
                diff !== 0 && Orion.PrintFast(serial, diff > 0 ? ColorEnum.green : ColorEnum.red, 0, "" + (diff > 0 ? '+' : '') + diff.toString());
                Orion.PrintFast(serial, Scripts.Utils.determineHpColor(hp / max * 100), 0, "[" + hp + "/" + max + "]");
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
            if ((minimalCountForWarn !== undefined && count <= minimalCountForWarn) || (minimalCountForWarn === undefined && !count)) {
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
            var graphic = myGameObject.graphic;
            var color = myGameObject.color;
            var name = myGameObject.name;
            var serials = Orion.FindType(graphic, color);
            if (serials.length) {
                return serials[0];
            }
            if (layer !== undefined) {
                var l = Orion.ObjAtLayer(layer);
                if (l && l.Graphic() === graphic && l.Color() === color) {
                    return l.Serial();
                }
            }
            if (!name) {
                return;
            }
            serials = Orion.FindType(graphic);
            for (var _i = 0, serials_2 = serials; _i < serials_2.length; _i++) {
                var s = serials_2[_i];
                Orion.Click(s);
                Orion.Wait(100);
                if (Orion.FindObject(s).Name().indexOf(name) === 0) {
                    return s;
                }
            }
            if (layer !== undefined) {
                var l = Orion.ObjAtLayer(layer);
                Orion.Click(l.Serial());
                Orion.Wait(100);
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
                    Scripts.Utils.createGameObjectSelections([{
                            ask: 'Target you primary helmet', addObject: 'bishopToggleHelm'
                        }]);
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
                Orion.Cast("Greater Heal");
            });
        };
        Clerik.KPZJump = function () {
            Clerik.useKPZ(function () {
                Scripts.Utils.playerPrint(MedicActionsEnum.jump, ColorEnum.green);
                Orion.Cast("Protection");
            });
        };
        Clerik.KPZHpSwitch = function () {
            Clerik.useKPZ(function () {
                Scripts.Utils.playerPrint(MedicActionsEnum.switchHp, ColorEnum.green);
                Orion.Cast("Reactive Armor");
            });
        };
        Clerik.useKPZ = function (cb) {
            var kpzList = Orion.FindType(gameObject.medic.kpz.graphic, gameObject.medic.kpz.color, "backpack");
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
                Orion.AddDisplayTimer(timer, 5000, 'AboveChar', 'bar', "Hiding", 0, 100, '0x100', 0, 'white');
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
            Orion.Say(msg);
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
                var toolTarget = itemObject.make.toolTarget ? Scripts.Utils.parseObject(itemObject.make.toolTarget) : undefined;
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
                highlightIndex = highlightIndex === undefined || highlightIndex + 1 === list.length ? 0 : highlightIndex + 1;
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
                { ask: 'Target container with shafts', addObject: 'shaftsContainer' }
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
                            Orion.WaitTargetTileRelative("any", x, y, Player.Z());
                            Orion.UseObject(prut);
                            Scripts.Utils.waitWhileSomethingInJournal([
                                'You fish a while',
                                'You pull out',
                                'no fish here',
                                'Try fishing in water'
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
    var Hiding = (function () {
        function Hiding() {
        }
        Hiding.hiding = function () {
            Orion.Exec('_hiding', true);
        };
        return Hiding;
    }());
    Scripts.Hiding = Hiding;
})(Scripts || (Scripts = {}));
function _hiding() {
    Orion.ClearJournal();
    Orion.Print(ColorEnum.none, 'Start Hiding');
    Orion.UseSkill('Hiding');
    Orion.Wait(100);
    if (Orion.InJournal('You must wait')) {
        Orion.ClearJournal('You must wait');
        return;
    }
    Orion.Exec('_hidingPreoccupiedCheck', true);
}
function _hidingPreoccupiedCheck() {
    var _a;
    var hidTimer = (_a = config === null || config === void 0 ? void 0 : config.hiding) === null || _a === void 0 ? void 0 : _a.timer;
    Orion.AddDisplayTimer(TimersEnum.hiding, 2000, (hidTimer === null || hidTimer === void 0 ? void 0 : hidTimer.position) || 'AboveChar', (hidTimer === null || hidTimer === void 0 ? void 0 : hidTimer.type) || 'bar', (hidTimer === null || hidTimer === void 0 ? void 0 : hidTimer.text) || "Hiding", (hidTimer === null || hidTimer === void 0 ? void 0 : hidTimer.xFromPosition) || 0, (hidTimer === null || hidTimer === void 0 ? void 0 : hidTimer.yFromPosition) || 100, (hidTimer === null || hidTimer === void 0 ? void 0 : hidTimer.textColor) || '0x100', (hidTimer === null || hidTimer === void 0 ? void 0 : hidTimer.font) || 0, (hidTimer === null || hidTimer === void 0 ? void 0 : hidTimer.backgroundColor) || 'red');
    Scripts.Utils.waitWhileSomethingInJournal(['You have hidden yourself well', 't seem to hide here', 'preoccupied'], 3000);
    Orion.RemoveDisplayTimer(TimersEnum.hiding);
    if (Orion.InJournal('You have hidden yourself well')) {
        Orion.CharPrint(Player.Serial(), ColorEnum.green, '[ Hidden ]');
    }
    else if (Orion.InJournal('t seem to hide here')) {
        Orion.CharPrint(Player.Serial(), ColorEnum.red, '[ FAILED ]');
    }
    else if (Orion.InJournal('preoccupied')) {
        Orion.WarMode(true);
        Orion.Wait(100);
        Orion.Print(ColorEnum.none, 'preoccupied - trying to hide again');
        Orion.Exec('_hiding', true);
    }
}
var Scripts;
(function (Scripts) {
    var Inscription = (function () {
        function Inscription() {
        }
        Inscription.inscription = function (circle, spell, quantity) {
            if (quantity === void 0) { quantity = 0; }
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
                if (Player.Mana() + 70 < Player.Int()) {
                    var isDrinkTimerSet = Orion.Timer(TimersEnum.drink) !== -1;
                    while (isDrinkTimerSet && Orion.Timer(TimersEnum.drink) < 18000) {
                        Orion.Wait(200);
                    }
                    Scripts.Potions.drinkPotion(PotionsEnum.tmr);
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
            var _loop_2 = function () {
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
                    msg = Scripts.Utils.waitWhileSomethingInJournal([
                        'You put the',
                        'destroyed hatchet',
                        'no logs left',
                        'way to use that',
                        'fail to produce'
                    ], undefined, undefined, undefined);
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
                var state_2 = _loop_2();
                if (typeof state_2 === "object")
                    return state_2.value;
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
                for (var i_1 = coordinates.length - 1; i_1 >= 0; i_1--) {
                    var t_1 = coordinates[i_1];
                    for (var _i = 0, reds_1 = reds; _i < reds_1.length; _i++) {
                        var r = reds_1[_i];
                        var ro = Orion.FindObject(r);
                        var rx = ro.X();
                        var ry = ro.Y();
                        var dx = t_1.x > rx ? t_1.x - rx : rx - t_1.x;
                        var dy = t_1.y > ry ? t_1.y - ry : ry - t_1.y;
                        if (dx < 15 && dy < 15) {
                            trees.splice(i_1, 1);
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
                { color: '0x03E9', message: 'Diamond' }
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
                '0x19B9'
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
                    for (var _b = 0, serials_3 = serials; _b < serials_3.length; _b++) {
                        var serial = serials_3[_b];
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
                var oresAround = Orion.FindType("0x19B7|0x19BA|0x19B8|0x19B9", colors, "ground", "item", distance);
                for (var _i = 0, oresAround_1 = oresAround; _i < oresAround_1.length; _i++) {
                    var ore = oresAround_1[_i];
                    if (distance === 0) {
                        Orion.MoveItem(ore);
                    }
                    else {
                        var oreObject = Orion.FindObject(ore);
                        if (!oreObject || oreObject.X() === Player.X() && oreObject.Y() === Player.Y()) {
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
                while (keepMine && !Orion.InJournal("There is no ore") && !Orion.InJournal("Try mining")) {
                    Orion.ClearJournal();
                    Orion.UseType('0x0E85');
                    if (Orion.WaitForTarget(1000)) {
                        Orion.TargetTileRelative('any', relativeKopX, relativeKopY, 0);
                    }
                    while (!(Orion.InJournal("You put the") ||
                        Orion.InJournal("There is no ore") ||
                        Orion.InJournal("Try mining") ||
                        Orion.InJournal("You loosen") ||
                        Orion.InJournal("You destroy"))) {
                        Orion.Wait(200);
                    }
                    if (Orion.InJournal("You loosen")) {
                        continue;
                    }
                    if (!Orion.InJournal("You put the")) {
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
            if (Orion.InJournal('Your taming failed') ||
                Orion.InJournal('Ochoceni se nezdarilo')) {
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
            var monstersAround = Orion.FindType("!0x0190|!0x0191", "-1", "ground", "nothuman|live|near", 22, "gray");
            while (monstersAround.length) {
                Orion.Ignore(monstersAround[0]);
                Orion.SetGlobal('tamingCounter', '0');
                Scripts.Taming.trainOnAnimal(monstersAround[0], ranger);
                monstersAround = Orion.FindType("!0x0190|!0x0191", "-1", "ground", "nothuman|live|near", 22, "gray");
            }
        };
        Taming.tameAnimalsAround = function (opts) {
            Orion.IgnoreReset();
            Orion.ClearJournal();
            var monstersAround = Orion.FindType("!0x0190|!0x0191", "-1", "ground", "nothuman|live|near", 22, "gray");
            while (monstersAround.length) {
                Orion.Ignore(monstersAround[0]);
                Scripts.Taming.taming(opts, monstersAround[0]);
                monstersAround = Orion.FindType("!0x0190|!0x0191", "-1", "ground", "nothuman|live|near", 22, "gray");
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
})(ColorEnum || (ColorEnum = {}));
var TargetEnum;
(function (TargetEnum) {
    TargetEnum["self"] = "self";
    TargetEnum["lastattack"] = "lastattack";
    TargetEnum["laststatus"] = "laststatus";
    TargetEnum["lasttarget"] = "lasttarget";
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
})(PotionsEnum || (PotionsEnum = {}));
var NecroScrollEnum;
(function (NecroScrollEnum) {
    NecroScrollEnum["vfp"] = "vfp";
    NecroScrollEnum["kalnox"] = "kalnox";
    NecroScrollEnum["haluze"] = "haluze";
})(NecroScrollEnum || (NecroScrollEnum = {}));
var TimersEnum;
(function (TimersEnum) {
    TimersEnum["drink"] = "drink";
    TimersEnum["gs"] = "gs";
    TimersEnum["hiding"] = "hiding";
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
