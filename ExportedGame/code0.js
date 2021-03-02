gdjs.Platformer_32GameCode = {};
gdjs.Platformer_32GameCode.GDPlayerObjects1= [];
gdjs.Platformer_32GameCode.GDPlayerObjects2= [];
gdjs.Platformer_32GameCode.GDPlayerObjects3= [];
gdjs.Platformer_32GameCode.GDFloorObjects1= [];
gdjs.Platformer_32GameCode.GDFloorObjects2= [];
gdjs.Platformer_32GameCode.GDFloorObjects3= [];
gdjs.Platformer_32GameCode.GDLedgeObjects1= [];
gdjs.Platformer_32GameCode.GDLedgeObjects2= [];
gdjs.Platformer_32GameCode.GDLedgeObjects3= [];
gdjs.Platformer_32GameCode.GDButtonObjects1= [];
gdjs.Platformer_32GameCode.GDButtonObjects2= [];
gdjs.Platformer_32GameCode.GDButtonObjects3= [];
gdjs.Platformer_32GameCode.GDBulletObjects1= [];
gdjs.Platformer_32GameCode.GDBulletObjects2= [];
gdjs.Platformer_32GameCode.GDBulletObjects3= [];
gdjs.Platformer_32GameCode.GDAlienObjects1= [];
gdjs.Platformer_32GameCode.GDAlienObjects2= [];
gdjs.Platformer_32GameCode.GDAlienObjects3= [];
gdjs.Platformer_32GameCode.GDShootmeObjects1= [];
gdjs.Platformer_32GameCode.GDShootmeObjects2= [];
gdjs.Platformer_32GameCode.GDShootmeObjects3= [];
gdjs.Platformer_32GameCode.GDDoorObjects1= [];
gdjs.Platformer_32GameCode.GDDoorObjects2= [];
gdjs.Platformer_32GameCode.GDDoorObjects3= [];
gdjs.Platformer_32GameCode.GDBarrierObjects1= [];
gdjs.Platformer_32GameCode.GDBarrierObjects2= [];
gdjs.Platformer_32GameCode.GDBarrierObjects3= [];
gdjs.Platformer_32GameCode.GDmoverightObjects1= [];
gdjs.Platformer_32GameCode.GDmoverightObjects2= [];
gdjs.Platformer_32GameCode.GDmoverightObjects3= [];
gdjs.Platformer_32GameCode.GDmoveleftObjects1= [];
gdjs.Platformer_32GameCode.GDmoveleftObjects2= [];
gdjs.Platformer_32GameCode.GDmoveleftObjects3= [];
gdjs.Platformer_32GameCode.GDGunObjects1= [];
gdjs.Platformer_32GameCode.GDGunObjects2= [];
gdjs.Platformer_32GameCode.GDGunObjects3= [];
gdjs.Platformer_32GameCode.GDInstructionsObjects1= [];
gdjs.Platformer_32GameCode.GDInstructionsObjects2= [];
gdjs.Platformer_32GameCode.GDInstructionsObjects3= [];
gdjs.Platformer_32GameCode.GDKeyObjects1= [];
gdjs.Platformer_32GameCode.GDKeyObjects2= [];
gdjs.Platformer_32GameCode.GDKeyObjects3= [];
gdjs.Platformer_32GameCode.GDneedKeyObjects1= [];
gdjs.Platformer_32GameCode.GDneedKeyObjects2= [];
gdjs.Platformer_32GameCode.GDneedKeyObjects3= [];

gdjs.Platformer_32GameCode.conditionTrue_0 = {val:false};
gdjs.Platformer_32GameCode.condition0IsTrue_0 = {val:false};
gdjs.Platformer_32GameCode.condition1IsTrue_0 = {val:false};
gdjs.Platformer_32GameCode.condition2IsTrue_0 = {val:false};
gdjs.Platformer_32GameCode.condition3IsTrue_0 = {val:false};
gdjs.Platformer_32GameCode.conditionTrue_1 = {val:false};
gdjs.Platformer_32GameCode.condition0IsTrue_1 = {val:false};
gdjs.Platformer_32GameCode.condition1IsTrue_1 = {val:false};
gdjs.Platformer_32GameCode.condition2IsTrue_1 = {val:false};
gdjs.Platformer_32GameCode.condition3IsTrue_1 = {val:false};


gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Platformer_32GameCode.GDBulletObjects2});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Platformer_32GameCode.GDBulletObjects1});gdjs.Platformer_32GameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Platformer_32GameCode.GDPlayerObjects1, gdjs.Platformer_32GameCode.GDPlayerObjects2);


gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Platformer_32GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Platformer_32GameCode.GDPlayerObjects2[i].getVariableNumber(gdjs.Platformer_32GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.Platformer_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Platformer_32GameCode.GDPlayerObjects2[k] = gdjs.Platformer_32GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Platformer_32GameCode.GDPlayerObjects2.length = k;}if (gdjs.Platformer_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Platformer_32GameCode.GDPlayerObjects2 */
gdjs.Platformer_32GameCode.GDBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDBulletObjects2Objects, (( gdjs.Platformer_32GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Platformer_32GameCode.GDPlayerObjects2[0].getPointX("")) - 5, (( gdjs.Platformer_32GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Platformer_32GameCode.GDPlayerObjects2[0].getPointY("")) + 60, "");
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDBulletObjects2[i].addForce(-(500), 0, 1);
}
}}

}


{

/* Reuse gdjs.Platformer_32GameCode.GDPlayerObjects1 */

gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Platformer_32GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Platformer_32GameCode.GDPlayerObjects1[i].getVariableNumber(gdjs.Platformer_32GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.Platformer_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Platformer_32GameCode.GDPlayerObjects1[k] = gdjs.Platformer_32GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Platformer_32GameCode.GDPlayerObjects1.length = k;}if (gdjs.Platformer_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Platformer_32GameCode.GDPlayerObjects1 */
gdjs.Platformer_32GameCode.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDBulletObjects1Objects, (( gdjs.Platformer_32GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Platformer_32GameCode.GDPlayerObjects1[0].getPointX("")) + 100, (( gdjs.Platformer_32GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Platformer_32GameCode.GDPlayerObjects1[0].getPointY("")) + 60, "");
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDBulletObjects1[i].addForce(500, 0, 1);
}
}}

}


};gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Platformer_32GameCode.GDBulletObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDLedgeObjects1Objects = Hashtable.newFrom({"Ledge": gdjs.Platformer_32GameCode.GDLedgeObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Platformer_32GameCode.GDBulletObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDFloorObjects1Objects = Hashtable.newFrom({"Floor": gdjs.Platformer_32GameCode.GDFloorObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Platformer_32GameCode.GDBulletObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.Platformer_32GameCode.GDButtonObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDAlienObjects1Objects = Hashtable.newFrom({"Alien": gdjs.Platformer_32GameCode.GDAlienObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDmoveleftObjects1Objects = Hashtable.newFrom({"moveleft": gdjs.Platformer_32GameCode.GDmoveleftObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDAlienObjects1Objects = Hashtable.newFrom({"Alien": gdjs.Platformer_32GameCode.GDAlienObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDmoverightObjects1Objects = Hashtable.newFrom({"moveright": gdjs.Platformer_32GameCode.GDmoverightObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Platformer_32GameCode.GDPlayerObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDGunObjects1Objects = Hashtable.newFrom({"Gun": gdjs.Platformer_32GameCode.GDGunObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Platformer_32GameCode.GDPlayerObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDAlienObjects1Objects = Hashtable.newFrom({"Alien": gdjs.Platformer_32GameCode.GDAlienObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Platformer_32GameCode.GDBulletObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDAlienObjects1Objects = Hashtable.newFrom({"Alien": gdjs.Platformer_32GameCode.GDAlienObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Platformer_32GameCode.GDPlayerObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Platformer_32GameCode.GDDoorObjects1});gdjs.Platformer_32GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Platformer_32GameCode.GDPlayerObjects1, gdjs.Platformer_32GameCode.GDPlayerObjects2);


gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Platformer_32GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Platformer_32GameCode.GDPlayerObjects2[i].getVariableNumber(gdjs.Platformer_32GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 1 ) {
        gdjs.Platformer_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Platformer_32GameCode.GDPlayerObjects2[k] = gdjs.Platformer_32GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Platformer_32GameCode.GDPlayerObjects2.length = k;}if (gdjs.Platformer_32GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", true);
}}

}


{

/* Reuse gdjs.Platformer_32GameCode.GDPlayerObjects1 */

gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Platformer_32GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Platformer_32GameCode.GDPlayerObjects1[i].getVariableNumber(gdjs.Platformer_32GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)) == 0 ) {
        gdjs.Platformer_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Platformer_32GameCode.GDPlayerObjects1[k] = gdjs.Platformer_32GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Platformer_32GameCode.GDPlayerObjects1.length = k;}if (gdjs.Platformer_32GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("needKey"), gdjs.Platformer_32GameCode.GDneedKeyObjects1);
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDneedKeyObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDneedKeyObjects1[i].hide(false);
}
}}

}


};gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Platformer_32GameCode.GDPlayerObjects1});gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDKeyObjects1Objects = Hashtable.newFrom({"Key": gdjs.Platformer_32GameCode.GDKeyObjects1});gdjs.Platformer_32GameCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Platformer_32GameCode.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Platformer_32GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Platformer_32GameCode.GDPlayerObjects1[0].getPointX("")) + 100, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Platformer_32GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Platformer_32GameCode.GDPlayerObjects1[0].getPointY("")) - 100, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.5, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Platformer_32GameCode.GDPlayerObjects1);

gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Platformer_32GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Platformer_32GameCode.GDPlayerObjects1[i].getY() > 10000 ) {
        gdjs.Platformer_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Platformer_32GameCode.GDPlayerObjects1[k] = gdjs.Platformer_32GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Platformer_32GameCode.GDPlayerObjects1.length = k;}if (gdjs.Platformer_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Platformer_32GameCode.GDPlayerObjects1 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Platformer_32GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Platformer_32GameCode.GDPlayerObjects1[0].getPointY("")), "", 0);
}}

}


