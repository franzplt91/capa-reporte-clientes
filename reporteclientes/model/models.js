sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		modelXS: function() {
			var sRootPath = jQuery.sap.getModulePath("com.sapreporteclientes")+ "/";
			var oModel = new sap.ui.model.odata.ODataModel(sRootPath + "demo/Service.xsodata");
			return oModel;
		}

	};
});