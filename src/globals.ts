const responseDelay = 350;
const gameObject:any = {
    uncategorized: {
        emptyBottles: {
            graphic: '0x0F0E',
            color: '0x0000'
        },
        emptyKad: {
            graphic: '0x1843',
            color: '0x0000'
        },
        bandy: {
            graphic: '0x0E21',
            color: '0x0000',
            bag: {
                x: 123,
                y: 20
            }
        },
        krvavaBanda1: {
            graphic: '0x0E22',
            color: '0x0000'
        },
        krvavaBanda2: {
            graphic: '0x0E20',
            color: '0x0000'
        },
        salat: {
            graphic: '0x09EC',
            color: '0x06AB'
        },
        nbRuna: {
            graphic: '0x1F14',
            color: '0x0B1D'
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
            color:  '0x0B80',
            bag: {
                x: 150,
                y: 30
            }
        },
        mortar: {
            graphic: '0x0E9B',
            color:  '0x0000',
            bag: {
                x: 116,
                y: 24
            }
        },
        lockpicks: {
            graphic: '0x14FB',
            color: '0x0000'
        }
    },
    tools: {
        saw: {
            graphic: '0x1035',
            color: '0x0000'
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
        furs: {
            graphic: '0x11FA',
            color: '0x0000'
        },
        ore: {
            anyOre: {
                graphic: '0x19B9'
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
            starSapphire: {
                graphic: '0x0F0F',
                color: '0x0000'
            },
            amethyst: {
                graphic: '0x0F16',
                color: '0x0000'
            },
            citrines: {
                graphic: '0x0F15',
                color: '0x0000'
            },
            diamonds: {
                graphic: '0x0F26',
                color: '0x0000'
            }
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
                            resources: [{item: 'gameObject.resources.logs', count: 2}]
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
                            resources: [{item: 'gameObject.resources.logs', count: 2}],
                            crafting: [{item: 'gameObject.crafting.tinkering.containers.kadNaPotiony', count: 20}]
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
                            resources: [{item: 'gameObject.resources.logs', count: 1}],
                            crafting: [{item: 'gameObject.crafting.carpentry.miscellaneous.boards', count: 2}]
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
                            resources: [{item: 'gameObject.resources.logs', count: 3}],
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
                            resources: [{item: 'gameObject.resources.logs', count: 1}],
                            crafting: [
                                {item: 'gameObject.crafting.carpentry.containersAndParts.barrelLid', count: 2},
                                {item: 'gameObject.crafting.carpentry.containersAndParts.barrelStaves', count: 2}
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
                springs: {
                    graphic: '0x105D',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [{item: 'gameObject.resources.ingots.iron', count: 1}]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Parts', 'Springs']
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
                                {item: 'gameObject.resources.ingots.copper', count: 1},
                                {item: 'gameObject.resources.ingots.iron', count: 1}
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
                                {item: 'gameObject.resources.ingots.rose', count: 1},
                                {item: 'gameObject.resources.ingots.iron', count: 1}
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Rose Wire']
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
                                {item: 'gameObject.resources.ingots.shadow', count: 1},
                                {item: 'gameObject.resources.ingots.iron', count: 1}
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
                                {item: 'gameObject.resources.ingots.blood', count: 1},
                                {item: 'gameObject.resources.ingots.iron', count: 1}
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
                                {item: 'gameObject.resources.ingots.black', count: 1},
                                {item: 'gameObject.resources.ingots.iron', count: 1}
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
                                {item: 'gameObject.resources.ingots.mytheril', count: 1},
                                {item: 'gameObject.resources.ingots.iron', count: 1}
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
                                {item: 'gameObject.resources.logs', count: 1},
                                {item: 'gameObject.resources.ore.anyOre', count: 5}
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
                                {item: 'gameObject.resources.logs', count: 1},
                                {item: 'gameObject.resources.ore.iron', count: 1},
                                {item: 'gameObject.resources.ingots.bronze', count: 1},
                                {item: 'gameObject.resources.ingots.iron', count: 1}
                            ],
                            crafting: [
                                {item: 'gameObject.crafting.carpentry.containersAndParts.formaNaLahve', count: 1}
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Kad na potiony']
                        }
                    }
                },
                goldenBox: {
                    graphic: '0x0E80',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [
                                {item: 'gameObject.resources.logs', count: 5},
                                {item: 'gameObject.resources.ingots.gold', count: 5},
                                {item: 'gameObject.resources.ingots.iron', count: 1}
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Golden Box (W)']
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
                                {item: 'gameObject.resources.logs', count: 5},
                                {item: 'gameObject.resources.furs', count: 5}
                            ],
                            crafting: [
                                {item: 'gameObject.crafting.tinkering.containers.goldenBox', count: 1}
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Animal Box']
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
                                {item: 'gameObject.resources.logs', count: 5},
                                {item: 'gameObject.resources.furs', count: 5}
                            ],
                            crafting: [
                                {item: 'gameObject.crafting.tinkering.containers.animalBox', count: 1}
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Univerzal Animal Box']
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
                                {item: 'gameObject.resources.ingots.gold', count: 1},
                                {item: 'gameObject.resources.ingots.iron', count: 1},
                                {item: 'gameObject.resources.stones.pieceOfAmber', count: 1},
                                {item: 'gameObject.resources.stones.starSapphire', count: 3}
                            ],
                            crafting: [
                                {item: 'gameObject.crafting.tinkering.parts.springs', count: 2},
                                {item: 'gameObject.crafting.tinkering.wires.copper', count: 5}
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
                                {item: 'gameObject.resources.ingots.gold', count: 2},
                                {item: 'gameObject.resources.stones.amethyst', count: 2}
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
                                {item: 'gameObject.resources.ingots.gold', count: 3},
                                {item: 'gameObject.resources.stones.citrines', count: 3}
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
                                {item: 'gameObject.resources.ingots.gold', count: 5},
                                {item: 'gameObject.resources.stones.diamonds', count: 5}
                            ]
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Special Items', 'Recharge Crystal +5']
                        }
                    }
                }
            }
        }
    },
    potions: {
        tmr: {
            graphic: '0x0F09',
            color: '0x0003',
            bag: {
                x: 25,
                y: 5
            },
            kad: {
                graphic: '0x1843',
                color: '0x0003'
            },
            gmMortarSelection: 'Total Mana Refresh (612 Eyes of Newt nebo 306 Blue Eyes of Newt)',
            alchemySelection: 'Total Mana Refresh'
        },
        mr: {
            graphic: '0x0F09',
            color: '0x0005',
            kad: {
                graphic: '0x1843',
                color: '0x0005'
            },
            alchemySelection: 'Mana Refresh'
        },
        gh: {
            graphic: '0x0F0C',
            color: '0x0000',
            bag: {
                x: 25,
                y: 15
            },
            kad: {
                graphic: '0x1843',
                color: '0x08A7'
            },
            gmMortarSelection: 'Greater Heal (714 Ginsengs)',
            alchemySelection: 'Greater Heal'
        },
        gs: {
            graphic: '0x0F09',
            color: '0x0000',
            bag: {
                x: 25,
                y: 25
            },
            kad: {
                graphic: '0x1843',
                color: '0x0481'
            },
            gmMortarSelection: 'Greater Strength (612 Mandrake Roots)',
            alchemySelection: 'Greater Strength'
        },
        tr: {
            graphic: '0x0F0B',
            color: '0x0000',
            bag: {
                x: 80,
                y: 5
            },
            kad: {
                graphic: '0x1843',
                color: '0x014D'
            },
            gmMortarSelection: 'Total Refresh (510 Black Pearls)',
            alchemySelection: 'Total Refresh'
        },
        gc: {
            graphic: '0x0F07',
            color: '0x0000',
            bag: {
                x: 80,
                y: 15
            },
            kad: {
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
            graphic: '0x0F06',
            color: '0x0000',
            kad: {
                graphic: '0x1843',
                color: '0x03C4'
            },
            alchemySelection: 'Nightsight'
        },
        shrink: {
            graphic: '0x0F09',
            color: '0x045E',
            bag: {
                x: 80,
                y: 25
            },
            kad: {
                graphic: '0x1843',
                color: '0x0724'
            },
            gmMortarSelection: 'Shrink (306 Batwings)',
            alchemySelection: 'Shrink'
        },
        lavabomb: {
            graphic: '0x0F0D',
            color: '0x000E',
            kad: {
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
            }
        },
        necro: {
            vfp: {
                graphic: '0x0E35',
                color: '0x0070',
                minMana: 20
            },
            haluze: {
                graphic: '0x0E35',
                color: '0x0010'
            },
            kalnox: {
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

const trackingFilter:any = {
    // graphic co ti to bude trackovat
    // jmena ktera chces odfiltrovat dej do zavorky a oddel carkou
    "0x2106": [], // chlap
    "0x2107": [], // zenska
    "0x20F9": ['Imp'], // malej vamp
    "0x20D9": ['Gargoyle'], // velkej vamp
    "0x2100": [] // ghost
};
