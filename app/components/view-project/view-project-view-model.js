var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var viewModelBaseModule = require("../common/view-model-base");
var viewTaskViewModelModule = require("../view-task/view-task-view-model");
var editTaskViewModelModule = require("../edit-task/edit-task-view-model");
var editProjectViewModelModule = require("../edit-project/edit-project-view-model");
var serviceModule = require("../../utils/service");
var navigationModule = require("../../utils/navigation");
var viewsModule = require("../../utils/views");
var ViewProjectViewModel = (function (_super) {
    __extends(ViewProjectViewModel, _super);
    function ViewProjectViewModel(project) {
        _super.call(this);
        this.project = project;
        this.refresh();
    }
    Object.defineProperty(ViewProjectViewModel.prototype, "project", {
        get: function () {
            return this._project;
        },
        set: function (value) {
            if (this._project != value) {
                this._project = value;
                this.notifyPropertyChange("project", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewProjectViewModel.prototype, "tasks", {
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
    Object.defineProperty(ViewProjectViewModel.prototype, "tasksCount", {
        get: function () {
            if (this.tasks) {
                return this.tasks.length;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    ViewProjectViewModel.prototype.editProject = function () {
        navigationModule.navigate({
            moduleName: viewsModule.Views.editProject,
            context: new editProjectViewModelModule.EditProjectViewModel(this.project)
        });
    };
    ViewProjectViewModel.prototype.addTask = function () {
        var editTaskViewModel = new editTaskViewModelModule.EditTaskViewModel();
        editTaskViewModel.project = this.project;
        navigationModule.navigate({
            moduleName: viewsModule.Views.editTask,
            context: editTaskViewModel
        });
    };
    ViewProjectViewModel.prototype.viewTask = function (args) {
        navigationModule.navigate({
            moduleName: viewsModule.Views.viewTask,
            context: args.view.bindingContext
        });
    };
    ViewProjectViewModel.prototype.refresh = function () {
        var _this = this;
        if (!this.beginLoading())
            return;
        serviceModule.service.getTasksByProject(this.project)
            .then(function (data) {
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
    return ViewProjectViewModel;
})(viewModelBaseModule.ViewModelBase);
exports.ViewProjectViewModel = ViewProjectViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1wcm9qZWN0LXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LXByb2plY3Qtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6WyJWaWV3UHJvamVjdFZpZXdNb2RlbCIsIlZpZXdQcm9qZWN0Vmlld01vZGVsLmNvbnN0cnVjdG9yIiwiVmlld1Byb2plY3RWaWV3TW9kZWwucHJvamVjdCIsIlZpZXdQcm9qZWN0Vmlld01vZGVsLnRhc2tzIiwiVmlld1Byb2plY3RWaWV3TW9kZWwudGFza3NDb3VudCIsIlZpZXdQcm9qZWN0Vmlld01vZGVsLmVkaXRQcm9qZWN0IiwiVmlld1Byb2plY3RWaWV3TW9kZWwuYWRkVGFzayIsIlZpZXdQcm9qZWN0Vmlld01vZGVsLnZpZXdUYXNrIiwiVmlld1Byb2plY3RWaWV3TW9kZWwucmVmcmVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxJQUFPLG1CQUFtQixXQUFXLDJCQUEyQixDQUFDLENBQUM7QUFDbEUsSUFBTyx1QkFBdUIsV0FBVyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQzlFLElBQU8sdUJBQXVCLFdBQVcsbUNBQW1DLENBQUMsQ0FBQztBQUM5RSxJQUFPLDBCQUEwQixXQUFXLHlDQUF5QyxDQUFDLENBQUM7QUFFdkYsSUFBTyxhQUFhLFdBQVcscUJBQXFCLENBQUMsQ0FBQztBQUN0RCxJQUFPLGdCQUFnQixXQUFXLHdCQUF3QixDQUFDLENBQUM7QUFDNUQsSUFBTyxXQUFXLFdBQVcsbUJBQW1CLENBQUMsQ0FBQztBQUdsRDtJQUEwQ0Esd0NBQWlDQTtJQUl2RUEsOEJBQVlBLE9BQVlBO1FBQ3BCQyxpQkFBT0EsQ0FBQ0E7UUFFUkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0E7UUFDdkJBLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO0lBQ25CQSxDQUFDQTtJQUVERCxzQkFBSUEseUNBQU9BO2FBQVhBO1lBQ0lFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFB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