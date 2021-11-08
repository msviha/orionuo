/**
 * @internal
 */
const responseDelay = 350;

const gameObject: any = {
    uncategorized: {
        atlas: {
            graphic: '0x0FBE',
            color: '0x0B98',
        },
        mapa: {
            graphic: '0x14EB',
            color: '0x0000',
        },
        emptyBottles: {
            name: 'empty bottles',
            graphic: '0x0F0E',
            color: '0x0000',
        },
        emptyKad: {
            graphic: '0x1843',
            color: '0x0000',
        },
        bandy: {
            name: 'clean bandages',
            graphic: '0x0E21',
            color: '0x0000',
            bag: {
                x: 123,
                y: 20,
            },
        },
        krvavaBanda1: {
            name: 'bloody bandages',
            graphic: '0x0E22',
            color: '0x0000',
        },
        krvavaBanda2: {
            name: 'bloody bandages',
            graphic: '0x0E20',
            color: '0x0000',
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
            color: '0x06AB',
        },
        nbRuna: {
            graphic: '0x1F14',
            color: '0x0B1D',
        },
        recallRune: {
            graphic: '0x1F14',
            color: '0x0482',
        },
        anyKey: {
            graphic: '0x1012',
            bag: {
                x: 160,
                y: 5,
            },
        },
        nbDagger: {
            graphic: '0x0F51',
            color: '0x0B80',
            bag: {
                x: 150,
                y: 30,
            },
        },
        mortar: {
            graphic: '0x0E9B',
            color: '0x0000',
            bag: {
                x: 116,
                y: 24,
            },
        },
        lockpicks: {
            graphic: '0x14FB',
            color: '0x0000',
        },
        apprenticesPoisoningKit: {
            graphic: '0x1837',
            color: '0x0000',
        },
        prut: {
            graphic: '0x0DBF',
            color: '0x0000',
        },
        hodf: {
            graphic: '0x136C',
            color: '0x0B89',
        },
        petarda: {
            graphic: '0x1BE0',
            color: '0x061C',
        },
        adaHammer: {
            graphic: '0x1438',
            color: '0x044C',
        },
        dusty: {
            mytheril: {
                graphic: '0x103D',
                color: '0x052D',
            },
            black: {
                graphic: '0x103D',
                color: '0x0455',
            },
            blood: {
                graphic: '0x103D',
                color: '0x0280',
            },
        },
        necroMystic: {
            graphic: '0x1F0B',
            color: '0x0485',
        },
    },
    tools: {
        saw: {
            graphic: '0x1035',
            color: '0x0000',
        },
        sewingKit: {
            graphic: '0x0F9D',
            color: '0x0000',
        },
        silverHammer: {
            graphic: '0x13E3',
            color: '0x0B87',
        },
        tinkerTools: {
            graphic: '0x1EBC',
            color: '0x0000',
        },
    },
    resources: {
        logs: {
            graphic: '0x1BDD',
            color: '0x0000',
        },
        cloth: {
            graphic: '0x175D',
            color: '0x0000',
        },
        furs: {
            graphic: '0x11FA',
            color: '0x0000',
        },
        ore: {
            anyOre: {
                graphic: '0x19B9',
            },
            one: {
                graphic: '0x19B7',
            },
            two: {
                graphic: '0x19BA',
            },
            three: {
                graphic: '0x19B8',
            },
            iron: {
                graphic: '0x19B9',
                color: '0x0000',
            },
        },
        boards: {
            graphic: '0x1BD7',
            color: '0x0000',
        },
        ingots: {
            iron: {
                graphic: '0x1BEF',
                color: '0x0000',
            },
            copper: {
                graphic: '0x1BE3',
                color: '0x0000',
            },
            bronze: {
                graphic: '0x1BEF',
                color: '0x06D6',
            },
            silver: {
                graphic: '0x1BF5',
                color: '0x0000',
            },
            gold: {
                graphic: '0x1BE9',
                color: '0x0000',
            },
            rose: {
                graphic: '0x1BEF',
                color: '0x0665',
            },
            shadow: {
                graphic: '0x1BEF',
                color: '0x0770',
            },
            verite: {
                graphic: '0x1BEF',
                color: '0x07D1',
            },
            valorite: {
                graphic: '0x1BEF',
                color: '0x0515',
            },
            blood: {
                graphic: '0x1BEF',
                color: '0x04C2',
            },
            black: {
                graphic: '0x1BEF',
                color: '0x0455',
            },
            mytheril: {
                graphic: '0x1BEF',
                color: '0x052D',
            },
        },
        stones: {
            pieceOfAmber: {
                graphic: '0x0F25',
                color: '0x0000',
            },
            diamonds: {
                graphic: '0x0F26',
                color: '0x0000',
            },
            tourmalines: {
                graphic: '0x0F18',
                color: '0x0000',
            },
            amethyst: {
                graphic: '0x0F16',
                color: '0x0000',
            },
            rubies: {
                graphic: '0x0F13',
                color: '0x0000',
            },
            citrines: {
                graphic: '0x0F15',
                color: '0x0000',
            },
            emeralds: {
                graphic: '0x0F10',
                color: '0x0000',
            },
            starSapphire: {
                graphic: '0x0F0F',
                color: '0x0000',
            },
            sapphires: {
                graphic: '0x0F11',
                color: '0x0000',
            },
        },
        foldedCloth: {
            graphic: '0x175D',
            color: '0x0000',
        },
        thread: {
            graphic: '0x0FA0',
            color: '0x0000',
        },
        pilesOfHides: {
            graphic: '0x1078',
            color: '0x0000',
        },
        pitcherOfWater: {
            graphic: '0x0FF8',
            color: '0x0000',
        },
        fairyDust: {
            graphic: '0x103D',
            color: '0x0B52',
        },
        soulShard: {
            graphic: '0x0FC4',
            color: '0x0498',
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
                            resources: [{ item: 'gameObject.resources.logs', count: 2 }],
                        },
                        menu: {
                            name: 'Carpentry',
                            selections: ['Miscellaneous', 'Boards'],
                        },
                        outputCount: 3,
                    },
                },
                krabiceKadi: {
                    graphic: '0x185E',
                    color: '0x07E0',
                    make: {
                        tool: 'gameObject.tools.saw',
                        refill: {
                            resources: [{ item: 'gameObject.resources.logs', count: 2 }],
                            crafting: [{ item: 'gameObject.crafting.tinkering.containers.kadNaPotiony', count: 20 }],
                        },
                        menu: {
                            name: 'Carpentry',
                            selections: ['Miscellaneous', 'Krabice kadi'],
                        },
                    },
                },
            },
            containersAndParts: {
                barrelLid: {
                    graphic: '0x1DB8',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.saw',
                        refill: {
                            resources: [{ item: 'gameObject.resources.logs', count: 1 }],
                            crafting: [{ item: 'gameObject.crafting.carpentry.miscellaneous.boards', count: 2 }],
                        },
                        menu: {
                            name: 'Carpentry',
                            selections: ['Containers & Cont. parts', 'Barrel Lid'],
                        },
                    },
                },
                barrelStaves: {
                    graphic: '0x1EB1',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.saw',
                        refill: {
                            resources: [{ item: 'gameObject.resources.logs', count: 3 }],
                        },
                        menu: {
                            name: 'Carpentry',
                            selections: ['Containers & Cont. parts', 'Barrel Staves'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Carpentry',
                            selections: ['Containers & Cont. parts', 'Forma na lahve'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Carpentry',
                            selections: ['Containers & Cont. parts', 'Wash Basin'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Carpentry',
                            selections: ['Containers & Cont. parts', 'Wooden Box'],
                        },
                    },
                },
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
                            ],
                        },
                        menu: {
                            name: 'Carpentry',
                            selections: ['Deeds to Ships', 'Deed to a small ship'],
                        },
                    },
                },
            },
        },
        tinkering: {
            parts: {
                nails: {
                    graphic: '0x102E',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [{ item: 'gameObject.resources.ingots.iron', count: 1 }],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Parts', 'Nails'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Parts', 'Barrel Hoops'],
                        },
                    },
                },
                hinge: {
                    graphic: '0x1055',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [{ item: 'gameObject.resources.ingots.iron', count: 1 }],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Parts', 'Hinge'],
                        },
                    },
                },
                springs: {
                    graphic: '0x105D',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [{ item: 'gameObject.resources.ingots.iron', count: 1 }],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Parts', 'Springs'],
                        },
                    },
                },
                gears: {
                    graphic: '0x1053',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [{ item: 'gameObject.resources.ingots.iron', count: 1 }],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Parts', 'Gears'],
                        },
                    },
                },
            },
            wires: {
                iron: {
                    graphic: '0x1876',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [{ item: 'gameObject.resources.ingots.iron', count: 2 }],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Iron Wire'],
                        },
                    },
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
                            crafting: [{ item: 'gameObject.crafting.tinkering.wires.ironString', count: 2 }],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Vlasec'],
                        },
                    },
                },
                ironString: {
                    graphic: '0x1420',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.tinkerTools',
                        refill: {
                            resources: [{ item: 'gameObject.resources.ingots.iron', count: 1 }],
                            crafting: [{ item: 'gameObject.crafting.tinkering.wires.iron', count: 1 }],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Iron String'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Copper Wire'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Rose Wire'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Silver Wire'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Gold Wire'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Shadow Wire'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Blood Rock Wire'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Black Rock Wire'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Wires', 'Mytheril Wire'],
                        },
                    },
                },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Bottle'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Kad na potiony'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Metal Chest'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Gold Chest'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Golden Box (W)'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Golden Box (N)'],
                        },
                    },
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
                            crafting: [{ item: 'gameObject.crafting.tinkering.containers.goldenBoxW', count: 1 }],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Animal Box'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Secure Chest (N)'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Secure Chest (W)'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Double Secure Chest'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Double Secure Chest'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Guild Secure Chest'],
                        },
                    },
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
                            crafting: [{ item: 'gameObject.crafting.tinkering.containers.animalBox', count: 1 }],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Containers', 'Univerzal Animal Box'],
                        },
                    },
                },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Tools', "Apprentice's Poisoning Kit (trenink)"],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Tools', '50x Lockpick'],
                        },
                        outputCount: 50,
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Keys', 'Magic Key'],
                        },
                    },
                },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Special Items', 'Magic Ball (10 charges)'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Special Items', 'Crystal Ball (1 charge)'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Special Items', 'Recharge Crystal +1'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Special Items', 'Recharge Crystal +3'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Tinkering',
                            selections: ['Special Items', 'Recharge Crystal +5'],
                        },
                    },
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
                            selections: ['Special Items','Star Stone Weapon Form']
                        }
                    }
                }
            },
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
                            resources: [{ item: 'gameObject.resources.foldedCloth', count: 1 }],
                        },
                        menu: {
                            name: 'Cloth',
                            selections: ['Headwear', 'Bandana'],
                        },
                    },
                },
            },
            footwear: {
                sandals: {
                    graphic: '0x170D',
                    color: '0x0000',
                    make: {
                        tool: 'gameObject.tools.sewingKit',
                        toolTarget: 'gameObject.resources.pilesOfHides',
                        refill: {
                            resources: [{ item: 'gameObject.resources.pilesOfHides', count: 4 }],
                        },
                        menu: {
                            name: 'Leather',
                            selections: ['Footwear', 'Sandals'],
                        },
                    },
                },
            },
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
                            crafting: [{ item: 'gameObject.crafting.tinkering.wires.iron', count: 5 }],
                        },
                        menu: {
                            name: 'Blacksmithing',
                            selections: ['Tools', 'Petard Cauldron'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Blacksmithing',
                            selections: ['Tools', 'Hatchet'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Blacksmithing',
                            selections: ['Tools', 'Pick axe'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Blacksmithing',
                            selections: ['Tools', 'Blood Rock Sphere'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Blacksmithing',
                            selections: ['Tools', 'Black Rock Sphere'],
                        },
                    },
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
                            ],
                        },
                        menu: {
                            name: 'Blacksmithing',
                            selections: ['Tools', 'Mytheril Sphere'],
                        },
                    },
                },
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
                                resources: [{ item: 'gameObject.resources.ingots.iron', count: 1 }],
                            },
                            menu: {
                                name: 'Blacksmithing',
                                selections: [
                                    'Iron Weapons',
                                    { item: 'Swords & Blades', menu: 'Iron Swords & Blades' },
                                    'Dagger',
                                ],
                            },
                        },
                    },
                },
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
        },
    },
    potions: {
        tmr: {
            name: 'Total Mana Refresh Potion',
            graphic: '0x0F09',
            color: '0x0003',
            bag: {
                x: 25,
                y: 5,
            },
            kad: {
                name: 'Nadoba s Total Mana Refresh',
                graphic: '0x1843',
                color: '0x0003',
            },
            gmMortarSelection: 'Total Mana Refresh (612 Eyes of Newt nebo 306 Blue Eyes of Newt)',
            alchemySelection: 'Total Mana Refresh',
            reagent: 'eyes_of_newt',
            reagentsCount: 6,
        },
        mr: {
            name: 'Mana Refresh Potion',
            graphic: '0x0F09',
            color: '0x0005',
            kad: {
                name: 'Nadoba s Mana Refresh',
                graphic: '0x1843',
                color: '0x0005',
            },
            alchemySelection: 'Mana Refresh Potion',
            reagent: 'eyes_of_newt',
            reagentsCount: 3,
        },
        gb: {
            name: 'Greater Blood potion',
            graphic: '0x0F0C',
            color: '0x0025',
            kad: {
                name: 'Nadoba s Greater Blood',
                graphic: '0x1843',
                color: '0x0025',
            },
        },
        gh: {
            name: 'Greater Heal Potion',
            graphic: '0x0F0C',
            color: '0x0000',
            bag: {
                x: 25,
                y: 15,
            },
            kad: {
                name: 'Nadoba s Greater Heal',
                graphic: '0x1843',
                color: '0x08A7',
            },
            gmMortarSelection: 'Greater Heal (714 Ginsengs)',
            alchemySelection: 'Greater Heal',
            reagent: 'gi',
            reagentsCount: 7,
        },
        gs: {
            name: 'Greater Strength Potion',
            graphic: '0x0F09',
            color: '0x0000',
            bag: {
                x: 25,
                y: 25,
            },
            kad: {
                name: 'Nadoba s Greater Strength',
                graphic: '0x1843',
                color: '0x0481',
            },
            gmMortarSelection: 'Greater Strength (612 Mandrake Roots)',
            alchemySelection: 'Greater Strength',
            reagent: 'mr',
            reagentsCount: 6,
        },
        tr: {
            name: 'Total Refresh potion',
            graphic: '0x0F0B',
            color: '0x0000',
            bag: {
                x: 80,
                y: 5,
            },
            kad: {
                name: 'Nadoba s Total Refresh',
                graphic: '0x1843',
                color: '0x014D',
            },
            gmMortarSelection: 'Total Refresh (510 Black Pearls)',
            alchemySelection: 'Total Refresh',
            reagent: 'bp',
            reagentsCount: 5,
        },
        gc: {
            name: 'Greater Cure Potion',
            graphic: '0x0F07',
            color: '0x0000',
            bag: {
                x: 80,
                y: 15,
            },
            kad: {
                name: 'Nadoba s Greater Cure',
                graphic: '0x1843',
                color: '0x0842',
            },
            gmMortarSelection: 'Greater Cure (612 Garlics)',
            alchemySelection: 'Greater Cure',
            reagent: 'ga',
            reagentsCount: 6,
        },
        dp: {
            name: 'Deathly Poison Potion',
            graphic: '0x0F0A',
            color: '0x0000',
            bag: {
                x: 80,
                y: 15,
            },
            kad: {
                name: 'Nadoba s Deadly Poison',
                graphic: '0x1843',
                color: '0x08A2',
            },
            gmMortarSelection: 'Deadly Poison (1020 Nightshades)',
            alchemySelection: 'Deadly Poison',
            reagent: 'ns',
            reagentsCount: 10,
        },
        lc: {
            graphic: '0x0F07',
            color: '0x0000',
            bag: {
                x: 80,
                y: 15,
            },
            kad: {
                graphic: '0x1843',
                color: '0x0091',
            },
            alchemySelection: 'Lesser Cure Potion',
            reagent: 'ga',
            reagentsCount: 2,
        },
        ns: {
            name: 'Nightsight Potion',
            graphic: '0x0F06',
            color: '0x0000',
            kad: {
                name: 'Nadoba s Nightsight',
                graphic: '0x1843',
                color: '0x03C4',
            },
            alchemySelection: 'Nightsight',
            reagent: 'ss',
            reagentsCount: 2,
        },
        ag: {
            name: 'Agility Potion',
            graphic: '0x0F08',
            color: '0x0000',
            kad: {
                name: 'Nadoba s Agility',
                graphic: '0x1843',
                color: '0x00BF',
            },
            alchemySelection: 'Agility Potion',
            reagent: 'bm',
            reagentsCount: 2,
        },
        ga: {
            name: 'Greater Agility Potion',
            graphic: '0x0F08',
            color: '0x0000',
            kad: {
                name: 'Nadoba s Greater Agility',
                graphic: '0x1843',
                color: '0x00BF',
            },
            gmMortarSelection: 'Greater Agility (306 Blood Mosses)',
            alchemySelection: 'Greater Agility Potion',
            reagent: 'bm',
            reagentsCount: 3,
        },
        shrink: {
            name: 'Shrink',
            graphic: '0x0F09',
            color: '0x045E',
            bag: {
                x: 80,
                y: 25,
            },
            kad: {
                name: 'Nadoba s Shrink',
                graphic: '0x1843',
                color: '0x0724',
            },
            gmMortarSelection: 'Shrink (306 Batwings)',
            alchemySelection: 'Shrink',
            reagent: 'batwing',
            reagentsCount: 3,
        },
        lavabomb: {
            name: 'Lava Bomb',
            graphic: '0x0F0D',
            color: '0x000E',
            kad: {
                name: 'Nadoba s Lava Bomb',
                graphic: '0x1843',
                color: '0x000E',
            },
            gmMortarSelection: 'Lava Bomb (612 Volcanic Ashes)',
            alchemySelection: 'Lava Bomb',
            reagent: 'volcanic_ash',
            reagentsCount: 6,
        },
        invis: {
            name: 'Invisibility',
            graphic: '0x0F09',
            color: '0x0B77',
            kad: {
                graphic: '0x1843',
                color: '0x0B77',
            },
            gmMortarSelection: "Invisibility (408 Wyrm's Hearts)",
            alchemySelection: 'Invisibility',
            reagent: 'wyrms_heart',
            reagentsCount: 4,
        },
        lp: {
            graphic: '0x0F0A',
            color: '0x0000',
            kad: {
                graphic: '0x1843',
                color: '0x089F',
            },
            alchemySelection: 'Lesser Poison',
            reagent: 'ns',
            reagentsCount: 2,
        },
        halucination: {
            name: 'Hallucination',
            graphic: '0x0F06',
            color: '0x0B90',
            kad: {
                graphic: '0x1843',
                color: '0x0B90',
            },
            alchemySelection: 'Hallucination',
            reagent: 'serpent_scales',
            reagentsCount: 6,
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
        },
    },
    books: {
        unholySpellbook: {
            graphic: '0x0EFA',
            color: '0x0413',
            bag: {
                x: 142,
                y: 5,
            },
        },
        highMagicSpellBook: {
            graphic: '0x0EFA',
            color: '0x0021',
            bag: {
                x: 142,
                y: 5,
            },
        },
        bookOfDead: {
            graphic: '0x0EFA',
            color: '0x0455',
            bag: {
                x: 132,
                y: 5,
            },
        },
        travelBook: {
            graphic: '0x0FEF',
            color: '0x0482',
            bag: {
                x: 122,
                y: 5,
            },
        },
        runeBook: {
            graphic: '0x0FF0',
            color: '0x08A5',
            bag: {
                x: 112,
                y: 5,
            },
        },
        cestovniKniha: {
            graphic: '0x22C5',
            color: '0x0000',
            bag: {
                x: 117,
                y: 5,
            },
        },
    },
    taming: {
        staffs: {
            training: {
                graphic: '0x13F4',
                color: '0x04B9',
            },
            taming: {
                graphic: '0x13F4',
                color: '0x076B',
            },
            tamingShrink: {
                graphic: '0x13F4',
                color: '0x096D',
            },
        },
    },
    music: {
        harp: {
            graphic: '0x0EB2',
            color: '0x0000',
        },
        lute: {
            graphic: '0x0EB3',
            color: '0x0000',
        },
        drum: {
            graphic: '0x0E9C',
            color: '0x0000',
        },
    },
    rings: {
        rr: {
            graphic: '0x108A',
            color: '0x0496',
            bag: {
                x: 50,
                y: 35,
            },
        },
        grr: {
            graphic: '0x108A',
            color: '0x0B21',
            bag: {
                x: 53,
                y: 35,
            },
        },
        grr2: {
            graphic: '0x108A',
            color: '0x0B98',
            bag: {
                x: 56,
                y: 35,
            },
        },
        ggr: {
            graphic: '0x108A',
            color: '0x0000',
            bag: {
                x: 59,
                y: 35,
            },
        },
    },
    neklances: {
        titan: {
            graphic: '0x1088',
            color: '0x0485',
            bag: {
                x: 64,
                y: 35,
            },
        },
    },
    scrolls: {
        blank: {
            graphic: '0x0E34',
            color: '0x0000',
        },
        standard: {
            kvf: {
                graphic: '0x1F5F',
                color: '0x0000',
                timer: 5000,
                minMana: 20,
            },
            bolt: {
                graphic: '0x1F56',
                color: '0x0000',
            },
            pog: {
                graphic: '0x1F4A',
                color: '0x0000',
                timer: 4000,
                minMana: 5,
            },
            ijs: {
                graphic: '0x1F50',
                color: '0x0000',
                timer: 9600,
                minMana: 7,
            },
            port: {
                graphic: '0x1F42',
                color: '0x0000',
            },
            ef: {
                graphic: '0x1F5E',
                color: '0x0000',
            },
            para: {
                graphic: '0x1F52',
                color: '0x0000',
                timer: 4000,
                minMana: 7,
            },
            wos: {
                graphic: '0x1F44',
                color: '0x0000',
            },
            ivm: {
                graphic: '0x1F49',
                color: '0x0000',
            },
            ress: {
                graphic: '0x1F67',
                color: '0x0000',
                minMana: 25,
            },
            recall: {
                graphic: '0x1F4C',
                color: '0x0000',
            },
            heal: {
                graphic: '0x1F31',
                color: '0x0000',
                minMana: 3,
            },
            react: {
                graphic: '0x1F2D',
                color: '0x0000',
            },
            str: {
                graphic: '0x1F3C',
                color: '0x0000',
            },
            bless: {
                graphic: '0x1F3D',
                color: '0x0000',
            },
            pf: {
                graphic: '0x1F5B',
                color: '0x0000',
            },
            dispel: {
                graphic: '0x1F55',
                color: '0x0000',
            },
            bs: {
                graphic: '0x1F4D',
                color: '0x0000',
            },
            protect: {
                graphic: '0x1F3B',
                color: '0x0000',
            },
            eelm: {
                graphic: '0x1F6A',
                color: '0x0000',
            },
        },
        necro: {
            vfp: {
                name: 'Fire Bolt scroll',
                graphic: '0x0E35',
                color: '0x0070',
                minMana: 20,
            },
            haluze: {
                graphic: '0x0E35',
                color: '0x0010',
            },
            kalnox: {
                name: 'Summon Undead scroll',
                graphic: '0x0E35',
                color: '0x0005',
            },
        },
    },
    regy: {
        mr: {
            graphic: '0x0F86',
            bag: {
                x: 20,
                y: 180,
            },
        },
        ss: {
            graphic: '0x0F8D',
            bag: {
                x: 35,
                y: 180,
            },
        },
        bm: {
            graphic: '0x0F7B',
            bag: {
                x: 50,
                y: 180,
            },
        },
        bp: {
            graphic: '0x0F7A',
            bag: {
                x: 61,
                y: 180,
            },
        },
        ga: {
            graphic: '0x0F84',
            bag: {
                x: 80,
                y: 180,
            },
        },
        gi: {
            graphic: '0x0F85',
            bag: {
                x: 92,
                y: 180,
            },
        },
        ns: {
            graphic: '0x0F88',
            bag: {
                x: 110,
                y: 180,
            },
        },
        sa: {
            graphic: '0x0F8C',
            bag: {
                x: 125,
                y: 180,
            },
        },
    },
    necroRegy: {
        executioners_cap: {
            graphic: '0x0F83',
            bag: {
                x: 155,
                y: 180,
            },
        },
        blackmoor: {
            graphic: '0x0F79',
            bag: {
                x: 155,
                y: 180,
            },
        },
        fertile_dirt: {
            graphic: '0x0F81',
            bag: {
                x: 155,
                y: 180,
            },
        },
        obsidian: {
            graphic: '0x0F89',
            bag: {
                x: 155,
                y: 180,
            },
        },
        serpent_scales: {
            graphic: '0x0F8E',
            bag: {
                x: 155,
                y: 180,
            },
        },
        bloodspawn: {
            graphic: '0x0F7C',
            bag: {
                x: 155,
                y: 180,
            },
        },
        deamon_blood: {
            graphic: '0x0F7D',
            bag: {
                x: 155,
                y: 180,
            },
        },
        daemon_bones: {
            graphic: '0x0F80',
            bag: {
                x: 155,
                y: 180,
            },
        },
        pumice: {
            graphic: '0x0F8B',
            bag: {
                x: 155,
                y: 180,
            },
        },
        dragons_blood: {
            graphic: '0x0F82',
            bag: {
                x: 155,
                y: 180,
            },
        },
        volcanic_ash: {
            graphic: '0x0F8F',
            bag: {
                x: 155,
                y: 180,
            },
        },
        wyrms_hearts: {
            graphic: '0x0F91',
            bag: {
                x: 155,
                y: 180,
            },
        },
        brimstone: {
            graphic: '0x0F7F',
            bag: {
                x: 155,
                y: 180,
            },
        },
        batwings: {
            graphic: '0x0F78',
            bag: {
                x: 155,
                y: 180,
            },
        },
        bones: {
            graphic: '0x0F7E',
            bag: {
                x: 155,
                y: 180,
            },
        },
        eyes_of_newt: {
            graphic: '0x0F87',
            color: '0x0000',
            bag: {
                x: 155,
                y: 180,
            },
        },
    },
    mystics: {
        flower: {
            name: 'Flower',
            graphic: '0x0DC3',
            color: '0x005B',
        },
        stone: {
            name: 'Stone',
            graphic: '0x136C',
            color: '0x0B94',
        },
        plant: {
            name: 'Stone',
            graphic: '0x0CB0',
            color: '0x0899',
        },
        leaf: {
            name: 'Leaf',
            graphic: '0x0DBD',
            color: '0x0B9F',
        },
        stick: {
            name: 'Stick',
            graphic: '0x1A9D',
            color: '0x0481',
        },
        beeds: {
            name: 'Beeds',
            graphic: '0x108B',
            color: '0x0BB5',
        },
        mushroom: {
            name: 'Mushroom',
            graphic: '0x0D16',
            color: '0x00A3',
        },
        ball: {
            name: 'Ball',
            graphic: '0x0E73',
            color: '0x0B9F',
        },
        crystal: {
            name: 'Crystal',
            graphic: '0x0F5A',
            color: '0x0044',
        },
    },
    fish: {
        modra: {
            graphic: '0x09CD',
            color: '0x084C',
        },
    },
    klamak: {
        lvl1: {
            bird: {
                graphic: '0x20EE',
                color: '0xFFFF',
            },
            giantRat: {
                graphic: '0x20D0',
                color: '0xFFFF',
            },
            rat: {
                graphic: '0x2123',
                color: '0xFFFF',
            },
            chicken: {
                graphic: '0x20D1',
                color: '0xFFFF',
            },
            rabbit: {
                graphic: '0x2125',
                color: '0x090C',
            },
        },
        lvl2: {
            squirrel: {
                graphic: '0x2D97',
                color: '0xFFFF',
            },
            cat: {
                graphic: '0x211B',
                color: '0xFFFF',
            },
            jackRabbit: {
                graphic: '0x2125',
                color: '0x0FFFF',
            },
            wolf: {
                graphic: '0x20EA',
                color: '0xFFFF',
            },
            goat: {
                graphic: '0x2108',
                color: '0xFFFF',
                gWidth: 41,
                gHeight: 36,
            },
            dog: {
                graphic: '0x211C',
                color: '0xFFFF',
            },
            boar: {
                graphic: '0x2101',
                color: '0xFFFF',
            },
            bullFrog: {
                graphic: '0x2130',
                color: '0xFFFF',
            },
        },
        lvl3: {
            blackBear: {
                graphic: '0x2118',
                color: '0xFFFF',
            },
            bull: {
                graphic: '0x20EF',
                color: '0xFFFF',
            },
            hind: {
                graphic: '0x20D4',
                color: '0xFFFF',
            },
            hart: {
                graphic: '0x20D4',
                color: '0xFFFF',
            },
            gorilla: {
                graphic: '0x20F5',
                color: '0xFFFF',
            },
            sheep: {
                graphic: '0x20EB',
                color: '0xFFFF',
            },
            cow: {
                graphic: '0x2103',
                color: '0xFFFF',
            },
            brownBear: {
                graphic: '0x20CF',
                color: '0xFFFF',
            },
        },
        lvl4: {
            panther: {
                graphic: '0x2119',
                color: '0xFFFF',
            },
            cougar: {
                graphic: '0x2119',
                color: '0xFFFF',
            },
            eagle: {
                graphic: '0x211D',
                color: '0xFFFF',
            },
            timberWolf: {
                graphic: '0x20EA',
                color: '0xFFFF',
            },
        },
        lvl5: {
            leopard: {
                graphic: '0x2119',
                color: '0xFFFF',
            },
            polar: {
                graphic: '0x20E1',
                color: '0xFFFF',
            },
            grizzly: {
                graphic: '0x211E',
                color: '0xFFFF',
            },
            snake: {
                graphic: '0x20FC',
                color: '0xFFFF',
            },
            alligator: {
                graphic: '0x2131',
                color: '0xFFFF',
            },
        },
    },
    medic: {
        kpz: {
            graphic: '0x09B0',
            color: '0x0493',
        },
        kpzActive: {
            graphic: '0x09B0',
            color: '0x0494',
        },
    },
    poisonGuns: {
        spear: {
            graphic: '0x0F62',
            color: '0x08A1',
        },
        halberd: {
            graphic: '0x143E',
            color: '0x08A1',
        },
    },

    shields: {
        round: {
            metalShield: {
                graphic: '0x1B7B',
                color: '0xFFFF',
            },
            buckler: {
                graphic: '0x1B73',
                color: '0xFFFF',
            },
            woodenShield: {
                graphic: '0x1B7A',
                color: '0xFFFF',
            },
            bronzeShield: {
                graphic: '0x1B72',
                color: '0xFFFF',
            },
        },
        other: {
            metalKiteShield: {
                graphic: '0x1B74',
                color: '0xFFFF',
            },
            heaterShield: {
                graphic: '0x1B76',
                color: '0xFFFF',
            },
            woodenKiteShield: {
                graphic: '0x1B78',
                color: '0xFFFF',
            },
            lucerna: {
                graphic: '0x0A15',
                color: '0xFFFF',
            }
        },
    },
    weapons: {
        archery: {
            repeatingCrossbow: {
                graphic: '0x26C3',
                color: '0xFFFF',
            },
            crossbow: {
                graphic: '0x0F4F',
                color: '0xFFFF',
            },
            heawyCrossbow: {
                graphic: '0x13FC',
                color: '0xFFFF',
            },
            bow: {
                graphic: '0x13B1',
                color: '0xFFFF',
            },
            kratkyElfskyLuk: {
                graphic: '0x2D1F',
                color: '0xFFFF',
            },
        },
        swordsmanship: {
            halbert: {
                graphic: '0x143E',
                color: '0xFFFF',
            },
            bardiche: {
                graphic: '0x0F4D',
                color: '0xFFFF',
            },
            katana: {
                graphic: '0x13FE',
                color: '0xFFFF',
            },
            cutlass: {
                graphic: '0x1440',
                color: '0xFFFF',
            },
            vikingSword: {
                graphic: '0x13B9',
                color: '0xFFFF',
            },
            lba: {
                graphic: '0x13FA',
                color: '0xFFFF',
            },
            battleAxe: {
                graphic: '0x0F47',
                color: '0xFFFF',
            },
            longSword: {
                graphic: '0x0F60',
                color: '0xFFFF',
            },
            executionersAxe: {
                graphic: '0x0F45',
                color: '0xFFFF',
            },
            scimitar: {
                graphic: '0x13B5',
                color: '0xFFFF',
            },
            broadSword: {
                graphic: '0x0F5E',
                color: '0xFFFF',
            },
            axe: {
                graphic: '0x0F49',
                color: '0xFFFF',
            },
            doubleAxe: {
                graphic: '0x0F4B',
                color: '0xFFFF',
            },
            twoHandedAxe: {
                graphic: '0x1442',
                color: '0xFFFF',
            },
            bastardSword: {
                graphic: '0x13B9',
                color: '0xFFFF',
            },
            bow: {
                graphic: '0x13B1',
                color: '0xFFFF',
            },
            paladinsSword: {
                graphic: '0x26CE',
                color: '0xFFFF',
            },
            cleaver: {
                graphic: '0x0EC2',
                color: '0xFFFF',
            },
            slicer: {
                graphic: '0x2D23',
                color: '0xFFFF',
            },
            hatchet: {
                graphic: '0x0F43',
                color: '0xFFFF',
            },
            deamonBane: {
                graphic: '0x2D28',
                color: '0xFFFF',
            },
            warAxe: {
                graphic: '0x13AF',
                color: '0xFFFF',
            },
            machette: {
                graphic: '0x13AF',
                color: '0xFFFF',
            },
        },
        macefighting: {
            mace: {
                graphic: '0x0F5C',
                color: '0xFFFF',
            },
            maul: {
                graphic: '0x143A',
                color: '0xFFFF',
            },
            hammerPick: {
                graphic: '0x143C',
                color: '0xFFFF',
            },
            club: {
                graphic: '0x13B3',
                color: '0xFFFF',
            },
            warMace: {
                graphic: '0x1406',
                color: '0xFFFF',
            },
            warHammer: {
                graphic: '0x1438',
                color: '0xFFFF',
            },
            blackStaff: {
                graphic: '0x0DF0',
                color: '0xFFFF',
            },
        },
        fencing: {
            warFork: {
                graphic: '0x1404',
                color: '0xFFFF',
            },
            pithcFork: {
                graphic: '0x0E87',
                color: '0xFFFF',
            },
            spear: {
                graphic: '0x0F62',
                color: '0xFFFF',
            },
            kryss: {
                graphic: '0x1401',
                color: '0xFFFF',
            },
            kryss2: {
                graphic: '0x1400',
                color: '0xFFFF',
            },
            dagger: {
                graphic: '0x0F51',
                color: '0xFFFF',
            },
            shortSpear: {
                graphic: '0x1402',
                color: '0xFFFF',
            },
            guardiansLungbreaker: {
                graphic: '0x26c5',
                color: '0xFFFF',
            },
            drapy: {
                graphic: '0x27ab',
                color: '0xFFFF',
            },
        },
    },
};

const trackingFilter: any = {
    // graphic co ti to bude trackovat
    // jmena ktera chces odfiltrovat dej do zavorky a oddel carkou
    '0x2106': [], // chlap
    '0x2107': [], // zenska
    '0x20F9': ['Imp'], // malej vamp
    '0x20D9': ['Gargoyle'], // velkej vamp
    '0x2100': [], // ghost
};
