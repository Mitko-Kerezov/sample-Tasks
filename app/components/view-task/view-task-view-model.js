var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var viewModelBaseModule = require("../common/view-model-base");
var editTaskViewModelModule = require("../edit-task/edit-task-view-model");
var serviceModule = require("../../utils/service");
var navigationModule = require("../../utils/navigation");
var viewsModule = require("../../utils/views");
var ViewTaskViewModel = (function (_super) {
    __extends(ViewTaskViewModel, _super);
    function ViewTaskViewModel(task) {
        _super.call(this);
        this.task = task;
        this.pictureUrl = null;
        this.loadProject();
    }
    Object.defineProperty(ViewTaskViewModel.prototype, "task", {
        get: function () {
            return this._task;
        },
        set: function (value) {
            if (this._task != value) {
                this._task = value;
                this.notifyPropertyChange("task", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewTaskViewModel.prototype, "project", {
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
    Object.defineProperty(ViewTaskViewModel.prototype, "pictureUrl", {
        get: function () {
            return this._pictureUrl;
        },
        set: function (value) {
            if (this._pictureUrl !== value) {
                this._pictureUrl = value;
                this.notifyPropertyChange("pictureUrl", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ViewTaskViewModel.prototype.editTask = function () {
        navigationModule.navigate({
            moduleName: viewsModule.Views.editTask,
            context: new editTaskViewModelModule.EditTaskViewModel(this.task)
        });
    };
    ViewTaskViewModel.prototype.completeTask = function () {
        var _this = this;
        this.task.IsCompleted = !this.task.IsCompleted;
        this.task.CompletionDate = this.task.IsCompleted ? new Date() : null;
        this.beginLoading();
        serviceModule.service.updateTask(this.task).then(function (data) {
            _this.endLoading();
        }, function (error) {
            _this.endLoading();
        });
    };
    ViewTaskViewModel.prototype.refresh = function () {
        this.loadPhoto();
        this.loadProject();
    };
    ViewTaskViewModel.prototype.loadPhoto = function () {
        var _this = this;
        if (this.task.Photo) {
            if (!this.beginLoading())
                return;
            serviceModule.service.getDownloadUrlFromId(this.task.Photo).then(function (url) {
                _this.pictureUrl = url;
                _this.endLoading();
            }, function (error) {
                _this.endLoading();
            });
        }
    };
    ViewTaskViewModel.prototype.loadProject = function () {
        var _this = this;
        if (this.task.Project) {
            if (!this.beginLoading())
                return;
            serviceModule.service.getProject(this.task.Project).then(function (project) {
                _this.project = project;
                _this.endLoading();
            }, function (error) {
                _this.endLoading();
            });
        }
    };
    return ViewTaskViewModel;
})(viewModelBaseModule.ViewModelBase);
exports.ViewTaskViewModel = ViewTaskViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10YXNrLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LXRhc2stdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6WyJWaWV3VGFza1ZpZXdNb2RlbCIsIlZpZXdUYXNrVmlld01vZGVsLmNvbnN0cnVjdG9yIiwiVmlld1Rhc2tWaWV3TW9kZWwudGFzayIsIlZpZXdUYXNrVmlld01vZGVsLnByb2plY3QiLCJWaWV3VGFza1ZpZXdNb2RlbC5waWN0dXJlVXJsIiwiVmlld1Rhc2tWaWV3TW9kZWwuZWRpdFRhc2siLCJWaWV3VGFza1ZpZXdNb2RlbC5jb21wbGV0ZVRhc2siLCJWaWV3VGFza1ZpZXdNb2RlbC5yZWZyZXNoIiwiVmlld1Rhc2tWaWV3TW9kZWwubG9hZFBob3RvIiwiVmlld1Rhc2tWaWV3TW9kZWwubG9hZFByb2plY3QiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBTyxtQkFBbUIsV0FBVywyQkFBMkIsQ0FBQyxDQUFDO0FBQ2xFLElBQU8sdUJBQXVCLFdBQVcsbUNBQW1DLENBQUMsQ0FBQztBQUU5RSxJQUFPLGFBQWEsV0FBVyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3RELElBQU8sZ0JBQWdCLFdBQVcsd0JBQXdCLENBQUMsQ0FBQztBQUM1RCxJQUFPLFdBQVcsV0FBVyxtQkFBbUIsQ0FBQyxDQUFDO0FBR2xEO0lBQXVDQSxxQ0FBaUNBO0lBS3BFQSwyQkFBWUEsSUFBU0E7UUFDakJDLGlCQUFPQSxDQUFDQTtRQUVSQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNqQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFFdkJBLElBQUlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQUVERCxzQkFBSUEsbUNBQUlBO2FBQVJBO1lBQ0lFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO1FBQ3RCQSxDQUFDQTthQUVERixVQUFTQSxL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