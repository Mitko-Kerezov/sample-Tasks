var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var enumsModule = require("ui/enums");
var viewModelBaseModule = require("./view-model-base");
var navigationModule = require("../../utils/navigation");
var notificationsModule = require("../../utils/notifications");
var EditViewModelBase = (function (_super) {
    __extends(EditViewModelBase, _super);
    function EditViewModelBase(item) {
        _super.call(this);
        if (item) {
            this._isAdd = false;
            this._originalItem = item;
            this.item = EditViewModelBase.clone(item);
        }
        else {
            this._isAdd = true;
            this.item = this.createItem();
        }
    }
    Object.defineProperty(EditViewModelBase.prototype, "item", {
        get: function () {
            return this._item;
        },
        set: function (value) {
            if (this._item !== value) {
                this._item = value;
                this.notifyPropertyChange("item", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditViewModelBase.prototype, "addVisibility", {
        get: function () {
            if (this._isAdd) {
                return enumsModule.Visibility.visible;
            }
            return enumsModule.Visibility.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditViewModelBase.prototype, "editVisibility", {
        get: function () {
            if (this._isAdd) {
                return enumsModule.Visibility.collapsed;
            }
            return enumsModule.Visibility.visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditViewModelBase.prototype, "deleteMessage", {
        get: function () {
            return "Do you want to delete the item?";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditViewModelBase.prototype, "deleteHeader", {
        get: function () {
            return "Delete Item";
        },
        enumerable: true,
        configurable: true
    });
    EditViewModelBase.prototype.createItem = function () {
        return {};
    };
    EditViewModelBase.prototype.save = function () {
        var _this = this;
        if (this.validate()) {
            if (!this.beginLoading())
                return;
            this.onSaving(this.item).then(function (cancel) {
                if (!cancel) {
                    var method = _this._isAdd ? _this.add : _this.update;
                    method.call(_this).then(function (item) {
                        _this.onSaved(_this.item).then(function (result) {
                            _this.endLoading();
                        });
                    });
                }
                else {
                    _this.endLoading();
                }
            }, function (error) {
                _this.endLoading();
            });
        }
    };
    EditViewModelBase.prototype.del = function () {
        var _this = this;
        notificationsModule.confirm(this.deleteHeader, this.deleteMessage).then(function (value) {
            if (value) {
                if (!_this.beginLoading())
                    return;
                _this.deleteItem(_this.item).then(function (data) {
                    _this.onItemDeleted(_this.item);
                    _this.endLoading();
                }, function (error) {
                    _this.endLoading();
                });
            }
        });
    };
    EditViewModelBase.prototype.addItem = function (item) {
        return null;
    };
    EditViewModelBase.prototype.updateItem = function (item) {
        return null;
    };
    EditViewModelBase.prototype.deleteItem = function (item) {
        return null;
    };
    EditViewModelBase.prototype.validate = function () {
        return true;
    };
    EditViewModelBase.prototype.onItemAdded = function (item) {
        navigationModule.goBack();
    };
    EditViewModelBase.prototype.onItemDeleted = function (item) {
        navigationModule.goBack();
    };
    EditViewModelBase.prototype.onSaving = function (item) {
        return new Promise(function (resolve, reject) {
            resolve(false);
        });
    };
    EditViewModelBase.prototype.onSaved = function (item) {
        return new Promise(function (resolve, reject) {
            resolve({});
        });
    };
    EditViewModelBase.clone = function (item) {
        var clone = {};
        EditViewModelBase.copy(item, clone);
        return clone;
    };
    EditViewModelBase.copy = function (fromItem, toItem) {
        for (var prop in fromItem) {
            if (fromItem.hasOwnProperty(prop)) {
                toItem[prop] = fromItem[prop];
            }
        }
    };
    EditViewModelBase.prototype.add = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.addItem(_this.item).then(function (data) {
                _this.item.Id = data.result.Id;
                _this.onItemAdded(_this.item);
                resolve(_this.item);
            }, reject);
        });
    };
    EditViewModelBase.prototype.update = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.updateItem(_this.item).then(function (data) {
                EditViewModelBase.copy(_this.item, _this._originalItem);
                navigationModule.goBack();
                resolve(_this.item);
            }, reject);
        });
    };
    return EditViewModelBase;
})(viewModelBaseModule.ViewModelBase);
exports.EditViewModelBase = EditViewModelBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC12aWV3LW1vZGVsLWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGl0LXZpZXctbW9kZWwtYmFzZS50cyJdLCJuYW1lcyI6WyJFZGl0Vmlld01vZGVsQmFzZSIsIkVkaXRWaWV3TW9kZWxCYXNlLmNvbnN0cnVjdG9yIiwiRWRpdFZpZXdNb2RlbEJhc2UuaXRlbSIsIkVkaXRWaWV3TW9kZWxCYXNlLmFkZFZpc2liaWxpdHkiLCJFZGl0Vmlld01vZGVsQmFzZS5lZGl0VmlzaWJpbGl0eSIsIkVkaXRWaWV3TW9kZWxCYXNlLmRlbGV0ZU1lc3NhZ2UiLCJFZGl0Vmlld01vZGVsQmFzZS5kZWxldGVIZWFkZXIiLCJFZGl0Vmlld01vZGVsQmFzZS5jcmVhdGVJdGVtIiwiRWRpdFZpZXdNb2RlbEJhc2Uuc2F2ZSIsIkVkaXRWaWV3TW9kZWxCYXNlLmRlbCIsIkVkaXRWaWV3TW9kZWxCYXNlLmFkZEl0ZW0iLCJFZGl0Vmlld01vZGVsQmFzZS51cGRhdGVJdGVtIiwiRWRpdFZpZXdNb2RlbEJhc2UuZGVsZXRlSXRlbSIsIkVkaXRWaWV3TW9kZWxCYXNlLnZhbGlkYXRlIiwiRWRpdFZpZXdNb2RlbEJhc2Uub25JdGVtQWRkZWQiLCJFZGl0Vmlld01vZGVsQmFzZS5vbkl0ZW1EZWxldGVkIiwiRWRpdFZpZXdNb2RlbEJhc2Uub25TYXZpbmciLCJFZGl0Vmlld01vZGVsQmFzZS5vblNhdmVkIiwiRWRpdFZpZXdNb2RlbEJhc2UuY2xvbmUiLCJFZGl0Vmlld01vZGVsQmFzZS5jb3B5IiwiRWRpdFZpZXdNb2RlbEJhc2UuYWRkIiwiRWRpdFZpZXdNb2RlbEJhc2UudXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUNBLElBQU8sV0FBVyxXQUFXLFVBQVUsQ0FBQyxDQUFDO0FBRXpDLElBQU8sbUJBQW1CLFdBQVcsbUJBQW1CLENBQUMsQ0FBQztBQUMxRCxJQUFPLGdCQUFnQixXQUFXLHdCQUF3QixDQUFDLENBQUM7QUFDNUQsSUFBTyxtQkFBbUIsV0FB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