var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var viewModelBaseModule = require("../common/view-model-base");
var serviceModule = require("../../utils/service");
var EditProfileViewModel = (function (_super) {
    __extends(EditProfileViewModel, _super);
    function EditProfileViewModel(user) {
        _super.call(this);
        this._user = user;
    }
    Object.defineProperty(EditProfileViewModel.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProfileViewModel.prototype, "oldPassword", {
        get: function () {
            return this._oldPassword;
        },
        set: function (value) {
            if (this._oldPassword !== value) {
                this._oldPassword = value;
                this.notifyPropertyChange("oldPassword", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProfileViewModel.prototype, "newPassword", {
        get: function () {
            return this._newPassword;
        },
        set: function (value) {
            if (this._newPassword !== value) {
                this._newPassword = value;
                this.notifyPropertyChange("newPassword", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProfileViewModel.prototype, "confirmPassword", {
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
    EditProfileViewModel.prototype.save = function () {
        var _this = this;
        if (this.validate()) {
            if (!this.beginLoading())
                return;
            serviceModule.service.updateUser(this.user).then(function (result) {
                if (_this.oldPassword) {
                    serviceModule.service.changeUserPassword(_this.user.Username, _this.oldPassword, _this.newPassword).then(function (result) {
                        _this.clearPasswords();
                        _this.endLoading();
                    }, function (error) {
                        _this.clearPasswords();
                        _this.endLoading();
                    });
                }
                else {
                    _this.clearPasswords();
                    _this.endLoading();
                }
            }, function (error) {
                _this.endLoading();
            });
        }
        else {
            this.clearPasswords();
        }
    };
    EditProfileViewModel.prototype.clearPasswords = function () {
        this.oldPassword = "";
        this.newPassword = "";
        this.confirmPassword = "";
    };
    EditProfileViewModel.prototype.validate = function () {
        if (!this.user.DisplayName || this.user.DisplayName === "") {
            this.showError("Please enter your name.");
            return false;
        }
        if (!this.user.Email || this.user.Email === "") {
            this.showError("Please enter your email.");
            return false;
        }
        if (this.oldPassword) {
            if (!this.newPassword || this.newPassword === "") {
                this.showError("Please enter new password.");
                return false;
            }
            if (this.newPassword !== this.confirmPassword) {
                this.showError("Passwords did not match.");
            }
        }
        return true;
    };
    return EditProfileViewModel;
})(viewModelBaseModule.ViewModelBase);
exports.EditProfileViewModel = EditProfileViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9maWxlLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGl0LXByb2ZpbGUtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6WyJFZGl0UHJvZmlsZVZpZXdNb2RlbCIsIkVkaXRQcm9maWxlVmlld01vZGVsLmNvbnN0cnVjdG9yIiwiRWRpdFByb2ZpbGVWaWV3TW9kZWwudXNlciIsIkVkaXRQcm9maWxlVmlld01vZGVsLm9sZFBhc3N3b3JkIiwiRWRpdFByb2ZpbGVWaWV3TW9kZWwubmV3UGFzc3dvcmQiLCJFZGl0UHJvZmlsZVZpZXdNb2RlbC5jb25maXJtUGFzc3dvcmQiLCJFZGl0UHJvZmlsZVZpZXdNb2RlbC5zYXZlIiwiRWRpdFByb2ZpbGVWaWV3TW9kZWwuY2xlYXJQYXNzd29yZHMiLCJFZGl0UHJvZmlsZVZpZXdNb2RlbC52YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFPLG1CQUFtQixXQUFXLDJCQUEyQixDQUFDLENBQUM7QUFFbEUsSUFBTyxhQUFhLFdBQVcscUJBQXFCLENBQUMsQ0FBQztBQUl0RDtJQUEwQ0Esd0NBQWlDQTtJQU12RUEsOEJBQVlBLElBQVNBO1FBQ2pCQyxpQkFBT0EsQ0FBQ0E7UUFFUkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDdEJBLENBQUNBO0lBRURELHNCQUFJQSxzQ0FBSUE7YUFBUkE7WUFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDdEJBLENBQUNBOzs7T0FBQUY7SUFFREEsc0JBQUlBLDZDQUFXQTthQUFmQTtZQUNJRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQTtRQUM3QkEsQ0FBQ0E7YUFFREgsVUFBZ0JBLEtBQWFBO1lBQ3pCRyxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxLQUFLQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDOUJBLElBQUlBLENBQUNB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