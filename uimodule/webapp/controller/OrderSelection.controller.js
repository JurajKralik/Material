sap.ui.define([
    "com/myorg/Material/controller/BaseController",
    "sap/ui/model/json/JSONModel"
], function(
    BaseController,
    JSONModel
) {
	"use strict";

	return BaseController.extend("com.myorg.Material.controller.OrderSelection", {
        /**
         * @override
         */
        /* onInit: function() {
            Controller.prototype.onInit.apply(this, arguments);

            var materialModel = this.getView().getModel("material");
            materialModel.callFunction("/GetOrderTypes",{
                method: "GET", success : function(orderTypes){this.getView().setModel(new JSONModel(orderTypes), "orderTypes")}
            })
        }, */
        onPressSearch: function() {
            var orderNumber = this.getView().byId("orderInput").getValue();
            this.getRouter().navTo("RouteOrderDetails", {orderNumber: orderNumber});
        }
	});
})