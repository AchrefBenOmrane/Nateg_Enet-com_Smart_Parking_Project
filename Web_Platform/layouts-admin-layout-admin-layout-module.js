(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/notifications/notifications.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notifications/notifications.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"card\">\n          <div class=\"card-header card-header-danger\">\n              <h3 class=\"card-title\">Notifications</h3>\n              <p class=\"card-category\">Handcrafted by our friend\n                  <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the\n                  <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a>\n              </p>\n          </div>\n          <div class=\"card-body\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <h4 class=\"card-title\">Notifications Style</h4>\n                      <div class=\"alert alert-info\">\n                          <span>This is a plain notification</span>\n                      </div>\n                      <div class=\"alert alert-info\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>This is a notification with close button.</span>\n                      </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                      </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                      </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4 class=\"card-title\">Notification states</h4>\n                      <div class=\"alert alert-info\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                      </div>\n                      <div class=\"alert alert-success\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                      </div>\n                      <div class=\"alert alert-warning\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                      </div>\n                      <div class=\"alert alert-danger\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                      </div>\n                      <div class=\"alert alert-primary\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-12\">\n              <div class=\"places-buttons\">\n                  <div class=\"row\">\n                      <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                          <h4 class=\"card-title\">\n                              Notifications Places\n                              <p class=\"category\">Click to view notifications</p>\n                          </h4>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/table-list/dialog-overview-example-dialog.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/table-list/dialog-overview-example-dialog.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>id : {{data.id}} <br>\r\n  id: {{data.id}},<br>\r\n   idMat: {{data.idMat}},<br>\r\n    car: {{data.car}},<br>\r\n    mat: {{data.mat}}<br>\r\n\r\n\r\n</h1>\r\n\r\n -->\r\n\r\n <div class=\"main-content\">\r\n  <div class=\"card\" >\r\n    <div class=\"card-header card-header-info\" >\r\n      \r\n      <div class=\"card-icon\">\r\n        <i class=\"material-icons\">person</i>\r\n      </div>\r\n      <h3 class=\"card-title\">{{data.user.name}}  {{data.user.lastname}}\r\n    <h5 class=\"card-category \" style=\"color: white;\"> Client details :</h5>\r\n  </h3>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 offset-md-3\"></div>\r\n        \r\n      </div>\r\n    </div>\r\n    <mat-dialog-content>\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-category \" style=\"color: rgb(23, 170, 207);\"> <b>Balance :</b> </h5>\r\n      <hr> <h2 style=\"color: rgb(43, 41, 41); text-align: center\" > <b>{{data.user.balance}} DT</b>   </h2>\r\n      <div class=\"input-group mb-3\">\r\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"amount\" name=\"amount\" aria-label=\"Dinar amount \">\r\n        <div class=\"input-group-prepend\">\r\n          \r\n          <span class=\"input-group-text\">{{amount}}</span>\r\n          <span class=\"input-group-text\">DT</span>\r\n        </div>\r\n        \r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-outline-success\" type=\"button\" id=\"button-addon2\" (click)=\"addBalnace()\">Add amount</button>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <h5 class=\"card-category \" style=\"color: rgb(23, 170, 207);\"><b>License Plates :</b>  </h5>\r\n          <div class=\"table-responsive\"style=\"color:aqua\">   \r\n            <table mat-table [dataSource]=\"data.LicensePlates\" class=\"mat-elevation-z8\">\r\n\r\n              <ng-container matColumnDef=\"Type Car\">\r\n                <th mat-header-cell *matHeaderCellDef> <h6> Type Car </h6>   </th>\r\n                <td mat-cell *matCellDef=\"let element \"> {{element.type_Car}} </td>\r\n              </ng-container>\r\n            \r\n              \r\n              <ng-container matColumnDef=\"license Plate number\" style=\"margin-left: 10px;\">\r\n                <th mat-header-cell *matHeaderCellDef> <h6> License Plate number </h6> </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.nb_L}} </td>\r\n              </ng-container>\r\n            \r\n             \r\n              <ng-container matColumnDef=\"verification status\" style=\"margin-left: 10px;\">\r\n                <th mat-header-cell *matHeaderCellDef><h6> Verification status</h6>  </th>\r\n                <td mat-cell *matCellDef=\"let element \"> {{element.verfied}} </td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef style=\"margin-left: 10px;\" > Details </th>\r\n                <td mat-cell *matCellDef=\"let element \">\r\n                  <div class=\"example-button-row\">\r\n                    <button mat-raised-button   (click)=\"verification(element.nb_L)\" matTooltip=\"verification\" [matTooltipPosition]=\"'above'\">\r\n                    <i style=\"margin-left: 5px;\"  class=\"material-icons\">\r\n                      list\r\n                      </i>\r\n                  </button>\r\n             \r\n                  </div></td>\r\n              </ng-container>\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n              \r\n            </table>\r\n          </div>\r\n      <hr>\r\n      <h5 class=\"card-category \" style=\"color: rgb(23, 170, 207);\"><b>Messages :</b>  </h5>  \r\n      <div class=\"container\">\r\n        \r\n        <div class=\"row\">\r\n    \r\n            <!-- <div class=\"conversation-wrap col-lg-3\">\r\n    \r\n    \r\n                <div class=\"media conversation\">\r\n                    <a class=\"pull-left\" href=\"#\">\r\n                        <img class=\"media-object\" data-src=\"holder.js/64x64\" alt=\"64x64\" style=\"width: 50px; height: 50px;\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACqUlEQVR4Xu2Y60tiURTFl48STFJMwkQjUTDtixq+Av93P6iBJFTgg1JL8QWBGT4QfDX7gDIyNE3nEBO6D0Rh9+5z9rprr19dTa/XW2KHl4YFYAfwCHAG7HAGgkOQKcAUYAowBZgCO6wAY5AxyBhkDDIGdxgC/M8QY5AxyBhkDDIGGYM7rIAyBgeDAYrFIkajEYxGIwKBAA4PDzckpd+322243W54PJ5P5f6Omh9tqiTAfD5HNpuFVqvFyckJms0m9vf3EY/H1/u9vb0hn89jsVj8kwDfUfNviisJ8PLygru7O4TDYVgsFtDh9Xo9NBrNes9cLgeTybThgKenJ1SrVXGf1WoVDup2u4jFYhiPx1I1P7XVBxcoCVCr1UBfTqcTrVYLe3t7OD8/x/HxsdiOPqNGo9Eo0un02gHkBhJmuVzC7/fj5uYGXq8XZ2dnop5Mzf8iwMPDAxqNBmw2GxwOBx4fHzGdTpFMJkVzNB7UGAmSSqU2RoDmnETQ6XQiOyKRiHCOSk0ZEZQcUKlU8Pz8LA5vNptRr9eFCJQBFHq//szG5eWlGA1ywOnpqQhBapoWPfl+vw+fzweXyyU+U635VRGUBOh0OigUCggGg8IFK/teXV3h/v4ew+Hwj/OQU4gUq/w4ODgQrkkkEmKEVGp+tXm6XkkAOngmk4HBYBAjQA6gEKRmyOL05GnR99vbW9jtdjEGdP319bUIR8oA+pnG5OLiQoghU5OElFlKAtCGr6+vKJfLmEwm64aosd/XbDbbyIBSqSSeNKU+HXzlnFAohKOjI6maMs0rO0B20590n7IDflIzMmdhAfiNEL8R4jdC/EZIJj235R6mAFOAKcAUYApsS6LL9MEUYAowBZgCTAGZ9NyWe5gCTAGmAFOAKbAtiS7TB1Ng1ynwDkxRe58vH3FfAAAAAElFTkSuQmCC\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                        <h5 class=\"media-heading\">Naimish Sakhpara</h5>\r\n                        <small>Hello</small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"media conversation\">\r\n                    <a class=\"pull-left\" href=\"#\">\r\n                        <img class=\"media-object\" data-src=\"holder.js/64x64\" alt=\"64x64\" style=\"width: 50px; height: 50px;\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACqUlEQVR4Xu2Y60tiURTFl48STFJMwkQjUTDtixq+Av93P6iBJFTgg1JL8QWBGT4QfDX7gDIyNE3nEBO6D0Rh9+5z9rprr19dTa/XW2KHl4YFYAfwCHAG7HAGgkOQKcAUYAowBZgCO6wAY5AxyBhkDDIGdxgC/M8QY5AxyBhkDDIGGYM7rIAyBgeDAYrFIkajEYxGIwKBAA4PDzckpd+322243W54PJ5P5f6Omh9tqiTAfD5HNpuFVqvFyckJms0m9vf3EY/H1/u9vb0hn89jsVj8kwDfUfNviisJ8PLygru7O4TDYVgsFtDh9Xo9NBrNes9cLgeTybThgKenJ1SrVXGf1WoVDup2u4jFYhiPx1I1P7XVBxcoCVCr1UBfTqcTrVYLe3t7OD8/x/HxsdiOPqNGo9Eo0un02gHkBhJmuVzC7/fj5uYGXq8XZ2dnop5Mzf8iwMPDAxqNBmw2GxwOBx4fHzGdTpFMJkVzNB7UGAmSSqU2RoDmnETQ6XQiOyKRiHCOSk0ZEZQcUKlU8Pz8LA5vNptRr9eFCJQBFHq//szG5eWlGA1ywOnpqQhBapoWPfl+vw+fzweXyyU+U635VRGUBOh0OigUCggGg8IFK/teXV3h/v4ew+Hwj/OQU4gUq/w4ODgQrkkkEmKEVGp+tXm6XkkAOngmk4HBYBAjQA6gEKRmyOL05GnR99vbW9jtdjEGdP319bUIR8oA+pnG5OLiQoghU5OElFlKAtCGr6+vKJfLmEwm64aosd/XbDbbyIBSqSSeNKU+HXzlnFAohKOjI6maMs0rO0B20590n7IDflIzMmdhAfiNEL8R4jdC/EZIJj235R6mAFOAKcAUYApsS6LL9MEUYAowBZgCTAGZ9NyWe5gCTAGmAFOAKbAtiS7TB1Ng1ynwDkxRe58vH3FfAAAAAElFTkSuQmCC\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                        <h5 class=\"media-heading\">Naimish Sakhpara</h5>\r\n                        <small>Hello</small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"media conversation\">\r\n                    <a class=\"pull-left\" href=\"#\">\r\n                        <img class=\"media-object\" data-src=\"holder.js/64x64\" alt=\"64x64\" style=\"width: 50px; height: 50px;\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACqUlEQVR4Xu2Y60tiURTFl48STFJMwkQjUTDtixq+Av93P6iBJFTgg1JL8QWBGT4QfDX7gDIyNE3nEBO6D0Rh9+5z9rprr19dTa/XW2KHl4YFYAfwCHAG7HAGgkOQKcAUYAowBZgCO6wAY5AxyBhkDDIGdxgC/M8QY5AxyBhkDDIGGYM7rIAyBgeDAYrFIkajEYxGIwKBAA4PDzckpd+322243W54PJ5P5f6Omh9tqiTAfD5HNpuFVqvFyckJms0m9vf3EY/H1/u9vb0hn89jsVj8kwDfUfNviisJ8PLygru7O4TDYVgsFtDh9Xo9NBrNes9cLgeTybThgKenJ1SrVXGf1WoVDup2u4jFYhiPx1I1P7XVBxcoCVCr1UBfTqcTrVYLe3t7OD8/x/HxsdiOPqNGo9Eo0un02gHkBhJmuVzC7/fj5uYGXq8XZ2dnop5Mzf8iwMPDAxqNBmw2GxwOBx4fHzGdTpFMJkVzNB7UGAmSSqU2RoDmnETQ6XQiOyKRiHCOSk0ZEZQcUKlU8Pz8LA5vNptRr9eFCJQBFHq//szG5eWlGA1ywOnpqQhBapoWPfl+vw+fzweXyyU+U635VRGUBOh0OigUCggGg8IFK/teXV3h/v4ew+Hwj/OQU4gUq/w4ODgQrkkkEmKEVGp+tXm6XkkAOngmk4HBYBAjQA6gEKRmyOL05GnR99vbW9jtdjEGdP319bUIR8oA+pnG5OLiQoghU5OElFlKAtCGr6+vKJfLmEwm64aosd/XbDbbyIBSqSSeNKU+HXzlnFAohKOjI6maMs0rO0B20590n7IDflIzMmdhAfiNEL8R4jdC/EZIJj235R6mAFOAKcAUYApsS6LL9MEUYAowBZgCTAGZ9NyWe5gCTAGmAFOAKbAtiS7TB1Ng1ynwDkxRe58vH3FfAAAAAElFTkSuQmCC\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                        <h5 class=\"media-heading\">Naimish Sakhpara</h5>\r\n                        <small>Hello</small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"media conversation\">\r\n                    <a class=\"pull-left\" href=\"#\">\r\n                        <img class=\"media-object\" data-src=\"holder.js/64x64\" alt=\"64x64\" style=\"width: 50px; height: 50px;\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACqUlEQVR4Xu2Y60tiURTFl48STFJMwkQjUTDtixq+Av93P6iBJFTgg1JL8QWBGT4QfDX7gDIyNE3nEBO6D0Rh9+5z9rprr19dTa/XW2KHl4YFYAfwCHAG7HAGgkOQKcAUYAowBZgCO6wAY5AxyBhkDDIGdxgC/M8QY5AxyBhkDDIGGYM7rIAyBgeDAYrFIkajEYxGIwKBAA4PDzckpd+322243W54PJ5P5f6Omh9tqiTAfD5HNpuFVqvFyckJms0m9vf3EY/H1/u9vb0hn89jsVj8kwDfUfNviisJ8PLygru7O4TDYVgsFtDh9Xo9NBrNes9cLgeTybThgKenJ1SrVXGf1WoVDup2u4jFYhiPx1I1P7XVBxcoCVCr1UBfTqcTrVYLe3t7OD8/x/HxsdiOPqNGo9Eo0un02gHkBhJmuVzC7/fj5uYGXq8XZ2dnop5Mzf8iwMPDAxqNBmw2GxwOBx4fHzGdTpFMJkVzNB7UGAmSSqU2RoDmnETQ6XQiOyKRiHCOSk0ZEZQcUKlU8Pz8LA5vNptRr9eFCJQBFHq//szG5eWlGA1ywOnpqQhBapoWPfl+vw+fzweXyyU+U635VRGUBOh0OigUCggGg8IFK/teXV3h/v4ew+Hwj/OQU4gUq/w4ODgQrkkkEmKEVGp+tXm6XkkAOngmk4HBYBAjQA6gEKRmyOL05GnR99vbW9jtdjEGdP319bUIR8oA+pnG5OLiQoghU5OElFlKAtCGr6+vKJfLmEwm64aosd/XbDbbyIBSqSSeNKU+HXzlnFAohKOjI6maMs0rO0B20590n7IDflIzMmdhAfiNEL8R4jdC/EZIJj235R6mAFOAKcAUYApsS6LL9MEUYAowBZgCTAGZ9NyWe5gCTAGmAFOAKbAtiS7TB1Ng1ynwDkxRe58vH3FfAAAAAElFTkSuQmCC\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                        <h5 class=\"media-heading\">Naimish Sakhpara</h5>\r\n                        <small>Hello</small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"media conversation\">\r\n                    <a class=\"pull-left\" href=\"#\">\r\n                        <img class=\"media-object\" data-src=\"holder.js/64x64\" alt=\"64x64\" style=\"width: 50px; height: 50px;\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACqUlEQVR4Xu2Y60tiURTFl48STFJMwkQjUTDtixq+Av93P6iBJFTgg1JL8QWBGT4QfDX7gDIyNE3nEBO6D0Rh9+5z9rprr19dTa/XW2KHl4YFYAfwCHAG7HAGgkOQKcAUYAowBZgCO6wAY5AxyBhkDDIGdxgC/M8QY5AxyBhkDDIGGYM7rIAyBgeDAYrFIkajEYxGIwKBAA4PDzckpd+322243W54PJ5P5f6Omh9tqiTAfD5HNpuFVqvFyckJms0m9vf3EY/H1/u9vb0hn89jsVj8kwDfUfNviisJ8PLygru7O4TDYVgsFtDh9Xo9NBrNes9cLgeTybThgKenJ1SrVXGf1WoVDup2u4jFYhiPx1I1P7XVBxcoCVCr1UBfTqcTrVYLe3t7OD8/x/HxsdiOPqNGo9Eo0un02gHkBhJmuVzC7/fj5uYGXq8XZ2dnop5Mzf8iwMPDAxqNBmw2GxwOBx4fHzGdTpFMJkVzNB7UGAmSSqU2RoDmnETQ6XQiOyKRiHCOSk0ZEZQcUKlU8Pz8LA5vNptRr9eFCJQBFHq//szG5eWlGA1ywOnpqQhBapoWPfl+vw+fzweXyyU+U635VRGUBOh0OigUCggGg8IFK/teXV3h/v4ew+Hwj/OQU4gUq/w4ODgQrkkkEmKEVGp+tXm6XkkAOngmk4HBYBAjQA6gEKRmyOL05GnR99vbW9jtdjEGdP319bUIR8oA+pnG5OLiQoghU5OElFlKAtCGr6+vKJfLmEwm64aosd/XbDbbyIBSqSSeNKU+HXzlnFAohKOjI6maMs0rO0B20590n7IDflIzMmdhAfiNEL8R4jdC/EZIJj235R6mAFOAKcAUYApsS6LL9MEUYAowBZgCTAGZ9NyWe5gCTAGmAFOAKbAtiS7TB1Ng1ynwDkxRe58vH3FfAAAAAElFTkSuQmCC\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                        <h5 class=\"media-heading\">Naimish Sakhpara</h5>\r\n                        <small>Hello</small>\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"media conversation\">\r\n                    <a class=\"pull-left\" href=\"#\">\r\n                        <img class=\"media-object\" data-src=\"holder.js/64x64\" alt=\"64x64\" style=\"width: 50px; height: 50px;\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACqUlEQVR4Xu2Y60tiURTFl48STFJMwkQjUTDtixq+Av93P6iBJFTgg1JL8QWBGT4QfDX7gDIyNE3nEBO6D0Rh9+5z9rprr19dTa/XW2KHl4YFYAfwCHAG7HAGgkOQKcAUYAowBZgCO6wAY5AxyBhkDDIGdxgC/M8QY5AxyBhkDDIGGYM7rIAyBgeDAYrFIkajEYxGIwKBAA4PDzckpd+322243W54PJ5P5f6Omh9tqiTAfD5HNpuFVqvFyckJms0m9vf3EY/H1/u9vb0hn89jsVj8kwDfUfNviisJ8PLygru7O4TDYVgsFtDh9Xo9NBrNes9cLgeTybThgKenJ1SrVXGf1WoVDup2u4jFYhiPx1I1P7XVBxcoCVCr1UBfTqcTrVYLe3t7OD8/x/HxsdiOPqNGo9Eo0un02gHkBhJmuVzC7/fj5uYGXq8XZ2dnop5Mzf8iwMPDAxqNBmw2GxwOBx4fHzGdTpFMJkVzNB7UGAmSSqU2RoDmnETQ6XQiOyKRiHCOSk0ZEZQcUKlU8Pz8LA5vNptRr9eFCJQBFHq//szG5eWlGA1ywOnpqQhBapoWPfl+vw+fzweXyyU+U635VRGUBOh0OigUCggGg8IFK/teXV3h/v4ew+Hwj/OQU4gUq/w4ODgQrkkkEmKEVGp+tXm6XkkAOngmk4HBYBAjQA6gEKRmyOL05GnR99vbW9jtdjEGdP319bUIR8oA+pnG5OLiQoghU5OElFlKAtCGr6+vKJfLmEwm64aosd/XbDbbyIBSqSSeNKU+HXzlnFAohKOjI6maMs0rO0B20590n7IDflIzMmdhAfiNEL8R4jdC/EZIJj235R6mAFOAKcAUYApsS6LL9MEUYAowBZgCTAGZ9NyWe5gCTAGmAFOAKbAtiS7TB1Ng1ynwDkxRe58vH3FfAAAAAElFTkSuQmCC\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                        <h5 class=\"media-heading\">Naimish Sakhpara</h5>\r\n                        <small>Hello</small>\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"media conversation\">\r\n                    <a class=\"pull-left\" href=\"#\">\r\n                        <img class=\"media-object\" data-src=\"holder.js/64x64\" alt=\"64x64\" style=\"width: 50px; height: 50px;\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACqUlEQVR4Xu2Y60tiURTFl48STFJMwkQjUTDtixq+Av93P6iBJFTgg1JL8QWBGT4QfDX7gDIyNE3nEBO6D0Rh9+5z9rprr19dTa/XW2KHl4YFYAfwCHAG7HAGgkOQKcAUYAowBZgCO6wAY5AxyBhkDDIGdxgC/M8QY5AxyBhkDDIGGYM7rIAyBgeDAYrFIkajEYxGIwKBAA4PDzckpd+322243W54PJ5P5f6Omh9tqiTAfD5HNpuFVqvFyckJms0m9vf3EY/H1/u9vb0hn89jsVj8kwDfUfNviisJ8PLygru7O4TDYVgsFtDh9Xo9NBrNes9cLgeTybThgKenJ1SrVXGf1WoVDup2u4jFYhiPx1I1P7XVBxcoCVCr1UBfTqcTrVYLe3t7OD8/x/HxsdiOPqNGo9Eo0un02gHkBhJmuVzC7/fj5uYGXq8XZ2dnop5Mzf8iwMPDAxqNBmw2GxwOBx4fHzGdTpFMJkVzNB7UGAmSSqU2RoDmnETQ6XQiOyKRiHCOSk0ZEZQcUKlU8Pz8LA5vNptRr9eFCJQBFHq//szG5eWlGA1ywOnpqQhBapoWPfl+vw+fzweXyyU+U635VRGUBOh0OigUCggGg8IFK/teXV3h/v4ew+Hwj/OQU4gUq/w4ODgQrkkkEmKEVGp+tXm6XkkAOngmk4HBYBAjQA6gEKRmyOL05GnR99vbW9jtdjEGdP319bUIR8oA+pnG5OLiQoghU5OElFlKAtCGr6+vKJfLmEwm64aosd/XbDbbyIBSqSSeNKU+HXzlnFAohKOjI6maMs0rO0B20590n7IDflIzMmdhAfiNEL8R4jdC/EZIJj235R6mAFOAKcAUYApsS6LL9MEUYAowBZgCTAGZ9NyWe5gCTAGmAFOAKbAtiS7TB1Ng1ynwDkxRe58vH3FfAAAAAElFTkSuQmCC\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                        <h5 class=\"media-heading\">Naimish Sakhpara</h5>\r\n                        <small>Hello</small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n     -->\r\n    \r\n    \r\n            <div class=\"message-wrap col-lg-8\">\r\n                <div class=\"msg-wrap\">\r\n    \r\n    \r\n                    <div class=\"media msg \" *ngFor=\"let message of data.messages\">\r\n                        \r\n                        <div class=\"media-body\">\r\n                            \r\n                            <h5 class=\"media-heading\">{{data.user.name}}  {{data.user.lastname}}</h5>\r\n                            <small class=\"col-lg-10\">{{message.message}}</small>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                 \r\n                </div>\r\n    \r\n                <div class=\"send-wrap \">\r\n    \r\n                    <textarea class=\"form-control send-message\" rows=\"3\" [(ngModel)]=\"reply\" name=\"reply\" placeholder=\"Write a reply...\"></textarea>\r\n    \r\n    \r\n                </div>\r\n                <div class=\"btn-panel\">\r\n                   \r\n                    <a  class=\" col-lg-4 text-right btn   send-message-btn pull-right\" role=\"button\" (click)=\"sendReply()\"><i class=\"fa fa-plus\"></i> Send Message</a>\r\n                   \r\n                  </div>\r\n            </div>\r\n            \r\n        </div>\r\n    </div>  \r\n    </div> \r\n  </mat-dialog-content>\r\n  </div> \r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/table-list/table-list.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/table-list/table-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"card\" >\n      <div class=\"card-header card-header-info\" >\n        \n        <div class=\"card-icon\">\n          <i class=\"material-icons\">list</i>\n        </div>\n        <h3 class=\"card-title\">Liste des clients  \n      <h5 class=\"card-category \" style=\"color: white;\"> Gérer vos clients ici</h5>\n    </h3>\n        <div class=\"row\">\n          <div class=\"col-md-3 offset-md-3\"></div>\n          \n        </div>\n      </div>\n       <div class=\"card-body\">\n            <div class=\"table-responsive\"style=\"color:aqua\">   \n              <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n               \n                <ng-container matColumnDef=\"name\">\n                  <th mat-header-cell *matHeaderCellDef> Name </th>\n                  <td mat-cell *matCellDef=\"let element \"> {{element.name}} </td>\n                </ng-container>\n              \n                \n                <ng-container matColumnDef=\"lastname\">\n                  <th mat-header-cell *matHeaderCellDef> lastname </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.lastname}} </td>\n                </ng-container>\n              \n               \n                <ng-container matColumnDef=\"email\">\n                  <th mat-header-cell *matHeaderCellDef> email </th>\n                  <td mat-cell *matCellDef=\"let element \"> {{element.email}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"cin\">\n                  <th mat-header-cell *matHeaderCellDef> cin </th>\n                  <td mat-cell *matCellDef=\"let element \"> {{element.cin}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"phone\">\n                  <th mat-header-cell *matHeaderCellDef> phone </th>\n                  <td mat-cell *matCellDef=\"let element \"> {{element.phone}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"action\">\n                  <th mat-header-cell *matHeaderCellDef style=\"margin-left: 10px;\" > Details </th>\n                  <td mat-cell *matCellDef=\"let element \">\n                    <div class=\"example-button-row\">\n                      <button mat-raised-button   (click)=\"openDialog(element)\" matTooltip=\"afficher détails Client\" [matTooltipPosition]=\"'above'\">\n                      <i style=\"margin-left: 5px;\"  class=\"material-icons\">\n                        list\n                        </i>\n                    </button>\n               \n                    </div></td>\n                </ng-container>\n              \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n            </div>\n        </div> \n    </div> \n    <!-- <mat-card class=\"example-card\" style=\"margin-bottom: 300px;\">\n      <mat-card-header>\n        <mat-card-title>{{user.name+' '+user.lastname}}</mat-card-title>\n        <mat-card-subtitle>parking user</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n       <div>idMatricule :{{element.idMat}}</div> \n       <div>car :{{element.car}}</div> \n       <div>Matricule :{{element.mat}}</div> \n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-raised-button class=\"btn btn-outline-dark \"matTooltip=\"Modifier Client\" [matTooltipPosition]=\"'above'\"><i style=\"margin-left: 5px;\"  class=\"material-icons\">\n          create\n          </i></button>\n        \n        <button mat-raised-button (click)=\"close()\"  style=\"margin-left: 70px;\" matTooltip=\"Close this Card\" [matTooltipPosition]=\"'above'\">\n          <i class=\"material-icons\">\n            done\n            </i>\n        </button>\n      </mat-card-actions>\n    </mat-card> -->\n</div>\n<!--<mat-card *ngIf=\"isShown\"class=\"example-card\" style=\"margin-bottom: 300px;\">\n  <mat-card-header>\n    <mat-card-title>{{user.name+' '+user.lastname}}</mat-card-title>\n    <mat-card-subtitle>parking user</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n   <div>idMatricule :{{element.idMat}}</div> \n   <div>car :{{element.car}}</div> \n   <div>Matricule :{{element.mat}}</div> \n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button class=\"btn btn-outline-dark \"matTooltip=\"Modifier Client\" [matTooltipPosition]=\"'above'\"><i style=\"margin-left: 5px;\"  class=\"material-icons\">\n      create\n      </i></button>\n    \n    <button mat-raised-button (click)=\"close()\"  style=\"margin-left: 70px;\" matTooltip=\"Close this Card\" [matTooltipPosition]=\"'above'\">\n      <i class=\"material-icons\">\n        done\n        </i>\n    </button>\n  </mat-card-actions>\n</mat-card>--> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-contact/user-contact.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-contact/user-contact.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"card\" >\n    <div class=\"card-header card-header-info\" >\n      \n      <div class=\"card-icon\">\n        <i class=\"material-icons\">list</i>\n      </div>\n      <h3 class=\"card-title\">Details  \n    <h5 class=\"card-category \" style=\"color: white;\"> License Plates -  balance </h5>\n  </h3>\n      <div class=\"row\">\n        <div class=\"col-md-3 offset-md-3\"></div>\n        \n      </div>\n    </div>\n     <div class=\"card-body\">\n      <h5 class=\"card-category \" style=\"color: rgb(23, 170, 207);\"> <b>Balance :</b> </h5>\n      <hr> <h2 style=\"color: rgb(43, 41, 41); text-align: center\" > <b>{{balance}} DT</b>  </h2>\n      <hr>\n      <h5 class=\"card-category \" style=\"color: rgb(23, 170, 207);\"><b>License Plates :</b>  </h5>\n          <div class=\"table-responsive\"style=\"color:aqua\">   \n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n              <ng-container matColumnDef=\"Type Car\">\n                <th mat-header-cell *matHeaderCellDef> <h6> Type Car </h6>   </th>\n                <td mat-cell *matCellDef=\"let element \"> {{element.type_Car}} </td>\n              </ng-container>\n            \n              \n              <ng-container matColumnDef=\"license Plate number\" style=\"margin-left: 10px;\">\n                <th mat-header-cell *matHeaderCellDef> <h6> License Plate number </h6> </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.nb_L}} </td>\n              </ng-container>\n            \n             \n              <ng-container matColumnDef=\"verification status\" style=\"margin-left: 10px;\">\n                <th mat-header-cell *matHeaderCellDef><h6> Verification status</h6>  </th>\n                <td mat-cell *matCellDef=\"let element \"> {{element.verfied}} </td>\n              </ng-container>\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              \n            </table>\n          </div>\n      </div> \n  </div> \n  <!-- <mat-card *ngIf=\"isShown\"class=\"example-card\" style=\"margin-bottom: 300px;\">\n    <mat-card-header>\n      <mat-card-title>{{user.name+' '+user.lastname}}</mat-card-title>\n      <mat-card-subtitle>parking user</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n     <div>idMatricule :{{element.idMat}}</div> \n     <div>car :{{element.car}}</div> \n     <div>Matricule :{{element.mat}}</div> \n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button class=\"btn btn-outline-dark \"matTooltip=\"Modifier Client\" [matTooltipPosition]=\"'above'\"><i style=\"margin-left: 5px;\"  class=\"material-icons\">\n        create\n        </i></button>\n      \n      <button mat-raised-button (click)=\"close()\"  style=\"margin-left: 70px;\" matTooltip=\"Close this Card\" [matTooltipPosition]=\"'above'\">\n        <i class=\"material-icons\">\n          done\n          </i>\n      </button>\n    </mat-card-actions>\n  </mat-card> -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-profile/user-profile.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n              <div class=\"card\">\n                <div class=\"card-header card-header-info\" >\n      \n                    <div class=\"card-icon\">\n                       <!-- <i class=\"material-icons\">list</i> -->\n                       <span class=\"material-icons\">\n                        directions_car\n                        </span>\n                    </div>\n                    <h3 class=\"card-title\">Add a new car  \n                    <h5 class=\"card-category \" style=\"color: white;\"> Please do not submit before you make sure of the writen data validity </h5>\n                    </h3>\n                  <div class=\"row\">\n                    <div class=\"col-md-3 offset-md-3\"></div>\n                    \n                  </div>\n                </div>\n                 \n                  <div class=\"card-body\">\n                    <form >\n       \n                      <div class=\"row\" style=\"margin-left: 24px;\">\n                        <div class=\"col-md-5\">\n                          <label for=\"type_Car\">Type Car :</label>\n                          <input [(ngModel)]=\"type_Car\" name=\"type_Car\" id=\"type_Car\" placeholder=\"polo7\" class=\"form-control\"  required>\n                        </div>\n                        <div class=\"col-md-5\">\n                          <label for=\"nb_L\">License palte number:</label>\n                          <input [(ngModel)]=\"nb_L\" name=\"nb_L\" id=\"nb_L\" class=\"form-control\" placeholder=\"xxx-xxxx\"  required>\n                         </div>\n                      </div>\n                      <button type=\"button\" class=\"btn btn-success\" (click)=\"addCar()\" style=\"margin-top: 8px; margin-right: 8px;\"> Add car </button>\n                    </form> \n                  </div>\n              </div>\n          </div>\n          \n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-reservation/user-reservation.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-reservation/user-reservation.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n              <div class=\"card\">\n                <div class=\"card-header card-header-info\" >\n      \n                    <div class=\"card-icon\">\n                       <!-- <i class=\"material-icons\">list</i> -->\n                       <span class=\"material-icons\">\n                        assignment\n                        </span>\n                    </div>\n                    <h3 class=\"card-title\">Contact  \n                    <h5 class=\"card-category \" style=\"color: white;\"> Feel free to write </h5>\n                    </h3>\n                  <div class=\"row\">\n                    <div class=\"col-md-3 offset-md-3\"></div>\n                    \n                  </div>\n                </div>\n                 \n                  <div class=\"card-body\">\n                    <!-- <form >\n                      <div class=\"form-group\">\n                        <label for=\"exampleFormControlTextarea1\">Contact us :</label>\n                        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" [(ngModel)]=\"contact\" name=\"contact\" rows=\"6\"></textarea>\n                      </div>\n                      \n                      <button type=\"button\" class=\"btn btn-success\" (click)=\"sendContact()\" style=\"margin-top: 8px; margin-right: 8px;\"> send </button>\n                    </form>  -->\n\n                    <div class=\"container\">\n        \n                      <div class=\"row\">\n                  \n                  \n                          <div class=\"message-wrap col-lg-8\">\n                              <div class=\"msg-wrap\">\n                  \n                  \n                                  <div class=\"media msg \" *ngFor=\"let reply of replys\">\n                                      \n                                      <div class=\"media-body\">\n                                          \n                                          <h5 class=\"media-heading\">Admin</h5>\n                                          <small class=\"col-lg-10\">{{reply.reply}}</small>\n                                      </div>\n                                  </div>\n                                  \n                               \n                              </div>\n                  \n                              <div class=\"send-wrap \">\n                  \n                                  <textarea class=\"form-control send-message\" rows=\"3\" [(ngModel)]=\"contact\" name=\"contact\" placeholder=\"Write to us ...\"></textarea>\n                  \n                  \n                              </div>\n                              <div class=\"btn-panel\">\n                                 \n                                  <a  class=\" col-lg-4 text-right btn   send-message-btn pull-right\" role=\"button\" (click)=\"sendContact()\"><i class=\"fa fa-plus\"></i> Send Message</a>\n                                 \n                                </div>\n                          </div>\n                          \n                      </div>\n                  </div>  \n                  </div>\n              </div>\n          </div>\n          \n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../table-list/table-list.component */ "./src/app/table-list/table-list.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
/* harmony import */ var app_user_contact_user_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/user-contact/user-contact.component */ "./src/app/user-contact/user-contact.component.ts");
/* harmony import */ var app_user_reservation_user_reservation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/user-reservation/user-reservation.component */ "./src/app/user-reservation/user-reservation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"]
            ],
            declarations: [app_user_contact_user_contact_component__WEBPACK_IMPORTED_MODULE_10__["UserContactComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"],
                _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_8__["TableListComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__["NotificationsComponent"], app_user_reservation_user_reservation_component__WEBPACK_IMPORTED_MODULE_11__["UserReservationComponent"], _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_8__["DialogOverviewExampleDialog"]
            ],
            entryComponents: [_table_list_table_list_component__WEBPACK_IMPORTED_MODULE_8__["DialogOverviewExampleDialog"]
            ],
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../table-list/table-list.component */ "./src/app/table-list/table-list.component.ts");
/* harmony import */ var app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var app_user_contact_user_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/user-contact/user-contact.component */ "./src/app/user-contact/user-contact.component.ts");
/* harmony import */ var app_user_reservation_user_reservation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/user-reservation/user-reservation.component */ "./src/app/user-reservation/user-reservation.component.ts");





