var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platformModule = require("platform");
var observableModule = require("data/observable");
var enumsModule = require("ui/enums");
var dialogsModule = require("ui/dialogs");
var connectivity = require("connectivity");
var stringsModule = require("../../resources/strings");
var ViewModelBase = (function (_super) {
    __extends(ViewModelBase, _super);
    function ViewModelBase() {
        _super.call(this);
        this._loadingCount = 0;
    }
    Object.defineProperty(ViewModelBase.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        set: function (value) {
            if (this._isLoading != value) {
                this._isLoading = value;
                this.notifyPropertyChange("isLoading", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewModelBase.prototype, "androidVisibility", {
        get: function () {
            if (platformModule.device.os === platformModule.platformNames.android) {
                return enumsModule.Visibility.visible;
            }
            return enumsModule.Visibility.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewModelBase.prototype, "iosVisibility", {
        get: function () {
            if (platformModule.device.os === platformModule.platformNames.ios) {
                return enumsModule.Visibility.visible;
            }
            return enumsModule.Visibility.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewModelBase.prototype, "strings", {
        get: function () {
            return stringsModule.strings;
        },
        enumerable: true,
        configurable: true
    });
    ViewModelBase.prototype.beginLoading = function () {
        if (connectivity.getConnectionType() === connectivity.connectionType.none) {
            this.showError("No internet connection.");
            return false;
        }
        if (!this._loadingCount) {
            this.isLoading = true;
        }
        this._loadingCount++;
        return true;
    };
    ViewModelBase.prototype.endLoading = function () {
        if (this._loadingCount > 0) {
            this._loadingCount--;
            if (!this._loadingCount) {
                this.isLoading = false;
            }
        }
    };
    ViewModelBase.prototype.showError = function (error) {
        dialogsModule.alert({ title: "Error", message: error, okButtonText: "Close" });
    };
    ViewModelBase.prototype.showInfo = function (message) {
        dialogsModule.alert({ title: "Info", message: message, okButtonText: "OK" });
    };
    return ViewModelBase;
})(observableModule.Observable);
exports.ViewModelBase = ViewModelBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1tb2RlbC1iYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmlldy1tb2RlbC1iYXNlLnRzIl0sIm5hbWVzIjpbIlZpZXdNb2RlbEJhc2UiLCJWaWV3TW9kZWxCYXNlLmNvbnN0cnVjdG9yIiwiVmlld01vZGVsQmFzZS5pc0xvYWRpbmciLCJWaWV3TW9kZWxCYXNlLmFuZHJvaWRWaXNpYmlsaXR5IiwiVmlld01vZGVsQmFzZS5pb3NWaXNpYmlsaXR5IiwiVmlld01vZGVsQmFzZS5zdHJpbmdzIiwiVmlld01vZGVsQmFzZS5iZWdpbkxvYWRpbmciLCJWaWV3TW9kZWxCYXNlLmVuZExvYWRpbmciLCJWaWV3TW9kZWxCYXNlLnNob3dFcnJvciIsIlZpZXdNb2RlbEJhc2Uuc2hvd0luZm8iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTyxjQUFjLFdBQVcsVUFBVSxDQUFDLENBQUM7QUFFNUMsSUFBTyxnQkFBZ0IsV0FBVyxpQkFBaUIsQ0FBQyxDQUFDO0FBRXJELElBQU8sV0FBVyxXQUFXLFVBQVUsQ0FBQyxDQUFDO0FBQ3pDLElBQU8sYUFBYSxXQUFXLFlBQVksQ0FBQyxDQUFDO0FBQzdDLElBQU8sWUFBWSxXQUFXLGNBQWMsQ0FBQyxDQUFDO0FBRTlDLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBRXZEO0lBQW1DQSxpQ0FBMkJBO0lBSTFEQTtRQUNJQyxpQkFBT0EsQ0FBQ0E7UUFFUkEsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDM0JBLENBQUNBO0lBRURELHNCQUFJQSxvQ0FBU0E7YUFBYkE7WUFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7UUFDM0JBLENBQUNBO2FBRURGLFVBQWNBLEtBQWNBO1lBQ3hCRSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxJQUFJQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDM0JBLElBQUlB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