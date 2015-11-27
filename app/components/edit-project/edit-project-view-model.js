var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var editViewModelBaseModule = require("../common/edit-view-model-base");
var notificationsModule = require("../../utils/notifications");
var navigationModule = require("../../utils/navigation");
var serviceModule = require("../../utils/service");
var constantsModule = require("../../utils/constants");
var EditProjectViewModel = (function (_super) {
    __extends(EditProjectViewModel, _super);
    function EditProjectViewModel(project) {
        _super.call(this, project);
    }
    Object.defineProperty(EditProjectViewModel.prototype, "deleteHeader", {
        get: function () {
            return constantsModule.deleteProjectMessage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProjectViewModel.prototype, "deleteMessage", {
        get: function () {
            return constantsModule.deleteProjectMessage;
        },
        enumerable: true,
        configurable: true
    });
    EditProjectViewModel.prototype.addItem = function (item) {
        return serviceModule.service.createProject(item);
    };
    EditProjectViewModel.prototype.updateItem = function (item) {
        return serviceModule.service.updateProject(item);
    };
    EditProjectViewModel.prototype.deleteItem = function (item) {
        return serviceModule.service.deleteProject(item);
    };
    EditProjectViewModel.prototype.validate = function () {
        if (!this.item.Name || this.item.Name === "") {
            notificationsModule.showError("Please enter name.");
            return false;
        }
        return _super.prototype.validate.call(this);
    };
    EditProjectViewModel.prototype.onItemDeleted = function (item) {
        _super.prototype.onItemDeleted.call(this, item);
        navigationModule.goBack();
    };
    return EditProjectViewModel;
})(editViewModelBaseModule.EditViewModelBase);
exports.EditProjectViewModel = EditProjectViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9qZWN0LXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGl0LXByb2plY3Qtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6WyJFZGl0UHJvamVjdFZpZXdNb2RlbCIsIkVkaXRQcm9qZWN0Vmlld01vZGVsLmNvbnN0cnVjdG9yIiwiRWRpdFByb2plY3RWaWV3TW9kZWwuZGVsZXRlSGVhZGVyIiwiRWRpdFByb2plY3RWaWV3TW9kZWwuZGVsZXRlTWVzc2FnZSIsIkVkaXRQcm9qZWN0Vmlld01vZGVsLmFkZEl0ZW0iLCJFZGl0UHJvamVjdFZpZXdNb2RlbC51cGRhdGVJdGVtIiwiRWRpdFByb2plY3RWaWV3TW9kZWwuZGVsZXRlSXRlbSIsIkVkaXRQcm9qZWN0Vmlld01vZGVsLnZhbGlkYXRlIiwiRWRpdFByb2plY3RWaWV3TW9kZWwub25JdGVtRGVsZXRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxJQUFPLHVCQUF1QixXQUFXLGdDQUFnQyxDQUFDLENBQUM7QUFDM0UsSUFBTyxtQkFBbUIsV0FBVywyQkFBMkIsQ0FBQyxDQUFDO0FBQ2xFLElBQU8sZ0JBQWdCLFdBQVcsd0JBQXdCLENBQUMsQ0FBQztBQUM1RCxJQUFPLGFBQWEsV0FBVyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3RELElBQU8sZUFBZSxXQUFXLHVCQUF1QixDQUFDLENBQUM7QUFFMUQ7SUFBMENBLHdDQUF5Q0E7SUFDL0VBLDhCQUFZQSxPQUFhQTtRQUNyQkMsa0JBQU1BLE9BQU9BLENBQUNBLENBQUNBO0lBQ25CQSxDQUFDQTtJQUVERCxzQkFBSUEsOENBQVlBO2FBQWhCQTtZQUNJRSxNQUFNQSxDQUFDQSxlQUFlQSxDQUFDQSxvQkFBb0JBLENBQUNBO1FBQ2hEQSxDQUFDQTs7O09BQUFGO0lBRURBLHNCQUFJQSwrQ0FBYUE7YUFBakJBO1lBQ0lHLE1BQU1BLENBQUNBLGVBQWVBLENBQUNBLG9CQUFvQkEsQ0FBQ0E7UUFDaERBLENBQUNBOzs7T0FBQUg7SUFFREEsc0NBQU9BLEdBQVBBLFVBQVFBLElBQVNBO1FBQ2JJLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQ3JEQSxDQUFDQTtJQUVESix5Q0FBVUEsR0FBVkEsVUFBV0EsSUFBU0E7UUFDaEJLLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQ3JEQSxDQUFDQTtJQUVETCx5Q0FBVUEsR0FBVkEsVUFBV0EsSUFBU0E7UUFDaEJNLE1BQU1BLENBQUNBLGFBQWFBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQ3JEQSxDQUFDQTtJQUVETix1Q0FBUUEsR0FBUkE7UUFDSU8sRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsSUFBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0NBLG1CQUFtQkEsQ0FBQ0EsU0FBU0EsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxDQUFDQTtZQUNwREEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDakJBLENBQUNBO1FBRURBLE1BQU1BLENBQUNBLGdCQUFLQSxDQUFDQSxRQUFRQSxXQUFFQSxDQUFDQTtJQUM1QkEsQ0FBQ0E7SUFFRFAsNENBQWFBLEdBQWJBLFVBQWNBLElBQVNBO1FBQ25CUSxnQkFBS0EsQ0FBQ0EsYUFBYUEsWUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDMUJBLGdCQUFnQkEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7SUFDOUJBLENBQUNBO0lBQ0xSLDJCQUFDQTtBQUFEQSxDQUFDQSxBQXRDRCxFQUEwQyx1QkFBdUIsQ0FBQyxpQkFBaUIsRUFzQ2xGO0FBdENZLDRCQUFvQix1QkFzQ2hDLENBQUEifQ==