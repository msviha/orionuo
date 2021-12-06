namespace Scripts {
    export class Stealing {
        static getStealingIgnoreList() {
            return [
                {
                    name : 'Grizzly Bear',
                    graphic: '0x00D4',
                    color: '0x0712'
                },
                {
                    name : 'Walrus',
                    graphic: '0x00DD',
                    color: '0x0712'
                },
                {
                    name : 'Magic Drake',
                    graphic: '0x003C',
                    color: '0x0712'
                },
                {
                    name: 'Giant Viper',
                    graphic: '0x0015',
                    color: '0x0757'
                },
                {
                    name: 'Giant Spider',
                    graphic: '0x001C',
                    color: '0x0751'
                },
                {
                    name : 'Death Vortex',
                    graphic: '0x000D',
                    color: '0x0B77'
                },
                {
                    name : 'Skeleton Warrior',
                    graphic: '0x0039',
                    color: '0x0835'
                },
                {
                    name : 'Wraith',
                    graphic: '0x001A',
                    color: '0x0835'
                },
                {
                    name : 'Dark Oclock',
                    graphic: '0x00D2',
                    color: '0x0966'
                },
                {
                    name : 'Angel Spirit',
                    graphic: '0x003A',
                    color: '0x0B87'
                },
                {
                    name : 'Awaken Spirit',
                    graphic: '0x003A',
                    color: '0x084C'
                },
                {
                    name : 'Horse',
                    graphic: '0x00CC',
                    color: '0x0000'
                },
                {
                    name : 'Brown Bear',
                    graphic: '0x00D3',
                    color: '0x0712'
                }
            ];
        }

        static getStealingTarget():string|undefined {
            const targets = Orion.FindTypeEx('any', 'any', 'ground', 'fast|live|mobile|ignoreself',1, NotorietyEnum.red);
            if (!targets.length) {
                return;
            }

            const stealingIgnoreList = Scripts.Stealing.getStealingIgnoreList();

            const globalStealChars = Shared.GetVar('stolenFromChars');
            if (!globalStealChars) {
                return targets[0].Serial();
            }
            let toBeIgnored = false;
            const stolenFromChars = globalStealChars.split('|');
            for (const target of targets) {
                if (target.Serial() && stolenFromChars.indexOf(target.Serial()) === -1) {
                    for (const ignore of stealingIgnoreList) {
                        if (ignore.color === target.Color() && ignore.graphic === target.Graphic()) {
                            toBeIgnored = true;
                            break;
                         }
                    }
                    if (!toBeIgnored) {
                        return target.Serial();
                    }
                }
            }
        }

        static autoStealing(autoheal:boolean) {
            Scripts.Utils.playerPrint('utomaticke okradani aktivovano');
            let staying = false;
            while (true) {
                let px = Player.X();
                let py = Player.Y();
                if (
                    Player.Hits() >= Player.MaxHits() &&
                    !Orion.HaveTarget() &&
                    staying &&
                    !Orion.ScriptRunning('_hiding') &&
                    !Orion.ScriptRunning('_hidingPreoccupiedCheck'))
                {
                    Scripts.Stealing.stealing();
                }
                if (Player.Hits() < Player.MaxHits() && autoheal){
                    bandageSelf();
                    Orion.Wait(1950);
                }
                Orion.Wait(333);
                staying = Player.X() === px && Player.Y() === py;
            }
        }

        static stealing() {
            let stealingStartSkill = parseInt(Shared.GetVar('stealingStartSkill', ));
            if (!stealingStartSkill) {
                Shared.AddVar('stealingStartSkill', Orion.SkillValue('Stealing'));
                stealingStartSkill = Orion.SkillValue('Stealing');
            }

            const kapsarskeNaradicko = Scripts.Utils.findFirstType(gameObject.uncategorized.kapsarskeNaradicko);
            if (!kapsarskeNaradicko) {
                Scripts.Utils.playerPrint('Nemas okradatko');
                return;
            }
            if (Player.Hits() < Player.MaxHits()) {
                Scripts.Utils.playerPrint('Nemas plno HP');
                return;
            }
            const px = Player.X();
            const py = Player.Y();
            Orion.ClearJournal('Okradeni se nepovedlo|To chces krast na takovou dalku|Krast musis v klidu|ukradl|vsimla|silna|Tohle nejde okrast|To nejde');
            Orion.UseObject(kapsarskeNaradicko);
            Orion.Wait(1150);
            let target = '';
            let attempted = false;
            while (
                Player.Hits() >= Player.MaxHits() &&
                px == Player.X() &&
                py == Player.Y() &&
                Orion.HaveTarget()
            ) {
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
                return;
            }

            Orion.Wait(200);

            if (Orion.InJournal('ukradl|vsimla|silna|Tohle nejde okrast|To nejde') && target) {
                Orion.ClearJournal('ukradl|vsimla|silna|Tohle nejde okrast|To nejde');
                const globalStealChars = Shared.GetVar('stolenFromChars');
                Shared.AddVar('stolenFromChars', `${globalStealChars}|${target}`);
                const currentPoisonSkill = Orion.SkillValue('Stealing');
                if (stealingStartSkill !== currentPoisonSkill) {
                    const gainSkill = (currentPoisonSkill - stealingStartSkill) / 10;
                    Orion.Print(`Dnes Stealing narostl o ${gainSkill}%`);
                }
            }
            if (Orion.InJournal('Okradeni se nepovedlo|To chces krast na takovou dalku|Krast musis v klidu')) {
                Orion.ClearJournal('Okradeni se nepovedlo|To chces krast na takovou dalku|Krast musis v klidu');
                Scripts.Stealing.stealing();
            }
        }
    }
}
