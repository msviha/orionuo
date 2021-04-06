namespace Scripts {
    export class Tracking {
        static tracking(who = 'Players') {
            Orion.CancelWaitMenu();
            Orion.WaitMenu('Tracking', who);
            Orion.UseSkill('Tracking');
        }
    }
}
