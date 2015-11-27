var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var viewModelBaseModule = require("../common/view-model-base");
var viewTaskViewModelModule = require("../view-task/view-task-view-model");
var editTaskViewModelModule = require("../edit-task/edit-task-view-model");
var navigationModule = require("../../utils/navigation");
var serviceModule = require("../../utils/service");
var viewsModule = require("../../utils/views");
var TasksViewModel = (function (_super) {
    __extends(TasksViewModel, _super);
    function TasksViewModel() {
        _super.call(this);
        this._selectedDay = 1;
    }
    Object.defineProperty(TasksViewModel.prototype, "tasks", {
        get: function () {
            return this._tasks;
        },
        set: function (value) {
            if (this._tasks != value) {
                this._tasks = value;
                this.notifyPropertyChange("tasks", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TasksViewModel.prototype, "selectedDay", {
        get: function () {
            return this._selectedDay;
        },
        set: function (value) {
            if (this._selectedDay != value) {
                this._selectedDay = value;
                this.notifyPropertyChange("selectedDay", value);
                this.refresh();
            }
        },
        enumerable: true,
        configurable: true
    });
    TasksViewModel.prototype.addTask = function () {
        navigationModule.navigate({
            moduleName: viewsModule.Views.editTask,
            context: new editTaskViewModelModule.EditTaskViewModel()
        });
    };
    TasksViewModel.prototype.viewTask = function (args) {
        navigationModule.navigate({
            moduleName: viewsModule.Views.viewTask,
            context: args.view.bindingContext
        });
    };
    TasksViewModel.prototype.logout = function () {
        serviceModule.service.logout();
        navigationModule.navigate({
            moduleName: viewsModule.Views.login
        });
    };
    TasksViewModel.prototype.refresh = function () {
        var _this = this;
        if (!this.beginLoading())
            return;
        var getTasksMethod = getMethodByFilter(this.selectedDay);
        getTasksMethod.then(function (data) {
            var tasks = new Array();
            for (var i = 0; i < data.length; i++) {
                tasks.push(new viewTaskViewModelModule.ViewTaskViewModel(data[i]));
            }
            _this.tasks = tasks;
            _this.endLoading();
        }, function (error) {
            _this.endLoading();
        });
    };
    return TasksViewModel;
})(viewModelBaseModule.ViewModelBase);
exports.TasksViewModel = TasksViewModel;
function getMethodByFilter(selectedDay) {
    switch (selectedDay) {
        case 0:
            return serviceModule.service.getOverdueTasks();
        case 1:
            return serviceModule.service.getTasksForToday();
        case 2:
            return serviceModule.service.getTasksForTomorrow();
        default:
            return serviceModule.service.getTasksAfterTomorrow();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3Mtdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhc2tzLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOlsiVGFza3NWaWV3TW9kZWwiLCJUYXNrc1ZpZXdNb2RlbC5jb25zdHJ1Y3RvciIsIlRhc2tzVmlld01vZGVsLnRhc2tzIiwiVGFza3NWaWV3TW9kZWwuc2VsZWN0ZWREYXkiLCJUYXNrc1ZpZXdNb2RlbC5hZGRUYXNrIiwiVGFza3NWaWV3TW9kZWwudmlld1Rhc2siLCJUYXNrc1ZpZXdNb2RlbC5sb2dvdXQiLCJUYXNrc1ZpZXdNb2RlbC5yZWZyZXNoIiwiZ2V0TWV0aG9kQnlGaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsSUFBTyxtQkFBbUIsV0FBVywyQkFBMkIsQ0FBQyxDQUFDO0FBQ2xFLElBQU8sdUJBQXVCLFdBQVcsbUNBQW1DLENBQUMsQ0FBQztBQUM5RSxJQUFPLHVCQUF1QixXQUFXLG1DQUFtQyxDQUFDLENBQUM7QUFDOUUsSUFBTyxnQkFBZ0IsV0FBVyx3QkFBd0IsQ0FBQyxDQUFDO0FBQzVELElBQU8sYUFBYSxXQUFXLHFCQUFxQixDQUFDLENBQUM7QUFDdEQsSUFBTyxXQUFXLFdBQVcsbUJBQW1CLENBQUMsQ0FBQztBQUVsRDtJQUFvQ0Esa0NBQWlDQTtJQUlqRUE7UUFDSUMsaUJBQU9BLENBQUNBO1FBRVJBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLENBQUNBLENBQUNBO0lBQzFCQSxDQUFDQTtJQUVERCxzQkFBSUEsaUNBQUtBO2FBQVRBO1lBQ0lFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO1FBQ3ZCQSxDQUFDQTthQUVERixVQUFVQSxLQUF1REE7WUFDN0RFLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUN2QkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3BCQSxJ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