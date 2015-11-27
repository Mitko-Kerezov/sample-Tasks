var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var viewModelBaseModule = require("../common/view-model-base");
var viewProjectViewModelModule = require("../view-project/view-project-view-model");
var editProjectViewModelModule = require("../edit-project/edit-project-view-model");
var navigationModule = require("../../utils/navigation");
var serviceModule = require("../../utils/service");
var viewsModule = require("../../utils/views");
var ProjectsViewModel = (function (_super) {
    __extends(ProjectsViewModel, _super);
    function ProjectsViewModel() {
        _super.call(this);
    }
    Object.defineProperty(ProjectsViewModel.prototype, "projects", {
        get: function () {
            return this._projects;
        },
        set: function (value) {
            if (this._projects != value) {
                this._projects = value;
                this.notifyPropertyChange("projects", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ProjectsViewModel.prototype.addProject = function () {
        navigationModule.navigate({
            moduleName: viewsModule.Views.editProject,
            context: new editProjectViewModelModule.EditProjectViewModel()
        });
    };
    ProjectsViewModel.prototype.viewProject = function (args) {
        navigationModule.navigate({
            moduleName: viewsModule.Views.viewProject,
            context: args.view.bindingContext
        });
    };
    ProjectsViewModel.prototype.logout = function () {
        serviceModule.service.logout();
        navigationModule.navigate({
            moduleName: viewsModule.Views.login,
            backstackVisible: false
        });
    };
    ProjectsViewModel.prototype.refresh = function () {
        var _this = this;
        if (!this.beginLoading())
            return;
        serviceModule.service.getProjects().then(function (data) {
            var projects = new Array();
            for (var i = 0; i < data.length; i++) {
                projects.push(new viewProjectViewModelModule.ViewProjectViewModel(data[i]));
            }
            _this.projects = projects;
            _this.endLoading();
        }, function (error) {
            _this.endLoading();
        });
    };
    return ProjectsViewModel;
})(viewModelBaseModule.ViewModelBase);
exports.ProjectsViewModel = ProjectsViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMtdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2plY3RzLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOlsiUHJvamVjdHNWaWV3TW9kZWwiLCJQcm9qZWN0c1ZpZXdNb2RlbC5jb25zdHJ1Y3RvciIsIlByb2plY3RzVmlld01vZGVsLnByb2plY3RzIiwiUHJvamVjdHNWaWV3TW9kZWwuYWRkUHJvamVjdCIsIlByb2plY3RzVmlld01vZGVsLnZpZXdQcm9qZWN0IiwiUHJvamVjdHNWaWV3TW9kZWwubG9nb3V0IiwiUHJvamVjdHNWaWV3TW9kZWwucmVmcmVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxJQUFPLG1CQUFtQixXQUFXLDJCQUEyQixDQUFDLENBQUM7QUFDbEUsSUFBTywwQkFBMEIsV0FBVyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ3ZGLElBQU8sMEJBQTBCLFdBQVcseUNBQXlDLENBQUMsQ0FBQztBQUN2RixJQUFPLGdCQUFnQixXQUFXLHdCQUF3QixDQUFDLENBQUM7QUFDNUQsSUFBTyxhQUFhLFdBQVcscUJBQXFCLENBQUMsQ0FBQztBQUN0RCxJQUFPLFdBQVcsV0FBVyxtQkFBbUIsQ0FBQyxDQUFDO0FBRWxEO0lBQXVDQSxxQ0FBaUNBO0lBR3BFQTtRQUNJQyxpQkFBT0EsQ0FBQ0E7SUFDWkEsQ0FBQ0E7SUFFREQsc0JBQUlBLHVDQUFRQTthQUFaQTtZQUNJRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtRQUMxQkEsQ0FBQ0E7YUFFREYsVUFBYUEsS0FBNkRBO1lBQ3RFRSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxJQUFJQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDMUJBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUtBLENBQUNBO2dCQUN2QkEsSUFBSUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxVQUFVQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNqREEsQ0FBQ0E7UUFDTEEsQ0FBQ0E7OztPQVBBRjtJQVNEQSxzQ0FBVUEsR0FBVkE7UUFDSUcsZ0JBQWdCQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUN0QkEsVUFBVUEsRUFBRUEsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0E7WUFDekNBLE9BQU9BLEVBQUVBLElBQUlBLDBCQUEwQkEsQ0FBQ0Esb0JBQW9CQSxFQUFFQTtTQUNqRUEsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFFREgsdUNBQVdBLEdBQVhBLFVBQVlBLElBQWtDQTtRQUMxQ0ksZ0JBQWdCQSxDQUFDQSxRQUFRQSxDQUFDQTtZQUN0QkEsVUFBVUEsRUFBRUEsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0E7WUFDekNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBO1NBQ3BDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUVESixrQ0FBTUEsR0FBTkE7UUFDSUssYUFBYUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7UUFDL0JBLGdCQUFnQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDdEJBLFVBQVVBLEVBQUVBLFdBQVdBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBO1lBQ25DQSxnQkFBZ0JBLEVBQUVBLEtBQUtBO1NBQzFCQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUVETCxtQ0FBT0EsR0FBUEE7UUFBQU0saUJBYUNBO1FBWkdBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBO1lBQUFBLE1BQU1BLENBQUNBO1FBQ2hDQSxhQUFhQSxDQUFDQSxPQUFPQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxJQUFXQTtZQUNqREEsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsS0FBS0EsRUFBbURBLENBQUNBO1lBQzVFQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQTtnQkFDbkNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLDBCQUEwQkEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNoRkEsQ0FBQ0E7WUFFREEsS0FBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0E7WUFDekJBLEtBQUlBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO1FBQ3RCQSxDQUFDQSxFQUFDQSxVQUFDQSxLQUFVQTtZQUNMQSxLQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQTtRQUN0QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDWEEsQ0FBQ0E7SUFDTE4sd0JBQUNBO0FBQURBLENBQUNBLEFBdERELEVBQXVDLG1CQUFtQixDQUFDLGFBQWEsRUFzRHZFO0FBdERZLHlCQUFpQixvQkFzRDdCLENBQUEifQ==