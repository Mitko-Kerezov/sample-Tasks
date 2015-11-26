var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cameraModule = require("camera");
var imageSourceModule = require("image-source");
var editViewModelBaseModule = require("../common/edit-view-model-base");
var notificationsModule = require("../../utils/notifications");
var navigationModule = require("../../utils/navigation");
var serviceModule = require("../../utils/service");
var constantsModule = require("../../utils/constants");
var EditTaskViewModel = (function (_super) {
    __extends(EditTaskViewModel, _super);
    function EditTaskViewModel(task) {
        _super.call(this, task);
        this.loadProject();
        this.loadPhoto();
    }
    Object.defineProperty(EditTaskViewModel.prototype, "project", {
        get: function () {
            return this._project;
        },
        set: function (value) {
            if (this._project !== value) {
                this._project = value;
                this.item.Project = this.project.Id;
                this.notifyPropertyChange("project", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditTaskViewModel.prototype, "picture", {
        get: function () {
            return this._picture;
        },
        set: function (value) {
            if (this._picture != value) {
                this._picture = value;
                this.notifyPropertyChange("picture", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditTaskViewModel.prototype, "deleteHeader", {
        get: function () {
            return constantsModule.deleteTaskHeader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditTaskViewModel.prototype, "deleteMessage", {
        get: function () {
            return constantsModule.deleteTaskMessage;
        },
        enumerable: true,
        configurable: true
    });
    EditTaskViewModel.prototype.addItem = function (item) {
        return serviceModule.service.createTask(item);
    };
    EditTaskViewModel.prototype.updateItem = function (item) {
        return serviceModule.service.updateTask(item);
    };
    EditTaskViewModel.prototype.deleteItem = function (item) {
        return serviceModule.service.deleteTask(item);
    };
    EditTaskViewModel.prototype.takePicture = function () {
        var _this = this;
        var options = {
            width: 320,
            height: 480,
            keepAspectRatio: true
        };
        cameraModule.takePicture(options).then(function (picture) {
            _this.picture = picture;
        });
    };
    EditTaskViewModel.prototype.validate = function () {
        if (!this.item.Name || this.item.Name === "") {
            notificationsModule.showError("Please enter name.");
            return false;
        }
        return _super.prototype.validate.call(this);
    };
    EditTaskViewModel.prototype.onSaving = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.picture) {
                serviceModule.service.uploadPicture(_this.picture).then(function (data) {
                    item.Photo = data.result.Id;
                    resolve(false);
                }, reject);
            }
            else {
                resolve(false);
            }
        });
    };
    EditTaskViewModel.prototype.onItemDeleted = function (item) {
        _super.prototype.onItemDeleted.call(this, item);
        navigationModule.goBack();
    };
    EditTaskViewModel.prototype.loadPhoto = function () {
        var _this = this;
        if (this.item.Photo) {
            if (!this.beginLoading())
                return;
            serviceModule.service.getDownloadUrlFromId(this.item.Photo).then(function (url) {
                imageSourceModule.fromUrl(url).then(function (imageSource) {
                    _this.picture = imageSource;
                    _this.endLoading();
                });
            }).catch(function (error) {
                _this.endLoading();
            });
        }
    };
    EditTaskViewModel.prototype.loadProject = function () {
        var _this = this;
        if (this.item.Project) {
            if (!this.beginLoading())
                return;
            serviceModule.service.getProject(this.item.Project).then(function (project) {
                _this.project = project;
                _this.endLoading();
            }, function (error) {
                _this.endLoading();
            });
        }
    };
    return EditTaskViewModel;
})(editViewModelBaseModule.EditViewModelBase);
exports.EditTaskViewModel = EditTaskViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10YXNrLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGl0LXRhc2stdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6WyJFZGl0VGFza1ZpZXdNb2RlbCIsIkVkaXRUYXNrVmlld01vZGVsLmNvbnN0cnVjdG9yIiwiRWRpdFRhc2tWaWV3TW9kZWwucHJvamVjdCIsIkVkaXRUYXNrVmlld01vZGVsLnBpY3R1cmUiLCJFZGl0VGFza1ZpZXdNb2RlbC5kZWxldGVIZWFkZXIiLCJFZGl0VGFza1ZpZXdNb2RlbC5kZWxldGVNZXNzYWdlIiwiRWRpdFRhc2tWaWV3TW9kZWwuYWRkSXRlbSIsIkVkaXRUYXNrVmlld01vZGVsLnVwZGF0ZUl0ZW0iLCJFZGl0VGFza1ZpZXdNb2RlbC5kZWxldGVJdGVtIiwiRWRpdFRhc2tWaWV3TW9kZWwudGFrZVBpY3R1cmUiLCJFZGl0VGFza1ZpZXdNb2RlbC52YWxpZGF0ZSIsIkVkaXRUYXNrVmlld01vZGVsLm9uU2F2aW5nIiwiRWRpdFRhc2tWaWV3TW9kZWwub25JdGVtRGVsZXRlZCIsIkVkaXRUYXNrVmlld01vZGVsLmxvYWRQaG90byIsIkVkaXRUYXNrVmlld01vZGVsLmxvYWRQcm9qZWN0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU8sWUFBWSxXQUFXLFFBQVEsQ0FBQyxDQUFDO0FBQ3hDLElBQU8saUJBQWlCLFdBQVcsY0FBYyxDQUFDLENBQUM7QUFHbkQsSUFBTyx1QkFBdUIsV0FBVyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQzNFLElBQU8sbUJBQW1CLFdBQVcsMkJBQTJCLENBQUMsQ0FBQztBQUNsRSxJQUFPLGdCQUFnQixXQUFXLHdCQUF3QixDQUFDLENBQUM7QUFDNUQsSUFBTyxhQUFhLFdBQVcscUJBQXFCLENBQUMsQ0FBQztBQUN0RCxJQUFPLGVBQWUsV0FBVyx1QkFBdUIsQ0FBQyxDQUFDO0FBRTFEO0lBQXVDQSxxQ0FBeUNBO0lBSTVFQSwyQkFBWUEsSUFBVUE7UUFDbEJDLGtCQUFN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