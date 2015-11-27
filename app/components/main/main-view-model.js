var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var viewModelBaseModule = require("../common/view-model-base");
var editProfileViewModelModule = require("../edit-profile/edit-profile-view-model");
var listPickerViewModelModule = require("../list-picker/list-picker-view-model");
var serviceModule = require("../../utils/service");
var navigationModule = require("../../utils/navigation");
var viewsModule = require("../../utils/views");
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        _super.call(this);
        var tasksView = {
            Id: 1,
            Name: "Tasks",
            View: viewsModule.Views.tasks
        };
        var projectsView = {
            Id: 2,
            Name: "Projects",
            View: viewsModule.Views.projects
        };
        this._views = new listPickerViewModelModule.ListPickerViewModel(function () {
            return new Promise(function (resolve, reject) {
                resolve([tasksView, projectsView]);
            });
        }, tasksView, function (selectedItem) {
        });
        this.refresh();
    }
    Object.defineProperty(MainViewModel.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            if (this._user !== value) {
                this._user = value;
                this.notifyPropertyChange("user", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainViewModel.prototype, "views", {
        get: function () {
            return this._views;
        },
        enumerable: true,
        configurable: true
    });
    MainViewModel.prototype.editProfile = function () {
        navigationModule.navigate({
            moduleName: viewsModule.Views.editProfile,
            context: new editProfileViewModelModule.EditProfileViewModel(this.user)
        });
    };
    MainViewModel.prototype.logout = function () {
        serviceModule.service.logout();
        navigationModule.navigate({
            moduleName: viewsModule.Views.login,
            backstackVisible: false,
            clearHistory: true
        });
    };
    MainViewModel.prototype.refresh = function () {
        var _this = this;
        if (!this.beginLoading())
            return;
        serviceModule.service.getCurrentUser().then(function (user) {
            _this.user = user;
            _this.endLoading();
        }, function (error) {
            _this.endLoading();
        });
    };
    return MainViewModel;
})(viewModelBaseModule.ViewModelBase);
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbIk1haW5WaWV3TW9kZWwiLCJNYWluVmlld01vZGVsLmNvbnN0cnVjdG9yIiwiTWFpblZpZXdNb2RlbC51c2VyIiwiTWFpblZpZXdNb2RlbC52aWV3cyIsIk1haW5WaWV3TW9kZWwuZWRpdFByb2ZpbGUiLCJNYWluVmlld01vZGVsLmxvZ291dCIsIk1haW5WaWV3TW9kZWwucmVmcmVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFPLG1CQUFtQixXQUFXLDJCQUEyQixDQUFDLENBQUM7QUFDbEUsSUFBTywwQkFBMEIsV0FBVyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ3ZGLElBQU8seUJBQXlCLFdBQVcsdUNBQXVDLENBQUMsQ0FBQztBQUVwRixJQUFPLGFBQWEsV0FBVyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3RELElBQU8sZ0JBQWdCLFdBQVcsd0JBQXdCLENBQUMsQ0FBQztBQUM1RCxJQUFPLFdBQVcsV0FBVyxtQkFBbUIsQ0FBQyxDQUFDO0FBRWxEO0lBQW1DQSxpQ0FBaUNBO0lBSWhFQTtRQUNJQyxpQkFBT0EsQ0FBQ0E7UUFFUkEsSUFBSUEsU0FBU0EsR0FBR0E7WUFDWkEsRUFBRUEsRUFBRUEsQ0FBQ0E7WUFDTEEsSUFBSUEsRUFBRUEsT0FBT0E7WUFDYkEsSUFBSUEsRUFBRUEsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0E7U0FDaENBLENBQUNBO1FBRUZBLElBQUlBLFlBQVlBLEdBQUdBO1lBQ2ZBLEVBQUVBLEVBQUVBLENBQUNBO1lBQ0xBLElBQUlBLEVBQUVBLFVBQVVBO1lBQ2hCQSxJQUFJQSxFQUFFQSxXQUFXQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQTtTQUNuQ0EsQ0FBQ0E7UUFFRkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEseUJBQXlCQSxDQUFDQSxtQkFBbUJBLENBQUNBO1lBQzVEQSxN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