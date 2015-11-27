var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var viewModelBaseModule = require("../common/view-model-base");
var serviceModule = require("../../utils/service");
var navigationModule = require("../../utils/navigation");
var viewsModule = require("../../utils/views");
var SignUpViewModel = (function (_super) {
    __extends(SignUpViewModel, _super);
    function SignUpViewModel() {
        _super.call(this);
        this.name = "";
        this.email = "";
        this.username = "";
        this.password = "";
        this.confirmPassword = "";
    }
    Object.defineProperty(SignUpViewModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (this._name !== value) {
                this._name = value;
                this.notifyPropertyChange("name", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpViewModel.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            if (this._email !== value) {
                this._email = value;
                this.notifyPropertyChange("email", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpViewModel.prototype, "username", {
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
    Object.defineProperty(SignUpViewModel.prototype, "password", {
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
    Object.defineProperty(SignUpViewModel.prototype, "confirmPassword", {
        get: function () {
            return this._confirmPassword;
        },
        set: function (value) {
            if (this._confirmPassword !== value) {
                this._confirmPassword = value;
                this.notifyPropertyChange("confirmPassword", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    SignUpViewModel.prototype.signUp = function () {
        var _this = this;
        if (this.validate()) {
            if (!this.beginLoading())
                return;
            serviceModule.service.signUp(this.username, this.password, { Email: this.email, DisplayName: this.name }).then(function (data) {
                serviceModule.service.login(_this.username, _this.password).then(function (data) {
                    _this.endLoading();
                    navigationModule.navigate({
                        moduleName: viewsModule.Views.main
                    });
                }, function (error) {
                    _this.endLoading();
                });
            }, function (error) {
                _this.endLoading();
                _this.clearPassword();
            });
        }
        else {
            this.clearPassword();
        }
    };
    SignUpViewModel.prototype.login = function () {
        navigationModule.navigate({
            moduleName: viewsModule.Views.login,
            backstackVisible: false
        });
    };
    SignUpViewModel.prototype.clearPassword = function () {
        this.password = "";
        this.confirmPassword = "";
    };
    SignUpViewModel.prototype.validate = function () {
        if (!this.name || this.name === "") {
            this.showError("Please enter your name.");
            return false;
        }
        if (!this.email || this.email == "") {
            this.showError("Please enter your email.");
            return false;
        }
        if (!this.username || this.username == "") {
            this.showError("Please enter username.");
            return false;
        }
        if (!this.password || this.password == "") {
            this.showError("Please enter password.");
            return false;
        }
        if (this.confirmPassword != this.password) {
            this.showError("Passwords did not match.");
            return false;
        }
        return true;
    };
    return SignUpViewModel;
})(viewModelBaseModule.ViewModelBase);
exports.SignUpViewModel = SignUpViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi11cC12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lnbi11cC12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbIlNpZ25VcFZpZXdNb2RlbCIsIlNpZ25VcFZpZXdNb2RlbC5jb25zdHJ1Y3RvciIsIlNpZ25VcFZpZXdNb2RlbC5uYW1lIiwiU2lnblVwVmlld01vZGVsLmVtYWlsIiwiU2lnblVwVmlld01vZGVsLnVzZXJuYW1lIiwiU2lnblVwVmlld01vZGVsLnBhc3N3b3JkIiwiU2lnblVwVmlld01vZGVsLmNvbmZpcm1QYXNzd29yZCIsIlNpZ25VcFZpZXdNb2RlbC5zaWduVXAiLCJTaWduVXBWaWV3TW9kZWwubG9naW4iLCJTaWduVXBWaWV3TW9kZWwuY2xlYXJQYXNzd29yZCIsIlNpZ25VcFZpZXdNb2RlbC52YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFPLG1CQUFtQixXQUFXLDJCQUEyQixDQUFDLENBQUM7QUFFbEUsSUFBTyxhQUFhLFdBQVcscUJBQXFCLENBQUMsQ0FBQztBQUN0RCxJQUFPLGdCQUFnQixXQUFXLHdCQUF3QixDQUFDLENBQUM7QUFDNUQsSUFBTyxXQUFXLFdBQVcsbUJBQW1CLENBQUMsQ0FBQztBQUVsRDtJQUFxQ0EsbUNBQWlDQTtJQU9sRUE7UUFDSUMsaUJBQU9BLENBQUNBO1FBRVJBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLEVBQUVBLENBQUNBO1FBQ2ZBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO1FBQ2hCQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNuQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDbkJBLElBQUlBLENBQUNBLGVBQWVBLEdBQUdBLEVBQUVBLENBQUNBO0lBQzlCQSxDQUFDQTtJQUVERCxzQkFBSUEsaUNBQUlBO2FBQVJBO1lBQ0lFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtB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