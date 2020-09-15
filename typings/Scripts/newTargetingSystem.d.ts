export default interface NewTargetingSystem {
	/**
	* void Orion.BandageTarget('serial');
	* Apply bandage to target by serial.
	*/
	BandageTarget(serial: string): void;	

	/**
	* void Orion.CastTarget('nameOrIndex', 'serial');
	* Cast a spell on target by serial.
	*/
	CastTarget(nameOrIndex: string | number, serial: string): void;

	/**
	* void Orion.UseSkillTarget('nameOrIndex', 'serial');
	* Use a skill on target by serial.
	*/
	UseSkillTarget(nameOrIndex: string | number, serial: string): void;	
}