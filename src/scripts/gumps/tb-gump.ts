namespace Scripts {

    export class TbGump {

        static main() {
            TbGump.resetJournalAndScores();
            TbGump.updateGump();
            Orion.Exec('tbGumpUpdateLoop', true);
        }

        static updateGump() {
            const gump = Orion.CreateCustomGump(TbGumpEnum.tbCustomGumpSerial);
            gump.Clear();
            TbGump.drawBox(gump);
            TbGump.drawText(gump);
            gump.Update();
        }

        static resetJournalAndScores() {
            Orion.ClearJournal(`${TbGumpEnum.kotaPattern}|${TbGumpEnum.scorePattern}|${TbGumpEnum.sysScorePattern}`);
            Shared.AddArray(TbGumpEnum.sharedArrayKoty, []);
            Shared.AddVar(TbGumpEnum.sharedVarOrderScore, '0');
            Shared.AddVar(TbGumpEnum.sharedVarChaosScore, '0');
        }

        static searchTextAndUpdateGump() {
            const kotaPattern = 'je nyni pod kontrolou';
            const orderScorePattern = 'Order:|ORDER:';
            const chaosScorePattern = 'Chaos:|CHAOS:';

            const kotaMsg = Orion.InJournal(kotaPattern);
            if (kotaMsg) {
                // Vendor (1510,1681,20) je nyni pod kontrolou Orderu
                const text = kotaMsg.Text();
                if (text) {
                    const koty = Shared.GetArray(TbGumpEnum.sharedArrayKoty, []);
                    const match = text.match(/(.*)\s\(.*kontrolou\s(.*)/);
                    let name = match[1];
                    name = name.length > 7 ? name.substring(0, 7) + '...' : name;
                    const order = match[2] === 'Orderu';
                    let found = false;
                    for (let i = 0; i < koty.length; i++) {
                        const kota = koty[i];
                        if (kota.name === name) {
                            kota.order = order;
                            found = true;
                            break;
                        }
                    }
                    !found && koty.push({name, order});
                    Shared.AddArray(TbGumpEnum.sharedArrayKoty, koty);
                }
            }

            const orderScoreMsg = Orion.InJournal(orderScorePattern);
            orderScoreMsg && TbGump.parseAndSetScore(orderScoreMsg);
            const chaosScoreMsg = Orion.InJournal(chaosScorePattern);
            chaosScoreMsg && TbGump.parseAndSetScore(chaosScoreMsg, false);

            if (kotaMsg || orderScoreMsg || chaosScoreMsg) {
                kotaMsg && Orion.ClearJournal(kotaPattern);
                orderScoreMsg && Orion.ClearJournal(orderScorePattern);
                chaosScoreMsg && Orion.ClearJournal(chaosScorePattern);
                TbGump.updateGump();
            }
        }

        static parseAndSetScore(msg:JournalMessage, order = true) {
            // <SCORES> ORDER: [1598] CHAOS: [558]
            // Molo: Order: 1009
            // Molo: Chaos: 748
            const text = msg.Text();
            if (!text) {
                return;
            }
            const re = order ? /order:[^\d]*(\d+)/i : /chaos:[^\d]*(\d+)/i;
            const varName = order ? TbGumpEnum.sharedVarOrderScore : TbGumpEnum.sharedVarChaosScore;
            const match = text.match(re);
            if (match && match.length && match[1] && typeof match[1] === 'string') {
                Shared.AddVar(varName, match[1]);
            }
        }

        static drawBox(gump:CustomGumpObject) {
            const width = 160;
            const height = 80;
            const padding = 1;
            const borderColor = '#ff3f3f3f';
            const backgroundColor = '#ff000000';

            // main frame
            gump.AddColoredPolygone(0, 0, width, height, borderColor);
            gump.AddColoredPolygone(padding, padding, width - 2*padding, height - 2*padding, backgroundColor);
            gump.SetCallback(`tbCustomGumpCallBack`);
            gump.AddHitBox(TbGumpEnum.tbCustomGumpSerial, 0, 0, width, height, 1);

            //chaos stit 0x1BC3
            //order stit 0x1BC4
            //bila 0x0BB4
            //cerna 0x0B77
            gump.AddTilePic(-5, 7, '0x1BC4', '0x0B77');
            gump.AddTilePic(0, 47, '0x1BC3', '0x0B77');
        }

        static drawText(gump:CustomGumpObject) {
            const koty = Shared.GetArray(TbGumpEnum.sharedArrayKoty, []);
            const orderScore = Shared.GetVar(TbGumpEnum.sharedVarOrderScore, '0');
            const chaosScore = Shared.GetVar(TbGumpEnum.sharedVarChaosScore, '0');
            let textSerial = 3000;

            // update text score
            gump.AddText(43, 12, '0x0BAF', orderScore, 0, textSerial++);
            gump.AddText(43, 47, '0x0BAF', chaosScore, 0, textSerial++);

            // region update text kot
            let kotaCounter = 0;
            for (const kota of koty) {
                const y = 20*kotaCounter;
                const color = kota.order ? '#ff0000ff' : '#ffff0000';
                gump.AddColoredPolygone(80, y + 3, 8, 14, color);
                gump.AddText(90, y + 1, '0x0837', kota.name, 0, textSerial++);
                kotaCounter++;
            }
            // endregion
        }
    }
}
