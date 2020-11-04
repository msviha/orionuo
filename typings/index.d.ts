import TextWindow from './Scripts/textWindow';

import CharacterMovement from './Scripts/characterMovement';
import ClientMacro from './Scripts/clientMacro';
import ClientOptions from './Scripts/clientOptions';
import Collections from './Scripts/collections';
import ContextMenu from './Scripts/contextMenu';
import Equipment from './Scripts/equipment';
import Gumps from './Scripts/gumps';
import InteractionWithFiles from './Scripts/interactionsWithFiles';
import InteractionWithOtherScripts from './Scripts/interactionWithOtherScripts';
import Journal from './Scripts/journal';
import Map from './Scripts/map';
import Menu from './Scripts/menu';
import NewTargetingSystem from './Scripts/newTargetingSystem';
import NonCategorized from './Scripts/nonCategorized';
import Objects from './Scripts/objects';
import ObjectsSearching from './Scripts/objectsSearching';
import Prompt from './Scripts/prompt';
import Shop from './Scripts/shop';
import Speech from './Scripts/speech';
import Targeting from './Scripts/targeting';
import Timers from './Scripts/timers';
import TradeWindow from './Scripts/tradeWindow';


declare global {
	const Orion: OrionStatic;
	const TextWindow: TextWindow;
	const Player: PlayerCharacter;
	const SelectedTile: SelectedTile;
	const Shared: Shared;
}

interface OrionStatic extends
	CharacterMovement,
	ClientMacro,
	ClientOptions,
	Collections,
	ContextMenu,
	Equipment,
	Gumps,
	InteractionWithFiles,
	InteractionWithOtherScripts,
	Journal,
	Map,
	Menu,
	NewTargetingSystem,
	NonCategorized,
	Objects,
	ObjectsSearching,
	Prompt,
	Shop,
	Speech,
	Targeting,
	Timers,
	TradeWindow { }
