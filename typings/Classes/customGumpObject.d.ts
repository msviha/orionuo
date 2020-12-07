declare interface CustomGumpObject {

    AddBlending(state:number, sFactor?:number, dFactor?:number, serial?:number);
    /**
     * Add button to custom gump.
     * @param serial integer, item serial number. Returned in response to the gump as ReturnCode;
     * @param x integer, X coordinate
     * @param y integer, Y coordinate
     * @param graphic string, image number in normal state
     * @param graphicSelected string, number of the image in the selected state (mouse over the element)
     * @param graphicPressed string, image number in the pressed state
     * @param color string, button color
     * @param action integer, action type, 0 - go to the page, 1 - selection in the gump; Default value: 1;
     * @param toPage integer, page number for action=0; Default value: -1;
     */
    AddButton(serial:number, x:number, y:number, graphic:string, graphicSelected:string,
              graphicPressed:string, color:string, action?:number, toPage?:number):void;

    AddButtonTileArt(serial:number, x:number, y:number, graphic:string, graphicSelected:string,
                     graphicPressed:string, color:string, tileGraphic:string, tileColor:string,
                     tileX:number, tileY:number, action?:number, toPage?:number);

    AddCheckbox(serial:number, x:number, y:number, graphic:string, graphicSelected:string,
                graphicChecked:string|number, state:number, color?:string|number, text?:string, textColor?:string|number);

    AddCheckerTrans(x:number, y:number, width:number, height:number, serial?:number);

    AddColoredPolygone(x:number, y:number, width:number, height:number,
                       color?:string|number, scopeOnly?:number, lineWidth?:number, smooth?:number, serial?:number);

    AddComboBox(serial:number, x:number, y:number, graphic:string, compositeBackground:number,
                openGraphic:string, width:number, textOffsetY:number, showItemsCount?:number, centerMaximized?:number);

    AddComboBoxText(text:string, color?:string, selected?:number, width?:number, align?:string);

    AddDataBox(serial:number);

    AddEndGroup();

    AddGlobalColor(state:number, color?:string, serial?:number);

    AddGroup(group:number);

    AddGumpPic(x:number, y:number, graphic?:string, color?:string, serial?:number, colorSelected?:string, width?:number, height?:number);

    AddHitBox(serial:number, x:number, y:number, width:number, height:number, callOnMouseUp?:number, toPage?:number);

    AddHtmlGump(serial:number, x:number,  y:number, width:number, height:number, graphic:string,
                hasBackground?:number, hasScrollbar?:number, color?:string, text?:string);

    AddHtmlText(x:number,  y:number, width:number, height:number, color:string, text:string, serial?:number);

    AddLine(startX:number, startY:number, targetX:number, targetY:number, color?:string, lineWidth?:number, serial?:number);

    AddMinMaxButtons(serial:number, x:number, y:number, graphic:string, textOffsetY:number, minValue:number, maxValue:number, value:number);

    AddPage(page:number);

    AddRadio(serial:number, x:number, y:number, graphic:string, graphicSelected:string,
             graphicChecked:string|number, state:number, color?:string, text?:string, textColor?:string|number);

    AddResizepic(x:number, y:number, graphic:string, width:number, height:number, serial?:number, callOnMouseUp?:number);

    AddScissor(state:number, baseX?:number, baseY?:number, x?:number, y?:number, width?:number, height?:number, serial?:number);

    AddSlider(serial:number, x:number, y:number, graphic:string, graphicSelected:string, graphicPressed:string,
              backgroundGraphic:string, compositeBackground:number, vertical:number, width:number, minValue:number, maxValue:number, value:number);

    AddSpoiler(serial:number, x:number, y:number, minimized:number ,graphic:string|number, graphicSelected:string|number, graphicPressed:string|number,
               openedGraphic:string, openedGraphicSelected:string, openedGraphicPressed:string, color?:string);

    AddText(x:number, y:number, color:string, text:string, width?:number, serial?:number);

    AddTextEntry(serial:number, x:number, y:number, color:string, text:string, width:number, height:number, maxLength?:number);

    AddTilePic(x:number, y:number, graphic?:string|number, color?:string, serial?:number, colorSelected?:string, doubleDraw?:number);

    Clear();

    Close();

    Select(name:string, serial?:number, front?:boolean);

    SetCallback(callbackFunctionName:string);

    SetCloseOnButtonClick(state:boolean);

    SetNoClose(state:boolean);

    SetNoMove(state:boolean);

    SetPage(page:number);

    SetSpoilerText(text?:string, color?:string|number, colorSelected?:string|number, colorOpened?:string|number, font?:number);

    SetTextEntryPlaceholderText(text:string, color?:string, width?:number, font?:number, align?:string);

    SetTextParameters(state:number, position:number|string, color?:number, font?:number, width?:number, align?:number|string);

    SetX(x:number);

    SetY(y:number);

    Update();
}
