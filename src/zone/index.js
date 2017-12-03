import {UPDATE_ZONES} from "../actionTypes";

const zoneStatus =
    '<Response Status="OK">\n' +
    '<Item Name="NumberZones">6</Item>\n' +
    '<Item Name="CurrentZoneID">10002</Item>\n' +
    '<Item Name="CurrentZoneIndex">1</Item>\n' +
    '<Item Name="ZoneName0">Player</Item>\n' +
    '<Item Name="ZoneID0">0</Item>\n' +
    '<Item Name="ZoneGUID0">{4E312AFF-6716-48A3-90B4-39B27DE2577F}</Item>\n' +
    '<Item Name="ZoneDLNA0">0</Item>\n' +
    '<Item Name="ZoneName1">Music</Item>\n' +
    '<Item Name="ZoneID1">10002</Item>\n' +
    '<Item Name="ZoneGUID1">{1C69970D-1669-4A35-8489-D72807265126}</Item>\n' +
    '<Item Name="ZoneDLNA1">0</Item>\n' +
    '<Item Name="ZoneName2">Video</Item>\n' +
    '<Item Name="ZoneID2">10009</Item>\n' +
    '<Item Name="ZoneGUID2">{7EE0DF13-E080-46A1-9F38-8BE1FD9F36DB}</Item>\n' +
    '<Item Name="ZoneDLNA2">0</Item>\n' +
    '<Item Name="ZoneName3">WDM</Item>\n' +
    '<Item Name="ZoneID3">10015</Item>\n' +
    '<Item Name="ZoneGUID3">{C65DCE15-B142-478C-B2A2-3B6F775F6BCA}</Item>\n' +
    '<Item Name="ZoneDLNA3">0</Item>\n' +
    '<Item Name="ZoneName4">test</Item>\n' +
    '<Item Name="ZoneID4">10020</Item>\n' +
    '<Item Name="ZoneGUID4">{61846DCC-1CE9-4323-8DE8-969FD6426D4D}</Item>\n' +
    '<Item Name="ZoneDLNA4">0</Item>\n' +
    '<Item Name="ZoneName5">MinPhase</Item>\n' +
    '<Item Name="ZoneID5">10040</Item>\n' +
    '<Item Name="ZoneGUID5">{A341E471-ECFD-4E0E-B4EA-6B15E1CB2879}</Item>\n' +
    '<Item Name="ZoneDLNA5">0</Item>\n' +
    '</Response>\n';

xmlToJson = (xml) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, "application/xml");
    return {};
};

getZoneState = () => {
    // TODO replace with an async call to MCWS - http://paradroid:63412/MCWS/v1/Playback/Zones
    return xmlToJson(zoneStatus);
};

/**
 * An action creator that yields an UPDATE_ZONES action containing the current zone state as the payload.
 * @returns {{type, payload: *}}
 */
updateZones = () => {
    return {
        type: UPDATE_ZONES,
        payload: getZoneState()
    };
};