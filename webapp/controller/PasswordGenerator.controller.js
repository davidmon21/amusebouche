sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("zapfi.project2.controller.PasswordGenerator", {
            onInit: function () {
            },

            onNavPress: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("main");
            },

            copyPassword: function () {
                navigator.clipboard.writeText(this.getView().byId("thePassword").getValue());
            },
            generatePassword: function (oEvent) {
                const alphabet="abcdefghijklmnopqrstuvwxyz";
                const upperAlphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                const specialCharacters="$&!#+=";
                const specialCharacters2="%^!()[]";
                const numbers = "0123456789"
                
                var plength=this.getView().byId("plength").getValue();
                var spcc = 0
                var spcc2 = 0
                var uac = 0
                var numc = 0

                var pass = ""
                function random_sample(size,source){
                    var sourceSize = source.length
                    var returnStr = ""
                    for(let i = 0; i<size; i++){
                        returnStr+=source[Math.floor(Math.random()*sourceSize)]
                    }
                    return returnStr
                }

                if(this.getView().byId("spc1").getSelected() === true){
                    spcc = Math.ceil(Math.random()*(plength/5))
                    pass+=random_sample(spcc,specialCharacters)
                }

                if(this.getView().byId("spc2").getSelected() === true){
                    spcc2 = Math.ceil(Math.random()*(plength/5))
                    pass+=random_sample(spcc2,specialCharacters2)
                }

                if(this.getView().byId("ual").getSelected() === true){
                    uac = Math.ceil(Math.random()*(plength/5))
                    pass+=random_sample(uac,upperAlphabet)
                }
                if(this.getView().byId("num").getSelected() === true){
                    numc = Math.ceil(Math.random()*(plength/5))
                    pass+=random_sample(numc,numbers)
                }

                pass+=random_sample(plength-uac-spcc2-spcc-numc, alphabet)

                pass = pass.split('').sort(function(){return 0.5-Math.random()}).join('')

                this.byId("thePassword").setValue(pass);

            }

        });
    });
