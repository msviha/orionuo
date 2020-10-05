//region constants
const responseDelay = 350;
//endregion

//region Interfaces
interface IMyGameObject {
	graphic:string,
	color?:string,
	bag?:IBagDestination
}

interface IPotion extends IMyGameObject {
	kad:IMyGameObject
}

interface ICreatableGameObject extends IMyGameObject {
	make:IMakeProps
}

interface IBagDestination extends ICoordinates{
	objectAlias?:string
}

interface IMakeProps {
	tool:string,
	refill:IRefillProps[],
	menu:IMenuWithSelections,
	outputCount?:number
}

interface IRefillProps {
	resource:string,
	count:number
}

interface IMenuWithSelections {
	name:string,
	selections:string[]
}

interface ICoordinates {
	x:number,
	y:number
}

enum DirectionEnum {
	West = 6,
	North = 0,
	East = 2,
	South = 4
}

enum ColorEnum {
	none = '0xffff',
	red = '0x0021',
	green = '0x0044',
	orange = '0x002c'
}

enum TargetEnum {
	self = 'self',
	lastattack = 'lastattack'
}

enum ScrollEnum {
	kvf = 'kvf',
	bolt = 'bolt',
	pog = 'pog',
	ijs = 'ijs',
	port = 'port',
	ef = 'ef',
	para = 'para',
	wos = 'wos',
	ivm = 'ivm'
}

enum NecroScrollEnum {
	vfp = 'vfp',
	kalnox = 'kalnox',
	haluze = 'haluze'
}

enum TimersEnum {
	drink = 'drink'
}
//endregion

//region typeGuards
function isMyGameObject(val:any):val is IMyGameObject {
	return val && val.graphic;
}

function isCreatableGameObject(val:any):val is ICreatableGameObject {
	return val && val.make && isMyGameObject(val);
}
//endregion

//region Objects
const o:any = {
	uncategorized: {
		emptyBottles: {
			graphic: '0x0F0E',
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
		ngDagger: {
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
	crafting: {
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
				gold: {
					graphic: '0x1BE9',
					color: '0x0000'
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
				}
			}
		},
		carpentry: {
			miscellaneous: {
				boards: {
					graphic: '0x1BD7',
					color: '0x0000',
					make: {
						tool: 'o.crafting.tools.saw',
						refill: [
							{resource: 'o.crafting.resources.logs', count: 2}
						],
						menu: {
							name: 'Carpentry',
							selections: ['Miscellaneous', 'Boards']
						},
						outputCount: 3
					}
				}
			},
			containersAndParts: {
				barrelLid: {
					graphic: '0x1DB8',
					color: '0x0000',
					make: {
						tool: 'o.crafting.tools.saw',
						refill: [
							{resource: 'o.crafting.resources.logs', count: 1},
							{resource: 'o.crafting.carpentry.miscellaneous.boards', count: 2}
						],
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
						tool: 'o.crafting.tools.saw',
						refill: [
							{resource: 'o.crafting.resources.logs', count: 3}
						],
						menu: {
							name: 'Carpentry',
							selections: ['Containers & Cont. parts', 'Barrel Staves']
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
						tool: 'o.crafting.tools.tinkerTools',
						refill: [{resource: 'o.crafting.resources.ingots.iron', count: 1}],
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
						tool: 'o.crafting.tools.tinkerTools',
						refill: [
							{resource: 'o.crafting.resources.ingots.copper', count: 1},
							{resource: 'o.crafting.resources.ingots.iron', count: 1}
						],
						menu: {
							name: 'Tinkering',
							selections: ['Wires', 'Copper Wire']
						}
					}
				}
			},
			specialItems: {
				magicBall: {
					graphic: '0x0E2D',
					color: '0x0B86',
					make: {
						tool: 'o.crafting.tools.tinkerTools',
						refill: [
							{resource: 'o.crafting.tinkering.parts.springs', count: 2},
							{resource: 'o.crafting.tinkering.wires.copper', count: 5},
							{resource: 'o.crafting.resources.ingots.gold', count: 1},
							{resource: 'o.crafting.resources.stones.pieceOfAmber', count: 1},
							{resource: 'o.crafting.resources.stones.starSapphire', count: 3},
							{resource: 'o.crafting.resources.ingots.iron', count: 1}
						],
						menu: {
							name: 'Tinkering',
							selections: ['Special Items', 'Magic Ball (10 charges)']
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
			}
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
			}
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
			}
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
			}
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
			}
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
			}
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
			}
		},
		lavabomb: {
			graphic: '0x0F0D',
			color: '0x000E',
			kad: {
				graphic: '0x1843',
				color: '0x000E'
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
				color: '0x04B9'
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
				timer: 5000,
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
				color: '0x0000'
			},
			wos: {
				graphic: '0x1F44',
				color: '0x0000'
			},
			ivm: {
				graphic: '0x1F49',
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
	}
};
//endregion
