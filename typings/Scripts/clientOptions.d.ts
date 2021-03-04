export default interface ClientOptions {
	ClientOptionGet(option:string):number
	/**
	* bool Orion.OptionSound();
	* Get status of Sound option.
	* Result: true if enabled.
	*/
	OptionSound(): boolean;

	/**
	* void Orion.OptionSound(state);
	* Set Sound option status.
	*/
	OptionSound(state): void;

	/**
	* int Orion.OptionSoundVolume();
	* Get status of Sound Volume option.
	* Result: Integer Value.
	*/
	OptionSoundVolume(): number;

	/**
	* void Orion.OptionSoundVolume(value);
	* Set Sound Volume option status.
	*/
	OptionSoundVolume(value): void;

	/**
	* bool Orion.OptionMusic();
	* Get status of Music option.
	* Result: true if enabled.
	*/
	OptionMusic(): boolean;	

	/**
	* void Orion.OptionMusic(state);
	* Set Music option status.
	*/
	OptionMusic(state): void;

	/**
	* int Orion.OptionMusicVolume();
	* Get status of Music option.
	* Result: Integer Value.
	*/
	OptionMusicVolume(): number;

	/**
	* void Orion.OptionMusicVolume(value);
	* Set Sound Volume option status.
	*/
	OptionMusicVolume(value): void;

	/**
	* bool Orion.OptionUseTooltips();
	* Get status of Use Tooltips option.
	* Result: true if enabled.
	*/
	OptionUseTooltips(): boolean;

	/**
	* void Orion.OptionUseTooltips(state);
	* Set Use Tooltips option status.
	*/
	OptionUseTooltips(state): void;

	/**
	* bool Orion.OptionAlwaysRun();
	* Get status of Always Run option.
	* Result: true if enabled.
	*/
	OptionAlwaysRun(): boolean;

	/**
	* void Orion.OptionAlwaysRun(state);
	* Set Always Run option status.
	*/
	OptionAlwaysRun(state): void;

	/**
	* bool Orion.OptionNewTargetSystem();
	* Get status of New Target System option.
	* Result: true if enabled.
	*/
	OptionNewTargetSystem(): boolean;

	/**
	* void Orion.OptionNewTargetSystem(state);
	* Set New Target System option status.
	*/
	OptionNewTargetSystem(state): void; 

	/**
	* bool Orion.OptionObjectHandles();
	* Get status of Object Handles option.
	* Result: true if enabled.
	*/
	OptionObjectHandles(): boolean;

	/**
	* void Orion.OptionObjectHandles(state);
	* Set Object Handles option status.
	*/
	OptionObjectHandles(state): void;

	/**
	* bool Orion.OptionScaleSpeech();
	* Get status of Scale Speech Duration option.
	* Result: true if enabled.
	*/
	OptionScaleSpeech(): boolean;

	/**
	* void Orion.OptionScaleSpeech(state);
	* Set Scale Speech Duration option status.
	*/
	OptionScaleSpeech(state): void;

	/**
	* int Orion.OptionScaleSpeechDelay();
	* Get status of Scale Speech Delay option.
	* Result: Integer Value.
	*/
	OptionScaleSpeechDelay(): number;

	/**
	* void Orion.OptionScaleSpeechDelay(value);
	* Set Scale Speech Delay option status.
	*/
	OptionScaleSpeechDelay(value): void;

	/**
	* bool Orion.OptionIgnoreGuildMessages();
	* Get status of Ignore Guild Messages option.
	* Result: true if enabled.
	*/
	OptionIgnoreGuildMessages(): boolean;

	/**
	* void Orion.OptionIgnoreGuildMessages(state);
	* Set Ignore Guild Messages option status.
	*/
	OptionIgnoreGuildMessages(state): void;

	/**
	* bool Orion.OptionIgnoreAllianceMessages();
	* Get status of Ignore Guild Messages option.
	* Result: true if enabled.
	*/
	OptionIgnoreAllianceMessages(): boolean;

	/**
	* void Orion.OptionIgnoreAllianceMessages(state);
	* Set Ignore Alliance Messages option status.
	*/
	OptionIgnoreAllianceMessages(state): void;

	/**
	* bool Orion.OptionDarkNights();
	* Get status of Dark Nights option.
	* Result: true if enabled.
	*/
	OptionDarkNights(): boolean;

	/**
	* void Orion.OptionDarkNights(state);
	* Set Dark Nights option status.
	*/
	OptionDarkNights(state): void;

	/**
	* bool Orion.OptionColoredLighting();
	* Get status of Colored Lighting option.
	* Result: true if enabled.
	*/
	OptionColoredLighting(): boolean;

	/**
	* void Orion.OptionColoredLighting(state);
	* Set Colored Lighting option status.
	*/
	OptionColoredLighting(state): void;

	/**
	* bool Orion.OptionCriminalActionsQuery();
	* Get status of Criminal Actions Query option.
	* Result: true if enabled.
	*/
	OptionCriminalActionsQuery(): boolean;

	/**
	* void Orion.OptionCriminalActionsQuery(state);
	* Set Criminal Actions Query option status.
	*/
	OptionCriminalActionsQuery(state): void;

	/**
	* bool Orion.OptionCircleOfTransparency();
	* Get status of Circle Of Transparency option.
	* Result: true if enabled.
	*/
	OptionCircleOfTransparency(): boolean;

	/**
	* void Orion.OptionCircleOfTransparency(state);
	* Set Circle Of Transparency option status.
	*/
	OptionCircleOfTransparency(state): void;

	/**
	* int Orion.OptionCircleOfTransparencyValue();
	* Get status of Circle Of Transparency value option.
	* Result: Integer Value.
	*/
	OptionCircleOfTransparencyValue(): number;

	/**
	* void Orion.OptionCircleOfTransparencyValue(value);
	* Set the Circle Of Transparency Value option status.
	*/
	OptionCircleOfTransparencyValue(value): void;

	/**
	* bool Orion.OptionLockResizingGameWindow();
	* Get the status of the Lock Resizing Game Window option.
	* Result: true if enabled.
	*/
	OptionLockResizingGameWindow(): boolean;

	/**
	* void Orion.OptionLockResizingGameWindow(state);
	* Set the Lock Resizing Game Window option status.
	*/
	OptionLockResizingGameWindow(state): void;

	/**
	* int Orion.OptionFPSValue();
	* Get the state of the FPS Value option.
	* Result: Integer Value.
	*/
	OptionFPSValue();

	/**
	* void Orion.OptionFPSValue(value);
	* Set the state of the FPS Value option.
	*/
	OptionFPSValue(value): void;

	/**
	* bool Orion.OptionUseScalingGameWindow();
	* Get the status of the Use Scaling Game Window option.
	* Result: true if enabled.
	*/
	OptionUseScalingGameWindow(): boolean;

	/**
	* void Orion.OptionUseScalingGameWindow(state);
	* Set the Use Scaling Game Window option status.
	*/
	OptionUseScalingGameWindow(state): void;

	/**
	* int Orion.OptionDrawStatusState();
	* Get the status of the Draw Status State option.
	* Result: Integer Value.
	*/
	OptionDrawStatusState(): number;

	/**
	* void Orion.OptionDrawStatusState(state);
	* Set the Draw Status State option status.
	*/
	OptionDrawStatusState(state): void;

	/**
	* bool Orion.OptionDrawStumps();
	* Get the status of the Draw Stumps option.
	* Result: true if enabled.
	*/
	OptionDrawStumps(): boolean;

	/**
	* void Orion.OptionDrawStumps(state);
	* Set the Draw Stumps option status.
	*/
	OptionDrawStumps(state): void;

	/**
	* bool Orion.OptionMarkingCaves();
	* Get the status of the Marking Caves option.
	* Result: true if enabled.
	*/
	OptionMarkingCaves(): boolean;

	/**
	* void Orion.OptionMarkingCaves(state);
	* Set the Marking Caves option status.
	*/
	OptionMarkingCaves(state): void;

	/**
	* bool Orion.OptionNoVegetation();
	* Get the status of the No Vegetation option.
	* Result: true if enabled.
	*/
	OptionNoVegetation(): boolean;

	/**
	* void Orion.OptionNoVegetation(state);
	* Set the No Vegetation option status.
	*/
	OptionNoVegetation(state): void;

	/**
	* bool Orion.OptionNoFieldsAnimation();
	* Get the status of the No Fields Animation option.
	* Result: true if enabled.
	*/
	OptionNoFieldsAnimation(): boolean;

	/**
	* void Orion.OptionNoFieldsAnimation(state);
	* Set the No Fields Animation option status.
	*/
	OptionNoFieldsAnimation(state): void;

	/**
	* bool Orion.OptionStandardCharactesFrameRate();
	* Get the status of the Standard Charactes FrameRate option.
	* Result: true if enabled.
	*/
	OptionStandardCharactesFrameRate(): boolean;

	/**
	* void Orion.OptionStandardCharactesFrameRate(state);
	* Set the Standard Charactes FrameRate option status.
	*/
	OptionStandardCharactesFrameRate(state): void;

	/**
	* bool Orion.OptionStandardItemsFrameRate();
	* Get the status of the Standard Items Frame Rate option.
	* Result: true if enabled.
	*/
	OptionStandardItemsFrameRate(): boolean;

	/**
	* void Orion.OptionStandardItemsFrameRate(state);
	* Set the Standard Items Frame Rate option status.
	*/
	OptionStandardItemsFrameRate(state): void;

	/**
	* bool Orion.OptionLockGumpsMoving();
	* Get the status of the Lock Gumps Moving option.
	* Result: true if enabled.
	*/
	OptionLockGumpsMoving(): boolean;

	/**
	* void Orion.OptionLockGumpsMoving(state);
	* Set the Lock Gumps Moving option status.
	*/
	OptionLockGumpsMoving(state): void;

	/**
	* bool Orion.OptionEnterChat();
	* Get the status of the Enter Chat option.
	* Result: true if enabled.
	*/
	OptionEnterChat(): boolean;

	/**
	* void Orion.OptionEnterChat(state);
	* Set the Enter Chat option status.
	*/
	OptionEnterChat(state): void;

	/**
	* int Orion.OptionHiddenCharacters();
	* Get the status of the Hidden Characters option.
	* Result: Integer Value.
	*/
	OptionHiddenCharacters(): number;

	/**
	* void Orion.OptionHiddenCharacters(state);
	* Set the Hidden Characters option status.
	*/
	OptionHiddenCharacters(state): void;

	/**
	* int Orion.OptionHiddenCharactersAlpha();
	* Get the status of the Hidden Characters Alpha option.
	* Result: Integer Value.
	*/
	OptionHiddenCharactersAlpha(): number;

	/**
	* void Orion.OptionHiddenCharactersAlpha(value);
	* Set the Hidden Characters Alpha option status.
	*/
	OptionHiddenCharactersAlpha(value): void;

	/**
	* bool Orion.OptionHiddenCharactersModeOnlyForSelf();
	* Get the status of the Hidden Characters Mode Only For Self option.
	* Result: true if enabled.
	*/
	OptionHiddenCharactersModeOnlyForSelf(): boolean;

	/**
	* void Orion.OptionHiddenCharactersModeOnlyForSelf(state);
	* Set the Hidden Characters Mode Only For Self option status.
	*/
	OptionHiddenCharactersModeOnlyForSelf(state): void;

	/**
	* bool Orion.OptionTransparentSpellIcons();
	* Get the status of the Transparent Spell Icons option.
	* Result: true if enabled.
	*/
	OptionTransparentSpellIcons(): boolean;

	/**
	* void Orion.OptionTransparentSpellIcons(state);
	* Set the Transparent Spell Icons option status.
	*/
	OptionTransparentSpellIcons(state): void;

	/**
	* int Orion.OptionSpellIconsAlpha();
	* Get the status of the Spell Icons Alpha option.
	* Result: Integer Value.
	*/
	OptionSpellIconsAlpha(): number;

	/**
	* void Orion.OptionSpellIconsAlpha(value);
	* Set the Spell Icons Alpha option status.
	*/
	OptionSpellIconsAlpha(value): void;

	/**
	* bool Orion.OptionFastRotation();
	* Get the status of the Fast Rotation option.
	* Result: true if enabled.
	*/
	OptionFastRotation(): boolean;

	/**
	* void Orion.OptionFastRotation(state);
	* Set the Fast Rotation option status.
	*/
	OptionFastRotation(state): void;
}
