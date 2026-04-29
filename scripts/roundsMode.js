/*************************************************************************
 * File: roundsMode.js
 * This file contains functions that support the "Rounds" mode, 
 * including the "Log Round" modal.
*************************************************************************/

/*************************************************************************
 * @function updateSGS 
 * @Desc 
 * When the strokes, minutes or seconds fields are updated, 
 * update the speedgolf score accordingly.
 * @global roundStrokes: Form's strokes field
 * @global roundMinutes: Form's minutes field
 * @global roundSeconds: Form's seconds field
 *************************************************************************/
 function updateSGS() {
  GlobalRoundSGS.value = 
    (GlobalRoundStrokes.valueAsNumber + GlobalRoundMinutes.valueAsNumber) + 
    ":" + GlobalRoundSeconds.value
}
