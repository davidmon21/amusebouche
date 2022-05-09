sap.ui.define([
    'sap/ui/core/Control'
], function(Control) {
    "use strict";
    return Control.extend("zapfi.project2.control.CrazyText",{
        metadata: {
            properties: {
                "text": "string",
                "crazyMessage": "string"
            }
        },
        init: function(){
        },
        onclick: function(oControl){
            
        },
        renderer: function(oRM,oControl){
            console.log(text);
            var text = oControl.getProperty("text").split('').map((v) => Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()).join('')
            oRM.write("<div><p>"+text+"</p></div>");
            alert(oControl.getProperty("crazyMessage"));
        }
    })
})