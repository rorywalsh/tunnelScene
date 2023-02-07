// GUI
const addPositionalControls = function (mesh) {
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    var panel = new BABYLON.GUI.StackPanel();
    panel.width = "220px";
    panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
    advancedTexture.addControl(panel);

    var header = new BABYLON.GUI.TextBlock();
    header.text = "Y-rotation: 0 deg";
    header.height = "30px";
    header.color = "white";
    panel.addControl(header);

    var sliderX = new BABYLON.GUI.Slider();
    sliderX.minimum = -60;
    sliderX.maximum = 60;
    sliderX.value = 0;
    sliderX.isVertical = true;
    sliderX.height = "200px";
    sliderX.width = "20px";
    sliderX.onValueChangedObservable.add(function (value) {
        if (mesh) {
            mesh[0].position.x = value;
            console.log("Position X:", value);
        }
    });
    panel.addControl(sliderX);
    
    var sliderY = new BABYLON.GUI.Slider();
    sliderY.minimum = -60;
    sliderY.maximum = 60;
    sliderY.value = 0;
    sliderY.isVertical = true;
    sliderY.height = "200px";
    sliderY.width = "20px";
    sliderY.onValueChangedObservable.add(function (value) {
        if (mesh) {
            mesh[0].position.y = value;
            console.log("Position Y:", value);
        }
    });
    panel.addControl(sliderY);

    var sliderZ = new BABYLON.GUI.Slider();
    sliderZ.minimum = -60;
    sliderZ.maximum = 60;
    sliderZ.value = 0;
    sliderZ.isVertical = true;
    sliderZ.height = "200px";
    sliderZ.width = "20px";
    sliderZ.onValueChangedObservable.add(function (value) {
        if (mesh) {
            mesh[0].position.z = value;
            console.log("Position Z:", value);
        }
    });
    panel.addControl(sliderZ);


}