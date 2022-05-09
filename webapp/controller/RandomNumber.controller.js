sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zapfi.project2.controller.RandomNumber", {
                onInit: function () {
                },
                onNavPress: function() {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("main");
                },
                onChange: function (oEvent) {
                    var value = oEvent.getParameter("value");
                    console.log(value);
                    var returnValue = Math.ceil(parseInt(value)*Math.random())
                    console.log(returnValue);
                    this.byId("displayNumber").setText(returnValue);
                }
                
            })

    });
