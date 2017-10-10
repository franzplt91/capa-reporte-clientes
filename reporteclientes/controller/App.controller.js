sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/sapreporteclientes/model/models"
], function(Controller,models) {
	"use strict";

	return Controller.extend("com.sapreporteclientes.controller.App", {
		onInit: function() {
			var myModel = models.modelXS();
			this.getView().setModel(myModel);
			this.getView().getModel().refresh();
		}
	});
});