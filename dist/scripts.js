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
})(TargetEnum || (TargetEnum = {}));
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
})(ScrollEnum || (ScrollEnum = {}));
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
    PotionsEnum["gh"] = "gh";
    PotionsEnum["gs"] = "gs";
    PotionsEnum["gb"] = "gb";
    PotionsEnum["tr"] = "tr";
    PotionsEnum["gc"] = "gc";
    PotionsEnum["lc"] = "lc";
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
        pilesOfHides: {
            graphic: '0x1078',
            color: '0x0000'
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
            }
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
            alchemySelection: 'Invisibility'
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
                color: '0xFFFF'
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
function displayHidingInfo() {
    Orion.ClearJournal();
    Scripts.Utils.waitWhileSomethingInJournal(['You have hidden yourself well', 't seem to hide here']);
    if (Orion.InJournal('You have hidden yourself well')) {
        Orion.CharPrint(Player.Serial(), ColorEnum.green, '[ Hidden ]');
    }
    if (Orion.InJournal('t seem to hide here')) {
        Orion.CharPrint(Player.Serial(), ColorEnum.red, '[ FAILED ]');
    }
}
function version() {
    Orion.Print(-1, '+-------------');
    Orion.Print(-1, 'msviha/orionuo');
    Orion.Print(-1, 'version 0.1.2');
    Orion.Print(-1, '-------------+');
}
function Autostart() {
    version();
    var previousLastAttackSerial;
    var previousLastAttackHp;
    var previousPlayerHp;
    var updateRate = 500;
    Scripts.Dress.saveEquip();
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
        Orion.Wait(updateRate);
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
function bandageSelf(minimalCountForWarn) {
    if (minimalCountForWarn === void 0) { minimalCountForWarn = 10; }
    Scripts.Common.bandageSelf(minimalCountForWarn);
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
function friend() {
    Scripts.Targeting.addFriend();
}
function gmMortar(potionName) {
    Scripts.Potions.gmMortar(potionName);
}
function harp(target) {
    Scripts.Music.harp(target);
}
function hideAll() {
    Scripts.Common.hideAll();
}
function hiding() {
    Scripts.Common.hiding();
}
function inscription(circle, spell, quantity) {
    if (quantity === void 0) { quantity = 0; }
    Scripts.Spells.inscription(circle, spell, quantity);
}
function kill() {
    Scripts.PetCommander.kill();
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
function lute(target) {
    Scripts.Music.lute(target);
}
function make(count, objectAsString, setInputs) {
    if (setInputs === void 0) { setInputs = true; }
    Scripts.Crafting.make(count, objectAsString, setInputs);
}
function manualTarget() {
    Scripts.Targeting.manualTarget();
}
function mount() {
    Scripts.Mount.mountAndDismount();
}
function nbRune() {
    Scripts.Port.nbRune();
}
function nextWeapon(showName) {
    if (showName === void 0) { showName = false; }
    Scripts.Dress.nextWeapon(showName);
}
function poisonTrain(keepRunning) {
    if (keepRunning === void 0) { keepRunning = false; }
    keepRunning ? Scripts.Common.poisonTrainAuto() : Scripts.Common.poisonTrain();
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
function resetWeapons() {
    Scripts.Dress.resetWeaponsArray();
}
function saveEquip() {
    Scripts.Dress.saveEquip();
}
function summon(creature, target) {
    Scripts.Spells.summon(creature, target);
}
function taming(allAround) {
    if (allAround === void 0) { allAround = false; }
    allAround ? Scripts.Taming.tameAnimalsAround() : Scripts.Taming.taming();
}
function tamingTrain(robeOfDruids) {
    if (robeOfDruids === void 0) { robeOfDruids = true; }
    Scripts.Taming.trainOnAnimalsAround(robeOfDruids);
}
function targetNext(timeToStorePreviousTargets, additionalFlags, notoriety) {
    if (timeToStorePreviousTargets === void 0) { timeToStorePreviousTargets = 1500; }
    Scripts.Targeting.targetNext(false, timeToStorePreviousTargets, additionalFlags, notoriety);
}
function targetPrevious(timeToStorePreviousTargets, additionalFlags, notoriety) {
    if (timeToStorePreviousTargets === void 0) { timeToStorePreviousTargets = 1500; }
    Scripts.Targeting.targetNext(true, timeToStorePreviousTargets, additionalFlags, notoriety);
}
function tracking(who) {
    if (who === void 0) { who = 'Players'; }
    Scripts.Wip.Tracking(who);
}
function travelBook(selection) {
    if (selection === void 0) { selection = PortBookOptionsEnum.kop; }
    Scripts.Port.travelBook(selection);
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
function useKlamak(lvl, useAim, priorityList) {
    if (useAim === void 0) { useAim = false; }
    Scripts.Klamak.useKlamak(lvl, useAim, priorityList);
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
    for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
        var v = val_1[_i];
        success = success && typeof v === 'string';
    }
    return success;
}
function isIPotion(val) {
    return val && val.graphic && val.kad;
}
function parseParam(param) {
    if (param === 'true') {
        return true;
    }
    else if (param === 'false') {
        return false;
    }
    return param;
}
var Scripts;
(function (Scripts) {
    var Auto = (function () {
        function Auto() {
        }
        Auto.killObject = function (serialToKill, poisonTrain, waitUntilDead) {
            if (poisonTrain === void 0) { poisonTrain = false; }
            if (waitUntilDead === void 0) { waitUntilDead = true; }
            var enemy = Orion.FindObject(serialToKill);
            Orion.WalkTo(enemy.X(), enemy.Y(), enemy.Z(), 1);
            poisonTrain && Scripts.Common.poisonTrain(serialToKill);
            Orion.Wait(responseDelay);
            Orion.Attack(serialToKill);
            Orion.Wait(6000);
            if (enemy && waitUntilDead) {
                while (enemy && !enemy.Dead()) {
                    Orion.WalkTo(enemy.X(), enemy.Y(), enemy.Z(), 1);
                    Orion.Wait(2000);
                    enemy = Orion.FindObject(serialToKill);
                }
            }
        };
        Auto.healAndCureWhenHarving = function (dmgToStartHeal, fullHeal, castCure, drinkCure) {
            if (Player.Hits() > Player.MaxHits() - dmgToStartHeal) {
                return false;
            }
            var keepHealing = fullHeal;
            while (keepHealing || Player.Hits() <= Player.MaxHits() - dmgToStartHeal) {
                Scripts.Common.bandageSelf();
                keepHealing = fullHeal && Player.Hits() !== Player.MaxHits();
            }
            if (Player.Poisoned()) {
                if (castCure) {
                    Scripts.Spells.castUntilSuccess('Cure', TargetEnum.self, 2500);
                }
                else if (drinkCure) {
                    Scripts.Potions.drinkPotion(PotionsEnum.lc);
                }
            }
            return true;
        };
        Auto.afk = function (file, pattern, flags, repeatPeriod, duration) {
            if (file === void 0) { file = 'C:/critical.wav'; }
            if (pattern === void 0) { pattern = ''; }
            if (flags === void 0) { flags = 'mobile|item'; }
            if (repeatPeriod === void 0) { repeatPeriod = 1500; }
            if (duration === void 0) { duration = 15000; }
            Orion.ClearJournal();
            Orion.RemoveTimer('afk');
            var alarm = false;
            while (!Player.Dead() && Orion.Timer('afk') < duration) {
                if (Orion.InJournal(pattern, 'mobile|item')) {
                    alarm = true;
                    Orion.Timer('afk') === -1 && Orion.SetTimer('afk');
                }
                alarm && Orion.PlayWav(file);
                Orion.Wait(repeatPeriod);
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
        Common.hiding = function () {
            Orion.ClearJournal();
            Orion.Print(ColorEnum.none, 'Start Hiding');
            Orion.UseSkill('Hiding');
            Orion.Wait(100);
            if (Orion.InJournal('You must wait')) {
                return;
            }
            Scripts.Utils.resetTimer(TimersEnum.hiding);
            while (Orion.InJournal('preoccupied')) {
                Orion.ClearJournal();
                Orion.WarMode(true);
                Orion.Wait(100);
                Orion.Print(ColorEnum.none, 'preoccupied - trying to hide again');
                Orion.UseSkill('Hiding');
            }
            Orion.AddDisplayTimer(TimersEnum.hiding, 2000, 'AboveChar', 'bar', "Hiding", 0, 100, '0x100', 0, 'red');
            Orion.Exec('displayHidingInfo', true);
        };
        Common.bandageSelf = function (minimalCountToWarn, pathToNoBandagesWavFile) {
            if (minimalCountToWarn === void 0) { minimalCountToWarn = 10; }
            if (pathToNoBandagesWavFile === void 0) { pathToNoBandagesWavFile = 'C:/critical.wav'; }
            var bandagesSerials = Orion.FindType(gameObject.uncategorized.bandy.graphic);
            var count = Scripts.Utils.countItemsBySerials(bandagesSerials);
            if (!count) {
                Orion.PlayWav(pathToNoBandagesWavFile);
                Scripts.Utils.playerPrint('!! NEMAS BANDY !!', ColorEnum.red);
                return;
            }
            Orion.ClearJournal();
            Orion.BandageSelf();
            while (!Orion.InJournal('You put') && !Orion.InJournal('You apply') && !Orion.InJournal('Chces vytvorit')) {
                Orion.Wait(200);
            }
            count--;
            if (count <= minimalCountToWarn) {
                Scripts.Utils.playerPrint("posledni" + (count > 4 ? 'ch' : '') + " " + count + " band" + (count > 4 ? '' : count > 1 ? 'y' : 'a'), ColorEnum.red);
            }
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
        Common.trackingPvp = function () {
            Orion.WarMode(true);
            Orion.CancelWaitMenu();
            Orion.CloseMenu('all');
            Orion.WaitMenu('Tracking', 'Anything that moves');
            Orion.UseSkill('Tracking');
            Orion.ClearJournal();
            while (!(Orion.MenuCount() || Orion.InJournal('no signs'))) {
                Orion.Wait(50);
            }
            var menu = Orion.GetMenu('0');
            var shouldCloseMenu = true;
            for (var i = 0; i < menu.ItemsCount(); i++) {
                var graphic = menu.ItemGraphic(i);
                var name_1 = menu.ItemName(i);
                var list = trackingFilter[graphic];
                if (list && list.indexOf(name_1) === -1) {
                    shouldCloseMenu = false;
                    Scripts.Utils.playerPrint("[tracking]: " + name_1);
                }
            }
            shouldCloseMenu && menu.Close();
        };
        Common.webDestroyer = function () {
            var webs = Orion.FindType('0x0EE3|0x0EE4|0x0EE5|0x0EE6', '0x0000', 'ground', 'item', 1);
            Orion.Print(-1, JSON.stringify(webs));
            for (var _i = 0, webs_1 = webs; _i < webs_1.length; _i++) {
                var web = webs_1[_i];
                Orion.UseObject(web);
                Orion.Wait(100);
            }
        };
        Common.poisonTrain = function (serialToPoison) {
            if (!serialToPoison) {
                var mobiles = Orion.FindType('any', 'any', 'ground', 'fast|live|mobile', 1, NotorietyEnum.red + "|" + NotorietyEnum.gray);
                if (!mobiles.length) {
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
                var targets = Orion.FindType('any', 'any', 'ground', 'fast|live|mobile', 1, NotorietyEnum.red + "|" + NotorietyEnum.gray);
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
        return Common;
    }());
    Scripts.Common = Common;
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
                    count -= itemObject.make.outputCount || 1;
                    finishedCount++;
                    var item = Scripts.Utils.findFirstType(itemObject);
                    setInputs && Orion.MoveItem(item, 1, 'outputContainer');
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
            Orion.Print(-1, typeof count);
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
        return Crafting;
    }());
    Scripts.Crafting = Crafting;
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
                Orion.WalkTo(w.x, w.y, Player.Z());
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
        Klamak.useKlamak = function (lvl, useAim, priorityList) {
            if (useAim === void 0) { useAim = false; }
            if (priorityList === void 0) { priorityList = []; }
            var level = gameObject.klamak['lvl' + lvl];
            var findSerial = '';
            for (var _i = 0, priorityList_1 = priorityList; _i < priorityList_1.length; _i++) {
                var klamakName = priorityList_1[_i];
                for (var itemName in level) {
                    if (klamakName === itemName) {
                        var klamak = level[itemName];
                        var klamakSerials = Orion.FindType(klamak.graphic, klamak.color);
                        if (klamakSerials) {
                            findSerial = klamakSerials[0];
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
                    if (klamakSerials.length) {
                        findSerial = klamakSerials[0];
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
    var Lockpicking = (function () {
        function Lockpicking() {
        }
        Lockpicking.unlock = function (targetSerial) {
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
    var Loot = (function () {
        function Loot() {
        }
        Loot.harving = function (_a) {
            var cut = _a.cut, wayPoints = _a.wayPoints, enemiesTypesToHarv = _a.enemiesTypesToHarv, _b = _a.trapDelay, trapDelay = _b === void 0 ? 10000 : _b, _c = _a.dmgToStartHeal, dmgToStartHeal = _c === void 0 ? 40 : _c, _d = _a.fullHeal, fullHeal = _d === void 0 ? false : _d, _e = _a.castCure, castCure = _e === void 0 ? false : _e, _f = _a.drinkCure, drinkCure = _f === void 0 ? false : _f, _g = _a.castReactive, castReactive = _g === void 0 ? false : _g, _h = _a.weapon, weapon = _h === void 0 ? true : _h, _j = _a.poisonTrain, poisonTrain = _j === void 0 ? false : _j;
            Orion.SetTimer('ReactiveArmorTimer');
            var currentWaypointIndex = 0;
            var lastAttack = undefined;
            var selection_1 = Scripts.Loot.addCutWeapon();
            Scripts.Utils.playerPrint('Target your loot bag');
            var selection_2 = Orion.WaitForAddObject('myLootBag', 60000);
            var selection_3 = 1;
            if (weapon) {
                Scripts.Utils.playerPrint('Target your weapon');
                selection_3 = Orion.WaitForAddObject('fightWeapon', 60000);
            }
            if (1 !== selection_1 || 1 !== selection_2 || 1 !== selection_3) {
                Scripts.Utils.log('All selections must be game objects', ColorEnum.red);
                return;
            }
            while (true) {
                lastAttack = Orion.ClientLastAttack();
                if (castReactive && Orion.Timer('ReactiveArmorTimer') > 300000) {
                    Scripts.Utils.resetTimer('ReactiveArmorTimer');
                    Scripts.Spells.castUntilSuccess('Reactive Armor', TargetEnum.self, 2500);
                }
                Scripts.Loot.lootCorpsesAround(cut, weapon);
                Scripts.Auto.healAndCureWhenHarving(dmgToStartHeal, fullHeal, castCure, drinkCure);
                var enemySerialsAround = Orion.FindType(enemiesTypesToHarv.join('|'), '-1', 'ground', 'fast', 4, 'red');
                currentWaypointIndex = Scripts.Loot.moveToNextWaypointWhenNeeded(wayPoints, enemySerialsAround, currentWaypointIndex, trapDelay);
                if (!enemySerialsAround.length || (lastAttack && enemySerialsAround.indexOf(lastAttack) > -1)) {
                    return;
                }
                var serialToAttack = enemySerialsAround[0];
                Scripts.Auto.killObject(serialToAttack, poisonTrain, false);
                Orion.Wait(500);
            }
        };
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
        Loot.moveToNextWaypointWhenNeeded = function (wayPoints, enemySerialsAround, currentWaypointIndex, trapDelay) {
            if (wayPoints && enemySerialsAround) {
                if (!enemySerialsAround.length) {
                    var w = wayPoints[currentWaypointIndex];
                    Orion.WalkTo(w.x, w.y, Player.Z(), 0);
                    if (w.trap) {
                        Orion.Wait(trapDelay);
                    }
                    return currentWaypointIndex + 1 === wayPoints.length ? 0 : currentWaypointIndex + 1;
                }
                else {
                    return currentWaypointIndex;
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
            var cutWeapon = Orion.FindObject('cutWeapon');
            if (!cutWeapon) {
                var nbDagger = gameObject.uncategorized.nbDagger;
                var nbDaggerSerials = Orion.FindType(nbDagger.graphic, nbDagger.color);
                if (!nbDaggerSerials.length) {
                    var selection = Orion.WaitForAddObject('cutWeapon');
                    Scripts.Utils.playerPrint('target your cutWeapon');
                    if (selection !== 1) {
                        Orion.RemoveObject('cutWeapon');
                        throw 'e';
                    }
                    cutWeapon = Orion.FindObject('cutWeapon');
                }
                else {
                    cutWeapon = Orion.FindObject(nbDaggerSerials[0]);
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
    var Mining = (function () {
        function Mining() {
        }
        Mining.mining = function (kopAndTreasure, skladacka, fullMine) {
            if (kopAndTreasure === void 0) { kopAndTreasure = false; }
            if (skladacka === void 0) { skladacka = true; }
            if (fullMine === void 0) { fullMine = false; }
            Orion.ClearJournal();
            var visitedCoordinates = [];
            Scripts.Mining.saveCurrentPositionToArray(visitedCoordinates);
            Scripts.Mining.recurseMine(DirectionEnum.East, visitedCoordinates, kopAndTreasure, skladacka, fullMine);
        };
        Mining.miningPort = function (runes) {
            var source = 'miningTreasure';
            for (var _i = 0, runes_1 = runes; _i < runes_1.length; _i++) {
                var rune = runes_1[_i];
                Orion.OpenContainer(source);
                Orion.Wait(500);
                var r = gameObject.regy;
                Scripts.Utils.refill(r.bm, source, 20);
                Scripts.Utils.refill(r.bp, source, 20);
                Scripts.Utils.refill(r.mr, source, 20);
                var runeMyGameObject = gameObject.uncategorized.recallRune;
                var runeGameObject = Orion.FindObject(rune);
                if (runeGameObject.Color() !== runeMyGameObject.color) {
                    Scripts.Utils.log('ROZBITA RUNA', ColorEnum.red);
                    continue;
                }
                Scripts.Mining.takeRunePortAndReturnItBack(rune, source);
                Scripts.Mining.mining(true);
                Scripts.Mining.portAndMoveToTreasure();
            }
        };
        Mining.portAndMoveToTreasure = function () {
            var treasure = 'miningTreasure';
            Orion.ClearJournal();
            Scripts.Port.nbRune(true);
            Scripts.Utils.walkToSerial(treasure);
            Scripts.Utils.moveObjectToContainer(gameObject.resources.ingots, 'backpack', treasure);
            Scripts.Utils.moveObjectToContainer(gameObject.resources.ore, 'backpack', treasure);
            Scripts.Utils.moveObjectToContainer(gameObject.resources.stones, 'backpack', treasure);
            Orion.ClearJournal();
        };
        Mining.takeRunePortAndReturnItBack = function (runeSerial, sourceContainer) {
            Orion.MoveItem(runeSerial);
            Orion.Wait(responseDelay);
            Scripts.Port.rune(runeSerial);
            Orion.Wait(1000);
            Orion.MoveItem(runeSerial, undefined, sourceContainer);
            var teleported = Scripts.Utils.waitWhileSomethingInJournal(['been teleported'], 40000);
            if (!teleported) {
                Scripts.Utils.refill(gameObject.regy.bm, sourceContainer, 20);
                Scripts.Utils.refill(gameObject.regy.bp, sourceContainer, 20);
                Scripts.Utils.refill(gameObject.regy.mr, sourceContainer, 20);
                Scripts.Mining.takeRunePortAndReturnItBack(runeSerial, sourceContainer);
            }
        };
        Mining.saveCurrentPositionToArray = function (arr) {
            arr.push({ x: Player.X(), y: Player.Y() });
        };
        Mining.recurseMine = function (comesFrom, visitedCoordinates, kopAndTreasure, skladacka, fullMine) {
            if (kopAndTreasure === void 0) { kopAndTreasure = false; }
            if (skladacka === void 0) { skladacka = true; }
            if (fullMine === void 0) { fullMine = false; }
            var lastVisitedPosition = visitedCoordinates.length ? visitedCoordinates[visitedCoordinates.length - 1] : undefined;
            var next = Scripts.Mining.getNextDirectionsArray(comesFrom);
            Scripts.Mining.pickOresAround(1);
            var n = Player.Name();
            var isRock = Scripts.Mining.rockMine(kopAndTreasure, skladacka, fullMine) && (!n.indexOf('Wil') || !n.indexOf('Urc'));
            if (Player.Dead()) {
                throw 'dead';
            }
            if (isRock) {
                if (Scripts.Mining.moveDirection(next[0], visitedCoordinates)) {
                    Scripts.Mining.recurseMine(next[2], visitedCoordinates, kopAndTreasure, skladacka, fullMine);
                }
                if (Scripts.Mining.moveDirection(next[1], visitedCoordinates)) {
                    Scripts.Mining.recurseMine(next[3], visitedCoordinates, kopAndTreasure, skladacka, fullMine);
                }
                if (Scripts.Mining.moveDirection(next[2], visitedCoordinates)) {
                    Scripts.Mining.recurseMine(next[0], visitedCoordinates, kopAndTreasure, skladacka, fullMine);
                }
            }
            Scripts.Utils.log("back", ColorEnum.red);
            if (!lastVisitedPosition) {
                throw 'error';
            }
            Orion.WalkTo(lastVisitedPosition.x, lastVisitedPosition.y, Player.Z(), 0, undefined, undefined, 1500);
            Scripts.Mining.pickOresAround(1);
        };
        Mining.moveDirection = function (direction, visitedPositions) {
            var nextCoordinates = Scripts.Utils.getCoordinatesForDirection(direction);
            var wasVisited = Scripts.Mining.wasVisited(nextCoordinates, visitedPositions);
            if (wasVisited) {
                return false;
            }
            Scripts.Utils.worldSaveCheckWait();
            var isSuccess = Orion.WalkTo(nextCoordinates.x, nextCoordinates.y, Player.Z(), 0, undefined, undefined, 500);
            if (isSuccess) {
                Scripts.Mining.saveCurrentPositionToArray(visitedPositions);
            }
            return isSuccess;
        };
        Mining.wasVisited = function (currentPosition, visitedPositions) {
            for (var _i = 0, visitedPositions_1 = visitedPositions; _i < visitedPositions_1.length; _i++) {
                var visited = visitedPositions_1[_i];
                if (visited.x === currentPosition.x && visited.y === currentPosition.y) {
                    return true;
                }
            }
            return false;
        };
        Mining.getNextDirectionsArray = function (comesFrom) {
            switch (comesFrom) {
                case DirectionEnum.West:
                    return [DirectionEnum.North, DirectionEnum.East, DirectionEnum.South, DirectionEnum.West];
                case DirectionEnum.North:
                    return [DirectionEnum.East, DirectionEnum.South, DirectionEnum.West, DirectionEnum.North];
                case DirectionEnum.East:
                    return [DirectionEnum.South, DirectionEnum.West, DirectionEnum.North, DirectionEnum.East];
                default:
                    return [DirectionEnum.West, DirectionEnum.North, DirectionEnum.East, DirectionEnum.South];
            }
        };
        Mining.rockMine = function (kopAndTreasure, skladacka, fullMine) {
            if (kopAndTreasure === void 0) { kopAndTreasure = false; }
            if (skladacka === void 0) { skladacka = true; }
            if (fullMine === void 0) { fullMine = false; }
            Orion.ClearJournal(undefined, 'sys');
            var drop = false;
            while (!Player.Dead() && (!drop || fullMine)) {
                Orion.ClearJournal(undefined, 'sys');
                Orion.WaitTargetTile('any');
                Orion.UseType('0x0E85');
                Scripts.Utils.waitWhileSomethingInJournal([
                    'You put the',
                    'There is no ore',
                    'Try mining',
                    'You loosen',
                    'You destroy'
                ]);
                !skladacka && Scripts.Utils.waitWhileSomethingInJournal(['akce skoncila']);
                if (Orion.InJournal('Try mining')) {
                    return false;
                }
                if (Orion.InJournal('You loosen')) {
                    continue;
                }
                if (Orion.InJournal('There is no ore')) {
                    return true;
                }
                drop = Scripts.Mining.dropUnwantedOre();
                if (!drop && kopAndTreasure && Orion.InJournal('is too heavy')) {
                    Scripts.Mining.markKopTreasureKop();
                    Scripts.Mining.pickOresAround(0);
                }
                Scripts.Mining.smeltInNearForge();
            }
            return true;
        };
        Mining.smeltInNearForge = function () {
            var colors = Scripts.Mining.getWantedOreColorsFilter();
            var oresInBackpack = Orion.FindType('0x19B7|0x19BA|0x19B8|0x19B9', colors, 'backpack');
            if (!oresInBackpack.length) {
                return;
            }
            Orion.ClearJournal();
            Orion.Wait(500);
            var success = false;
            var reachableForges = Orion.FindType('0x0FB1', '0x0000', 'ground', 'item', 3, '-1', true);
            if (reachableForges.length) {
                for (var _i = 0, oresInBackpack_1 = oresInBackpack; _i < oresInBackpack_1.length; _i++) {
                    var ore = oresInBackpack_1[_i];
                    success = Scripts.Mining.smelt(ore, reachableForges[0]);
                    if (!success) {
                        break;
                    }
                }
            }
            var forges = Orion.FindType('0x0FB1', '0x0000', 'ground', 'item', 8, '-1', true);
            if (!(!success && forges.length && Player.Weight() > Player.MaxWeight() - 150)) {
                return;
            }
            var playerPosition = {
                x: Player.X(),
                y: Player.Y(),
                z: Player.Z()
            };
            var forge = Orion.FindObject(forges[0]);
            for (var _a = 0, oresInBackpack_2 = oresInBackpack; _a < oresInBackpack_2.length; _a++) {
                var ore = oresInBackpack_2[_a];
                reachableForges = Orion.FindType('0x0FB1', '0x0000', 'ground', 'item', 1, '-1', true);
                if (!reachableForges.length) {
                    Orion.WalkTo(forge.X(), forge.Y(), forge.Z(), 1, undefined, undefined, 5000);
                }
                reachableForges = Orion.FindType('0x0FB1', '0x0000', 'ground', 'item', 1, '-1', true);
                var success_1 = reachableForges.length && Scripts.Mining.smelt(ore, forge.Serial());
                if (!success_1) {
                    break;
                }
            }
            Orion.WalkTo(playerPosition.x, playerPosition.y, playerPosition.z, 0);
        };
        Mining.smelt = function (oreSerial, forgeSerial) {
            Orion.WaitTargetObject(oreSerial);
            Orion.UseObject(forgeSerial);
            Orion.Wait(responseDelay);
            if (Orion.InJournal('reach that|far')) {
                return false;
            }
            return true;
        };
        Mining.markKopTreasureKop = function () {
            var recall = gameObject.scrolls.standard.recall;
            Scripts.Port.travelBook(PortBookOptionsEnum.mark);
            Orion.Wait(2000);
            Scripts.Mining.portAndMoveToTreasure();
            Orion.OpenContainer('miningTreasure');
            Orion.Wait(500);
            Scripts.Utils.refill(recall, 'miningTreasure', 2);
            Orion.Wait(500);
            Scripts.Port.travelBook(PortBookOptionsEnum.nabiti);
            Orion.Wait(500);
            Scripts.Port.travelBook(PortBookOptionsEnum.kop, true);
            Orion.Wait(500);
        };
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
                    for (var _b = 0, serials_2 = serials; _b < serials_2.length; _b++) {
                        var serial = serials_2[_b];
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
    var Mount = (function () {
        function Mount() {
        }
        Mount.mountAndDismount = function () {
            if (Orion.ObjAtLayer('Mount')) {
                Orion.UseObject('self');
            }
            else if (!Orion.FindObject('myMount')) {
                this.addMount();
            }
            else {
                Orion.UseObject('myMount');
            }
            Orion.Wait(50);
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
    var PetCommander = (function () {
        function PetCommander() {
        }
        PetCommander.kill = function () {
            !Orion.GetGlobal('myMonstersKill') && Orion.SetGlobal('myMonstersKill', '[]');
            var globalMyMonsters = JSON.parse(Orion.GetGlobal('myMonstersKill'));
            var namesPool = ['Andres', 'Blanca', 'Carlos', 'Dolores', 'Enrique', 'Felicia', 'Guillermo', 'Hilda', 'Ignacio', 'Jimena', 'Kevin', 'Linda', 'Marty', 'Nora', 'Olaf', 'Damrey',
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
            var monstersAlive = Orion.FindType("!0x0190|!0x0191", "-1", "ground", "fast|live", 13, "blue|gray|criminal|orange|red");
            var myMonsters = [];
            while (monstersAlive.length) {
                var monsterSerial = monstersAlive[0];
                var isMyMonster = Orion.FindObject(monsterSerial).CanChangeName();
                if (isMyMonster) {
                    var name_2 = '';
                    var isAlreadyRenamed = false;
                    for (var _i = 0, globalMyMonsters_1 = globalMyMonsters; _i < globalMyMonsters_1.length; _i++) {
                        var m = globalMyMonsters_1[_i];
                        isAlreadyRenamed = m.serial === monsterSerial;
                        if (isAlreadyRenamed) {
                            name_2 = m.name;
                            break;
                        }
                    }
                    if (!isAlreadyRenamed) {
                        var random = Math.floor(Math.random() * (namesPool.length));
                        name_2 = namesPool[random];
                        Orion.RenameMount(monsterSerial, name_2);
                        Orion.Wait(50);
                        namesPool.splice(random, 1);
                    }
                    myMonsters.push({ serial: monsterSerial, name: name_2 });
                    Orion.WaitTargetObject(Orion.ClientLastAttack());
                    Orion.Say(name_2 + " kill");
                    Orion.WaitForTarget(1000);
                    Scripts.Utils.waitWhileTargeting();
                }
                Orion.Ignore(monsterSerial);
                monstersAlive = Orion.FindType("!0x0190|!0x0191", "-1", "ground", "near|live", 13, "blue|gray|criminal|orange|red");
            }
            Orion.SetGlobal('myMonstersKill', JSON.stringify(myMonsters));
            Orion.IgnoreReset();
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
                var teleported = Scripts.Utils.waitWhileSomethingInJournal(['been teleported'], 40000);
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
                var teleported = Scripts.Utils.waitWhileSomethingInJournal(['been teleported'], 40000);
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
                var teleported = Scripts.Utils.waitWhileSomethingInJournal(['been teleported'], 40000);
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
                Scripts.Utils.log("Nemas kad s potionem", ColorEnum.red);
                throw 'Nemas kad s potionem';
            }
            return kad;
        };
        Potions.getMortar = function () {
            var mortars = Orion.FindType(gameObject.uncategorized.mortar.graphic, gameObject.uncategorized.mortar.color);
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
            Orion.ClearJournal();
            Orion.Wait(50);
            Orion.UseObject(potion);
            Orion.Wait(responseDelay);
            if (Orion.InJournal('You put the empty bottless')) {
                var drinkTimer = 17500;
                var gsTimer = 130000;
                displayTimers && Orion.AddDisplayTimer(TimersEnum.drink, drinkTimer, 'LeftTop', 'Line|Bar', 'Drink', 0, 0, '0x88B', 0, '0x88B');
                Scripts.Utils.resetTimer(TimersEnum.drink);
                var potionsCount = Orion.Count(p.graphic, p.color);
                Scripts.Utils.playerPrint("[ " + potionName + " " + potionsCount + " ]", potionsCount === 0 ? ColorEnum.red : ColorEnum.green);
                if (potionName === PotionsEnum.gs) {
                    displayTimers && Orion.AddDisplayTimer(TimersEnum.gs, gsTimer, 'LeftTop', 'Line|Bar', 'GS', 0, 55, '0x88B', 0, '0x88B');
                    Scripts.Utils.resetTimer(TimersEnum.gs);
                }
                displayInfo && Orion.Exec('displayDrinkInfo', false, [potionName.toString()]);
            }
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
                var kadePrevious = Orion.FindType(gameObject.uncategorized.emptyKad.graphic);
                Scripts.Utils.selectMenu('Vyber typ potionu', [p.gmMortarSelection]);
                Orion.UseObject('gmMortar');
                Scripts.Utils.waitWhileSomethingInJournal(['You vylil', 'Musis mit']);
                if (Orion.InJournal('Musis mit')) {
                    Scripts.Utils.log('Dosly regy', ColorEnum.red);
                    return { value: void 0 };
                }
                var kadeNew = Orion.FindType(gameObject.uncategorized.emptyKad.graphic);
                var michnutaKadSerial = kadeNew.filter(function (i) { return kadePrevious.indexOf(i) === -1; })[0];
                Orion.ClearJournal();
                Orion.WaitTargetObject(cilovaKadSerial);
                Orion.UseObject(michnutaKadSerial);
                Scripts.Utils.waitWhileSomethingInJournal(['Prelil jsi']);
                Orion.ClearJournal();
                var emptyBottle = Scripts.Potions.getEmptyBottle();
                Orion.WaitTargetObject(emptyBottle);
                Orion.UseObject(michnutaKadSerial);
                Scripts.Utils.waitWhileSomethingInJournal(['You put']);
                Orion.ClearJournal();
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
                Orion.ClearJournal();
                Scripts.Utils.selectMenu('Vyber typ potionu', [p.alchemySelection]);
                Orion.UseObject(mortar);
                Scripts.Utils.waitWhileSomethingInJournal(['You completed', 'You toss', 'Nemas dostatecny']);
                if (Orion.InJournal('Nemas dostatecny')) {
                    Scripts.Utils.log('Dosly regy', ColorEnum.red);
                    return;
                }
                if (Orion.InJournal('You toss')) {
                    continue;
                }
                Orion.ClearJournal();
                Orion.UseObject(mortar);
                Scripts.Utils.waitWhileSomethingInJournal(['You pour']);
                Orion.ClearJournal();
                var potion = Scripts.Utils.findFirstType(p);
                var kad = Scripts.Potions.getKadForPotion(p);
                Orion.WaitTargetObject(potion);
                Orion.UseObject(kad);
                Scripts.Utils.waitWhileSomethingInJournal(['You put']);
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
        Refill.manager = function (stuff, containerPathsToSearch) {
            var canTakeFromBank = Scripts.Common.openBank();
            for (var _i = 0, stuff_1 = stuff; _i < stuff_1.length; _i++) {
                var i = stuff_1[_i];
                Scripts.Refill.universalRefill(i.item, i.total, canTakeFromBank, containerPathsToSearch);
                Scripts.Clean.cleanObjectInBag(Scripts.Utils.parseObject(i.item));
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
                    var items = Orion.FindType(itemToFind.graphic, itemToFind.color || '0xFFFF', lastContainerSerial, 'item');
                    items.length && (itemSerial = items[0]);
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
                    var items_1 = Orion.FindType(itemToFind.graphic, itemToFind.color || '0xFFFF', Player.BankSerial(), 'item');
                    items_1.length && (itemSerial = items_1[0]);
                }
            }
            if (itemSerial) {
                if (isIPotion(item)) {
                    Orion.Print(-1, JSON.stringify(item));
                    var eb = gameObject.uncategorized.emptyBottles;
                    Orion.Print(-1, lastContainerSerial === itemSerial ? 'ground' : lastContainerSerial);
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
        Spells.inscription = function (circle, spell, quantity) {
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
        return Spells;
    }());
    Scripts.Spells = Spells;
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
        Taming.waitOnTaming = function (animalSerial) {
            var animal = Orion.FindObject(animalSerial);
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
                Orion.WalkTo(animal.X(), animal.Y(), animal.Z(), 1);
            }
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
        Taming.tameAnimalsAround = function () {
            Orion.IgnoreReset();
            Orion.ClearJournal();
            var monstersAround = Orion.FindType("!0x0190|!0x0191", "-1", "ground", "nothuman|live|near", 22, "gray");
            while (monstersAround.length) {
                Orion.Ignore(monstersAround[0]);
                Scripts.Taming.taming(monstersAround[0]);
                monstersAround = Orion.FindType("!0x0190|!0x0191", "-1", "ground", "nothuman|live|near", 22, "gray");
            }
        };
        Taming.useShrinkKad = function () {
            var kad = gameObject.potions.shrink.kad;
            Orion.UseType(kad.graphic, kad.color);
        };
        Taming.taming = function (animalSerial) {
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
                var target = Orion.FindObject('tamingTarget');
                Orion.WaitTargetObject('tamingTarget');
                Orion.UseObject(loadedStaffSerial);
                Scripts.Taming.waitOnTaming('tamingTarget');
                if (Orion.InJournal('Too far|Jsi prilis vzdalen|Jsi moc daleko')) {
                    Orion.WalkTo(target.X(), target.Y(), target.Z(), 1);
                }
                if (Orion.InJournal('Not tamable|nelze ochocit|You are not able to tame this animal')) {
                    Scripts.Utils.playerPrint('Na toto zviratko nemas', ColorEnum.red);
                    break;
                }
                if (Orion.InJournal('byl tamnut')) {
                    var groundItemsSerials = Orion.FindType('any', 'any', 'ground', 'item', 3);
                    for (var _i = 0, groundItemsSerials_1 = groundItemsSerials; _i < groundItemsSerials_1.length; _i++) {
                        var g = groundItemsSerials_1[_i];
                        Orion.MoveItem(g);
                    }
                    tamnuto = true;
                }
                Orion.ClearJournal();
            }
        };
        return Taming;
    }());
    Scripts.Taming = Taming;
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
        Targeting.targetNext = function (reverse, timeToStorePreviousTargets, additionalFlags, notoriety) {
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
                Scripts.Targeting.highlightEnemy(enemySerial, enemy);
            }
            else {
                var enemyNameFromStore = store[currentIndex].name;
                Scripts.Utils.playerPrint("[" + enemyNameFromStore + "] out of distance", ColorEnum.red);
            }
        };
        Targeting.manualTarget = function () {
            var selection = Orion.WaitForAddObject('manualTargetEnemy');
            Scripts.Utils.waitWhileTargeting();
            if (selection !== 1) {
                return;
            }
            var enemy = Orion.FindObject('manualTargetEnemy');
            if (enemy && enemy.Mobile() && !enemy.Dead()) {
                Scripts.Targeting.highlightEnemy('manualTargetEnemy', enemy);
            }
        };
        Targeting.highlightEnemy = function (enemySerial, enemy) {
            var notoColor = Scripts.Wip.getColorByNotoriety(enemy.Notoriety());
            Scripts.Utils.playerPrint("[" + (enemy.Name() || 'target') + "]: " + enemy.Hits() + "/" + enemy.MaxHits(), notoColor);
            Orion.CharPrint(enemySerial, notoColor, "[" + (enemy.Name() || 'target') + "]: " + enemy.Hits() + "/" + enemy.MaxHits());
            Scripts.Utils.printColoredHpBar(enemySerial, enemy.Hits() / enemy.MaxHits() * 100);
            Scripts.Utils.updateCurrentStatusBar(enemySerial);
            Orion.Attack(enemySerial);
            Orion.WarMode(false);
            Orion.WarMode(true);
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
        };
        Utils.getObjSerials = function (obj, container) {
            if (container === void 0) { container = 'backpack'; }
            return Orion.FindType(obj.graphic, obj.color || '0xFFFF', container);
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
                    Orion.Wait(responseDelay);
                    if (quantity === 1 && Orion.InJournal('too heavy')) {
                        Orion.MoveItem(item, 2, targetContainerId);
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
        Utils.waitWhileSomethingInJournal = function (messages, wait) {
            var keepWait = true;
            while (!Orion.InJournal(messages.join('|')) && keepWait && !Player.Dead()) {
                Orion.Wait(50);
                if (wait) {
                    wait -= 50;
                    keepWait = wait > 0;
                }
            }
            return keepWait;
        };
        Utils.worldSaveCheckWait = function () {
            if (Orion.InJournal("World save has been")) {
                Orion.Wait(25000);
                Orion.ClearJournal(undefined, 'sys');
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
        Utils.updateCurrentStatusBar = function (newSerial) {
            var currentStatusBarSerial = Orion.GetGlobal('currentStatusBarSerial');
            currentStatusBarSerial && Orion.CloseStatusbar(currentStatusBarSerial);
            Orion.SetGlobal('currentStatusBarSerial', newSerial);
            Orion.ShowStatusbar(newSerial, 20, 20);
        };
        Utils.determineHpColor = function (percent) {
            var c = Math.ceil(percent * 3 / 100);
            return c === 1 ? ColorEnum.red : c === 2 ? ColorEnum.orange : ColorEnum.green;
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
            for (var _i = 0, val_2 = val; _i < val_2.length; _i++) {
                var o = val_2[_i];
                var oSerials = Orion.FindType(o.graphic, o.color);
                for (var _a = 0, oSerials_1 = oSerials; _a < oSerials_1.length; _a++) {
                    var s = oSerials_1[_a];
                    serials.push(s);
                }
            }
            if (!serials.length) {
                for (var _b = 0, val_3 = val; _b < val_3.length; _b++) {
                    var o = val_3[_b];
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
            for (var _i = 0, serials_3 = serials; _i < serials_3.length; _i++) {
                var s = serials_3[_i];
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
        return Utils;
    }());
    Scripts.Utils = Utils;
})(Scripts || (Scripts = {}));
var Scripts;
(function (Scripts) {
    var Wip = (function () {
        function Wip() {
        }
        Wip.Tracking = function (who) {
            if (who === void 0) { who = 'Players'; }
            Orion.CancelWaitMenu();
            Orion.WaitMenu('Tracking', who);
            Orion.UseSkill('Tracking');
        };
        Wip.MassMove = function () {
            Scripts.Utils.log('MASSMOVE What?', ColorEnum.none);
            Orion.AddObject('whatToMove');
            Scripts.Utils.waitWhileTargeting();
            var item = Orion.GetSerial('whatToMove');
            var itemObject = Orion.FindObject(item);
            var graphic = itemObject.Graphic();
            var color = itemObject.Color();
            var container = itemObject.Container();
            var myDefinition = Scripts.Utils.findMyDefinitionForGameObject(itemObject);
            var destinationX = (myDefinition === null || myDefinition === void 0 ? void 0 : myDefinition.bag) ? myDefinition.bag.x : itemObject.X();
            var destinationY = (myDefinition === null || myDefinition === void 0 ? void 0 : myDefinition.bag) ? myDefinition.bag.y : itemObject.Y();
            Scripts.Utils.log('Where?', ColorEnum.none);
            Orion.AddObject('whereToMove');
            Scripts.Utils.waitWhileTargeting();
            var destination = Orion.GetSerial('whereToMove');
            var itemIDArr = Orion.FindType(graphic, color, container, undefined, undefined, undefined, false);
            Scripts.Utils.log(itemIDArr.length.toString(), ColorEnum.none);
            for (var i = 0; i < itemIDArr.length; i++) {
                Orion.MoveItem(itemIDArr[i], 0, destination, destinationX, destinationY);
                destinationX += 3;
                Orion.Wait(300);
            }
        };
        Wip.getColorByNotoriety = function (notoriety) {
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
        return Wip;
    }());
    Scripts.Wip = Wip;
})(Scripts || (Scripts = {}));
