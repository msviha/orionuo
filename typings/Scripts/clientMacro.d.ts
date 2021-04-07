export default interface ClientMacro {
    /**
     * MacroObject Orion.CreateClientMacro('action', ['subAction']);
     * Creates a MacroObject instance with gives action and possible subactions.
     * Returns a MacroObject object.
     */
    CreateClientMacro(action?: string, subAction?: string): MacroObject;
}