var AdminLayoutRoutes = [
    { path: "user-profile", component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__["UserProfileComponent"], canActivate: [app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], data: { roles: ["user"] } },
    { path: "details", component: app_user_contact_user_contact_component__WEBPACK_IMPORTED_MODULE_3__["UserContactComponent"], canActivate: [app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], data: { roles: ["user"] } },
    { path: "table-list", component: _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_1__["TableListComponent"], canActivate: [app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], data: { roles: ["admin"] } },
    // { path: "notifications", component: NotificationsComponent, canActivate:[AuthGuard], data: {roles: ["user", "admin"]}},
    { path: "reclamations", component: app_user_reservation_user_reservation_component__WEBPACK_IMPORTED_MODULE_4__["UserReservationComponent"], canActivate: [app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], data: { roles: ["user"] } }
];


/***/ }),

/***/ "./src/app/notifications/notifications.component.css":
/*!***********************************************************!*\
  !*** ./src/app/notifications/notifications.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/index.js!./src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/table-list/dialog-details.css":
/*!***********************************************!*\
  !*** ./src/app/table-list/dialog-details.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n   width: 400px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('istockphoto-1037657544-1024x1024.jpg');\r\n    background-size: cover;\r\n  }\r\n  \r\n  table {\r\n    width: 100%;\r\n  }\r\n  \r\n  .ajoute{\r\n  width:100px;\r\n\r\n  \r\n}\r\n  \r\n  .conversation-wrap\r\n{\r\n    box-shadow: -2px 0 3px #ddd;\r\n    padding:0;\r\n    max-height: 400px;\r\n    overflow: auto;\r\n}\r\n  \r\n  .conversation\r\n{\r\n    padding:5px;\r\n    border-bottom:1px solid #ddd;\r\n    margin:0;\r\n\r\n}\r\n  \r\n  .message-wrap\r\n{\r\n    box-shadow: 0 0 3px #ddd;\r\n    padding:0;\r\n\r\n}\r\n  \r\n  .msg\r\n{\r\n    padding:5px;\r\n    /*border-bottom:1px solid #ddd;*/\r\n    margin:0;\r\n}\r\n  \r\n  .msg-wrap\r\n{\r\n    padding:10px;\r\n    max-height: 400px;\r\n    overflow: auto;\r\n\r\n}\r\n  \r\n  .time\r\n{\r\n    color:#bfbfbf;\r\n}\r\n  \r\n  .send-wrap\r\n{\r\n    border-top: 1px solid #eee;\r\n    border-bottom: 1px solid #eee;\r\n    padding:10px;\r\n    /*background: #f8f8f8;*/\r\n}\r\n  \r\n  .send-message\r\n{\r\n    resize: none;\r\n}\r\n  \r\n  .highlight\r\n{\r\n    background-color: #f7f7f9;\r\n    border: 1px solid #e1e1e8;\r\n}\r\n  \r\n  .send-message-btn\r\n{\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n\r\n    border-bottom-right-radius: 0;\r\n}\r\n  \r\n  .btn-panel\r\n{\r\n    background: #f7f7f9;\r\n}\r\n  \r\n  .btn-panel .btn\r\n{\r\n    color:#b8b8b8;\r\n\r\n    -webkit-transition: 0.2s all ease-in-out;\r\n\r\n    transition: 0.2s all ease-in-out;\r\n}\r\n  \r\n  .btn-panel .btn:hover\r\n{\r\n    color:#666;\r\n    background: #f8f8f8;\r\n}\r\n  \r\n  .btn-panel .btn:active\r\n{\r\n    background: #f8f8f8;\r\n    box-shadow: 0 0 1px #ddd;\r\n}\r\n  \r\n  .btn-panel-conversation .btn,.btn-panel-msg .btn\r\n{\r\n\r\n    background: #f8f8f8;\r\n}\r\n  \r\n  .btn-panel-conversation .btn:first-child\r\n{\r\n    border-right: 1px solid #ddd;\r\n}\r\n  \r\n  .msg-wrap .media-heading\r\n{\r\n    color:#003bb3;\r\n    font-weight: 700;\r\n}\r\n  \r\n  .msg-date\r\n{\r\n    background: none;\r\n    text-align: center;\r\n    color:#aaa;\r\n    border:none;\r\n    box-shadow: none;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n  \r\n  body::-webkit-scrollbar {\r\n    width: 12px;\r\n}\r\n  \r\n  /* Let's get this party started */\r\n  \r\n  ::-webkit-scrollbar {\r\n    width: 6px;\r\n}\r\n  \r\n  /* Track */\r\n  \r\n  ::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); \r\n/*        -webkit-border-radius: 10px;\r\n    border-radius: 10px;*/\r\n}\r\n  \r\n  /* Handle */\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n/*        -webkit-border-radius: 10px;\r\n    border-radius: 10px;*/\r\n    background:#ddd; \r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); \r\n}\r\n  \r\n  ::-webkit-scrollbar-thumb:window-inactive {\r\n    background: #ddd; \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUtbGlzdC9kaWFsb2ctZGV0YWlscy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxZQUFZO0VBQ2I7O0VBRUE7SUFDRSw2REFBOEU7SUFDOUUsc0JBQXNCO0VBQ3hCOztFQUNBO0lBQ0UsV0FBVztFQUNiOztFQUdGO0VBQ0UsV0FBVzs7O0FBR2I7O0VBQ0E7O0lBRUksMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7RUFDQTs7SUFFSSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLFFBQVE7O0FBRVo7O0VBRUE7O0lBRUksd0JBQXdCO0lBQ3hCLFNBQVM7O0FBRWI7O0VBQ0E7O0lBRUksV0FBVztJQUNYLGdDQUFnQztJQUNoQyxRQUFRO0FBQ1o7O0VBQ0E7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjOztBQUVsQjs7RUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztFQUVBOztJQUVJLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7RUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztFQUVBOztJQUVJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0VBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiw0QkFBNEI7O0lBRTVCLDZCQUE2QjtBQUNqQzs7RUFDQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0VBRUE7O0lBRUksYUFBYTs7SUFFYix3Q0FBZ0M7O0lBQWhDLGdDQUFnQztBQUNwQzs7RUFFQTs7SUFFSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztFQUNBOztJQUVJLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0VBRUE7OztJQUdJLG1CQUFtQjtBQUN2Qjs7RUFDQTs7SUFFSSw0QkFBNEI7QUFDaEM7O0VBRUE7O0lBRUksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7RUFHQTs7SUFFSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQzs7RUFHQTtJQUNJLFdBQVc7QUFDZjs7RUFHQSxpQ0FBaUM7O0VBQ2pDO0lBQ0ksVUFBVTtBQUNkOztFQUVBLFVBQVU7O0VBQ1Y7SUFDSSxpREFBaUQ7QUFDckQ7eUJBQ3lCO0FBQ3pCOztFQUVBLFdBQVc7O0VBQ1g7QUFDQTt5QkFDeUI7SUFDckIsZUFBZTtJQUNmLGlEQUFpRDtBQUNyRDs7RUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlLWxpc3QvZGlhbG9nLWRldGFpbHMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgIHdpZHRoOiA0MDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9pc3RvY2twaG90by0xMDM3NjU3NTQ0LTEwMjR4MTAyNC5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcblxyXG4uYWpvdXRle1xyXG4gIHdpZHRoOjEwMHB4O1xyXG5cclxuICBcclxufVxyXG4uY29udmVyc2F0aW9uLXdyYXBcclxue1xyXG4gICAgYm94LXNoYWRvdzogLTJweCAwIDNweCAjZGRkO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uY29udmVyc2F0aW9uXHJcbntcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbjowO1xyXG5cclxufVxyXG5cclxuLm1lc3NhZ2Utd3JhcFxyXG57XHJcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4ICNkZGQ7XHJcbiAgICBwYWRkaW5nOjA7XHJcblxyXG59XHJcbi5tc2dcclxue1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICAvKmJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7Ki9cclxuICAgIG1hcmdpbjowO1xyXG59XHJcbi5tc2ctd3JhcFxyXG57XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLnRpbWVcclxue1xyXG4gICAgY29sb3I6I2JmYmZiZjtcclxufVxyXG5cclxuLnNlbmQtd3JhcFxyXG57XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgLypiYWNrZ3JvdW5kOiAjZjhmOGY4OyovXHJcbn1cclxuXHJcbi5zZW5kLW1lc3NhZ2Vcclxue1xyXG4gICAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWU4O1xyXG59XHJcblxyXG4uc2VuZC1tZXNzYWdlLWJ0blxyXG57XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG5cclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcbi5idG4tcGFuZWxcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmOTtcclxufVxyXG5cclxuLmJ0bi1wYW5lbCAuYnRuXHJcbntcclxuICAgIGNvbG9yOiNiOGI4Yjg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5idG4tcGFuZWwgLmJ0bjpob3ZlclxyXG57XHJcbiAgICBjb2xvcjojNjY2O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxufVxyXG4uYnRuLXBhbmVsIC5idG46YWN0aXZlXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICNkZGQ7XHJcbn1cclxuXHJcbi5idG4tcGFuZWwtY29udmVyc2F0aW9uIC5idG4sLmJ0bi1wYW5lbC1tc2cgLmJ0blxyXG57XHJcblxyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxufVxyXG4uYnRuLXBhbmVsLWNvbnZlcnNhdGlvbiAuYnRuOmZpcnN0LWNoaWxkXHJcbntcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi5tc2ctd3JhcCAubWVkaWEtaGVhZGluZ1xyXG57XHJcbiAgICBjb2xvcjojMDAzYmIzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuXHJcbi5tc2ctZGF0ZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6I2FhYTtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG5cclxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbn1cclxuXHJcblxyXG4vKiBMZXQncyBnZXQgdGhpcyBwYXJ0eSBzdGFydGVkICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDZweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpOyBcclxuLyogICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7Ki9cclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4vKiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsqL1xyXG4gICAgYmFja2dyb3VuZDojZGRkOyBcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuNSk7IFxyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6d2luZG93LWluYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7IFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/table-list/table-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/table-list/table-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ntable {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n.ajoute{\r\n  width:100px;\r\n\r\n  \r\n}\r\n\r\n\r\n.example-button-row button,\r\n  .example-button-row a {\r\n    margin-right: 12px;\r\n    margin-bottom: 8px;\r\n    margin-top: 8px;\r\n  }\r\n\r\n\r\n.example-card {\r\n    max-width: 350px;\r\n    margin-left: 30%;\r\n  }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUtbGlzdC90YWJsZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztFQUNiOzs7QUFHRjtFQUNFLFdBQVc7OztBQUdiOzs7QUFDRTs7SUFFRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7OztBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlLWxpc3QvdGFibGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcblxyXG4uYWpvdXRle1xyXG4gIHdpZHRoOjEwMHB4O1xyXG5cclxuICBcclxufVxyXG4gIC5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4gIC5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgfVxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/table-list/table-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/table-list/table-list.component.ts ***!
  \****************************************************/
/*! exports provided: TableListComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableListComponent", function() { return TableListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var app_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/firebase.service */ "./src/app/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var Matricules = [
    { id_U: 1, id_L: 1, type_Car: 'marcedes', nb_L: 11111111, img_Li_Url: '' },
];
var TableListComponent = /** @class */ (function () {
    function TableListComponent(dialog, db, firestore, firebaseService) {
        this.dialog = dialog;
        this.db = db;
        this.firestore = firestore;
        this.firebaseService = firebaseService;
        this.Users = [];
        this.element = { id_U: 1, id_L: 1, type_Car: 'marcedes', nb_L: 11111111, img_Li_Url: '' };
        this.displayedColumns = ['name', 'lastname', 'email', 'cin', 'phone', 'action'];
        this.licensePlates = [];
        this.messages = [];
        this.itemList = db.list("Users");
    }
    TableListComponent.prototype.loadData = function () {
        var _this = this;
        this.firestore.collection("users").ref.where("role", "==", "user").onSnapshot(function (snap) {
            console.log(snap);
            snap.forEach(function (userRef) {
                console.log("userRef", userRef.data());
                _this.Users.push(userRef.data());
                console.log(_this.Users);
                _this.dataSource = _this.Users;
            });
        });
        //     this.itemList.snapshotChanges().subscribe(
        //   actions =>{
        //     actions.forEach(action=>{
        //      let y=action.payload.toJSON()
        //      y['$key'] = action.key
        //      y={$key: 2, name: y['name'], lastname: y['lastname'], email: y['email'], cin:y['cin'],phone:y['phone'], type_U:y['type_U'],password:y['password']}
        //      this.Users.push( y as User  )
        //      this.dataSource = this.Users
        //     })
        //   }
        // )
        return this.dataSource;
    };
    TableListComponent.prototype.ngOnInit = function () {
        console.log(this.Users);
    };
    TableListComponent.prototype.ngAfterViewInit = function () {
        this.dataSource = this.loadData();
    };
    TableListComponent.prototype.deleteUser = function (userToDelete) {
        this.firebaseService.deleteUser(userToDelete);
    };
    TableListComponent.prototype.close = function () {
    };
    TableListComponent.prototype.openDialog = function (user) {
        var _this = this;
        this.licensePlates = [];
        this.messages = [];
        this.firestore.collection("LicensePlates").ref.where("id", "==", user.id).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (userRef) {
                console.log("LicensePlates", userRef.data());
                _this.licensePlates.push(userRef.data());
            });
            _this.firestore.collection("Messages").ref.where("id", "==", user.id).get().then(function (querySnapshot) {
                querySnapshot.forEach(function (userRef) {
                    _this.messages.push(userRef.data());
                });
                console.log("meesages ", _this.messages);
                var dialogRef = _this.dialog.open(DialogOverviewExampleDialog, {
                    width: '1200px',
                    data: { user: user, LicensePlates: _this.licensePlates, messages: _this.messages }
                });
            });
        });
        // (snap=>{ console.log(snap)
        //   snap.forEach(userRef => {
        //       console.log("LicensePlates", userRef.data());
        //       this.licensePlates.push( userRef.data() as any  )
        //       })
        //       const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        //         width: '1200px',
        //         data: {user:user, LicensePlates:this.licensePlates}
        //       });
        //     })
    };
    TableListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-list',
            template: __webpack_require__(/*! raw-loader!./table-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/table-list/table-list.component.html"),
            styles: [__webpack_require__(/*! ./table-list.component.css */ "./src/app/table-list/table-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], app_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]])
    ], TableListComponent);
    return TableListComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(firebaseService, dialog, dialogRef, data) {
        this.firebaseService = firebaseService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['Type Car', 'license Plate number', 'verification status', 'action'];
        this.amount = 0.0;
        this.reply = "";
    }
    DialogOverviewExampleDialog.prototype.verification = function (nb_L) {
        this.firebaseService.updateLicensePlate(nb_L);
        this.showNotification('top', 'right', "License Plate has been verified :) ");
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog.prototype.addBalnace = function () {
        this.firebaseService.updateBalance(this.data.user, this.amount);
        this.showNotification('top', 'right', "The amount has been added to client balance :) ");
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog.prototype.sendReply = function () {
        this.firebaseService.sendReply(this.reply, this.data.user.id);
        this.showNotification('top', 'right', "Message has been sent to client :) ");
    };
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
        this.dialog.closeAll();
    };
    DialogOverviewExampleDialog.prototype.showNotification = function (from, align, message) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: message
        }, {
            type: type['info'],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    DialogOverviewExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! raw-loader!./dialog-overview-example-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/table-list/dialog-overview-example-dialog.html"),
            styles: [__webpack_require__(/*! ./dialog-details.css */ "./src/app/table-list/dialog-details.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [app_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "./src/app/user-contact/user-contact.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/user-contact/user-contact.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.ajoute {\n  width: 100px;\n}\n\n.example-button-row button,\n.example-button-row a {\n  margin-right: 12px;\n  margin-bottom: 8px;\n  margin-top: 8px;\n}\n\n.example-card {\n  max-width: 350px;\n  margin-left: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1jb250YWN0L0M6XFxVc2Vyc1xcV2Fzc2ltIEJlbiBnaGF6aVxcRGVza3RvcFxcRUZTXFxlZnNcXFNtYXJ0LVBhcmtpbmctL3NyY1xcYXBwXFx1c2VyLWNvbnRhY3RcXHVzZXItY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci1jb250YWN0L3VzZXItY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7QUNBSjs7QURJQTtFQUNFLFlBQUE7QUNERjs7QURLRTs7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBRElFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvdXNlci1jb250YWN0L3VzZXItY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5cclxuLmFqb3V0ZXtcclxuICB3aWR0aDoxMDBweDtcclxuXHJcbiAgXHJcbn1cclxuICAuZXhhbXBsZS1idXR0b24tcm93IGJ1dHRvbixcclxuICAuZXhhbXBsZS1idXR0b24tcm93IGEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIH1cclxuICAuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gIH1cclxuICIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ham91dGUge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxuLmV4YW1wbGUtYnV0dG9uLXJvdyBhIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/user-contact/user-contact.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-contact/user-contact.component.ts ***!
  \********************************************************/
/*! exports provided: UserContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContactComponent", function() { return UserContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var app_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/firebase.service */ "./src/app/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserContactComponent = /** @class */ (function () {
    function UserContactComponent(firestore, firebaseService) {
        this.firestore = firestore;
        this.firebaseService = firebaseService;
        this.licensePlates = [];
        this.balance = 0.0;
        this.displayedColumns = ['Type Car', 'license Plate number', 'verification status'];
    }
    UserContactComponent.prototype.ngOnInit = function () { this.balance = this.firebaseService.currentUser.balance; };
    UserContactComponent.prototype.loadData = function () {
        var _this = this;
        this.firestore.collection("LicensePlates").ref.where("id", "==", this.firebaseService.currentUser.id).onSnapshot(function (snap) {
            console.log(snap);
            snap.forEach(function (userRef) {
                console.log("LicensePlates", userRef.data());
                _this.licensePlates.push(userRef.data());
                console.log("LicensePlates", _this.licensePlates);
                _this.dataSource = _this.licensePlates;
            });
        });
        return this.dataSource;
    };
    UserContactComponent.prototype.ngAfterViewInit = function () {
        this.dataSource = this.loadData();
    };
    UserContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-contact',
            template: __webpack_require__(/*! raw-loader!./user-contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-contact/user-contact.component.html"),
            styles: [__webpack_require__(/*! ./user-contact.component.scss */ "./src/app/user-contact/user-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], app_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], UserContactComponent);
    return UserContactComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content{\r\n    margin-left: auto;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCOztBQUVyQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/firebase.service */ "./src/app/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(db, router, firebaseService) {
        this.db = db;
        this.router = router;
        this.firebaseService = firebaseService;
        //  vérifier la validité de l'email 
        this.matcher = new MyErrorStateMatcher();
        /**/
        this.MyUser = { id: null,
            name: null,
            lastname: null,
            email: null,
            cin: null,
            phone: null,
            type_U: null,
            balance: 0.0,
            role: "user"
        };
        this.type_Car = "";
        this.nb_L = "";
        this.itemList = db.list("Users");
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.prototype.addCar = function () {
        this.showNotification('top', 'right');
        this.firebaseService.carRequest(this.type_Car, this.nb_L);
        this.type_Car = "";
        this.nb_L = "";
    };
    //Notification function
    UserProfileComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "add car request has been sent :) "
        }, {
            type: type['info'],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());

var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/user-reservation/user-reservation.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/user-reservation/user-reservation.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".conversation-wrap {\n  box-shadow: -2px 0 3px #ddd;\n  padding: 0;\n  max-height: 400px;\n  overflow: auto;\n}\n\n.conversation {\n  padding: 5px;\n  border-bottom: 1px solid #ddd;\n  margin: 0;\n}\n\n.message-wrap {\n  box-shadow: 0 0 3px #ddd;\n  padding: 0;\n}\n\n.msg {\n  padding: 5px;\n  /*border-bottom:1px solid #ddd;*/\n  margin: 0;\n}\n\n.msg-wrap {\n  padding: 10px;\n  max-height: 400px;\n  overflow: auto;\n}\n\n.time {\n  color: #bfbfbf;\n}\n\n.send-wrap {\n  border-top: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n  padding: 10px;\n  /*background: #f8f8f8;*/\n}\n\n.send-message {\n  resize: none;\n}\n\n.highlight {\n  background-color: #f7f7f9;\n  border: 1px solid #e1e1e8;\n}\n\n.send-message-btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.btn-panel {\n  background: #f7f7f9;\n}\n\n.btn-panel .btn {\n  color: #b8b8b8;\n  -webkit-transition: 0.2s all ease-in-out;\n  transition: 0.2s all ease-in-out;\n}\n\n.btn-panel .btn:hover {\n  color: #666;\n  background: #f8f8f8;\n}\n\n.btn-panel .btn:active {\n  background: #f8f8f8;\n  box-shadow: 0 0 1px #ddd;\n}\n\n.btn-panel-conversation .btn, .btn-panel-msg .btn {\n  background: #f8f8f8;\n}\n\n.btn-panel-conversation .btn:first-child {\n  border-right: 1px solid #ddd;\n}\n\n.msg-wrap .media-heading {\n  color: #003bb3;\n  font-weight: 700;\n}\n\n.msg-date {\n  background: none;\n  text-align: center;\n  color: #aaa;\n  border: none;\n  box-shadow: none;\n  border-bottom: 1px solid #ddd;\n}\n\nbody::-webkit-scrollbar {\n  width: 12px;\n}\n\n/* Let's get this party started */\n\n::-webkit-scrollbar {\n  width: 6px;\n}\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  /*        -webkit-border-radius: 10px;\n      border-radius: 10px;*/\n}\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  /*        -webkit-border-radius: 10px;\n      border-radius: 10px;*/\n  background: #ddd;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1yZXNlcnZhdGlvbi9DOlxcVXNlcnNcXFdhc3NpbSBCZW4gZ2hhemlcXERlc2t0b3BcXEVGU1xcZWZzXFxTbWFydC1QYXJraW5nLS9zcmNcXGFwcFxcdXNlci1yZXNlcnZhdGlvblxcdXNlci1yZXNlcnZhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci1yZXNlcnZhdGlvbi91c2VyLXJlc2VydmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksMkJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDREo7O0FER0E7RUFFSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0FDREo7O0FES0E7RUFFSSx3QkFBQTtFQUNBLFVBQUE7QUNISjs7QURNQTtFQUVJLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7QUNKSjs7QURNQTtFQUVJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNKSjs7QURRQTtFQUVJLGNBQUE7QUNOSjs7QURTQTtFQUVJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNQSjs7QURVQTtFQUVJLFlBQUE7QUNSSjs7QURXQTtFQUVJLHlCQUFBO0VBQ0EseUJBQUE7QUNUSjs7QURZQTtFQUVJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUVBLDZCQUFBO0FDWEo7O0FEYUE7RUFFSSxtQkFBQTtBQ1hKOztBRGNBO0VBRUksY0FBQTtFQUVBLHdDQUFBO0VBQUEsZ0NBQUE7QUNiSjs7QURnQkE7RUFFSSxXQUFBO0VBQ0EsbUJBQUE7QUNkSjs7QURnQkE7RUFFSSxtQkFBQTtFQUNBLHdCQUFBO0FDZEo7O0FEaUJBO0VBR0ksbUJBQUE7QUNoQko7O0FEa0JBO0VBRUksNEJBQUE7QUNoQko7O0FEbUJBO0VBRUksY0FBQTtFQUNBLGdCQUFBO0FDakJKOztBRHFCQTtFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNuQko7O0FEdUJBO0VBQ0ksV0FBQTtBQ3BCSjs7QUR3QkEsaUNBQUE7O0FBQ0E7RUFDSSxVQUFBO0FDckJKOztBRHdCQSxVQUFBOztBQUNBO0VBQ0ksb0RBQUE7RUFDSjsyQkFBQTtBQ3BCQTs7QUR3QkEsV0FBQTs7QUFDQTtFQUNBOzJCQUFBO0VBRUksZ0JBQUE7RUFDQSxvREFBQTtBQ3JCSjs7QUR1QkE7RUFDSSxnQkFBQTtBQ3BCSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcmVzZXJ2YXRpb24vdXNlci1yZXNlcnZhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udmVyc2F0aW9uLXdyYXBcclxue1xyXG4gICAgYm94LXNoYWRvdzogLTJweCAwIDNweCAjZGRkO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uY29udmVyc2F0aW9uXHJcbntcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbjowO1xyXG5cclxufVxyXG5cclxuLm1lc3NhZ2Utd3JhcFxyXG57XHJcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4ICNkZGQ7XHJcbiAgICBwYWRkaW5nOjA7XHJcblxyXG59XHJcbi5tc2dcclxue1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICAvKmJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7Ki9cclxuICAgIG1hcmdpbjowO1xyXG59XHJcbi5tc2ctd3JhcFxyXG57XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLnRpbWVcclxue1xyXG4gICAgY29sb3I6I2JmYmZiZjtcclxufVxyXG5cclxuLnNlbmQtd3JhcFxyXG57XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgLypiYWNrZ3JvdW5kOiAjZjhmOGY4OyovXHJcbn1cclxuXHJcbi5zZW5kLW1lc3NhZ2Vcclxue1xyXG4gICAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWU4O1xyXG59XHJcblxyXG4uc2VuZC1tZXNzYWdlLWJ0blxyXG57XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG5cclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcbi5idG4tcGFuZWxcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmOTtcclxufVxyXG5cclxuLmJ0bi1wYW5lbCAuYnRuXHJcbntcclxuICAgIGNvbG9yOiNiOGI4Yjg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5idG4tcGFuZWwgLmJ0bjpob3ZlclxyXG57XHJcbiAgICBjb2xvcjojNjY2O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxufVxyXG4uYnRuLXBhbmVsIC5idG46YWN0aXZlXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICNkZGQ7XHJcbn1cclxuXHJcbi5idG4tcGFuZWwtY29udmVyc2F0aW9uIC5idG4sLmJ0bi1wYW5lbC1tc2cgLmJ0blxyXG57XHJcblxyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxufVxyXG4uYnRuLXBhbmVsLWNvbnZlcnNhdGlvbiAuYnRuOmZpcnN0LWNoaWxkXHJcbntcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi5tc2ctd3JhcCAubWVkaWEtaGVhZGluZ1xyXG57XHJcbiAgICBjb2xvcjojMDAzYmIzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuXHJcbi5tc2ctZGF0ZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6I2FhYTtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG5cclxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbn1cclxuXHJcblxyXG4vKiBMZXQncyBnZXQgdGhpcyBwYXJ0eSBzdGFydGVkICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDZweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpOyBcclxuLyogICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7Ki9cclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4vKiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsqL1xyXG4gICAgYmFja2dyb3VuZDojZGRkOyBcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuNSk7IFxyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6d2luZG93LWluYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7IFxyXG59XHJcbiIsIi5jb252ZXJzYXRpb24td3JhcCB7XG4gIGJveC1zaGFkb3c6IC0ycHggMCAzcHggI2RkZDtcbiAgcGFkZGluZzogMDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uY29udmVyc2F0aW9uIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWVzc2FnZS13cmFwIHtcbiAgYm94LXNoYWRvdzogMCAwIDNweCAjZGRkO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubXNnIHtcbiAgcGFkZGluZzogNXB4O1xuICAvKmJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7Ki9cbiAgbWFyZ2luOiAwO1xufVxuXG4ubXNnLXdyYXAge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50aW1lIHtcbiAgY29sb3I6ICNiZmJmYmY7XG59XG5cbi5zZW5kLXdyYXAge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC8qYmFja2dyb3VuZDogI2Y4ZjhmODsqL1xufVxuXG4uc2VuZC1tZXNzYWdlIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG4uaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlODtcbn1cblxuLnNlbmQtbWVzc2FnZS1idG4ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5idG4tcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y5O1xufVxuXG4uYnRuLXBhbmVsIC5idG4ge1xuICBjb2xvcjogI2I4YjhiODtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGwgZWFzZS1pbi1vdXQ7XG59XG5cbi5idG4tcGFuZWwgLmJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjNjY2O1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xufVxuXG4uYnRuLXBhbmVsIC5idG46YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjZGRkO1xufVxuXG4uYnRuLXBhbmVsLWNvbnZlcnNhdGlvbiAuYnRuLCAuYnRuLXBhbmVsLW1zZyAuYnRuIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cblxuLmJ0bi1wYW5lbC1jb252ZXJzYXRpb24gLmJ0bjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5tc2ctd3JhcCAubWVkaWEtaGVhZGluZyB7XG4gIGNvbG9yOiAjMDAzYmIzO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubXNnLWRhdGUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYWFhO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMnB4O1xufVxuXG4vKiBMZXQncyBnZXQgdGhpcyBwYXJ0eSBzdGFydGVkICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAvKiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsqL1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAvKiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsqL1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOndpbmRvdy1pbmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/user-reservation/user-reservation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/user-reservation/user-reservation.component.ts ***!
  \****************************************************************/
/*! exports provided: UserReservationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReservationComponent", function() { return UserReservationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/firebase.service */ "./src/app/firebase.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserReservationComponent = /** @class */ (function () {
    function UserReservationComponent(firestore, firebaseService) {
        this.firestore = firestore;
        this.firebaseService = firebaseService;
        this.replys = [];
        this.contact = "";
    }
    UserReservationComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    UserReservationComponent.prototype.sendContact = function () {
        this.firebaseService.sendContact(this.contact);
        this.showNotification('top', 'right');
    };
    UserReservationComponent.prototype.loadData = function () {
        var _this = this;
        this.replys = [];
        this.firestore.collection("AdminReply").ref.where("id", "==", this.firebaseService.currentUser.id).onSnapshot(function (snap) {
            snap.forEach(function (userRef) {
                console.log("AdminReply", userRef.data());
                _this.replys.push(userRef.data());
            });
        });
    };
    // ngAfterViewInit() {
    //                     this.loadData()
    //                   }
    UserReservationComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "your message has been sent ,you'll be contacted soon :)"
        }, {
            type: type['info'],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    UserReservationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-reservation',
            template: __webpack_require__(/*! raw-loader!./user-reservation.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-reservation/user-reservation.component.html"),
            styles: [__webpack_require__(/*! ./user-reservation.component.scss */ "./src/app/user-reservation/user-reservation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], app_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]])
    ], UserReservationComponent);
    return UserReservationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map