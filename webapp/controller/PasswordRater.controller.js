sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("zapfi.project2.controller.PasswordRater", {
            onInit: function () {
            },

            onNavPress: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("main");
            },

            handleLiveChange: function (oEvent) {
                var newVal = "1";
                var sValue = oEvent.getParameter("value");
                if(sValue.length >= 8 && sValue.match(/([0-9].*|(?=.*[0-9]))[A-Z]+/gi)){
                    if(sValue.match(/[\!|\@|\#|\$|\%|\^|\&|\*]+/g)) newVal = "3"
                    else  newVal = "2"
                }else  newVal = "1"

                this.getView().getModel("localData").setProperty("/PasswordRating", newVal)
            }

        });
    });
