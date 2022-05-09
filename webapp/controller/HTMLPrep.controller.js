sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("zapfi.project2.controller.HTMLPrep", {
            onInit: function () {
                //var oModel = new JSONModel({ data: {}});
                //this.getView().setModel(oModel);
            },

            onNavPress: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("main");
            },

            handleLiveChange: function (oEvent) {
                var sValue = oEvent.getParameter("value");
                var cleaned = sValue;
                if(!this.byId("toFrom").getState()){
                    var cleaned = sValue.replace(/[<>&"]/g, function(m0){
                        return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;','\n':'<br />'}[m0] || m0;
                    });
                }else{
                    var cleaned = sValue.replace(/&lt;|&gt;|&amp;|&quot;/g, function(m0){
                        return {'&lt;':'<','&gt;':'>','&amp;':'&','&quot;':'"','<br />':'\n'}[m0] || m0;
                    });
                }
                this.byId("getValue").setText(cleaned);
            }

        });
    });
