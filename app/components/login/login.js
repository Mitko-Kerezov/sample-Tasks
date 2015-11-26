var loginViewModelModule = require("./login-view-model");
var viewModel;
function navigatingTo(args) {
    var page = args.object;
    viewModel = new loginViewModelModule.LoginViewModel();
    page.bindingContext = viewModel;
}
exports.navigatingTo = navigatingTo;
function loginButtonTap(args) {
    viewModel.login();
}
exports.loginButtonTap = loginButtonTap;
function signUpButtonTap(args) {
    viewModel.signUp();
}
exports.signUpButtonTap = signUpButtonTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6WyJuYXZpZ2F0aW5nVG8iLCJsb2dpbkJ1dHRvblRhcCIsInNpZ25VcEJ1dHRvblRhcCJdLCJtYXBwaW5ncyI6IkFBSUEsSUFBTyxvQkFBb0IsV0FBVyxvQkFBb0IsQ0FBQyxDQUFBO0FBRTNELElBQUksU0FBK0MsQ0FBQztBQUNwRCxzQkFBNkIsSUFBZ0M7SUFDekRBLElBQUlBLElBQUlBLEdBQW9CQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtJQUN4Q0EsU0FBU0EsR0FBR0EsSUFBSUEsb0JBQW9CQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtJQUN0REEsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsU0FBU0EsQ0FBQ0E7QUFDcENBLENBQUNBO0FBSmUsb0JBQVksZUFJM0IsQ0FBQTtBQUVELHdCQUErQixJQUFpQztJQUM1REMsU0FBU0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7QUFDdEJBLENBQUNBO0FBRmUsc0JBQWMsaUJBRTdCLENBQUE7QUFFRCx5QkFBZ0MsSUFBaUM7SUFDN0RDLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO0FBQ3ZCQSxDQUFDQTtBQUZlLHVCQUFlLGtCQUU5QixDQUFBIn0=