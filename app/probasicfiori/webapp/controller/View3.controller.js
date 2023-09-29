sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",

    // "sap/ui/core/mvc/Controller/View3",

    "sap/m/MessageToast",

    "sap/ui/core/Fragment",

    "sap/ui/model/Filter",

    "sap/ui/model/FilterOperator",

    "sap/ui/core/UIComponent",

    "sap/ui/model/json/JSONModel",
  ],

  /**



   * @param {typeof sap.ui.core.mvc.Controller} Controller



   */

  function (
    Controller,
    MessageToast,
    Fragment,
    Filter,
    FilterOperator,
    UIComponent,
    JSONModel
  ) {
    "use strict";

    // var oModel = new JSONModel({

    //     items: [

    //        { name: "Item 1", description: "Description 1" },

    //        { name: "Item 2", description: "Description 2" },

    //        { name: "Item 3", description: "Description 3" }

    //     ]

    //  });

    //  // Set the model to the view

    //  this.getView().byId("listId").setModel(oModel);

    var travelType;
    var travelMode;
    var NumberOfPassenger;
    var tripType;

    var retDate;
    var retMonth;
    var retYear;

    var arrDate;
    var arrMonth;
    var arrYear;

    var depDate;
    var depMonth;
    var depYear;

    var PassengerNameArr = [];

    var field;

    var id = 1;

    var PassengerName1;
    var PassengerName2;
    var PassengerName3;
    var PassengerName4;
    var PassengerName5;

    var origin;
    var destination;

    var billable_value;

    var BillableCustomer;

    var DepoDatePicker;
    var DepselectedDate;
    var DepformattedDate;
    var Depdate;

    var ArroDatePicker;
    var ArrselectedDate;
    var ArrformattedDate;
    var Arrdate;

    var RetoDatePicker;
    var RetselectedDate;
    var RetformattedDate;
    var Retdate;

    var NumberOfmonth;
    var NumberOfdays;

    var hotelAccVal;

    // var data=oEvent.mParameters.arguments;

    //   var tripType=data.tripType;

    //   var NumberOfPassenger=data.NumberOfPassenger;

    //   var travelMode=data.travelMode;

    //   var travelType=data.travelType;

    return Controller.extend("probasicfiori.controller.View3", {
      onInit: function (oEvent) {
        // var rejectBtn = this.getView().byId("_IDGenMultiInput1");

        //     var rejectBtn = this.getView().byId("_IDGenMultiInput1").setEnabled(false);

        //     if(rejectBtn.getVisible()) {

        //        rejectBtn.setVisible(false);

        //    }

        //    abc.setEnabled(false);

        // location.reload();

        this.getView().byId("_IDGenButton1").setEnabled(false);

        this.getView().byId("BillableCustomer").setEnabled(false);

        this.getView().byId("_IDGenInput1").setEnabled(false);

        // console.log({Employee});

        //    var abbb=this.getView().byId("NameOfPassenger")

        //    debugger;

        // console.log(abbb);

        sap.ui.core.UIComponent.getRouterFor(this)
          .getRoute("RouteView3")
          .attachPatternMatched(this._onRouteMatched, this);
      },

      Cancel: function () {
        location.reload();
      },

      onSubmit: function () {},

      nameofPassenger: function () {
        PassengerName1 = this.getView()
          .byId("NameOfPassenger00")
          .getSelectedItem()
          .getText();

        console.log(PassengerName1);

        PassengerNameArr.push(PassengerName1);
      },

      nameofPassenger1: function () {
        PassengerName2 = this.getView()
          .byId("NameOfPassenger01")
          .getSelectedItem()
          .getText();

        console.log(PassengerName2);

        PassengerNameArr.push(PassengerName2);
      },

      nameofPassenger2: function () {
        PassengerName3 = this.getView()
          .byId("NameOfPassenger02")
          .getSelectedItem()
          .getText();

        console.log(PassengerName3);

        PassengerNameArr.push(PassengerName3);
      },

      nameofPassenger3: function () {
        PassengerName4 = this.getView()
          .byId("NameOfPassenger03")
          .getSelectedItem()
          .getText();

        console.log(PassengerName4);

        PassengerNameArr.push(PassengerName4);
      },

      nameofPassenger4: function () {
        var PassengerName5 = this.getView()
          .byId("NameOfPassenger04")
          .getSelectedItem()
          .getText();

        console.log(PassengerName5);

        PassengerNameArr.push(PassengerName5);
      },

      backButton: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

        oRouter.navTo("RouteView2");

        location.reload();
      },

      _onRouteMatched: function (oEvent) {
        //  var component = this.getOwnerComponent();

        //  component.refreshBinding();

        travelType = oEvent.mParameters.arguments.travelType;

        travelMode = oEvent.mParameters.arguments.travelMode;

        NumberOfPassenger = oEvent.mParameters.arguments.NumberOfPassenger;

        tripType = oEvent.mParameters.arguments.tripType;

        for (let index = 0; index < 5 - NumberOfPassenger; index++) {
          let selectfield = this.getView().byId(`NameOfPassenger0${id}`);

          if (selectfield.getVisible()) {
            selectfield.setVisible(false);
          }

          id = id + 1;

          // console.log(id);

          //  field= this.getView().byId("_IDGenSimpleForm2").addContent(new sap.m.MultiInput({

          // //   id:"MultiInputPassenger",

          //    width:"300px",

          //  }).setValue("hh"))

          //  this.getView().byId("MultiInputPassenger").addContent(new sap.m.items)({

          //     text:"{Name}"

          //  })
        }
      },

      destination: function () {
        // console.log(oEvent);

        origin = this.getView().byId("city").getSelectedItem().getText();

        destination = this.getView().byId("city2").getSelectedItem().getText();

        console.log(origin);

        console.log(destination);

        if (origin == destination) {
          alert("Origin or Destination can't be same");

          this.getView().byId("city2").getSelectedItem().setValue("");
        }
      },

      handleChange01: function (oEvent) {
        DepoDatePicker = oEvent.getSource();

        DepselectedDate = DepoDatePicker.getDateValue();

        // console.log("Selected Date:", selectedDate);

        DepformattedDate =
          sap.ui.core.format.DateFormat.getDateInstance().format(
            DepselectedDate
          );

        // console.log("Formatted Date:", formattedDate);

        Depdate = new Date(DepformattedDate);

        depDate = Depdate.getDate();

        depMonth = Depdate.getMonth() + 1;

        depYear = Depdate.getFullYear();

        console.log(depDate);

        console.log(depMonth);

        console.log(depYear);
      },

      handleChange: function (oEvent) {
        ArroDatePicker = oEvent.getSource();

        ArrselectedDate = ArroDatePicker.getDateValue();

        // console.log("Selected Date:", selectedDate);

        ArrformattedDate =
          sap.ui.core.format.DateFormat.getDateInstance().format(
            ArrselectedDate
          );

        // console.log("Formatted Date:", formattedDate);

        Arrdate = new Date(ArrformattedDate);

        arrDate = Arrdate.getDate();

        arrMonth = Arrdate.getMonth() + 1;

        arrYear = Arrdate.getFullYear();

        if (depMonth === arrMonth) {
          if (depDate > arrDate) {
            alert("Arrival Date not valid");

            this.getView().byId("datePicker1").setValue("");
          }
        } else if (depMonth < arrMonth) {
          if (depDate > arrDate) {
            alert("Arrival Date not valid");
          }
        } else if (depMonth > arrMonth) {
          if (depDate > arrDate) {
            alert("Arrival Date not valid");
          }
        }

        console.log(arrDate);

        console.log(arrMonth);

        console.log(arrYear);
      },

      handleChange1: function (oEvent) {
        RetoDatePicker = oEvent.getSource();

        RetselectedDate = RetoDatePicker.getDateValue();

        // console.log("Selected Date:", selectedDate);

        RetformattedDate =
          sap.ui.core.format.DateFormat.getDateInstance().format(
            RetselectedDate
          );

        // console.log("Formatted Date:", formattedDate);

        Retdate = new Date(RetformattedDate);

        retDate = Retdate.getDate();

        retMonth = Retdate.getMonth() + 1;

        retYear = Retdate.getFullYear();

        if (
          retMonth == 1 ||
          retMonth == 3 ||
          retMonth == 5 ||
          retMonth == 7 ||
          retMonth == 8 ||
          retMonth == 10 ||
          retMonth == 12
        ) {
          NumberOfmonth = (retMonth - arrMonth) * 31;
        } else if (
          retMonth == 4 ||
          retMonth == 6 ||
          retMonth == 9 ||
          retMonth == 11
        ) {
          NumberOfmonth = (retMonth - arrMonth) * 30;
        } else if (retMonth == 2) {
          NumberOfmonth = (retMonth - arrMonth) * 28;
        }

        NumberOfdays = retDate - arrDate + NumberOfmonth;

        if (NumberOfdays < 0) {
          alert("Return date can't be backDate");

          this.getView().byId("datePicker2").setValue("");
        } else if (NumberOfdays == 0) {
          this.getView().byId("_IDGenInput1").setValue(NumberOfdays);

          this.getView().byId("_IDGenSwitch1").setState(false);

          hotelAccVal = "No";

          console.log(hotelAccVal);
        } else if (NumberOfdays >= 1) {
          this.getView().byId("_IDGenInput1").setValue(NumberOfdays);

          this.getView().byId("_IDGenSwitch1").setState(true);

          hotelAccVal = "Yes";

          console.log(hotelAccVal);
        }

        if (PassengerNameArr) {
          if (origin) {
            if (destination) {
              if (billable_value == "Yes") {
                if (BillableCustomer) {
                  this.getView().byId("_IDGenButton1").setEnabled(true);
                }
              } else {
                if (Depdate) {
                  if (Arrdate)
                    if (Retdate) {
                      if (NumberOfdays >= 0) {
                        this.getView().byId("_IDGenButton1").setEnabled(true);
                      }
                    }
                }
              }
            }
          }
        }

        console.log(retDate);

        console.log(retMonth);

        console.log(retYear);

        console.log(NumberOfdays);
      },

      billable: function () {
        billable_value = this.getView()
          .byId("billable_value")
          .getSelectedItem()
          .getText();

        console.log(billable_value);

        if (billable_value == "Yes") {
          this.getView().byId("BillableCustomer").setEnabled(true);
        } else {
          this.getView().byId("BillableCustomer").setEnabled(false);
        }
      },

      BillableCustomer: function () {
        BillableCustomer = this.getView()
          .byId("BillableCustomer")
          .getSelectedItem()
          .getText();

        console.log(BillableCustomer);
      },

      onValueHelpClose: function (oEvent) {
        var oSelectedItem = oEvent.getParameter("selectedItem");

        oEvent.getSource().getBinding("items").filter([]);

        if (!oSelectedItem) {
          return;
        }

        this.byId("singleCondition").setValue(oSelectedItem.getTitle());
      },

      onValueHelpSearch: function (oEvent) {
        var sValue = oEvent.getParameter("value");

        var oFilter = new Filter(
          "passengerName",
          FilterOperator.Contains,
          sValue
        );

        oEvent.getSource().getBinding("items").filter([oFilter]);
      },

      onOpenDialog: function () {
        // create dialog lazily

        if (!this.pDialog) {
          this.pDialog = this.loadFragment({
            name: "probasicfiori.view.dialog",
          });
        }

        this.pDialog.then(function (oDialog) {
          oDialog.open();
        });
      },

      onSubmit: function () {
        var oTravel = {
          travelId: "",

          empId_Empid: "",

          empName_Empid: "",

          origin: origin,

          destination: destination,

          dateOfDeparture: Depdate,

          dateOfArrival: arrDate,

          dateOfReturn: retYear,

          description: "Success hai boss",

          price: null,

          travelStatus: "",

          noOfDays: NumberOfdays,

          noOfPassengers: NumberOfPassenger,

          passengerName: [],

          travelType: travelType,

          travelMode: travelMode,

          RoundTrip: tripType,

          Accomandation: hotelAccVal,

          billable: billable_value,
        };

        var JsonData = JSON.stringify(oTravel);

        console.log(JsonData);

        var EndPoint = "http://localhost:4004/odata/v4/travel/Travel";

        fetch(EndPoint, {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JsonData,
        })
          .then(function (res) {
            if (res.ok) {
              console.log("Entity created successfully");
            } else {
              console.log("Failed");
            }
          })

          .catch(function (err) {
            console.log("error", err);
          });
      },
    });
  }
);
