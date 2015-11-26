var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var viewModelBaseModule = require("../common/view-model-base");
var serviceModule = require("../../utils/service");
var navigationModule = require("../../utils/navigation");
var viewsModule = require("../../utils/views");
var LoginViewModel = (function (_super) {
    __extends(LoginViewModel, _super);
    function LoginViewModel() {
        _super.call(this);
        this._username = "";
        this._password = "";
    }
    Object.defineProperty(LoginViewModel.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            if (this._username !== value) {
                this._username = value;
                this.notifyPropertyChange("username", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginViewModel.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            if (this._password !== value) {
                this._password = value;
                this.notifyPropertyChange("password", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    LoginViewModel.prototype.login = function () {
        var _this = this;
        if (this.validate()) {
            if (!this.beginLoading())
                return;
            serviceModule.service.login(this.username, this.password).then(function (data) {
                navigationModule.navigate({
                    moduleName: viewsModule.Views.main
                });
                _this.endLoading();
            }, function (error) {
                _this.clearPassword();
                _this.endLoading();
            });
        }
        else {
            this.clearPassword();
        }
    };
    LoginViewModel.prototype.signUp = function () {
        navigationModule.navigate({
            moduleName: viewsModule.Views.signUp,
            backstackVisible: false
        });
    };
    LoginViewModel.prototype.clearPassword = function () {
        this.password = "";
    };
    LoginViewModel.prototype.validate = function () {
        if (!this.username || this.username === "") {
            this.showError("Please enter username.");
            return false;
        }
        if (!this.password || this.password === "") {
            this.showError("Please enter password.");
            return false;
        }
        return true;
    };
    return LoginViewModel;
})(viewModelBaseModule.ViewModelBase);
exports.LoginViewModel = LoginViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOlsiTG9naW5WaWV3TW9kZWwiLCJMb2dpblZpZXdNb2RlbC5jb25zdHJ1Y3RvciIsIkxvZ2luVmlld01vZGVsLnVzZXJuYW1lIiwiTG9naW5WaWV3TW9kZWwucGFzc3dvcmQiLCJMb2dpblZpZXdNb2RlbC5sb2dpbiIsIkxvZ2luVmlld01vZGVsLnNpZ25VcCIsIkxvZ2luVmlld01vZGVsLmNsZWFyUGFzc3dvcmQiLCJMb2dpblZpZXdNb2RlbC52YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxJQUFPLG1CQUFtQixXQUFXLDJCQUEyQixDQUFDLENBQUM7QUFFbEUsSUFBTyxhQUFhLFdBQVcscUJBQXFCLENBQUMsQ0FBQztBQUN0RCxJQUFPLGdCQUFnQixXQUFXLHdCQUF3QixDQUFDLENBQUM7QUFDNUQsSUFBTyxXQUFXLFdBQVcsbUJBQW1CLENBQUMsQ0FBQztBQUVsRDtJQUFvQ0Esa0NBQWlDQTtJQUlqRUE7UUFDSUMsaUJBQU9BLENBQUNBO1FBRVJBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEVBQUVBLENBQUNBO1FBQ3BCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxFQUFFQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUFFREQsc0JBQUlBLG9DQUFRQTthQUFaQTtZQUNJRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtRQUMxQkEsQ0FBQ0E7YUFFREYsVUFBYUEsS0FBYUE7WUFDdEJFLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEtBQUtBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO2dCQUMzQkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3ZCQSxJQUFJQSxDQUFDQSxvQkFBb0JBLENBQUNBLFVBQVVBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNB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