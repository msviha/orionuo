namespace Scripts {
    export class Cartography {
        static cartography() {
            Scripts.Utils.playerPrint('Target atlas with maps');
            Orion.WaitForAddObject('atlasResourse', 60000);
            const atlasResourse = Orion.FindObject('atlasResourse');
            if (
                !atlasResourse ||
                atlasResourse.Graphic() !== gameObject.uncategorized.atlas.graphic ||
                atlasResourse.Color() !== gameObject.uncategorized.atlas.color
            ) {
                Scripts.Utils.log('Musis vybrat atlas !!!', ColorEnum.red);
                return;
            }

            Scripts.Utils.playerPrint('Target atlas to recycle maps');
            Orion.WaitForAddObject('atlasRecycle', 60000);
            const atlasRecycle = Orion.FindObject('atlasRecycle');
            if (
                !atlasRecycle ||
                atlasRecycle.Graphic() !== gameObject.uncategorized.atlas.graphic ||
                atlasRecycle.Color() !== gameObject.uncategorized.atlas.color
            ) {
                Scripts.Utils.log('Musis vybrat atlas !!!', ColorEnum.red);
                return;
            }

            const menuName = 'What sort of map do you want to draw ?';

            while (true) { //neznam hlasku ze nejsou mapy v atlasu
                Scripts.Utils.log('while');
                Scripts.Utils.worldSaveCheckWait();
                Orion.ClearJournal();
                Orion.CancelWaitTarget();

                Orion.WaitTargetObject('self');
                Orion.UseObject(atlasResourse.Serial());
                Scripts.Utils.waitWhileSomethingInJournal(['Vyjmul jsi mapu z atlasu']);
                Orion.ClearJournal('You put the map');

                let mapa = Scripts.Utils.findFirstType(gameObject.uncategorized.mapa);
                Scripts.Utils.log(mapa);

                Scripts.Utils.selectMenu(menuName, ['Regional Map']);
                Orion.Wait(responseDelay);
                Orion.UseObject(mapa);

                if (!Scripts.Utils.waitWhileSomethingInJournal(['an unusable map', 'You put the map'])) {
                    Scripts.Utils.log('continue');
                    continue;
                }

                mapa = Scripts.Utils.findFirstType(gameObject.uncategorized.mapa);
                Orion.WaitTargetObject(mapa);
                Orion.UseObject(atlasRecycle.Serial());
                Orion.Wait(responseDelay);
            }
        }
    }
}