{


gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Platformer_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Platformer_32GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Platformer_32GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Platformer_32GameCode.GDPlayerObjects1);

gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
gdjs.Platformer_32GameCode.condition1IsTrue_0.val = false;
gdjs.Platformer_32GameCode.condition2IsTrue_0.val = false;
{
gdjs.Platformer_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.Platformer_32GameCode.condition0IsTrue_0.val ) {
{
{gdjs.Platformer_32GameCode.conditionTrue_1 = gdjs.Platformer_32GameCode.condition1IsTrue_0;
gdjs.Platformer_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8301932);
}
}if ( gdjs.Platformer_32GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Platformer_32GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Platformer_32GameCode.GDPlayerObjects1[i].getVariableNumber(gdjs.Platformer_32GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Platformer_32GameCode.condition2IsTrue_0.val = true;
        gdjs.Platformer_32GameCode.GDPlayerObjects1[k] = gdjs.Platformer_32GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Platformer_32GameCode.GDPlayerObjects1.length = k;}}
}
if (gdjs.Platformer_32GameCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.Platformer_32GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Platformer_32GameCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.Platformer_32GameCode.GDFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ledge"), gdjs.Platformer_32GameCode.GDLedgeObjects1);

gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
gdjs.Platformer_32GameCode.condition1IsTrue_0.val = false;
{
gdjs.Platformer_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDBulletObjects1Objects, gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDLedgeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Platformer_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Platformer_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDBulletObjects1Objects, gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDFloorObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.Platformer_32GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Platformer_32GameCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDBulletObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Platformer_32GameCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.Platformer_32GameCode.GDButtonObjects1);

gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Platformer_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDBulletObjects1Objects, gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDButtonObjects1Objects, false, runtimeScene, false);
}if (gdjs.Platformer_32GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Barrier"), gdjs.Platformer_32GameCode.GDBarrierObjects1);
/* Reuse gdjs.Platformer_32GameCode.GDBulletObjects1 */
/* Reuse gdjs.Platformer_32GameCode.GDButtonObjects1 */
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDBulletObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDBarrierObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDBarrierObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Platformer_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Platformer_32GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Platformer_32GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("moveleft"), gdjs.Platformer_32GameCode.GDmoveleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("moveright"), gdjs.Platformer_32GameCode.GDmoverightObjects1);
gdjs.copyArray(runtimeScene.getObjects("needKey"), gdjs.Platformer_32GameCode.GDneedKeyObjects1);
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDmoverightObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDmoverightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDmoveleftObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDmoveleftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayerObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDneedKeyObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDneedKeyObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Alien"), gdjs.Platformer_32GameCode.GDAlienObjects1);
gdjs.copyArray(runtimeScene.getObjects("moveleft"), gdjs.Platformer_32GameCode.GDmoveleftObjects1);

gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Platformer_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDAlienObjects1Objects, gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDmoveleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.Platformer_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Platformer_32GameCode.GDAlienObjects1 */
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDAlienObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDAlienObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDAlienObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDAlienObjects1[i].addForce(-(100), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Alien"), gdjs.Platformer_32GameCode.GDAlienObjects1);
gdjs.copyArray(runtimeScene.getObjects("moveright"), gdjs.Platformer_32GameCode.GDmoverightObjects1);

gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Platformer_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDAlienObjects1Objects, gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDmoverightObjects1Objects, false, runtimeScene, false);
}if (gdjs.Platformer_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Platformer_32GameCode.GDAlienObjects1 */
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDAlienObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDAlienObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDAlienObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDAlienObjects1[i].addForce(100, 0, 1);
}
}}

}


{


gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Platformer_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Platformer_32GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Platformer_32GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayerObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayerObjects1[i].returnVariable(gdjs.Platformer_32GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


{


gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Platformer_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Platformer_32GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Platformer_32GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayerObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayerObjects1[i].returnVariable(gdjs.Platformer_32GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Platformer_32GameCode.GDGunObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Platformer_32GameCode.GDPlayerObjects1);

gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Platformer_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDPlayerObjects1Objects, gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDGunObjects1Objects, false, runtimeScene, false);
}if (gdjs.Platformer_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Platformer_32GameCode.GDGunObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.Platformer_32GameCode.GDInstructionsObjects1);
/* Reuse gdjs.Platformer_32GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayerObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayerObjects1[i].returnVariable(gdjs.Platformer_32GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDGunObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDInstructionsObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDInstructionsObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Alien"), gdjs.Platformer_32GameCode.GDAlienObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Platformer_32GameCode.GDPlayerObjects1);

gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Platformer_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDPlayerObjects1Objects, gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDAlienObjects1Objects, false, runtimeScene, false);
}if (gdjs.Platformer_32GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Alien"), gdjs.Platformer_32GameCode.GDAlienObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Platformer_32GameCode.GDBulletObjects1);

gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Platformer_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDBulletObjects1Objects, gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDAlienObjects1Objects, false, runtimeScene, false);
}if (gdjs.Platformer_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Platformer_32GameCode.GDAlienObjects1 */
/* Reuse gdjs.Platformer_32GameCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDAlienObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDAlienObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDAlienObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDAlienObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Platformer_32GameCode.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Platformer_32GameCode.GDPlayerObjects1);

gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
gdjs.Platformer_32GameCode.condition1IsTrue_0.val = false;
{
gdjs.Platformer_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDPlayerObjects1Objects, gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDDoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Platformer_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Platformer_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}}
if (gdjs.Platformer_32GameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Platformer_32GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Key"), gdjs.Platformer_32GameCode.GDKeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Platformer_32GameCode.GDPlayerObjects1);

gdjs.Platformer_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Platformer_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDPlayerObjects1Objects, gdjs.Platformer_32GameCode.mapOfGDgdjs_46Platformer_9532GameCode_46GDKeyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Platformer_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Platformer_32GameCode.GDKeyObjects1 */
/* Reuse gdjs.Platformer_32GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Platformer_32GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDPlayerObjects1[i].returnVariable(gdjs.Platformer_32GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)).setNumber(1);
}
}{for(var i = 0, len = gdjs.Platformer_32GameCode.GDKeyObjects1.length ;i < len;++i) {
    gdjs.Platformer_32GameCode.GDKeyObjects1[i].hide();
}
}}

}


};

gdjs.Platformer_32GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Platformer_32GameCode.GDPlayerObjects1.length = 0;
gdjs.Platformer_32GameCode.GDPlayerObjects2.length = 0;
gdjs.Platformer_32GameCode.GDPlayerObjects3.length = 0;
gdjs.Platformer_32GameCode.GDFloorObjects1.length = 0;
gdjs.Platformer_32GameCode.GDFloorObjects2.length = 0;
gdjs.Platformer_32GameCode.GDFloorObjects3.length = 0;
gdjs.Platformer_32GameCode.GDLedgeObjects1.length = 0;
gdjs.Platformer_32GameCode.GDLedgeObjects2.length = 0;
gdjs.Platformer_32GameCode.GDLedgeObjects3.length = 0;
gdjs.Platformer_32GameCode.GDButtonObjects1.length = 0;
gdjs.Platformer_32GameCode.GDButtonObjects2.length = 0;
gdjs.Platformer_32GameCode.GDButtonObjects3.length = 0;
gdjs.Platformer_32GameCode.GDBulletObjects1.length = 0;
gdjs.Platformer_32GameCode.GDBulletObjects2.length = 0;
gdjs.Platformer_32GameCode.GDBulletObjects3.length = 0;
gdjs.Platformer_32GameCode.GDAlienObjects1.length = 0;
gdjs.Platformer_32GameCode.GDAlienObjects2.length = 0;
gdjs.Platformer_32GameCode.GDAlienObjects3.length = 0;
gdjs.Platformer_32GameCode.GDShootmeObjects1.length = 0;
gdjs.Platformer_32GameCode.GDShootmeObjects2.length = 0;
gdjs.Platformer_32GameCode.GDShootmeObjects3.length = 0;
gdjs.Platformer_32GameCode.GDDoorObjects1.length = 0;
gdjs.Platformer_32GameCode.GDDoorObjects2.length = 0;
gdjs.Platformer_32GameCode.GDDoorObjects3.length = 0;
gdjs.Platformer_32GameCode.GDBarrierObjects1.length = 0;
gdjs.Platformer_32GameCode.GDBarrierObjects2.length = 0;
gdjs.Platformer_32GameCode.GDBarrierObjects3.length = 0;
gdjs.Platformer_32GameCode.GDmoverightObjects1.length = 0;
gdjs.Platformer_32GameCode.GDmoverightObjects2.length = 0;
gdjs.Platformer_32GameCode.GDmoverightObjects3.length = 0;
gdjs.Platformer_32GameCode.GDmoveleftObjects1.length = 0;
gdjs.Platformer_32GameCode.GDmoveleftObjects2.length = 0;
gdjs.Platformer_32GameCode.GDmoveleftObjects3.length = 0;
gdjs.Platformer_32GameCode.GDGunObjects1.length = 0;
gdjs.Platformer_32GameCode.GDGunObjects2.length = 0;
gdjs.Platformer_32GameCode.GDGunObjects3.length = 0;
gdjs.Platformer_32GameCode.GDInstructionsObjects1.length = 0;
gdjs.Platformer_32GameCode.GDInstructionsObjects2.length = 0;
gdjs.Platformer_32GameCode.GDInstructionsObjects3.length = 0;
gdjs.Platformer_32GameCode.GDKeyObjects1.length = 0;
gdjs.Platformer_32GameCode.GDKeyObjects2.length = 0;
gdjs.Platformer_32GameCode.GDKeyObjects3.length = 0;
gdjs.Platformer_32GameCode.GDneedKeyObjects1.length = 0;
gdjs.Platformer_32GameCode.GDneedKeyObjects2.length = 0;
gdjs.Platformer_32GameCode.GDneedKeyObjects3.length = 0;

gdjs.Platformer_32GameCode.eventsList2(runtimeScene);
return;

}

gdjs['Platformer_32GameCode'] = gdjs.Platformer_32GameCode;
