//region constants
const responseDelay = 350;
//endregion

//region Interfaces
interface IMyGameObject {
	graphic:string,
	color?:string,
	bag?:IBagDestination,
	make?:IMakeProps;
}

interface IPotion extends IMyGameObject {
	kad:IMyGameObject
}

interface IBagDestination extends ICoordinates{
	objectAlias?:string
}

interface IMakeProps {
	tool:string,
	refill?:IRefillProps,
	menu:IMenuWithSelections,
	outputCount?:number
}

interface IRefillProps {
	resources?:IRefillItem[],
	crafting?:IRefillItem[]
}

interface IRefillItem {
	item:string,
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

function isMakeProps(val:any):val is IMakeProps {
	let success = val && val.tool && val.menu;
	!success && Scripts.Utils.log('tool and menu are mandatory properties', ColorEnum.red);
	const outputCountType = typeof val.outputCount === 'undefined' || typeof val.outputCount === 'number';
	success = success && outputCountType;
	!success && Scripts.Utils.log('outputCount is not a number', ColorEnum.red);

	if (val.refill) {
		success = success && isRefillProps(val.refill);
	}

	return success;
}

function isRefillProps(val:any):val is IRefillProps {
	let success = true;
	if (val.resources) {
		for (const r of val.resources) {
			success = success && isRefillItem(r);
		}
	}
	if (val.crafting) {
		for (const c of val.crafting) {
			success = success && isRefillItem(c);
		}
	}
	return success;
}

function isRefillItem(val:any):val is IRefillItem {
	let success = val && val.item && typeof val.count === 'number';
	!success && Scripts.Utils.log('item should be defined and count should be a number', ColorEnum.red);
	return success;
}

function isBagDestination(val:any):val is IBagDestination {
	let success = val && typeof val.x === 'number' && typeof val.y === 'number';
	!success && Scripts.Utils.log('x and y should be a number', ColorEnum.red);
	return success;
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
						tool: 'o.tools.saw',
						refill: {
							resources: [{item: 'o.resources.logs', count: 2}]
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
						tool: 'o.tools.saw',
						refill: {
							resources: [{item: 'o.resources.logs', count: 2}],
							crafting: [{item: 'o.crafting.tinkering.containers.kadNaPotiony', count: 20}]
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
						tool: 'o.tools.saw',
						refill: {
							resources: [{item: 'o.resources.logs', count: 1}],
							crafting: [{item: 'o.crafting.carpentry.miscellaneous.boards', count: 2}]
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
						tool: 'o.tools.saw',
						refill: {
							resources: [{item: 'o.resources.logs', count: 3}],
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
						tool: 'o.tools.saw',
						refill: {
							resources: [{item: 'o.resources.logs', count: 1}],
							crafting: [
								{item: 'o.crafting.carpentry.containersAndParts.barrelLid', count: 2},
								{item: 'o.crafting.carpentry.containersAndParts.barrelStaves', count: 2}
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
						tool: 'o.tools.tinkerTools',
						refill: {
							resources: [{item: 'o.resources.ingots.iron', count: 1}]
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
						tool: 'o.tools.tinkerTools',
						refill: {
							resources: [
								{item: 'o.resources.ingots.copper', count: 2}, // 1 is enough but this is safe for the picking
								{item: 'o.resources.ingots.iron', count: 2}
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
						tool: 'o.tools.tinkerTools',
						refill: {
							resources: [
								{item: 'o.resources.ingots.rose', count: 2}, // 1 is enough but this is safe for the picking
								{item: 'o.resources.ingots.iron', count: 2}
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
						tool: 'o.tools.tinkerTools',
						refill: {
							resources: [
								{item: 'o.resources.ingots.shadow', count: 2}, // 1 is enough but this is safe for the picking
								{item: 'o.resources.ingots.iron', count: 2}
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
						tool: 'o.tools.tinkerTools',
						refill: {
							resources: [
								{item: 'o.resources.ingots.blood', count: 2}, // 1 is enough but this is safe for the picking
								{item: 'o.resources.ingots.iron', count: 2}
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
						tool: 'o.tools.tinkerTools',
						refill: {
							resources: [
								{item: 'o.resources.ingots.black', count: 2}, // 1 is enough but this is safe for the picking
								{item: 'o.resources.ingots.iron', count: 2}
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
						tool: 'o.tools.tinkerTools',
						refill: {
							resources: [
								{item: 'o.resources.ingots.mytheril', count: 2}, // 1 is enough but this is safe for the picking
								{item: 'o.resources.ingots.iron', count: 2}
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
				kadNaPotiony: {
					graphic: '0x1843',
					color: '0x0000',
					make: {
						tool: 'o.tools.tinkerTools',
						refill: {
							resources: [
								{item: 'o.resources.logs', count: 2},
								{item: 'o.resources.ore.iron', count: 2},
								{item: 'o.resources.ingots.bronze', count: 1},
								{item: 'o.resources.ingots.iron', count: 1}
							],
							crafting: [
								{item: 'o.crafting.carpentry.containersAndParts.formaNaLahve', count: 1}
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
						tool: 'o.tools.tinkerTools',
						refill: {
							resources: [
								{item: 'o.resources.logs', count: 5},
								{item: 'o.resources.ingots.gold', count: 5},
								{item: 'o.resources.ingots.iron', count: 1}
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
						tool: 'o.tools.tinkerTools',
						refill: {
							resources: [
								{item: 'o.resources.logs', count: 5},
								{item: 'o.resources.furs', count: 5}
							],
							crafting: [
								{item: 'o.crafting.tinkering.containers.goldenBox', count: 1}
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
						tool: 'o.tools.tinkerTools',
						refill: {
							resources: [
								{item: 'o.resources.logs', count: 5},
								{item: 'o.resources.furs', count: 5}
							],
							crafting: [
								{item: 'o.crafting.tinkering.containers.animalBox', count: 1}
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
						tool: 'o.tools.tinkerTools',
						refill: {
							resources: [
								{item: 'o.resources.ingots.gold', count: 1},
								{item: 'o.resources.ingots.iron', count: 1},
								{item: 'o.resources.stones.pieceOfAmber', count: 1},
								{item: 'o.resources.stones.starSapphire', count: 3}
							],
							crafting: [
								{item: 'o.crafting.tinkering.parts.springs', count: 2},
								{item: 'o.crafting.tinkering.wires.copper', count: 5}
							]
						},
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

//region autostart
function Autostart() {
	let previousLastAttackSerial:string;
	let previousLastAttackHp:number;
	let previousPlayerHp:number;
	let updateRate = 500;

	while (true) {
		Scripts.Utils.printDamage(Player.Serial(), previousPlayerHp);
		previousPlayerHp = Player.Hits();

		const lastAttackSerial = Orion.ClientLastAttack();
		const lastAttack = Scripts.Utils.getLivingObjectInDistance(lastAttackSerial);
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
//endregion
