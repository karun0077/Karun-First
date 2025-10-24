toastr.options.closeButton = true;
toastr.options.positionClass = "toast-top-right";

(function (IPMSRoot) {

    var isView = 0;
    var ArrivalNotificationViewModel = function (vcn, WorkflowInstanceId, viewDetail, ActionDetails) {
        var self = this;
        var initaldt = "";
        self.viewArrivalNotification1 = ko.observableArray();
        self.arrivalNotificationList = ko.observableArray();

        self.ValidTillProformaDateList = ko.observableArray();
        self.ProformaDatefield = ko.observable();
        self.GetVCNRef = ko.observable();

        self.dateFormat = new IPMSROOT.dateFormat();
        self.arrivalNotificationListGrid = ko.observableArray();
        //self.numbers == ko.observableArray(); 
        self.inputValue = ko.observable("");
        self.isDuplicate = ko.observable(false);

        self.selectedNumber = ko.observable(3);
        self.arrivalNotificationListSearchGrid = ko.observableArray();
        self.viewModelHelper = new IPMSROOT.viewModelHelper();
        self.validationHelper = new IPMSROOT.validationHelper();
        self.viewMode = ko.observable();
        self.pdfgenerate = ko.observable();
        self.printView = ko.observable(false);
        self.arrivalNotificationModelGrid = ko.observable(new IPMSROOT.ArrivalNotificationModelGrid());
        self.arrivalNotificationModelSearchGrid = ko.observable(new IPMSROOT.ArrivalNotificationModelSearchGrid());
        self.arrivalNotificationModel = ko.observable(new IPMSROOT.ArrivalNotificationModel());
        self.arrivalCommodityModel = ko.observable(new IPMSROOT.ArrivalCommodity());
        self.vesseldetailsmodel = ko.observable(new IPMSROOT.VesseldetailsModel());
        self.vesseldetailchangeModel = ko.observable(new IPMSRoot.VesselDetailChange());
        self.vesselsmodel = ko.observable();
        self.IsBargeVessel = ko.observable(false);
        self.ispsRefNo = ko.observable(false);
        self.arrivalNotificationReferenceData = ko.observable();
        self.arrivalNotificationReferenceBirthData = ko.observable();
        self.arrivalNotificationAllBirthData = ko.observable();
        self.RefUserTypeFlag = ko.observable();
        self.isClearenceEnable = ko.observable(false);
        self.isOtherRsonVisible = ko.observable(false);
        self.isVoyageNumber = ko.observable(true);
        self.isreasonvisitcolumnVisible = ko.observable(false);
        self.VesseltypeCheck = ko.observableArray([{ name: "Container Vessels", type: "V151" }, { name: "Pure Car Carriers", type: "V152" }, { name: "Pure Car/Truck Carriers", type: "V153" }, { name: "Project Cargo Vessels", type: "V154" }]);
        self.isArrvalEnable = ko.observable(false);
        self.isPurposeDropdownEnable = ko.observable(false);
        self.isPHOEnable = ko.observable(false);
        self.isISPSEnable = ko.observable(false);
        self.isISPSDTLEnable = ko.observable(false);
        self.isIMDGEnable = ko.observable(false);
        self.isIMDGEnablechk = ko.observable(false);
        self.isspanpreferredberth = ko.observable(false);
        self.isspanPreferredSideDock = ko.observable(false);
        self.isspanLastPortOfCall = ko.observable(false);
        self.isspanNextPortOfCall = ko.observable(false);
        self.isspanPakistaniCrew = ko.observable(false);
        self.isspanAdditionalTugReq = ko.observable(false);
        self.isspanShipperReceiver = ko.observable(false);
        self.isspanReasonForVisit = ko.observable(false);
        self.pakistaniCrewOnboard = ko.observable(false);
        self.AdditionalTugRequired = ko.observable(false);
        self.AllNavigationalEquipmentOperational = ko.observable(false);
        self.PortAndStarboardAnchorsAreOperational = ko.observable(false);
        self.VesselCoveredunderPandIClub = ko.observable(false);
        self.ShoreMooringpatternSufficientlinesonBoard = ko.observable(false);
        self.ForwardandAfterWinchOperational = ko.observable(false);
        self.IsvesselfitinallrespectforsafeBerthing = ko.observable(false);
        self.CheckingDoyouintendtousewireRopewithouttailRopeForMooring = ko.observable(false);
        self.DaylightSpecifyReasonChanged = ko.observable(false);
        self.ArePropellersFullySubmergedinWater = ko.observable(true);
        self.isOtherRsonVisible = ko.observable(false);
        self.ValidateVessel = ko.observable(false);
        //  self.isspanResonForvisitdropdown = ko.observable(false);
        var firstSave = true;
        self.vesseldetailsvisable = ko.observable(false);
        self.arrivalNotificationReferenceDraftData = ko.observable();
        self.IsAddMode = ko.observable(false);
        self.IsAgentelblenable = ko.observable(false);
        self.IsTerminalOperatorChanged = ko.observable(false);
        self.SpecialNetureChanged = ko.observable(false);
        self.tidildetailschanged = ko.observable(false);
        self.spantidildetailstext = ko.observable(false);
        self.spanSpecialNatureReasontext = ko.observable(false);
        self.spanDaylightSpecifyReasontext = ko.observable(false);
        self.spanExceedSpecifyReasontext = ko.observable(false);
        self.spanNvgtEqpmntOprtnltext = ko.observable(false);
        self.spanfwrdaftWinchOprtnltext = ko.observable(false);
        self.spanPtStboardAnchorOprtnltext = ko.observable(false);
        self.spanPrlrsFullySbmrgdWatertext = ko.observable(false);
        self.spanPIClubtext = ko.observable(false);
        self.spansafeBerthingtext = ko.observable(false);
        self.spanShrMringlinestext = ko.observable(false);
        self.spanTailRopetext = ko.observable(false);
        self.Exeedportlimitenable = ko.observable(false);
        self.ExceedPortLimitationsReasonChanged = ko.observable(false);
        self.ClearanceChanged = ko.observable(false);
        self.isGoBackVisible = ko.observable(false);
        self.isGoNextVisible = ko.observable(false);
        self.isSaveVisible = ko.observable(true);
        self.isUpdateVisible = ko.observable(false);
        self.isSubmitVisible = ko.observable(false);
        self.isspanVCNSearchValid = ko.observable(false);
        self.isspanVesselSearchValid = ko.observable(false);
        self.CargoTypeInformation = ko.observableArray([]);
        self.isSaveDraftVisible = ko.observable(false);
        self.isViewMode = ko.observable(false);
        self.isReset = ko.observable(true);
        self.isCancelVisible = ko.observable(true);
        self.LayByVisble = ko.observable(false);
        self.BunkersVisible = ko.observable(false);
        self.viewModeForTabs = ko.observable();
        self.ETAselectedDate = ko.observable();
        self.isEnabled = ko.observable(true);
        self.isVslEnabled = ko.observable(true);
        self.isVesselNameEnabled = ko.observable(true);
        self.isVisitReasonEnabled = ko.observable(true);
        self.isTOEnabled = ko.observable(true);
        self.isArvValEnable = ko.observable(true);
        self.isEditEtavalEnable = ko.observable(true);
        self.isExemptionEnable = ko.observable(false);
        self.isDrftCmbEnabled = ko.observable(true);
        self.isVisible = ko.observable(true);
        self.isVisibleAdd = ko.observable(true);
        self.ReferenceData = ko.observable();
        self.BerthList = ko.observableArray([]);
        self.reasonForVisit = ko.observableArray([]);
        self.selectedBerth = ko.observable();
        self.shouldShowDivAV = ko.observable(false);
        self.isAddIMDGInformationsEnabled = ko.observable(true);
        self.isAddTankerCommoditiesEnabled = ko.observable(true);
        self.IsDangerousGoods = ko.observable(false);
        self.IsValidVCN = ko.observable(false);
        self.DryDockDetailsVisible = ko.observable(false);
        self.IsValidDockingPlanID = ko.observable(false);
        self.isDraftVisible = ko.observable(false);
        self.VUPD = ko.observable(false);
        self.AUPD = ko.observable(false);
        self.isspanAppliedDate = ko.observable(false);
        self.isspanEtaValid = ko.observable(false);
        self.isspanVslValid = ko.observable(false);
        self.isspanEmpagent = ko.observable(false);

        self.emailId = '';
        self.emailIdAgNo = '';
        self.emailIdsObservable = ko.observableArray([]);
        self.CertificateId = '';
        self.formattedDate = '';
        self.isspanOptValid1 = ko.observable(false);
        self.isspanOptValid2 = ko.observable(false);
        self.isspanOptValid3 = ko.observable(false);
        self.isspanOptValid4 = ko.observable(false);
        self.isspanSpecifyReason = ko.observable(false);
        self.arrivalNotificationReferenceDataforvessel = ko.observable();
        self.isspanloadValid = ko.observable(false);
        self.ismultiplepfileToUpload = ko.observable(false);
        self.isspanEtdValid = ko.observable(false);
        self.Vesseltypecomparision = ko.observable(false);
        self.QuantitiesofCommoditiesEnable = ko.observable(false);
        self.BullardPulltestEnable = ko.observable(false);
        self.PartOrFullDischargeEnable = ko.observable(false);
        self.TotalQuantityEnable = ko.observable("Quantity");
        self.isEmployee = ko.observable(false);
        self.isEmployee1 = ko.observable(false);
        self.WithTailRoping = ko.observable(false);
        self.getUserTypesKP = ko.observableArray([]);
        self.CheckTailRope = ko.observable(false);
        self.IMDGDisable = ko.observable(false);
        $("#ExemptionSpn").hide();

        //mahesh
        self.ShipperListForCargo = ko.observableArray([]);
        self.ShipperListForCargo1 = ko.observableArray([]);
        self.CargoGroupListArray = ko.observableArray([]);
        self.CargoGroupListArray1 = ko.observableArray([]);
        self.isCargosplitVisible = ko.observable(false);
        var remainTotal = 0;
        self.isVisibleView = ko.observable(true);
        self.VesselReferenceDtl1 = ko.observable();
        self.initialized = false;


        self.ClassificationsforBarge = ko.observableArray([]);
        //pdfclick
        //self.pdfclick = function (model)
        //{
        //  
        //    toastr.success("Huuu");

        //}
        //anjani
        self.vesseldetailchange = function (model) {

            self.vesseldetailchangeModel(new IPMSRoot.VesselDetailChange());
            self.vesseldetailchangeModel().VCN(model.ApprovedVCN());
            document.getElementById('vesseldetailchangevcnname').innerHTML = model.VesselName();
            self.vesseldetailchangeModel().MasterName(model.MasterName());
            self.vesseldetailchangeModel().CrewNo(model.CrewNo());
            self.vesseldetailchangeModel().PassengersNo(model.PassengersNo());
            self.vesseldetailchangeModel().ExitMasterName(model.ExitMasterName());
            self.vesseldetailchangeModel().ExitCrewNo(model.ExitCrewNo());
            self.vesseldetailchangeModel().ExitPassengersNo(model.ExitPassengersNo());
            self.arrivalNotificationModel().NextPortOfCallPOP(model.NextPortofCall());
            var LastPortOfCall = $("#NextPortOfCallPOP").data("kendoAutoComplete");

            // self.vesseldetailchangeModel().ViewNextPortCall(model.NextPortofCall());
            LastPortOfCall.suggest(model.ViewNextPortOfCall());

            //var result = self.arrivalNotificationReferenceData().PortDetails().filter(function (item) {
            //    return (item.PortCode() == model.NextPortofCall());
            //});
            //self.vesseldetailchangeModel().ViewNextPortCall(result[0].PortName());
            //LastPortOfCall.suggest(result[0].PortName());
            self.arrivalNotificationModelGrid(model);
            self.viewMode("vesselDetailChange");


        }

        self.isempty = function (value) {
            return value && value != null && value.length == 0 ? true : false;

        }
        //anjani
        self.updatevesseldetailchange = function (data) {


            //if ($("#NextPortOfCallPOP").val() != null || $("#NextPortOfCallPOP").val() != "") {
            //    self.vesseldetailchangeModel().ViewNextPortCall($("#NextPortOfCallPOP").val());
            //}
            //else {
            //    self.vesseldetailchangeModel().ViewNextPortCall("");
            //}

            if ($("#NextPortOfCallPOP").val() == null || $("#NextPortOfCallPOP").val() == "" || $("#NextPortOfCallPOP").val() == undefined) {

                toastr.warning("Next Port of Call is requried");
                return;
            }

            if (data.MasterName() == null || data.MasterName() == "" || data.MasterName() == undefined) {

                toastr.warning("Port Entry Master Name is requried");
                return;
            }
            if (data.CrewNo() == null || data.CrewNo() == "" || data.CrewNo() == undefined) {

                toastr.warning("Crew No is requried");
                return;
            }

            //if (data.PassengersNo() == null || data.PassengersNo() == "" || data.PassengersNo() == undefined) {

            //    toastr.warning("Passengers No is requried");
            //    return;
            //}





            self.vesseldetailchangeModel().IsValidationEnabled(true);
            data.IsValidationEnabled(true);
            self.VesselDetailChangeValidation = ko.observable(data);
            self.VesselDetailChangeValidation().errors = ko.validation.group(self.VesselDetailChangeValidation());

            errors = self.VesselDetailChangeValidation().errors().length;
            //  if (errors == 0) {

            var vesseldetailchangeobj = new IPMSRoot.VesselDetailChange;
            vesseldetailchangeobj.VCN = data.VCN;
            vesseldetailchangeobj.NextPortCall = self.arrivalNotificationModel().NextPortOfCallPOP();
            vesseldetailchangeobj.MasterName = data.MasterName;
            vesseldetailchangeobj.CrewNo = data.CrewNo;
            vesseldetailchangeobj.PassengersNo = data.PassengersNo;

            vesseldetailchangeobj.ExitMasterName = data.ExitMasterName;
            vesseldetailchangeobj.ExitPassengersNo = data.ExitPassengersNo;
            vesseldetailchangeobj.ExitCrewNo = data.ExitCrewNo;

            self.viewModelHelper.apiPost('api/UpdateVesselMasterChange', ko.mapping.toJSON(vesseldetailchangeobj), function Message(data) {
                if (data == "true") {
                    self.viewMode('List');
                    self.LoadArrivalNotifications();
                    $('#stack1').modal('hide');
                    toastr.options.closeButton = true;
                    toastr.options.positionClass = "toast-top-right";
                    toastr.success("vessel Detail Changes saved successfully");
                }

            });
            //}
            //else {
            //    toastr.options.closeButton = true;
            //    toastr.options.positionClass = "toast-top-right";
            //    toastr.warning("Please Enter the following Mandatory fields");
            //}
        }
        self.closePopup = function () {

            self.viewMode('List');
        }

        self.pdfclickInList = function (model) {
            self.viewMode('Clearance');
        }
        self.Print = function (model) {
            self.viewMode('Clearance');
        }
        self.cancelpdfView = function () {
           
            self.viewMode('List');
            self.inputValue(""); 
            //$('#emailFilter').val('');
            $('#emailFilter1').val('');
            $('#emailFilter2').val('');
            $('#suggestionBox').hide();
         

        } 
        self.cancelpdfView1 = function () {
            
            self.viewMode('List');
            self.inputValue(""); 
            //$('#emailFilter').val('');
            $('#emailFilter1').val('');
            $('#emailFilter2').val('');
            $('#suggestionBox').hide(); 
            self.selectedNumber(3);

            setTimeout(function () {
                window.location.href = window.location.href;
            }, 100);
        }
        //Bhavani-26-Aug-2024
        self.sendEmailEntry = function () {
            
            //console.log('Sending email...'); 
            //if (!self.emailId) {
            //    console.error('Email ID is not available.');
            //    return;
            //}
             
            const htmlContent = document.getElementById('div_certificateofentry').innerHTML;
            const subject = 'Certificate of Entry'; 
            const fullHtmlContent = `
        <html>
        <head>
            <style>
               
            </style>
        </head>
        <body>
            <div>${htmlContent}</div> 
        </body>
         <div class ="row"> <p>Note:This is a computer-generated document and does not require a signature.</p></div>
        </html>
    `;
             
            const emailDetails = {
                ToAddress: self.emailId,
                Subject: subject,
                MessageBody: fullHtmlContent
            }; 
            self.viewModelHelper.apiPost(
                          '/api/send-email',
                          ko.mapping.toJSON(emailDetails), function Message(data) {
                              if (data == 'Email sent successfully.') {
                                 //debugger
                                  self.viewMode('List');
                                  self.LoadArrivalNotifications();
                                  $('#stack1').modal('hide');
                                  toastr.options.closeButton = true;
                                  toastr.options.positionClass = "toast-top-right";
                                  toastr.success("Email sent successfully:");
                              }
                              else {
                                  toastr.options.closeButton = true;
                                  toastr.options.positionClass = "toast-top-right";
                                  toastr.warning("Error sending email. Please contact the administrator.");

                              }

                          });
                          
        };
        //Bhavani-26-Aug-2024 Second One   //Updated 16-OCT-2024
        self.sendEmail = function (recipientType) {
            //debugger
            //console.log('Sending email...'); 
            //if (!self.emailId) {
            //    console.error('Email ID is not available.');
            //    return;
            //} 
            let htmlContent='';
            let subject='';
            if (recipientType === 'agentClearance' || recipientType === 'customer'){
                  htmlContent = document.getElementById('div_noduecertificate').innerHTML;
                  subject = 'Certificate of Clearance'; 
            }
            else{
                  htmlContent = document.getElementById('div_certificateofentry').innerHTML;
                  subject = 'Certificate of Entry'; 
            }
            const fullHtmlContent = `
        <html>
        <head>
            <style>
               
            </style>
        </head>
        <body> 
            <div>${htmlContent}</div>
        </body>
        <div class="row">
            <p>Note: This is a computer-generated document and does not require a signature.</p>
        </div>
        </html>
    `;
     

            let toAddress;
            let emailFilterValue;

            if (recipientType === 'customer') {
                toAddress = self.emailId;
            } else if (recipientType === 'agentClearance') {
                // Get the value from the email filter input
                emailFilterValue = $('#emailFilter1').val();

                // Get the current value of the observable
                const emailIds = self.emailIdsObservable();

                // Extract the relevant part (the first two parts) from each email ID
                const validAccountIds = emailIds.map(emailId => {
                    const parts = emailId.split(' - ');
                    return parts.length > 1 ? parts[0] + ' - ' + parts[1] : '';
                });

                // Check if the emailFilterValue is a valid account ID
                const isEmailValid = validAccountIds.includes(emailFilterValue);

                if (!isEmailValid) {
                    toastr.options.closeButton = true;
                    toastr.options.positionClass = "toast-top-right";
                    toastr.warning("Please select a valid Account from the list.");
                    return; // Exit if the email ID is invalid
                }

                toAddress = self.emailIdAgNo; // Set toAddress to emailIdAgNo if valid
            } else {
                emailFilterValue = $('#emailFilter2').val();

                // Get the current value of the observable
                const emailIds = self.emailIdsObservable();

                // Extract the relevant part (the first two parts) from each email ID
                const validAccountIds = emailIds.map(emailId => {
                    const parts = emailId.split(' - ');
                    return parts.length > 1 ? parts[0] + ' - ' + parts[1] : '';
                });

                // Check if the emailFilterValue is a valid account ID
                const isEmailValid = validAccountIds.includes(emailFilterValue);

                if (!isEmailValid) {
                    toastr.options.closeButton = true;
                    toastr.options.positionClass = "toast-top-right";
                    toastr.warning("Please select a valid Account from the list.");
                    return; // Exit if the email ID is invalid
                }

                toAddress = self.emailIdAgNo; // Set toAddress if valid
            }

            const emailDetails = {
                ToAddress: toAddress,  
                Subject: subject,
                MessageBody: fullHtmlContent
            };

            // Proceed with sending the email using emailDetails...

            self.viewModelHelper.apiPost(
                '/api/send-email',
                ko.mapping.toJSON(emailDetails),
                function Message(data) {
                    if (data == 'Email sent successfully.') {
                        self.viewMode('List');
                        self.LoadArrivalNotifications();
                        $('#stack1').modal('hide');
                        toastr.options.closeButton = true;
                        toastr.options.positionClass = "toast-top-right";
                        toastr.success("Email sent successfully:");
                        self.inputValue(""); 
                        $('#emailFilter1').val('');
                        $('#emailFilter2').val('');
                    } else {
                        toastr.options.closeButton = true;
                        toastr.options.positionClass = "toast-top-right";
                        toastr.warning("Error sending email. Please contact the administrator.");
                    }
                }
            );
        };

         
        //Click event from List to get view Certificate of Entry
        self.pdfclickInListForData = function (model) {
            var vcn = model.VCN();
            self.viewModelHelper.apiGet('api/GetArrivalRegDataForCertificateofEntry/' + vcn, null,
                  function (result1) {


                      $('#COEclerancecertificateDate').text('');
                      $('#COEclerancecertificateDate').text(moment(result1.CertificateDate).format('DD.MM.YYYY'));
                      $('#COEclerancecertificatenumber').text('');
                      $('#COEclerancecertificatenumber').text(result1.CertificateId);
                      $('#COEvesselName').text('');
                      $('#COEvesselName').text(result1.VesselName);
                      $('#COEGRT').text('');
                      $('#COEGRT').text(result1.GRT);
                      $('#COEberthName').text('');
                      if (result1.BerthName != null) {
                        
                          $('#COEberthName').text(result1.BerthName);
                      }
                      $('#COEatbdateh').text('');
                      $('#COEatbdateh').text(result1.ATBDate);
                      $('#COEatbdate').text('');
                      $('#COEatbdate').text(result1.ATBDate);
                      $('#COEatbtime').text('');
                      $('#COEatbtime').text(result1.ATBTime);
                      $('#COElastportcall').text('');
                      $('#COElastportcall').text(result1.LastPort);
                      $('#COEmasterName').text('');
                      if (result1.MasterName != null) {
                  
                          $('#COEmasterName').text(result1.MasterName);
                      }
                      $('#COEnoofCrew').text('');
                      if (result1.NoofCrew == 0) {
                          $('#COEnoofCrew').text('');
                      }
                      else {
                          $('#COEnoofCrew').text('Captain and ' + (result1.NoofCrew - 1).toString());
                      }
                      $('#COEnoofPassengers').text('');
                      if (result1.PassengersNo == null) {
                          $('#COEnoofPassengers').text('');
                      }
                      else {
                          $('#COEnoofPassengers').text(result1.PassengersNo);
                      } 
                      self.emailId = result1.EmailId || '';

                      self.viewMode('Clearance');
                  }, null, null, false);
        }

        self.pdfclickInList2 = function (model) {
            self.viewMode('Clearance2');
        }

        self.cancelpdfView2 = function () {
            self.viewMode('List');
            
        }
        // Bhavani 12-sept-2024 updated 22-Oct-2024
        self.printQR = function (buttonId) {
            //
            //console.log('Generating and printing PDF...');

            //if (!self.emailId) {
            //    console.error('Email ID is not available.');
            //    return;
            //} 

            let htmlContent;
            let subject;

            if (buttonId === 'btnprintClear') {
                htmlContent = document.getElementById('div_noduecertificate').innerHTML;
                subject = 'Certificate of Clearance';
            } else if (buttonId === 'btnprintEntry') {
                htmlContent = document.getElementById('div_certificateofentry').innerHTML;
                subject = 'Certificate of Entry';
            } else {
                console.error('Unknown button ID.');
                return;
            }

            const fullHtmlContent = `
        <html>
        <head>
            <style>
                
            </style>
        </head>
        <body>
            <div>${htmlContent}<p>Note: This is a computer-generated document and does not require a signature.</p></div> 
        </body>
        </html>
    `;

            const emailDetails = {
                ToAddress: self.emailId,
                Subject: subject,
                MessageBody: fullHtmlContent
            };

            self.viewModelHelper.apiPost(
                '/api/printQR',
                ko.mapping.toJSON(emailDetails),
                function (response) {
                    if (response && response.PdfUrl) {
                        const pdfUrl = response.PdfUrl;

                        // Open a new blank window
                        const newWindow = window.open('', '_blank');
                        //if (!newWindow) {
                        //    console.error('Failed to open new tab. Please allow pop-ups for this site.');
                        //    return;
                        //}

                        // Create an iframe and set its source to the PDF URL
                        const iframe = newWindow.document.createElement('iframe');
                        iframe.style.width = '100%';
                        iframe.style.height = '100%';
                        iframe.style.border = 'none';
                        iframe.src = pdfUrl;

                        // Append the iframe to the new window
                        newWindow.document.body.appendChild(iframe);
                        newWindow.focus(); // Bring the new tab to focus if it was opened successfully
                    } else {
                        console.error('Invalid response received:', response);
                    }
                },
                function (error) {
                    console.error('Error generating PDF:', error);
                }
            );
        };

        function handlePrint(response) { 
            //debugger
            const pdfUrl = response.pdfUrl; 

            if (!pdfUrl) {
                toastr.options.closeButton = true;
                toastr.options.positionClass = "toast-top-right";
                toastr.error("PDF URL is not available.");
                return;
            } 
            const printWindow = window.open(pdfUrl, '_blank'); 
            if (printWindow) {
                printWindow.onload = function () {
                    printWindow.print();
                };
            } else {
                toastr.options.closeButton = true;
                toastr.options.positionClass = "toast-top-right";
                toastr.error("Failed to open the PDF. Please check if pop-ups are blocked.");
            }
        }
        self.showlog11 = function (formattedDate) {
            
            const dateParts = formattedDate.split('.');
            let apiFormattedDate; 

            if (dateParts.length === 3) { 
                apiFormattedDate = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;  
            } else {
                console.error('Formatted date is not in the expected format:', formattedDate);
                return;
            }

            self.viewModelHelper.apiGet( 
                `/api/ShowLogDetails/${self.CertificateId}/${encodeURIComponent(apiFormattedDate)}`,
                null,
                function (response) {
                   // createAndShowPopup(response);
                }
            );
        };

     //Bhavani 09-Sept-2024   updated by 24-sep-2024
        self.showlog = function () {
            const formattedDate = self.formattedDate || ''; 
            const dateParts = formattedDate.split('.');
            let apiFormattedDate; 
            if (dateParts.length === 3) { 
                apiFormattedDate = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;  
            } else {
                //console.error('Formatted date is not in the expected format:', formattedDate);
                return;
            } 
            self.viewModelHelper.apiGet( 
                 `/api/ShowLogDetails/${self.CertificateId}/${encodeURIComponent(apiFormattedDate)}`,
                null,
                function (response) {
                    createAndShowPopup(response);
                } 
               
            );
        };
         	
				
       
        function formatDate(dateString) { 
            const date = new Date(dateString); 
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');  
            const year = date.getFullYear(); 
            const hours = String(date.getHours() % 12 || 12).padStart(2, '0');  
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            const ampm = date.getHours() >= 12 ? 'PM' : 'AM'; 
            return `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${ampm}`;
        }

        function formatValidUpto(dateStr) {
            const [day, monthAbbr, year] = dateStr.split('-');
            const monthMap = {
                JAN: '01',
                FEB: '02',
                MAR: '03',
                APR: '04',
                MAY: '05',
                JUN: '06',
                JUL: '07',
                AUG: '08',
                SEP: '09',
                OCT: '10',
                NOV: '11',
                DEC: '12'
            };
    
            const month = monthMap[monthAbbr.toUpperCase()];
            const fullYear = year.length === 2 ? '20' + year : year;

            return `${day}/${month}/${fullYear} 00:00`;
        }

        function createAndShowPopup(data) {
            let tableHTML = '<table style="width: 100%; border-collapse: collapse;">';
            if (Array.isArray(data) && data.length > 0) {
                tableHTML += '<thead><tr>';
                Object.keys(data[0]).forEach(key => {
                    const displayKey = key === 'ClearenceDate' ? 'Date' : key;
                    tableHTML += `<th style="border: 1px solid #ddd; padding: 8px;">${displayKey}</th>`;
                });
                tableHTML += '</tr></thead><tbody>';
                data.forEach(item => {
                    tableHTML += '<tr>';
                    Object.keys(item).forEach(key => {
                        let value = item[key];
                        if (key === 'ClearenceDate' && value) {
                            value = formatDate(value);
                        } else if (key === 'ValidUpto' && value) {
                            value = formatValidUpto(value);
                        }
                        tableHTML += `<td style="border: 1px solid #ddd; padding: 8px;">${value}</td>`;
                    });
                    tableHTML += '</tr>';
                });
                tableHTML += '</tbody>';
            } else {
                tableHTML += '<tbody><tr><td colspan="100%" style="text-align: center; padding: 8px;">No data available</td></tr></tbody>';
            }
            tableHTML += '</table>';
            const modalHTML = `
        <div id="dynamicModal" class="modal" style="display: block; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1000;">
            <div class="modal-content" style="background: white; padding: 20px; margin: 15% auto; width: 80%; max-width: 800px; border-radius: 8px; position: relative;">
                <span id="closeModal" style="position: absolute; top: 10px; right: 10px; cursor: pointer; font-size: 20px;">&times;</span>
                <h3>Log Details</h3>
                ${tableHTML}
            </div>
        </div>
    `;

            document.body.insertAdjacentHTML('beforeend', modalHTML);
            document.getElementById('closeModal').addEventListener('click', function () {
                const modal = document.getElementById('dynamicModal');
                if (modal) {
                    modal.remove();
                }
            });
        }

       //Bhavani 15-Oct-2024
        self.checkInput = function() {
            //debugger
             
            const numericInput = self.inputValue().replace(/[^0-9]/g, ''); 
            if (numericInput.length > 7) {
                self.inputValue(numericInput.slice(0, 7));
            } else {
            self.inputValue(numericInput);
            } 
          
            if (self.inputValue().length === 7) {
                checkForDuplicates(self.inputValue());
                $('#btnSendEmailAgent').show();
                $('#btnSendEmailAgentE').show();
            } else {
                //self.isDuplicate(false);
                $('#btnSendEmailAgent').hide();
                $('#btnSendEmailAgentE').hide();
            }
        }; 
         
        function checkForDuplicates() {
            //
            self.viewModelHelper.apiGet('api/GetAgentExistorNot/', null,
                function(result) {
                    if (result === "Email not found") { 
                        toastr.options.closeButton = true;
                        toastr.options.positionClass = "toast-top-right"; 
                        toastr.error(`Agent not found`); 
                        self.inputValue("");  
                    } else {
                        $('#btnSendEmailAgent').show();
                        $('#btnSendEmailAgentE').show();
                        self.emailIdsObservable(result.EmailIDs);
                       // self.emailIdAgNo = result;   
                        //  populateEmailFilter(result.EmailIDs);
                        populateEmailFilter(result.EmailIDs, 'emailFilter2', 'suggestionBox2');
                        populateEmailFilter(result.EmailIDs, 'emailFilter1', 'suggestionBox1');
                    }
                },
                null,  
                null,    
                true   
            );
        } 
       
        function populateEmailFilter(emailIDs, filterInputId, suggestionBoxId) {
            const filterInput = $(`#${filterInputId}`);
            const suggestionBox = $(`#${suggestionBoxId}`);
            filterInput.val('');  
            suggestionBox.empty();   
            suggestionBox.hide();  

            // Handle input event
            filterInput.on('input', function() {
                const query = filterInput.val().toLowerCase();
                suggestionBox.empty();    

                if (query === '') {
                    suggestionBox.hide();
                    return;
                }  

                const filteredResults = emailIDs.filter(email => email.toLowerCase().includes(query));  

                if (filteredResults.length) {
                    filteredResults.forEach(item => {
                        const parts = item.split(' - ');   
                        const agentInfo = parts.slice(0, 2).join(' - ');  
                        const email = parts[2];   
                        suggestionBox.append(`<div class="suggestion" data-email="${email}">${agentInfo}</div>`);
                    });

                    // Show suggestion box with scrolling enabled
                    suggestionBox.show();   
                } else {
                    filterInput.val('');
                    suggestionBox.hide();   
                }
            }); 

            // Handle click on suggestion
            suggestionBox.on('click', '.suggestion', function() {
                const selectedText = $(this).text();
                const selectedEmail = $(this).data('email');   
                filterInput.val(selectedText); 
                self.emailIdAgNo = selectedEmail;  
                console.log("Selected email:", selectedEmail);  
                suggestionBox.empty();  
                suggestionBox.hide();   
            }); 

            // Close suggestion box if clicked outside
            $(document).on('click', function(event) {
                if (!filterInput.is(event.target) && !suggestionBox.is(event.target) && suggestionBox.has(event.target).length === 0) {
                    suggestionBox.hide();   
                }
            });
        }
         
       
        self.pdfclickInListForData2 = function (model) {
            //debugger
            var vcn = model.VCN();
            self.viewModelHelper.apiGet('api/GetArrivalRegDataForNoDueCertificate/' + vcn, null,
                function (result1) {
                    // Set text fields as before
                    $('#COCclerancecertificateDate').text(new Date(result1.CertificateDate).toLocaleDateString('en-GB'));
                    $('#COCclerancecertificatenumber').text(result1.CertificateId);
                    $('#COCvesselName').text(result1.VesselName);
                    $('#COCGRT').text(result1.GRT);
                    $('#ETDplus3').text(result1.ETDplus3);
                    $('#COCnextportcall').text(result1.NextPort);
                    if (result1.MasterName != null) {
                        $('#COCmasterName').text(result1.MasterName);
                    }
                    if (result1.NoofCrew == 0) {
                        $('#COCnoofCrew').text('');
                    } else {
                        $('#COCnoofCrew').text('Captain and ' + (result1.NoofCrew - 1).toString());
                    }
                    if (result1.PassengersNo == null) {
                        $('#COCnoofCrew2').text('');
                    } else {
                        $('#COCnoofCrew2').text(result1.PassengersNo);
                    }
                    self.emailId = result1.EmailId || '';
                    self.viewMode('Clearance2');

                    //// Convert VALIDUPTO ("27-MAY-25") to "31.05.2025"
                    //const validUptoDateStr = result1.VALIDUPTO; // assuming result1.VALIDUPTO = "27-MAY-25"
            
                    //// Split the date string to extract the day, month, and year
                    //const [dayStr, monthStr, yearStr] = validUptoDateStr.split('-');

                    //// Map month abbreviations to numeric month (0-based)
                    //const monthMap = {
                    //    JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
                    //    JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11
                    //};

                    //// Convert to Date object
                    //const day = parseInt(dayStr, 10);
                    //const month = monthMap[monthStr.toUpperCase()];
                    //const year = 2000 + parseInt(yearStr, 10); // Assuming the year is in "YY" format

                    //const validUptoDate = new Date(year, month, day);

                    //karun 
                    const vcnval = model.ApprovedVCNSortGrid;
                    const vcnvalref = model.VCN?._latestValue;
                    self.GetVCNRef=vcnvalref;
                    const filteredItem = self.ValidTillProformaDateList.find(item =>
                        item.ApprovedVCN === vcnval && item.VCN === vcnvalref
                    );

                    if (filteredItem.IsUpdatedThreeDays == null) {

                        let filterdate = null;
                        if (filteredItem && filteredItem.ProformaDate) {
                            // Convert string to Date object (manually parse)
                            const [datePart, timePart] = filteredItem.ProformaDate.split(' ');
                            const [day, month, year] = datePart.split('-').map(Number);
                            const [hours, minutes] = timePart ? timePart.split(':').map(Number) : [0, 0];

                            const dateObj = new Date(year, month - 1, day, hours, minutes);  // ✅ Create Date object

                            if (!isNaN(dateObj.getTime())) {
                                // ✅ Add 3 days
                                dateObj.setDate(dateObj.getDate() + 3);

                                const dayStr = String(dateObj.getDate()).padStart(2, '0');
                                const monthStr = String(dateObj.getMonth() + 1).padStart(2, '0');
                                const yearStr = dateObj.getFullYear();
                                const hourStr = String(dateObj.getHours()).padStart(2, '0');
                                const minStr = String(dateObj.getMinutes()).padStart(2, '0');

                                filterdate = `${dayStr}-${monthStr}-${yearStr} ${hourStr}:${minStr}`;
                                self.ProformaDatefield = filterdate;
                            } else {
                                console.warn("Invalid parsed date:", filteredItem.ProformaDate);
                            }
                        }

                    }
                    else{
                        self.ProformaDatefield = ko.computed(() => {
                            const d = new Date(filteredItem.ProformaUpdatedDate);
                            if (isNaN(d)) return "";
                            return `${("0" + d.getDate()).slice(-2)}-${["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][d.getMonth()]}-${d.getFullYear().toString().slice(-2)}`;
                        });
                        self.ProformaDatefield=  self.ProformaDatefield._latestValue;
                    }

                    //karun end



                    const validUptoDateStr =self.ProformaDatefield; //result1.VALIDUPTO ? result1.VALIDUPTO : result1.ATBDate;  //self.ProformaDatefield;
                    
                    const normalizedDateStr = validUptoDateStr.replace(/[.]/g, '-'); 
                    const [dayStr, monthStr, yearStr] = normalizedDateStr.split('-'); 
                    const monthMap = {
                        JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
                        JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11
                    };
                     
                    const day = parseInt(dayStr, 10); 
                    let month;
                    if (isNaN(parseInt(monthStr))) {
                        
                        month = monthMap[monthStr.toUpperCase()];
                    } else {
                        
                        month = parseInt(monthStr, 10) - 1; // JS Date month is 0-based
                    } 
                    let year;
                    if (yearStr.length === 2) {
                        year = 2000 + parseInt(yearStr, 10);
                    } else {
                        year = parseInt(yearStr, 10);
                    }                    
                    const validUptoDate = new Date(year, month, day);






                    // Check if the date is valid
                    if (isNaN(validUptoDate.getTime())) {
                        console.error('Invalid date:', validUptoDateStr);
                    } else {
                        // Format the date into DD.MM.YYYY
                        const formattedDate = validUptoDate.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY

                        // Replace '/' with '.' to match required format
                        const formattedDateWithDots = formattedDate.replace(/\//g, '.');

                        // Store the formatted date in a variable
                        const validUptoFormatted = formattedDateWithDots;

                        console.log(validUptoFormatted); // "27.05.2025"
                        updateValidityDate(validUptoFormatted);
                    }

                    // Continue with the other code
                    var currentDate = new Date();
                    var futureDate = new Date(currentDate);
                    futureDate.setDate(currentDate.getDate() + 3);
                    var certificateDate = new Date(result1.CertificateDate);
                    var timeDiff = certificateDate - futureDate;
                    var differenceInDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

                    if (model.ArvStatusSortGrid === 'Sailed') {
                        $('#renewalButton').hide();
                        $('#mySelectId').hide();
                        $('#mylabelId').hide();
                    } else {
                        $('#renewalButton').show();
                        $('#btnSendEmail1').prop('disabled', false);
                        $('#btnSendEmailAgent').prop('disabled', false);
                        $('#btnSendEmailAgentE').prop('disabled', false);
                        $('#numericInput').prop('disabled', false);
                        $('#emailFilter1').prop('disabled', false);
                        $('#emailFilter2').prop('disabled', false);
                        $('#numericInput').show();
                        $('#mylabelId').show();
                    }
                  //  updateValidityDate(validUptoFormatted);
                    self.CertificateId = result1.CertificateId;
                    self.selectedNumber(3);
                }, null, null, false);
        }
         
        function updateValidityDate(validUptoFormatted) { 
            const expiryDate = validUptoFormatted.trim();
            const clearanceDateStr = document.getElementById('COCclerancecertificateDate').textContent.trim();
           
            let dayStr1, monthStr1, yearStr1; 
            if (clearanceDateStr.includes('/')) {
                [dayStr1, monthStr1, yearStr1] = clearanceDateStr.split('/');
            } else if (clearanceDateStr.includes('.')) {
                [dayStr1, monthStr1, yearStr1] = clearanceDateStr.split('.');
            } else {
                console.error('Invalid date format:', clearanceDateStr);
                return;
            } 
            //const day = parseInt(dayStr, 10);
            //const month = parseInt(monthStr, 10) - 1;
            //const year = parseInt(yearStr, 10);
            //const clearanceDate = new Date(year, month, day); 
            //if (isNaN(clearanceDate.getTime())) {
            //    console.error('Invalid date:', clearanceDateStr);
            //    return;
            //} 
            //const daysToAdd = ko.unwrap(self.selectedNumber); 
            //const expiryDate = new Date(clearanceDateStrnew);
            //expiryDate.setDate(clearanceDateStrnew.getDate()); 
            //const formatDate = date => date.toString().padStart(2, '0');
            //const formattedDate = `${formatDate(expiryDate.getDate())}.${formatDate(expiryDate.getMonth() + 1)}.${expiryDate.getFullYear()}`;
            // Function to format date parts to 2 digits
            const formatDate = date => date.toString().padStart(2, '0');

           
            const [dayStr, monthStr, yearStr] = expiryDate.split('.');
            const day = parseInt(dayStr, 10);
            const month = parseInt(monthStr, 10) - 1;  
            const year = parseInt(yearStr, 10); 
            const expiryDateObj = new Date(year, month, day); 
          
            const formattedDate = `${formatDate(expiryDateObj.getDate())}.${formatDate(expiryDateObj.getMonth() + 1)}.${expiryDateObj.getFullYear()}`;

            // Log the formatted message to the console
            console.log(`VALID TILL MID NIGHT OF ${formattedDate} 00:00`);

            document.getElementById('validityMessage').innerHTML = `<b>VALID  TILL MID NIGHT OF ${formattedDate} 00:00</b>`;
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);

            const [day1, month1, year1] = expiryDate.split('.').map(num => parseInt(num, 10));
            const expiryDateObj1 = new Date(year1, month1 - 1, day1);

            const timeDiff = expiryDateObj1.getTime() - currentDate.getTime();
            //if (timeDiff < 0) {
            //    toastr.warning("Your certificate is expired. Please renew it.");
            //} else {
            //    toastr.success("Your certificate is still valid.");
            //}
            //if (expiryDateObj1 <= currentDate) {
            if (timeDiff < 0) {
                
                $('#renewalButton').show();
                $('#mySelectId').show();
                $('#mylabelId').show();
                $('#btnSendEmail1').prop('disabled', true);
                $('#btnSendEmailAgent').prop('disabled', true);
                $('#btnSendEmailAgentE').prop('disabled', true);
                $('#numericInput').prop('disabled', true);
               // $('#emailFilter').prop('disabled', true);//emailFilter
                $('#emailFilter1').prop('disabled', false);
                $('#emailFilter2').prop('disabled', false);
                toastr.warning("Your certificate is expired. Please renew it.");
            } else {
                //$('#renewalButton').hide();
                //$('#mySelectId').hide();
                //$('#mylabelId').hide();
                // self.showlog(); 
               
            }
            self.formattedDate = formattedDate;  
            //self.showlog(formattedDate);         

           
        }
        //new 
        function updateValidityDate1() { 
            // const clearanceDateStr = document.getElementById('COCclerancecertificateDate').textContent.trim();
            const clearanceDateStr = moment().format('DD.MM.YYYY');
           
            let dayStr, monthStr, yearStr; 
            if (clearanceDateStr.includes('/')) {
                [dayStr, monthStr, yearStr] = clearanceDateStr.split('/');
            } else if (clearanceDateStr.includes('.')) {
                [dayStr, monthStr, yearStr] = clearanceDateStr.split('.');
            } else {
                console.error('Invalid date format:', clearanceDateStr);
                return;
            } 
            const day = parseInt(dayStr, 10);
            const month = parseInt(monthStr, 10) - 1;
            const year = parseInt(yearStr, 10);
            const clearanceDate = new Date(year, month, day); 
            if (isNaN(clearanceDate.getTime())) {
                console.error('Invalid date:', clearanceDateStr);
                return;
            } 
            const daysToAdd = ko.unwrap(self.selectedNumber); 
            const expiryDate = new Date(clearanceDate);
            expiryDate.setDate(clearanceDate.getDate() + daysToAdd); 
            const formatDate = date => date.toString().padStart(2, '0');
            const formattedDate = `${formatDate(expiryDate.getDate())}.${formatDate(expiryDate.getMonth() + 1)}.${expiryDate.getFullYear()}`;
            document.getElementById('validityMessage').innerHTML = `<b>VALID  TILL MID NIGHT OF ${formattedDate} 00:00</b>`;
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
            if (expiryDate <= currentDate) {
                $('#renewalButton').show();
                $('#mySelectId').show();
                $('#mylabelId').show();
                $('#btnSendEmail1').prop('disabled', true);
                $('#btnSendEmailAgent').prop('disabled', true);
                $('#btnSendEmailAgentE').prop('disabled', true);
                $('#numericInput').prop('disabled', true);
                // $('#emailFilter').prop('disabled', true);//emailFilter
                $('#emailFilter1').prop('disabled', false);
                $('#emailFilter2').prop('disabled', false);
                toastr.warning("Your certificate is expired. Please renew it.");
            } else {
                $('#renewalButton').hide();
                $('#mySelectId').hide();
                $('#mylabelId').hide();
             
            }
            self.formattedDate = formattedDate;  
           // self.showlog11(formattedDate);         
            return formattedDate;
           
        }

        self.numbers = ko.observableArray([
       { id: 1, text: '1' },
       { id: 2, text: '2' },
       { id: 3, text: '3' },
       { id: 4, text: '4' },
       { id: 5, text: '5' },
       { id: 6, text: '6' },
       { id: 7, text: '7' },
       { id: 8, text: '8' },
       { id: 9, text: '9' }
        ]);
        //Bhavani
        self.ernvalcerpdfView = function () {
            
             //
            // Check if refNo is available
            //if (!self.CertificateId) {
            //    toastr.warning("Reference number is not available.");
            //    return;
            //}

            //var currentDate = moment().format('DD.MM.YYYY');
            //$('#COCclerancecertificateDate').text(currentDate);
            var storedDate = $('#COCclerancecertificateDate').text();
            var vcnrefvales =self.GetVCNRef

            //karun Babu
            const todaydate = new Date();
            const formattedDate = todaydate.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
            $('#COCclerancecertificateDate').text(formattedDate); 

            const result =updateValidityDate1();
            $('#renewalButton').show();
            $('#btnSendEmail1').prop('disabled', false);
            $('#btnSendEmailAgent').prop('disabled', false);
            $('#btnSendEmailAgentE').prop('disabled', false);
            $('#numericInput').prop('disabled', false);
            // $('#emailFilter').prop('disabled', false);//emailFilter
            $('#emailFilter1').prop('disabled', false);
            $('#emailFilter2').prop('disabled', false);
            $('#mySelectId').show();
            $('#mylabelId').show();
            //self.viewModelHelper.apiPost(
            //    '/api/UpdateRenualDate',
            //    JSON.stringify(self.CertificateId),  
            //    function (response) {
            //        if (response === 'Date Renewal Successfully') {
            //            toastr.options.closeButton = true;
            //            toastr.options.positionClass = "toast-top-right";
            //            toastr.success("Date Renual successfully.");
            //            if (result) {
            //                self.showlog11(result);
            //            }
                         
            //        } else {
            //            toastr.options.closeButton = true;
            //            toastr.options.positionClass = "toast-top-right";
            //            toastr.warning("Error sending date. Please contact the administrator.");
            //        }
            //    }
            //);
            const certId = encodeURIComponent(self.CertificateId);
            const vcnRef = encodeURIComponent(self.GetVCNRef);

            self.viewModelHelper.apiPost(
                `/api/UpdateRenualDate?CertificateId=${certId}&vcnRefValue=${vcnRef}&updateddate=${result}`,
                null, // no body needed
                function (response) {
                    if (response === 'Date Renewal Successfully') {
                        toastr.options.closeButton = true;
                        toastr.options.positionClass = "toast-top-right";
                        toastr.success("Date Renual successfully.");
                        if (result) {
                            self.showlog11(result);                           
                          
                            //setTimeout(function () {
                            //    window.location.href = window.location.href;
                            //}, 3000);

                        }
                    } else {
                        toastr.options.closeButton = true;
                        toastr.options.positionClass = "toast-top-right";
                        toastr.warning("Error sending date. Please contact the administrator.");
                    }
                }
            );

            self.selectedNumber(3);
        };



        //LoadInitialData fetches the data from Api service
        self.LoadInitialData = function () {
            
            self.GetUserType();
            self.arrivalNotificationReferenceDraftData(new IPMSRoot.ArrivalNotificationReferenceDraftData(""));
            self.viewModelHelper.apiGet('api/ArrivanNotificationReferenceData', null,
                    function (result1) {
                        self.arrivalNotificationReferenceData(new IPMSRoot.ArrivalNotificationReferenceData(result1));

                        self.arrivalNotificationReferenceBirthData(new IPMSRoot.ArrivalNotificationReferenceBirthData(result1));
                        self.arrivalNotificationReferenceDraftData(new IPMSRoot.ArrivalNotificationReferenceDraftData(result1));
                        self.RefUserTypeFlag(result1.RefUserType);
                        self.arrivalNotificationModelSearchGrid(new IPMSRoot.ArrivalNotificationModelSearchGrid(undefined));
                    }, null, null, false);
            self.ClassificationsforBargedata();
        }

        self.chargebleAgentSelect = function (e) {
            //var selecteddataItem = this.dataItem(e.item.index());
            //self.chargebleSelectedAgent('');
            //self.chargebleSelectedAgent(selecteddataItem.UserTypeID);

            //self.viewModelHelper.apiGet('api/LoadDrafts', null,
            //      function (result1) {
            //          self.arrivalNotificationReferenceDraftData(new IPMSRoot.ArrivalNotificationReferenceDraftData(result1));
            //      }, null, null, true);
        }
        self.chargebleChangeAgent = function () {
            //if (self.chargebleSelectedAgent() == null) {
            //    self.chargebleSelectedAgent("");
            //    self.supplementaryServiceRequestModel().ChargeableParty("");
            //}


        }

        self.ClassificationsforBargedata = function () {

            self.viewModelHelper.apiGet('api/GetSubCategoryBySupCatCode/BRGC', null, function (result) {
                ko.mapping.fromJS(result, {}, self.ClassificationsforBarge);
            });
        }

        self.LastPortOfCallSelects = function (e) {
            $("select#LastPortOfCall").prop('selectedIndex', 0);
            var selecteddataItem = this.dataItem(e.item.index());

            self.arrivalNotificationModel().LastPortOfCall(selecteddataItem.PortCode);
            $("#spanLastPortOfCall").hide();
        }
        ChangeLastPortOfCall = function () {

            var por = $("#LastPortOfCall").val();
            var result = self.arrivalNotificationReferenceData().PortDetails().filter(function (item) {
                return (item.PortName() == por);
            });

            if ($("#LastPortOfCall").val() == "") {
                if (self.ValidateVessel() == true) {
                    $("#spanLastPortOfCall").text('* This field is required.');
                }
            }
            else {
                if (result.length == 0) {
                    if (self.ValidateVessel() == true) {
                        $("#spanLastPortOfCall").text('* This field is required.');
                        $("#LastPortOfCall").val('');
                        $("#LastPortOfCall").text('');
                    }
                } else {
                    $("#spanmaspanPortOfRegistryintenance").text('');
                }

            }

        }
        isLastPortOfCall = function () {
            if ($('#LastPortOfCall').val() == "" && $("#IsGovtVessel2").is(":checked")) {
                if (self.ValidateVessel() == true) {
                    $("#spanLastPortOfCall").text('* This field is required.');
                    $('#spanLastPortOfCall').css('display', 'block');
                }
            }
            else {
                $("#spanLastPortOfCall").text('');
            }

        }


        self.NextPortOfCallPOPSelects = function (e) {
            $("select#NextPortOfCallPOP").prop('selectedIndex', 0);
            var selecteddataItem = this.dataItem(e.item.index());

            self.arrivalNotificationModel().NextPortOfCallPOP(selecteddataItem.PortCode);
            $("#spanPortOfRegistry").hide();
        }
        ChangeNextPortOfCallPOP = function () {

            var por = $("#NextPortOfCallPOP").val();
            var result = self.arrivalNotificationReferenceData().PortDetails().filter(function (item) {
                return (item.PortName() == por);
            });

            if ($("#NextPortOfCallPOP").val() == "") {
                if (self.ValidateVessel() == true) {

                }
            }
            else {
                if (result.length == 0) {
                    if (self.ValidateVessel() == true) {
                        $("#NextPortOfCallPOP").val('');
                        $("#NextPortOfCallPOP").text('');
                    }
                } else {
                }

            }

        }
        isNextPortOfCallPOP = function () {
            if ($('#NextPortOfCallPOP').val() == "" && $("#IsGovtVessel2").is(":checked")) {
                if (self.ValidateVessel() == true) {

                }
            }
            else {
            }

        }
        self.ResonForvisitdropdownSelects = function (e) {
            $("select#ResonForvisitdropdown").prop('selectedIndex', 0);
            var selecteddataItem = this.dataItem(e.item.index());
            self.arrivalNotificationModel().LoaddischargePort(selecteddataItem.PortCode);
        }
        self.NextPortOfCallSelects = function (e) {
            $("select#NextPortOfCall").prop('selectedIndex', 0);
            var selecteddataItem = this.dataItem(e.item.index());
            self.arrivalNotificationModel().NextPortOfCall(selecteddataItem.PortCode);
            $("#spanPortOfRegistry").hide();
        }
        ChangeNextPortOfCall = function () {

            var por = $("#NextPortOfCall").val();
            var result = self.arrivalNotificationReferenceData().PortDetails().filter(function (item) {
                return (item.PortName() == por);
            });

            if ($("#NextPortOfCall").val() == "") {
                if (self.ValidateVessel() == true) {
                    $("#spanPortOfRegistry").text('* This field is required.');
                }
            }
            else {
                if (result.length == 0) {
                    if (self.ValidateVessel() == true) {
                        $("#spanPortOfRegistry").text('* This field is required.');
                        $("#PortOfRegistry").val('');
                        $("#PortOfRegistry").text('');
                    }
                } else {
                    $("#spanmaspanPortOfRegistryintenance").text('');
                }

            }

        }
        isNextPortOfCall = function () {
            if ($('#NextPortOfCall').val() == "" && $("#IsGovtVessel2").is(":checked")) {
                if (self.ValidateVessel() == true) {
                    $("#spanPortOfRegistry").text('* This field is required.');
                    $('#spanPortOfRegistry').css('display', 'block');
                }
            }
            else {
                $("#spanPortOfRegistry").text('');
            }

        }

        /////ExpiryDate Open
        ExpiryDateValidation = function () {

            var expiryDatemin = kendo.parseDate($('#ETA').val(), 'dd-MM-yyyy')
            this.min(expiryDatemin);

        }


        //////// vesseldetails Fetching.
        self.GetUserType = function () {

            var uname = $("#loginusername").text();

            self.viewModelHelper.apiGet('api/Account/GetUserType/' + uname, null,

                  function (result) {
                      if (result.UserType === "EMP") { if (viewDetail == true) { self.isEmployee(false); self.isEmployee1(true); } else { self.isEmployee(true); self.isEmployee1(true); } } else { self.isEmployee(false); self.isEmployee1(false); }
                  }, null, null, true);
        }

        self.GetVesselDetails = function () {

            //if ($("#collapseFive").css('display') == 'block') {
            //    $("#collapseFive").css('display', 'none');
            //}
            //else {
            //    $("#collapseFive").css('display', 'block');
            //}
            var vesselId = self.arrivalNotificationModel().VesselID()
            if (vesselId == null || vesselId == "") {

                var vesselId = self.arrivalNotificationList()[0].VesselID();
            }
            self.viewModelHelper.apiGet('api/ArrivalNotificationss/' + vesselId,
                  {}, function (result) {

                      self.vesseldetailsmodel(new IPMSRoot.VesseldetailsModel(result));
                      self.arrivalNotificationModel().GearOptions(result.GearOptions);
                      self.arrivalNotificationModel().VesselType(result.VesselType);
                      if (self.arrivalNotificationModel().VesselType() != "V155") {

                          var select = document.getElementById('statSelUploadDocs');
                          $("#statSelUploadDocs option[value='ST13']").remove();

                      }
                      if (self.arrivalNotificationModel().GearOptions() == "Geared") {
                          var vesselGearsLength = result.VesselGears[0];
                          var vesselGrabLength = result.VesselGrabs[0];

                          if (vesselGearsLength.GearOptions == "Geared") {
                              $('input:radio[name="Geared"][value="Geared"]').attr('checked', true);
                              if (vesselGearsLength.NoOfCranes != null || vesselGearsLength.CraneCapacityonHook != null || vesselGearsLength.CraneCapacityonGrab != null || vesselGearsLength.CraneOutreachFromShip != null) {
                                  $('#CraneCapacityonhookmode').text(vesselGearsLength.CraneCapacityonHook);
                                  $('#SummerDeadWeightInMT').text(vesselGearsLength.CraneOutreachFromShip);
                                  $('#CraneCapacityonGrab').text(vesselGearsLength.CraneCapacityonGrab);
                                  $('#CranecapacityonGrabmode').text(vesselGrabLength.GrabCapacityCBM);
                                  $('#GrabCapacityvalue').text(vesselGrabLength.GrabCapacity);
                                  $('#CraneOutreachFromShip').text(vesselGearsLength.CraneOutreachFromShip);
                                  $('#txtCMBValue').text(vesselGearsLength.CBMValue);
                                  $('#txtNoofCranes').text(vesselGearsLength.NoOfCranes);
                                  $('#txtNoofgrabs').text(vesselGrabLength.NoOfGrabs);
                                  $("#GearedYes").prop('checked', true);
                                  $("#GearCrane").prop('checked', true);
                                  $("#GearedVisible").show();
                                  $("#GearDerrickVisible").hide();
                              }
                              else {
                                  $('#NoOfDerricks').text(vesselGearsLength.NoOfDerricks);
                                  $('#DerrickCapacity').text(vesselGearsLength.DerrickCapacity);
                                  $('#DerrickOutReachFromShip').text(vesselGearsLength.DerrickOutReachFromShip);
                                  $("#GearDerrickVisible").show();
                                  $("#GearedVisible").hide();
                                  $("#GearedYes").prop('checked', true);
                                  $("#GearDerrick").prop('checked', true);
                              }
                          }
                          else if (vesselGearsLength.GearOptions == "Gearless") {
                              $("#GearsTab").hide();
                              $('input:radio[name="Geared"][value="Gearless"]').attr('checked', true);
                              $("#GearedNo").prop('checked', true);
                              $("#myCheck").checked = true
                              var select = document.getElementById('statSelUploadDocs');
                              $("#statSelUploadDocs option[value='ST16']").remove();
                          }
                      }
                      else {
                          $("#GearsTab").hide();
                          $('input:radio[name="Geared"][value="Gearless"]').attr('checked', true);
                          $("#GearedNo").prop('checked', true);
                          var select = document.getElementById('statSelUploadDocs');
                          $("#statSelUploadDocs option[value='ST16']").remove();
                      }
                  }, null, null, false);
        }

        validateExpiryDate = function (data, event) {


            if ($("#statSelUploadDocs option:selected").text() != 'Choose....') {
                $('#expDate').data('kendoDatePicker').enable(true);
                $('#expDate').data('kendoDatePicker').value("");
                self.arrivalNotificationModel().ExpiryDate('');


            }
            else {

                $('#expDate').data('kendoDatePicker').enable(false);
                $('#expDate').data('kendoDatePicker').value("");
                self.arrivalNotificationModel().ExpiryDate('');
            }

        }
        self.vesselparamtab = function (model) {
            $("#SummerDraftFWDInM").kendoMaskedTextBox({ mask: "00.00" });
            $("#SummerDraftAFTInM").kendoMaskedTextBox({ mask: "00.00" });
            $("#BowToManifoldDistanceInM").kendoMaskedTextBox({ mask: "000.00" });
            var ref_this = $("ul#mainmenu li.active");
            var tabs = "li_tab1"
            switch (tabs) {
                case "li_tab1":
                    $('#li_tab0').removeClass('active');
                    $('#tab_0').removeClass('tab-pane active').addClass('tab-pane');

                    $('#li_tab1').addClass('active');
                    $('#tab_1').addClass('tab-pane active').attr('href', "#tab_1")

                    $('#li_tab2').removeClass('active');
                    $('#tab_2').removeClass('tab-pane active').addClass('tab-pane');

                    $('#li_tab3').removeClass('active');
                    $('#tab_3').removeClass('tab-pane active').addClass('tab-pane');
            }
        }

        self.vesselcerttab = function (model) {
            $('#li_tab2').addClass('active');
            $('#tab_2').addClass('tab-pane active');

            $('#li_tab0').removeClass('active');
            $('#tab_0').removeClass('tab-pane active').addClass('tab-pane');

            $('#li_tab1').removeClass('active');
            $('#tab_1').removeClass('tab-pane active').addClass('tab-pane');

            $('#li_tab3').removeClass('active');
            $('#tab_3').removeClass('tab-pane active').addClass('tab-pane');
        }


        self.vesselothertab = function (model) {
            $("#txtBowToForwardHatchDistanceM").kendoMaskedTextBox({ mask: "000.00" });
            $("#txtBowToBridgeFrontDistanceM").kendoMaskedTextBox({ mask: "000.00" });
            $("[name='CraneOutreachFromShip']").kendoMaskedTextBox({ mask: "000.00" });
            $('#li_tab3').addClass('active');
            $('#tab_3').addClass('tab-pane active');

            $('#li_tab0').removeClass('active');
            $('#tab_0').removeClass('tab-pane active').addClass('tab-pane');

            $('#li_tab1').removeClass('active');
            $('#tab_1').removeClass('tab-pane active').addClass('tab-pane');

            $('#li_tab2').removeClass('active');
            $('#tab_2').removeClass('tab-pane active').addClass('tab-pane');

        }

        //LoadArrivalNotifications fetches the data from API Service FROM BBBB
        self.LoadArrivalNotifications = function () {
            
            if (viewDetail == true) {

                self.viewModelHelper.apiGet('api/ArrivalNotificationss/' + vcn + '/' + WorkflowInstanceId,
                 {},
                  function (result) {
                      self.arrivalNotificationList(ko.utils.arrayMap(result, function (item) {
                          return new IPMSRoot.ArrivalNotificationModel(item, self.arrivalNotificationReferenceData());
                      }));

                      if (self.VUPD() == false) {
                          if ((result[0].UserType == "AGNT" && result[0].WFCode == "VRES") || (result[0].UserType == "AGNT" && result[0].WFCode == "ARES")) {
                              if (ActionDetails == 'view') {
                                  self.viewArrivalNotification(self.arrivalNotificationList()[0]);
                              }
                              else {
                                  self.editArrivalNotification(self.arrivalNotificationList()[0]);
                              }
                          }
                          else { self.viewArrivalNotification(self.arrivalNotificationList()[0]); }
                      }
                      else {
                          self.CancelArrivalNotification(self.arrivalNotificationList()[0]);
                      }
                  });
            }

            else {
                var frmdt = self.arrivalNotificationModelSearchGrid().ETAFrom();
                var todt = self.arrivalNotificationModelSearchGrid().ETATo();

                var Frmobj = kendo.parseDate(frmdt, self.dateFormat.IPMSDateFormat());
                var frmdt = kendo.toString(Frmobj, "yyyy-MM-dd");

                var Toobj = kendo.parseDate(todt, self.dateFormat.IPMSDateFormat());
                var todt = kendo.toString(Toobj, "yyyy-MM-dd");

                var vcnSearch = self.arrivalNotificationModelSearchGrid().VCN();
                var veselid = self.arrivalNotificationModelSearchGrid().VesselID();
                var imdg = self.arrivalNotificationModelSearchGrid().IsserchIMDG();
                var isps = self.arrivalNotificationModelSearchGrid().IsserchISPS();

                var imdgClear = self.arrivalNotificationModelSearchGrid().IsserchIMDGClear();
                var ispsClear = self.arrivalNotificationModelSearchGrid().IsserchISPSClear();
                var phoClear = self.arrivalNotificationModelSearchGrid().IsserchPHOClear();

                if (vcnSearch == '') {
                    vcnSearch = 'NA';
                }
                if (veselid == '') {
                    veselid = 0;
                }

                self.viewModelHelper.apiGet('api/ArrivalNotificationssearchgrd/' + frmdt + '/' + todt + '/' + vcnSearch + '/' + veselid + '/' + imdg + '/' + isps + '/' + imdgClear + '/' + ispsClear + '/' + phoClear,
              {},
             function (result) {
                 self.ValidTillProformaDateList=result;
                 self.arrivalNotificationListGrid(ko.utils.arrayMap(result, function (item) {
                     return new IPMSRoot.ArrivalNotificationModelGrid(item);
                 }));
             });
            }
        }

        self.GetCertificateofClearance = function () {

        }

        self.ClearFilter = function () {

            var todaydate = new Date();
            var todate = new Date(todaydate);
            var fromdate = new Date(todaydate);
            todate.setDate(todaydate.getDate() + 15);
            fromdate.setDate(fromdate.getDate() - 15);

            self.arrivalNotificationModelSearchGrid().VCN('');
            self.arrivalNotificationModelSearchGrid().VCNSERCH('');
            self.arrivalNotificationModelSearchGrid().VesselID('');
            self.arrivalNotificationModelSearchGrid().VesselName('');
            self.arrivalNotificationModelSearchGrid().IsserchIMDG('All');
            self.arrivalNotificationModelSearchGrid().IsserchISPS('All');

            self.arrivalNotificationModelSearchGrid().IsserchIMDGClear(false);
            self.arrivalNotificationModelSearchGrid().IsserchISPSClear(false);
            self.arrivalNotificationModelSearchGrid().IsserchPHOClear(false);
            self.arrivalNotificationModelSearchGrid().ETAFrom(moment(fromdate).format(self.dateFormat.IPMSDateFormatForModel()));
            self.arrivalNotificationModelSearchGrid().ETATo(moment(todate).format(self.dateFormat.IPMSDateFormatForModel()));
            $("#spanVCNSearchValid").text('');
            $("#spanVesselSearchValid").text('');
            self.isspanVCNSearchValid(false);
            self.isspanVesselSearchValid(false);
            self.LoadArrivalNotifications();
        }

        self.GetDataClick = function (model) {
            
            var serchalrt = true;
            if (model.VCNSERCH() != model.VCN()) {
                serchalrt = false;
                $("#spanVCNSearchValid").text('Please select valid Reference No.');
                self.isspanVCNSearchValid(true);
            }
            else {
                $("#spanVCNSearchValid").text('');
                self.isspanVCNSearchValid(false);
            }

            if (model.VesselID() == "" && model.VesselName() != "") {
                serchalrt = false;
                $("#spanVesselSearchValid").text('Please select valid Vessel Name/IMO No.');
                self.isspanVesselSearchValid(true);
            }
            else {
                $("#spanVesselSearchValid").text('');
                self.isspanVesselSearchValid(false);
            }

            if (serchalrt) {
                $("#spanVCNSearchValid").text('');
                $("#spanVesselSearchValid").text('');
                self.isspanVCNSearchValid(false);
                self.isspanVesselSearchValid(false);
                self.LoadArrivalNotifications();
            }
        }

        self.LoadArrivalNotificationsSearch = function (data) {
            var ETAFrom = $("#SearchETAFrom").val();
            var ETATo = $("#SearchETATo").val();
            var todaydate = new Date();
            var todate = new Date(todaydate);
            var fromdate = new Date(todaydate);
            todate.setDate(todaydate.getDate() + 15);
            fromdate.setDate(fromdate.getDate() - 15);

            self.arrivalNotificationModel().ETAFrom(fromdate ? (moment(fromdate).format(self.dateFormat.IPMSDateFormat()) || "") : "");
            var CurrentDate = new Date();

            if (ETAFrom == "" || ETAFrom == undefined) {
                ETAFrom = self.arrivalNotificationModel().ETAFrom();
            }

            self.arrivalNotificationModel().ETATo(todate ? (moment(todate).format(self.dateFormat.IPMSDateFormat()) || "") : "");
            if (ETATo == "" || ETATo == undefined) {
                ETATo = self.arrivalNotificationModel().ETATo();
            }

            self.viewModelHelper.apiGet('api/VoyageRegistrations/' + ETAFrom + '/' + ETATo, {},
                        function (result) {
                            self.arrivalNotificationList(ko.utils.arrayMap(result, function (item) {
                                return new IPMSRoot.ArrivalNotificationModel(item, self.arrivalNotificationReferenceData());
                            }));
                        });
        }

        SearchETAtoCal = function () {
            this.min($("#SearchETAFrom").val());

        }

        SearchValidDate = function (data, event) {
            self.arrivalNotificationModelSearchGrid().ETATo(self.arrivalNotificationModelSearchGrid().ETAFrom());
        }

        SerchVesselKeyPress = function (e) {
            self.arrivalNotificationModelSearchGrid().VesselID('');
        }

        SerchVesselBackSpace = function (e) {
            self.arrivalNotificationModelSearchGrid().VesselID('');
        }

        self.VesselSelectSearch = function (e) {
            var selecteddataItem = this.dataItem(e.item.index());
            self.arrivalNotificationModelSearchGrid().VesselID(selecteddataItem.VesselID);
            self.arrivalNotificationModelSearchGrid().VesselName(selecteddataItem.VesselName);
        }

        SerchVCNBackSpace = function (e) {
            self.arrivalNotificationModelSearchGrid().VCNSERCH('');
        }

        SerchVCNBackSpaceNumValid = function (evt) {

            self.arrivalNotificationModelSearchGrid().VCNSERCH('');

            var iKeyCode = (evt.which) ? evt.which : evt.keyCode
            if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
                return false;
            return true;
        }


        self.VCNSelectSearch = function (e) {
            var selecteddataItem = this.dataItem(e.item.index());
            self.arrivalNotificationModelSearchGrid().VCNSERCH(selecteddataItem.vcn);
        }

        VesselImoChange = function (e) {
            if (e.keyCode === 9 || e.keyCode === 13) {
                return false;
            }
            self.LayByVisble(false);
            self.BunkersVisible(false);
            self.arrivalNotificationModel().bunkersVisible(false);
            self.arrivalNotificationModel().layByVisble(false);
            self.isOtherRsonVisible(false);
            $("#txtVessels").val('aa');
            $("#ExemptionSpn").hide();
            $("#IsTOStrSpn").hide();
            $("#txtVessels").val('');
            self.isSaveDraftVisible(true);
            self.arrivalNotificationModel().ArrivalIMDGTankers.removeAll();
            self.arrivalNotificationModel().IMDGInformations.removeAll();
            self.arrivalNotificationModel().ArrivalCommodities.removeAll();
            self.arrivalNotificationModel().ArrivalDocuments.removeAll();
            self.arrivalNotificationModel().ISPSReferenceNo("");
            self.arrivalNotificationModel().AppliedDate("");
            self.WithTailRoping(false);
            self.CheckTailRope(false);
            self.arrivalNotificationModel().VesselData('');
            self.arrivalNotificationModel().NominationDate("");
            self.vesseldetailsmodel(new IPMSROOT.VesseldetailsModel(undefined));
            self.vesseldetailsvisable(false);
            self.arrivalNotificationModel().ArrivaReasonArray([]);
            self.arrivalNotificationModel().ShipperReceiverArray([]);
            self.arrivalNotificationModel().Arrforwarddraft("");
            self.arrivalNotificationModel().Arrafterdraft("");
            self.arrivalNotificationModel().Deptforwarddraft("");
            self.arrivalNotificationModel().Deptafterdraft("");
            self.arrivalNotificationModel().ForeignCostalRun("");
            self.arrivalNotificationModel().CargoTYPE("");


            self.arrivalNotificationModel().LastPortOfCall(undefined);
            self.arrivalNotificationModel().NextPortOfCall(undefined);
            self.arrivalNotificationModel().CrewNo("");
            self.arrivalNotificationModel().ETA("");
            self.arrivalNotificationModel().ETD("");
            self.arrivalNotificationModel().ArrivalDraftMean("");
            self.arrivalNotificationModel().DepartureDraftMean("");
            self.arrivalNotificationModel().PresentAirDraft("");
            self.arrivalNotificationModel().ArrivalFreeBoard("");
            self.arrivalNotificationModel().KelltoMastHeight("");
            self.arrivalNotificationModel().MasterName("");
            self.arrivalNotificationModel().ReasonForLayup("");
            self.arrivalNotificationModel().NumberofTugs("");
            self.arrivalNotificationModel().PakistaniCrewNO("");
            self.arrivalNotificationModel().VoyageDisplacement("");
            self.arrivalNotificationModel().SpecifyReason("");
            self.arrivalNotificationModel().LoaddischargePort(undefined);
            self.arrivalNotificationModel().AppliedDate("");
            self.arrivalNotificationModel().ISPSReferenceNo("");
            self.arrivalNotificationModel().tideldetails("");
            self.arrivalNotificationModel().DaylightSpecifyReason("");
            self.arrivalNotificationModel().NvgtEqpmntOprtnl("");
            self.arrivalNotificationModel().PtStboardAnchorOprtnl("");
            self.arrivalNotificationModel().PIClub("");
            self.arrivalNotificationModel().ShrMringlines("");
            self.arrivalNotificationModel().ExceedSpecifyReason("");
            self.arrivalNotificationModel().fwrdaftWinchOprtnl("");
            self.arrivalNotificationModel().PrlrsFullySbmrgdWater("");
            self.arrivalNotificationModel().safeBerthing("");
            self.arrivalNotificationModel().AnyAdditionalInfo("");
            self.arrivalNotificationModel().CargoDescription("");
            self.arrivalNotificationModel().CellNo('');
            self.arrivalNotificationModel().AdditionalTugReq("N");
            self.arrivalNotificationModel().IsPakistaniCrew("N");
            self.arrivalNotificationModel().DaylightRestriction("I");
            self.arrivalNotificationModel().ExceedPortLimitations("N");
            self.arrivalNotificationModel().AppliedForISPS("I");
            self.arrivalNotificationModel().Tidal("I");
            self.arrivalNotificationModel().IsNvgtEqpmntOprtnl("Y");
            self.arrivalNotificationModel().IsPtStboardAnchorOprtnl("Y");
            self.arrivalNotificationModel().IsPIClub("Y");
            self.arrivalNotificationModel().IsShrMringlines("Y");
            self.arrivalNotificationModel().IssafeBerthing("Y");
            self.arrivalNotificationModel().IsPrlrsFullySbmrgdWater("N");
            self.arrivalNotificationModel().IsfwrdaftWinchOprtnl("Y");
            $("#IspsClearenceSpn").hide();
            $("#ISPSReferenceNo").prop('disabled', true);
            $("#AppliedDate").data('kendoDatePicker').enable(false);
            // $("#RefNoSpn").hide();
            $("#spanAppliedDate").val('');
            self.isspanAppliedDate(false);
            self.IsDangerousGoods(false);
            $("#rdNoDangerousGoods").attr('checked', 'checked');
            $("#AdditionalTugReqNo").attr('checked', 'checked');
            self.AdditionalTugRequired(false);
            $("#PakistaniCrewNo").attr('checked', 'checked');
            self.pakistaniCrewOnboard(false);
            $("#YellowFeverNo").attr('checked', 'checked');
            $("#AppliedForISPSNo").attr('checked', 'checked');
            self.isISPSDTLEnable(false);
            $("#TidalNo").attr('checked', 'checked');
            self.tidildetailschanged(false);
            $("#DaylightRestrictionNo").attr('checked', 'checked');
            $("#IsNvgtEqpmntOprtnlYes").attr('checked', 'checked');
            self.AllNavigationalEquipmentOperational(false);
            $("#IsPtStboardAnchorOprtnlYes").attr('checked', 'checked');
            self.PortAndStarboardAnchorsAreOperational(false);
            $("#IsPIClubYes").attr('checked', 'checked');
            self.VesselCoveredunderPandIClub(false);
            $("#IsShrMringlinesYes").attr('checked', 'checked');
            self.ShoreMooringpatternSufficientlinesonBoard(false);
            $("#ExceedPortLimitationsNo").attr('checked', 'checked');
            $("#IsfwrdaftWinchOprtnlYes").attr('checked', 'checked');
            self.ForwardandAfterWinchOperational(false);
            $("#IsPrlrsFullySbmrgdWater").attr('checked', 'checked');
            self.ArePropellersFullySubmergedinWater(false);
            $("#IssafeBerthingYes").attr('checked', 'checked');
            self.IsvesselfitinallrespectforsafeBerthing(false);
            $("#IswireRopewhttailRopeMringNo").attr('checked', 'checked');
            self.CheckingDoyouintendtousewireRopewithouttailRopeForMooring(false);
            self.isspanAdditionalTugReq(false);
            self.isspanPakistaniCrew(false);
            $("#spanNvgtEqpmntOprtnltext").text('');
            $("#spanPtStboardAnchorOprtnltext").text('');
            $("#spanPIClubtext").text('');
            $("#spanShrMringlinestext").text('');
            $("#spanfwrdaftWinchOprtnltext").text('');
            $("#spansafeBerthingtext").text('');
            $("#spanPrlrsFullySbmrgdWatertext").text('');
            $("#spanTailRopetext").text('');
            $("#spantidildetailstext").text('');
            self.DaylightSpecifyReasonChanged(false);
            self.spanDaylightSpecifyReasontext(false);
            $("#spanDaylightSpecifyReasontext").text('');
            $('#spanNumberofTugs').text('');
            self.pakistaniCrewOnboard(false);
            self.isspanPakistaniCrew(false);
            $('#spanPakistaniCrewNOtxt').text('');
            self.Exeedportlimitenable(false);
            self.spanExceedSpecifyReasontext(false);
            $("#spanExceedSpecifyReasontext").text('');
            if (self.arrivalNotificationModel().IsGovtVessel() != 'N') {
                $('#LastPortLablid').hide();
                $('#NextPortLablid').hide();
                $('#lblForgnCstlid').hide();
                $('#lblcrewid').hide();
                $('#lblshipperid').hide();
            }
            else {
                $('#LastPortLablid').show();
                $('#NextPortLablid').show();
                $('#lblForgnCstlid').show();
                $('#lblcrewid').show();
                $('#lblshipperid').show();
            }

            self.arrivalNotificationModel().IMONo('');
            self.arrivalNotificationModel().DockingPlanID('');
            self.arrivalNotificationModel().SubmissionDate('');
            $("select#reasonforvisit").prop('selectedIndex', 0);
            self.DryDockDetailsVisible(false);
        }

        self.VesselSelect = function (e) {


            self.vesseldetailsmodel(new IPMSROOT.VesseldetailsModel(undefined));
            self.DryDockDetailsVisible(false);
            self.isspanVslValid(false);
            $("select#reasonforvisit").prop('selectedIndex', 0);
            var selecteddataItem = this.dataItem(e.item.index());

            self.arrivalNotificationModel().VesselData(selecteddataItem);
            self.arrivalNotificationModel().VesselID(selecteddataItem.VesselID);
            self.arrivalNotificationModel().IMONo(selecteddataItem.IMONo);
            self.arrivalNotificationModel().DockingPlanID(selecteddataItem.DockingPlanID);
            var todaydate = new Date();
            var todate = new Date(todaydate);
            self.arrivalNotificationModel().NominationDate(moment(todate).format(self.dateFormat.IPMSDateFormatForModel()));
            self.arrivalNotificationModel().VesselName(selecteddataItem.VesselName);

            self.arrivalNotificationModel().DockIsFinal(selecteddataItem.DockIsFinal);
            self.arrivalNotificationModel().DockStatus(selecteddataItem.DockStatus);
            self.arrivalNotificationModel().IsCosstGuard(selecteddataItem.IsCosstGuard);
            self.arrivalNotificationModel().SummerDraftFWDInM(selecteddataItem.SummerDraftFWDInM);
            self.arrivalNotificationModel().SummerDraftAFTInM(selecteddataItem.SummerDraftAFTInM);
            self.arrivalNotificationModel().IsGovtVessel(selecteddataItem.IsGovtVessel);
            self.GetVesselDetails();

            //if (self.isEmployee()) {
            //    if (self.arrivalNotificationModel().IsGovtVessel() != 'G')
            //    { self.arrivalNotificationModel().IsGovtVessel('K') }
            //}
            self.IsBargeVessel(false);
            //$('#ChartererAgent').hide();
            if (self.arrivalNotificationModel().VesselData().VesselType == "1515") {

                self.IsBargeVessel(true);                //$('#ChartererAgent').show();
            }

            if (self.arrivalNotificationModel().IsGovtVessel() == 'G' || self.arrivalNotificationModel().IsGovtVessel() == 'K') {
                if (self.arrivalNotificationModel().VesselData().VesselType == "V151") {
                    $('#Idshipperlabel').text('Liner:');
                    self.arrivalNotificationReferenceData().ShipperseceiveDetails("");
                    self.arrivalNotificationReferenceData().ShipperseceiveDetails(self.arrivalNotificationReferenceData().LinearDetails());
                    self.isVoyageNumber(true);
                }
                else {
                    $('#Idshipperlabel').text('Shipper/Receiver:');
                    self.arrivalNotificationReferenceData().ShipperseceiveDetails("");
                    self.arrivalNotificationReferenceData().ShipperseceiveDetails(self.arrivalNotificationReferenceData().ShipperReceivers());
                    self.isVoyageNumber(true);
                }
            }
            else {
                if (self.arrivalNotificationModel().VesselData().VesselType == "V151") {
                    $('#Idshipperlabel').text('Liner:');
                    $('#Idshipperlabel').html(function (_, html) {
                        return html.replace(/\*/, "<span class='required'>*</span>");
                    });
                    self.arrivalNotificationReferenceData().ShipperseceiveDetails("");
                    self.arrivalNotificationReferenceData().ShipperseceiveDetails(self.arrivalNotificationReferenceData().LinearDetails());
                    self.isVoyageNumber(true);
                    //   self.arrivalNotificationModel().ShipperReceiverArray.extend({ required: true });
                }
                else {
                    self.isVoyageNumber(true);
                    $('#Idshipperlabel').text('Shipper/Receiver:');
                    $('#Idshipperlabel').html(function (_, html) {
                        return html.replace(/\*/, "<span class='required'>*</span>");
                    });
                    self.arrivalNotificationReferenceData().ShipperseceiveDetails("");
                    self.arrivalNotificationReferenceData().ShipperseceiveDetails(self.arrivalNotificationReferenceData().ShipperReceivers());
                    //  self.arrivalNotificationModel().ShipperReceiverArray.extend({ required: true });
                }
            }



            self.arrivalNotificationModel().GearOptions(selecteddataItem.GearOptions);
            self.isreasonvisitcolumnVisible(false);
            if (self.arrivalNotificationModel().VesselID() != "")
            { self.vesseldetailsvisable(true); }

            if (self.arrivalNotificationModel().GearOptions() == "Gearless") {
                var select = document.getElementById('statSelUploadDocs');
                $("#statSelUploadDocs option[value='ST16']").remove();
            }
            var values = self.VesseltypeCheck();
            $.each(values, function (i, val) {
                if (selecteddataItem.VesselType == val.type) {
                    self.Vesseltypecomparision(true);
                }
            });

            if (self.arrivalNotificationModel().IsGovtVessel() != 'N') {
                $('#LastPortLablid').hide();
                $('#NextPortLablid').hide();
                $('#lblForgnCstlid').hide();
                $('#lblcrewid').hide();
                $('#lblshipperid').hide();
            }
            else {
                $('#LastPortLablid').show();
                $('#NextPortLablid').show();
                $('#lblForgnCstlid').show();
                $('#lblcrewid').show();
                $('#lblshipperid').show();
            }
            if (self.arrivalNotificationModel().IsGovtVessel() != 'N') {
                $("[name='IsGovernmentVessel']").css('display', 'none');
                $("[name='isreasonforvisittextspan']").css('display', 'none');
            }
            else {
                $("[name='IsGovernmentVessel']").show();
                $("[name='isreasonforvisittextspan']").show();
            }

            if (selecteddataItem.DockingPlanID != null && selecteddataItem.DockingPlanID != '' && selecteddataItem.DockIsFinal == "Y" && selecteddataItem.DockStatus == "A") {
                self.IsValidDockingPlanID(true);
            }
            else {
                self.IsValidDockingPlanID(false);
            }

            if ($("#ETA").val() == "" || $("#ETA").val() == null) {
            }
            else {

                if (self.arrivalNotificationModel().ETA() != "") {
                    var dateobj = kendo.parseDate(self.arrivalNotificationModel().ETA(), self.dateFormat.IPMSDateTimeFormat());
                    if (dateobj == null) {
                        var dateobj = kendo.parseDate(new Date(self.arrivalNotificationModel().ETA()), self.dateFormat.IPMSDateTimeFormat());
                    }
                    var datestring = kendo.toString(dateobj, "yyyy-MM-dd HH:mm");
                    self.arrivalNotificationModel().ETA(datestring);
                }

                self.viewModelHelper.apiPost('api/ArrivalDuplicateData', ko.mapping.toJSON(self.arrivalNotificationModel()), function Message(data) {
                    var ValidRule = data.split('@');

                    if (ValidRule[0] == 1) {
                        self.arrivalNotificationModel().VesselName('');
                        self.arrivalNotificationModel().VesselData('');
                        self.arrivalNotificationModel().VesselID('');
                        if (self.arrivalNotificationModel().IsGovtVessel() != 'N') {
                            $('#LastPortLablid').hide();
                            $('#NextPortLablid').hide();
                            $('#lblForgnCstlid').hide();
                            $('#lblcrewid').hide();
                            $('#lblshipperid').hide();
                        }
                        else {
                            $('#LastPortLablid').show();
                            $('#NextPortLablid').show();
                            $('#lblForgnCstlid').show();
                            $('#lblcrewid').show();
                            $('#lblshipperid').show();
                        }

                        self.arrivalNotificationModel().IMONo('');
                        self.arrivalNotificationModel().DockingPlanID('');
                        self.arrivalNotificationModel().SubmissionDate('');
                        self.DryDockDetailsVisible(false);
                        toastr.warning("Vessel is on the Berth with" + ValidRule[1]);
                    }
                    else if (ValidRule[0] == 2) {
                        self.arrivalNotificationModel().VesselName('');
                        self.arrivalNotificationModel().VesselData('');
                        self.arrivalNotificationModel().VesselID('');

                        if (self.arrivalNotificationModel().IsGovtVessel() != 'N') {
                            $('#LastPortLablid').hide();
                            $('#NextPortLablid').hide();
                            $('#lblForgnCstlid').hide();
                            $('#lblcrewid').hide();
                            $('#lblshipperid').hide();
                        }
                        else {
                            $('#LastPortLablid').show();
                            $('#NextPortLablid').show();
                            $('#lblForgnCstlid').show();
                            $('#lblcrewid').show();
                            $('#lblshipperid').show();
                        }
                        self.arrivalNotificationModel().IMONo('');
                        self.arrivalNotificationModel().DockingPlanID('');
                        self.arrivalNotificationModel().SubmissionDate('');
                        self.DryDockDetailsVisible(false);
                        toastr.warning("Voyage Registration is already raised on " + ValidRule[1]);
                    }
                    else if (ValidRule[0] == 4) {
                        self.arrivalNotificationModel().VesselName('');
                        self.arrivalNotificationModel().VesselData('');
                        self.arrivalNotificationModel().VesselID('');
                        if (self.arrivalNotificationModel().IsGovtVessel() != 'N') {
                            $('#LastPortLablid').hide();
                            $('#NextPortLablid').hide();
                            $('#lblForgnCstlid').hide();
                            $('#lblcrewid').hide();
                            $('#lblshipperid').hide();
                        }
                        else {
                            $('#LastPortLablid').show();
                            $('#NextPortLablid').show();
                            $('#lblForgnCstlid').show();
                            $('#lblcrewid').show();
                            $('#lblshipperid').show();
                        }
                        self.arrivalNotificationModel().IMONo('');
                        self.arrivalNotificationModel().DockingPlanID('');
                        self.arrivalNotificationModel().SubmissionDate('');
                        self.DryDockDetailsVisible(false);
                        toastr.warning("Voyage Registration is already raised on " + ValidRule[1]);
                    }
                });
            }
        }

        self.ChangeCargoTypes = function (e, data) {

            var ReasonforVisitKendo = $("#reasonforvisit").data('kendoMultiSelect');
            var values = ReasonforVisitKendo.value().slice();
            var mySet = new Set(values);
            if (mySet.has("LOAD") && mySet.has("DISC")) {

                if (e.Purpose() == "LOAD") {
                    var select = document.getElementById('cargoSelUploadDocs');
                    //self.PartOrFullDischargeEnable(false);
                    var complateid = data.target.id;
                    var id = data.target.id.split('Importexport')[1];

                    document.getElementById("partfulldischarge" + id).disabled = true;
                    e.FullpartDischarge("");
                    e.Quantity("");
                    e.BalenceqtyonBoard("");

                    $("#cargoSelUploadDocs option[value='CDT1']").hide();
                    $("#cargoSelUploadDocs option[value='CDT2']").show();
                }
                else if (e.Purpose() == "DISC") {
                    var select = document.getElementById('cargoSelUploadDocs');
                    $("#cargoSelUploadDocs option[value='CDT2']").hide();
                    $("#cargoSelUploadDocs option[value='CDT1']").show();
                    var complateid = data.target.id;
                    var id = data.target.id.split('Importexport')[1];
                    document.getElementById("partfulldischarge" + id).disabled = false;
                }
                else {
                    var select = document.getElementById('cargoSelUploadDocs');
                    $("#cargoSelUploadDocs option[value='CDT2']").show();
                    $("#cargoSelUploadDocs option[value='CDT1']").show();
                }
            }
            else {


                if (e.Purpose() == "LOAD") {
                    var select = document.getElementById('cargoSelUploadDocs');
                    //self.PartOrFullDischargeEnable(false);
                    $("#cargoSelUploadDocs option[value='CDT1']").hide();
                    $("#cargoSelUploadDocs option[value='CDT2']").show();
                }
                else if (e.Purpose() == "DISC") {
                    var select = document.getElementById('cargoSelUploadDocs');
                    $("#cargoSelUploadDocs option[value='CDT2']").hide();
                    $("#cargoSelUploadDocs option[value='CDT1']").show();
                }
                else {
                    var select = document.getElementById('cargoSelUploadDocs');
                    $("#cargoSelUploadDocs option[value='CDT2']").show();
                    $("#cargoSelUploadDocs option[value='CDT1']").show();
                }
            }
        }

        self.arrivalCommodityModel().Purpose.subscribe(function (value) {

            if (value == "LOAD") {
                var select = document.getElementById('cargoSelUploadDocs');
                $("#cargoSelUploadDocs option[value='CDT1']").hide();
                $("#cargoSelUploadDocs option[value='CDT2']").show();
            }
            else if (value == "DISC") {
                var select = document.getElementById('cargoSelUploadDocs');
                $("#cargoSelUploadDocs option[value='CDT2']").hide();
                $("#cargoSelUploadDocs option[value='CDT1']").show();
            }
            else {
                var select = document.getElementById('cargoSelUploadDocs');
                $("#cargoSelUploadDocs option[value='CDT2']").show();
                $("#cargoSelUploadDocs option[value='CDT1']").show();
            }
        });


        self.SecondaryAgentID1Select = function (e) {

            self.isspanEmpagent(false);

            var selecteddataItem = this.dataItem(e.item.index());
            self.arrivalNotificationModel().SecondaryAgentID1(selecteddataItem.AgentID);
        }

        self.SecondaryAgentID2Select = function (e) {

            var selecteddataItem = this.dataItem(e.item.index());
            self.arrivalNotificationModel().SecondaryAgentID2(selecteddataItem.AgentID);
        }


        AgentName2Blur = function () {
            if (self.arrivalNotificationModel().SecondaryAgent2Name() == "") {
                self.arrivalNotificationModel().SecondaryAgentID2('');
                self.arrivalNotificationModel().SecondaryAgent2Name('');
            }
        }
        AgentName1Blur = function () {
            if (self.arrivalNotificationModel().SecondaryAgent1Name() == "") {
                self.arrivalNotificationModel().SecondaryAgentID1('');
                self.arrivalNotificationModel().SecondaryAgent1Name('');

            }
        }


        AgentName1Keypress = function () {
            if (self.arrivalNotificationModel().AgentID() != "") {
                self.arrivalNotificationModel().SecondaryAgentID1('');
                self.arrivalNotificationModel().SecondaryAgent1Name('');
            }
        }

        AgentName2Keypress = function () {
            if (self.arrivalNotificationModel().AgentID() != "") {
                self.arrivalNotificationModel().SecondaryAgentID2('');
                self.arrivalNotificationModel().SecondaryAgent2Name('');

            }
        }

        VesselNameBlur = function () {
            $("#collapseFive").addClass('collapsed');
            if (self.arrivalNotificationModel().VesselID() == "") {
                self.arrivalNotificationModel().VesselData('');
                self.arrivalNotificationModel().NominationDate("");
                self.vesseldetailsvisable(false);
                self.vesseldetailsmodel(new IPMSROOT.VesseldetailsModel(undefined));
                self.arrivalNotificationModel().VesselName('');
                self.arrivalNotificationModel().VesselData('');
                self.arrivalNotificationModel().VesselID('');
                if (self.arrivalNotificationModel().IsGovtVessel() != 'N') {
                    $('#LastPortLablid').hide();
                    $('#NextPortLablid').hide();
                    $('#lblForgnCstlid').hide();
                    $('#lblcrewid').hide();
                    $('#lblshipperid').hide();
                }
                else {
                    $('#LastPortLablid').show();
                    $('#NextPortLablid').show();
                    $('#lblForgnCstlid').show();
                    $('#lblcrewid').show();
                    $('#lblshipperid').show();
                }

                self.arrivalNotificationModel().IMONo('');
                self.arrivalNotificationModel().DockingPlanID('');
                self.arrivalNotificationModel().SubmissionDate('');
                $("select#reasonforvisit").prop('selectedIndex', 0);
                self.DryDockDetailsVisible(false);

                $("#IspsClearenceSpn").hide();
                $("#ISPSReferenceNo").prop('disabled', true);
                $("#AppliedDate").data('kendoDatePicker').enable(false);
                //  $("#RefNoSpn").hide();
            }
        }

        VesselNameKeypress = function () {
            if (self.arrivalNotificationModel().VesselID() != "") {
                $("#collapseFive").css('display', 'none');
                if ($("#autocompleteAN").val() == '') {
                    self.arrivalNotificationModel().VesselData('');
                    self.arrivalNotificationModel().NominationDate("");
                    self.vesseldetailsmodel(new IPMSROOT.VesseldetailsModel(undefined));
                    self.vesseldetailsvisable(false);

                }

                if (self.arrivalNotificationModel().IsGovtVessel() != 'N') {
                    $('#LastPortLablid').hide();
                    $('#NextPortLablid').hide();
                    $('#lblForgnCstlid').hide();
                    $('#lblcrewid').hide();
                    $('#lblshipperid').hide();
                }
                else {
                    $('#LastPortLablid').show();
                    $('#NextPortLablid').show();
                    $('#lblForgnCstlid').show();
                    $('#lblcrewid').show();
                    $('#lblshipperid').show();
                }

                self.arrivalNotificationModel().IMONo('');
                self.arrivalNotificationModel().DockingPlanID('');
                self.arrivalNotificationModel().SubmissionDate('');
                $("select#reasonforvisit").prop('selectedIndex', 0);
                self.DryDockDetailsVisible(false);

                $("#IspsClearenceSpn").hide();
                $("#ISPSReferenceNo").prop('disabled', true);
                $("#AppliedDate").data('kendoDatePicker').enable(false);
                //  $("#RefNoSpn").hide();
            }

        }


        self.LoadTOBirths = function (e) {
            var DataItem = this.dataItem(e.item.index());

            if (DataItem.TerminalOperatorid > 0) {
                self.arrivalNotificationModel().TerminalOperatorID(DataItem.TerminalOperatorid);

                self.viewModelHelper.apiGet('api/LoadTOBirths', { TOID: DataItem.TerminalOperatorid },
                     function (result1) {

                         self.arrivalNotificationReferenceBirthData(new IPMSRoot.ArrivalNotificationReferenceBirthData(result1));
                     }, null, null, false);
            }
            else {
                self.viewModelHelper.apiGet('api/LoadTOBirths', { TOID: "0" },
                     function (result1) {
                         self.arrivalNotificationReferenceBirthData(new IPMSRoot.ArrivalNotificationReferenceBirthData(result1));
                     }, null, null, false);
            }
        }

        //VesselDeetails fetches the data from API Service to AutoComplete text box
        VesselEvent = function (data, event) {
            self.viewModelHelper.apiGet('api/Vessels/' + VesselName(),
                                    { vslname: VesselName() },
                                      function (result) {
                                          console.log(ko.toJSON(result));
                                          return result;
                                      });
        }

        //TerminalOperator fetches the data from API Service to AutoComplete text box
        self.arrivalNotificationModel().IsTerminalOperator.subscribe(function (item) {
            if (item == "Y") {
                self.IsTerminalOperatorChanged(true);
            }
            else if (item == "N") {
                self.IsTerminalOperatorChanged(false);
            }
        });

        self.ClassificationsforBargeselect = function (event) {

            $("#spanClassifications").text('');

            if ($("#Classifications").val() == '') {
                $("#spanClassifications").text('This field is required.');

            }
        }
        self.AlterBerth = function (event) {
            if ($("#preferredberthList").val() == '') {
                $("select#alterBirthname").prop('selectedIndex', 0);
                toastr.warning("Please Select Preferred Berth");
                return;
            }
            if (event.AlternateBerthKey() == $("#preferredberthList").val()) {
                $("select#alterBirthname").prop('selectedIndex', 0);
                toastr.warning("Preferred Berth and Alternate Berth Cannot be Same");
                return;
            }
        }


        //self.validateberths = function () {
        //    if ($("#preferredberthList").val() == "" || $("#preferredberthList").val() == null) {
        //       $("#spanpreferredberth").text('This field is required.');
        //        self.isspanpreferredberth(true);
        //    }
        //    else {
        //        $("#spanpreferredberth").text('');
        //        self.isspanpreferredberth(false);
        //    }
        //}
        self.validateberthDockList = function () {
            if ($("#selDockList").val() == "" || $("#selDockList").val() == null) {
                $("#spanPreferredSideDock").text('This field is required.');
                self.isspanPreferredSideDock(true);
            }
            else {
                $("#spanPreferredSideDock").text('');
                self.isspanPreferredSideDock(false);
            }
        }

        self.CheckingBalenceQty = function () {
            if ($("#QtyOnboard").val() != "" || $("#QtyOnboard").val() != null) {
                if ($("#Quantity").val() != "" || $("#Quantity").val() != null) {
                    var qty = parseFloat($("#Quantity").val());
                    var qtyonboard = parseFloat($("#QtyOnboard").val());
                    if (qtyonboard >= qty) {
                        var balenceqty = qtyonboard - qty;
                        $("#BalenceqtyonBoard").text() == balenceqty;
                        self.arrivalCommodityModel().BalenceqtyonBoard(balenceqty);

                    }
                    else { toastr.warning("Cargo To Be Discharged at KPCL should be less than Total Quantity on Board"); }

                }
            }
        }

        self.validatelastportcall = function () {

            if (self.arrivalNotificationReferenceData().ArrivalConfigDetails()[0].Isreqportofcall() == 'true' && self.arrivalNotificationModel().IsGovtVessel() == 'N') {

                if ($("#LastPortOfCall").val() == "" || $("#LastPortOfCall").val() == null) {
                    $("#spanLastPortOfCall").text('This field is required.');
                    self.isspanLastPortOfCall(true);
                }
                else {
                    $("#spanLastPortOfCall").text('');
                    self.isspanLastPortOfCall(false);
                }
            }
            else {
                $("#spanLastPortOfCall").text('');
                self.isspanLastPortOfCall(false);
            }
        }
        self.validatenextportofcall = function () {
            if (self.arrivalNotificationReferenceData().ArrivalConfigDetails()[0].Isreqportofcall() == 'true' && self.arrivalNotificationModel().IsGovtVessel() == 'N') {

                if ($("#NextPortOfCall").val() == "" || $("#NextPortOfCall").val() == null) {
                    $("#spanNextPortOfCall").text('This field is required.');
                    self.isspanNextPortOfCall(true);
                }
                else {
                    $("#spanNextPortOfCall").text('');
                    self.isspanNextPortOfCall(false);
                }
            }
            else {
                $("#spanNextPortOfCall").text('');
                self.isspanNextPortOfCall(false);
            }
        }

        ValidateApplieddate = function () {

            if (self.arrivalNotificationModel().AppliedForISPS() == 'A') {

                if ($("#AppliedDate").val() == "" || $("#AppliedDate").val() == null) {
                    $("#spanAppliedDate").text('This field is required.');
                    self.isspanAppliedDate(true);
                }
                else {
                    $("#spanAppliedDate").text('');
                    self.isspanAppliedDate(false);
                }
            }
        }

        validateISPSReferenceNo = function () {


            if (self.arrivalNotificationModel().AppliedForISPS() == 'A') {

                if ($("#ISPSReferenceNo").val() == "" || $("#ISPSReferenceNo").val() == null) {
                    //  $("#ispssapnvalidation").text('This field is required.');
                    // self.ispsRefNo(true);
                }
                else {
                    //  $("#ispssapnvalidation").text('');
                    //  self.ispsRefNo(false);
                }
            }

        }

        self.TOHit = function (event) {
            self.isTOEnabled(true);
            $("#IsTOStrSpn").show();
            self.arrivalNotificationModel().TerminalOperatorID('');
            $("#SpecTO").focus();
        }
        self.TOHitNo = function (event) {
            $("#IsTOStrSpn").hide();
            self.isTOEnabled(false);
            self.arrivalNotificationModel().TerminalOperatorID('');
            $("#SpecTO").val('');
            self.viewModelHelper.apiGet('api/LoadTOBirths', { TOID: "0" },
                   function (result1) {
                       self.arrivalNotificationReferenceBirthData(new IPMSRoot.ArrivalNotificationReferenceBirthData(result1));
                   }, null, null, false);
        }


        //LoadLayup fetches the ReasonForVisit details from API Service 
        self.LoadLayup = function (event) {

            self.BunkersVisible(false);
            self.arrivalNotificationModel().bunkersVisible(false);
            self.LayByVisble(false);
            self.arrivalNotificationModel().layByVisble(false);
            self.isOtherRsonVisible(false);
            self.DryDockDetailsVisible(false);
            self.isreasonvisitcolumnVisible(false);
            self.arrivalNotificationModel().ArrivalCommodities.removeAll();
            self.arrivalNotificationModel().CargoQuantitiesSplits.removeAll();
            self.isCargosplitVisible(false);
            self.ShipperListForCargo([]);
            self.CargoGroupListArray([]);
            var isDRYD = 0;
            var isLABYREPA = 0;
            var isBUNK = 0;
            var isOTHR = 0;
            var isLoad = false;
            var isDischarge = false;


            for (var i = 0; i < event.ArrivaReasonArray().length; i++) {
                event.ReasonForVisit(event.ArrivaReasonArray()[i]);

                if (event.ReasonForVisit() == 'DRYD' && !(self.IsValidDockingPlanID())) {
                    self.DryDockDetailsVisible(false);
                    self.QuantitiesofCommoditiesEnable(false);
                    self.PartOrFullDischargeEnable(false);
                    self.TotalQuantityEnable('Quantity');
                    self.BullardPulltestEnable(false);
                    var Repair = ["DRYD"];
                    var ReasonforVisitKendo = $("#reasonforvisit").data('kendoMultiSelect');
                    var values = ReasonforVisitKendo.value().slice();
                    values = $.grep(values, function (a) {
                        return $.inArray(a, Repair) == -1;
                    });
                    ReasonforVisitKendo.dataSource.filter({});
                    ReasonforVisitKendo.value(values);
                    toastr.warning("Docking Plan Must Be Approved when Reason For Visit is Dry Dock", "Voyage Registration");
                    return;
                }
                else if (event.ReasonForVisit() == 'LABY') {
                    self.PartOrFullDischargeEnable(false);
                    self.TotalQuantityEnable('Quantity');
                    self.LayByVisble(true);
                    self.QuantitiesofCommoditiesEnable(false);
                    self.arrivalNotificationModel().layByVisble(true);
                    self.BullardPulltestEnable(false);
                    isLABYREPA = 1;
                }
                else if (event.ReasonForVisit() == 'REPA') {
                    self.PartOrFullDischargeEnable(false);
                    self.TotalQuantityEnable('Quantity');
                    self.LayByVisble(true);
                    self.arrivalNotificationModel().layByVisble(true);
                    self.QuantitiesofCommoditiesEnable(false);
                    self.BullardPulltestEnable(false);
                    isLABYREPA = 1;
                }
                else if (event.ReasonForVisit() == 'DRYD') {
                    self.PartOrFullDischargeEnable(false);
                    self.TotalQuantityEnable('Quantity');
                    self.DryDockDetailsVisible(true);
                    self.QuantitiesofCommoditiesEnable(false);
                    self.BullardPulltestEnable(false);
                    isDRYD = 1;
                }
                else if (event.ReasonForVisit() == 'BUNK') {
                    self.PartOrFullDischargeEnable(false);
                    self.TotalQuantityEnable('Quantity');
                    self.QuantitiesofCommoditiesEnable(false);
                    self.BunkersVisible(true);
                    self.arrivalNotificationModel().bunkersVisible(true);
                    self.BullardPulltestEnable(false);
                    isBUNK = 1;
                }
                else if (event.ReasonForVisit() == 'OTHR') {
                    self.PartOrFullDischargeEnable(false);
                    self.TotalQuantityEnable('Quantity');
                    self.isOtherRsonVisible(true);
                    self.QuantitiesofCommoditiesEnable(false);
                    self.BullardPulltestEnable(false);
                    isOTHR = 1;
                }
                else if (event.ReasonForVisit() == 'BPLT') {
                    self.PartOrFullDischargeEnable(false);
                    self.TotalQuantityEnable('Quantity');
                    self.QuantitiesofCommoditiesEnable(false);
                    self.BullardPulltestEnable(false);
                }
                else if (event.ReasonForVisit() == 'DISC') {

                    self.QuantitiesofCommoditiesEnable(true);
                    self.BullardPulltestEnable(false);
                    self.TotalQuantityEnable('Total Quantity on Board');
                    // $("#spanResonForvisitdropdown").text('');
                    // self.isspanResonForvisitdropdown(false);
                    var select = document.getElementById('cargoSelUploadDocs');
                    $("#cargoSelUploadDocs option[value='CDT2']").hide();
                    $("#cargoSelUploadDocs option[value='CDT1']").show();


                    var load = ["LOAD"];
                    var ReasonforVisitKendo = $("#reasonforvisit").data('kendoMultiSelect');
                    if (!(self.Vesseltypecomparision())) {
                        self.PartOrFullDischargeEnable(true);
                        self.isreasonvisitcolumnVisible(true);
                        if (event.IsGovtVessel() == 'N') {
                            $("#ResonForvisitlable").html('Load Port:');
                        }
                        else {
                            $("#ResonForvisitlable").html('Load Port:');
                        }
                        var values = ReasonforVisitKendo.value().slice();
                        //$.each(values, function (i, val) {
                        //    if (load == val) {
                        //        toastr.warning("Reason for visit Discharge and Load Both Should not Contain", "Voyage Registration");
                        //        values = $.grep(values, function (a) {
                        //            return $.inArray(a, load) == -1;
                        //        });
                        //    }
                        //});

                        ReasonforVisitKendo.dataSource.filter({});
                        ReasonforVisitKendo.value(values);
                    }
                    else {
                        self.isreasonvisitcolumnVisible(true);
                        if (event.IsGovtVessel() == 'N') {
                            $("#ResonForvisitlable").html('Load/Discharge Port:');
                        }
                        else {
                            $("#ResonForvisitlable").html('Load/Discharge Port:');
                        }
                    }
                    $("#Importexport option[value='DISC']").prop('selected', true);
                    self.isPurposeDropdownEnable(false);
                }

                else if (event.ReasonForVisit() == 'LOAD') {
                    self.PartOrFullDischargeEnable(false);
                    self.TotalQuantityEnable('Quantity');
                    self.BullardPulltestEnable(false);
                    self.QuantitiesofCommoditiesEnable(true);
                    // $("#spanResonForvisitdropdown").text('');
                    //  self.isspanResonForvisitdropdown(false);
                    var select = document.getElementById('cargoSelUploadDocs');
                    $("#cargoSelUploadDocs option[value='CDT1']").hide();
                    $("#cargoSelUploadDocs option[value='CDT2']").show();

                    var Discharge = ["DISC"];
                    var ReasonforVisitKendo = $("#reasonforvisit").data('kendoMultiSelect');
                    if (!(self.Vesseltypecomparision())) {
                        self.isreasonvisitcolumnVisible(true);
                        if (event.IsGovtVessel() == 'N') {
                            $("#ResonForvisitlable").html('Discharge Port:');
                        }
                        else {
                            $("#ResonForvisitlable").html('Discharge Port:');
                        }
                        var values = ReasonforVisitKendo.value().slice();
                        //$.each(values, function (i, val) {
                        //    if (Discharge == val) {
                        //        toastr.warning("Reason for visit Discharge and Load Both Should not Contain", "Voyage Registration");
                        //        values = $.grep(values, function (a) {
                        //            return $.inArray(a, Discharge) == -1;
                        //        });
                        //    }
                        //});
                        ReasonforVisitKendo.dataSource.filter({});
                        ReasonforVisitKendo.value(values);
                    }
                    else {
                        self.isreasonvisitcolumnVisible(true);
                        if (event.IsGovtVessel() == 'N') {
                            $("#ResonForvisitlable").html('Load/Discharge Port:');
                        }
                        else {
                            $("#ResonForvisitlable").html('Load/Discharge Port:');
                        }
                    }
                    $("#Importexport option[value='LOAD']").prop('selected', true);

                    self.isPurposeDropdownEnable(false);
                }

            }
            var mySet = new Set(event.ArrivaReasonArray());
            if (mySet.has("DISC") && mySet.has("LOAD")) {

                self.isPurposeDropdownEnable(true);

            }

            if (isDRYD == 0) {
                self.arrivalNotificationModel().DryDockBerthKey('');
            }

            if (isBUNK == 0) {
                self.arrivalNotificationModel().BunkersRequired('');
                self.arrivalNotificationModel().BunkersMethod('');
                self.arrivalNotificationModel().BunkerService('');
                self.arrivalNotificationModel().DistanceFromStern('');
                self.arrivalNotificationModel().TonsMT('');
                self.arrivalNotificationModel().AnyImpInfo('');
            }
            if (isLABYREPA == 0) {
                self.arrivalNotificationModel().PlannedDurationDate('');
                self.arrivalNotificationModel().PlannedDurationToDate('');
                self.arrivalNotificationModel().Daycnt('');
                self.arrivalNotificationModel().ReasonForLayup('');
            }
            $('#reasonforvisit').focus();
        }

        //DaylightRestriction fetches the ClearanceChanged details from API Service 
        self.arrivalNotificationModel().Clearance.subscribe(function (item) {

            if (item == "Y") {

                self.ClearanceChanged(true);
            }
            else if (item == "N") {

                self.ClearanceChanged(false);
            }
        });

        //Voyage Registration Repair Date Change
        ChangeRepairDate = function () {
            $("#PlannedDurationToDate").val('');
            self.arrivalNotificationModel().PlannedDurationToDate('');
            self.arrivalNotificationModel().Daycnt('');
        }


        //Preventing Backspace
        PreventBackSpace = function () {
            return self.validationHelper.PreventBackspaces_keydownEvent(event);
        }

        Calcdate = function (data) {

            var today = data.value;
            var value = $("#PlannedDurationDate").val();
            var valueobj = kendo.parseDate(value, self.dateFormat.IPMSDateFormat());
            var PlannedDurationDateobj = kendo.parseDate(today, self.dateFormat.IPMSDateFormat());
            var dobDate = kendo.parseDate(self.arrivalNotificationModel().PlannedDurationDate());
            if (dobDate != null) {
                var days = (PlannedDurationDateobj - dobDate) / (60 * 60 * 24 * 1000);
                if (days >= 0) {
                    self.arrivalNotificationModel().Daycnt(days);
                }
                else {
                    self.arrivalNotificationModel().Daycnt("");
                    self.arrivalNotificationModel().PlannedDurationToDate("");


                }
            }
            else {
                var days = (PlannedDurationDateobj - valueobj) / (60 * 60 * 24 * 1000);
                if (days >= 0) {
                    self.arrivalNotificationModel().Daycnt(days);
                }
                else {
                    self.arrivalNotificationModel().Daycnt("");
                    self.arrivalNotificationModel().PlannedDurationToDate("");

                }
            }
            if (today == "") {
                self.arrivalNotificationModel().Daycnt("");
            }

            $("#PlannedDurationToDate").val(today);
        }
        Calcudate = function (data) {

            var fromday = data.value;
            var value = $("#PlannedDurationToDate").val();
            var valueobj = kendo.parseDate(value, self.dateFormat.IPMSDateFormat());
            var PlannedDurationDateobj = kendo.parseDate(fromday, self.dateFormat.IPMSDateFormat());
            if (PlannedDurationDateobj < valueobj) {
                var dobDate = kendo.parseDate(self.arrivalNotificationModel().PlannedDurationToDate());
                if (dobDate != null) {
                    var days = (dobDate - PlannedDurationDateobj) / (60 * 60 * 24 * 1000);
                    if (days >= 0) {
                        self.arrivalNotificationModel().Daycnt(days);
                    }
                    else {
                        self.arrivalNotificationModel().Daycnt("");


                    }
                }
                else {

                    var days = (valueobj - PlannedDurationDateobj) / (60 * 60 * 24 * 1000);
                    if (days >= 0) {
                        self.arrivalNotificationModel().Daycnt(days);
                    }
                    else {
                        self.arrivalNotificationModel().Daycnt("");


                    }
                }
            }
            else if (fromday == value) {
                self.arrivalNotificationModel().Daycnt("0");
            }
            else {
                self.arrivalNotificationModel().PlannedDurationToDate("");
                self.arrivalNotificationModel().Daycnt("");
            }
            if (fromday == "") {
                self.arrivalNotificationModel().Daycnt("");
            }

            $("#PlannedDurationDate").val(fromday);

        }

        calMinMax = function () {
            this.min($("#PlannedDurationDate").val());
            this.max($("#ETD").val());
        }
        // validate the data 
        self.ValidateForm = function (ArrivalNotificationData) {

            self.arrivalNotificationModel().IsValidationEnabled(true);
            // $("#CellNo").kendoMaskedTextBox({ mask: "(000)000-000-0000" });
            toastr.clear();
            var check = 0;
            var Content = $("#autocompleteAN").val();
            for (var i = 0; i < ArrivalNotificationData.ArrivaReasonArray().length; i++) {
                ArrivalNotificationData.ReasonForVisit(ArrivalNotificationData.ArrivaReasonArray()[i]);
                if (ArrivalNotificationData.ReasonForVisit() == 'BUNK' || ArrivalNotificationData.ReasonForVisit() == 'LABY' || ArrivalNotificationData.ReasonForVisit() == 'BPLT') {
                    check = check + 1;
                }
                else {
                    check = 0;
                    break;
                }
            }
            if ($("#autocompleteAN").val() == '') {
                self.isspanVslValid(true);
                $("#spanVslValid").text('This field is required.');
            }
            else if (ArrivalNotificationData.VesselID() == '' || ArrivalNotificationData.VesselName() == '') {
                self.isspanVslValid(true);
                if (Content.length > 0) {
                    $("#spanVslValid").text('Invalid Vessel Name/IMO No.');
                }
                else {
                    $("#spanVslValid").text('This field is required.');
                }
            }

            if (self.isEmployee()) {
                if (ArrivalNotificationData.SecondaryAgentID1() == null || ArrivalNotificationData.SecondaryAgentID1() == 0 || ArrivalNotificationData.SecondaryAgentID1() == '') {


                    self.isspanEmpagent(true);
                    return;
                }
            }

            if (ArrivalNotificationData.IsGovtVessel() != "N" || ArrivalNotificationData.IsGovtVessel() == "") {
                if (($("#ETA").val() == "") || $("#ETA").val() == null || $("#ETD").val() == "" || $("#ETD").val() == null) {
                    if (($("#ETA").val() == "") || ($("#ETA").val() == null)) {
                        self.isspanEtaValid(true)
                        $("#spanEtaValid").text('This field is required.');

                    }
                    if (($("#ETD").val() == "") || ($("#ETD").val() == null)) {
                        self.isspanEtdValid(true);
                        $("#spanEtdValid").text('This field is required.');
                    }
                    return;
                }
            } else {
                if (($("#ETA").val() == "") || $("#ETA").val() == null || $("#ETD").val() == "" || $("#ETD").val() == null) {
                    if (($("#ETA").val() == "") || ($("#ETA").val() == null)) {
                        self.isspanEtaValid(true)
                        $("#spanEtaValid").text('This field is required.');
                    }
                    if (($("#ETD").val() == "") || ($("#ETD").val() == null)) {
                        self.isspanEtdValid(true);
                        $("#spanEtdValid").text('This field is required.');
                    }
                }

                if ($("#ArrivalVoyageNumber").val() == "" || $("#ArrivalVoyageNumber").val() == null) {
                    ArrivalNotificationData.VoyageNumber.extend({ required: true });
                }
                else {
                    ArrivalNotificationData.VoyageNumber.rules.remove(function (item) { return item.rule = "required"; });
                }

                //      ArrivalVoyageNumber  ABC

                self.ArrivalNotificationValidation = ko.observable(ArrivalNotificationData);
                self.ArrivalNotificationValidation().errors = ko.validation.group(self.ArrivalNotificationValidation());
                errors = self.ArrivalNotificationValidation().errors().length;

                if (errors > 0) {
                    ArrivalNotificationData.errors.showAllMessages();
                }

                if ($("#ArrivalVoyageNumber").val() == "" || $("#ArrivalVoyageNumber").val() == null) {
                    return;
                }
            }

            if (ArrivalNotificationData.IsGovtVessel() == "N" || ArrivalNotificationData.IsGovtVessel() == "") {
                ArrivalNotificationData.ReasonForVisit('');
                var isOptnlInfo = 0;
                for (var i = 0; i < ArrivalNotificationData.ArrivaReasonArray().length; i++) {
                    ArrivalNotificationData.ReasonForVisit(ArrivalNotificationData.ArrivaReasonArray()[i]);

                    if (ArrivalNotificationData.ReasonForVisit() == 'DRYD' || ArrivalNotificationData.ReasonForVisit() == 'BUNK' || ArrivalNotificationData.ReasonForVisit() == 'LABY' || ArrivalNotificationData.ReasonForVisit() == 'REPA' || ArrivalNotificationData.ReasonForVisit() == 'OTHR' || ArrivalNotificationData.ReasonForVisit() == 'PASS' || ArrivalNotificationData.ReasonForVisit() == 'STOR' || ArrivalNotificationData.ReasonForVisit() == 'TRAN') {
                        if (self.QuantitiesofCommoditiesEnable() == 'false') { self.QuantitiesofCommoditiesEnable(false); }
                        if (self.BullardPulltestEnable() == 'true') { self.BullardPulltestEnable(false); }
                    }
                    else if (ArrivalNotificationData.ReasonForVisit() == 'BPLT') {
                        if (self.BullardPulltestEnable() == 'true') { self.BullardPulltestEnable(false); }
                        if (self.QuantitiesofCommoditiesEnable() == 'false') { self.QuantitiesofCommoditiesEnable(false); }

                    }
                    else {
                        isOptnlInfo = 1;
                    }

                    if (ArrivalNotificationData.ReasonForVisit() == 'DISC' || ArrivalNotificationData.ReasonForVisit() == 'LOAD') {
                        self.QuantitiesofCommoditiesEnable(true);
                        if (self.BullardPulltestEnable() == 'true') { self.BullardPulltestEnable(false); }
                    }
                }

                if ($("#arrivalafterdrafttxt").val() != "" || $("#arrivalafterdrafttxt").val() != null) {
                    var arrivaldraft = parseFloat($("#arrivalafterdrafttxt").val());
                    var vesselsummerdraft = parseFloat(self.arrivalNotificationModel().SummerDraftAFTInM());
                    if (arrivaldraft > vesselsummerdraft)
                    { toastr.warning("Please Arrival Aft draft are More then vessel Summer Aft Dtaft"); }
                }
                else if ($("#departafterdrafttxt").val() != "" || $("#departafterdrafttxt").val() != null) {
                    var arrivaldraft = parseFloat($("#arrivalafterdrafttxt").val());
                    var vesselsummerdraft = parseFloat(self.arrivalNotificationModel().SummerDraftAFTInM());
                    if (arrivaldraft > vesselsummerdraft)
                    { toastr.warning("Please Departure Aft draft are More then vessel Summer Aft Dtaft"); }
                }
                if ($("#arrivalforworddrafttxt").val() != "" || $("#arrivalforworddrafttxt").val() != null) {
                    var arrivaldraft = parseFloat($("#arrivalforworddrafttxt").val());
                    var vesselsummerforworddraft = parseFloat(self.arrivalNotificationModel().SummerDraftFWDInM());
                    if (arrivaldraft > vesselsummerforworddraft)
                    { toastr.warning("Please Departure Forward draft are More then vessel Summer Forward Dtaft"); }
                }
                else if ($("#departureforworddrafttxt").val() != "" || $("#departureforworddrafttxt").val() != null) {
                    var arrivaldraft = parseFloat($("#arrivalafterdrafttxt").val());
                    var vesselsummerfrwdraft = parseFloat(self.arrivalNotificationModel().SummerDraftFWDInM());
                    if (arrivaldraft > vesselsummerfrwdraft)
                    { toastr.warning("Please Departure Forward draft are More then vessel Summer Forward Dtaft"); }
                }
            }

            if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
                if (self.arrivalNotificationReferenceData().ArrivalConfigDetails()[0].Isreqpreferedberth() == 'true') {
                    //if ($("#preferredberthList").val() == "" || $("#preferredberthList").val() == null) {
                    //    $("#spanpreferredberth").text('This field is required.');
                    //    self.isspanpreferredberth(true);
                    //}
                    //else {
                    //    $("#spanpreferredberth").text('');
                    //    self.isspanpreferredberth(false);
                    //}
                    if ($("#selDockList").val() == "" || $("#selDockList").val() == null) {
                        $("#spanPreferredSideDock").text('This field is required.');
                        self.isspanPreferredSideDock(true);
                    }
                    else {
                        $("#spanPreferredSideDock").text('');
                        self.isspanPreferredSideDock(false);
                    }
                }
            }
            if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
                var ReasonforVisitKendo = $("#ShipperReceiver").data('kendoMultiSelect');
                if ((ReasonforVisitKendo.value() == "" || ReasonforVisitKendo.value() == null || ReasonforVisitKendo._values[0] == undefined) && check == 0) {
                    // $('#spanShipperReceiver').text('This field is required.')
                    // self.isspanShipperReceiver(true);
                }
                else {
                    // $('#spanShipperReceiver').text('');
                    // self.isspanShipperReceiver(false);
                }
            }
            if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
                var ReasonforVisitKendo = $("#reasonforvisit").data('kendoMultiSelect');
                if (ReasonforVisitKendo.value() == "" || ReasonforVisitKendo.value() == null) {
                    $('#spanReasonForVisit').text('This field is required.')
                    self.isspanReasonForVisit(true);
                }
                else {
                    $('#spanReasonForVisit').text('');
                    self.isspanReasonForVisit(false);
                }
            }
            if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {

                if ($("#ForeignCoastal").val() == "" || $("#ForeignCoastal").val() == null) {
                    ArrivalNotificationData.ForeignCostalRun.extend({ required: true });
                }
                else {
                    ArrivalNotificationData.ForeignCostalRun.rules.remove(function (item) { return item.rule = "required"; });
                }


                if ($("#MCargoTYPE").val() == "" || $("#MCargoTYPE").val() == null) {
                    ArrivalNotificationData.CargoTYPE.extend({ required: true });
                }
                else {
                    ArrivalNotificationData.CargoTYPE.rules.remove(function (item) { return item.rule = "required"; });
                }


                if ($("#ArrivalDraftMean").val() == "" || $("#ArrivalDraftMean").val() == null) {
                    ArrivalNotificationData.ArrivalDraftMean.extend({ required: true });
                }
                else {
                    ArrivalNotificationData.ArrivalDraftMean.rules.remove(function (item) { return item.rule = "required"; });
                }
                if ($("#DepartureDraftMean").val() == "" || $("#DepartureDraftMean").val() == null) {
                    ArrivalNotificationData.DepartureDraftMean.extend({ required: true });
                }
                else {
                    ArrivalNotificationData.DepartureDraftMean.rules.remove(function (item) { return item.rule = "required"; });
                }

                if ($("#ArrivalForwardDraft").val() == "" || $("#ArrivalForwardDraft").val() == null) {
                    ArrivalNotificationData.Arrforwarddraft.extend({ required: true });
                }
                else {
                    ArrivalNotificationData.Arrforwarddraft.rules.remove(function (item) { return item.rule = "required"; });
                }
                if ($("#ArrivalAfterDraft").val() == "" || $("#ArrivalAfterDraft").val() == null) {
                    ArrivalNotificationData.Arrafterdraft.extend({ required: true });
                }
                else {
                    ArrivalNotificationData.Arrafterdraft.rules.remove(function (item) { return item.rule = "required"; });
                }

                if ($("#DepartureForwardDraft").val() == "" || $("#DepartureForwardDraft").val() == null) {
                    ArrivalNotificationData.Deptforwarddraft.extend({ required: true });
                }
                else {
                    ArrivalNotificationData.Deptforwarddraft.rules.remove(function (item) { return item.rule = "required"; });
                }
                if ($("#DepartureAfterDraft").val() == "" || $("#DepartureAfterDraft").val() == null) {
                    ArrivalNotificationData.Deptafterdraft.extend({ required: true });
                }
                else {
                    ArrivalNotificationData.Deptafterdraft.rules.remove(function (item) { return item.rule = "required"; });
                }
                //if (($("#PresentAirDrafttxt").val() == "") || ($("#PresentAirDrafttxt").val() == null)) {
                //    ArrivalNotificationData.PresentAirDraft.extend({ required: true });
                //}
                //else {
                //    ArrivalNotificationData.PresentAirDraft.rules.remove(function (item) { return item.rule = "required"; });
                //}

                //if ($("#totalCrewNotxt").val() == "" || $("#totalCrewNotxt").val() == null) {
                //    ArrivalNotificationData.CrewNo.extend({ required: true });
                //}
                //else {
                //    ArrivalNotificationData.CrewNo.rules.remove(function (item) { return item.rule = "required"; });
                //}
                if (ArrivalNotificationData.IsPakistaniCrew() == "Y") {
                    if ($("#PakistaniCrewNOtxt").val() == "" || $("#PakistaniCrewNOtxt").val() == null) {
                        $('#spanPakistaniCrewNOtxt').text('This field is required.');
                        self.isspanPakistaniCrew(true);
                    }
                }
            }

            if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
                if (ArrivalNotificationData.AdditionalTugReq() == "Y") {
                    if ($("#NumberofTugstxt").val() == "" || $("#NumberofTugstxt").val() == null) {
                        $('#spanNumberofTugs').text('This field is required.')
                        self.isspanAdditionalTugReq(true);
                    }
                    else {
                        $('#spanNumberofTugs').text('');
                        self.isspanAdditionalTugReq(false);
                    }
                }
            }

            if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {

                if (self.arrivalNotificationReferenceData().ArrivalConfigDetails()[0].Isreqportofcall() == 'true') {
                    if ($("#LastPortOfCall").val() == "" || $("#LastPortOfCall").val() == null) {
                        $("#spanLastPortOfCall").text('This field is required.');
                        self.isspanLastPortOfCall(true);
                    }
                    else {
                        $("#spanLastPortOfCall").text('');
                        self.isspanLastPortOfCall(false);
                    }
                    if ($("#NextPortOfCall").val() == "" || $("#NextPortOfCall").val() == null) {
                        $("#spanNextPortOfCall").text('This field is required.');
                        self.isspanNextPortOfCall(true);
                    }
                    else {
                        $("#spanNextPortOfCall").text('');
                        self.isspanNextPortOfCall(false);
                    }
                }
            }
            if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {

                if (self.arrivalNotificationModel().AppliedForISPS() == 'A') {

                    var RegExpDate = /(\d{2})-(\d{2})-(\d{4})/;
                    var regexp = new RegExp(RegExpDate);
                    var date = $("#AppliedDate").val();
                    if (regexp.test(date) == false) {
                        $("#spanAppliedDate").text('This field is required.');
                    }
                    //if ($('#ISPSReferenceNo').val == "" || $('#ISPSReferenceNo').val == "") {
                    //    $("#ispsspanvalidation").text('This field is required.');
                    //    self.ispsRefNo(true);
                    //    ArrivalNotificationData.ISPSReferenceNo.extend({ required: true });
                    //}
                    //else {
                    //    $("#ispsspanvalidation").text('');
                    //    self.ispsRefNo(true);
                    //    ArrivalNotificationData.ISPSReferenceNo.rules.remove(function (item) { return item.rule = "required"; });
                    //}
                    if ($("#AppliedDate").val() == "" || $("#AppliedDate").val() == null) {
                        $("#spanAppliedDate").text('This field is required.');
                        self.isspanAppliedDate(true);
                        ArrivalNotificationData.AppliedDate.extend({ required: true });
                    }
                    else {
                        $("#spanAppliedDate").text('');
                        self.isspanAppliedDate(false);
                        ArrivalNotificationData.AppliedDate.rules.remove(function (item) { return item.rule = "required"; });
                    }
                    if ($("#ISPSReferenceNo").val() == "" || $("#ISPSReferenceNo").val() == null) {

                        // $("#ispssapnvalidation").text('This field is required.');
                        //self.ispsRefNo(true);
                        // ArrivalNotificationData.ISPSReferenceNo.extend({ required: true });
                    }
                    else {
                        $("#ispsspanvalidation").text('');
                        //  self.ispsRefNo(false);
                        //  ArrivalNotificationData.ISPSReferenceNo.rules.remove(function (item) { return item.rule = "required"; });
                    }
                }
                else {
                    $("#spanAppliedDate").text('');
                    // $("#ispssapnvalidation").text('');
                    // self.ispsRefNo(false);
                    self.isspanAppliedDate(false);
                    ArrivalNotificationData.AppliedDate.rules.remove(function (item) { return item.rule = "required"; });
                    //  ArrivalNotificationData.ISPSReferenceNo.rules.remove(function (item) { return item.rule = "required"; });
                }
            }

            if (self.arrivalNotificationReferenceData().ArrivalConfigDetails()[0].Isreqoperational() == 'true' && self.arrivalNotificationModel().IsGovtVessel() == 'N') {

                ArrivalNotificationData.PlanDateTimeOfBerth.extend({ required: true });
                ArrivalNotificationData.PlanDateTimeToVacateBerth.extend({ required: true });
                ArrivalNotificationData.PlanDateTimeToStartCargo.extend({ required: true });
                ArrivalNotificationData.PlanDateTimeToCompleteCargo.extend({ required: true });

                if (isOptnlInfo == 0) {
                    ArrivalNotificationData.PlanDateTimeOfBerth.rules.remove(function (item) { return item.rule = "required"; });
                    ArrivalNotificationData.PlanDateTimeToVacateBerth.rules.remove(function (item) { return item.rule = "required"; });
                    ArrivalNotificationData.PlanDateTimeToStartCargo.rules.remove(function (item) { return item.rule = "required"; });
                    ArrivalNotificationData.PlanDateTimeToCompleteCargo.rules.remove(function (item) { return item.rule = "required"; });
                    self.isspanOptValid1(false);
                    self.isspanOptValid2(false);
                    self.isspanOptValid3(false);
                    self.isspanOptValid4(false);
                }
            }

            self.ArrivalNotificationValidation = ko.observable(ArrivalNotificationData);
            self.ArrivalNotificationValidation().errors = ko.validation.group(self.ArrivalNotificationValidation());
            var errors = self.ArrivalNotificationValidation().errors().length;
            if (ArrivalNotificationData.IsGovtVessel() == 'N' || ArrivalNotificationData.IsGovtVessel() == "") {

                if (ValidateFormValues(self, ArrivalNotificationData) == true) {
                    var Content = $("#autocompleteAN").val();
                    if ($("#autocompleteAN").val() == '') {
                        self.isspanVslValid(true);
                        $("#spanVslValid").text('This field is required.');

                    }
                    else if (ArrivalNotificationData.VesselID() == '' || ArrivalNotificationData.VesselName() == '') {
                        self.isspanVslValid(true);
                        if (Content.length > 0) {
                            $("#spanVslValid").text('Invalid Vessel Name/IMO No.');
                        }
                        else {
                            $("#spanVslValid").text('This field is required.');
                        }
                    }
                    else {
                        self.isspanVslValid(false);
                        if (self.viewModeForTabs() == "notification1") {
                            GoToTab2(self, ArrivalNotificationData);
                        }
                        else if (self.viewModeForTabs() == "notification2") {
                            GoToTab3(self, ArrivalNotificationData);
                        }
                        else {
                            return;
                        }
                    }
                }
            }
            else {
                if (self.viewModeForTabs() == "notification1") {
                    GoToTab2(self, ArrivalNotificationData);
                }
                else if (self.viewModeForTabs() == "notification2") {
                    GoToTab3(self, ArrivalNotificationData);
                }
            }


            if (viewDetail == true) {
                self.isSubmitVisible(false);
            }

        }



        //Preventing Backspace
        PreventBackSpace = function () {
            return self.validationHelper.PreventBackspaces_keydownEvent(event);
        }

        //ArrivalNotification Draft Data saveing data in API Service 
        self.DraftArrivalNotification = function (ArrivalNotificationData) {


            if (self.arrivalNotificationReferenceData().ArrivalConfigDetails()[0].Isreqpreferedberth() == 'true') {
                //if ($("#preferredberthList").val() == "" || $("#preferredberthList").val() == null) {
                //   $("#spanpreferredberth").text('This field is required.');
                //   self.isspanpreferredberth(true);
                //}
                //else {
                //    $("#spanpreferredberth").text('');
                //    self.isspanpreferredberth(false);
                //}
                if ($("#selDockList").val() == "" || $("#selDockList").val() == null) {
                    $("#spanPreferredSideDock").text('This field is required.');
                    self.isspanPreferredSideDock(true);
                }
                else {
                    $("#spanPreferredSideDock").text('');
                    self.isspanPreferredSideDock(false);
                }
            }



            if (self.arrivalNotificationReferenceData().ArrivalConfigDetails()[0].Isreqportofcall() == 'true') {
                if ($("#LastPortOfCall").val() == "" || $("#LastPortOfCall").val() == null) {
                    $("#spanLastPortOfCall").text('This field is required.');
                    self.isspanLastPortOfCall(true);
                }
                else {
                    $("#spanLastPortOfCall").text('');
                    self.isspanLastPortOfCall(false);
                }
                if ($("#NextPortOfCall").val() == "" || $("#NextPortOfCall").val() == null) {
                    $("#spanNextPortOfCall").text('This field is required.');
                    self.isspanNextPortOfCall(true);
                }
                else {
                    $("#spanNextPortOfCall").text('');
                    self.isspanNextPortOfCall(false);
                }
            }


            if (self.arrivalNotificationReferenceData().ArrivalConfigDetails()[0].Isreqoperational() == 'true') {

                ArrivalNotificationData.PlanDateTimeOfBerth.extend({ required: true });
                ArrivalNotificationData.PlanDateTimeToVacateBerth.extend({ required: true });
                ArrivalNotificationData.PlanDateTimeToStartCargo.extend({ required: true });
                ArrivalNotificationData.PlanDateTimeToCompleteCargo.extend({ required: true });
            }
            else {
                ArrivalNotificationData.PlanDateTimeOfBerth.rules.remove(function (item) { return item.rule = "required"; });
                ArrivalNotificationData.PlanDateTimeToVacateBerth.rules.remove(function (item) { return item.rule = "required"; });
                ArrivalNotificationData.PlanDateTimeToStartCargo.rules.remove(function (item) { return item.rule = "required"; });
                ArrivalNotificationData.PlanDateTimeToCompleteCargo.rules.remove(function (item) { return item.rule = "required"; });
                self.isspanOptValid1(false);
                self.isspanOptValid2(false);
                self.isspanOptValid3(false);
                self.isspanOptValid4(false);
            }
            toastr.clear();
            self.isspanVslValid = ko.observable(false);
            self.ArrivalNotificationValidation = ko.observable(ArrivalNotificationData);
            self.ArrivalNotificationValidation().errors = ko.validation.group(self.ArrivalNotificationValidation());
            var arrivalNotificationValidationerrors = self.ArrivalNotificationValidation().errors().length;
            var isdrafterror = 'N';
            if (arrivalNotificationValidationerrors == 0) {

                if (ArrivalNotificationData.ArrivalCommodities().length > 0) {
                    $.each(ArrivalNotificationData.ArrivalCommodities(), function (key, item) {
                        var CommodChk = item;
                        if (CommodChk != null)
                            if (CommodChk !== undefined) {
                                var QuantityVal = CommodChk.Quantity();
                                if (QuantityVal == '' || QuantityVal == null) {
                                    QuantityVal = 0;
                                }

                                if (CommodChk.CargoGroup() == "" || CommodChk.CargoGroup() == undefined || CommodChk.CargoType() == "" || CommodChk.CargoType() == undefined || CommodChk.Purpose() == "" || CommodChk.Purpose() == undefined || CommodChk.QtyOnboard() == "" || CommodChk.QtyOnboard() == undefined || CommodChk.FullpartDischarge() == 0 || CommodChk.FullpartDischarge() == undefined || CommodChk.UOM() == "" || CommodChk.UOM() == undefined) {
                                    //isdrafterror = 'Y';
                                    //toastr.warning("Please enter valid details of Quantities of Commodity", "Voyage Registration");
                                    //result = false;
                                }
                                else {
                                    if (CommodChk.Package() == 'PKG1') {
                                        //if (CommodChk.PackageQty() == "" || CommodChk.PackageQty() == null) {
                                        //    toastr.warning("Please Enter PackageQty Details", "Voyage Registration");
                                        //    result = false;
                                        //}
                                    }
                                }
                                if (CommodChk.FullpartDischarge() == 'P') {
                                    if (CommodChk.Quantity() == "" || CommodChk.Quantity() == undefined) {
                                        //toastr.options.closeButton = true;
                                        //toastr.options.positionClass = "toast-top-right"; // 33
                                        //toastr.warning("Please enter valid details of Quantities of Commodity", "Voyage Registration");
                                        //result = false;
                                        //errorCount = errorCount + 1;
                                    }
                                }
                            }
                    });
                }
                if (ArrivalNotificationData.ViewModeForTabs() == 'notification2') {

                    if (ArrivalNotificationData.IMDGInformations().length > 0) {
                        var IMDGInformationsDetails = ko.utils.arrayFilter(ArrivalNotificationData.IMDGInformations(), function (items) {
                            if (items.Others() == null)
                                items.Others('');
                            if (items.Purpose() == null || items.ClassCode() == null || items.ImdgCommodity() == null || items.ImdgCommodity() == "" || items.UNNo() == "" || items.Quantity() == "") {
                                //isdrafterror = 'Y';
                                //toastr.warning("Please Enter Valid Details of IMDG Cargo Information", "Voyage Registration");
                                //result = false;
                            }
                        });
                    }
                }
            }

            if (arrivalNotificationValidationerrors == 0 && isdrafterror == 'N') {
                if ($('input:radio[name=IsDangerousGoodsonBoard]:checked').val() == "A") {
                    ArrivalNotificationData.AnyDangerousGoodsonBoard('A')
                }
                else {
                    ArrivalNotificationData.AnyDangerousGoodsonBoard('I');
                }
                if (ArrivalNotificationData.IsTerminalOperator() == "A") {
                }
                else {
                    ArrivalNotificationData.TerminalOperatorID('');
                }
                var dateobj = kendo.parseDate(ArrivalNotificationData.ETA(), "yyyy-MM-dd HH:mm");
                var datestring = kendo.toString(dateobj, "yyyy-MM-dd HH:mm");
                ArrivalNotificationData.ETA(datestring);

                var dateobjETD = kendo.parseDate(ArrivalNotificationData.ETD(), "yyyy-MM-dd HH:mm");
                var datestringETD = kendo.toString(dateobjETD, "yyyy-MM-dd HH:mm");
                ArrivalNotificationData.ETD(datestringETD);

                var objPlanDateTimeOfBerth = kendo.parseDate(ArrivalNotificationData.PlanDateTimeOfBerth(), "yyyy-MM-dd HH:mm");
                var objstrPlanDateTimeOfBerth = kendo.toString(objPlanDateTimeOfBerth, "yyyy-MM-dd HH:mm");
                ArrivalNotificationData.PlanDateTimeOfBerth(objstrPlanDateTimeOfBerth);

                var objPlanDateTimeToVacateBerth = kendo.parseDate(ArrivalNotificationData.PlanDateTimeToVacateBerth(), "yyyy-MM-dd HH:mm");
                var objstrPlanDateTimeToVacateBerth = kendo.toString(objPlanDateTimeToVacateBerth, "yyyy-MM-dd HH:mm");
                ArrivalNotificationData.PlanDateTimeToVacateBerth(objstrPlanDateTimeToVacateBerth);

                var objPlanDateTimeToStartCargo = kendo.parseDate(ArrivalNotificationData.PlanDateTimeToStartCargo(), "yyyy-MM-dd HH:mm");
                var objstrPlanDateTimeToStartCargo = kendo.toString(objPlanDateTimeToStartCargo, "yyyy-MM-dd HH:mm");
                ArrivalNotificationData.PlanDateTimeToStartCargo(objstrPlanDateTimeToStartCargo);

                var objPlanDateTimeToCompleteCargo = kendo.parseDate(ArrivalNotificationData.PlanDateTimeToCompleteCargo(), "yyyy-MM-dd HH:mm");
                var objstrPlanDateTimeToCompleteCargo = kendo.toString(objPlanDateTimeToCompleteCargo, "yyyy-MM-dd HH:mm");
                ArrivalNotificationData.PlanDateTimeToCompleteCargo(objstrPlanDateTimeToCompleteCargo);

                var objAppliedDate = kendo.parseDate(ArrivalNotificationData.AppliedDate(), "yyyy-MM-dd");
                var objstrAppliedDate = kendo.toString(objAppliedDate, "yyyy-MM-dd");
                ArrivalNotificationData.AppliedDate(objstrAppliedDate);

                var objLoadDischargeDate = kendo.parseDate(ArrivalNotificationData.LoadDischargeDate(), "yyyy-MM-dd");
                var objstrLoadDischargeDate = kendo.toString(objLoadDischargeDate, "yyyy-MM-dd");
                ArrivalNotificationData.LoadDischargeDate(objstrLoadDischargeDate);

                var objDischargeDate = kendo.parseDate(ArrivalNotificationData.DischargeDate(), "yyyy-MM-dd");
                var objstrDischargeDate = kendo.toString(objDischargeDate, "yyyy-MM-dd");
                ArrivalNotificationData.DischargeDate(objstrDischargeDate);

                var objPlannedDurationDate = kendo.parseDate(ArrivalNotificationData.PlannedDurationDate(), "yyyy-MM-dd");
                var objstrPlannedDurationDate = kendo.toString(objPlannedDurationDate, "yyyy-MM-dd");
                ArrivalNotificationData.PlannedDurationDate(objstrPlannedDurationDate);

                var objPlannedDurationToDate = kendo.parseDate(ArrivalNotificationData.PlannedDurationToDate(), "yyyy-MM-dd");
                var objstrPlannedDurationToDate = kendo.toString(objPlannedDurationToDate, "yyyy-MM-dd");
                ArrivalNotificationData.PlannedDurationToDate(objstrPlannedDurationToDate);
                self.viewModelHelper.isLoading(true);
                if (ArrivalNotificationData.VCN() == "") {
                    self.viewModelHelper.apiPost('api/DraftArrivalNotifications', ko.mapping.toJSON(ArrivalNotificationData), function Message(data) {
                        self.viewModelHelper.isLoading(false);
                        toastr.success("Voyage Registration Draft details saved successfully for " + data.VCN + ".", "Voyage Registration");
                        self.LoadArrivalNotifications();
                        self.viewMode('List');
                    });
                }
                else {
                    self.viewModelHelper.isLoading(true);
                    self.viewModelHelper.apiPost('api/DraftArrivalNotifications', ko.mapping.toJSON(ArrivalNotificationData), function Message(data) {
                        self.viewModelHelper.isLoading(false);
                        toastr.success("Voyage Registration Draft details updated successfully for " + data.VCN + ".", "Voyage Registration");
                        self.LoadArrivalNotifications();
                        self.viewMode('List');
                    });
                }
            }
            else {
                if ($("#ETA").val() == "" || $("#ETA").val() == null) {
                    $("#spanEtaValid").text('This field is required.');
                    self.isspanEtaValid(true);
                }
                else {
                    $("#ValidityDateMsg").text('');
                    self.isspanEtaValid(false);
                }
                if ($("#PlanDateTimeOfBerth").val() == "" || $("#PlanDateTimeOfBerth").val() == null) {
                    $("#spanOptValid1").text('This field is required.');
                    self.isspanOptValid1(true);
                }
                else {
                    $("#spanOptValid1").text('');
                    self.isspanOptValid1(false);
                }
                if ($("#PlanDateTimeToCompleteCargo").val() == "" || $("#PlanDateTimeToCompleteCargo").val() == null) {
                    $("#spanOptValid2").text('This field is required.');
                    self.isspanOptValid2(true);
                }
                else {
                    $("#spanOptValid2").text('');
                    self.isspanOptValid2(false);
                }
                if ($("#PlanDateTimeToStartCargo").val() == "" || $("#PlanDateTimeToStartCargo").val() == null) {
                    $("#spanOptValid3").text('This field is required.');
                    self.isspanOptValid3(true);
                }
                else {
                    $("#spanOptValid3").text('');
                    self.isspanOptValid3(false);
                }
                if ($("#PlanDateTimeToVacateBerth").val() == "" || $("#PlanDateTimeToVacateBerth").val() == null) {
                    $("#spanOptValid4").text('This field is required.');
                    self.isspanOptValid4(true);
                }
                else {
                    $("#spanOptValid4").text('');
                    self.isspanOptValid4(false);
                }
                if ($("#ETD").val() == "" || $("#ETD").val() == null) {
                    $("#spanEtdValid").text('This field is required.');
                    self.isspanEtdValid(true);

                }
                else {
                    $("#spanEtdValid").text('');
                    self.isspanEtdValid(false);
                }

                self.ArrivalNotificationValidation().errors.showAllMessages();
                toastr.warning("You Have Some form Errors. Please Check Below.");
                return;
            }
        }

        VacateBerth = function (ArrivalNotificationData) {
            if ($("#PlanDateTimeToVacateBerth").val() == "" || $("#PlanDateTimeToVacateBerth").val() == null) {
                $("#spanOptValid4").text('This field is required.');
                self.isspanOptValid4(true);
            }
            else {
                $("#spanOptValid4").text('');
                self.isspanOptValid4(false);
            }
        }

        StartCargoOPS = function (ArrivalNotificationData) {
            if ($("#PlanDateTimeToStartCargo").val() == "" || $("#PlanDateTimeToStartCargo").val() == null) {
                $("#spanOptValid3").text('This field is required.');
                self.isspanOptValid3(true);
            }
            else {
                $("#PlanDateTimeToCompleteCargo").val('');
                self.arrivalNotificationModel().PlanDateTimeToCompleteCargo('');
                $("#PlanDateTimeToVacateBerth").val('');
                self.arrivalNotificationModel().PlanDateTimeToVacateBerth('');

                $("#spanOptValid3").text('');
                self.isspanOptValid3(false);
            }
        }

        CompleteCargoOPS = function (ArrivalNotificationData) {
            if ($("#PlanDateTimeToCompleteCargo").val() == "" || $("#PlanDateTimeToCompleteCargo").val() == null) {
                $("#spanOptValid2").text('This field is required.');
                self.isspanOptValid2(true);
            }
            else {
                $("#PlanDateTimeToVacateBerth").val('');
                self.arrivalNotificationModel().PlanDateTimeToVacateBerth('');
                $("#spanOptValid2").text('');
                self.isspanOptValid2(false);
            }
        }
        PlanDate = function (ArrivalNotificationData) {
            if ($("#PlanDateTimeOfBerth").val() == "" || $("#PlanDateTimeOfBerth").val() == null) {
                $("#spanOptValid1").text('This field is required.');
                self.isspanOptValid1(true);
            }
            else {
                $("#PlanDateTimeToCompleteCargo").val('');
                self.arrivalNotificationModel().PlanDateTimeToCompleteCargo('');
                $("#PlanDateTimeToStartCargo").val('');
                self.arrivalNotificationModel().PlanDateTimeToStartCargo('');
                $("#PlanDateTimeToVacateBerth").val('');
                self.arrivalNotificationModel().PlanDateTimeToVacateBerth('');
                $("#spanOptValid1").text('');
                self.isspanOptValid1(false);
            }
        }
        self.NewETAValidation = function () {

            var neweta = $('#ETA').val();
            var newetd = new Date();

            if (neweta.length == 12) {

                neweta = formatDateTimeChangeETA(neweta);
            }
            newetaobj = kendo.parseDate(neweta, self.dateFormat.IPMSDateTimeFormat());
            newetdobj = kendo.parseDate(newetd, self.dateFormat.IPMSDateTimeFormat());

            if (newetdobj != '' && newetdobj > newetaobj) {

                toastr.warning("ETA should be greater than current Date");

                $('#ETA').val("");
                return;
            }
        }

        self.NewETDValidation = function () {

            var neweta = $('#ETA').val();
            var newetd = $('#ETD').val();
            if (newetd.length == 12) {

                newetd = formatDateTimeChangeETA(newetd);
                $('#ETD').val(newetd);
            }
            if (neweta.length == 12) {

                neweta = formatDateTimeChangeETA(neweta);
            }
            newetaobj = kendo.parseDate(neweta, self.dateFormat.IPMSDateTimeFormat());
            newetdobj = kendo.parseDate(newetd, self.dateFormat.IPMSDateTimeFormat());
            if ($("#ETA").val() == "" || $("#ETA").val() == null) {

                toastr.warning("Please specify ETA Date"); return;
            }

            if ($("#ETD").val() == "" || $("#ETD").val() == null) {
                $("#ETD").val('');
                toastr.warning("Please specify ETD Date");
                return;
            }
            if (newetdobj != '' && newetdobj < newetaobj) {

                toastr.warning("ETD should be greater than ETA");

                $('#ETD').val('');
                return;
            }
        }


        function formatDateTimeChangeETA(value) {

            var dvalue = value;
            var fvalue = "";
            for (var i = 0; i < 12; i++) {
                if ((i == 2) || (i == 4))
                    fvalue = fvalue.concat("-" + dvalue[i]);
                else if (i == 8)
                    fvalue = fvalue.concat(" " + dvalue[i]);
                else if (i == 10)
                    fvalue = fvalue.concat(":" + dvalue[i]);
                else
                    fvalue = fvalue = fvalue.concat(dvalue[i]);
            }
            value = fvalue;
            return fvalue;
        }
        //Voyage Registration ETA Date Change
        ChangeETADate = function (ArrivalNotificationData) {
            self.isEditEtavalEnable(true);
            if ($("#ETA").val() == "" || $("#ETA").val() == null) {
                $("#ETD").val('');
                self.arrivalNotificationModel().ETD('');
                $("#spanEtaValid").text('* Please specify ETA Date');
            }
            var RegExpForDateTime = /(\d{2})-(\d{2})-(\d{4}) (\d{2}:(\d{2}))/;
            var regexp = new RegExp(RegExpForDateTime);
            var date = $("#ETA").val();
            if (regexp.test(date) == true) {

                if ($("#ETA").val() != "" || $("#ETA").val() != null) {
                    var todaydate = new Date();
                    var todate = new Date(todaydate);
                    var day = todate.getDate();
                    var month = todate.getMonth();
                    var year = todate.getFullYear();
                    var Hour = todate.getHours();
                    var Mnt = todate.getMinutes();
                    var StartDateValue = $("#ETA").val();
                    var myStartDatePicker = kendo.parseDate(StartDateValue, self.dateFormat.IPMSDateTimeFormat());
                    var datestring = kendo.toString(dateobj, "yyyy-MM-dd HH:mm");
                    var day1 = myStartDatePicker.getDate();
                    var month1 = myStartDatePicker.getMonth();
                    var year1 = myStartDatePicker.getFullYear();
                    var Hour1 = myStartDatePicker.getHours() //+ 1;
                    var Mnt1 = myStartDatePicker.getMinutes();

                    if ((moment(new Date(year, month, day, Hour, Mnt)).format('YYYY-MM-DD HH:mm')) > (moment(new Date(year1, month1, day1, Hour1, Mnt1)).format('YYYY-MM-DD HH:mm'))) {
                        toastr.warning("Please enter valid ETA date. ");
                        $("#ETA").val('');
                        return;
                    }
                    else {
                        var ETAOBJ = kendo.parseDate(date, self.dateFormat.IPMSDateTimeFormat());
                        var day = ETAOBJ.getDate();
                        var month = ETAOBJ.getMonth();
                        var year = ETAOBJ.getFullYear();
                        var Hour = ETAOBJ.getHours() //+ 1;
                        var Mnt = ETAOBJ.getMinutes();
                        var datestring = kendo.toString(moment(new Date(year, month, day, Hour, Mnt)).format('YYYY-MM-DD HH:mm'));
                    }
                }

                if (datestring == '0NaN-NaN-NaN NaN:NaN' || datestring == '1970-01-01 05:30' || datestring == 'Invalid date') {
                    toastr.warning("Invalid date and time format ");
                    $("#ETD").val('');
                    self.arrivalNotificationModel().ETD('');
                    return;
                }

                else {
                    self.arrivalNotificationModel().ETA(datestring);
                    if (self.arrivalNotificationModel().VesselID() > 0) {
                        self.viewModelHelper.apiPost('api/ArrivalDuplicateData', ko.mapping.toJSON(self.arrivalNotificationModel()), function Message(data) {
                            var ValidRule = data.split('@');

                            if (ValidRule[0] == 1) {
                                $("#ETA").val('');
                                self.arrivalNotificationModel().ETA('');
                                toastr.warning("Vessel is on the Berth with" + ValidRule[1]);
                            }
                            else if (ValidRule[0] == 2) {
                                $("#ETA").val('');
                                self.arrivalNotificationModel().ETA('');
                                toastr.warning("Voyage Registration is already raised on " + ValidRule[1]);
                            }
                            else if (ValidRule[0] == 4) {
                                $("#ETA").val('');
                                self.arrivalNotificationModel().ETA('');
                                toastr.warning("Voyage Registration is already raised on " + ValidRule[1]);
                            }
                            else {
                                $("#spanEtaValid").text('');
                                var StartDateValue = $("#ETA").val();
                                if (self.arrivalNotificationModel().ETA() != "") {
                                    var dateobj = kendo.parseDate(self.arrivalNotificationModel().ETA(), "yyyy-MM-dd HH:mm");
                                    if (dateobj == null) {
                                        var dateobj = kendo.parseDate(new Date(self.arrivalNotificationModel().ETA()), "yyyy-MM-dd HH:mm");
                                    }
                                    var datestring = kendo.toString(dateobj, "yyyy-MM-dd HH:mm");
                                    self.arrivalNotificationModel().ETA(datestring);
                                }
                                //var myDatePicker = kendo.parseDate(new Date(self.arrivalNotificationModel().ETA()), "yyyy-MM-dd HH:mm");
                                var myDatePicker = kendo.parseDate(self.arrivalNotificationModel().ETA());
                                var day = myDatePicker.getDate();
                                var month = myDatePicker.getMonth();
                                var year = myDatePicker.getFullYear();
                                var Hour = myDatePicker.getHours() //+ 1;
                                var Mnt = myDatePicker.getMinutes();
                                $("#ETD").data('kendoDateTimePicker').min(moment(new Date(year, month, day, Hour + 1, Mnt)).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                $("#expDate").data('kendoDatePicker').min(moment(new Date(year, month, day)).format(self.dateFormat.IPMSDateFormatForModel()));
                                var dateobj = kendo.parseDate(self.arrivalNotificationModel().ETA(), "yyyy-MM-dd HH:mm");
                                var datestring = kendo.toString(dateobj, "yyyy-MM-dd HH:mm");
                                self.arrivalNotificationModel().ETA(datestring);
                                self.viewModelHelper.apiPost('api/TimeRuleConfigData', ko.mapping.toJSON(self.arrivalNotificationModel()),
                                                                  function Message(data) {
                                                                      var ValidRule = data.split('@');
                                                                      self.arrivalNotificationModel().ETA(moment(datestring).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                                                  },
                                                              function failure(result) {
                                                                  self.viewModelHelper.isLoading(false);
                                                                  toastr.error(result.responseText);

                                                                  if (ArrivalNotificationData.AppliedDate() != "") {
                                                                      ArrivalNotificationData.AppliedDate(moment(new Date(ArrivalNotificationData.AppliedDate())).format(self.dateFormat.IPMSDateFormatForModel()));
                                                                  }
                                                                  if (ArrivalNotificationData.PlannedDurationDate() != "") {
                                                                      ArrivalNotificationData.PlannedDurationDate(moment(new Date(ArrivalNotificationData.PlannedDurationDate())).format(self.dateFormat.IPMSDateFormatForModel()));
                                                                  }
                                                                  if (ArrivalNotificationData.PlannedDurationToDate() != "") {
                                                                      ArrivalNotificationData.PlannedDurationToDate(moment(new Date(ArrivalNotificationData.PlannedDurationToDate())).format(self.dateFormat.IPMSDateFormatForModel()));
                                                                  }
                                                                  if (ArrivalNotificationData.ETA() != "") {
                                                                      ArrivalNotificationData.ETA(moment(new Date(ArrivalNotificationData.ETA())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                                                  }
                                                                  if (ArrivalNotificationData.ETD() != "") {
                                                                      ArrivalNotificationData.ETD(moment(new Date(ArrivalNotificationData.ETD())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                                                  }
                                                                  if (ArrivalNotificationData.PlanDateTimeOfBerth() != "") {
                                                                      ArrivalNotificationData.PlanDateTimeOfBerth(moment(new Date(ArrivalNotificationData.PlanDateTimeOfBerth())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                                                  }
                                                                  if (ArrivalNotificationData.PlanDateTimeToStartCargo() != "") {
                                                                      ArrivalNotificationData.PlanDateTimeToStartCargo(moment(new Date(ArrivalNotificationData.PlanDateTimeToStartCargo())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                                                  }
                                                                  if (ArrivalNotificationData.PlanDateTimeToCompleteCargo() != "") {
                                                                      ArrivalNotificationData.PlanDateTimeToCompleteCargo(moment(new Date(ArrivalNotificationData.PlanDateTimeToCompleteCargo())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                                                  }
                                                                  if (ArrivalNotificationData.PlanDateTimeToVacateBerth() != "") {
                                                                      ArrivalNotificationData.PlanDateTimeToVacateBerth(moment(new Date(ArrivalNotificationData.PlanDateTimeToVacateBerth())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                                                  }
                                                              },
                                                              function callbackloder(result) {
                                                                  self.viewModelHelper.isLoading(false);
                                                                  $("#ETD").focus();
                                                              }
                                                             );
                            }
                        });

                    }
                    else {
                        $("#spanEtaValid").text('');
                        var StartDateValue = $("#ETA").val();
                        var myDatePicker = kendo.parseDate(StartDateValue, self.dateFormat.IPMSDateTimeFormat());
                        var day = myDatePicker.getDate();
                        var month = myDatePicker.getMonth();
                        var year = myDatePicker.getFullYear();
                        var Hour = myDatePicker.getHours();
                        var Mnt = myDatePicker.getMinutes();

                        $("#ETD").data('kendoDateTimePicker').min(moment(new Date(year, month, day, Hour + 1, Mnt)).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                        $("#expDate").data('kendoDatePicker').min(moment(new Date(year, month, day)).format(self.dateFormat.IPMSDateFormatForModel()));

                        var dateobj = kendo.parseDate(self.arrivalNotificationModel().ETA(), "yyyy-MM-dd HH:mm");
                        var datestring = kendo.toString(dateobj, "yyyy-MM-dd HH:mm");
                        self.arrivalNotificationModel().ETA(datestring);
                        self.viewModelHelper.apiPost('api/TimeRuleConfigData', ko.mapping.toJSON(self.arrivalNotificationModel()),
                                                          function Message(data) {
                                                              var ValidRule = data.split('@');
                                                              self.arrivalNotificationModel().ETA(moment(datestring).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                                          },
                                                      function failure(result) {
                                                          self.viewModelHelper.isLoading(false);
                                                          toastr.error(result.responseText);

                                                          if (ArrivalNotificationData.AppliedDate() != "") {
                                                              ArrivalNotificationData.AppliedDate(moment(new Date(ArrivalNotificationData.AppliedDate())).format(self.dateFormat.IPMSDateFormatForModel()));
                                                          }
                                                          if (ArrivalNotificationData.PlannedDurationDate() != "") {
                                                              ArrivalNotificationData.PlannedDurationDate(moment(new Date(ArrivalNotificationData.PlannedDurationDate())).format(self.dateFormat.IPMSDateFormatForModel()));
                                                          }
                                                          if (ArrivalNotificationData.PlannedDurationToDate() != "") {
                                                              ArrivalNotificationData.PlannedDurationToDate(moment(new Date(ArrivalNotificationData.PlannedDurationToDate())).format(self.dateFormat.IPMSDateFormatForModel()));
                                                          }
                                                          if (ArrivalNotificationData.ETA() != "") {
                                                              ArrivalNotificationData.ETA(moment(new Date(ArrivalNotificationData.ETA())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                                          }
                                                          if (ArrivalNotificationData.ETD() != "") {
                                                              ArrivalNotificationData.ETD(moment(new Date(ArrivalNotificationData.ETD())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                                          }
                                                          if (ArrivalNotificationData.PlanDateTimeOfBerth() != "") {
                                                              ArrivalNotificationData.PlanDateTimeOfBerth(moment(new Date(ArrivalNotificationData.PlanDateTimeOfBerth())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                                          }
                                                          if (ArrivalNotificationData.PlanDateTimeToStartCargo() != "") {
                                                              ArrivalNotificationData.PlanDateTimeToStartCargo(moment(new Date(ArrivalNotificationData.PlanDateTimeToStartCargo())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                                          }
                                                          if (ArrivalNotificationData.PlanDateTimeToCompleteCargo() != "") {
                                                              ArrivalNotificationData.PlanDateTimeToCompleteCargo(moment(new Date(ArrivalNotificationData.PlanDateTimeToCompleteCargo())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                                          }
                                                          if (ArrivalNotificationData.PlanDateTimeToVacateBerth() != "") {
                                                              ArrivalNotificationData.PlanDateTimeToVacateBerth(moment(new Date(ArrivalNotificationData.PlanDateTimeToVacateBerth())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                                          }
                                                      },
                                                      function callbackloder(result) {
                                                          self.viewModelHelper.isLoading(false);
                                                      }
                                                     );
                    }
                }
                $("#PlanDateTimeOfBerth").val('');
                self.arrivalNotificationModel().PlanDateTimeOfBerth('');
                $("#PlanDateTimeToVacateBerth").val('');
                self.arrivalNotificationModel().PlanDateTimeToVacateBerth('');
                $("#PlanDateTimeToStartCargo").val('');
                self.arrivalNotificationModel().PlanDateTimeToStartCargo('');
                $("#PlanDateTimeToCompleteCargo").val('');
                self.arrivalNotificationModel().PlanDateTimeToCompleteCargo('');
                self.arrivalNotificationModel().LoadDischargeDate('');
                $("#PlannedDurationDate").val('');
                self.arrivalNotificationModel().PlannedDurationDate('');
                $("#PlannedDurationToDate").val('');
                self.arrivalNotificationModel().PlannedDurationToDate('');
                $("#Daycnt").val('');
                self.arrivalNotificationModel().Daycnt('');
            }
            else {
                //toastr.warning("Invalid date format");
            }
        }

        //Voyage Registration ETD Date Change
        ChangeETDDate = function () {
            self.isEditEtavalEnable(true);
            if (($("#ETA").val() == "" || $("#ETA").val() == null) && ($("#ETD").val() != "" || $("#ETD").val() != null)) {
                $("#spanEtaValid").text('* Please specify ETA Date');
                $("#ETD").val('');
                self.arrivalNotificationModel().ETD('');
            }
            else {
                $("#spanEtdValid").text('');
            }

            $("#PlanDateTimeOfBerth").val('');
            self.arrivalNotificationModel().PlanDateTimeOfBerth('');
            $("#PlanDateTimeToVacateBerth").val('');
            self.arrivalNotificationModel().PlanDateTimeToVacateBerth('');
            $("#PlanDateTimeToStartCargo").val('');
            self.arrivalNotificationModel().PlanDateTimeToStartCargo('');
            $("#PlanDateTimeToCompleteCargo").val('');
            self.arrivalNotificationModel().PlanDateTimeToCompleteCargo('');
            $("#LoadDischargeDate").val('');
            self.arrivalNotificationModel().LoadDischargeDate('');
            $("#PlannedDurationDate").val('');
            self.arrivalNotificationModel().PlannedDurationDate('');
            $("#PlannedDurationToDate").val('');
            self.arrivalNotificationModel().PlannedDurationToDate('');
            $("#Daycnt").val('');
            self.arrivalNotificationModel().Daycnt('');
        }
        calMinMaxPlannedDurationToDate = function (ArrivalNotificationData) {

            self.dateFormat = new IPMSROOT.dateFormat();
            var value = $("#PlannedDurationDate").val();
            var ETDDateobj = kendo.parseDate(self.arrivalNotificationModel().ETD(), self.dateFormat.IPMSDateFormat());
            var PlannedDurationDateobj = kendo.parseDate(value, self.dateFormat.IPMSDateFormat());
            var ETADateobj = kendo.parseDate(self.arrivalNotificationModel().ETA(), self.dateFormat.IPMSDateFormat());

            var day = ETDDateobj.getDate();
            var month = ETDDateobj.getMonth();
            var year = ETDDateobj.getFullYear();

            var day1 = PlannedDurationDateobj.getDate();
            var month1 = PlannedDurationDateobj.getMonth();
            var year1 = PlannedDurationDateobj.getFullYear();

            var day2 = ETADateobj.getDate();
            var month2 = ETADateobj.getMonth();
            var year2 = ETADateobj.getFullYear();

            $('#PlannedDurationToDate').data('kendoDatePicker').min(moment(new Date(year1, month1, day1)).format(self.dateFormat.IPMSDateFormatForModel()));
            $('#PlannedDurationToDate').data('kendoDatePicker').max(moment(new Date(year, month, day)).format(self.dateFormat.IPMSDateFormatForModel()));

            if ((moment(new Date(year1, month1, day1)).format('YYYY-MM-DD')) < (moment(new Date(year2, month2, day2)).format('YYYY - MM - DD'))) {
                toastr.warning("Please enter valid dates. ");
                $("#PlannedDurationDate").val('');
                $("#PlannedDurationToDate").val('');
                $("#Daycnt").val('');
            }
            else if ((moment(new Date(year1, month1, day1)).format('YYYY-MM-DD')) > (moment(new Date(year, month, day)).format('YYYY-MM-DD'))) {
                toastr.warning("Please enter valid dates.");
                $("#PlannedDurationDate").val('');
                $("#PlannedDurationToDate").val('');
                $("#Daycnt").val('');
            }
        }

        Vesseltypeonchange = function () {

            if ($('#VslSrchOn').val() == "G" || $('#VslSrchOn').val() == "K" || $('#VslSrchOn').val() == "") {
                $('#autocompleteAN').attr('disabled', false);
            }
            else {
                $('#autocompleteAN').attr('disabled', true);
            }

        }

        //ArrivalNotificationData saveing data in API Service 
        self.SaveArrivalNotification = function (ArrivalNotificationData) {
            toastr.clear();
            self.dateFormat = new IPMSROOT.dateFormat();

            var shipperNames = [];
            var s = 0;
            var shipperName = $('#ShipperReceiver option:selected').each(function () {
                shipperNames[s] = $(this).text();
                s++;
            });
            ArrivalNotificationData.ShipperOrReceiver(shipperNames.join('##'));
            var reasons = [];
            var c = 0;
            var reasonvisit = $('#reasonforvisit option:selected').each(function () {
                reasons[c] = $(this).text();
                c++;
            });

            ArrivalNotificationData.ReasonForVisits(reasons.join('##'));

            ArrivalNotificationData.AnyDangerousGoodsonBoard($('input:radio[name=IsDangerousGoodsonBoard]:checked').val());

            var docchkif = "";//ValiedDocumentCheckNew(self, ArrivalNotificationData);
            if (self.BullardPulltestEnable()) {
                docchkif = "";
            }
            if (ArrivalNotificationData.IsGovtVessel() != "N") {
                docchkif = "";
            }

            if (docchkif == "") {
                if (firstSave || !firstSave) {
                    firstSave = false;
                    if (ArrivalNotificationData.VCN() == "" || (ArrivalNotificationData.VCN() != "" && ArrivalNotificationData.VCN() == ArrivalNotificationData.DraftKey())) {

                        $.confirm({
                            'title': 'Voyage Registration',
                            'message': 'Do you want to Add new Voyage Registration ? ',     //without uploading of ' + docchkif
                            'buttons': {
                                'Yes': {
                                    'class': 'green',
                                    'action': function () {
                                        var dateobj = kendo.parseDate(ArrivalNotificationData.ETA(), self.dateFormat.IPMSDateTimeFormat());
                                        var datestring = kendo.toString(dateobj, "yyyy-MM-dd HH:mm");
                                        ArrivalNotificationData.ETA(datestring);

                                        if (ArrivalNotificationData.ETD() != "") {
                                            var dateobjETD = kendo.parseDate(ArrivalNotificationData.ETD(), self.dateFormat.IPMSDateTimeFormat());
                                            if (dateobjETD == null) {

                                                var dateobjETD = kendo.parseDate(new Date(ArrivalNotificationData.ETD()), self.dateFormat.IPMSDateTimeFormat());
                                            }
                                            var datestringETD = kendo.toString(dateobjETD, "yyyy-MM-dd HH:mm");
                                            ArrivalNotificationData.ETD(datestringETD);
                                        }

                                        if (ArrivalNotificationData.PlanDateTimeOfBerth() != "") {
                                            var objPlanDateTimeOfBerth = kendo.parseDate(ArrivalNotificationData.PlanDateTimeOfBerth(), self.dateFormat.IPMSDateTimeFormat());
                                            if (objPlanDateTimeOfBerth == null) {

                                                var objPlanDateTimeOfBerth = kendo.parseDate(new Date(ArrivalNotificationData.PlanDateTimeOfBerth()), self.dateFormat.IPMSDateTimeFormat());
                                            }
                                            var objstrPlanDateTimeOfBerth = kendo.toString(objPlanDateTimeOfBerth, "yyyy-MM-dd HH:mm");
                                            ArrivalNotificationData.PlanDateTimeOfBerth(objstrPlanDateTimeOfBerth);
                                        }

                                        if (ArrivalNotificationData.PlanDateTimeToVacateBerth() != "") {
                                            var objPlanDateTimeToVacateBerth = kendo.parseDate(ArrivalNotificationData.PlanDateTimeToVacateBerth(), self.dateFormat.IPMSDateTimeFormat());
                                            if (objPlanDateTimeToVacateBerth == null) {

                                                var objPlanDateTimeToVacateBerth = kendo.parseDate(new Date(ArrivalNotificationData.PlanDateTimeToVacateBerth()), self.dateFormat.IPMSDateTimeFormat());
                                            }

                                            var objstrPlanDateTimeToVacateBerth = kendo.toString(objPlanDateTimeToVacateBerth, "yyyy-MM-dd HH:mm");
                                            ArrivalNotificationData.PlanDateTimeToVacateBerth(objstrPlanDateTimeToVacateBerth);
                                        }

                                        if (ArrivalNotificationData.PlanDateTimeToStartCargo() != "") {
                                            var objPlanDateTimeToStartCargo = kendo.parseDate(ArrivalNotificationData.PlanDateTimeToStartCargo(), self.dateFormat.IPMSDateTimeFormat());
                                            if (objPlanDateTimeToStartCargo == null) {

                                                var objPlanDateTimeToStartCargo = kendo.parseDate(new Date(ArrivalNotificationData.PlanDateTimeToStartCargo()), self.dateFormat.IPMSDateTimeFormat());
                                            }

                                            var objstrPlanDateTimeToStartCargo = kendo.toString(objPlanDateTimeToStartCargo, "yyyy-MM-dd HH:mm");
                                            ArrivalNotificationData.PlanDateTimeToStartCargo(objstrPlanDateTimeToStartCargo);
                                        }
                                        if (ArrivalNotificationData.PlanDateTimeToCompleteCargo() != "") {
                                            var objPlanDateTimeToCompleteCargo = kendo.parseDate(ArrivalNotificationData.PlanDateTimeToCompleteCargo(), self.dateFormat.IPMSDateTimeFormat());
                                            if (objPlanDateTimeToCompleteCargo == null) {

                                                var objPlanDateTimeToCompleteCargo = kendo.parseDate(new Date(ArrivalNotificationData.objPlanDateTimeToCompleteCargo()), self.dateFormat.IPMSDateTimeFormat());
                                            }


                                            var objstrPlanDateTimeToCompleteCargo = kendo.toString(objPlanDateTimeToCompleteCargo, "yyyy-MM-dd HH:mm");
                                            ArrivalNotificationData.PlanDateTimeToCompleteCargo(objstrPlanDateTimeToCompleteCargo);
                                        }

                                        if (ArrivalNotificationData.AppliedDate() != "") {
                                            var objAppliedDate = kendo.parseDate(ArrivalNotificationData.AppliedDate(), self.dateFormat.IPMSDateFormat());
                                            if (objAppliedDate == null) {

                                                var objAppliedDate = kendo.parseDate(new Date(ArrivalNotificationData.AppliedDate()), self.dateFormat.IPMSDateFormat());
                                            }

                                            var objstrAppliedDate = kendo.toString(objAppliedDate, "yyyy-MM-dd");
                                            ArrivalNotificationData.AppliedDate(objstrAppliedDate);
                                        }

                                        if (ArrivalNotificationData.LoadDischargeDate() != "") {
                                            var objLoadDischargeDate = kendo.parseDate(ArrivalNotificationData.LoadDischargeDate(), self.dateFormat.IPMSDateFormat());
                                            if (objLoadDischargeDate == null) {

                                                var objLoadDischargeDate = kendo.parseDate(new Date(ArrivalNotificationData.LoadDischargeDate()), self.dateFormat.IPMSDateFormat());
                                            }

                                            var objstrLoadDischargeDate = kendo.toString(objLoadDischargeDate, "yyyy-MM-dd");
                                            ArrivalNotificationData.LoadDischargeDate(objstrLoadDischargeDate);
                                        }

                                        if (ArrivalNotificationData.PlannedDurationDate() != "") {
                                            var objPlannedDurationDate = kendo.parseDate(ArrivalNotificationData.PlannedDurationDate(), self.dateFormat.IPMSDateFormat());
                                            if (objPlannedDurationDate == null) {

                                                var objPlannedDurationDate = kendo.parseDate(new Date(ArrivalNotificationData.PlannedDurationDate()), self.dateFormat.IPMSDateFormat());
                                            }

                                            var objstrPlannedDurationDate = kendo.toString(objPlannedDurationDate, "yyyy-MM-dd");
                                            ArrivalNotificationData.PlannedDurationDate(objstrPlannedDurationDate);
                                        }
                                        if (ArrivalNotificationData.PlannedDurationToDate() != "") {
                                            var objPlannedDurationToDate = kendo.parseDate(ArrivalNotificationData.PlannedDurationToDate(), self.dateFormat.IPMSDateFormat());

                                            if (objPlannedDurationToDate == null) {

                                                var objPlannedDurationDate = kendo.parseDate(new Date(ArrivalNotificationData.PlannedDurationToDate()), self.dateFormat.IPMSDateFormat());
                                            }

                                            var objstrPlannedDurationToDate = kendo.toString(objPlannedDurationToDate, "yyyy-MM-dd");
                                            ArrivalNotificationData.PlannedDurationToDate(objstrPlannedDurationToDate);
                                        }

                                        // Vessel Info Capture


                                        self.viewModelHelper.apiPost('api/VoyageRegistrations', ko.mapping.toJSON(ArrivalNotificationData),
                                            function Message(data) {
                                                firstSave = true;
                                                self.viewModelHelper.isLoading(false);
                                                toastr.success("Voyage Registration details saved successfully with " + data.VCN + ".", "Voyage Registration");
                                                self.CancelArrivalNotification(ArrivalNotificationData);
                                                self.LoadArrivalNotifications();
                                                self.viewMode('List');
                                            },
                                        function failure(result) {
                                            firstSave = true;
                                            self.viewModelHelper.isLoading(false);
                                            toastr.error(result.responseText);
                                            if (ArrivalNotificationData.AppliedDate() != "") {
                                                ArrivalNotificationData.AppliedDate(moment(new Date(ArrivalNotificationData.AppliedDate())).format(self.dateFormat.IPMSDateFormatForModel()));
                                            }
                                            if (ArrivalNotificationData.PlannedDurationDate() != "") {
                                                ArrivalNotificationData.PlannedDurationDate(moment(new Date(ArrivalNotificationData.PlannedDurationDate())).format(self.dateFormat.IPMSDateFormatForModel()));
                                            }
                                            if (ArrivalNotificationData.PlannedDurationToDate() != "") {
                                                ArrivalNotificationData.PlannedDurationToDate(moment(new Date(ArrivalNotificationData.PlannedDurationToDate())).format(self.dateFormat.IPMSDateFormatForModel()));
                                            }
                                            if (ArrivalNotificationData.ETA() != "") {
                                                ArrivalNotificationData.ETA(moment(new Date(ArrivalNotificationData.ETA())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                            }
                                            if (ArrivalNotificationData.ETD() != "") {
                                                ArrivalNotificationData.ETD(moment(new Date(ArrivalNotificationData.ETD())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                            }
                                            if (ArrivalNotificationData.PlanDateTimeOfBerth() != "") {
                                                ArrivalNotificationData.PlanDateTimeOfBerth(moment(new Date(ArrivalNotificationData.PlanDateTimeOfBerth())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                            }
                                            if (ArrivalNotificationData.PlanDateTimeToStartCargo() != "") {
                                                ArrivalNotificationData.PlanDateTimeToStartCargo(moment(new Date(ArrivalNotificationData.PlanDateTimeToStartCargo())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                            }
                                            if (ArrivalNotificationData.PlanDateTimeToCompleteCargo() != "") {
                                                ArrivalNotificationData.PlanDateTimeToCompleteCargo(moment(new Date(ArrivalNotificationData.PlanDateTimeToCompleteCargo())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                            }
                                            if (ArrivalNotificationData.PlanDateTimeToVacateBerth() != "") {
                                                ArrivalNotificationData.PlanDateTimeToVacateBerth(moment(new Date(ArrivalNotificationData.PlanDateTimeToVacateBerth())).format(self.dateFormat.IPMSDateTimeFormatForModel()));
                                            }

                                        },
                                        function callbackloder(result) {
                                            firstSave = true;
                                            self.viewModelHelper.isLoading(false);
                                        });
                                    }
                                },
                                'No': {
                                    'class': 'blue',
                                    'action': function () {
                                        firstSave = true;
                                        self.viewModelHelper.isLoading(false);
                                    }
                                }
                            }
                        });
                    }

                    else {
                        $.confirm({
                            'title': 'Voyage Registration',
                            'message': 'Do you want to update the voyage details ? ',     //without uploading of ' + docchkif
                            'buttons': {
                                'Yes': {
                                    'class': 'green',
                                    'action': function () {
                                        self.viewModelHelper.isLoading(true);
                                        var dateobj = kendo.parseDate(ArrivalNotificationData.ETA(), self.dateFormat.IPMSDateTimeFormat());

                                        var datestring = kendo.toString(dateobj, "yyyy-MM-dd HH:mm");
                                        ArrivalNotificationData.ETA(datestring);

                                        if (ArrivalNotificationData.ETD() != "") {
                                            var dateobjETD = kendo.parseDate(ArrivalNotificationData.ETD(), self.dateFormat.IPMSDateTimeFormat());
                                            if (dateobjETD == null) {

                                                var dateobjETD = kendo.parseDate(new Date(ArrivalNotificationData.ETD()), self.dateFormat.IPMSDateTimeFormat());
                                            }
                                            var datestringETD = kendo.toString(dateobjETD, "yyyy-MM-dd HH:mm");
                                            ArrivalNotificationData.ETD(datestringETD);
                                        }

                                        if (ArrivalNotificationData.PlanDateTimeOfBerth() != "") {
                                            var objPlanDateTimeOfBerth = kendo.parseDate(ArrivalNotificationData.PlanDateTimeOfBerth(), self.dateFormat.IPMSDateTimeFormat());
                                            if (objPlanDateTimeOfBerth == null) {

                                                var objPlanDateTimeOfBerth = kendo.parseDate(new Date(ArrivalNotificationData.PlanDateTimeOfBerth()), self.dateFormat.IPMSDateTimeFormat());
                                            }
                                            var objstrPlanDateTimeOfBerth = kendo.toString(objPlanDateTimeOfBerth, "yyyy-MM-dd HH:mm");
                                            ArrivalNotificationData.PlanDateTimeOfBerth(objstrPlanDateTimeOfBerth);
                                        }

                                        if (ArrivalNotificationData.PlanDateTimeToVacateBerth() != "") {
                                            var objPlanDateTimeToVacateBerth = kendo.parseDate(ArrivalNotificationData.PlanDateTimeToVacateBerth(), self.dateFormat.IPMSDateTimeFormat());
                                            if (objPlanDateTimeToVacateBerth == null) {

                                                var objPlanDateTimeToVacateBerth = kendo.parseDate(new Date(ArrivalNotificationData.PlanDateTimeToVacateBerth()), self.dateFormat.IPMSDateTimeFormat());
                                            }

                                            var objstrPlanDateTimeToVacateBerth = kendo.toString(objPlanDateTimeToVacateBerth, "yyyy-MM-dd HH:mm");
                                            ArrivalNotificationData.PlanDateTimeToVacateBerth(objstrPlanDateTimeToVacateBerth);
                                        }

                                        if (ArrivalNotificationData.PlanDateTimeToStartCargo() != "") {
                                            var objPlanDateTimeToStartCargo = kendo.parseDate(ArrivalNotificationData.PlanDateTimeToStartCargo(), self.dateFormat.IPMSDateTimeFormat());
                                            if (objPlanDateTimeToStartCargo == null) {

                                                var objPlanDateTimeToStartCargo = kendo.parseDate(new Date(ArrivalNotificationData.PlanDateTimeToStartCargo()), self.dateFormat.IPMSDateTimeFormat());
                                            }
                                            var objstrPlanDateTimeToStartCargo = kendo.toString(objPlanDateTimeToStartCargo, "yyyy-MM-dd HH:mm");
                                            ArrivalNotificationData.PlanDateTimeToStartCargo(objstrPlanDateTimeToStartCargo);
                                        }

                                        if (ArrivalNotificationData.PlanDateTimeToCompleteCargo() != "") {
                                            var objPlanDateTimeToCompleteCargo = kendo.parseDate(ArrivalNotificationData.PlanDateTimeToCompleteCargo(), self.dateFormat.IPMSDateTimeFormat());
                                            if (objPlanDateTimeToCompleteCargo == null) {

                                                var objPlanDateTimeToCompleteCargo = kendo.parseDate(new Date(ArrivalNotificationData.objPlanDateTimeToCompleteCargo()), self.dateFormat.IPMSDateTimeFormat());
                                            }
                                            var objstrPlanDateTimeToCompleteCargo = kendo.toString(objPlanDateTimeToCompleteCargo, "yyyy-MM-dd HH:mm");
                                            ArrivalNotificationData.PlanDateTimeToCompleteCargo(objstrPlanDateTimeToCompleteCargo);
                                        }

                                        if (ArrivalNotificationData.AppliedDate() != "") {
                                            var objAppliedDate = kendo.parseDate(ArrivalNotificationData.AppliedDate(), self.dateFormat.IPMSDateFormat());
                                            if (objAppliedDate == null) {

                                                var objAppliedDate = kendo.parseDate(new Date(ArrivalNotificationData.AppliedDate()), self.dateFormat.IPMSDateFormat());
                                            }
                                            var objstrAppliedDate = kendo.toString(objAppliedDate, "yyyy-MM-dd");
                                            ArrivalNotificationData.AppliedDate(objstrAppliedDate);
                                        }

                                        if (ArrivalNotificationData.LoadDischargeDate() != "") {
                                            var objLoadDischargeDate = kendo.parseDate(ArrivalNotificationData.LoadDischargeDate(), self.dateFormat.IPMSDateFormat());
                                            if (objLoadDischargeDate == null) {

                                                var objLoadDischargeDate = kendo.parseDate(new Date(ArrivalNotificationData.LoadDischargeDate()), self.dateFormat.IPMSDateFormat());
                                            }

                                            var objstrLoadDischargeDate = kendo.toString(objLoadDischargeDate, "yyyy-MM-dd");
                                            ArrivalNotificationData.LoadDischargeDate(objstrLoadDischargeDate);
                                        }

                                        if (ArrivalNotificationData.PlannedDurationDate() != "") {
                                            var objPlannedDurationDate = kendo.parseDate(ArrivalNotificationData.PlannedDurationDate(), self.dateFormat.IPMSDateFormat());
                                            if (objPlannedDurationDate == null) {

                                                var objPlannedDurationDate = kendo.parseDate(new Date(ArrivalNotificationData.PlannedDurationDate()), self.dateFormat.IPMSDateFormat());
                                            }
                                            var objstrPlannedDurationDate = kendo.toString(objPlannedDurationDate, "yyyy-MM-dd");
                                            ArrivalNotificationData.PlannedDurationDate(objstrPlannedDurationDate);
                                        }

                                        if (ArrivalNotificationData.PlannedDurationToDate() != "") {
                                            var objPlannedDurationToDate = kendo.parseDate(ArrivalNotificationData.PlannedDurationToDate(), self.dateFormat.IPMSDateFormat());

                                            if (objPlannedDurationToDate == null) {

                                                var objPlannedDurationDate = kendo.parseDate(new Date(ArrivalNotificationData.PlannedDurationToDate()), self.dateFormat.IPMSDateFormat());
                                            }
                                            var objstrPlannedDurationToDate = kendo.toString(objPlannedDurationToDate, "yyyy-MM-dd");
                                            ArrivalNotificationData.PlannedDurationToDate(objstrPlannedDurationToDate);
                                        }

                                        if (ArrivalNotificationData.NominationDate() != "") {
                                            var objNominationDate = kendo.parseDate(ArrivalNotificationData.NominationDate(), self.dateFormat.IPMSDateTimeFormat());

                                            if (objNominationDate == null) {

                                                var objNominationDate = kendo.parseDate(new Date(ArrivalNotificationData.NominationDate()), self.dateFormat.IPMSDateTimeFormat());
                                            }

                                            var objstrNominationDate = kendo.toString(objNominationDate, "yyyy-MM-dd HH:mm");
                                            ArrivalNotificationData.NominationDate(objstrNominationDate);
                                        }

                                        self.viewModelHelper.apiPut('api/VoyageRegistrations', ko.mapping.toJSON(ArrivalNotificationData),
                                            function Message(data) {
                                                firstSave = true;
                                                var VCN;
                                                if (data.ApprovedVCN == null || data.ApprovedVCN == "") {
                                                    VCN = data.VCN;
                                                }
                                                else {
                                                    VCN = data.ApprovedVCN;
                                                }
                                                toastr.success("Voyage Registration details updated successfully for " + VCN + ".", "Voyage Registration");
                                                toastr.options.showDuration = 30000;
                                                if (self.AUPD() == true || self.VUPD() == true) {
                                                    setTimeout(function () {
                                                        self.CancelArrivalNotification(ArrivalNotificationData);
                                                    }, 5000);
                                                } else {
                                                    self.CancelArrivalNotification(ArrivalNotificationData);
                                                    self.LoadArrivalNotifications();
                                                    self.viewModelHelper.isLoading(false);
                                                    self.viewMode('List');

                                                }
                                            },
                                        function failure(result) {
                                            firstsave = true;
                                            self.viewmodelhelper.isloading(false);
                                            toastr.error(result.responsetext);

                                            if (arrivalnotificationdata.applieddate() != "") {
                                                arrivalnotificationdata.applieddate(moment(new date(arrivalnotificationdata.applieddate())).format(self.dateformat.ipmsdateformatformodel()));
                                            }
                                            if (arrivalnotificationdata.planneddurationdate() != "") {
                                                arrivalnotificationdata.planneddurationdate(moment(new date(arrivalnotificationdata.planneddurationdate())).format(self.dateformat.ipmsdateformatformodel()));
                                            }
                                            if (arrivalnotificationdata.planneddurationtodate() != "") {
                                                arrivalnotificationdata.planneddurationtodate(moment(new date(arrivalnotificationdata.planneddurationtodate())).format(self.dateformat.ipmsdateformatformodel()));
                                            }
                                            if (arrivalnotificationdata.eta() != "") {
                                                arrivalnotificationdata.eta(moment(new date(arrivalnotificationdata.eta())).format(self.dateformat.ipmsdatetimeformatformodel()));
                                            }
                                            if (arrivalnotificationdata.etd() != "") {
                                                arrivalnotificationdata.etd(moment(new date(arrivalnotificationdata.etd())).format(self.dateformat.ipmsdatetimeformatformodel()));
                                            }
                                            if (arrivalnotificationdata.plandatetimeofberth() != "") {
                                                arrivalnotificationdata.plandatetimeofberth(moment(new date(arrivalnotificationdata.plandatetimeofberth())).format(self.dateformat.ipmsdatetimeformatformodel()));
                                            }
                                            if (arrivalnotificationdata.plandatetimetostartcargo() != "") {
                                                arrivalnotificationdata.plandatetimetostartcargo(moment(new date(arrivalnotificationdata.plandatetimetostartcargo())).format(self.dateformat.ipmsdatetimeformatformodel()));
                                            }
                                            if (arrivalnotificationdata.plandatetimetocompletecargo() != "") {
                                                arrivalnotificationdata.plandatetimetocompletecargo(moment(new date(arrivalnotificationdata.plandatetimetocompletecargo())).format(self.dateformat.ipmsdatetimeformatformodel()));
                                            }
                                            if (arrivalnotificationdata.plandatetimetovacateberth() != "") {
                                                arrivalnotificationdata.plandatetimetovacateberth(moment(new date(arrivalnotificationdata.plandatetimetovacateberth())).format(self.dateformat.ipmsdatetimeformatformodel()));
                                            }

                                        },
                                        function callbackloder(result) {
                                            firstSave = true;
                                        });
                                    }

                                },
                                'No': {
                                    'class': 'blue',
                                    'action': function () {
                                        firstSave = true;
                                        self.viewModelHelper.isLoading(false);
                                    }
                                }
                            }

                        });
                    }
                }
            }
            //else {
            //    toastr.warning("Voyage Registration does not accept with out uploading mandatory Documents  " + docchkif + ".");
            //    self.viewModelHelper.isLoading(false);
            //    firstSave = true;
            //}
        }

        //ArrivalNotification  in Add mode
        self.addArrivalNotification = function () {
            if (self.isEmployee() == false) {
                self.isVesselNameEnabled(true);
                self.IsAgentelblenable(false);
            }
            else {
                self.IsAgentelblenable(true);
                self.isVesselNameEnabled(true)
            }

            firstSave = true;
            self.IsAddMode(true);
            self.isReset(true);
            self.isVslEnabled(true);
            self.isCargosplitVisible(false);

            self.isTOEnabled(false);
            self.isArvValEnable(true);
            self.isspanVslValid(false);
            self.isspanEmpagent(false);

            self.isEditEtavalEnable(true);
            self.isArrvalEnable(true);
            self.isPurposeDropdownEnable(true);
            self.isVisitReasonEnabled(true);
            self.isPHOEnable(true);
            self.isISPSEnable(true);
            self.isISPSDTLEnable(false);
            self.isIMDGEnable(true);
            self.isIMDGEnablechk(true);
            self.pakistaniCrewOnboard(false);
            self.AdditionalTugRequired(false);
            self.isreasonvisitcolumnVisible(false);
            self.vesseldetailsvisable(false);
            self.isVisibleView(true);
            self.CheckingDoyouintendtousewireRopewithouttailRopeForMooring(true);
            self.ShipperListForCargo([]);
            self.isDrftCmbEnabled(true);
            self.isOtherRsonVisible(false);
            self.arrivalNotificationModel(new IPMSROOT.ArrivalNotificationModel(undefined, self.arrivalNotificationReferenceData()));

            //self.viewModelHelper.apiGet('api/LoadTOBirths', { TOID: "0" },
            //     function (result1) {
            //         self.arrivalNotificationReferenceBirthData(new IPMSRoot.ArrivalNotificationReferenceBirthData(result1));
            //     }, null, null, true);

            //self.viewModelHelper.apiGet('api/LoadDrafts', null,
            //      function (result1) {
            //          self.arrivalNotificationReferenceDraftData(new IPMSRoot.ArrivalNotificationReferenceDraftData(result1));
            //      }, null, null, true);

            self.viewMode('Form');
            self.viewModeForTabs('notification1');
            self.isSubmitVisible(false);

            self.isSaveDraftVisible(true);
            self.isViewMode(false);
            self.isSaveVisible(true);
            self.isUpdateVisible(false);
            self.isGoBackVisible(false);
            self.isGoNextVisible(false);
            self.BunkersVisible(false);
            self.arrivalNotificationModel().bunkersVisible(false);
            self.LayByVisble(false);
            self.arrivalNotificationModel().layByVisble(false);
            self.isDraftVisible(true);
            self.isspanEtaValid(false);

            self.isspanOptValid1(false);
            self.isspanOptValid2(false);
            self.isspanOptValid3(false);
            self.isspanOptValid4(false);

            self.SpecialNetureChanged(false);
            self.tidildetailschanged(false);
            self.isspanSpecifyReason(false);
            self.isspanloadValid(false);
            self.isspanEtdValid(false);
            var index = 0;
            HandleProgressBarAndActiveTab(index);
            $("#IspsClearenceSpn").hide();
            $("#IsTOStrSpn").hide();
            // $("#RefNoSpn").hide();
            ko.validation.group(self.arrivalNotificationModel()).showAllMessages(false);
            self.isClearenceEnable(false);
            $("#ExemptionSpn").hide();
            $("#AppliedDate").attr("disable", true);
            $("#ISPSReferenceNo").prop('disabled', true);
            $("#AppliedDate").data('kendoDatePicker').enable(false);
            $("#DaylightSpecifyReason").attr("disable", true);
            $("#DaylightSpecifyReason").prop('disabled', true);
            self.arrivalNotificationModel().EnableDisableAddNew(true);
            self.arrivalNotificationModel().EnableDisableAddNewIMDG(true);
            self.isExemptionEnable(false);
        }

        self.editArrivalNotificationNew = function (arrivalNotification) {

            self.viewModelHelper.apiGet('api/ArrivalNotification/GetArrivalNotificationNew',
             { vcn: arrivalNotification.VCN(), WorkflowInstanceId: 0 },
              function (result) {
                  self.arrivalNotificationList(ko.utils.arrayMap(result, function (item) {

                      return new IPMSRoot.ArrivalNotificationModel(item, self.arrivalNotificationReferenceData());
                  }));
                  self.editArrivalNotification(self.arrivalNotificationList()[0]);
              });


            //  self.GetVesselDetails();


        }


        self.LinearChange = function (arrivalNotification) {
            var check = 0;
            for (var i = 0; i < arrivalNotification.ArrivaReasonArray().length; i++) {
                arrivalNotification.ReasonForVisit(arrivalNotification.ArrivaReasonArray()[i]);
                if (arrivalNotification.ReasonForVisit() == 'BUNK' || arrivalNotification.ReasonForVisit() == 'LABY' || arrivalNotification.ReasonForVisit() == 'BPLT') {
                    check = check + 1;
                }
                else {
                    check = 0;
                    break;
                }
            }

            if (arrivalNotification.IsGovtVessel() == 'G' || arrivalNotification.IsGovtVessel() == 'K') {
                if (arrivalNotification.VesselType() == "Container Vessels") {
                    $('#Idshipperlabel').text('Liner:');
                    self.arrivalNotificationReferenceData().ShipperseceiveDetails("");
                    self.arrivalNotificationReferenceData().ShipperseceiveDetails(self.arrivalNotificationReferenceData().LinearDetails());
                    self.isVoyageNumber(true);
                }
                else {
                    $('#Idshipperlabel').text('Shipper/Receiver:');
                    self.arrivalNotificationReferenceData().ShipperseceiveDetails("");
                    self.arrivalNotificationReferenceData().ShipperseceiveDetails(self.arrivalNotificationReferenceData().ShipperReceivers());
                    self.isVoyageNumber(true);
                }
            }
            else {
                if (arrivalNotification.VesselType() == "Container Vessels") {
                    if (check == 0) {
                        $('#Idshipperlabel').text('Liner:');
                        $('#Idshipperlabel').html(function (_, html) {
                            return html.replace(/\*/, "<span class='required'>*</span>");
                        });
                    }
                    else {
                        $('#Idshipperlabel').text('Liner:');
                    }
                    self.arrivalNotificationReferenceData().ShipperseceiveDetails("");
                    self.arrivalNotificationReferenceData().ShipperseceiveDetails(self.arrivalNotificationReferenceData().LinearDetails());
                    self.isVoyageNumber(true);
                }
                else {
                    if (check == 0) {
                        $('#Idshipperlabel').text('Shipper/Receiver:');
                        $('#Idshipperlabel').html(function (_, html) {
                            return html.replace(/\*/, "<span class='required'>*</span>");
                        });
                    }
                    else {
                        $('#Idshipperlabel').text('Shipper/Receiver:');
                    }
                    self.isVoyageNumber(true);
                    self.arrivalNotificationReferenceData().ShipperseceiveDetails("");
                    self.arrivalNotificationReferenceData().ShipperseceiveDetails(self.arrivalNotificationReferenceData().ShipperReceivers());
                }
            }
        }

        //ArrivalNotification in  Edit mode  
        self.editArrivalNotification = function (arrivalNotification) {

            // $("#CellNo").kendoMaskedTextBox({ mask: "(000)000-000-0000" });
            self.IsAddMode(false);
            $("#ISPSReferenceNo").prop('disabled', true);
            $("#AppliedDate").data('kendoDatePicker').enable(false);
            self.isReset(true);
            self.isVslEnabled(false);
            self.isVesselNameEnabled(false);
            self.IsAgentelblenable(false);

            self.isEditEtavalEnable(false);
            self.isArvValEnable(true);
            self.isDrftCmbEnabled(false);
            self.isspanVslValid(false);
            self.isspanEmpagent(false);
            // $('#LastPortOfCall').attr('disabled', 'disabled');
            var LastPortOfCall = $("#LastPortOfCall").data("kendoAutoComplete");
            LastPortOfCall.suggest(arrivalNotification.ViewLastPortOfCall());
            var NextPortOfCall = $("#NextPortOfCall").data("kendoAutoComplete");
            LastPortOfCall.suggest(arrivalNotification.ViewNextPortOfCall());
            //$('#LastPortOfCall').attr('disabled', 'disabled');

            //var LastPortOfCall = $("#LastPortOfCall").data("kendoAutoComplete");

            //var result = self.arrivalNotificationReferenceData().PortDetails().filter(function (item) {
            //    return (item.PortCode() == arrivalNotification.LastPortOfCall());
            //});
            //arrivalNotification.ViewLastPortOfCall = result[0].PortName();
            //LastPortOfCall.suggest(result[0].PortName());
            //var NextPortOfCall = $("#NextPortOfCall").data("kendoAutoComplete");
            //var NextPortOfCallResult = self.arrivalNotificationReferenceData().PortDetails().filter(function (item) {
            //    return (item.PortCode() == arrivalNotification.NextPortOfCall());
            //});
            //NextPortOfCall.suggest(NextPortOfCallResult[0].PortName());
            //arrivalNotification.ViewNextPortOfCall = NextPortOfCallResult[0].PortName();

            self.viewModeForTabs('notification1');
            firstSave = true;
            self.isDraftVisible(false);
            self.LayByVisble(false);
            self.BunkersVisible(false);
            self.arrivalNotificationModel().bunkersVisible(false);
            self.arrivalNotificationModel().layByVisble(false);
            //  self.GetVesselDetails();
            if (self.vesseldetailsmodel().VesselType() != "V151" && self.vesseldetailsmodel().VesselType() != "V152" && self.vesseldetailsmodel().VesselType() != "V153") {
                self.isCargosplitVisible(false);
            }

            var check = 0;
            for (var i = 0; i < arrivalNotification.ArrivaReasonArray().length; i++) {
                arrivalNotification.ReasonForVisit(arrivalNotification.ArrivaReasonArray()[i]);
                if (arrivalNotification.ReasonForVisit() == 'BUNK' || arrivalNotification.ReasonForVisit() == 'LABY' || arrivalNotification.ReasonForVisit() == 'BPLT') {
                    check = check + 1;
                }
                else {
                    check = 0;
                    break;
                }
            }

            self.isOtherRsonVisible(false);
            if (arrivalNotification.VesselType() != "" || arrivalNotification.VesselType() != null) {
                var values = self.VesseltypeCheck();
                $.each(values, function (i, val) {
                    if (arrivalNotification.VesselType() == val.name) {
                        self.Vesseltypecomparision(true);
                    }
                });
            }
            if (arrivalNotification.TerminalOperatorID() > 0) {

                var autocomplete = $("#SpecTO").data("kendoAutoComplete");
                autocomplete.suggest(arrivalNotification.RegisteredName());

                self.viewModelHelper.apiGet('api/LoadTOBirths', { TOID: arrivalNotification.TerminalOperatorID() },
            function (result1) {
                self.arrivalNotificationReferenceBirthData(new IPMSRoot.ArrivalNotificationReferenceBirthData(result1));
            }, null, null, false);
            }
            else {
                $("#SpecTO").val('');
                self.viewModelHelper.apiGet('api/LoadTOBirths', { TOID: "0" },
               function (result1) {
                   self.arrivalNotificationReferenceBirthData(new IPMSRoot.ArrivalNotificationReferenceBirthData(result1));
               }, null, null, false);
            }

            self.viewMode("Form");

            self.isSaveDraftVisible(false);
            self.isViewMode(false);
            self.isSaveVisible(false);
            self.isUpdateVisible(true);
            self.isGoBackVisible(false);
            self.isGoNextVisible(false);
            self.isSubmitVisible(false);
            self.isspanEtaValid(false);
            self.isspanOptValid1(false);
            self.isspanOptValid2(false);
            self.isspanOptValid3(false);
            self.isspanOptValid4(false);
            if (arrivalNotification.VesselID() != "")
            { self.vesseldetailsvisable(true); }

            if (arrivalNotification.IsPakistaniCrew() == "Y")
            { self.pakistaniCrewOnboard(true); }
            else { self.pakistaniCrewOnboard(false); }

            if (arrivalNotification.AdditionalTugReq() == "Y")
            { self.AdditionalTugRequired(true); }
            else { self.AdditionalTugRequired(false); }

            if (arrivalNotification.IsNvgtEqpmntOprtnl() == "N")
            { self.AllNavigationalEquipmentOperational(true); }
            else { self.AllNavigationalEquipmentOperational(false); }
            if (arrivalNotification.IsPtStboardAnchorOprtnl() == "N")
            { self.PortAndStarboardAnchorsAreOperational(true); }
            else { self.PortAndStarboardAnchorsAreOperational(false); }
            if (arrivalNotification.IsPrlrsFullySbmrgdWater() == "N")
            { self.ArePropellersFullySubmergedinWater(true); }
            else { self.ArePropellersFullySubmergedinWater(false); }

            if (arrivalNotification.IsPIClub() == "N")
            { self.VesselCoveredunderPandIClub(true); }
            else { self.VesselCoveredunderPandIClub(false); }

            if (arrivalNotification.IssafeBerthing() == "N")
            { self.IsvesselfitinallrespectforsafeBerthing(true); }
            else { self.IsvesselfitinallrespectforsafeBerthing(false); }

            if (arrivalNotification.IsShrMringlines() == "N")
            { self.ShoreMooringpatternSufficientlinesonBoard(true); }
            else { self.ShoreMooringpatternSufficientlinesonBoard(false); }

            if (arrivalNotification.IswireRopewhttailRopeMring() == "N")
            { self.CheckingDoyouintendtousewireRopewithouttailRopeForMooring(true); }
            else { self.CheckingDoyouintendtousewireRopewithouttailRopeForMooring(false); }

            if (arrivalNotification.IswireRopewhttailRopeMring() == "N")
            { self.CheckingDoyouintendtousewireRopewithouttailRopeForMooring(true); }
            else { self.CheckingDoyouintendtousewireRopewithouttailRopeForMooring(false); }

            if (arrivalNotification.IsfwrdaftWinchOprtnl() == "N")
            { self.ForwardandAfterWinchOperational(true); }
            else { self.ForwardandAfterWinchOperational(false); }

            if (arrivalNotification.IswireRopewhttailRopeMring() == "Y")
            { self.WithTailRoping(true); }
            else { self.WithTailRoping(false); }
            if (arrivalNotification.IsTailRoping() == "N")
            { self.CheckTailRope(true); }
            else { self.CheckTailRope(false); }

            self.isspanloadValid(false);
            self.isspanEtdValid(false);
            self.arrivalNotificationModel().ViewModeForTabs('notification1');

            if (arrivalNotification.TerminalOperatorID() > 0) {
                var autocomplete = $("#SpecTO").data("kendoAutoComplete");
                $("#SpecTO").text(arrivalNotification.RegisteredName());
            }


            if (arrivalNotification.IsTerminalOperator() == 'A') {
                $("#IsTOStrSpn").show();
                self.isTOEnabled(true);
            }
            else {
                $("#IsTOStrSpn").hide();
                self.isTOEnabled(false);
            }

            self.LinearChange(arrivalNotification);
            var ReferenceID = arrivalNotification.VCN();
            self.CargoSplitEventCargoGroup(arrivalNotification);
            self.arrivalNotificationModel(arrivalNotification);
            self.LinearChange(arrivalNotification);
            self.arrivalNotificationModel().pendingTasks.removeAll();
            self.GetVesselDetails();
            if (self.arrivalNotificationModel().IsGovtVessel() != 'N') {
                $('#LastPortLablid').hide();
                $('#NextPortLablid').hide();
                $('#lblForgnCstlid').hide();
                $('#lblcrewid').hide();
                $('#lblshipperid').hide();
            }
            else {
                $('#LastPortLablid').show();
                $('#NextPortLablid').show();
                $('#lblForgnCstlid').show();
                $('#lblcrewid').show();
                $('#lblshipperid').show();
            }
            if (self.arrivalNotificationModel().IsGovtVessel() != 'N') {
                $("[name='IsGovernmentVessel']").css('display', 'none');
                $("[name='isreasonforvisittextspan']").css('display', 'none');
            }
            else {
            }



            var WorkflowInstanceID = 0;
            self.viewModelHelper.apiGet('api/WorkFlowTasks/' + ReferenceID + '/' + WorkflowInstanceID,
                   null,
                         function (result) {
                             ko.utils.arrayForEach(result, function (val) {
                                 var pendingtaskaction = new IPMSROOT.pendingTask();
                                 if (WorkflowInstanceId == val.WorkflowInstanceId) {
                                     pendingtaskaction.WorkflowInstanceId(val.WorkflowInstanceId);
                                     pendingtaskaction.EntityCode(val.EntityCode);
                                     pendingtaskaction.ReferenceID(val.ReferenceID);
                                     pendingtaskaction.TaskCode(val.WorkflowTaskCode);
                                     pendingtaskaction.APIUrl(val.APIUrl);
                                     pendingtaskaction.TaskName(val.TaskName);
                                     pendingtaskaction.TaskDescription(val.TaskDescription);
                                     pendingtaskaction.PreviousRemarks(val.PreviousRemarks);
                                     pendingtaskaction.HasRemarks(val.HasRemarks);
                                     pendingtaskaction.arrivalstatus(true);
                                     self.arrivalNotificationModel().pendingTasks.push(pendingtaskaction);
                                 }
                             });
                         }, null, null, true);

            var index = 0;
            HandleProgressBarAndActiveTab(index);

            if (self.arrivalNotificationModel().AnyDangerousGoodsonBoard() == "A") {
                self.IsDangerousGoods(true);
                self.isIMDGEnablechk(false);
                $("#rdYesDangerousGoods").attr('checked', 'checked');
            }
            else {
                self.IsDangerousGoods(false);
                $("#rdNoDangerousGoods").attr('checked', 'checked');
            }

            self.isClearenceEnable(false);
            $("#DraftDetailsList").attr("disable", true);
            var StartDateValue = $("#ETA").val();
            var myDatePicker = new Date(StartDateValue);
            var day = myDatePicker.getDate();
            var month = myDatePicker.getMonth();
            var year = myDatePicker.getFullYear();
            var Hour = myDatePicker.getHours() + 1;
            var Mnt = myDatePicker.getMinutes();
            $("#ETD").data('kendoDateTimePicker').min(moment(new Date(year, month, day, Hour, Mnt)).format(self.dateFormat.IPMSDateTimeFormatForModel()));
            self.isArrvalEnable(true);
            self.isPurposeDropdownEnable(false);
            self.isPHOEnable(false);
            self.isISPSEnable(true);
            self.isISPSDTLEnable(false);
            self.isIMDGEnable(false);
            self.isVisitReasonEnabled(true);
            self.isVisibleView(true);
            self.arrivalNotificationModel().EnableDisableAddNew(true);
            self.arrivalNotificationModel().EnableDisableAddNewIMDG(true);
            $("#LoadDischargeDate").attr("disable", true);
            var reasonSelect = $("#reasonforvisit").data("kendoMultiSelect");
            reasonSelect.enable(true);
            var shipperSelect = $("#ShipperReceiver").data("kendoMultiSelect");
            shipperSelect.enable(true);
            $("#ETA").data('kendoDateTimePicker').enable(true);
            $("#ETD").data('kendoDateTimePicker').enable(true);
            $("#PlanDateTimeOfBerth").data('kendoDateTimePicker').enable(true);
            $("#PlanDateTimeToStartCargo").data('kendoDateTimePicker').enable(true);
            $("#PlanDateTimeToCompleteCargo").data('kendoDateTimePicker').enable(true);
            $("#PlanDateTimeToVacateBerth").data('kendoDateTimePicker').enable(true);
            $("#PlannedDurationDate").data('kendoDatePicker').enable(true);
            $("#PlannedDurationToDate").data('kendoDatePicker').enable(true);
            for (var i = 0; i < arrivalNotification.ArrivaReasonArray().length; i++) {
                arrivalNotification.ReasonForVisit(arrivalNotification.ArrivaReasonArray()[i]);
                if (arrivalNotification.ReasonForVisit() == 'DRYD') {
                    self.DryDockDetailsVisible(true);
                    self.BullardPulltestEnable(false);
                    self.isPurposeDropdownEnable(false);
                }
                if (arrivalNotification.ReasonForVisit() == 'LABY') {
                    self.LayByVisble(true);
                    self.arrivalNotificationModel().layByVisble(true);
                    self.QuantitiesofCommoditiesEnable(false);
                    self.BullardPulltestEnable(false);
                    self.isPurposeDropdownEnable(false);
                    if (arrivalNotification.PlannedDurationDate() != null && arrivalNotification.PlannedDurationToDate() != null) {
                        var fromDate = kendo.parseDate(arrivalNotification.PlannedDurationDate(), self.dateFormat.IPMSDateFormat());
                        var toDate = kendo.parseDate(arrivalNotification.PlannedDurationToDate(), self.dateFormat.IPMSDateFormat());
                        if (toDate > fromDate) {
                            var days = (toDate - fromDate) / (60 * 60 * 24 * 1000);
                            self.arrivalNotificationModel().Daycnt(days);
                        }
                        else {

                            self.arrivalNotificationModel().Daycnt("0");
                        }
                    }

                }
                if (arrivalNotification.ReasonForVisit() == 'REPA') {
                    self.LayByVisble(true);
                    self.arrivalNotificationModel().layByVisble(true);
                    self.QuantitiesofCommoditiesEnable(false);
                    self.BullardPulltestEnable(false);
                    self.isPurposeDropdownEnable(false);
                    if (arrivalNotification.PlannedDurationDate() != null && arrivalNotification.PlannedDurationToDate() != null) {
                        var fromDate = kendo.parseDate(arrivalNotification.PlannedDurationDate(), self.dateFormat.IPMSDateFormat());
                        var toDate = kendo.parseDate(arrivalNotification.PlannedDurationToDate(), self.dateFormat.IPMSDateFormat());
                        if (toDate > fromDate) {
                            var days = (toDate - fromDate) / (60 * 60 * 24 * 1000);
                            self.arrivalNotificationModel().Daycnt(days);
                        }
                        else {

                            self.arrivalNotificationModel().Daycnt("0");
                        }
                    }
                }
                if (arrivalNotification.ReasonForVisit() == 'BUNK') {

                    self.BunkersVisible(true);
                    self.arrivalNotificationModel().bunkersVisible(true);
                    self.QuantitiesofCommoditiesEnable(false);
                    self.BullardPulltestEnable(false);
                    self.isPurposeDropdownEnable(false);
                }
                if (arrivalNotification.ReasonForVisit() == 'BPLT') {

                    self.BullardPulltestEnable(true);
                    self.QuantitiesofCommoditiesEnable(false);
                    self.isPurposeDropdownEnable(false);
                }

                if (arrivalNotification.ReasonForVisit() == 'DISC') {
                    self.PartOrFullDischargeEnable(true);
                    self.QuantitiesofCommoditiesEnable(true);
                    self.TotalQuantityEnable('Total Quantity on Board');
                    self.BullardPulltestEnable(false);
                    self.isPurposeDropdownEnable(false);
                    if (!(self.Vesseltypecomparision())) {
                        self.isreasonvisitcolumnVisible(true);
                        $("#ResonForvisitlable").html('Load Port:');
                        // $('#spanResonForvisitdropdown').text('');
                        //self.isspanResonForvisitdropdown(false);
                    }
                    else {
                        self.isreasonvisitcolumnVisible(true);
                        $("#ResonForvisitlable").html('Load/Discharge Port:');
                        //  $('#spanResonForvisitdropdown').text('');
                        //  self.isspanResonForvisitdropdown(false);
                    }
                }
                if (arrivalNotification.ReasonForVisit() == 'LOAD') {
                    self.isPurposeDropdownEnable(false);
                    self.QuantitiesofCommoditiesEnable(true);
                    self.BullardPulltestEnable(false);
                    if (!(self.Vesseltypecomparision())) {
                        self.isreasonvisitcolumnVisible(true);
                        $("#ResonForvisitlable").html('Discharge Port:');
                        //  $('#spanResonForvisitdropdown').text('');
                        // self.isspanResonForvisitdropdown(false);
                    }
                    else {
                        self.isreasonvisitcolumnVisible(true);

                        $("#ResonForvisitlable").html('Load/Discharge Port:');
                        //     $('#spanResonForvisitdropdown').text('');
                        //  self.isspanResonForvisitdropdown(false);
                    }
                }
                if (arrivalNotification.ReasonForVisit() == 'OTHR') {
                    self.isPurposeDropdownEnable(true);
                    self.QuantitiesofCommoditiesEnable(false);
                    self.BullardPulltestEnable(false);
                    self.isOtherRsonVisible(true);
                }
            }


            self.viewModelHelper.apiGet('api/ArrivalNotification/GetNotificationStatus', { vcn: arrivalNotification.VCN() },
               function (result) {

                   ko.utils.arrayMap(result, function (item) {
                       if (item.WEntityCode == 'ARVLNOT' && (item.WEntityStatus == 'NEW' || item.WEntityStatus == 'VRES' || item.WEntityStatus == 'ARES' || item.WEntityStatus == "UPDT")) {
                           self.isArrvalEnable(true);
                           self.isPurposeDropdownEnable(false);
                           self.isVisitReasonEnabled(true);
                           self.isArvValEnable(true);
                           reasonSelect.enable(true);
                           shipperSelect.enable(true);
                           self.arrivalNotificationModel().EnableDisableAddNew(true);
                           self.isIMDGEnable(true);
                           self.arrivalNotificationModel().EnableDisableAddNewIMDG(true);
                           self.isIMDGEnablechk(true);
                           self.isISPSEnable(true);

                           if (self.arrivalNotificationModel().AppliedForISPS() == "A") {
                               self.isISPSDTLEnable(true);
                           }
                           else { self.isISPSDTLEnable(false); }

                           if (arrivalNotification.Tidal() == 'A') {
                               self.tidildetailschanged(true);
                               $("#Tidaltxt").attr("disabled", false);
                               $("#Tidaltxt").prop('disabled', false);

                           }

                           if (arrivalNotification.DaylightRestriction() == 'A') {
                               $("#DaylightSpecifyReasontxt").attr("disabled", false);
                               $("#DaylightSpecifyReasontxt").prop('disabled', false);
                           }
                           if (arrivalNotification.ExceedPortLimitations() == 'Y') {
                               self.Exeedportlimitenable(true);
                           }
                           $("#ETA").data('kendoDateTimePicker').enable(true);
                           $("#ETD").data('kendoDateTimePicker').enable(true);
                           $("#PlanDateTimeOfBerth").data('kendoDateTimePicker').enable(true);
                           $("#PlanDateTimeToStartCargo").data('kendoDateTimePicker').enable(true);
                           $("#PlanDateTimeToCompleteCargo").data('kendoDateTimePicker').enable(true);
                           $("#PlanDateTimeToVacateBerth").data('kendoDateTimePicker').enable(true);
                           $("#PlannedDurationDate").data('kendoDatePicker').enable(true);
                           $("#PlannedDurationToDate").data('kendoDatePicker').enable(true);
                       }

                       if (item.WEntityCode == 'ARVLNOT' && (item.WEntityStatus == 'WFVE' || item.WEntityStatus == 'WFSA')) {
                           self.IMDGDisable(true);
                       }

                       if (item.WEntityCode == 'PHAN' && (item.WEntityStatus == 'NEW' || item.WEntityStatus == 'VRES' || item.WEntityStatus == 'ARES')) {
                           self.isPHOEnable(true);
                       }
                       if (item.WEntityCode == 'ISPSAN' && (item.WEntityStatus == 'NEW' || item.WEntityStatus == 'VRES' || item.WEntityStatus == 'ARES')) {

                           if (self.arrivalNotificationModel().AppliedForISPS() == 'I') {
                               self.isISPSEnable(true);
                               self.isISPSDTLEnable(false);
                               self.arrivalNotificationModel().ISPSReferenceNo('');
                               self.arrivalNotificationModel().AppliedDate('');
                               $("#IspsClearenceSpn").hide();
                               $("#ISPSReferenceNo").prop('disabled', true);
                               $("#AppliedDate").data('kendoDatePicker').enable(false);
                               //  $("#RefNoSpn").hide();
                           }
                           else {
                               self.isISPSEnable(false);
                               self.isISPSDTLEnable(true);
                               $("#IspsClearenceSpn").show();
                               $("#AppliedDate").attr("disable", false);
                               $("#ISPSReferenceNo").prop('disabled', false);
                               $("#AppliedDate").data('kendoDatePicker').enable(true);
                               //  $("#RefNoSpn").show();
                           }
                       }
                       if (item.WEntityCode == 'IMDGAN' && (item.WEntityStatus == 'NEW' || item.WEntityStatus == 'VRES' || item.WEntityStatus == 'ARES')) {
                           self.isIMDGEnablechk(true);
                           self.isIMDGEnable(true);
                           self.arrivalNotificationModel().EnableDisableAddNewIMDG(true);
                       }


                       if (item.WEntityCode == 'IMDGAN' && (item.WEntityStatus == 'VRES' || item.WEntityStatus == 'ARES')) {
                           self.isVisibleView(true);
                       }
                       if (arrivalNotification.AppliedForISPS() == "A") {

                           $("#IspsClearenceSpn").show();
                           $("#AppliedDate").attr("disable", true);
                           $("#ISPSReferenceNo").prop('disabled', true);
                           $("#AppliedDate").data('kendoDatePicker').enable(false);
                           // $("#RefNoSpn").show();
                       }
                       else {
                           $("#IspsClearenceSpn").hide();
                           $("#ISPSReferenceNo").prop('disabled', true);
                           $("#AppliedDate").data('kendoDatePicker').enable(false);
                           // $("#RefNoSpn").hide();
                       }
                       if (item.WEntityStatus == 'WFSA') {

                           self.IMDGDisable(true);
                           self.isPurposeDropdownEnable(false);
                           self.isVisitReasonEnabled(false);
                           self.isArvValEnable(true);
                           reasonSelect.enable(false);
                           self.isVisibleView(false);
                           self.isISPSDTLEnable(false)
                           shipperSelect.enable(false);
                           self.arrivalNotificationModel().EnableDisableAddNew(false);
                           self.isIMDGEnable(false);
                           self.arrivalNotificationModel().EnableDisableAddNewIMDG(false);
                           self.isIMDGEnablechk(false);
                           self.isISPSEnable(false);
                           self.isArrvalEnable(false);
                           $("#ETA").data('kendoDateTimePicker').enable(false);
                           $("#ETD").data('kendoDateTimePicker').enable(false);
                       }

                   })
               }, null, null, false);

            var arrivalReasons = self.arrivalNotificationModel().ArrivaReasonArray();
            var mySet = new Set(arrivalReasons);
            if (mySet.has("LOAD") && mySet.has("DISC")) {
                self.isPurposeDropdownEnable(true);
                for (var i = 0; i < self.arrivalNotificationModel().ArrivalCommodities().length; i++) {

                    if (self.arrivalNotificationModel().ArrivalCommodities()[i].Purpose() == "LOAD") {

                        document.getElementById("partfulldischarge" + i).disabled = true;
                    }
                }

            }
        }

        self.GearCrane = function () {
            if ($("#GearCrane").is(":checked")) {
                $('#GearedVisible').css('display', '');

                $("#GearDerrick").prop('checked', false);
                $('#GearDerrickVisible').css('display', 'none');
            }
        }

        self.GearDerrick = function () {
            if ($("#GearDerrick").is(":checked")) {
                $('#GearedVisible').css('display', 'none');
                $('#GearDerrickVisible').css('display', '');

                $("#GearCrane").prop('checked', false);

            }
        }

        //ArrivalNotification View mode
        self.viewArrivalNotificationNew = function (arrivalNotification) {

            self.viewModelHelper.apiGet('api/ArrivalNotification/GetArrivalNotificationNew',
             { vcn: arrivalNotification.VCN(), WorkflowInstanceId: 0 },
              function (result) {
                  self.arrivalNotificationList(ko.utils.arrayMap(result, function (item) {
                      return new IPMSRoot.ArrivalNotificationModel(item, self.arrivalNotificationReferenceData());
                  }));
                  self.viewArrivalNotification(self.arrivalNotificationList()[0]);
              });
            // self.GetVesselDetails();
            self.printView(true);

        }

        self.viewArrivalNotification = function (arrivalNotification) {

            self.IsAddMode(false);
            self.isDraftVisible(false);
            self.isVslEnabled(false);
            self.isEditEtavalEnable(false);
            self.isVisitReasonEnabled(false);
            self.isArvValEnable(false);
            self.isISPSEnable(false);
            self.isIMDGEnable(false);
            self.isspanVslValid(false);
            self.isspanEmpagent(false);

            if (arrivalNotification.VesselType() == "1515") {

                self.IsBargeVessel(true);                //$('#ChartererAgent').show();
            }
            self.Exeedportlimitenable(false);
            self.AdditionalTugRequired(false);
            self.SpecialNetureChanged(false);
            self.isVesselNameEnabled(false);
            self.IsAgentelblenable(false);
            var LastPortOfCall = $("#LastPortOfCall").data("kendoAutoComplete");
            LastPortOfCall.suggest(arrivalNotification.ViewLastPortOfCall());
            $('#LastPortOfCall').attr('disabled', 'disabled');
            //var result = self.arrivalNotificationReferenceData().PortDetails().filter(function (item) {
            //    return (item.PortCode() == arrivalNotification.LastPortOfCall());
            //});
            //if (result[0]) {

            //    arrivalNotification.ViewLastPortOfCall = result[0].PortName();
            //}


            var NextPortOfCall = $("#NextPortOfCall").data("kendoAutoComplete");
            $('#NextPortOfCall').attr('disabled', 'disabled');
            NextPortOfCall.suggest(arrivalNotification.ViewNextPortOfCall());

            var ResonForvisitdropdown = $("#ResonForvisitdropdown").data("kendoAutoComplete");
            $('#ResonForvisitdropdown').attr('disabled', 'disabled');
            ResonForvisitdropdown.suggest(arrivalNotification.ViewLoaddischargePort());
            //var NextPortOfCallResult = self.arrivalNotificationReferenceData().PortDetails().filter(function (item) {
            //    return (item.PortCode() == arrivalNotification.NextPortOfCall());
            //});

            //if (NextPortOfCallResult[0]) {

            //    arrivalNotification.ViewNextPortOfCall = NextPortOfCallResult[0].PortName();

            //}

            // $('#spanResonForvisitdropdown').text('');
            //   self.isspanResonForvisitdropdown(false);
            self.tidildetailschanged(false)
            self.isIMDGEnablechk(false);
            self.pakistaniCrewOnboard(false);
            self.AllNavigationalEquipmentOperational(false);
            self.PortAndStarboardAnchorsAreOperational(false);
            self.VesselCoveredunderPandIClub(false);
            self.ShoreMooringpatternSufficientlinesonBoard(false);
            self.ForwardandAfterWinchOperational(false);
            self.IsvesselfitinallrespectforsafeBerthing(false);
            self.CheckingDoyouintendtousewireRopewithouttailRopeForMooring(false);
            self.DaylightSpecifyReasonChanged(false);
            self.ArePropellersFullySubmergedinWater(true);
            self.arrivalNotificationModel().EnableDisableAddNew(false);
            self.arrivalNotificationModel().EnableDisableAddNewIMDG(false);
            if (arrivalNotification.VesselID() != "")
            { self.vesseldetailsvisable(true); }
            self.isDrftCmbEnabled(false);
            self.isspanEtaValid(false);
            self.isspanOptValid1(false);
            self.isspanOptValid2(false);
            self.isspanOptValid3(false);
            self.isspanOptValid4(false);
            self.isspanloadValid(false);
            self.isTOEnabled(false);
            self.isspanEtdValid(false);
            //   self.GetVesselDetails();
            if (self.vesseldetailsmodel().VesselType() != "V151" && self.vesseldetailsmodel().VesselType() != "V152" && self.vesseldetailsmodel().VesselType() != "V153") {
                self.isCargosplitVisible(false);
            }
            if (arrivalNotification.IsGovtVessel != 'N') {
                arrivalNotification.VslSrchOn = arrivalNotification.IsGovtVessel;
            }

            var values = self.VesseltypeCheck();
            $.each(values, function (i, val) {
                if (arrivalNotification.VesselType() == val.name) {
                    self.Vesseltypecomparision(true);
                }
            });

            var ReferenceID = arrivalNotification.VCN();
            //if (arrivalNotification.TerminalOperatorID() > 0) {
            //    self.viewModelHelper.apiGet('api/LoadTOBirths', { TOID: arrivalNotification.TerminalOperatorID() },
            //function (result1) {
            //    self.arrivalNotificationReferenceBirthData(new IPMSRoot.ArrivalNotificationReferenceBirthData(result1));
            //}, null, null, true);
            //}
            //else {
            //    $("#SpecTO").val('');
            //    self.viewModelHelper.apiGet('api/LoadTOBirths', { TOID: "0" },
            //   function (result1) {
            //       self.arrivalNotificationReferenceBirthData(new IPMSRoot.ArrivalNotificationReferenceBirthData(result1));
            //   }, null, null, true);

            //}

            //self.arrivalNotificationModel(arrivalNotification);

            if (arrivalNotification.TerminalOperatorID() > 0) {
                var autocomplete = $("#SpecTO").data("kendoAutoComplete");
                autocomplete.suggest(arrivalNotification.RegisteredName());
            }

            self.arrivalNotificationModel().EnableDisableAddNew(false);
            self.arrivalNotificationModel().EnableDisableAddNewIMDG(false);
            self.LinearChange(arrivalNotification);
            //BugID #4679,4681
            self.CargoSplitEventCargoGroup(arrivalNotification);
            self.arrivalNotificationModel(arrivalNotification);
            self.LinearChange(arrivalNotification);
            self.GetVesselDetails();
            if ((arrivalNotification.UserType() != "AGNT" && arrivalNotification.WFCode() != 'VRES') || (arrivalNotification.UserType() != "AGNT" && arrivalNotification.WFCode() != 'ARES')) {
                self.arrivalNotificationModel().pendingTasks.removeAll();

                var WorkflowInstanceID = 0;
                self.viewModelHelper.apiGet('api/WorkFlowTasks/' + ReferenceID + '/' + WorkflowInstanceID,
                       null,
                             function (result) {
                                 ko.utils.arrayForEach(result, function (val) {

                                     var pendingtaskaction = new IPMSROOT.pendingTask();
                                     if (WorkflowInstanceId == val.WorkflowInstanceId) {
                                         pendingtaskaction.WorkflowInstanceId(val.WorkflowInstanceId);
                                         pendingtaskaction.EntityCode(val.EntityCode);
                                         pendingtaskaction.ReferenceID(val.ReferenceID);
                                         pendingtaskaction.TaskCode(val.WorkflowTaskCode);
                                         pendingtaskaction.APIUrl(val.APIUrl);
                                         pendingtaskaction.TaskName(val.TaskName);
                                         pendingtaskaction.TaskDescription(val.TaskDescription);
                                         pendingtaskaction.PreviousRemarks(val.PreviousRemarks);
                                         pendingtaskaction.HasRemarks(val.HasRemarks);
                                         pendingtaskaction.arrivalstatus(true);
                                         self.arrivalNotificationModel().pendingTasks.push(pendingtaskaction);
                                     }
                                 });
                             });
            }
            else {
                self.arrivalNotificationModel().pendingTasks.removeAll();

                var WorkflowInstanceID = 0;
                self.viewModelHelper.apiGet('api/WorkFlowTasks/' + ReferenceID + '/' + WorkflowInstanceID,
                       null,
                             function (result) {
                                 ko.utils.arrayForEach(result, function (val) {

                                     var pendingtaskaction = new IPMSROOT.pendingTask();
                                     if (WorkflowInstanceId == val.WorkflowInstanceId) {
                                         pendingtaskaction.WorkflowInstanceId(val.WorkflowInstanceId);
                                         pendingtaskaction.EntityCode(val.EntityCode);
                                         pendingtaskaction.ReferenceID(val.ReferenceID);
                                         pendingtaskaction.TaskCode(val.WorkflowTaskCode);
                                         pendingtaskaction.APIUrl(val.APIUrl);
                                         pendingtaskaction.TaskName(val.TaskName);
                                         pendingtaskaction.TaskDescription(val.TaskDescription);
                                         pendingtaskaction.PreviousRemarks(val.PreviousRemarks);
                                         pendingtaskaction.HasRemarks(val.HasRemarks);
                                         pendingtaskaction.arrivalstatus(false);
                                         self.arrivalNotificationModel().pendingTasks.push(pendingtaskaction);
                                     }
                                 });
                             });
            }
            var index = 0;
            HandleProgressBarAndActiveTab(index);
            self.viewMode("Form");
            self.viewModeForTabs('notification1');
            self.LayByVisble(false);
            self.BunkersVisible(false);
            self.arrivalNotificationModel().bunkersVisible(false);
            self.arrivalNotificationModel().layByVisble(false);
            self.isOtherRsonVisible(false);

            for (var i = 0; i < arrivalNotification.ArrivaReasonArray().length; i++) {
                arrivalNotification.ReasonForVisit(arrivalNotification.ArrivaReasonArray()[i]);
                if (arrivalNotification.ReasonForVisit() == 'DRYD') {
                    self.DryDockDetailsVisible(true);
                    self.QuantitiesofCommoditiesEnable(false);
                    self.isPurposeDropdownEnable(false);
                    self.TotalQuantityEnable('Quantity ');
                }
                if (arrivalNotification.ReasonForVisit() == 'LABY' || arrivalNotification.ReasonForVisit() == 'REPA') {
                    self.LayByVisble(true);
                    self.arrivalNotificationModel().layByVisble(true);
                    self.QuantitiesofCommoditiesEnable(false);
                    self.isPurposeDropdownEnable(false);
                    self.TotalQuantityEnable('Quantity ');
                    if (arrivalNotification.PlannedDurationDate() != null && arrivalNotification.PlannedDurationToDate() != null) {
                        var fromDate = kendo.parseDate(arrivalNotification.PlannedDurationDate(), self.dateFormat.IPMSDateFormat());
                        var toDate = kendo.parseDate(arrivalNotification.PlannedDurationToDate(), self.dateFormat.IPMSDateFormat());
                        if (toDate > fromDate) {
                            var days = (toDate - fromDate) / (60 * 60 * 24 * 1000);
                            self.arrivalNotificationModel().Daycnt(days);
                        }
                        else {

                            self.arrivalNotificationModel().Daycnt("0");
                        }
                    }
                }
                if (arrivalNotification.ReasonForVisit() == 'BUNK') {
                    self.QuantitiesofCommoditiesEnable(false);
                    self.BunkersVisible(true);
                    self.arrivalNotificationModel().bunkersVisible(true);
                    self.isPurposeDropdownEnable(false);
                    self.TotalQuantityEnable('Quantity ');
                }
                if (arrivalNotification.ReasonForVisit() == 'BPLT') {

                    self.BullardPulltestEnable(true);
                    self.QuantitiesofCommoditiesEnable(false);
                    self.isPurposeDropdownEnable(false);
                    self.TotalQuantityEnable('Quantity ');
                }
                if (arrivalNotification.ReasonForVisit() == 'DISC') {
                    self.isPurposeDropdownEnable(false);
                    self.PartOrFullDischargeEnable(true);
                    self.QuantitiesofCommoditiesEnable(true);
                    self.TotalQuantityEnable('Total Quantity on Board');
                    if (!(self.Vesseltypecomparision())) {
                        self.isreasonvisitcolumnVisible(true);
                        $("#ResonForvisitlable").html('Load Port:');
                        //  $('#spanResonForvisitdropdown').text('');
                        //  self.isspanResonForvisitdropdown(false);
                    }
                    else {
                        self.isreasonvisitcolumnVisible(true);
                        $("#ResonForvisitlable").html('Load/Discharge Port :');
                        //   $('#spanResonForvisitdropdown').text('');
                        //   self.isspanResonForvisitdropdown(false);
                    }
                }
                if (arrivalNotification.ReasonForVisit() == 'LOAD') {
                    self.isPurposeDropdownEnable(false);
                    self.QuantitiesofCommoditiesEnable(true);
                    self.TotalQuantityEnable('Quantity ');
                    if (!(self.Vesseltypecomparision())) {
                        self.isreasonvisitcolumnVisible(true);
                        $("#ResonForvisitlable").html('Discharge Port:');
                        //   $('#spanResonForvisitdropdown').text('');
                        //  self.isspanResonForvisitdropdown(false);
                    }
                    else {
                        self.isreasonvisitcolumnVisible(true);
                        $("#ResonForvisitlable").html('Load/Discharge Port :');
                        //   $('#spanResonForvisitdropdown').text('');
                        //   self.isspanResonForvisitdropdown(false);
                    }
                }
                if (arrivalNotification.ReasonForVisit() == 'OTHR') {
                    self.QuantitiesofCommoditiesEnable(false);
                    self.isOtherRsonVisible(true);
                    self.isPurposeDropdownEnable(false);
                    self.TotalQuantityEnable('Quantity ');
                }
            }


            if (arrivalNotification.IsTerminalOperator() == 'A') {
                $("#IsTOStrSpn").show();
            }
            else {
                $("#IsTOStrSpn").hide();
            }

            $("#exemptionname").attr("disabled", true);

            if (arrivalNotification.AppliedForISPS() == "A") {
                $("#IspsClearenceSpn").show();
                $("#AppliedDate").attr("disable", true);
                $("#ISPSReferenceNo").prop('disabled', true);
                $("#AppliedDate").data('kendoDatePicker').enable(false);
                //   $("#RefNoSpn").show();
            }
            else {
                $("#IspsClearenceSpn").hide();
                $("#ISPSReferenceNo").prop('disabled', true);
                $("#AppliedDate").data('kendoDatePicker').enable(false);
                //  $("#RefNoSpn").hide();
            }
            if (arrivalNotification.IswireRopewhttailRopeMring() == "N")
            { self.CheckingDoyouintendtousewireRopewithouttailRopeForMooring(false); }
            else { self.CheckingDoyouintendtousewireRopewithouttailRopeForMooring(false); }

            if (arrivalNotification.IswireRopewhttailRopeMring() == "Y")
            { self.WithTailRoping(true); }
            else { self.WithTailRoping(false); }
            if (arrivalNotification.IsTailRoping() == "N")
            { self.CheckTailRope(false); }
            else { self.CheckTailRope(false); }

            self.isSubmitVisible(false);
            self.isSaveDraftVisible(false);
            self.isViewMode(true);
            self.isSaveVisible(false);
            self.isUpdateVisible(false);
            self.isGoBackVisible(false);
            self.isGoNextVisible(true);
            // $("#CellNo").kendoMaskedTextBox({ mask: "(000)000-000-0000" });

            self.isReset(false);
            self.shouldShowDivAV(true);
            self.isClearenceEnable(false);

            self.arrivalNotificationModel().ViewModeForTabs('notification1');
            if (self.arrivalNotificationModel().AnyDangerousGoodsonBoard() == "A") {
                self.IsDangerousGoods(true);
                $("#rdYesDangerousGoods").attr('checked', 'checked');
            }
            else {
                self.IsDangerousGoods(false);
                $("#rdNoDangerousGoods").attr('checked', 'checked');
            }

            self.isVisibleView(false);
        };

        ////bharath code for edit cargo split
        MultiselectEvent1 = function (arrivalNotification) {
            var cargo = arrivalNotification.CargoQuantitiesSplits1();

            var valType = "";
            var shipperListArray = [];
            ko.utils.arrayForEach(self.ShipperListForCargo1(), function (item12) {
                shipperListArray.push(item12.AgentID);
            });
            if (arrivalNotification.ShipperReceiverArray().length == 0) {
                self.ShipperListForCargo1([]);
            } else {
                ko.utils.arrayFirst(arrivalNotification.ShipperReceiverArray(), function (item1) {
                    var shipArray = new IPMSROOT.ArrivalNotificationModel();
                    if (self.ShipperListForCargo1().length == 0) {
                        self.ShipperListForCargo1([]);
                        var match = ko.utils.arrayFirst(arrivalNotification.ShipperReceiverArray(), function (item) {
                            ko.utils.arrayFirst(self.arrivalNotificationReferenceData().ShipperseceiveDetails(), function (item1) {
                                var shipArray = new IPMSROOT.ArrivalNotificationModel();
                                if (item1.AgentID() == item) {
                                    shipArray.AgentID = item;
                                    shipArray.RegisteredName = item1.RegisteredName();
                                    self.ShipperListForCargo1.push(shipArray);
                                }
                            });
                        });
                    } else {
                        if (shipperListArray.indexOf(item1) == -1) {

                            ko.utils.arrayFirst(self.arrivalNotificationReferenceData().ShipperseceiveDetails(), function (item2) {
                                var shipArray = new IPMSROOT.ArrivalNotificationModel();
                                if (item2.AgentID() == item1) {
                                    shipArray.AgentID = item1;
                                    shipArray.RegisteredName = item2.RegisteredName();
                                    self.ShipperListForCargo1.push(shipArray);
                                }
                            });
                        }
                    }
                });

                for (var i = self.ShipperListForCargo1().length - 1; i > -1; i--) {
                    if (arrivalNotification.ShipperReceiverArray().indexOf(self.ShipperListForCargo1()[i].AgentID) == -1) {
                        for (j = 0; j < self.arrivalNotificationModel().CargoQuantitiesSplits1().length; j++) {
                            if (self.arrivalNotificationModel().CargoQuantitiesSplits1()[j].ShipperReceiver() == self.ShipperListForCargo1()[i].AgentID) {
                                self.arrivalNotificationModel().CargoQuantitiesSplits1()[j].ShipperReceiver("");
                            }
                        };
                        self.ShipperListForCargo1.remove(self.ShipperListForCargo1()[i]);

                    }
                }
            }
            arrivalNotification.CargoQuantitiesSplits1(cargo);
        }

        /////mahesh code for split//
        MultiselectEvent = function (arrivalNotification) {
            //var valType = "";
            //ko.utils.arrayFirst(arrivalNotification.ShipperReceiverArray(), function (item1) {
            //    var shipArray = new IPMSROOT.ArrivalNotificationModel();
            //    ko.utils.arrayFirst(self.ShipperListForCargo(), function (item12) {
            //        if (item1 == item12.AgentID) {
            //            return valType;
            //        }
            //        else {
            //            self.ShipperListForCargo([]);
            //            var match = ko.utils.arrayFirst(arrivalNotification.ShipperReceiverArray(), function (item) {
            //                ko.utils.arrayFirst(self.arrivalNotificationReferenceData().ShipperseceiveDetails(), function (item1) {
            //                    var shipArray = new IPMSROOT.ArrivalNotificationModel();
            //                    if (item1.AgentID() == item) {
            //                        shipArray.AgentID = item;
            //                        shipArray.RegisteredName = item1.RegisteredName();
            //                        self.ShipperListForCargo.push(shipArray);
            //                    }
            //                });
            //            });
            //        }
            //    });
            //});


            ///////////////////bharath code
            var cargo = arrivalNotification.CargoQuantitiesSplits();

            var valType = "";
            var shipperListArray = [];
            ko.utils.arrayForEach(self.ShipperListForCargo(), function (item12) {
                shipperListArray.push(item12.AgentID);
            });
            if (arrivalNotification.ShipperReceiverArray().length == 0) {
                self.ShipperListForCargo([]);
            } else {
                ko.utils.arrayFirst(arrivalNotification.ShipperReceiverArray(), function (item1) {
                    var shipArray = new IPMSROOT.ArrivalNotificationModel();
                    if (self.ShipperListForCargo().length == 0) {
                        self.ShipperListForCargo([]);
                        var match = ko.utils.arrayFirst(arrivalNotification.ShipperReceiverArray(), function (item) {
                            ko.utils.arrayFirst(self.arrivalNotificationReferenceData().ShipperseceiveDetails(), function (item1) {
                                var shipArray = new IPMSROOT.ArrivalNotificationModel();
                                if (item1.AgentID() == item) {
                                    shipArray.AgentID = item;
                                    shipArray.RegisteredName = item1.RegisteredName();
                                    self.ShipperListForCargo.push(shipArray);
                                }
                            });
                        });
                    } else {
                        if (shipperListArray.indexOf(item1) == -1) {

                            ko.utils.arrayFirst(self.arrivalNotificationReferenceData().ShipperseceiveDetails(), function (item2) {
                                var shipArray = new IPMSROOT.ArrivalNotificationModel();
                                if (item2.AgentID() == item1) {
                                    shipArray.AgentID = item1;
                                    shipArray.RegisteredName = item2.RegisteredName();
                                    self.ShipperListForCargo.push(shipArray);
                                }
                            });
                        }
                    }
                });

                for (var i = self.ShipperListForCargo().length - 1; i > -1; i--) {
                    if (arrivalNotification.ShipperReceiverArray().indexOf(self.ShipperListForCargo()[i].AgentID) == -1) {
                        for (j = 0; j < self.arrivalNotificationModel().CargoQuantitiesSplits().length; j++) {
                            if (self.arrivalNotificationModel().CargoQuantitiesSplits()[j].ShipperReceiver() == self.ShipperListForCargo()[i].AgentID) {
                                self.arrivalNotificationModel().CargoQuantitiesSplits()[j].ShipperReceiver("");
                            }
                        };
                        self.ShipperListForCargo.remove(self.ShipperListForCargo()[i]);

                    }
                }
            }
            arrivalNotification.CargoQuantitiesSplits(cargo);
        }
        SplitsDataBinding = function (arrivalNotification) {

            if (self.CargoGroupListArray().length > 0) {
                ko.utils.arrayFirst(arrivalNotification.ArrivalCommodities(), function (item1) {

                    var cargolst = self.CargoGroupListArray().filter(function (x) { return x.CargoTypecode === item1.CargoType(); });
                    if (cargolst.length == 0) {
                        var cargoArray = new IPMSROOT.CargoTypeInfo();
                        var ctype = item1.CargoTypes().filter(function (y) { return y.CargoTypecode() === item1.CargoType(); });

                        if (ctype.length > 0) {
                            cargoArray.CargoTypecode = ctype[0].CargoTypecode();
                            cargoArray.Cargoname = ctype[0].Cargoname();
                            self.CargoGroupListArray.push(cargoArray);
                        }


                    }

                });


                if (self.ShipperListForCargo().length == 0) {
                    var match = ko.utils.arrayFirst(arrivalNotification.ShipperReceiverArray(), function (item) {
                        ko.utils.arrayFirst(self.arrivalNotificationReferenceData().ShipperseceiveDetails(), function (item1) {
                            var shipArray = new IPMSROOT.ArrivalNotificationModel();
                            if (item1.AgentID() == item) {
                                shipArray.AgentID = item;
                                shipArray.RegisteredName = item1.RegisteredName();
                                self.ShipperListForCargo.push(shipArray);
                            }
                        });
                    });
                }
            }
            else {
                ko.utils.arrayFirst(arrivalNotification.ArrivalCommodities(), function (item1) {
                    var cargoArray = new IPMSROOT.CargoTypeInfo();
                    ko.utils.arrayFirst(item1.CargoTypes(), function (item2) {
                        if (item1.CargoType() == item2.CargoTypecode()) {
                            cargoArray.CargoTypecode = item2.CargoTypecode();
                            cargoArray.Cargoname = item2.Cargoname();
                            self.CargoGroupListArray.push(cargoArray);
                        }
                    });
                });
                self.ShipperListForCargo.removeAll();
                var match = ko.utils.arrayFirst(arrivalNotification.ShipperReceiverArray(), function (item) {
                    ko.utils.arrayFirst(self.arrivalNotificationReferenceData().ShipperseceiveDetails(), function (item1) {
                        var shipArray = new IPMSROOT.ArrivalNotificationModel();
                        if (item1.AgentID() == item) {
                            shipArray.AgentID = item;
                            shipArray.RegisteredName = item1.RegisteredName();
                            self.ShipperListForCargo.push(shipArray);
                        }
                    });
                });
            }
            var cargosplit = new IPMSROOT.CargoQtySplitInfo(undefined);
            self.arrivalNotificationModel().CargoQuantitiesSplits.push(cargosplit);
        }

        SplitsDataBinding1 = function (arrivalNotification) {

            self.CargoGroupListArray1.removeAll();
            ko.utils.arrayFirst(arrivalNotification.ArrivalCommodities(), function (item1) {
                var cargoArray = new IPMSROOT.CargoTypeInfo();
                ko.utils.arrayFirst(item1.CargoTypes(), function (item2) {
                    if (item1.CargoType() == item2.CargoTypecode()) {
                        cargoArray.CargoTypecode = item2.CargoTypecode();
                        cargoArray.Cargoname = item2.Cargoname();
                        self.CargoGroupListArray1.push(cargoArray);
                    }
                });
            });
            self.ShipperListForCargo1.removeAll();
            var match = ko.utils.arrayFirst(arrivalNotification.ShipperReceiverArray(), function (item) {
                ko.utils.arrayFirst(self.arrivalNotificationReferenceData().ShipperseceiveDetails(), function (item1) {
                    var shipArray = new IPMSROOT.ArrivalNotificationModel();
                    if (item1.AgentID() == item) {
                        shipArray.AgentID = item;
                        shipArray.RegisteredName = item1.RegisteredName();
                        self.ShipperListForCargo1.push(shipArray);
                    }
                });
            });
            var cargosplit = new IPMSROOT.CargoQtySplitInfo(undefined);
            self.arrivalNotificationModel().CargoQuantitiesSplits1.push(cargosplit);
        }

        SplitsDataBinding3 = function (arrivalNotification) {

            if (self.CargoGroupListArray1().length > 0) {
                ko.utils.arrayFirst(arrivalNotification.ArrivalCommodities(), function (item1) {

                    var cargolst = self.CargoGroupListArray1().filter(function (x) { return x.CargoTypecode === item1.CargoType(); });
                    if (cargolst.length == 0) {
                        var cargoArray = new IPMSROOT.CargoTypeInfo();
                        var ctype = item1.CargoTypes().filter(function (y) { return y.CargoTypecode() === item1.CargoType(); });

                        if (ctype.length > 0) {
                            cargoArray.CargoTypecode = ctype[0].CargoTypecode();
                            cargoArray.Cargoname = ctype[0].Cargoname();
                            self.CargoGroupListArray1.push(cargoArray);
                        }


                    }

                });
                if (self.ShipperListForCargo1().length == 0) {
                    var match = ko.utils.arrayFirst(arrivalNotification.ShipperReceiverArray(), function (item) {
                        ko.utils.arrayFirst(self.arrivalNotificationReferenceData().ShipperseceiveDetails(), function (item1) {
                            var shipArray = new IPMSROOT.ArrivalNotificationModel();
                            if (item1.AgentID() == item) {
                                shipArray.AgentID = item;
                                shipArray.RegisteredName = item1.RegisteredName();
                                self.ShipperListForCargo1.push(shipArray);
                            }
                        });
                    });
                }
            }
            else {
                ko.utils.arrayFirst(arrivalNotification.ArrivalCommodities(), function (item1) {
                    var cargoArray = new IPMSROOT.CargoTypeInfo();
                    ko.utils.arrayFirst(item1.CargoTypes(), function (item2) {
                        if (item1.CargoType() == item2.CargoTypecode()) {
                            cargoArray.CargoTypecode = item2.CargoTypecode();
                            cargoArray.Cargoname = item2.Cargoname();
                            self.CargoGroupListArray1.push(cargoArray);
                        }
                    });
                });
                self.ShipperListForCargo1.removeAll();
                var match = ko.utils.arrayFirst(arrivalNotification.ShipperReceiverArray(), function (item) {
                    ko.utils.arrayFirst(self.arrivalNotificationReferenceData().ShipperseceiveDetails(), function (item1) {
                        var shipArray = new IPMSROOT.ArrivalNotificationModel();
                        if (item1.AgentID() == item) {
                            shipArray.AgentID = item;
                            shipArray.RegisteredName = item1.RegisteredName();
                            self.ShipperListForCargo1.push(shipArray);
                        }
                    });
                });
            }
            var cargosplit = new IPMSROOT.CargoQtySplitInfo(undefined);
            self.arrivalNotificationModel().CargoQuantitiesSplits1.push(cargosplit);
        }

        self.CargoSplitEventCargoGroup = function (arrivalNotification) {
            remainTotal = 0;
            var err = "Y";
            //ko.utils.arrayForEach(arrivalNotification.CargoQuantitiesSplits(), function (CargoChk) {
            //    if (CargoChk.CargoTypecode() == "" || CargoChk.CargoTypecode() == undefined || CargoChk.ShipperReceiver() == "" || CargoChk.ShipperReceiver() == undefined || CargoChk.CargoQuantity() == "" || CargoChk.CargoQuantity() == undefined) {
            //        toastr.warning("Please Enter Selected Cargo Split Details", "Voyage Registration");
            //        err = "N";
            //    }
            //});


            if (err == "Y") {
                if (arrivalNotification.VCN() == "" && arrivalNotification.AgentID() == "") {
                    SplitsDataBinding(self.arrivalNotificationModel());
                }
                else {
                    SplitsDataBinding(arrivalNotification);
                }
            }
        }

        self.CargoSplitEventCargoGroup1 = function (arrivalNotification) {
            remainTotal = 0;
            var err = "Y";
            //ko.utils.arrayForEach(arrivalNotification.CargoQuantitiesSplits1(), function (CargoChk) {
            //    if (CargoChk.CargoTypecode() == "" || CargoChk.CargoTypecode() == undefined || CargoChk.ShipperReceiver() == "" || CargoChk.ShipperReceiver() == undefined || CargoChk.CargoQuantity() == "" || CargoChk.CargoQuantity() == undefined) {
            //        toastr.warning("Please Enter Selected Cargo Split Details", "Voyage Registration");
            //        err = "N";
            //    }
            //});


            if (err == "Y") {
                if (arrivalNotification.VCN() == "" && arrivalNotification.AgentID() == "") {
                    SplitsDataBinding1(self.arrivalNotificationModel());
                }
                else {
                    SplitsDataBinding1(arrivalNotification);
                }
            }
        }



        self.CargoSplitEventCargoGroup3 = function (arrivalNotification) {
            remainTotal = 0;
            var err = "Y";
            //ko.utils.arrayForEach(arrivalNotification.CargoQuantitiesSplits1(), function (CargoChk) {
            //    if (CargoChk.CargoTypecode() == "" || CargoChk.CargoTypecode() == undefined || CargoChk.ShipperReceiver() == "" || CargoChk.ShipperReceiver() == undefined || CargoChk.CargoQuantity() == "" || CargoChk.CargoQuantity() == undefined) {
            //        toastr.warning("Please Enter Selected Cargo Split Details", "Voyage Registration");
            //        err = "N";
            //    }
            //});


            if (err == "Y") {
                if (arrivalNotification.VCN() == "" && arrivalNotification.AgentID() == "") {
                    SplitsDataBinding3(self.arrivalNotificationModel());
                }
                else {
                    SplitsDataBinding3(arrivalNotification);
                }
            }
        }



        self.SplitsDataBinding2 = function (arrivalNotification) {
            var CargoList = [];
            var CommodityCargos = [];
            ko.utils.arrayForEach(self.CargoGroupListArray(), function (cargo) {
                CargoList.push(cargo.CargoTypecode);
            });

            ko.utils.arrayForEach(self.arrivalNotificationModel().ArrivalCommodities(), function (commodity) {
                CommodityCargos.push(commodity.CargoType());
            });
            for (var i = 0, j = CargoList.length; i < j; i++) {
                if (CommodityCargos.indexOf(CargoList[i]) > -1) {
                } else {
                    for (var k = self.arrivalNotificationModel().CargoQuantitiesSplits().length - 1; k > -1; k--) {
                        if (self.arrivalNotificationModel().CargoQuantitiesSplits()[k].CargoTypecode() != undefined && self.arrivalNotificationModel().CargoQuantitiesSplits()[k].CargoTypecode() == CargoList[i]) {
                            self.arrivalNotificationModel().CargoQuantitiesSplits.remove(self.arrivalNotificationModel().CargoQuantitiesSplits()[k]);
                        }
                    }
                    for (var k = self.CargoGroupListArray().length - 1; k > -1; k--) {
                        if (self.CargoGroupListArray()[k].CargoTypecode != undefined && self.CargoGroupListArray()[k].CargoTypecode == CargoList[i]) {
                            self.CargoGroupListArray.remove(self.CargoGroupListArray()[k]);
                        }
                    }
                }

                if (self.CargoGroupListArray().length > 0) {
                    ko.utils.arrayFirst(arrivalNotification.ArrivalCommodities(), function (item1) {

                        var cargolst = self.CargoGroupListArray().filter(function (x) { return x.CargoTypecode === item1.CargoType(); });
                        if (cargolst.length == 0) {
                            var cargoArray = new IPMSROOT.CargoTypeInfo();
                            var ctype = item1.CargoTypes().filter(function (y) { return y.CargoTypecode() === item1.CargoType(); });

                            if (ctype.length > 0) {
                                cargoArray.CargoTypecode = ctype[0].CargoTypecode();
                                cargoArray.Cargoname = ctype[0].Cargoname();
                                self.CargoGroupListArray.push(cargoArray);
                            }


                        }

                    });
                }
                else {
                    ko.utils.arrayFirst(arrivalNotification.ArrivalCommodities(), function (item1) {
                        var cargoArray = new IPMSROOT.CargoTypeInfo();
                        ko.utils.arrayFirst(item1.CargoTypes(), function (item2) {
                            if (item1.CargoType() == item2.CargoTypecode()) {
                                cargoArray.CargoTypecode = item2.CargoTypecode();
                                cargoArray.Cargoname = item2.Cargoname();
                                self.CargoGroupListArray.push(cargoArray);
                            }
                        });
                    });
                }
            }
        }

        self.CargoSplitEventList = function (arrivalNotification) {
            if (self.arrivalNotificationModel().ArrivalCommodities().length > 0) {
                self.SplitsDataBinding2(self.arrivalNotificationModel());
            }
        }

        selVal = function (val) {
            var arvlModel = self.arrivalNotificationModel();
            var tot = 0;
            var qty = 0;
            var qtyVal = 0;

            ko.utils.arrayFirst(arvlModel.CargoQuantitiesSplits(), function (item12) {
                if (item12.CargoTypecode() == val.CargoTypecode()) {
                    tot = tot + parseFloat(parseFloat(item12.CargoQuantity()));
                }

            });

            ko.utils.arrayFirst(arvlModel.ArrivalCommodities(), function (item1) {
                if (item1.CargoType() == val.CargoTypecode()) {
                    var multi = $("#reasonforvisit").data("kendoMultiSelect");
                    var reason = new Set(arvlModel.ArrivaReasonArray());
                    if (reason.has("DISC") && item1.FullpartDischarge() == "P") {
                        qty = parseFloat(item1.Quantity());
                    }
                    else {
                        qty = parseFloat(item1.QtyOnboard());
                    }
                }

            });


            remainTotal = qty - tot;
        }

        ChangeQtyVal = function (e) {

            if (e.value > remainTotal) {
                toastr.warning("Sum of Quantity Should Be Less than the Original Quantity Of Selected Commodity");
                e.value = "";
                return;
            }
        }


        //bharath remove cargo section grid from cargo edit
        self.removeCargoSplits1 = function (arrivalNotificationData) {
            $.confirm({
                'title': 'Voyage Registration',
                'message': 'Do you want to Delete Cargo Quantities Information Details ? ',
                'buttons': {
                    'Yes': {
                        'class': 'green',
                        'action': function () {
                            self.arrivalNotificationModel().CargoQuantitiesSplits1.remove(arrivalNotificationData);
                        }
                    },
                    'No': {
                        'class': 'blue',
                        'action': function () {
                            firstSave = true;
                            self.viewModelHelper.isLoading(false);
                        }
                    }
                }
            });
        }

        // Bhoji Remove Cargo Secon Grid
        self.removeCargoSplits = function (arrivalNotificationData) {
            $.confirm({
                'title': 'Voyage Registration',
                'message': 'Do you want to Delete Cargo Quantities Information Details ? ',
                'buttons': {
                    'Yes': {
                        'class': 'green',
                        'action': function () {
                            self.arrivalNotificationModel().CargoQuantitiesSplits.remove(arrivalNotificationData);
                        }
                    },
                    'No': {
                        'class': 'blue',
                        'action': function () {
                            firstSave = true;
                            self.viewModelHelper.isLoading(false);
                        }
                    }
                }
            });
        }

        CargoSplitVisible = function (e) {

            //if (self.vesseldetailsmodel().VesselType() != 'V151' && self.vesseldetailsmodel().VesselType() != 'V152' && self.vesseldetailsmodel().VesselType() != 'V153') {
            //    self.isCargosplitVisible(true);
            //}
        }

        ///////////////////


        //Arrival Draft details 
        DraftDetailsListChange = function () {
            firstSave = true;
            var vcnVal = $("#DraftDetailsList").val();
            if (vcnVal != null && vcnVal != '') {

                self.viewModelHelper.apiGet('api/LoadTOBirths', { TOID: "0" },
                          function (result1) {
                              self.arrivalNotificationReferenceBirthData(new IPMSRoot.ArrivalNotificationReferenceBirthData(result1));
                          }, null, null, false);

                self.viewModelHelper.apiGet('api/ArrivalNotificationByVCN/',
                     { vcn: vcnVal },
                      function (result) {
                          self.arrivalNotificationModel(new IPMSRoot.ArrivalNotificationModel(result, self.arrivalNotificationReferenceData()));
                          self.isReset(true);
                          self.isVslEnabled(false);
                          self.isVisitReasonEnabled(true);
                          self.isDrftCmbEnabled(true);
                          self.viewModeForTabs('notification1');
                          self.isspanVslValid(false);
                          self.isspanEmpagent(false);



                          if (self.arrivalNotificationModel().TerminalOperatorID() > 0) {
                              var autocomplete = $("#SpecTO").data("kendoAutoComplete");
                              autocomplete.suggest(self.arrivalNotificationModel().RegisteredName());
                              self.viewModelHelper.apiGet('api/LoadTOBirths', { TOID: self.arrivalNotificationModel().TerminalOperatorID() },
                                      function (result1) {
                                          self.arrivalNotificationReferenceBirthData(new IPMSRoot.ArrivalNotificationReferenceBirthData(result1));
                                      }, null, null, false);
                          }

                          self.LayByVisble(false);
                          self.BunkersVisible(false);
                          self.arrivalNotificationModel().bunkersVisible(false);
                          self.arrivalNotificationModel().layByVisble(false);
                          self.isOtherRsonVisible(false);

                          for (var i = 0; i < self.arrivalNotificationModel().ArrivaReasonArray().length; i++) {
                              self.arrivalNotificationModel().ReasonForVisit(self.arrivalNotificationModel().ArrivaReasonArray()[i]);
                              if (self.arrivalNotificationModel().ReasonForVisit() == 'DRYD') {
                                  self.DryDockDetailsVisible(true);
                              }
                              if (self.arrivalNotificationModel().ReasonForVisit() == 'LABY' || self.arrivalNotificationModel().ReasonForVisit() == 'REPA') {
                                  self.LayByVisble(true);
                                  self.arrivalNotificationModel().layByVisble(true);
                              }
                              else if (self.arrivalNotificationModel().ReasonForVisit() == 'BUNK') {
                                  self.BunkersVisible(true);
                                  self.arrivalNotificationModel().bunkersVisible(true);
                              }
                              else if (self.arrivalNotificationModel().ReasonForVisit() == 'OTHR') {
                                  self.isOtherRsonVisible(true);
                              }
                          }
                          self.isSubmitVisible(false);
                          self.isSaveDraftVisible(true);
                          self.isViewMode(false);
                          self.isSaveVisible(false);
                          self.isUpdateVisible(true);
                          self.isGoBackVisible(false);
                          self.isGoNextVisible(false);

                          self.arrivalNotificationModel().ViewModeForTabs('notification1');
                          if (self.arrivalNotificationModel().AppliedForISPS() == 'A') {
                              $("#IspsClearenceSpn").show();
                              // $("#RefNoSpn").show();
                          }
                          else {
                              $("#IspsClearenceSpn").hide();
                              //   $("#RefNoSpn").hide();
                          }


                          var index = 0;
                          HandleProgressBarAndActiveTab(index);

                          if (self.arrivalNotificationModel().AnyDangerousGoodsonBoard() == "A") {
                              self.IsDangerousGoods(true);
                              $("#rdYesDangerousGoods").attr('checked', 'checked');
                          }
                          else {
                              self.IsDangerousGoods(false);
                              $("#rdNoDangerousGoods").attr('checked', 'checked');
                          }

                          self.isClearenceEnable(false);
                          if (self.arrivalNotificationModel().AppliedForISPS() == "A") {
                              $("#IspsClearenceSpn").show();
                              $("#AppliedDate").attr("disable", false);
                              $("#ISPSReferenceNo").prop('disabled', false);
                              $("#AppliedDate").data('kendoDatePicker').enable(true);
                              //   $("#RefNoSpn").show();
                          }
                          else {
                              self.arrivalNotificationModel().ISPSReferenceNo('');
                              self.arrivalNotificationModel().AppliedDate('');
                              $("#IspsClearenceSpn").hide();
                              $("#ISPSReferenceNo").prop('disabled', true);
                              $("#AppliedDate").data('kendoDatePicker').enable(false);
                              //   $("#RefNoSpn").hide();
                          }
                          if (self.arrivalNotificationModel().IsTerminalOperator() == 'A') {
                              $("#IsTOStrSpn").show();
                              self.isTOEnabled(true);
                          }
                          else {
                              $("#IsTOStrSpn").hide();
                              self.isTOEnabled(false);
                          }

                          self.arrivalNotificationModel().DraftKey(vcnVal);
                          $("#DraftDetailsList").val(vcnVal);
                          var StartDateValue = $("#ETA").val();
                          var myDatePicker = new Date(StartDateValue);
                          var day = myDatePicker.getDate();
                          var month = myDatePicker.getMonth();
                          var year = myDatePicker.getFullYear();
                          var Hour = myDatePicker.getHours() + 1;
                          var Mnt = myDatePicker.getMinutes();
                          $("#ETD").data('kendoDateTimePicker').min(new Date(year, month, day, Hour, Mnt));
                      });
            }
            else {
                self.addArrivalNotification();
            }
        }

        //this method is  fires when reset button pressed to reset the data that present in intail stage
        self.ResetArrivalNotification = function (arrivalNotification) {
            firstSave = true;
            self.ismultiplepfileToUpload = ko.observable(false);
            self.isspanVslValid(false);
            self.isspanEmpagent(false);


            self.isspanEtaValid(false);
            self.isspanOptValid1(false);
            self.isspanOptValid2(false);
            self.isspanOptValid3(false);
            self.isspanOptValid4(false);
            self.isspanloadValid(false);
            self.isspanEtdValid(false);
            self.vesseldetailsmodel(new IPMSROOT.VesseldetailsModel(undefined));
            var notify = self.viewModeForTabs();

            //if (arrivalNotification.TerminalOperatorID() > 0) {
            //    var autocomplete = $("#SpecTO").data("kendoAutoComplete");
            //    autocomplete.suggest(arrivalNotification.RegisteredName());
            //    self.viewModelHelper.apiGet('api/LoadTOBirths', { TOID: arrivalNotification.TerminalOperatorID() },
            //function (result1) {
            //    self.arrivalNotificationReferenceBirthData(new IPMSRoot.ArrivalNotificationReferenceBirthData(result1));
            //}, null, null, false);
            //}
            //else {
            //   // $("#SpecTO").val('');
            //   // self.viewModelHelper.apiGet('api/LoadTOBirths', { TOID: "0" },
            //   //function (result1) {
            //   //    self.arrivalNotificationReferenceBirthData(new IPMSRoot.ArrivalNotificationReferenceBirthData(result1));
            //   //}, null, null, false);

            //}

            self.isClearenceEnable(false);

            $('#selUploadDocs').val('');
            self.viewModeForTabs(notify);
            self.arrivalNotificationModel().ViewModeForTabs(notify);
            self.isViewMode(false);

            if (self.IsAddMode()) {
                self.isCargosplitVisible(false);
                self.LayByVisble(false);
                self.BunkersVisible(false);
                self.arrivalNotificationModel().bunkersVisible(false);
                self.arrivalNotificationModel().layByVisble(false);
                self.isOtherRsonVisible(false);
                self.isSaveVisible(true);
                self.isUpdateVisible(false);
                $("#txtVessels").val('aa');
                self.arrivalNotificationModel().reset();
                $("#ExemptionSpn").hide();
                $("#IsTOStrSpn").hide();
                $("#txtVessels").val('');
                self.isSaveDraftVisible(true);
                self.arrivalNotificationModel().ArrivalIMDGTankers.removeAll();
                self.arrivalNotificationModel().IMDGInformations.removeAll();
                self.arrivalNotificationModel().ArrivalCommodities.removeAll();
                self.arrivalNotificationModel().ArrivalDocuments.removeAll();

                self.arrivalNotificationModel().ISPSReferenceNo('');
                self.arrivalNotificationModel().AppliedDate('');
                $("#IspsClearenceSpn").hide();
                $("#ISPSReferenceNo").prop('disabled', true);
                $("#AppliedDate").data('kendoDatePicker').enable(false);
                //   $("#RefNoSpn").hide();
                self.WithTailRoping(false);
                self.CheckTailRope(false);

            }
            else {
                self.arrivalNotificationModel().reset();
                self.editArrivalNotificationNew(arrivalNotification);
            }
            self.viewModeForTabs('notification1');
            var index = 0;
            HandleProgressBarAndActiveTab(index);
            self.isGoNextVisible(false);

        }

        //this method is  fires when Cancel button is pressed and allfields data is cleared  and redirected to List form
        self.CancelArrivalNotification = function (arrivalNotification) {
            if (viewDetail == true) {
                window.location.href = '/DashBoard';
            }
            else {
                self.arrivalNotificationModel().reset();
                self.arrivalNotificationModel().pendingTasks.removeAll();
                self.isArvValEnable(true);
                self.isISPSEnable(true);
                self.isIMDGEnable(true);
                self.isspanVslValid(false);
                self.isspanEmpagent(false);


                self.isspanEtaValid(false);
                self.isspanOptValid1(false);
                self.isspanOptValid2(false);
                self.isspanOptValid3(false);
                self.isspanOptValid4(false);
                self.isspanSpecifyReason(false);
                self.isspanloadValid(false);
                self.isTOEnabled(false);
                var ETAFrom = $("#SearchETAFrom").val();
                var ETATo = $("#SearchETATo").val();
                var todaydate = new Date();
                var todate = new Date(todaydate);
                var fromdate = new Date(todaydate);
                todate.setDate(todate.getDate() + 15);
                fromdate.setDate(fromdate.getDate() - 15);
                $("#SearchETAFrom").val(moment(kendo.parseDate(fromdate, self.dateFormat.IPMSDateFormat())).format(self.dateFormat.IPMSDateFormatForModel()));
                $("#SearchETATo").val(moment(kendo.parseDate(todate, self.dateFormat.IPMSDateFormat())).format(self.dateFormat.IPMSDateFormatForModel()));
                $("#autocompleteSearchAN").val('');
                $("#searchVCN").val('');
                $("#IsserchIMDGClear").prop('checked', false);
                $('input:radio[name="IsserchIMDG"]').filter('[value="All"]').attr('checked', true);
                self.isArrvalEnable(false);
                self.isPurposeDropdownEnable(false);
                self.isVisitReasonEnabled(false);
                self.isPHOEnable(false);
                self.isISPSEnable(false);
                self.isISPSDTLEnable(false);
                self.isIMDGEnable(false);
                self.WithTailRoping(false);
                self.isspanEtdValid(false);
                self.viewModeForTabs('notification1');
                self.shouldShowDivAV(false);
                self.arrivalNotificationModel().ViewModeForTabs('notification1');
                self.isViewMode(false);
                self.viewMode("List");
                self.isGoNextVisible(false);
            }
        }

        self.CancelArrivalNotificationnew = function (arrivalNotification) {
            if (viewDetail == true && ActionDetails == "view") {
                window.location.href = '/DashBoard';
            }
            else if (viewDetail == true && ActionDetails == "edit") {
                $.confirm({
                    'title': 'Voyage Registration',
                    'message': 'Do you want to Cancel Voyage Registration ? ',
                    'buttons': {
                        'Yes': {
                            'class': 'green',
                            'action': function () {
                                window.location.href = '/DashBoard';
                            }
                        },
                        'No': {
                            'class': 'blue',
                            'action': function () {
                                firstSave = true;
                                self.viewModelHelper.isLoading(false);
                                //self.viewMode("List");
                            }

                        }
                    }
                });
            }
            else if (self.isUpdateVisible() || self.isSubmitVisible() || self.IsAddMode()) {
                $.confirm({
                    'title': 'Voyage Registration',
                    'message': 'Do you want to Cancel Voyage Registration ? ',
                    'buttons': {
                        'Yes': {
                            'class': 'green',
                            'action': function () {
                                self.arrivalNotificationModel().reset();
                                self.arrivalNotificationModel().pendingTasks.removeAll();
                                self.viewMode("List");
                                self.isArvValEnable(true);
                                self.isISPSEnable(true);
                                self.isIMDGEnable(true);
                                self.isspanVslValid(false);
                                self.isspanEmpagent(false);


                                self.isspanEtaValid(false);
                                self.isspanOptValid1(false);
                                self.isspanOptValid2(false);
                                self.isspanOptValid3(false);
                                self.isspanOptValid4(false);
                                self.isspanSpecifyReason(false);
                                self.isspanloadValid(false);
                                self.isTOEnabled(false);
                                var ETAFrom = $("#SearchETAFrom").val();
                                var ETATo = $("#SearchETATo").val();
                                var todaydate = new Date();
                                var todate = new Date(todaydate);
                                var fromdate = new Date(todaydate);
                                todate.setDate(todate.getDate() + 15);
                                fromdate.setDate(fromdate.getDate() - 15);
                                $("#SearchETAFrom").val(moment(kendo.parseDate(fromdate, self.dateFormat.IPMSDateFormat())).format(self.dateFormat.IPMSDateFormatForModel()));
                                $("#SearchETATo").val(moment(kendo.parseDate(todate, self.dateFormat.IPMSDateFormat())).format(self.dateFormat.IPMSDateFormatForModel()));
                                $("#autocompleteSearchAN").val('');
                                $("#searchVCN").val('');
                                $("#IsserchIMDGClear").prop('checked', false);
                                $('input:radio[name="IsserchIMDG"]').filter('[value="All"]').attr('checked', true);

                                self.isArrvalEnable(false);
                                self.isPurposeDropdownEnable(false);
                                self.isVisitReasonEnabled(false);
                                self.isPHOEnable(false);
                                self.isISPSEnable(false);
                                self.isISPSDTLEnable(false);
                                self.isIMDGEnable(false);
                                self.isspanEtdValid(false);
                                self.viewModeForTabs('notification1');
                                self.shouldShowDivAV(false);
                                self.arrivalNotificationModel().ViewModeForTabs('notification1');
                                self.isViewMode(false);
                                //self.viewMode("List");
                                self.vesseldetailsmodel(new IPMSROOT.VesseldetailsModel());
                                self.isGoNextVisible(false);
                                self.WithTailRoping(false);
                            }

                        },
                        'No': {
                            'class': 'blue',
                            'action': function () {
                                firstSave = true;
                                self.viewModelHelper.isLoading(false);
                            }

                        }
                    }
                });

            }
            else {
                self.arrivalNotificationModel().reset();
                self.arrivalNotificationModel().pendingTasks.removeAll();
                self.isArvValEnable(true);
                self.isISPSEnable(true);
                self.isIMDGEnable(true);
                self.isspanVslValid(false);
                self.isspanEmpagent(false);


                self.isspanEtaValid(false);
                self.isspanOptValid1(false);
                self.isspanOptValid2(false);
                self.isspanOptValid3(false);
                self.isspanOptValid4(false);
                self.isspanSpecifyReason(false);
                self.isspanloadValid(false);
                self.isTOEnabled(false);
                var ETAFrom = $("#SearchETAFrom").val();
                var ETATo = $("#SearchETATo").val();
                var todaydate = new Date();
                var todate = new Date(todaydate);
                var fromdate = new Date(todaydate);
                todate.setDate(todate.getDate() + 15);
                fromdate.setDate(fromdate.getDate() - 15);
                $("#SearchETAFrom").val(moment(kendo.parseDate(fromdate, self.dateFormat.IPMSDateFormat())).format(self.dateFormat.IPMSDateFormatForModel()));
                $("#SearchETATo").val(moment(kendo.parseDate(todate, self.dateFormat.IPMSDateFormat())).format(self.dateFormat.IPMSDateFormatForModel()));
                $("#autocompleteSearchAN").val('');
                $("#searchVCN").val('');
                $("#IsserchIMDGClear").prop('checked', false);
                $('input:radio[name="IsserchIMDG"]').filter('[value="All"]').attr('checked', true);

                self.isArrvalEnable(false);
                self.isPurposeDropdownEnable(false);
                self.isVisitReasonEnabled(false);
                self.isPHOEnable(false);
                self.isISPSEnable(false);
                self.isISPSDTLEnable(false);
                self.isIMDGEnable(false);
                self.isspanEtdValid(false);
                self.viewModeForTabs('notification1');
                self.shouldShowDivAV(false);
                self.arrivalNotificationModel().ViewModeForTabs('notification1');
                self.isViewMode(false);
                self.viewMode("List");
                self.vesseldetailsmodel(new IPMSROOT.VesseldetailsModel());
                self.isGoNextVisible(false);
                self.WithTailRoping(false);
            }
        }
        //this method is  fires when tab 1 button is pressed
        self.GotoTab1 = function (arrivalnotificationData) {
            GoToTab1(self, arrivalnotificationData);
        }
        //this method is  fires when tab 2 button is pressed
        self.GotoTab2 = function (arrivalnotificationData) {
            // $("#CellNo").kendoMaskedTextBox({ mask: "(000)000-000-0000" });
            self.arrivalNotificationModel().ReasonForVisit('');
            if (ValidateFormValues(self, arrivalnotificationData) == true) {

                if (self.viewModeForTabs() == 'notification3') {
                    self.viewModeForTabs('notification2');
                    self.arrivalNotificationModel().ViewModeForTabs('notification2');
                    GoToTab2(self, arrivalnotificationData);
                }
                else {
                    GoToTab2(self, arrivalnotificationData);
                }
            }
        }
        //this method is  fires when tab 3 button is pressed
        self.GotoTab3 = function (arrivalnotificationData) {

            self.arrivalNotificationModel().ReasonForVisit('');

            if (self.arrivalNotificationModel().ViewModeForTabs() == "notification1") {
                if (ValidateFormValues(self, arrivalnotificationData) == true) {
                    self.isGoBackVisible(true);

                    self.viewModeForTabs('notification2');
                    self.arrivalNotificationModel().ViewModeForTabs('notification2');
                    if (ValidateFormValues(self, arrivalnotificationData) == true) {
                        self.viewModeForTabs('notification3');
                        self.arrivalNotificationModel().ViewModeForTabs('notification3');
                        GoToTab3(self, arrivalnotificationData);
                    }
                    else {
                        GoToTab2(self, arrivalnotificationData);
                    }
                    if (viewDetail == true) {
                        self.isSubmitVisible(false);
                    }
                }
            }
            else {
                if (ValidateFormValues(self, arrivalnotificationData) == true) {

                    if (self.viewModeForTabs() == 'notification3') {
                        self.viewModeForTabs('notification3');
                        self.arrivalNotificationModel().ViewModeForTabs('notification3');
                        GoToTab3(self, arrivalnotificationData);
                    }
                    else {

                        if (GoToTab3(self, arrivalnotificationData)) {
                            self.viewModeForTabs('notification3');
                            self.arrivalNotificationModel().ViewModeForTabs('notification3');
                        }
                    }

                    if (viewDetail == true) {
                        self.isSubmitVisible(false);
                    }
                    else {
                        if (!(self.isViewMode()))
                            self.isSubmitVisible(true);
                    }
                }
            }

        }
        //this method is  fires when back  button is pressed
        self.GoToPrevTab = function (arrivalnotificationData) {
            if (self.viewModeForTabs() == 'notification3') {
                GoToTab2(self, arrivalnotificationData);
                return;
            }
            else if (self.viewModeForTabs() == 'notification2') {
                GoToTab1(self, arrivalnotificationData);
            }
        }

        self.GoToNextTab = function (arrivalnotificationData) {
            if (self.viewModeForTabs() == 'notification1') {
                GoToTab2(self, arrivalnotificationData);
                return;
            }
            else if (self.viewModeForTabs() == 'notification2') {
                GoToTab3(self, arrivalnotificationData);
            }

            if (viewDetail == true) {
                self.isSubmitVisible(false);
            }
            else {
                self.isSubmitVisible(false);
            }
        }

        var uploadedFiles = [];
        var documentData = [];
        //this method is  fires when upload  button is pressed
        self.arrivalUploadFile = function () {
            if ($('#arrivalSelfUploadDocs').get(0).selectedIndex == 0) {
                toastr.error("Please select document Type.");
                return;
            } {
                $("#spanHWPSfileToUpload").text("");
                self.ismultiplepfileToUpload(false);
                var documentType = $('#arrivalSelfUploadDocs option:selected').text();

                if (documentType != 'Choose....') {
                    self.arrivalNotificationModel().UploadedFiles([]);
                    uploadedFiles = self.arrivalNotificationModel().UploadedFiles();

                    var opmlFile = $('#arrivalFileToUpload')[0];
                    if (opmlFile.files.length > 0) {
                        for (var i = 0; i < opmlFile.files.length; i++) {
                            var matchDocument = ko.utils.arrayFirst(self.arrivalNotificationModel().ArrivalDocuments(), function (item) {

                                return item.DocumentName() === documentType;
                            });
                        }
                        if (matchDocument != null) {
                            toastr.warning("Selected Document Type Is Already Uploaded", "Error");
                            return;

                        }
                        for (var i = 0; i < opmlFile.files.length; i++) {
                            var match = ko.utils.arrayFirst(self.arrivalNotificationModel().ArrivalDocuments(), function (item) {

                                return item.FileName() === opmlFile.files[i].name;
                            });
                            if (match == null) {
                                var elem = {};
                                elem.FileName = opmlFile.files[i].name;
                                var extension = opmlFile.files[i].name.split('.').pop().toLowerCase();
                                var fileExtension = ['pdf', 'png', 'docx', 'doc', 'xlsx', 'xls', 'tiff', 'jpg', 'tif', 'jpeg', 'jpe', 'jfif'];
                                if ($.inArray(extension, fileExtension) != -1) {
                                    elem.CategoryName = $('#arrivalSelfUploadDocs option:selected').text();
                                    elem.CategoryCode = $('#arrivalSelfUploadDocs option:selected').val();
                                    elem.FileDetails = opmlFile.files[i];
                                    elem.IsAlreadyExists = false
                                    uploadedFiles.push(elem);
                                    self.arrivalNotificationModel().UploadedFiles(uploadedFiles);
                                } else {
                                    toastr.error("Please upload the files with formats (PDF, word, excel, .PNG, TIFF, JPEG) only", "Error");
                                    return;
                                }
                            }
                            else {
                                toastr.warning("The selected file already exist, Please upload another file", "Error");
                                return;
                            }
                        }
                        var formData = new FormData();
                        $.each(uploadedFiles, function (key, val) {
                            formData.append(val.name, val.FileDetails);
                        });
                        var CategoryName = $('#arrivalSelfUploadDocs option:selected').text();
                        var CategoryCode = $('#arrivalSelfUploadDocs option:selected').val();
                        var groupName = "Pre Arrival Documents";

                        self.viewModelHelper.apiUpload('api/File/MultipleFileUpload?documentType=' + CategoryCode, formData, function Message(data) {
                            self.Listdocuments = ko.observableArray();
                            var groupName = "Pre Arrival Documents";
                            self.Listdocuments(ko.utils.arrayMap(data, function (item) {
                                var Adddoc = new IPMSROOT.ArrivalDocument();
                                Adddoc.GroupName(groupName);
                                Adddoc.DocumentID(item.DocumentID);
                                Adddoc.FileName(item.FileName);
                                Adddoc.DocumentName(CategoryName);
                                Adddoc.DocumentCode(CategoryCode);
                                self.arrivalNotificationModel().ArrivalDocuments.push(Adddoc);
                                $("select#arrivalSelfUploadDocs").prop('selectedIndex', 0);

                            }));
                        });
                    }
                    else {
                        toastr.warning('Please select file');
                        self.ismultiplepfileToUpload(true);
                    }
                }
                else {
                    toastr.warning('Please select Document Category');
                    self.ismultiplepfileToUpload(true);
                }
                self.arrivalNotificationModel().UploadedFiles([]);
                $('#arrivalFileToUpload').val('');
                return;
            }
        }

        self.statutoryUploadFile = function () {
            var diffDays = 0;
            var diffDays2 = 0;
            var error = 0;

            if ($('#statSelUploadDocs').get(0).selectedIndex == 0) {
                error = error + 1;
                toastr.error("Please select document Type.");
                return;
            } {
                $("#spanHWPSfileToUpload").text("");
                self.ismultiplepfileToUpload(false);
                var documentType = $('#statSelUploadDocs option:selected').text();
                var documentId = $('#statSelUploadDocs option:selected').val();
                if (documentType != 'Choose....') {

                    //if (documentId == "ST04" || documentId == "ST10" || documentId == "ST02" || documentId == "ST08" || documentId == "ST11") {
                    //    var StartDateObj = kendo.parseDate(self.arrivalNotificationModel().ETA(), self.dateFormat.IPMSDateFormat());
                    //    var expDate = $('#expDate').val();
                    //    if (expDate != "") {
                    //        expDate = kendo.parseDate(expDate, self.dateFormat.IPMSDateFormat());
                    //        self.arrivalNotificationModel().ExpiryDate(expDate);
                    //    }

                    //}


                    //if (documentId != "ST04" && documentId != "ST10" && documentId == "ST02" && documentId == "ST08" && documentId == "ST11") {
                    //    var expDate = $('#expDate').val();
                    //    if (expDate != null) {
                    //        expDate = kendo.parseDate(expDate, self.dateFormat.IPMSDateFormat());
                    //        self.arrivalNotificationModel().ExpiryDate(expDate);

                    //    }
                    //}


                    var expDate = $('#expDate').val();
                    if (expDate != "" && expDate != null) {
                        expDate = kendo.parseDate(expDate, self.dateFormat.IPMSDateFormat());
                        self.arrivalNotificationModel().ExpiryDate(expDate);
                    }

                    if (documentId != "ST04" && documentId != "ST10" && documentId != "ST02" && documentId != "ST08" && documentId != "ST11") {
                        if (self.arrivalNotificationModel().ExpiryDate() != null && self.arrivalNotificationModel().ExpiryDate() != "") {

                            var StartDateObj = kendo.parseDate(self.arrivalNotificationModel().ETA(), self.dateFormat.IPMSDateFormat());
                            var startDateString = kendo.toString(StartDateObj, 'yyyy-MM-dd');
                            var startDate = new Date(startDateString);
                            var endDateObj = kendo.parseDate(self.arrivalNotificationModel().ExpiryDate(), self.dateFormat.IPMSDateFormat());
                            var endDateString = kendo.toString(endDateObj, 'yyyy-MM-dd');
                            var endDate = new Date(endDateString);

                            if (startDate > endDate) {
                                error = error + 1;
                                toastr.warning("Expiry date for statutory documents  should be more than  15 days from ETA Date.", "Voyage Registration");
                                return;
                            }
                            var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
                            diffDays = Math.round(Math.abs(timeDiff / (1000 * 60 * 60 * 24)));
                            if (parseInt(diffDays) < 15) {
                                error = error + 1;
                                toastr.warning("Expiry date for statutory documents are less than 15 days from ETA.", "Voyage Registration");
                                return;
                            }
                        }
                        else {
                            error = error + 1;
                            toastr.warning('Please select a Expiry Date or Please enter valid Expiry Date ');
                            return;
                        }
                    }

                    self.arrivalNotificationModel().UploadedFiles([]);
                    uploadedFiles = self.arrivalNotificationModel().UploadedFiles();
                    var opmlFile = $('#statutoryFileToUpload')[0];
                    if (opmlFile.files.length > 0) {
                        for (var i = 0; i < opmlFile.files.length; i++) {
                            var matchDocument = ko.utils.arrayFirst(self.arrivalNotificationModel().ArrivalDocuments(), function (item) {

                                return item.DocumentName() === documentType;
                            });
                        }
                        if (matchDocument != null) {
                            error = error + 1;
                            toastr.warning("Selected Document Type Is Already Uploaded", "Error");
                            return;

                        }
                        for (var i = 0; i < opmlFile.files.length; i++) {
                            var match = ko.utils.arrayFirst(self.arrivalNotificationModel().ArrivalDocuments(), function (item) {
                                return item.FileName() === opmlFile.files[i].name;
                            });
                            if (match == null) {
                                var elem = {};
                                elem.FileName = opmlFile.files[i].name;
                                var extension = opmlFile.files[i].name.split('.').pop().toLowerCase();
                                var fileExtension = ['pdf', 'png', 'docx', 'doc', 'xlsx', 'xls', 'tiff', 'jpg', 'tif', 'jpeg', 'jpe', 'jfif'];
                                if ($.inArray(extension, fileExtension) != -1) {
                                    elem.CategoryName = $('#statSelUploadDocs option:selected').text();
                                    elem.CategoryCode = $('#statSelUploadDocs option:selected').val();
                                    elem.FileDetails = opmlFile.files[i];
                                    elem.IsAlreadyExists = false
                                    uploadedFiles.push(elem);
                                    self.arrivalNotificationModel().UploadedFiles(uploadedFiles);
                                } else {
                                    error = error + 1;
                                    toastr.error("Please upload the files with formats (PDF, word, excel, .PNG, TIFF, JPEG) only", "Error");
                                    return;
                                }
                            }
                            else {
                                error = error + 1;
                                toastr.warning("The selected file already exist, Please upload another file", "Error");
                                return;
                            }
                        }
                        var formData = new FormData();
                        $.each(uploadedFiles, function (key, val) {
                            formData.append(val.name, val.FileDetails);
                        });
                        var CategoryName = $('#statSelUploadDocs option:selected').text();
                        var CategoryCode = $('#statSelUploadDocs option:selected').val();
                        var groupName = "Statutory Certificate Details";

                        self.viewModelHelper.apiUpload('api/File/MultipleFileUpload?documentType=' + CategoryCode, formData, function Message(data) {
                            self.Listdocuments = ko.observableArray();

                            self.Listdocuments(ko.utils.arrayMap(data, function (item) {

                                var Adddoc = new IPMSROOT.ArrivalDocument();
                                Adddoc.GroupName(groupName);
                                Adddoc.ExpiryDate(moment(self.arrivalNotificationModel().ExpiryDate()).format('YYYY-MM-DD'));
                                Adddoc.DocumentID(item.DocumentID);
                                Adddoc.FileName(item.FileName);
                                Adddoc.DocumentName(CategoryName);
                                Adddoc.DocumentCode(CategoryCode);
                                self.arrivalNotificationModel().ArrivalDocuments.push(Adddoc);
                                $("select#statSelUploadDocs").prop('selectedIndex', 0);
                                $("#expDate").kendoDatePicker({
                                    start: StartDateObj,
                                    format: "dd-MM-yyyy",
                                    min: StartDateObj,
                                    month: { empty: '<span class=k-state-disabled>#= data.value #</span>' }
                                });
                                $('#expDate').data('kendoDatePicker').value("");

                            }));
                        });
                    }

                    else {
                        error = error + 1;
                        toastr.warning('Please select file');
                        self.ismultiplepfileToUpload(true);
                    }

                }
                else {
                    error = error + 1;
                    toastr.warning('Please select Document Category');
                    self.ismultiplepfileToUpload(true);
                }

                self.arrivalNotificationModel().UploadedFiles([]);
                $('#statutoryFileToUpload').val('');
                if (error == 0) {
                    $('#expDate').data('kendoDatePicker').value(null);


                    $('#expDate').data('kendoDatePicker').enable(false);
                }
                return;
            }
        }

        self.cargoUploadFile = function () {
            if ($('#cargoSelUploadDocs').get(0).selectedIndex == 0) {
                toastr.error("Please select document Type.");
                return;
            } {
                $("#spanHWPSfileToUpload").text("");
                self.ismultiplepfileToUpload(false);
                var documentType = $('#cargoSelUploadDocs option:selected').text();

                if (documentType != 'Choose....') {
                    self.arrivalNotificationModel().UploadedFiles([]);
                    uploadedFiles = self.arrivalNotificationModel().UploadedFiles();
                    var opmlFile = $('#cargoFileToUpload')[0];
                    if (opmlFile.files.length > 0) {
                        for (var i = 0; i < opmlFile.files.length; i++) {
                            var matchDocument = ko.utils.arrayFirst(self.arrivalNotificationModel().ArrivalDocuments(), function (item) {

                                return item.DocumentName() === documentType;
                            });
                        }
                        if (matchDocument != null) {
                            toastr.warning("Selected Document Type Is Already Uploaded", "Error");
                            return;

                        }
                        for (var i = 0; i < opmlFile.files.length; i++) {
                            var match = ko.utils.arrayFirst(self.arrivalNotificationModel().ArrivalDocuments(), function (item) {
                                return item.FileName() === opmlFile.files[i].name;
                            });
                            if (match == null) {
                                var elem = {};
                                elem.FileName = opmlFile.files[i].name;
                                var extension = opmlFile.files[i].name.split('.').pop().toLowerCase();
                                var fileExtension = ['pdf', 'png', 'docx', 'doc', 'xlsx', 'xls', 'tiff', 'jpg', 'tif', 'jpeg', 'jpe', 'jfif'];
                                if ($.inArray(extension, fileExtension) != -1) {
                                    elem.CategoryName = $('#cargoSelUploadDocs option:selected').text();
                                    elem.CategoryCode = $('#cargoSelUploadDocs option:selected').val();
                                    elem.FileDetails = opmlFile.files[i];
                                    elem.IsAlreadyExists = false
                                    uploadedFiles.push(elem);
                                    self.arrivalNotificationModel().UploadedFiles(uploadedFiles);
                                } else {
                                    toastr.error("Please upload the files with formats (PDF, word, excel, .PNG, TIFF, JPEG) only", "Error");
                                    return;
                                }
                            }
                            else {
                                toastr.warning("The selected file already exist, Please upload another file", "Error");
                                return;
                            }
                        }
                        var formData = new FormData();
                        $.each(uploadedFiles, function (key, val) {
                            formData.append(val.name, val.FileDetails);
                        });
                        var CategoryName = $('#cargoSelUploadDocs option:selected').text();
                        var CategoryCode = $('#cargoSelUploadDocs option:selected').val();
                        var groupName = "Cargo Related Documents";

                        self.viewModelHelper.apiUpload('api/File/MultipleFileUpload?documentType=' + CategoryCode, formData, function Message(data) {
                            self.Listdocuments = ko.observableArray();

                            self.Listdocuments(ko.utils.arrayMap(data, function (item) {
                                var Adddoc = new IPMSROOT.ArrivalDocument();
                                Adddoc.GroupName(groupName);
                                Adddoc.DocumentID(item.DocumentID);
                                Adddoc.FileName(item.FileName);
                                Adddoc.DocumentName(CategoryName);
                                Adddoc.DocumentCode(CategoryCode);
                                self.arrivalNotificationModel().ArrivalDocuments.push(Adddoc);
                                $("select#cargoSelUploadDocs").prop('selectedIndex', 0);

                            }));
                        });
                    }

                    else {
                        toastr.warning('Please select file');
                        self.ismultiplepfileToUpload(true);
                    }
                }
                else {
                    toastr.warning('Please select Document Category');
                    self.ismultiplepfileToUpload(true);
                }
                self.arrivalNotificationModel().UploadedFiles([]);
                $('#cargoFileToUpload').val('');
                return;
            }
        }

        self.appointmentUploadFile = function () {
            if ($('#apptSelUploadDocs').get(0).selectedIndex == 0) {
                toastr.error("Please select document Type.");
                return;
            } {
                $("#spanHWPSfileToUpload").text("");
                self.ismultiplepfileToUpload(false);
                var documentType = $('#apptSelUploadDocs option:selected').text();

                if (documentType != 'Choose....') {
                    self.arrivalNotificationModel().UploadedFiles([]);
                    uploadedFiles = self.arrivalNotificationModel().UploadedFiles();
                    var opmlFile = $('#apptFileToUpload')[0];
                    if (opmlFile.files.length > 0) {

                        for (var i = 0; i < opmlFile.files.length; i++) {
                            var matchDocument = ko.utils.arrayFirst(self.arrivalNotificationModel().ArrivalDocuments(), function (item) {

                                return item.DocumentName() === documentType;
                            });
                        }
                        if (matchDocument != null) {
                            toastr.warning("Selected Document Type Is Already Uploaded", "Error");
                            return;

                        }
                        for (var i = 0; i < opmlFile.files.length; i++) {

                            var match = ko.utils.arrayFirst(self.arrivalNotificationModel().ArrivalDocuments(), function (item) {
                                return item.FileName() === opmlFile.files[i].name;
                            });
                            if (match == null) {
                                var elem = {};
                                elem.FileName = opmlFile.files[i].name;
                                var extension = opmlFile.files[i].name.split('.').pop().toLowerCase();
                                var fileExtension = ['pdf', 'png', 'docx', 'doc', 'xlsx', 'xls', 'tiff', 'jpg', 'tif', 'jpeg', 'jpe', 'jfif'];
                                if ($.inArray(extension, fileExtension) != -1) {
                                    elem.CategoryName = $('#apptSelUploadDocs option:selected').text();
                                    elem.CategoryCode = $('#apptSelUploadDocs option:selected').val();
                                    elem.FileDetails = opmlFile.files[i];
                                    elem.IsAlreadyExists = false
                                    uploadedFiles.push(elem);
                                    self.arrivalNotificationModel().UploadedFiles(uploadedFiles);
                                } else {
                                    toastr.error("Please upload the files with formats (PDF, word, excel, .PNG, TIFF, JPEG) only", "Error");
                                    return;
                                }
                            }
                            else {
                                toastr.warning("The selected file already exist, Please upload another file", "Error");
                                return;
                            }
                        }
                        var formData = new FormData();
                        $.each(uploadedFiles, function (key, val) {
                            formData.append(val.name, val.FileDetails);
                        });
                        var CategoryName = $('#apptSelUploadDocs option:selected').text();
                        var CategoryCode = $('#apptSelUploadDocs option:selected').val();
                        var groupName = "Appointment Copy of Agent";

                        self.viewModelHelper.apiUpload('api/File/MultipleFileUpload?documentType=' + CategoryCode, formData, function Message(data) {
                            self.Listdocuments = ko.observableArray();
                            self.Listdocuments(ko.utils.arrayMap(data, function (item) {
                                var Adddoc = new IPMSROOT.ArrivalDocument();
                                Adddoc.GroupName(groupName);
                                Adddoc.DocumentID(item.DocumentID);
                                Adddoc.FileName(item.FileName);
                                Adddoc.DocumentName(CategoryName);
                                Adddoc.DocumentCode(CategoryCode);
                                self.arrivalNotificationModel().ArrivalDocuments.push(Adddoc);
                                $("select#apptSelUploadDocs").prop('selectedIndex', 0);

                            }));
                        });
                    }

                    else {
                        toastr.warning('Please select file');
                        self.ismultiplepfileToUpload(true);
                    }
                }
                else {
                    toastr.warning('Please select Document Category');
                    self.ismultiplepfileToUpload(true);
                }
                self.arrivalNotificationModel().UploadedFiles([]);
                $('#apptFileToUpload').val('');
                return;
            }
        }


        //this method is  fires when delete  button is pressed in uploaded document list
        self.DeleteDocument = function (documentRow) {
            $.confirm({
                'title': 'Voyage Registration',
                'message': 'Do you want to Delete Documents Details ? ',
                'buttons': {
                    'Yes': {
                        'class': 'green',
                        'action': function () {
                            self.arrivalNotificationModel().ArrivalDocuments.remove(documentRow);
                        }
                    },
                    'No': {
                        'class': 'blue',
                        'action': function () {
                            firstSave = true;
                            self.viewModelHelper.isLoading(false);
                        }
                    }
                }
            });
        }

        isAdd = 0;
        index = 1;
        //this method is  fires when add  button is pressed in  new row is added in Commodity list
        self.AddNewQualitiesOfCommodity = function (arrivalNotificationData) {
            var arrivalReasons = self.arrivalNotificationModel().ArrivaReasonArray();
            var mySet = new Set(arrivalReasons);
            if (self.arrivalNotificationReferenceData().ArrivalConfigDetails()[0].Isreqpreferedberth() == 'true' && (arrivalNotificationData.PreferedBerthKey() == '' || arrivalNotificationData.PreferedBerthKey() == null)) {
                toastr.warning("Please Select Prefered Berth Details", "Voyage Registration");

            } else {
                if (arrivalNotificationData.ArrivalCommodities().length > 0) {
                    var ManError = "Y";
                    $.map(arrivalNotificationData.ArrivalCommodities, function (item) {
                        var CommoditiesListC = item;
                        if (CommoditiesListC != null)
                            ko.utils.arrayForEach(CommoditiesListC, function (CommodChk) {

                                if (CommodChk !== undefined) {
                                    if (CommodChk.CargoGroup() == "" || CommodChk.CargoGroup() == undefined || CommodChk.CargoType() == "" || CommodChk.CargoType() == undefined || CommodChk.Purpose() == "" || CommodChk.Purpose() == undefined || CommodChk.QtyOnboard() == "" || CommodChk.QtyOnboard() == undefined || CommodChk.UOM() == "" || CommodChk.UOM() == undefined) {
                                        //toastr.warning("Please Enter Commodity Details", "Voyage Registration");
                                        //ManError = "N";
                                    }
                                    else {
                                        if (CommodChk.Package() == 'PKG1') {
                                            if (CommodChk.PackageQty() == "" || CommodChk.PackageQty() == null) {
                                                //toastr.warning("Please Enter PackageQty Details", "Voyage Registration");
                                                //ManError = "N";
                                            }
                                        }
                                    }


                                    if (mySet.has("LOAD") && mySet.has("DISC")) {
                                        if (CommodChk.Purpose() == "DISC") {
                                            if (self.PartOrFullDischargeEnable()) {
                                                if (CommodChk.FullpartDischarge() == 0 || CommodChk.FullpartDischarge() == undefined) {
                                                    //toastr.warning("Please Enter Commodity Details", "Voyage Registration");
                                                    //ManError = "N";
                                                    //self.TotalQuantityEnable('Total Quantity on Board');
                                                }

                                                if (CommodChk.FullpartDischarge() == 'P') {
                                                    if (CommodChk.Quantity() == "" || CommodChk.Quantity() == undefined) {
                                                        //toastr.options.closeButton = true;
                                                        //ManError = "N";
                                                        //toastr.options.positionClass = "toast-top-right"; // 33
                                                        //toastr.warning("Please enter valid details of Quantities of Commodity", "Voyage Registration");
                                                    }
                                                }
                                            }

                                        }

                                    }
                                    else {

                                        if (self.PartOrFullDischargeEnable()) {
                                            if (CommodChk.FullpartDischarge() == 0 || CommodChk.FullpartDischarge() == undefined) {
                                                //toastr.warning("Please Enter Commodity Details", "Voyage Registration");
                                                //ManError = "N";
                                                //self.TotalQuantityEnable('Total Quantity on Board');
                                            }

                                            if (CommodChk.FullpartDischarge() == 'P') {
                                                if (CommodChk.Quantity() == "" || CommodChk.Quantity() == undefined) {
                                                    //toastr.options.closeButton = true;
                                                    //ManError = "N";
                                                    //toastr.options.positionClass = "toast-top-right"; // 33
                                                    //toastr.warning("Please enter valid details of Quantities of Commodity", "Voyage Registration");
                                                }
                                            }
                                        }
                                    }
                                }
                            });
                    });
                    if (ManError == "Y") {

                        self.isPurposeDropdownEnable(true);
                        var acomodity = new IPMSROOT.ArrivalCommodity(undefined, self.arrivalNotificationReferenceData());
                        var ReasonforVisitKendo = $("#reasonforvisit").data('kendoMultiSelect');
                        var valuestoCheck = new Set(ReasonforVisitKendo.value());
                        var values = ReasonforVisitKendo.value().slice();
                        var Discharge = ["DISC"];
                        var load = ["LOAD"];
                        var isloaddischarge = false;
                        if (valuestoCheck.has("DISC") && valuestoCheck.has("LOAD")) {

                            isloaddischarge = true;


                        }
                        $.each(values, function (i, val) {

                            if (Discharge == val) {
                                acomodity.Purpose(Discharge);
                                self.PartOrFullDischargeEnable(true);
                                self.isPurposeDropdownEnable(false);
                                self.TotalQuantityEnable('Total Quantity on Board');
                                $("select[name='Importexport']").prop('disabled', true);
                                $("select[name='Importexport']").attr('disabled', true);
                                $("select[name='Importexport']").each(function () { $(this).attr('disabled', 'disabled'); });
                            }
                            if (load == val) {
                                acomodity.Purpose(load);
                                self.PartOrFullDischargeEnable(false);
                                self.isPurposeDropdownEnable(false);
                                self.TotalQuantityEnable('Quantity ');
                                $("select[name='Importexport']").prop('disabled', true);
                                $("select[name='Importexport']").attr('disabled', true);
                                $("select[name='Importexport']").each(function () { $(this).attr('disabled', 'disabled'); });
                            }
                            if (isloaddischarge == true) {

                                acomodity.Purpose("");
                                self.isPurposeDropdownEnable(true);
                                self.PartOrFullDischargeEnable(true);
                            }

                        });
                        if (valuestoCheck.has("DISC") && valuestoCheck.has("LOAD")) {


                            self.isPurposeDropdownEnable(true);
                            self.PartOrFullDischargeEnable(true);


                        }

                        acomodity.SNO = acomodity.SNO() + 1;
                        self.arrivalNotificationModel().ArrivalCommodities.push(acomodity);
                    }
                }
                else {
                    var acomodity = new IPMSROOT.ArrivalCommodity(undefined, self.arrivalNotificationReferenceData());
                    var ReasonforVisitKendo = $("#reasonforvisit").data('kendoMultiSelect');
                    var valuestoCheck = new Set(ReasonforVisitKendo.value());
                    var values = ReasonforVisitKendo.value().slice();
                    var Discharge = ["DISC"];
                    var load = ["LOAD"];
                    var isloaddischarge = false;
                    if (valuestoCheck.has("DISC") && valuestoCheck.has("LOAD")) {

                        isloaddischarge = true;


                    }
                    $.each(values, function (i, val) {

                        if (Discharge == val) {

                            acomodity.Purpose(Discharge);
                            self.isPurposeDropdownEnable(false);
                            $("select[name='Importexport']").prop('disabled', true);
                            $("select[name='Importexport']").attr('disabled', true);
                            $("select[name='Importexport']").each(function () { $(this).attr('disabled', 'disabled'); });
                            self.PartOrFullDischargeEnable(true);
                            self.TotalQuantityEnable('Total Quantity on Board');
                        }
                        if (load == val) {
                            acomodity.Purpose(load);
                            self.PartOrFullDischargeEnable(false);
                            self.isPurposeDropdownEnable(false);
                            self.TotalQuantityEnable('Quantity');
                            $("select[name='Importexport']").prop('disabled', true);
                            $("select[name='Importexport']").attr('disabled', true);
                            $("select[name='Importexport']").each(function () { $(this).attr('disabled', 'disabled'); });
                        }
                        if (isloaddischarge == true) {

                            acomodity.Purpose("");
                            self.isPurposeDropdownEnable(true);
                            self.PartOrFullDischargeEnable(true);
                        }
                    });


                    acomodity.SNO = acomodity.SNO() + 1;
                    self.arrivalNotificationModel().ArrivalCommodities.push(acomodity);
                }
            }
        }

        self.removeArrivalIMDGTankers = function (arrivalNotificationData) {
            $.confirm({
                'title': 'Voyage Registration',
                'message': 'Do you want to Delete IMDG Cargo Information Details ? ',     //without uploading of ' + docchkif
                'buttons': {
                    'Yes': {
                        'class': 'green',
                        'action': function () {
                            self.arrivalNotificationModel().ArrivalIMDGTankers.remove(arrivalNotificationData);
                        }
                    },
                    'No': {
                        'class': 'blue',
                        'action': function () {
                            firstSave = true;
                            self.viewModelHelper.isLoading(false);
                        }
                    }
                }
            });
        }

        self.AddIMDGInformations = function (arrivalNotificationData) {
            if (arrivalNotificationData.IMDGInformations().length > 0) {
                var ManError = "Y";
                $.map(arrivalNotificationData.IMDGInformations, function (item) {
                    var IMDGInformationsC = item;
                    if (IMDGInformationsC != null)
                        ko.utils.arrayForEach(IMDGInformationsC, function (CommodChk) {

                            if (CommodChk !== undefined) {
                                if (CommodChk.Others() == null)
                                    CommodChk.Others('');
                                if (CommodChk.Purpose() == "" || CommodChk.ClassCode() == "" || CommodChk.ImdgCommodity() == "" || CommodChk.UNNo().trim() == "") { // || CommodChk.Quantity() == ""  || (CommodChk.NoofContainer() == "" && CommodChk.Others() == '')) {
                                    //toastr.warning("Please Enter IMDG Cargo Information Details", "Voyage Registration");
                                    //ManError = "N";
                                }
                            }
                        });

                });
                if (ManError == "Y")
                    self.arrivalNotificationModel().IMDGInformations.push(new IPMSROOT.IMDGContainerInformationdetails());
            }
            else {
                self.arrivalNotificationModel().IMDGInformations.push(new IPMSROOT.IMDGContainerInformationdetails());
            }
        }

        self.removeIMDGInformations = function (arrivalNotificationData) {
            $.confirm({
                'title': 'Voyage Registration',
                'message': 'Do you want to Delete IMDG Cargo Information Details ? ',     //without uploading of ' + docchkif
                'buttons': {
                    'Yes': {
                        'class': 'green',
                        'action': function () {
                            self.arrivalNotificationModel().IMDGInformations.remove(arrivalNotificationData);
                        }
                    },
                    'No': {
                        'class': 'blue',
                        'action': function () {
                            firstSave = true;
                            self.viewModelHelper.isLoading(false);
                        }
                    }
                }
            });
        }

        // Bhoji Remove Cargo Mail Grid
        self.removeArrivalCommodities = function (arrivalNotificationData) {
            $.confirm({
                'title': 'Voyage Registration',
                'message': 'Do you want to Delete Quantities of Commodities Information Details ? ',
                'buttons': {
                    'Yes': {
                        'class': 'green',
                        'action': function () {
                            for (var i = self.arrivalNotificationModel().CargoQuantitiesSplits().length - 1; i > -1; i--) {
                                if (self.arrivalNotificationModel().CargoQuantitiesSplits()[i].CargoTypecode() == arrivalNotificationData.CargoType()) {
                                    self.arrivalNotificationModel().CargoQuantitiesSplits.remove(self.arrivalNotificationModel().CargoQuantitiesSplits()[i]);
                                }
                            }
                            self.arrivalNotificationModel().ArrivalCommodities.remove(arrivalNotificationData);

                            if (self.arrivalNotificationModel().ArrivalCommodities().length == 0) {
                                self.arrivalNotificationModel().CargoQuantitiesSplits.removeAll();
                                self.isCargosplitVisible(false);
                                self.ShipperListForCargo([]);
                                self.CargoGroupListArray([]);
                            }

                            ko.utils.arrayForEach(self.arrivalNotificationModel().CargoQuantitiesSplits(), function (CargoChk) {
                                if (CargoChk !== undefined && CargoChk.CargoTypecode() == arrivalNotificationData.CargoType()) {
                                    self.arrivalNotificationModel().CargoQuantitiesSplits.remove(CargoChk);
                                }
                            });

                            ko.utils.arrayForEach(self.CargoGroupListArray(), function (Cargols) {
                                if (Cargols !== undefined && Cargols.CargoTypecode === arrivalNotificationData.CargoType()) {
                                    self.CargoGroupListArray.remove(Cargols);
                                }
                            });


                        }
                    },
                    'No': {
                        'class': 'green',
                        'action': function () {
                            firstSave = true;
                            self.viewModelHelper.isLoading(false);
                        }
                    }
                }
            });
        }

        AnyDangerousGoodsClick = function () {
            if ($('input:radio[name=IsDangerousGoodsonBoard]:checked').val() == "A") {
                self.IsDangerousGoods(true);
                $("#rdYesDangerousGoods").attr('checked', 'checked');
            }
            else {
                self.IsDangerousGoods(false);
                $("#rdNoDangerousGoods").attr('checked', 'checked');
                self.arrivalNotificationModel().LoadDischargeDate('');
                self.arrivalNotificationModel().CellNo('');
                self.arrivalNotificationModel().CargoDescription('');
                self.arrivalNotificationModel().ArrivalIMDGTankers.removeAll();
                self.arrivalNotificationModel().IMDGInformations.removeAll();
            }
        }

        //ArrivalNotification Initializetion(pageload) mode
        self.Initialize = function () {
            //debugger
            self.viewMode = ko.observable(true);
            self.IsBargeVessel(false);
            self.LoadArrivalNotifications();
            self.LoadInitialData();
            self.viewModeForTabs('notification1');
            self.arrivalNotificationModel().ViewModeForTabs('notification1');
            if (viewDetail == true) {
            }
            else {
                self.viewMode('List');
            }
            
            checkForDuplicates();

        }

        self.WorkflowAction = function (dat) {
            var action = new IPMSROOT.WorkFlowCommon();
            self.ENValidation = ko.observable(dat);
            var check = 0;
            self.ENValidation().errors = ko.validation.group(self.ENValidation());
            var errors = self.ENValidation().errors().length;
            if (ValidateFormValues(self, self.arrivalNotificationModel()) == true) {
                if (dat.HasRemarks() == "N") { errors = 0; }
                if (errors == 0) {
                    if (dat.TaskCode() == "VUPD") {
                        self.VUPD(true);
                        $(".close").trigger("click");
                        self.arrivalNotificationModel().WokflowFlag(dat.EntityCode());
                        self.arrivalNotificationModel().workflowRemarks(dat.Remarks());
                        self.SaveArrivalNotification(self.arrivalNotificationModel());
                    }
                    else if (dat.TaskCode() == "AUPD") {
                        self.AUPD(true);
                        $(".close").trigger("click");
                        self.arrivalNotificationModel().WokflowFlag(dat.EntityCode());
                        self.arrivalNotificationModel().workflowRemarks(dat.Remarks());
                        self.SaveArrivalNotification(self.arrivalNotificationModel());
                    }
                    else
                        action.SubmitAction(dat, self.arrivalNotificationModel());
                }
                else {
                    self.ENValidation().errors.showAllMessages();
                }
            }
            else {

                $(".close").trigger("click");
            }
        }
        //Change of VCN need to reset all the values - Omprakash kotha on 11th November 2014
        $('#txtVessels').live('keydown', function (e) {

            var charCode = e.which || e.keyCode;
            if (charCode == 8 || charCode == 46) {
                self.arrivalNotificationModel().VesselData('');
                self.arrivalNotificationModel().VesselID('');
                self.arrivalNotificationModel().IsCosstGuard('');
                $('#LastPortLablid').visible(true);
                self.arrivalNotificationModel().IMONo('');
                self.arrivalNotificationModel().DockingPlanID('');
                self.arrivalNotificationModel().SubmissionDate('');
                $("select#reasonforvisit").prop('selectedIndex', 0);
                self.DryDockDetailsVisible(false);
            }
        });

        //Change of VCN need to reset all the values - Omprakash kotha on 11th November 2014
        $('#SpecTO').live('keydown', function (e) {
            var charCode = e.which || e.keyCode;
            if (charCode == 8 || charCode == 46) {
                $('#SpecTO').focus();
                self.arrivalNotificationModel().TerminalOperatorID('');
                self.arrivalNotificationReferenceBirthData(new IPMSRoot.ArrivalNotificationReferenceBirthData(undefined));
            }
        });


        PlanDateTimeOfBerthCal = function () {
            this.min($("#ETA").val());
            this.max($("#ETD").val());
        }

        ExpirydateOpen = function (ctrl) {

            var expirydate = ctrl.value
            var StartDateValue = $("#ETA").val();
            var myDatePicker = kendo.parseDate(StartDateValue, self.dateFormat.IPMSDateTimeFormat());
            var day = myDatePicker.getDate();
            var month = myDatePicker.getMonth();
            var year = myDatePicker.getFullYear();
            var Hour = myDatePicker.getHours();
            var Mnt = myDatePicker.getMinutes();
            var Formdatevalue = (moment(new Date(year, month, day + 15, Hour, Mnt)).format(self.dateFormat.IPMSDateTimeFormatForModel()));

        }

        PlanDateTimeToStartCargoCal = function () {
            this.min($("#PlanDateTimeOfBerth").val());
            this.max($("#ETD").val());
        }

        PlanDateTimeToCompleteCargoCal = function () {
            this.min($("#PlanDateTimeToStartCargo").val());
            this.max($("#ETD").val());
        }

        PlanDateTimeToVacateBerthCal = function () {
            this.min($("#PlanDateTimeToCompleteCargo").val());
            this.max($("#ETD").val());
        }

        self.CheckingShipperReceivertext = function () {
            var ReasonforVisitKendo = $("#ShipperReceiver").data('kendoMultiSelect');
            if ((ReasonforVisitKendo.value == "" || ReasonforVisitKendo.value == null || ReasonforVisitKendo._values[0] == undefined) && check == 0) {
                //  $('#spanShipperReceiver').text('This field is required.')
                //  self.isspanShipperReceiver(true);
                //  result = false;
            }
            else {
                // $('#spanShipperReceiver').text('');
                //  self.isspanShipperReceiver(false);
            }

            //mahesh
            var arrivalNotification = self.arrivalNotificationModel();
            MultiselectEvent(arrivalNotification);

        }

        self.CheckingShipperReceivertext1 = function () {
            var ReasonforVisitKendo = $("#ShipperReceiver1").data('kendoMultiSelect');
            if ((ReasonforVisitKendo.value == "" || ReasonforVisitKendo.value == null || ReasonforVisitKendo._values[0] == undefined)) {
                //  $('#spanShipperReceiver1').text('This field is required.')
                // self.isspanShipperReceiver(true);
                //result = false;
            }
            else {
                // $('#spanShipperReceiver1').text('');
                //  self.isspanShipperReceiver(false);
            }

            //mahesh
            var arrivalNotification = self.arrivalNotificationModel();
            MultiselectEvent1(arrivalNotification);

        }
        self.isShipperEnable = function (data) {
            var check = 0;
            var Content = $("#autocompleteAN").val();
            for (var i = 0; i < data.ArrivaReasonArray().length; i++) {
                data.ReasonForVisit(data.ArrivaReasonArray()[i]);
                if (data.ReasonForVisit() == 'BUNK' || data.ReasonForVisit() == 'LABY' || data.ReasonForVisit() == 'BPLT') {
                    check = check + 1;
                }
                else {
                    check = 0;
                    break;
                }
            }
            if (check == 0) {
                //$('#isShipper').css('display', 'block');  
                if (data.VesselData().VesselType == "V151" || data.VesselData().VesselTypeName == "Container Vessels") {
                    $('#Idshipperlabel').text('Liner:');
                    $('#Idshipperlabel').html(function (_, html) {
                        return html.replace(/\*/, "<span class='required'>*</span>");
                    });
                }
                else {
                    $('#Idshipperlabel').text('Shipper/Receiver:');
                    $('#Idshipperlabel').html(function (_, html) {
                        return html.replace(/\*/, "<span class='required'>*</span>");
                    });
                }
            }
            else {
                $('#isShipper').css('display', 'none');
                $('#Idshipperlabel').html(function (_, html) {
                    return html.replace(/\*/, "");
                });
            }
        }
        Checkingreasonforvisittext = function () {
            var ReasonforVisitKendo = $("#reasonforvisit").data('kendoMultiSelect');
            if (ReasonforVisitKendo.value == "" || ReasonforVisitKendo.value == null) {
                $('#spanReasonForVisit').text('This field is required.')
                self.isspanReasonForVisit(true);
                result = false;
            }
            else {
                $('#spanReasonForVisit').text('');
                self.isspanReasonForVisit(false);

            }
        }

        CheckingISPS = function (ctrl) {
            if (ctrl.value == "A") {

                $("#IspsClearenceSpn").show();
                $("#AppliedDate").attr("disable", false);
                $("#ISPSReferenceNo").prop('disabled', false);
                $("#AppliedDate").data('kendoDatePicker').enable(true);
                //    $("#RefNoSpn").show();
                // self.ispsRefNo(false);
                // $("#ispssapnvalidation").val('');
                self.arrivalNotificationModel().IsValidationEnabled(false);

            }
            else {

                self.arrivalNotificationModel().ISPSReferenceNo('');
                self.arrivalNotificationModel().AppliedDate('');
                $("#IspsClearenceSpn").hide();
                $("#ISPSReferenceNo").prop('disabled', true);
                $("#AppliedDate").data('kendoDatePicker').enable(false);
                //    $("#RefNoSpn").hide();
                $("#spanAppliedDate").val('');
                self.isspanAppliedDate(false);
                // self.ispsRefNo(false);
                // $("#ispssapnvalidation").val('');

            }
        }

        CheckingTotalCrewNo = function () {
            if ($("#PakistaniCrewNOtxt").val() == "" || $("#PakistaniCrewNOtxt").val() == null) {
                $('#spanPakistaniCrewNOtxt').text('This field is required.');
            }
            else { $('#spanPakistaniCrewNOtxt').text(''); }
            //if ($("#totalCrewNotxt").val() == "" || $("#totalCrewNotxt").val() == null) {
            //   $('#spantotalCrewNotxt').text('This field is required.');
            //}
            //else {
            //    if (parseInt($("#totalCrewNotxt").val()) < (parseInt($("#PakistaniCrewNOtxt").val())))
            //      toastr.warning("Please Check No.  of Pakistani Crew on Board are More than Total No. of Crew on Board");
            //}
        }

        CheckingAfterdraft = function () {
            if ($("#arrivalafterdrafttxt").val() != "" || $("#arrivalafterdrafttxt").val() != null) {
                var arrivaldraft = parseFloat($("#arrivalafterdrafttxt").val());
                var vesselsummerdraft = parseFloat(self.arrivalNotificationModel().SummerDraftAFTInM());
                if (arrivaldraft > vesselsummerdraft)
                { toastr.warning("Please Arrival Aft draft are More then vessel Summer Aft Dtaft"); }
            }
            else if ($("#departafterdrafttxt").val() != "" || $("#departafterdrafttxt").val() != null) {
                var arrivaldraft = parseFloat($("#arrivalafterdrafttxt").val());
                var vesselsummerdraft = parseFloat(self.arrivalNotificationModel().SummerDraftAFTInM());
                if (arrivaldraft > vesselsummerdraft)
                { toastr.warning("Please Departure Aft draft are More then vessel Summer Aft Dtaft"); }
            }
        }

        CheckingForworddtaft = function () {
            if ($("#arrivalforworddrafttxt").val() != "" || $("#arrivalforworddrafttxt").val() != null) {
                var arrivaldraft = parseFloat($("#arrivalforworddrafttxt").val());
                var vesselsummerforworddraft = parseFloat(self.arrivalNotificationModel().SummerDraftFWDInM());
                if (arrivaldraft > vesselsummerforworddraft)
                { toastr.warning("Please Departure Forward draft are More then vessel Summer Forward Dtaft"); }
            }
            else if ($("#departureforworddrafttxt").val() != "" || $("#departureforworddrafttxt").val() != null) {
                var arrivaldraft = parseFloat($("#arrivalafterdrafttxt").val());
                var vesselsummerfrwdraft = parseFloat(self.arrivalNotificationModel().SummerDraftFWDInM());
                if (arrivaldraft > vesselsummerfrwdraft)
                { toastr.warning("Please Departure Forward draft are More then vessel Summer Forward Dtaft"); }
            }
        }

        CheckingAdditionalTugReqtext = function () {
            if ($("#NumberofTugstxt").val() == "" || $("#NumberofTugstxt").val() == null) {
                $('#spanNumberofTugs').text('This field is required.');
            }
            else { $('#spanNumberofTugs').text(''); }
        }

        CheckingResonForvisitdropdown = function () {

            if (($("#ResonForvisitdropdown").val() == "" || $("#ResonForvisitdropdown").val() == null || $("#ResonForvisitdropdown :selected").text() == "Select....")) {
                //self.isspanResonForvisitdropdown(true);
                //   $("#spanResonForvisitdropdown").text('This field is required.');
                if (self.arrivalNotificationModel().IsGovtVessel() == 'N')
                    $("#reqOffhireServices").text('*');
            }
            else {
                //  $('#spanResonForvisitdropdown').text('');
                // self.isspanResonForvisitdropdown(false);
            }
        }

        CheckingAdditionalTugReqtext = function () {
            if ($("#NumberofTugstxt").val() == "" || $("#NumberofTugstxt").val() == null) {
                $('#spanNumberofTugs').text('This field is required.');
            }
            else { $('#spanNumberofTugs').text(''); }
        }

        CheckingAdditionalTugReq = function (ctrl) {
            if (ctrl.value == "Y") {
                self.AdditionalTugRequired(true);
            }
            else {
                self.AdditionalTugRequired(false);
                self.isspanAdditionalTugReq(false);
                $('#spanNumberofTugs').text('');
            }
        }

        CheckingpakistaniCrewOnboard = function (ctrl) {
            if (ctrl.value == "Y") {
                self.pakistaniCrewOnboard(true);
            }
            else {
                self.pakistaniCrewOnboard(false);
                self.isspanPakistaniCrew(false);
                $('#spanPakistaniCrewNOtxt').text('');
            }
        }

        CheckingAllNavigationalEquipmentOperational = function (ctrl) {
            if (ctrl.value == "N") {
                self.AllNavigationalEquipmentOperational(true);
            }
            else {
                self.AllNavigationalEquipmentOperational(false);
                self.spanNvgtEqpmntOprtnltext(false);
                $("#spanNvgtEqpmntOprtnltext").text('');
            }
        }

        CheckingPortAndStarboardAnchorsAreOperational = function (ctrl) {

            if (ctrl.value == "N") {
                self.PortAndStarboardAnchorsAreOperational(true);
            }
            else {
                self.PortAndStarboardAnchorsAreOperational(false);
                self.spanPtStboardAnchorOprtnltext(false);
                $("#spanPtStboardAnchorOprtnltext").text('');
            }
        }

        CheckingsVesselCoveredunderPandIClub = function (ctrl) {

            if (ctrl.value == "N") {
                self.VesselCoveredunderPandIClub(true);
            }
            else {
                self.VesselCoveredunderPandIClub(false);
                self.spanPIClubtext(false);
                $("#spanPIClubtext").text('');
            }
        }

        CheckingShoreMooringpatternSufficientlinesonBoard = function (ctrl) {

            if (ctrl.value == "N") {
                self.ShoreMooringpatternSufficientlinesonBoard(true);
            }
            else {
                self.ShoreMooringpatternSufficientlinesonBoard(false);
                self.spanShrMringlinestext(false);
                $("#spanShrMringlinestext").text('');
            }
        }

        CheckingForwardandAfterWinchOperational = function (ctrl) {

            if (ctrl.value == "N") {
                self.ForwardandAfterWinchOperational(true);
            }
            else {
                self.ForwardandAfterWinchOperational(false);
                self.spanfwrdaftWinchOprtnltext(false);
                $("#spanfwrdaftWinchOprtnltext").text('');
            }
        }

        CheckingArePropellersFullySubmergedinWater = function (ctrl) {
            if (ctrl.value == "Y") {
                self.ArePropellersFullySubmergedinWater(true);
            }
            else {
                self.ArePropellersFullySubmergedinWater(false);
                self.spansafeBerthingtext(false);
                $("#spansafeBerthingtext").text('');
            }
        }

        CheckingIsvesselfitinallrespectforsafeBerthing = function (ctrl) {

            if (ctrl.value == "N") {
                self.IsvesselfitinallrespectforsafeBerthing(true);
            }
            else {
                self.IsvesselfitinallrespectforsafeBerthing(false);
                self.spansafeBerthingtext(false);
                $("#spansafeBerthingtext").text('');
            }
        }

        CheckingDoyouintendtousewireRopewithouttailRopeForMooring = function (ctrl) {

            if (ctrl.value == "N") {
                self.CheckingDoyouintendtousewireRopewithouttailRopeForMooring(true);
                self.WithTailRoping(false);
                self.CheckTailRope(false);
                self.spanTailRopetext(false);
                $("#IsTailRopeText").val('');
            }
            else {
                self.CheckingDoyouintendtousewireRopewithouttailRopeForMooring(false);
                self.CheckTailRope(false);
                self.spanTailRopetext(false);
                self.WithTailRoping(true);
            }

        }

        CheckTailRope = function (ctrl) {
            if (ctrl.value == "N") {
                self.CheckTailRope(true);
            }
            else {
                self.CheckTailRope(false);
                self.spanTailRopetext(false);
                $("#spanTailRopetext").val('');
                $("#IsTailRopeText").val('');
                self.arrivalNotificationModel().wirewithTailRope('');
            }
        }

        CheckingExceedPortRestrictions = function (ctrl) {

            if (ctrl.value == "N") {
                self.AdditionalTugReq(true);
            }
            else {
                self.AdditionalTugReq(false);
                self.arrivalNotificationModel().DaylightSpecifyReason('');
            }
        }

        CheckingDaylightRestriction = function (ctrl) {
            if (ctrl.value == "A") {
                self.DaylightSpecifyReasonChanged(true);
            }
            else {
                self.DaylightSpecifyReasonChanged(false);
                self.spanDaylightSpecifyReasontext(false);
                $("#spanDaylightSpecifyReasontext").text('');
            }
        }


        CheckingTidilChange = function (ctrl) {

            if (ctrl.value == "A") {
                self.tidildetailschanged(true);
            }
            else {
                self.tidildetailschanged(false);
                self.spantidildetailstext(false);
                $("#spantidildetailstext").text('');
            }
        }

        CheckingExceedPortLimitations = function (ctrl) {

            if (ctrl.value == "Y") {
                self.Exeedportlimitenable(true);
            }
            else {
                self.Exeedportlimitenable(false);
                self.spanExceedSpecifyReasontext(false);
                $("#spanExceedSpecifyReasontext").text('');
            }
        }

        Checkingtideldetailss = function () {
            if ($('input[name=Tidal]:checked').val() == 'A') {
                if ($('#Tidaltxt').val() == "" || $('#Tidaltxt').val() == null) {
                    self.spantidildetailstext(true);
                    $("#spantidildetailstext").text('This field is required.');
                    result = false;
                }
                else {
                    self.spantidildetailstext(false);
                    $("#spantidildetailstext").text('');
                }
            }
        }

        CheckingDaylightSpecifyReasons = function () {

            if ($('input[name=DaylightRestriction]:checked').val() == 'A') {
                if ($('#DaylightSpecifyReasontxt').val() == "" || $('#DaylightSpecifyReasontxt').val() == null) {
                    self.spanDaylightSpecifyReasontext(true);
                    $("#spanDaylightSpecifyReasontext").text('This field is required.');
                    result = false;
                }
                else {
                    self.spanDaylightSpecifyReasontext(false);
                    $("#spanDaylightSpecifyReasontext").text('');

                }
            }
        }
        CheckingExceedSpecifyReasons = function () {

            if ($('input[name=ExceedPortLimitations]:checked').val() == 'Y') {
                if ($('#ExceedPortLimitationtext').val() == "" || $('#ExceedPortLimitationtext').val() == null) {
                    self.spanExceedSpecifyReasontext(true);
                    $("#spanExceedSpecifyReasontext").text('This field is required.');
                    result = false;
                }
                else {
                    self.spanExceedSpecifyReasontext(false);
                    $("#spanExceedSpecifyReasontext").text('');
                }
            }
        }
        CheckingNvgtEqpmntOprtnls = function () {
            if ($('input[name=IsNvgtEqpmntOprtnl]:checked').val() == 'N') {
                if ($('#NvgtEqpmntOprtnltxt').val() == "" || $('#NvgtEqpmntOprtnltxt').val() == null) {
                    self.spanNvgtEqpmntOprtnltext(true);
                    $("#spanNvgtEqpmntOprtnltext").text('This field is required.');
                    result = false;
                }
                else {
                    self.spanNvgtEqpmntOprtnltext(false);
                    $("#spanNvgtEqpmntOprtnltext").text('');
                }
            }
        }
        CheckingfwrdaftWinchOprtnls = function () {
            if ($('input[name=IsfwrdaftWinchOprtnl]:checked').val() == 'N') {
                if ($('#fwrdaftWinchOprtnltext').val() == "" || $('#fwrdaftWinchOprtnltext').val() == null) {
                    self.spanfwrdaftWinchOprtnltext(true);
                    $("#spanfwrdaftWinchOprtnltext").text('This field is required.');
                    result = false;
                }
                else {
                    self.spanfwrdaftWinchOprtnltext(false);
                    $("#spanfwrdaftWinchOprtnltext").text('');
                }
            }
        }
        CheckingPtStboardAnchorOprtnls = function () {
            if ($('input[name=IsPtStboardAnchorOprtnl]:checked').val() == 'N') {
                if ($('#PtStboardAnchorOprtnltxt').val() == "" || $('#PtStboardAnchorOprtnltxt').val() == null) {
                    self.spanPtStboardAnchorOprtnltext(true);
                    $("#spanPtStboardAnchorOprtnltext").text('This field is required.');
                    result = false;
                }
                else {
                    self.spanPtStboardAnchorOprtnltext(false);
                    $("#spanPtStboardAnchorOprtnltext").text('');
                }
            }
        }
        CheckingPrlrsFullySbmrgdWaters = function () {
            if ($('input[name=IsPrlrsFullySbmrgdWater]:checked').val() == 'Y') {
                if ($('#IsPrlrsFullySbmrgdWatertext').val() == "" || $('#IsPrlrsFullySbmrgdWatertext').val() == null) {
                    self.spanPrlrsFullySbmrgdWatertext(true);
                    $("#spanPrlrsFullySbmrgdWatertext").text('This field is required.');
                    result = false;
                }
                else {
                    self.spanPrlrsFullySbmrgdWatertext(false);
                    $("#spanPrlrsFullySbmrgdWatertext").text('');
                }
            }
        }

        CheckingPIClubs = function () {
            if ($('input[name=IsPIClub]:checked').val() == 'N') {
                if ($('#PIClubtxt').val() == "" || $('#PIClubtxt').val() == null) {
                    self.spanPIClubtext(true);
                    $("#spanPIClubtext").text('This field is required.');
                    result = false;
                }
                else {
                    self.spanPIClubtext(false);
                    $("#spanPIClubtext").text('');
                }
            }
        }
        CheckingsafeBerthings = function () {
            if ($('input[name=IssafeBerthing]:checked').val() == 'N') {
                if ($('#IssafeBerthingtext').val() == "" || $('#IssafeBerthingtext').val() == null) {
                    self.spansafeBerthingtext(true);
                    $("#spansafeBerthingtext").text('This field is required.');
                    result = false;
                }
                else {
                    self.spansafeBerthingtext(false);
                    $("#spansafeBerthingtext").text('');
                }
            }
        }
        CheckingShrMringliness = function () {
            if ($('input[name=IsShrMringlines]:checked').val() == 'N') {
                if ($('#ShrMringlinestxt').val() == "" || $('#ShrMringlinestxt').val() == null) {
                    self.spanShrMringlinestext(true);
                    $("#spanShrMringlinestext").text('This field is required.');
                    result = false;
                }
                else {
                    self.spanShrMringlinestext(false);
                    $("#spanShrMringlinestext").text('');
                }
            }
        }

        CheckingTailRopeData = function () {
            if ($('input[name=IsTailRoping]:checked').val() == 'N') {
                if ($('#IsTailRopeText').val() == "" || $('#IsTailRopeText').val() == null) {
                    self.spanTailRopetext(true);
                    $("#spanTailRopetext").text('This field is required.');
                    result = false;
                }
                else {
                    self.spanTailRopetext(false);
                    $("#spanTailRopetext").text('');
                }
            }
        }

        ///cancel status
        self.cancelReqst = function (arrivalNotification) {

            self.viewMode('PopUp');
            arrivalNotification.workflowRemarks("Cancel");
            self.arrivalNotificationModelGrid(arrivalNotification);
            self.printView(false);
        }

        self.ViewcancelReqst = function (arrivalNotification) {
            self.viewMode('PopUpCslRem');
            self.arrivalNotificationModel().CancelRemarks(arrivalNotification.CancelRemarks());
            self.printView(false);
        }

        self.cancelWFView = function (ArrivalNotificationData) {
            $(".close").trigger("click");
            self.viewMode('List');
        }

        self.cancelWF = function (ArrivalNotificationData) {
            $(".close").trigger("click");
            self.LoadArrivalNotifications();
            self.viewMode('List');
        }

        self.editCargoQuantity = function (arrivalNotification) {
            self.viewModelHelper.apiGet('api/ArrivalNotification/GetArrivalNotificationNew',
             { vcn: arrivalNotification.VCN(), WorkflowInstanceId: 0 },
              function (result) {
                  self.arrivalNotificationList(ko.utils.arrayMap(result, function (item) {

                      return new IPMSRoot.ArrivalNotificationModel(item, self.arrivalNotificationReferenceData());
                  }));
                  //self.editArrivalNotification(self.arrivalNotificationList()[0]);                  
                  self.EditCarg(self.arrivalNotificationList()[0]);
              });


        }

        self.EditCarg = function (model) {
            self.isCargosplitVisible(false);

            var check = 0;
            for (var i = 0; i < model.ArrivaReasonArray().length; i++) {
                model.ReasonForVisit(model.ArrivaReasonArray()[i]);
                if (model.ReasonForVisit() == 'BUNK' || model.ReasonForVisit() == 'LABY' || model.ReasonForVisit() == 'BPLT') {
                    check = check + 1;
                }
                else {
                    check = 0;
                    break;
                }
            }

            if (model.VesselData().VesselType() == "Container Vessels") {
                if (check == 0) {
                    $('#Idshipperlabel1').text('Liner:');
                    $('#Idshipperlabel1').html(function (_, html) {
                        return html.replace(/\*/, "<span class='required'>*</span>");
                    });
                }
                else {
                    $('#Idshipperlabel1').text('Liner:');
                }
                self.arrivalNotificationReferenceData().ShipperseceiveDetails("");
                self.arrivalNotificationReferenceData().ShipperseceiveDetails(self.arrivalNotificationReferenceData().LinearDetails());
                //  self.isVoyageNumber(true);
                // self.arrivalNotificationModel().ShipperReceiverArray.extend({ required: true });
            }
            else {
                // self.isVoyageNumber(false);
                if (check == 0) {
                    $('#Idshipperlabel1').text('Shipper/Receiver:');
                    $('#Idshipperlabel1').html(function (_, html) {
                        return html.replace(/\*/, "<span class='required'>*</span>");
                    });
                }
                else {
                    $('#Idshipperlabel1').text('Shipper/Receiver:');
                }
                self.arrivalNotificationReferenceData().ShipperseceiveDetails("");
                self.arrivalNotificationReferenceData().ShipperseceiveDetails(self.arrivalNotificationReferenceData().ShipperReceivers());
                //  self.arrivalNotificationModel().ShipperReceiverArray.extend({ required: true });
            }

            self.arrivalNotificationModel().ArrivalCommodities(model.ArrivalCommodities());
            var cargo = model.CargoQuantitiesSplits();
            model.CargoQuantitiesSplits1(cargo);
            self.CargoSplitEventCargoGroup1(model);
            self.arrivalNotificationModel().CargoQuantitiesSplits1(cargo);

            self.arrivalNotificationModel().VCN(model.VCN());
            self.arrivalNotificationModel().ArrivaReasonArray(model.ArrivaReasonArray());
            self.arrivalNotificationModel().ShipperReceiverArray(model.ShipperReceiverArray());
            if (self.arrivalNotificationModel().ArrivalCommodities().length == 0) {
                self.isVisibleAdd(false);
            } else {
                self.isVisibleAdd(true);
            }

            self.viewMode('PopUpCargo');


        }



        self.cancelCargo = function (ArrivalNotificationData) {
            $(".close").trigger("click");
            self.LoadArrivalNotifications();
            self.viewMode('List');
        }

        self.updateCargo = function (arrivalNotification) {

            var errorCount = 0;
            if (arrivalNotification.ShipperReceiverArray().length == 0) {
                toastr.warning("Please Select Shipper/Receiver", "Voyage Registration");
                errorCount = errorCount + 1;
                return;
            }


            //ko.utils.arrayForEach(arrivalNotification.CargoQuantitiesSplits1(), function (CargoChk) {
            //    if (CargoChk.CargoQuantity() == "" || CargoChk.CargoQuantity() == undefined || CargoChk.CargoTypecode() == "" || CargoChk.CargoTypecode() == undefined || CargoChk.ShipperReceiver() == "" || CargoChk.ShipperReceiver() == undefined) {
            //        toastr.warning("Please Enter Selected Cargo Split Details", "Voyage Registration");
            //        errorCount = errorCount + 1;
            //    }
            //});


            ko.utils.arrayFirst(arrivalNotification.ArrivalCommodities(), function (item1) {
                var varcargotype = item1.CargoType();

                var varqty = 0;
                var varTotalqty = 0;
                var multi = $("#reasonforvisit").data("kendoMultiSelect");
                var reason = new Set(arrivalNotification.ArrivaReasonArray());

                if (item1.QtyOnboard() == "" || item1.QtyOnboard() == undefined) {
                    //toastr.warning("Please enter valid details of Quantities of Commodity", "Voyage Registration");
                    //errorCount = errorCount + 1;
                    //return;
                }
                else {

                    if (reason.has("DISC") && item1.FullpartDischarge() == "P") {
                        varqty = parseFloat(item1.Quantity());
                    }
                    else {
                        varqty = parseFloat(item1.QtyOnboard());
                    }

                    ko.utils.arrayForEach(arrivalNotification.CargoQuantitiesSplits1(), function (CargoChk) {
                        if (CargoChk.CargoTypecode() == varcargotype) {
                            //varTotalqty = varTotalqty + (parseFloat(CargoChk.CargoQuantity()));
                            varTotalqty = varTotalqty + (CargoChk.CargoQuantity() * 1000);
                        }
                    });

                    //if (errorCount == 0) {
                    //    if (self.vesseldetailsmodel().VesselType() != "V151" && self.vesseldetailsmodel().VesselType() != "V152" && self.vesseldetailsmodel().VesselType() != "V153") {
                    //        varTotalqty = varTotalqty / 1000;
                    //        if (varqty != varTotalqty) {

                    //            toastr.warning("Quantity of Commodity value mismatch with Split values.", "Cargo Quantities");
                    //            errorCount = errorCount + 1;
                    //            $('.modal-dialog').addClass('show');
                    //            return;
                    //        }
                    //    }
                    //}
                }

            });

            if (errorCount == 0) {
                self.viewModelHelper.apiPut('api/VoyageRegistrationCargo', ko.mapping.toJSON(arrivalNotification),
                                               function Message(data) {
                                                   toastr.success("Voyage Registration cargo details updated successfully with " + data.VCN + ".", "Voyage Registration");
                                                   $('#stack13').modal('hide');
                                                   $(".close").trigger("click");
                                                   self.LoadArrivalNotifications();
                                                   self.viewMode('List');
                                               });
            }
            else {
                $('#stack13').modal('show');
                return;
            }


        }

        self.cancelWFRequestNew = function (arrivalNotification) {

            var rem = arrivalNotification.workflowRemarks();
            self.viewModelHelper.apiGet('api/ArrivalNotification/GetArrivalNotificationNew',
                       { vcn: arrivalNotification.VCN(), WorkflowInstanceId: 0 },
                        function (result) {
                            self.arrivalNotificationList(ko.utils.arrayMap(result, function (item) {
                                return new IPMSRoot.ArrivalNotificationModel(item, self.arrivalNotificationReferenceData());
                            }));
                            self.arrivalNotificationList()[0].CancelRemarks(rem);
                            self.cancelWFRequest(self.arrivalNotificationList()[0], rem);
                        });
        }

        self.cancelWFRequest = function (ArrivalNotificationData, rem) {
            var dateobj = kendo.parseDate(ArrivalNotificationData.ETA(), self.dateFormat.IPMSDateTimeFormat());
            var datestring = kendo.toString(dateobj, "yyyy-MM-dd HH:mm");
            ArrivalNotificationData.ETA(datestring);
            ArrivalNotificationData.workflowRemarks(rem);

            if (ArrivalNotificationData.ETD() != "") {
                var dateobjETD = kendo.parseDate(ArrivalNotificationData.ETD(), self.dateFormat.IPMSDateTimeFormat());
                if (dateobjETD == null) {
                    var dateobjETD = kendo.parseDate(new Date(ArrivalNotificationData.ETD()), self.dateFormat.IPMSDateTimeFormat());
                }
                var datestringETD = kendo.toString(dateobjETD, "yyyy-MM-dd HH:mm");
                ArrivalNotificationData.ETD(datestringETD);
            }
            self.viewModelHelper.apiPost('api/ArrivalNotification/Cancel', ko.mapping.toJSON(ArrivalNotificationData),
                            function Message(data) {
                                toastr.success("Voyage Registration Cancelled Successfully", "ArrivalNotification");
                                $(".close").trigger("click");
                                self.LoadArrivalNotifications();
                                self.viewMode('List');
                            });
        }

        self.BerthChange1 = function (arrivalNotification) {
        }

        self.BerthChange11 = function (event) {
        }
        self.BerthChange2 = function (event) {

            var groupSelected = self.arrivalNotificationReferenceData().CargoGroupDetails().filter(function (item) {
                return item.Groupcode() === event.CargoGroup();
            })[0];

            if (groupSelected != undefined && groupSelected != null) {
                self.CargoTypeInformation(ko.toJS(groupSelected.CargoTypeDetails));
            } else {
                self.CargoTypeInformation.removeAll();
            }
        }

        CalculateArrMean = function () {

            if ($("#ArrivalAfterDraft").val() != "" && $("#ArrivalForwardDraft").val() != "") {
                var frwdDraft = parseFloat($("#ArrivalForwardDraft").val());
                var aftrDraft = parseFloat($("#ArrivalAfterDraft").val());
                var Mean = (aftrDraft + frwdDraft) / 2;
                if (isNaN(Mean)) {

                    self.arrivalNotificationModel().ArrivalDraftMean('');
                }
                else {
                    self.arrivalNotificationModel().ArrivalDraftMean(Mean.toFixed(2));
                }
                CalculateKeeltoMastHt();
            }
        }

        CalculateDepMean = function () {
            if ($("#DepartureForwardDraft").val() != "" && $("#DepartureAfterDraft").val() != "") {
                var frwdDraft = parseFloat($("#DepartureForwardDraft").val());
                var aftrDraft = parseFloat($("#DepartureAfterDraft").val());
                var Mean = (aftrDraft + frwdDraft) / 2;
                if (isNaN(Mean)) {

                    self.arrivalNotificationModel().DepartureDraftMean('');
                }
                else {
                    self.arrivalNotificationModel().DepartureDraftMean(Mean.toFixed(2));
                }

            }
        }
        CalculateKeeltoMastHt = function () {
            if ($("#PresentAirDrafttxt").val() != "" && $("#ArrivalDraftMean").val() != "") {
                var arrivalDraftMean = parseFloat($("#ArrivalDraftMean").val());
                var presentAirDraft = parseFloat($("#PresentAirDrafttxt").val());
                var Height = arrivalDraftMean + presentAirDraft;
                if (isNaN(Height)) {

                    self.arrivalNotificationModel().KelltoMastHeight('');
                }
                else {
                    self.arrivalNotificationModel().KelltoMastHeight(Height.toFixed(2));
                }
            }
        }

        self.Initialize();
    }
    ko.bindingHandlers.kendoAutoComplete.options.filter = "contains";
    IPMSRoot.ArrivalNotificationViewModel = ArrivalNotificationViewModel;
}(window.IPMSROOT));

//ArrivalNotification Initializetion(pageload) mode
function MapArrivalNotificationDetails(arrivalnotificationdata) {

    self.arrivalNotificationModel().VCN(arrivalnotificationdata.VCN);
    self.arrivalNotificationModel().WorkflowInstanceId(arrivalnotificationdata.WorkflowInstanceId);
    self.arrivalNotificationModel().PortCode(arrivalnotificationdata.PortCode);
    self.arrivalNotificationModel().VesselID(arrivalnotificationdata.VesselID);
    self.arrivalNotificationModel().VesselName(arrivalnotificationdata.VesselName);
    self.arrivalNotificationModel().VoyageIn(arrivalnotificationdata.VoyageIn);
    self.arrivalNotificationModel().VoyageOut(arrivalnotificationdata.VoyageOut);
    self.arrivalNotificationModel().IsTerminalOperator(arrivalnotificationdata.IsTerminalOperator);
    self.arrivalNotificationModel().TerminalOperatorID(arrivalnotificationdata.TerminalOperatorID);
    self.arrivalNotificationModel().ReasonForVisit(arrivalnotificationdata.ReasonForVisit);
    self.arrivalNotificationModel().ArrDraft(arrivalnotificationdata.ArrDraft);
    self.arrivalNotificationModel().DepDraft(arrivalnotificationdata.DepDraft);
    self.arrivalNotificationModel().LastPortOfCall(arrivalnotificationdata.LastPortOfCall);
    self.arrivalNotificationModel().NextPortOfCall(arrivalnotificationdata.NextPortOfCall);
    self.arrivalNotificationModel().AppliedForISPS(arrivalnotificationdata.AppliedForISPS);
    self.ArrivalNotificationData().AppliedDate(arrivalnotificationdata.AppliedDate);
    self.arrivalNotificationModel().Clearance(arrivalnotificationdata.Clearance);
    self.arrivalNotificationModel().ISPSReferenceNo(arrivalnotificationdata.ISPSReferenceNo);
    self.arrivalNotificationModel().PreferredPortCode(arrivalnotificationdata.PreferredPortCode);
    self.arrivalNotificationModel().PreferredQuayCode(arrivalnotificationdata.PreferredQuayCode);
    self.arrivalNotificationModel().PreferredBerthCode(arrivalnotificationdata.PreferredBerthCode);
    self.arrivalNotificationModel().AlternatePortCode(arrivalnotificationdata.AlternatePortCode);
    self.arrivalNotificationModel().AlternateQuayCode(arrivalnotificationdata.AlternateQuayCode);
    self.arrivalNotificationModel().AlternateBerthCode(arrivalnotificationdata.AlternateBerthCode);
    self.arrivalNotificationModel().PreferredSideDock(arrivalnotificationdata.PreferredSideDock);
    self.arrivalNotificationModel().PreferredSideAlternateBirth(arrivalnotificationdata.PreferredSideAlternateBirth);
    self.arrivalNotificationModel().ReasonAlternateBirth(arrivalnotificationdata.ReasonAlternateBirth);
    self.arrivalNotificationModel().Tidal(arrivalnotificationdata.Tidal);
    self.arrivalNotificationModel().BallastWater(arrivalnotificationdata.BallastWater);

    // Vessel Backup
    self.arrivalNotificationModel().LengthOverallInM(arrivalnotificationdata.LengthOverallInM);
    self.arrivalNotificationModel().VesselName(arrivalnotificationdata.VesselName);
    self.arrivalNotificationModel().GrossRegisteredTonnageInMT(arrivalnotificationdata.GrossRegisteredTonnageInMT);
    self.arrivalNotificationModel().ReducedGRT(arrivalnotificationdata.ReducedGRT);
    self.arrivalNotificationModel().BeamInM(arrivalnotificationdata.BeamInM);

    self.arrivalNotificationModel().WasteDeclaration(arrivalnotificationdata.WasteDeclaration);
    self.arrivalNotificationModel().DaylightRestriction(arrivalnotificationdata.DaylightRestriction);
    self.arrivalNotificationModel().IsSpecialNature(arrivalnotificationdata.IsSpecialNature);
    self.arrivalNotificationModel().SpecialNatureReason(arrivalnotificationdata.SpecialNatureReason);
    self.arrivalNotificationModel().ExceedPortLimitations(arrivalnotificationdata.ExceedPortLimitations);
    self.arrivalNotificationModel().ExceedPortLimitationsReason(arrivalnotificationdata.ExceedPortLimitationsReason);
    self.arrivalNotificationModel().DaylightSpecifyReason(arrivalnotificationdata.DaylightSpecifyReason);
    self.arrivalNotificationModel().ExceedSpecifyReason(arrivalnotificationdata.ExceedSpecifyReason);
    self.arrivalNotificationModel().AnyAdditionalInfo(arrivalnotificationdata.AnyAdditionalInfo);
    self.arrivalNotificationModel().CreatedBy(arrivalnotificationdata.CreatedBy);
    self.arrivalNotificationModel().CreatedDate(arrivalnotificationdata.CreatedDate);
}

//this method is  fires when HandleProgressBarAndActiveTab   is pressed
function HandleProgressBarAndActiveTab(index) {

    var total = $('#ulTabs').find('li').length;
    var current = index + 1;
    $('li', $('#divFormWizardTabNavigation')).removeClass("done");
    var li_list = $('#ulTabs').find('li');
    for (var i = 0; i < index; i++) {
        $(li_list[i]).addClass("done");
    }
    for (var i = current; i < total; i++) {
        $(li_list[i]).removeClass("done");
        $(li_list[i]).removeClass("active");
    }
    $(li_list[index]).addClass("active");
    var $percent = (current / total) * 100;
    $('#divFormWizardTabNavigation').find('.progress-bar').css({
        width: $percent + '%'
    });
}

var keynum;
var keychar;
var charcheck;

// validate the data 
function ValiedDocumentCheckNew(self, ArrivalNotificationData) {

    var Documentalert = "";
    var Result = "";
    var UploadedDocs = [];
    var NotfoundDocs = [];
    var MandatoryDocs = self.arrivalNotificationReferenceData().ArrivalConfigDetails()[0].requireddocs();
    if (MandatoryDocs.length > 0) {
        var MandatoryDocsArray = MandatoryDocs.split(',');
        if (ArrivalNotificationData.ArrivalDocuments().length > 0) {
            $.map(ArrivalNotificationData.ArrivalDocuments, function (item) {
                var ArrivalDocumentsC = item;
                if (ArrivalDocumentsC != null)
                    ko.utils.arrayForEach(ArrivalDocumentsC, function (DocChk) {
                        if (DocChk !== undefined) {
                            UploadedDocs.push(DocChk.DocumentCode());
                        }
                    });
            });

            $.each(MandatoryDocsArray, function (k, v) {
                if ($.inArray(v, UploadedDocs) < 0) {
                    NotfoundDocs.push(v);
                }
            });

            if (NotfoundDocs.length > 0) {
                $.each(self.arrivalNotificationReferenceData().Doctypes(), function (key, item) {
                    if (item != null)
                        if ($.inArray(item.SubCatCode(), NotfoundDocs) < 0) {
                        }
                        else {
                            Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                        }
                });

                $.each(self.arrivalNotificationReferenceData().StatutoryDoctypes(), function (key, item) {
                    if (item != null)
                        if ($.inArray(item.SubCatCode(), NotfoundDocs) < 0) {
                        }
                        else {
                            Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                        }
                });

                $.each(self.arrivalNotificationReferenceData().CargoDoctypes(), function (key, item) {
                    if (item != null)
                        if ($.inArray(item.SubCatCode(), NotfoundDocs) < 0) {
                        }
                        else {
                            Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                        }
                });

                $.each(self.arrivalNotificationReferenceData().AppointmentDoctypes(), function (key, item) {
                    if (item != null)
                        if ($.inArray(item.SubCatCode(), NotfoundDocs) < 0) {
                        }
                        else {
                            Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                        }
                });
            }
        }
        else {
            $.each(self.arrivalNotificationReferenceData().Doctypes(), function (key, item) {
                if (item != null)
                    if ($.inArray(item.SubCatCode(), MandatoryDocsArray) < 0) {
                    }
                    else {
                        Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                    }
            });

            $.each(self.arrivalNotificationReferenceData().StatutoryDoctypes(), function (key, item) {
                if (item != null)
                    if ($.inArray(item.SubCatCode(), MandatoryDocsArray) < 0) {
                    }
                    else {
                        Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                    }
            });

            $.each(self.arrivalNotificationReferenceData().CargoDoctypes(), function (key, item) {
                if (item != null)
                    if ($.inArray(item.SubCatCode(), MandatoryDocsArray) < 0) {
                    }
                    else {
                        Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                    }
            });

            $.each(self.arrivalNotificationReferenceData().AppointmentDoctypes(), function (key, item) {
                if (item != null)
                    if ($.inArray(item.SubCatCode(), MandatoryDocsArray) < 0) {
                    }
                    else {
                        Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                    }
            });

        }
        Documentalert = Documentalert.substring(0, Documentalert.length - 1);
        var Alertindex = Documentalert.lastIndexOf(',');
        for (var i = 0; i < Documentalert.length; i++) {
            if (i == Alertindex) {
                Result = Result + ' & ';
            }
            else {
                Result = Result + Documentalert[i];
            }
        }
        Documentalert = Result;

        return Documentalert;
    }
}

function ValiedDocumentCheck(self, ArrivalNotificationData) {

    var docISPS = "N";
    var docPHCD = "N";
    var docIMDO = "N";
    var docBWD = "N";
    var docWDD = "N";
    var docLDD = "N";
    var docITCD = "N";
    var docPCD = "N";
    var docSRD = "N";
    var docSHRD = "N";

    var Documentalert = "";
    var isalert = false;
    //BWD  //IMDO      //ISPS   --  //LDD  //PHCD         //WDD   
    //ITCD  PCD SRD SHRD
    if (ArrivalNotificationData.ArrivalDocuments().length > 0) {

        console.log(ArrivalNotificationData.ArrivalDocuments());
        $.map(ArrivalNotificationData.ArrivalDocuments, function (item) {
            var ArrivalDocumentsC = item;
            if (ArrivalDocumentsC != null)
                ko.utils.arrayForEach(ArrivalDocumentsC, function (DocChk) {

                    if (DocChk !== undefined) {
                        if (DocChk.DocumentCode() == "ISPS") {
                            docISPS = "Y"
                        }
                        else if (DocChk.DocumentCode() == "PHCD") {
                            docPHCD = "Y"
                        }
                        else if (DocChk.DocumentCode() == "IMDO") {
                            docIMDO = "Y"
                        }
                        else if (DocChk.DocumentCode() == "BWD") {
                            docBWD = "Y"
                        }
                        else if (DocChk.DocumentCode() == "WDD") {
                            docWDD = "Y"
                        }
                        else if (DocChk.DocumentCode() == "LDD") {
                            docLDD = "Y"
                        }
                        else if (DocChk.DocumentCode() == "ITCD") {
                            docITCD = "Y"

                        }
                        else if (DocChk.DocumentCode() == "PCD") {
                            docPCD = "Y"
                        }
                        else if (DocChk.DocumentCode() == "SRD") {
                            docSRD = "Y"
                        }
                        else if (DocChk.DocumentCode() == "SHRD") {
                            docSHRD = "Y"
                        }
                    }
                });
        });

        if (docBWD == "N") {
            isalert = true;
            $.each(self.arrivalNotificationReferenceData().Doctypes(), function (key, item) {
                if (item != null)
                    if (item.SubCatCode() == "BWD") {
                        Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                    }
            });
        }

        if (docIMDO == "N") {
            isalert = true;
            $.each(self.arrivalNotificationReferenceData().Doctypes(), function (key, item) {
                if (item != null)
                    if (item.SubCatCode() == "IMDO") {
                        Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                    }
            });
        }

        if (docISPS == "N") {
            isalert = true;
            $.each(self.arrivalNotificationReferenceData().Doctypes(), function (key, item) {
                if (item != null)
                    if (item.SubCatCode() == "ISPS") {
                        Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                    }
            });
        }
        if (docITCD == "N") {
            isalert = true;
            $.each(self.arrivalNotificationReferenceData().Doctypes(), function (key, item) {
                if (item != null)
                    if (item.SubCatCode() == "ITCD") {
                        Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                    }
            });
        }
        if (docLDD == "N") {
            isalert = true;
            $.each(self.arrivalNotificationReferenceData().Doctypes(), function (key, item) {
                if (item != null)
                    if (item.SubCatCode() == "LDD") {
                        Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                    }
            });
        }

        if (docPHCD == "N") {
            isalert = true;
            $.each(self.arrivalNotificationReferenceData().Doctypes(), function (key, item) {
                if (item != null)
                    if (item.SubCatCode() == "PHCD") {
                        Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                    }
            });
        }
        if (docPCD == "N") {
            isalert = true;
            $.each(self.arrivalNotificationReferenceData().Doctypes(), function (key, item) {
                if (item != null)
                    if (item.SubCatCode() == "PCD") {
                        Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                    }
            });
        }
        if (docSRD == "N") {
            isalert = true;
            $.each(self.arrivalNotificationReferenceData().Doctypes(), function (key, item) {
                if (item != null)
                    if (item.SubCatCode() == "SRD") {
                        Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                    }
            });
        }

        if (docSHRD == "N") {
            isalert = true;
            $.each(self.arrivalNotificationReferenceData().Doctypes(), function (key, item) {
                if (item != null)
                    if (item.SubCatCode() == "SHRD") {
                        Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                    }
            });
        }

        if (docWDD == "N") {
            isalert = true;
            $.each(self.arrivalNotificationReferenceData().Doctypes(), function (key, item) {
                if (item != null)
                    if (item.SubCatCode() == "WDD") {
                        Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
                    }
            });
        }

        if (isalert) {
            Documentalert = Documentalert.substring(0, Documentalert.length - 1);
            Documentalert = Documentalert + '.';
        }
        return Documentalert;
    }
    else {

        $.each(self.arrivalNotificationReferenceData().Doctypes(), function (key, item) {
            if (item != null)
                Documentalert = Documentalert + ' ' + item.SubCatName() + ",";
        });
        Documentalert = Documentalert.substring(0, Documentalert.length - 1);
        Documentalert = Documentalert + '.';
        return Documentalert;
    }
}

function ValidateFormValues(self, ArrivalNotificationData) {

    ArrivalNotificationData.ReasonForVisit('');
    var isOptnlInfo = 0;
    var result = true;
    var errors = 0;
    var check = 0;
    for (var i = 0; i < ArrivalNotificationData.ArrivaReasonArray().length; i++) {
        ArrivalNotificationData.ReasonForVisit(ArrivalNotificationData.ArrivaReasonArray()[i]);
        if (ArrivalNotificationData.ReasonForVisit() == 'BUNK' || ArrivalNotificationData.ReasonForVisit() == 'LABY' || ArrivalNotificationData.ReasonForVisit() == 'BPLT') {
            check = check + 1;
        }
        else {
            check = 0;
            break;
        }
    }
    $("#spanClassifications").text('');

    if (ArrivalNotificationData.VesselType() == '1515') {

        if ($("#Classifications").val() == '') {
            $("#spanClassifications").text('This field is required.');
            errors = errors + 1;
        }
    }

    ArrivalNotificationData.ReasonForVisit('');
    var Content = $("#autocompleteAN").val();
    if ($("#autocompleteAN").val() == '') {
        self.isspanVslValid(true);
        $("#spanVslValid").text('This field is required.');
    }
    else if (ArrivalNotificationData.VesselID() == '' || ArrivalNotificationData.VesselName() == '') {
        self.isspanVslValid(true);
        if (Content.length > 0) {
            $("#spanVslValid").text('Invalid Vessel Name/IMO No.');
        }
        else {
            $("#spanVslValid").text('This field is required.');
        }
    }

    if (self.isEmployee()) {
        if (ArrivalNotificationData.SecondaryAgentID1() == null || ArrivalNotificationData.SecondaryAgentID1() == 0 || ArrivalNotificationData.SecondaryAgentID1() == '') {
            self.isspanEmpagent(true);
            result = false;
        }
    }

    if ($("#ArrivalVoyageNumber").val() == "" || $("#ArrivalVoyageNumber").val() == null) {
        ArrivalNotificationData.VoyageNumber.extend({ required: true });
        result = false;
    }
    else {
        ArrivalNotificationData.VoyageNumber.rules.remove(function (item) { return item.rule = "required"; });
    }

    if (self.isEditEtavalEnable()) {
        if (($("#ETA").val() == "") || ($("#ETA").val() == null) || ($("#ETD").val() == "") || ($("#ETD").val() == null)) {
            // toastr.warning("Please Enter ETA/ETD Dates. Please Check Below.");
            result = false;
        }
        else {
            var StartDateValue = $("#ETA").val();
            var EndDateValue = $("#ETD").val();
            var myStartDatePicker = kendo.parseDate(StartDateValue, self.dateFormat.IPMSDateTimeFormat());
            var myEndDatePicker = kendo.parseDate(EndDateValue, self.dateFormat.IPMSDateTimeFormat());
            if (myStartDatePicker > myEndDatePicker) {
                toastr.warning("ETD Should Be Always More Than ETA. Please Check Below.");
                result = false;
            }
            var day1 = myStartDatePicker.getDate();
            var month1 = myStartDatePicker.getMonth();
            var year1 = myStartDatePicker.getFullYear();
            var Hour1 = myStartDatePicker.getHours() //+ 1;
            var Mnt1 = myStartDatePicker.getMinutes();
            var todaydate = new Date();
            var todate = new Date(todaydate);
            var day = todate.getDate();
            var month = todate.getMonth();
            var year = todate.getFullYear();
            var Hour = todate.getHours();
            var Mnt = todate.getMinutes();
            if (todate > myStartDatePicker) {
                toastr.warning("Please enter valid ETA date. ");
                result = false;
            }
        }

        if (self.arrivalNotificationModel().ETA() != "" || self.arrivalNotificationModel().ETA() != null || self.arrivalNotificationModel().ETD() != "" || self.arrivalNotificationModel().ETD() != null) {
            var StartDateValue = $("#ETA").val();
            var EndDateValue = $("#ETD").val();
            var myStartDatePicker = kendo.parseDate(StartDateValue, self.dateFormat.IPMSDateTimeFormat());
            var myEndDatePicker = kendo.parseDate(EndDateValue, self.dateFormat.IPMSDateTimeFormat());
            if (myStartDatePicker > myEndDatePicker) {
                toastr.warning("ETD Should Be Always More Than ETA. Please Check Below.");
                result = false;
            }

        }
        else {
            toastr.warning("Please Enter ETA/ETD Dates. Please Check Below.");
            result = false;
        }
    }

    if (($("#ETA").val() == "") || $("#ETA").val() == null || $("#ETD").val() == "" || $("#ETD").val() == null) {
        if (($("#ETA").val() == "") || ($("#ETA").val() == null)) {
            self.isspanEtaValid(true)
            $("#spanEtaValid").text('This field is required.');

        }
        if (($("#ETD").val() == "") || ($("#ETD").val() == null)) {
            self.isspanEtdValid(true);
            $("#spanEtdValid").text('This field is required.');
        }
        // return;
    }




    if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
        for (var i = 0; i < ArrivalNotificationData.ArrivaReasonArray().length; i++) {
            ArrivalNotificationData.ReasonForVisit(ArrivalNotificationData.ArrivaReasonArray()[i]);

            if (ArrivalNotificationData.ReasonForVisit() == 'DRYD' || ArrivalNotificationData.ReasonForVisit() == 'BUNK' || ArrivalNotificationData.ReasonForVisit() == 'LABY' || ArrivalNotificationData.ReasonForVisit() == 'REPA' || ArrivalNotificationData.ReasonForVisit() == 'OTHR' || ArrivalNotificationData.ReasonForVisit() == 'PASS' || ArrivalNotificationData.ReasonForVisit() == 'STOR' || ArrivalNotificationData.ReasonForVisit() == 'TRAN') {

                if (self.QuantitiesofCommoditiesEnable() == 'false') { self.QuantitiesofCommoditiesEnable(false); }
                if (self.BullardPulltestEnable() == 'true') { self.BullardPulltestEnable(false); }
            }

            else if (ArrivalNotificationData.ReasonForVisit() == 'BPLT') {

                if (self.BullardPulltestEnable() == 'true') {
                    self.BullardPulltestEnable(false);
                }
                if (self.QuantitiesofCommoditiesEnable() == 'false') { self.QuantitiesofCommoditiesEnable(false); }
            }
            else {
                isOptnlInfo = 1;
            }

            if (ArrivalNotificationData.ReasonForVisit() == 'DISC' || ArrivalNotificationData.ReasonForVisit() == 'LOAD') {
                self.QuantitiesofCommoditiesEnable(true);
                if (self.BullardPulltestEnable() == 'true') {
                    self.BullardPulltestEnable(false);
                }
                //var errormsg = (ArrivalNotificationData.ReasonForVisit() == 'DISC') ? "Please Select the Load Port" : "Please Select the Discharge Port";

                //if (!(self.Vesseltypecomparision())) {
                //    if ($("#ResonForvisitdropdown :selected").text() == "Select....") {
                //        toastr.warning(errormsg);
                //       // self.isspanResonForvisitdropdown(true);
                //      //  $("#spanResonForvisitdropdown").text('This field is required.');
                //        result = false;
                //    }
                //}
                //else if ($("#ResonForvisitdropdown :selected").text() == "Select....") {
                //    toastr.warning(errormsg);
                //  //  self.isspanResonForvisitdropdown(true);
                // //   $("#spanResonForvisitdropdown").text('This field is required.');
                //    result = false;
                //}
            }
        }
    }
    if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
        if (self.arrivalNotificationReferenceData().ArrivalConfigDetails()[0].Isreqpreferedberth() == 'true') {
            //if ($("#preferredberthList").val() == "" || $("#preferredberthList").val() == null) {
            //    $("#spanpreferredberth").text('This field is required.');
            //    self.isspanpreferredberth(true);
            //}
            //else {
            //    $("#spanpreferredberth").text('');
            //    self.isspanpreferredberth(false);
            //}
            if ($("#selDockList").val() == "" || $("#selDockList").val() == null) {
                $("#spanPreferredSideDock").text('This field is required.');
                self.isspanPreferredSideDock(true);
            }
            else {
                $("#spanPreferredSideDock").text('');
                self.isspanPreferredSideDock(false);
            }
        }
    }


    if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
        if ($("#totalCrewNotxt").val() == "" || $("#totalCrewNotxt").val() == null) {
            // $('#spantotalCrewNotxt').text('This field is required.')
            //  result = false;
        }
        if (ArrivalNotificationData.IsPakistaniCrew() == "Y") {
            if ($("#PakistaniCrewNOtxt").val() == "" || $("#PakistaniCrewNOtxt").val() == null) {
                $('#spanPakistaniCrewNOtxt').text('This field is required.');
                self.isspanPakistaniCrew(true);
                result = false;
            }
            else if (parseInt($("#totalCrewNotxt").val()) < (parseInt($("#PakistaniCrewNOtxt").val()))) {
                toastr.warning("Please Check No.  of Pakistani Crew on Board are More than Total No. of Crew on Board");
                result = false;
            }
            else {
                self.isspanPakistaniCrew(false);
                $('#spanPakistaniCrewNOtxt').text('');
            }
        }
    }
    if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
        if (ArrivalNotificationData.AdditionalTugReq() == "Y") {
            if ($("#NumberofTugstxt").val() == "" || $("#NumberofTugstxt").val() == null) {
                $('#spanNumberofTugs').text('This field is required.')
                self.isspanAdditionalTugReq(true);
                result = false;
            }
            else {
                $('#spanNumberofTugs').text('');
                self.isspanAdditionalTugReq(false);
            }
        }
    }
    if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
        var ReasonforVisitKendo = $("#ShipperReceiver").data('kendoMultiSelect');
        if ((ReasonforVisitKendo.value() == "" || ReasonforVisitKendo.value() == null || ReasonforVisitKendo._values[0] == undefined) && check == 0) {
            // $('#spanShipperReceiver').text('This field is required.')
            // self.isspanShipperReceiver(true);
            // result = false;
        }
        else {
            // $('#spanShipperReceiver').text('');
            // self.isspanShipperReceiver(false);
        }
    }
    if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
        var ReasonforVisitKendo = $("#reasonforvisit").data('kendoMultiSelect');
        if (ReasonforVisitKendo.value() == "" || ReasonforVisitKendo.value() == null) {
            $('#spanReasonForVisit').text('This field is required.')
            self.isspanReasonForVisit(true);
            result = false;
        }
        else {
            $('#spanReasonForVisit').text('');
            self.isspanReasonForVisit(false);
        }
    }
    if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
        if (self.arrivalNotificationReferenceData().ArrivalConfigDetails()[0].Isreqportofcall() == 'true') {
            ArrivalNotificationData.LastPortOfCall.extend({ required: true });
            ArrivalNotificationData.NextPortOfCall.extend({ required: true });
            if ($("#LastPortOfCall").val() == "" || $("#LastPortOfCall").val() == null) {
                $("#spanLastPortOfCall").text('This field is required.');
                self.isspanLastPortOfCall(true);
                result = false;
            }
            else {
                $("#spanLastPortOfCall").text('');
                self.isspanLastPortOfCall(false);
            }
            if ($("#NextPortOfCall").val() == "" || $("#NextPortOfCall").val() == null) {
                $("#spanNextPortOfCall").text('This field is required.');
                self.isspanNextPortOfCall(true);
                result = false;
            }
            else {
                $("#spanNextPortOfCall").text('');
                self.isspanNextPortOfCall(false);
            }
        }
        else {
            ArrivalNotificationData.LastPortOfCall.rules.remove(function (item) { return item.rule = "required"; });
            ArrivalNotificationData.NextPortOfCall.rules.remove(function (item) { return item.rule = "required"; });
        }
    }
    if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
        if (self.arrivalNotificationReferenceData().ArrivalConfigDetails()[0].Isreqoperational() == 'true') {
            ArrivalNotificationData.PlanDateTimeOfBerth.extend({ required: true });
            ArrivalNotificationData.PlanDateTimeToVacateBerth.extend({ required: true });
            ArrivalNotificationData.PlanDateTimeToStartCargo.extend({ required: true });
            ArrivalNotificationData.PlanDateTimeToCompleteCargo.extend({ required: true });
            if (isOptnlInfo == 0) {
                ArrivalNotificationData.PlanDateTimeOfBerth.rules.remove(function (item) { return item.rule = "required"; });
                ArrivalNotificationData.PlanDateTimeToVacateBerth.rules.remove(function (item) { return item.rule = "required"; });
                ArrivalNotificationData.PlanDateTimeToStartCargo.rules.remove(function (item) { return item.rule = "required"; });
                ArrivalNotificationData.PlanDateTimeToCompleteCargo.rules.remove(function (item) { return item.rule = "required"; });
                self.isspanOptValid1(false);
                self.isspanOptValid2(false);
                self.isspanOptValid3(false);
                self.isspanOptValid4(false);
            }
        }
        else {
            ArrivalNotificationData.PlanDateTimeOfBerth.rules.remove(function (item) { return item.rule = "required"; });
            ArrivalNotificationData.PlanDateTimeToVacateBerth.rules.remove(function (item) { return item.rule = "required"; });
            ArrivalNotificationData.PlanDateTimeToStartCargo.rules.remove(function (item) { return item.rule = "required"; });
            ArrivalNotificationData.PlanDateTimeToCompleteCargo.rules.remove(function (item) { return item.rule = "required"; });
            self.isspanOptValid1(false);
            self.isspanOptValid2(false);
            self.isspanOptValid3(false);
            self.isspanOptValid4(false);
        }
    } else {
        ArrivalNotificationData.PlanDateTimeOfBerth.rules.remove(function (item) { return item.rule = "required"; });
        ArrivalNotificationData.PlanDateTimeToVacateBerth.rules.remove(function (item) { return item.rule = "required"; });
        ArrivalNotificationData.PlanDateTimeToStartCargo.rules.remove(function (item) { return item.rule = "required"; });
        ArrivalNotificationData.PlanDateTimeToCompleteCargo.rules.remove(function (item) { return item.rule = "required"; });
        self.isspanOptValid1(false);
        self.isspanOptValid2(false);
        self.isspanOptValid3(false);
        self.isspanOptValid4(false);
    }


    if (ArrivalNotificationData.IsGovtVessel() == 'N') {
        if ($("#ForeignCoastal").val() == "" || $("#ForeignCoastal").val() == null) {
            ArrivalNotificationData.ForeignCostalRun.extend({ required: true });
        }
        else {
            ArrivalNotificationData.ForeignCostalRun.rules.remove(function (item) { return item.rule = "required"; });
        }


        if ($("#MCargoTYPE").val() == "" || $("#MCargoTYPE").val() == null) {
            ArrivalNotificationData.CargoTYPE.extend({ required: true });
        }
        else {
            ArrivalNotificationData.CargoTYPE.rules.remove(function (item) { return item.rule = "required"; });
        }

        if ($("#ArrivalDraftMean").val() == "" || $("#ArrivalDraftMean").val() == null) {
            ArrivalNotificationData.ArrivalDraftMean.extend({ required: true });
            result = false;
        }
        else {
            ArrivalNotificationData.ArrivalDraftMean.rules.remove(function (item) { return item.rule = "required"; });
        }
        if ($("#DepartureDraftMean").val() == "" || $("#DepartureDraftMean").val() == null) {
            ArrivalNotificationData.DepartureDraftMean.extend({ required: true });
            result = false;
        }
        else {
            ArrivalNotificationData.DepartureDraftMean.rules.remove(function (item) { return item.rule = "required"; });
        }

        if ($("#ForeignCoastal").val() == "" || $("#ForeignCoastal").val() == null) {
            ArrivalNotificationData.ForeignCostalRun.extend({ required: true });
            result = false;
        }
        else {
            ArrivalNotificationData.ForeignCostalRun.rules.remove(function (item) { return item.rule = "required"; });
        }

        if ($("#MCargoTYPE").val() == "" || $("#MCargoTYPE").val() == null) {
            ArrivalNotificationData.CargoTYPE.extend({ required: true });
            result = false;
        }
        else {
            ArrivalNotificationData.CargoTYPE.rules.remove(function (item) { return item.rule = "required"; });
        }

        if ($("#totalCrewNotxt").val() == "" || $("#totalCrewNotxt").val() == null) {
            //ArrivalNotificationData.CrewNo.extend({ required: true });
            //result = false;
        }
        else {
            ArrivalNotificationData.CrewNo.rules.remove(function (item) { return item.rule = "required"; });
        }

        if ($("#ArrivalForwardDraft").val() == "" || $("#ArrivalForwardDraft").val() == null) {
            ArrivalNotificationData.Arrforwarddraft.extend({ required: true });
            result = false;
        }
        else {
            ArrivalNotificationData.Arrforwarddraft.rules.remove(function (item) { return item.rule = "required"; });
        }
        if ($("#ArrivalAfterDraft").val() == "" || $("#ArrivalAfterDraft").val() == null) {
            ArrivalNotificationData.Arrafterdraft.extend({ required: true });
            result = false;
        }
        else {
            ArrivalNotificationData.Arrafterdraft.rules.remove(function (item) { return item.rule = "required"; });
        }

        if ($("#DepartureForwardDraft").val() == "" || $("#DepartureForwardDraft").val() == null) {
            ArrivalNotificationData.Deptforwarddraft.extend({ required: true });
            result = false;
        }
        else {
            ArrivalNotificationData.Deptforwarddraft.rules.remove(function (item) { return item.rule = "required"; });
        }
        if ($("#DepartureAfterDraft").val() == "" || $("#DepartureAfterDraft").val() == null) {
            ArrivalNotificationData.Deptafterdraft.extend({ required: true });
            result = false;
        }
        else {
            ArrivalNotificationData.Deptafterdraft.rules.remove(function (item) { return item.rule = "required"; });
        }
        //if (($("#PresentAirDrafttxt").val() == "") || ($("#PresentAirDrafttxt").val() == null)) {
        //    ArrivalNotificationData.PresentAirDraft.extend({ required: true });
        //    result = false;
        //}
        //else {
        //    ArrivalNotificationData.PresentAirDraft.rules.remove(function (item) { return item.rule = "required"; });
        //}

        if ($("#ArrivalForwardDraft").val() == ".") {
            toastr.warning("Please Enter Valid Arrival Forward", "Voyage Registration");
            result = false;
        }

        if ($("#ArrivalAfterDraft").val() == ".") {
            toastr.warning("Please Enter Valid Arrival After", "Voyage Registration");
            //$("#spanArrivalAfterDraft").text('Please Enter Valid Arrival Draft');

            result = false;
        }

        if ($("#DepartureForwardDraft").val() == ".") {
            toastr.warning("Please Enter Valid Departure Forward", "Voyage Registration");
            // $("#spanDepartureAfterDraft").text('Please Enter Valid Arrival Draft');
            result = false;
        }

        if ($("#DepartureAfterDraft").val() == ".") {
            toastr.warning("Please Enter Valid Departure After", "Voyage Registration");
            //$("#spanDepartureDraftMean").text('Please Enter Valid Arrival Draft');

            result = false;
        }
        if ($("#PresentAirDrafttxt").val() == ".") {
            // $("#spnPrsAirDraft").text('Please Enter Valid Arrival Draft');
            toastr.warning("Please Enter Valid Present Air Draft", "Voyage Registration");
            result = false;
        }

    }
    if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
        var isqtyCommodityOptional = 0;
        for (var i = 0; i < ArrivalNotificationData.ArrivaReasonArray().length; i++) {

            ArrivalNotificationData.ReasonForVisit(ArrivalNotificationData.ArrivaReasonArray()[i]);
            if (ArrivalNotificationData.ReasonForVisit() == "OTHR" && (ArrivalNotificationData.SpecifyReason() == null || ArrivalNotificationData.SpecifyReason() == '')) {
                toastr.warning("Please Enter Other (specify)", "Voyage Registration");
                $("#spanSpecifyReason").text('This field is required.');
                self.isspanSpecifyReason(true);
                result = false;
            }
            else if (ArrivalNotificationData.ReasonForVisit() == "OTHR" && (ArrivalNotificationData.SpecifyReason() != null || ArrivalNotificationData.SpecifyReason() != '')) {
                $("#spanSpecifyReason").text('');
                self.isspanSpecifyReason(false);
            }

            if (ArrivalNotificationData.ReasonForVisit() == "BUNK" || ArrivalNotificationData.ReasonForVisit() == "STOR"
                || ArrivalNotificationData.ReasonForVisit() == "LABY" || ArrivalNotificationData.ReasonForVisit() == "REPA"
                || ArrivalNotificationData.ReasonForVisit() == "DRYD") {
            }
            else { isqtyCommodityOptional = 1; }

        }
    }

    if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {

        if (self.arrivalNotificationModel().Arrforwarddraft() == "" || self.arrivalNotificationModel().Arrforwarddraft() == null) {
            ArrivalNotificationData.Arrforwarddraft.extend({ required: true });
            result = false;
        }
        else {
            ArrivalNotificationData.Arrforwarddraft.rules.remove(function (item) { return item.rule = "required"; });
        }
        if (self.arrivalNotificationModel().Arrafterdraft() == "" || self.arrivalNotificationModel().Arrafterdraft() == null) {
            ArrivalNotificationData.Arrafterdraft.extend({ required: true });
            result = false;
        }
        else {
            ArrivalNotificationData.Arrafterdraft.rules.remove(function (item) { return item.rule = "required"; });
        }
        if (self.arrivalNotificationModel().Deptforwarddraft() == "" || self.arrivalNotificationModel().Deptforwarddraft() == null) {
            ArrivalNotificationData.Deptforwarddraft.extend({ required: true });
            result = false;
        }
        else { ArrivalNotificationData.Deptforwarddraft.rules.remove(function (item) { return item.rule = "required"; }); }

        if (self.arrivalNotificationModel().Deptafterdraft() == "" || self.arrivalNotificationModel().Deptafterdraft() == null) {
            ArrivalNotificationData.Deptafterdraft.extend({ required: true });
            result = false;
        }
        else { ArrivalNotificationData.Deptafterdraft.rules.remove(function (item) { return item.rule = "required"; }); }

        if (self.arrivalNotificationModel().ArrivalDraftMean() == "" || self.arrivalNotificationModel().ArrivalDraftMean() == null) {
            ArrivalNotificationData.ArrivalDraftMean.extend({ required: true });
            result = false;
        }
        else {
            ArrivalNotificationData.ArrivalDraftMean.rules.remove(function (item) { return item.rule = "required"; });
        }
        if (self.arrivalNotificationModel().DepartureDraftMean() == "" || self.arrivalNotificationModel().DepartureDraftMean() == null) {
            ArrivalNotificationData.DepartureDraftMean.extend({ required: true });
            result = false;
        }
        else {
            ArrivalNotificationData.DepartureDraftMean.rules.remove(function (item) { return item.rule = "required"; });
        }

        //if (self.arrivalNotificationModel().PresentAirDraft() == "" || self.arrivalNotificationModel().PresentAirDraft() == null) {
        //    ArrivalNotificationData.PresentAirDraft.extend({ required: true });
        //}
        //else {
        //    ArrivalNotificationData.PresentAirDraft.rules.remove(function (item) { return item.rule = "required"; });
        //}

        if ($("#arrivalafterdrafttxt").val() != "" || $("#arrivalafterdrafttxt").val() != null) {
            var arrivaldraft = parseFloat($("#arrivalafterdrafttxt").val());
            var vesselsummerdraft = parseFloat(self.arrivalNotificationModel().SummerDraftAFTInM());
            if (arrivaldraft > vesselsummerdraft) {
                toastr.warning("Please Arrival Aft draft are More then vessel Summer Aft Dtaft");
                result = false;
            }
        }
        else if ($("#departafterdrafttxt").val() != "" || $("#departafterdrafttxt").val() != null) {
            var arrivaldraft = parseFloat($("#arrivalafterdrafttxt").val());
            var vesselsummerdraft = parseFloat(self.arrivalNotificationModel().SummerDraftAFTInM());
            if (arrivaldraft > vesselsummerdraft) {
                toastr.warning("Please Departure Aft draft are More then vessel Summer Aft Dtaft");
                result = false;
            }
        }
        if ($("#arrivalforworddrafttxt").val() != "" || $("#arrivalforworddrafttxt").val() != null) {
            var arrivaldraft = parseFloat($("#arrivalforworddrafttxt").val());
            var vesselsummerforworddraft = parseFloat(self.arrivalNotificationModel().SummerDraftFWDInM());
            if (arrivaldraft > vesselsummerforworddraft) {
                toastr.warning("Please Departure Forward draft are More then vessel Summer Forward Dtaft");
                result = false;
            }
        }
        else if ($("#departureforworddrafttxt").val() != "" || $("#departureforworddrafttxt").val() != null) {
            var arrivaldraft = parseFloat($("#arrivalafterdrafttxt").val());
            var vesselsummerfrwdraft = parseFloat(self.arrivalNotificationModel().SummerDraftFWDInM());
            if (arrivaldraft > vesselsummerfrwdraft) {
                toastr.warning("Please Departure Forward draft are More then vessel Summer Forward Dtaft");
                result = false;
            }
        }
    }

    if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {

        if (self.arrivalNotificationModel().AppliedForISPS() == 'A') {

            var RegExpDate = /(\d{2})-(\d{2})-(\d{4})/;
            var regexp = new RegExp(RegExpDate);
            var date = $("#AppliedDate").val();
            if (regexp.test(date) == false) {
                result = false;
                $("#spanAppliedDate").text('This field is required.');
            }

            if ($("#AppliedDate").val() == "" || $("#AppliedDate").val() == null) {
                $("#spanAppliedDate").text('This field is required.');
                self.isspanAppliedDate(true);
                result = false;
                ArrivalNotificationData.AppliedDate.extend({ required: true });
            }
            else {
                $("#spanAppliedDate").text('');
                self.isspanAppliedDate(false);
                ArrivalNotificationData.AppliedDate.rules.remove(function (item) { return item.rule = "required"; });
            }
            //if ($("#ISPSReferenceNo").val() == "" || $("#ISPSReferenceNo").val() == null) {
            //    //$("#ispssapnvalidation").text('This field is required.');
            //   // self.ispsRefNo(true);
            //   // result = false;
            //   // ArrivalNotificationData.ISPSReferenceNo.extend({ required: true });
            //}

        }
        else {
            $("#spanAppliedDate").text('');
            //  $("#ispssapnvalidation").text('');
            self.isspanAppliedDate(false);
            //  self.ispsRefNo(true);
            ArrivalNotificationData.AppliedDate.rules.remove(function (item) { return item.rule = "required"; });
            //ArrivalNotificationData.ISPSReferenceNo.rules.remove(function (item) { return item.rule = "required"; });

        }
    }

    if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
        if (self.QuantitiesofCommoditiesEnable()) {
            if (ArrivalNotificationData.ArrivalCommodities().length == 0) {
                //result = false;
                //toastr.warning("Please Enter Quantities of Commodity", "Voyage Registration");
            }
            else if (ArrivalNotificationData.ArrivalCommodities().length != 0) {

                var arrivalReasons = self.arrivalNotificationModel().ArrivaReasonArray();
                var mySet = new Set(arrivalReasons);
                //$.each(ArrivalNotificationData.ArrivalCommodities(), function (key, item) {
                //    var CommodChk = item;

                //    if (CommodChk != null)
                //        if (CommodChk !== undefined) {
                //            var QuantityVal = CommodChk.Quantity();
                //            if (QuantityVal == '' || QuantityVal == null) {
                //                QuantityVal = 0;
                //            }
                //            if (self.PartOrFullDischargeEnable()) {
                //                var qtyonboard = parseFloat(CommodChk.QtyOnboard());
                //                var quantity = parseFloat(CommodChk.Quantity());
                //                if (qtyonboard != "" || qtyonboard != null) {
                //                    if (quantity != "" || quantity != null) {
                //                        if (qtyonboard <= quantity) {
                //                            toastr.warning("Cargo To Be Discharged at KPCL should be less than Total Quantity on Board");
                //                            result = false;
                //                        }
                //                    }
                //                    else {
                //                        toastr.options.closeButton = true;
                //                        toastr.options.positionClass = "toast-top-right"; // 33
                //                        toastr.warning("Please enter valid details of Quantities of Commodity", "Voyage Registration");
                //                        result = false;
                //                    }
                //                }
                //                else {
                //                    toastr.options.closeButton = true;
                //                    toastr.options.positionClass = "toast-top-right"; // 33
                //                    toastr.warning("Please enter valid details of Quantities of Commodity", "Voyage Registration");
                //                    result = false;
                //                }
                //            }

                //            if (CommodChk.CargoGroup() == "" || CommodChk.CargoGroup() == undefined || CommodChk.CargoType() == "" || CommodChk.CargoType() == undefined || CommodChk.Purpose() == "" || CommodChk.Purpose() == undefined || CommodChk.QtyOnboard() == "" || CommodChk.QtyOnboard() == undefined || CommodChk.UOM() == "" || CommodChk.UOM() == undefined) {
                //                toastr.options.closeButton = true;
                //                toastr.options.positionClass = "toast-top-right"; // 33
                //                toastr.warning("Please enter valid details of Quantities of Commodity", "Voyage Registration");
                //                result = false;
                //            } else {
                //                if (CommodChk.Package() == 'PKG1') {
                //                    if (CommodChk.PackageQty() == "" || CommodChk.PackageQty() == null) {
                //                        toastr.warning("Please Enter PackageQty Details", "Voyage Registration");
                //                        result = false;
                //                    }
                //                }


                //                if (mySet.has("LOAD") && mySet.has("DISC")) {
                //                    if (CommodChk.Purpose() == "DISC") {
                //                        if (CommodChk.FullpartDischarge() == 0 || CommodChk.FullpartDischarge() == undefined) {
                //                            toastr.warning("Please Enter Commodity Details", "Voyage Registration");
                //                            ManError = "N";
                //                            result = false;
                //                        }
                //                        if (CommodChk.FullpartDischarge() == 'P') {
                //                            if (CommodChk.Quantity() == "" || CommodChk.Quantity() == undefined) {
                //                                toastr.options.closeButton = true;
                //                                ManError = "N";
                //                                toastr.options.positionClass = "toast-top-right"; // 33
                //                                toastr.warning("Please enter valid details of Quantities of Commodity", "Voyage Registration");
                //                                result = false;

                //                            }
                //                        }

                //                    }

                //                }

                //                else {
                //                    if (self.PartOrFullDischargeEnable()) {
                //                        if (CommodChk.Purpose() == "DISC") {
                //                            if (CommodChk.FullpartDischarge() == 0 || CommodChk.FullpartDischarge() == undefined) {
                //                                toastr.warning("Please Enter Commodity Details", "Voyage Registration");
                //                                ManError = "N";
                //                                result = false;
                //                            }
                //                            if (CommodChk.FullpartDischarge() == 'P') {
                //                                if (CommodChk.Quantity() == "" || CommodChk.Quantity() == undefined) {
                //                                    toastr.options.closeButton = true;
                //                                    ManError = "N";
                //                                    toastr.options.positionClass = "toast-top-right"; // 33
                //                                    toastr.warning("Please enter valid details of Quantities of Commodity", "Voyage Registration");
                //                                    result = false;

                //                                }
                //                            }
                //                        }
                //                    }
                //                }
                //            }
                //        }
                //});

                //ko.utils.arrayForEach(ArrivalNotificationData.CargoQuantitiesSplits(), function (CargoChk) {
                //    if (CargoChk.CargoTypecode() == "" || CargoChk.CargoTypecode() == undefined || CargoChk.ShipperReceiver() == "" || CargoChk.ShipperReceiver() == undefined || CargoChk.CargoQuantity() == "" || CargoChk.CargoQuantity() == undefined) {
                //        toastr.warning("Please Enter Selected Cargo Split Details", "Voyage Registration");
                //        result = false;
                //    }
                //});

                ko.utils.arrayFirst(ArrivalNotificationData.ArrivalCommodities(), function (item1) {
                    var varcargotype = item1.CargoType();

                    var varqty = 0;
                    var varTotalqty = 0;
                    var multi = $("#reasonforvisit").data("kendoMultiSelect");
                    var reason = new Set(ArrivalNotificationData.ArrivaReasonArray());

                    if (item1.CargoGroup() == "" || item1.CargoGroup() == undefined || item1.CargoType() == "" || item1.CargoType() == undefined || item1.Purpose() == "" || item1.Purpose() == undefined || item1.QtyOnboard() == "" || item1.QtyOnboard() == undefined || item1.UOM() == "" || item1.UOM() == undefined) {
                        //toastr.warning("Please enter valid details of Quantities of Commodity", "Voyage Registration");
                        //result = false;
                        // errorCount = errorCount + 1;
                    }
                    else {

                        if (reason.has("DISC") && item1.FullpartDischarge() == "P") {
                            varqty = parseFloat(item1.Quantity());
                        }
                        else {
                            varqty = parseFloat(item1.QtyOnboard());
                        }

                        ko.utils.arrayForEach(ArrivalNotificationData.CargoQuantitiesSplits(), function (CargoChk) {
                            if (CargoChk.CargoTypecode() == varcargotype) {
                                //varTotalqty = varTotalqty + (parseFloat(CargoChk.CargoQuantity()));
                                varTotalqty = varTotalqty + (CargoChk.CargoQuantity() * 1000);
                            }
                        });

                        //if (result == true) {
                        //    if (self.vesseldetailsmodel().VesselType() != "V151" && self.vesseldetailsmodel().VesselType() != "V152" && self.vesseldetailsmodel().VesselType() != "V153") {
                        //        varTotalqty = varTotalqty / 1000;
                        //        if (varqty != varTotalqty) {

                        //            toastr.warning("Quantity of Commodity value mismatch with Split values.", "Cargo Quantities");
                        //           // errorCount = errorCount + 1;
                        //            result = false;
                        //        }
                        //    }
                        //}
                    }

                });
                var CargoShipperReceiverList = [];
                ko.utils.arrayForEach(self.arrivalNotificationModel().CargoQuantitiesSplits(), function (cargo) {
                    CargoShipperReceiverList.push(cargo.ShipperReceiver());
                });

                //for (var i = 0, j = self.arrivalNotificationModel().ShipperReceiverArray().length; i < j; i++) {
                //    if (CargoShipperReceiverList.indexOf(self.arrivalNotificationModel().ShipperReceiverArray()[i]) > -1) {
                //    } else {

                //        for (var i = 0, j = self.arrivalNotificationModel().ArrivaReasonArray().length; i < j; i++) {
                //            if (self.vesseldetailsmodel().VesselType() != 'V151' && self.vesseldetailsmodel().VesselType() != 'V152' && self.vesseldetailsmodel().VesselType() != 'V153') {
                //                if (self.arrivalNotificationModel().ArrivaReasonArray()[i] == "DISC" || self.arrivalNotificationModel().ArrivaReasonArray()[i] == "LOAD") {
                //                   toastr.warning("Cargo Quantities are not declared for all Shipper / Receivers", "Cargo Quantites");
                //                  //  errorCount = errorCount + 1;
                //                    result = false;
                //                }
                //            }
                //        }
                //    }
                //}
            }
        }
    }
    if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
        if (ArrivalNotificationData.Tidal() == "A") {
            if (ArrivalNotificationData.tideldetails() == "" || ArrivalNotificationData.tideldetails() == null) {
                self.spantidildetailstext(true);
                $("#spantidildetailstext").text('This field is required.');
                result = false;
            }
            else {
                self.spantidildetailstext(false);
                $("#spantidildetailstext").text('');
            }
        }

        if (ArrivalNotificationData.DaylightRestriction() == "A") {
            if (ArrivalNotificationData.DaylightSpecifyReason() == "" || ArrivalNotificationData.DaylightSpecifyReason() == null) {
                self.spanDaylightSpecifyReasontext(true);
                $("#spanDaylightSpecifyReasontext").text('This field is required.');
                result = false;
            }
            else {
                self.spanDaylightSpecifyReasontext(false);
                $("#spanDaylightSpecifyReasontext").text('');
            }
        }

        if (ArrivalNotificationData.ExceedPortLimitations() == "Y") {
            if (ArrivalNotificationData.ExceedSpecifyReason() == "" || ArrivalNotificationData.ExceedSpecifyReason() == null) {
                self.spanExceedSpecifyReasontext(true);
                $("#spanExceedSpecifyReasontext").text('This field is required.');
                result = false;
            }
            else {
                self.spanExceedSpecifyReasontext(false);
                $("#spanExceedSpecifyReasontext").text('');
            }
        }

        if (ArrivalNotificationData.IsNvgtEqpmntOprtnl() == "N") {
            if (ArrivalNotificationData.NvgtEqpmntOprtnl() == "" || ArrivalNotificationData.NvgtEqpmntOprtnl() == null) {
                self.spanNvgtEqpmntOprtnltext(true);
                $("#spanNvgtEqpmntOprtnltext").text('This field is required.');
                result = false;
            }
            else {
                self.spanNvgtEqpmntOprtnltext(false);
                $("#spanNvgtEqpmntOprtnltext").text('');
            }
        }
        if (ArrivalNotificationData.IsfwrdaftWinchOprtnl() == "N") {
            if (ArrivalNotificationData.NvgtEqpmntOprtnl() == "" || ArrivalNotificationData.NvgtEqpmntOprtnl() == null) {
                self.spanfwrdaftWinchOprtnltext(true);
                $("#spanfwrdaftWinchOprtnltext").text('This field is required.');
                result = false;
            }
            else {
                self.spanfwrdaftWinchOprtnltext(false);
                $("#spanfwrdaftWinchOprtnltext").text('');
            }
        }

        if (ArrivalNotificationData.IsPtStboardAnchorOprtnl() == "N") {
            if (ArrivalNotificationData.PtStboardAnchorOprtnl() == "" || ArrivalNotificationData.PtStboardAnchorOprtnl() == null) {
                self.spanPtStboardAnchorOprtnltext(true);
                $("#spanPtStboardAnchorOprtnltext").text('This field is required.');
                result = false;
            }
            else {
                self.spanPtStboardAnchorOprtnltext(false);
                $("#spanPtStboardAnchorOprtnltext").text('');
            }
        }
        if (ArrivalNotificationData.IsPrlrsFullySbmrgdWater() == "Y") {
            if (ArrivalNotificationData.PrlrsFullySbmrgdWater() == "" || ArrivalNotificationData.PrlrsFullySbmrgdWater() == null) {
                self.spanPrlrsFullySbmrgdWatertext(true);
                $("#spanPrlrsFullySbmrgdWatertext").text('This field is required.');
                result = false;
            }
            else {
                self.spanPrlrsFullySbmrgdWatertext(false);
                $("#spanPrlrsFullySbmrgdWatertext").text('');
            }
        }

        if (ArrivalNotificationData.IsPIClub() == "N") {
            if (ArrivalNotificationData.PIClub() == "" || ArrivalNotificationData.PIClub() == null) {
                self.spanPIClubtext(true);
                $("#spanPIClubtext").text('This field is required.');
                result = false;
            }
            else {
                self.spanPIClubtext(false);
                $("#spanPIClubtext").text('');
            }
        }
        if (ArrivalNotificationData.IssafeBerthing() == "N") {
            if (ArrivalNotificationData.safeBerthing() == "" || ArrivalNotificationData.safeBerthing() == null) {
                self.spansafeBerthingtext(true);
                $("#spansafeBerthingtext").text('This field is required.');
                result = false;
            }
            else {
                self.spansafeBerthingtext(false);
                $("#spansafeBerthingtext").text('');
            }
        }
        if (ArrivalNotificationData.IsShrMringlines() == "N") {
            if (ArrivalNotificationData.ShrMringlines() == "" || ArrivalNotificationData.ShrMringlines() == null) {
                self.spanShrMringlinestext(true);
                $("#spanShrMringlinestext").text('This field is required.');
                result = false;
            }
            else {
                self.spanShrMringlinestext(false);
                $("#spanShrMringlinestext").text('');
            }
        }
        if (ArrivalNotificationData.IswireRopewhttailRopeMring() == "Y") {
            if (ArrivalNotificationData.IsTailRoping() == "N") {
                if (ArrivalNotificationData.wirewithTailRope() == "" || ArrivalNotificationData.wirewithTailRope() == null) {
                    self.spanTailRopetext(true);
                    $("#spanTailRopetext").text('This field is required.');
                    result = false;
                }
                else {
                    self.spanTailRopetext(false);
                    $("#spanTailRopetext").text('');
                }
            }
            else {
                self.spanTailRopetext(false);
                $("#spanTailRopetext").text('');
            }
        }
    }


    self.ArrivalNotificationValidation = ko.observable(ArrivalNotificationData);
    self.ArrivalNotificationValidation().errors = ko.validation.group(self.ArrivalNotificationValidation());
    errors = self.ArrivalNotificationValidation().errors().length;
    if (errors > 0) {
        ArrivalNotificationData.errors.showAllMessages();
    }
    //if (ArrivalNotificationData.ViewModeForTabs() == 'notification2') {

    //    if ($('input:radio[name=IsDangerousGoodsonBoard]:checked').val() == "A") {
    //        var alrtmsg = "";
    //        if (ArrivalNotificationData.CellNo() == null || ArrivalNotificationData.CellNo() == '' || ArrivalNotificationData.CargoDescription() == null || ArrivalNotificationData.CargoDescription() == '' || ArrivalNotificationData.CargoDescription().trim() == '') {
    //            if (ArrivalNotificationData.CellNo() == null || ArrivalNotificationData.CellNo() == '') {

    //                alrtmsg = alrtmsg + "Location";
    //                result = false;
    //            }

    //            if (ArrivalNotificationData.CargoDescription() == null || ArrivalNotificationData.CargoDescription() == '' || ArrivalNotificationData.CargoDescription().trim() == '') {
    //                if (alrtmsg == "" + "Location") {
    //                    alrtmsg = alrtmsg + " and" + " Cargo Description ";
    //                }
    //                else { alrtmsg = alrtmsg + " Cargo Description "; }
    //                result = false;
    //            }

    //            if (alrtmsg != "") {
    //                toastr.warning("Please enter " + alrtmsg + " of Dangerous Goods Information and Declaration", "Voyage Registration");
    //                result = false;
    //            }

    //        }

    //        else {
    //            if (ArrivalNotificationData.IMDGInformations().length == 0) {
    //                toastr.warning("Please Add Atleast One IMDG Cargo Information", "Voyage Registration");
    //                result = false;
    //            }
    //        }
    //        if (ArrivalNotificationData.IMDGInformations().length > 0) {

    //            var IMDGInformationsDetails = ko.utils.arrayFilter(ArrivalNotificationData.IMDGInformations(), function (items) {
    //                if (items.Others() == null)
    //                    items.Others('');
    //                if (items.Purpose() == null || items.ClassCode() == null || items.ImdgCommodity() == null || items.ImdgCommodity() == "" || items.ImdgCommodity().trim() == "" || items.UNNo() == "" || items.UNNo().trim() == "" || items.Quantity() == "") {
    //                    //toastr.options.closeButton = true;
    //                    //toastr.options.positionClass = "toast-top-right";
    //                    //result = false;
    //                    //toastr.warning("Please Enter Valid Details of IMDG Cargo Information", "Voyage Registration");
    //                }
    //            });
    //        }
    //    }

    //    if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
    //        var Reasonalrtmsg = "";
    //        var ReasonalrtmsgLR = "";
    //        var fromReason = "";
    //        var isreasonLayup = false;
    //        var isBunker = false;
    //        var isRep = false;

    //        for (var i = 0; i < ArrivalNotificationData.ArrivaReasonArray().length; i++) {
    //            if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
    //                ArrivalNotificationData.ReasonForVisit(ArrivalNotificationData.ArrivaReasonArray()[i]);
    //                //if (ArrivalNotificationData.ReasonForVisit() == 'LABY' || ArrivalNotificationData.ReasonForVisit() == 'REPA' && isreasonLayup == false) {
    //                //    isreasonLayup = true;
    //                //    fromReason = "Lay By and Repair Information Details";
    //                //    ArrivalNotificationData.PlannedDurationDate($("#PlannedDurationDate").val());
    //                //    if (ArrivalNotificationData.PlannedDurationDate() == null || ArrivalNotificationData.PlannedDurationDate() == '') {
    //                //        isRep = true;
    //                //        result = false;
    //                //    }
    //                //    ArrivalNotificationData.PlannedDurationToDate($("#PlannedDurationToDate").val())
    //                //    if (ArrivalNotificationData.PlannedDurationToDate() == null || ArrivalNotificationData.PlannedDurationToDate() == '') {
    //                //        isRep = true;
    //                //        result = false;
    //                //    }

    //                //    if (ArrivalNotificationData.ReasonForLayup() == null || ArrivalNotificationData.ReasonForLayup() == '' || ArrivalNotificationData.ReasonForLayup().trim() == '') {

    //                //        isRep = true;
    //                //        result = false;
    //                //    }
    //                //    if (ArrivalNotificationData.PlannedDurationDate() != null && ArrivalNotificationData.PlannedDurationToDate() != "") {
    //                //        var plannedDurationDate = kendo.parseDate(ArrivalNotificationData.PlannedDurationDate(), self.dateFormat.IPMSDateFormat());
    //                //        var etaDate = kendo.parseDate(ArrivalNotificationData.ETA(), self.dateFormat.IPMSDateFormat());
    //                //        var etdDate = kendo.parseDate(ArrivalNotificationData.ETD(), self.dateFormat.IPMSDateFormat());
    //                //        var plannedDurationToDate = kendo.parseDate(ArrivalNotificationData.PlannedDurationToDate(), self.dateFormat.IPMSDateFormat());

    //                //        if (etaDate > plannedDurationDate || etdDate < plannedDurationDate || etdDate < plannedDurationToDate) {
    //                //            toastr.warning("Please Select Planned Duration of Lay Up or Repairs Dates between E.T.A and E.T.D");
    //                //            self.arrivalNotificationModel().Daycnt("");
    //                //            return;
    //                //        }

    //                //        if (plannedDurationDate > plannedDurationToDate) {
    //                //            self.arrivalNotificationModel().Daycnt("");
    //                //            toastr.warning("Please Select Valid Dates of Lay By and Repair Information Details");
    //                //            return;
    //                //        }

    //                //    }
    //                //    if (isRep) {
    //                //        ReasonalrtmsgLR = " All Mandatory Fields of Lay By and Repair Information Details. ";
    //                //        result = false;
    //                //    }
    //                //}
    //            }

    //            if (ArrivalNotificationData.ReasonForVisit() == 'BUNK') {
    //                fromReason = "Bunker Information Details";
    //                if (self.arrivalNotificationModel().IsGovtVessel() == 'N') {
    //                    //if (ArrivalNotificationData.BunkersRequired() == null || ArrivalNotificationData.BunkersRequired() == '') {
    //                    //    isBunker = true;
    //                    //    result = false;
    //                    //}
    //                    //if (ArrivalNotificationData.BunkersMethod() == null || ArrivalNotificationData.BunkersMethod() == '') {
    //                    //    isBunker = true;
    //                    //    result = false;
    //                    //}
    //                    //if (ArrivalNotificationData.BunkerService() == null || ArrivalNotificationData.BunkerService() == '') {
    //                    //    isBunker = true;
    //                    //    result = false;
    //                    //}
    //                    //if (ArrivalNotificationData.DistanceFromStern() == null || ArrivalNotificationData.DistanceFromStern() == '' || ArrivalNotificationData.DistanceFromStern() == '.') {
    //                    //    isBunker = true;
    //                    //    result = false;
    //                    //}
    //                    //if (ArrivalNotificationData.TonsMT() == null || ArrivalNotificationData.TonsMT() == '' || ArrivalNotificationData.TonsMT() == '.') {
    //                    //    isBunker = true;
    //                    //    result = false;
    //                    //}

    //                    //if (isBunker) {
    //                    //    Reasonalrtmsg = " All Mandatory Fields of Bunker Information Details. ";
    //                    //    result = false;
    //                    //}
    //                }
    //            }
    //        }
    //        if (isRep && isBunker) {
    //            toastr.warning("Please Enter " + ReasonalrtmsgLR + ' ' + Reasonalrtmsg, "Voyage Registration");
    //            result = false;
    //        }
    //        else if (isRep) {
    //            toastr.warning("Please Enter " + ReasonalrtmsgLR, "Voyage Registration");
    //            result = false;
    //        }
    //        else if (isBunker) {
    //            toastr.warning("Please Enter " + Reasonalrtmsg, "Voyage Registration");
    //            result = false;
    //        }
    //        if (ArrivalNotificationData.errors().length > 0) {
    //            ArrivalNotificationData.errors.showAllMessages();

    //            if (ArrivalNotificationData.VesselID() == '' || ArrivalNotificationData.VesselName() == '') {
    //                self.isspanVslValid(true);
    //            }
    //            else {
    //                self.isspanVslValid(false);
    //            }
    //            toastr.warning("You Have Some form Errors. Please Check Below.");
    //            result = false;
    //        }
    //        var isOptnlInfo = 0;
    //        for (var i = 0; i < ArrivalNotificationData.ArrivaReasonArray().length; i++) {
    //            ArrivalNotificationData.ReasonForVisit(ArrivalNotificationData.ArrivaReasonArray()[i]);
    //            if (ArrivalNotificationData.ReasonForVisit() == 'DRYD' || ArrivalNotificationData.ReasonForVisit() == 'BUNK' || ArrivalNotificationData.ReasonForVisit() == 'LABY' || ArrivalNotificationData.ReasonForVisit() == 'REPA') {
    //            }
    //            else {
    //                isOptnlInfo = 1;
    //            }
    //        }

    //        if (isOptnlInfo == 1) {

    //            if ($("#PlanDateTimeOfBerth").val() == "" || $("#PlanDateTimeOfBerth").val() == null) {
    //                $("#spanOptValid1").text('This field is required.');
    //                self.isspanOptValid1(true);
    //            }
    //            else {
    //                $("#spanOptValid1").text('');
    //                self.isspanOptValid1(false);
    //            }
    //            if ($("#PlanDateTimeToCompleteCargo").val() == "" || $("#PlanDateTimeToCompleteCargo").val() == null) {
    //                $("#spanOptValid2").text('This field is required.');
    //                self.isspanOptValid2(true);
    //            }
    //            else {
    //                $("#spanOptValid2").text('');
    //                self.isspanOptValid2(false);
    //            }

    //            if ($("#PlanDateTimeToStartCargo").val() == "" || $("#PlanDateTimeToStartCargo").val() == null) {
    //                $("#spanOptValid3").text('This field is required.');
    //                self.isspanOptValid3(true);
    //            }
    //            else {
    //                $("#spanOptValid3").text('');
    //                self.isspanOptValid3(false);
    //            }

    //            if ($("#PlanDateTimeToVacateBerth").val() == "" || $("#PlanDateTimeToVacateBerth").val() == null) {
    //                $("#spanOptValid4").text('This field is required.');
    //                self.isspanOptValid4(true);
    //            }
    //            else {
    //                $("#spanOptValid4").text('');
    //                self.isspanOptValid4(false);
    //            }
    //        }
    //        else {
    //            $("#spanOptValid1").text('');
    //            self.isspanOptValid1(false);
    //            $("#spanOptValid2").text('');
    //            self.isspanOptValid2(false);
    //            $("#spanOptValid3").text('');
    //            self.isspanOptValid3(false);
    //            $("#spanOptValid4").text('');
    //            self.isspanOptValid4(false);
    //        }

    //        if ($("#ETA").val() == "" || $("#ETA").val() == null) {
    //            $("#spanEtaValid").text('This field is required.');
    //            self.isspanEtaValid(true);
    //        }
    //        else {
    //            $("#ValidityDateMsg").text('');
    //            self.isspanEtaValid(false);
    //        }

    //        if ($("#ETD").val() == "" || $("#ETD").val() == null) {
    //            $("#spanEtdValid").text('This field is required.');
    //            self.isspanEtdValid(true);
    //        }
    //        else {
    //            $("#spanEtdValid").text('');
    //            self.isspanEtdValid(false);
    //        }
    //    }
    //}

    if (self.arrivalNotificationModel().ViewModeForTabs() == "notification1") {
        GoToTab1(self, ArrivalNotificationData);
    }
    else if (self.arrivalNotificationModel().ViewModeForTabs() == "notification2") {
        GoToTab2(self, ArrivalNotificationData);
    }
    else {
        GoToTab3(self, ArrivalNotificationData);
    }
    return result;
}

function GoToTab1(self, arrivalnotificationData) {
    self.viewModeForTabs('notification1');
    self.arrivalNotificationModel().ViewModeForTabs('notification1');
    self.isSubmitVisible(false);
    self.isGoNextVisible(false);
    if (self.IsAddMode()) {
        self.isSaveDraftVisible(true);
    }
    else {
        self.isSaveDraftVisible(false);
    }
    if (self.isViewMode()) {
        self.isSaveVisible(false);
        self.isUpdateVisible(false);
        self.isGoNextVisible(true);
    }
    else {

        if (self.arrivalNotificationModel().VCN() != "") {
            self.isUpdateVisible(true);
            self.isSaveVisible(false);
        }
        else {
            self.isUpdateVisible(false);
            self.isSaveVisible(true);
        }
    }
    self.isGoBackVisible(false);
    var index = 0;
    HandleProgressBarAndActiveTab(index);
}

function GoToTab2(self, arrivalnotificationData) {
    var errorCount = 0;
    var result;
    var isqtyCommodityOptional = 0;
    if (arrivalnotificationData.IsGovtVessel() == 'N') {
        for (var i = 0; i < arrivalnotificationData.ArrivaReasonArray().length; i++) {

            if (arrivalnotificationData.ArrivaReasonArray()[i] == "LOAD") {
                $("#cargoSelUploadDocs option[value='CDT1']").hide();
                $("#cargoSelUploadDocs option[value='CDT2']").show();
            }
            if (arrivalnotificationData.ArrivaReasonArray()[i] == "DISC") {
                $("#cargoSelUploadDocs option[value='CDT2']").hide();
                $("#cargoSelUploadDocs option[value='CDT1']").show();
            }

            if (arrivalnotificationData.ReasonForVisit() == "BUNK" || arrivalnotificationData.ReasonForVisit() == "STOR"
                || arrivalnotificationData.ReasonForVisit() == "LABY" || arrivalnotificationData.ReasonForVisit() == "REPA"
                || arrivalnotificationData.ReasonForVisit() == "DRYD") {
            }
            else { isqtyCommodityOptional = 1; }
        }
        if (arrivalnotificationData.AppliedForISPS() == 'A') {
            var regexp = new RegExp(RegExpForDateTime);
            var date = $("#ETA").val();
            if (regexp.test(date) == false) {
                $("#spanAppliedDate").text('This field is required.');
                result = false;
                errorCount = errorCount + 1;
            } else if ($("#AppliedDate").val() == "" || $("#AppliedDate").val() == null) {
                $("#spanAppliedDate").text('This field is required.');
                self.isspanAppliedDate(true);
                arrivalnotificationData.AppliedDate.extend({ required: true });
                result = false;
                errorCount = errorCount + 1;
            }
            else {
                $("#spanAppliedDate").text('');
                //  $("#ispssapnvalidation").text('');
                self.isspanAppliedDate(false);
                // self.ispsRefNo(false);
                arrivalnotificationData.AppliedDate.rules.remove(function (item) { return item.rule = "required"; });
                //  arrivalnotificationData.ISPSReferenceNo.rules.remove(function (item) { return item.rule = "required"; });


            }
        }


        if (self.isEmployee()) {
            if (arrivalnotificationData.SecondaryAgentID1() == null || arrivalnotificationData.SecondaryAgentID1() == 0 || arrivalnotificationData.SecondaryAgentID1() == '') {


                self.isspanEmpagent(true);
                return;
            }
        }
        //if (self.QuantitiesofCommoditiesEnable()) {

        //    if (arrivalnotificationData.ArrivalCommodities().length != 0) {
        //        $.each(arrivalnotificationData.ArrivalCommodities(), function (key, item) {
        //            var CommodChk = item;

        //            if (CommodChk != null)
        //                if (CommodChk !== undefined) {
        //                    var QuantityVal = CommodChk.Quantity();
        //                    if (QuantityVal == '' || QuantityVal == null) {
        //                        QuantityVal = 0;
        //                    }
        //                    if (self.PartOrFullDischargeEnable()) {
        //                        var qtyonboard = parseFloat(CommodChk.QtyOnboard());
        //                        var quantity = parseFloat(CommodChk.Quantity());
        //                        if (qtyonboard != "" || qtyonboard != null) {
        //                            if (quantity != "" || quantity != null) {
        //                                if (qtyonboard < quantity) {
        //                                    toastr.warning("Cargo To Be Discharged at KPCL should be less than Total Quantity on Board");
        //                                    result = false;
        //                                    errorCount = errorCount + 1;
        //                                }
        //                            }
        //                            else {
        //                                toastr.options.closeButton = true;
        //                                toastr.options.positionClass = "toast-top-right"; // 33
        //                                toastr.warning("Please enter valid details of Quantities of Commodity", "Voyage Registration");
        //                                result = false;
        //                                errorCount = errorCount + 1;
        //                            }
        //                        }
        //                        else {
        //                            toastr.options.closeButton = true;
        //                            toastr.options.positionClass = "toast-top-right"; // 33
        //                            toastr.warning("Please enter valid details of Quantities of Commodity", "Voyage Registration");
        //                            result = false;
        //                            errorCount = errorCount + 1;
        //                        }
        //                    }
        //                    if (CommodChk.CargoGroup() == "" || CommodChk.CargoGroup() == undefined || CommodChk.CargoType() == "" || CommodChk.CargoType() == undefined || CommodChk.Purpose() == "" || CommodChk.Purpose() == undefined || CommodChk.QtyOnboard() == "" || CommodChk.QtyOnboard() == undefined || CommodChk.UOM() == "" || CommodChk.UOM() == undefined) {
        //                        toastr.options.closeButton = true;
        //                        toastr.options.positionClass = "toast-top-right"; // 33
        //                        toastr.warning("Please enter valid details of Quantities of Commodity", "Voyage Registration");
        //                        result = false;
        //                        errorCount = errorCount + 1;

        //                    }
        //                    else {
        //                        if (CommodChk.Package() == 'PKG1') {
        //                            if (CommodChk.PackageQty() == "" || CommodChk.PackageQty() == null) {
        //                                toastr.warning("Please Enter PackageQty Details", "Voyage Registration");
        //                                result = false;
        //                                errorCount = errorCount + 1;
        //                            }
        //                        }
        //                    }

        //                    if (self.PartOrFullDischargeEnable()) {
        //                        if (CommodChk.Purpose() == "DISC") {
        //                            if (CommodChk.FullpartDischarge() == 0 || CommodChk.FullpartDischarge() == undefined) {
        //                                toastr.warning("Please Enter Commodity Details", "Voyage Registration");
        //                                ManError = "N";
        //                                result = false;
        //                                errorCount = errorCount + 1;
        //                            }

        //                            if (CommodChk.FullpartDischarge() == 'P') {
        //                                if (CommodChk.Quantity() == "" || CommodChk.Quantity() == undefined) {
        //                                    toastr.options.closeButton = true;
        //                                    toastr.options.positionClass = "toast-top-right"; // 33
        //                                    toastr.warning("Please enter valid details of Quantities of Commodity", "Voyage Registration");
        //                                    result = false;
        //                                    errorCount = errorCount + 1;
        //                                }
        //                            }
        //                        }
        //                    }
        //                }
        //        });

        //    }
        //    else if (arrivalnotificationData.ArrivalCommodities().length == 0) {
        //        toastr.warning("Please Enter Quantities of Commodity", "Voyage Registration");
        //        result = false;
        //        errorCount = errorCount + 1;
        //    }
        //}

        //ko.utils.arrayForEach(arrivalnotificationData.CargoQuantitiesSplits(), function (CargoChk) {
        //    if (CargoChk.CargoTypecode() == "" || CargoChk.CargoTypecode() == undefined || CargoChk.ShipperReceiver() == "" || CargoChk.ShipperReceiver() == undefined || CargoChk.CargoQuantity() == "" || CargoChk.CargoQuantity() == undefined) {
        //        toastr.warning("Please Enter Selected Cargo Split Details", "Voyage Registration");
        //        errorCount = errorCount + 1;
        //    }
        //});
        // Bhoji Reddy  New Validation

        ko.utils.arrayFirst(arrivalnotificationData.ArrivalCommodities(), function (item1) {
            var varcargotype = item1.CargoType();

            var varqty = 0;
            var varTotalqty = 0;
            var multi = $("#reasonforvisit").data("kendoMultiSelect");
            var reason = new Set(arrivalnotificationData.ArrivaReasonArray());

            if (item1.CargoGroup() == "" || item1.CargoGroup() == undefined || item1.CargoType() == "" || item1.CargoType() == undefined || item1.Purpose() == "" || item1.Purpose() == undefined || item1.QtyOnboard() == "" || item1.QtyOnboard() == undefined || item1.UOM() == "" || item1.UOM() == undefined) {
                //toastr.warning("Please enter valid details of Quantities of Commodity", "Voyage Registration");
                //result = false;
                //errorCount = errorCount + 1;
            }
            else {

                if (reason.has("DISC") && item1.FullpartDischarge() == "P") {
                    varqty = parseFloat(item1.Quantity());
                }
                else {
                    varqty = parseFloat(item1.QtyOnboard());
                }

                ko.utils.arrayForEach(arrivalnotificationData.CargoQuantitiesSplits(), function (CargoChk) {
                    if (CargoChk.CargoTypecode() == varcargotype) {
                        //varTotalqty = varTotalqty + (parseFloat(CargoChk.CargoQuantity()));
                        varTotalqty = varTotalqty + (CargoChk.CargoQuantity() * 1000);
                    }
                });

                //if (errorCount == 0) {
                //    if (self.vesseldetailsmodel().VesselType() != "V151" && self.vesseldetailsmodel().VesselType() != "V152" && self.vesseldetailsmodel().VesselType() != "V153") {
                //        varTotalqty = varTotalqty / 1000;
                //        if (varqty != varTotalqty) {

                //            toastr.warning("Quantity of Commodity value mismatch with Split values.", "Cargo Quantities");
                //            errorCount = errorCount + 1;
                //            result = false;
                //        }
                //    }
                //}
            }

        });
        var CargoShipperReceiverList = [];
        ko.utils.arrayForEach(self.arrivalNotificationModel().CargoQuantitiesSplits(), function (cargo) {
            CargoShipperReceiverList.push(cargo.ShipperReceiver());
        });

        //for (var i = 0, j = self.arrivalNotificationModel().ShipperReceiverArray().length; i < j; i++) {
        //    if (CargoShipperReceiverList.indexOf(self.arrivalNotificationModel().ShipperReceiverArray()[i]) > -1) {
        //    } else {

        //        for (var i = 0, j = self.arrivalNotificationModel().ArrivaReasonArray().length; i < j; i++) {
        //            if (self.vesseldetailsmodel().VesselType() != 'V151' && self.vesseldetailsmodel().VesselType() != 'V152' && self.vesseldetailsmodel().VesselType() != 'V153') {
        //                if (self.arrivalNotificationModel().ArrivaReasonArray()[i] == "DISC" || self.arrivalNotificationModel().ArrivaReasonArray()[i] == "LOAD") {
        //                   toastr.warning("Cargo Quantities are not declared for all Shipper / Receivers", "Cargo Quantites");
        //                    errorCount = errorCount + 1;
        //                    result = false;
        //                }
        //            }
        //        }
        //    }
        //}
    }

    if (errorCount == 0) {
        if ($('input:radio[name=IsDangerousGoodsonBoard]:checked').val() == "A") {
            self.IsDangerousGoods(true);
            $("#rdYesDangerousGoods").attr('checked', 'checked');
        }
        else if ($('input:radio[name=IsDangerousGoodsonBoard]:checked').val() == "I") {
            self.IsDangerousGoods(false);
            $("#rdNoDangerousGoods").attr('checked', 'checked');
        }
        else {
            self.IsDangerousGoods(false);
            $("#rdNoDangerousGoods").attr('checked', 'checked');
        }

        self.viewModeForTabs('notification2');
        self.arrivalNotificationModel().ViewModeForTabs('notification2');
        self.isSubmitVisible(false);
        self.isGoNextVisible(false);

        if (self.IsAddMode()) {
            self.isSaveDraftVisible(true);
        }
        else {
            self.isSaveDraftVisible(false);
        }

        if (self.isViewMode()) {
            self.isSaveVisible(false);
            self.isUpdateVisible(false);
            self.isGoNextVisible(true);
        }
        else {

            if (self.arrivalNotificationModel().VCN() != "") {
                self.isUpdateVisible(true);
                self.isSaveVisible(false);
            }
            else {
                self.isUpdateVisible(false);
                self.isSaveVisible(true);
            }

        }
        self.isGoBackVisible(true);
        var index = 1;
        HandleProgressBarAndActiveTab(index);
    }
    return result;
}


function GoToTab3(self, arrivalnotificationData) {

    var errorCountForArrivalIMDGTankers = 0;
    var alrtmsg = "";
    self.isGoNextVisible(false);
    if ($("#statSelUploadDocs option:selected").text() == 'Choose....') {
        $('#expDate').data('kendoDatePicker').enable(false);


    }

    if (self.isEmployee()) {
        if (arrivalnotificationData.SecondaryAgentID1() == null || arrivalnotificationData.SecondaryAgentID1() == 0 || arrivalnotificationData.SecondaryAgentID1() == '') {
            self.isspanEmpagent(true);
            errorCountForArrivalIMDGTankers++;
            return errorCountForArrivalIMDGTankers;
        }
    }

    //if ($('input:radio[name=IsDangerousGoodsonBoard]:checked').val() == "A") {
    //    if (arrivalnotificationData.IMDGInformations().length == 0) {
    //        if (arrivalnotificationData.IMDGInformations().length == 0) {
    //            errorCountForArrivalIMDGTankers = 1;
    //            toastr.warning("Please Add Atleast One IMDG Cargo Information", "Voyage Registration");
    //            return errorCountForArrivalIMDGTankers;
    //        }
    //    }

    //    if (arrivalnotificationData.IMDGInformations().length > 0) {

    //        var IMDGInformationsDetails = ko.utils.arrayFilter(arrivalnotificationData.IMDGInformations(), function (items) {
    //            if (items.Others() == null)
    //                items.Others('');
    //            if (items.Purpose() == null || items.ClassCode() == null || items.ImdgCommodity() == null || items.ImdgCommodity() == "" || items.UNNo() == "" || items.Quantity() == "") {
    //                errorCountForArrivalIMDGTankers = 1;
    //                return errorCountForArrivalIMDGTankers;
    //            }
    //        });

    //        if (errorCountForArrivalIMDGTankers == 1) {
    //            toastr.warning("Please Enter Details of IMDG Cargo Information", "Voyage Registration");
    //            errorCountForArrivalIMDGTankers++;
    //            return errorCountForArrivalIMDGTankers;
    //        }

    //        if (arrivalnotificationData.CellNo() == null || arrivalnotificationData.CellNo() == '' || arrivalnotificationData.CellNo().trim() == '') {

    //            alrtmsg = alrtmsg + "Location";
    //            result = false;
    //        }

    //        if (arrivalnotificationData.CargoDescription() == null || arrivalnotificationData.CargoDescription() == '' || arrivalnotificationData.CargoDescription().trim() == "") {
    //            if (alrtmsg == "" + "Location") {
    //                alrtmsg = alrtmsg + " and" + " Cargo Description ";
    //            }
    //            else { alrtmsg = alrtmsg + " Cargo Description "; }
    //            result = false;
    //        }

    //        if (alrtmsg != "") {
    //            toastr.warning("Please enter " + alrtmsg + " of Dangerous Goods Information and Declaration", "Voyage Registration");
    //            result = false;
    //        }
    //    }
    //}

    if (errorCountForArrivalIMDGTankers == 0 && alrtmsg == "") {
        self.viewModeForTabs('notification3');
        self.arrivalNotificationModel().ViewModeForTabs('notification3');

        if (self.isViewMode()) {
            self.isSaveVisible(false);
            self.isUpdateVisible(false);
        }
        else {
            if (self.arrivalNotificationModel().VCN() != "") {
                self.isUpdateVisible(true);
                self.isSaveVisible(false);
            }
            else {
                self.isUpdateVisible(false);
                self.isSaveVisible(true);
            }
            self.isSubmitVisible(true);

            if (self.IsAddMode()) {
                self.isSaveDraftVisible(true);
            }
            else {
                self.isSaveDraftVisible(false);
            }
            self.isSaveVisible(false);
            self.isUpdateVisible(false);
        }
        self.isGoBackVisible(true);
        var index = 2;
        HandleProgressBarAndActiveTab(index);
    }
    else {

        if (self.arrivalNotificationModel().ViewModeForTabs() == "notification1") {
            GoToTab1(self, arrivalnotificationData);
        }
        else if (self.arrivalNotificationModel().ViewModeForTabs() == "notification2") {
            GoToTab2(self, arrivalnotificationData);
        }
        else {

            GoToTab3(self, arrivalnotificationData);
        }
    }
}

//Validation for IMDG Cargo Information and IMDG Tanker Commodities
calmaxtoday = function () {
    self.dateFormat = new IPMSROOT.dateFormat();
    this.max(moment(new Date()).format(self.dateFormat.IPMSDateTimeFormatForModel()));
};

calmintoday = function () {
    self.dateFormat = new IPMSROOT.dateFormat();
    this.min(moment(new Date()).format(self.dateFormat.IPMSDateTimeFormatForModel()));
};

// remove rows from temparary table the data 
function RemoveQualityCommodity(obj) {
    $(obj).closest("tr").remove();
    var objIndex = $(obj).closest("tr").index();
    self.arrivalNotificationModel().CommoditiesQuantitiesList().pop(self.arrivalNotificationModel().CommoditiesQuantitiesList()[objIndex]);
    self.arrivalNotificationModel().EnableDisableAddNew(true);
    isEdit = isEdit - 1;
}

//To validate alphabet with spaces
function ValidateAlphabetsWithSpaces(data, event) {
    if (window.event) // IE
        keynum = event.keyCode;
    else if (event.which) // Netscape/Firefox/Opera
        keynum = event.which;
    keychar = String.fromCharCode(keynum);
    charcheck = /^[a-zA-Z \b]*$/;
    return charcheck.test(keychar);
}

function compare(number1, number2) {
    var precision1, precision2, decimal1, decimal2, flag = false;
    precision1 = parseInt(number1.substr(0, String(number1).indexOf('.')));
    decimal1 = parseInt(number1.substr(String(number1).indexOf('.') + 1));
    precision2 = parseInt(number2.substr(0, String(number2).indexOf('.')));
    decimal2 = parseInt(number2.substr(String(number2).indexOf('.') + 1));
    if (precision1 < precision2) flag = true;
    else if (precision1 == precision2 && decimal1 < decimal2) flag = true;
    return flag;
}

function checkDate(field) {

    var allowBlank = true;
    var minYear = 1902;
    var IsLeapYear = false;
    var errorMsg = "";
    var RegExpDate = /(\d{2})-(\d{2})-(\d{4})/;
    // regular expression to match required date format 'dd/mm/yyyy'
    re = /^(\d{1,2})\-(\d{1,2})\-(\d{4})$/;

    if (field.value != '') {
        field.value = field.value.replace(/ /g, '');
        var dinput = field.value;
        if (dinput.length < 8) {
            errorMsg = "Invalid date  format: " + field.value;
            toastr.warning("Invalid date  format");
            field.focus();
            return false;
        }

        re1 = /^(\d{1,2})\-(\d{1,2})\-(\d{4})$/g;
        var result = field.value.match(re1);
        var regexp = new RegExp(RegExpDate);
        if (field.value.length == 10) {
            if (regexp.test(field.value) == false) {

                errorMsg = "Invalid date  format: " + field.value;
                toastr.warning("Invalid date  format");
                field.focus();
                return false;
            }
        }
        if ((result == null) && (field.value.length != 10)) {
            if (field.value.length == 8) {
                re2 = /-/g;
                var c = field.value.match(re2);
                if (c == null || c.length < 2)
                { formatinput(field); }
                else {
                    errorMsg = "Invalid date  format: " + field.value;
                    toastr.warning("Invalid date  format");
                    field.focus();
                    return false;
                }
            }

            else {
                errorMsg = "Invalid date and Time format: " + field.value;
                toastr.warning("Invalid date  format");
                field.focus();
                return false;
            }
        }
        else {
            if (field.value.length == 10) {
                re2 = /-/g;
                var c = field.value.match(re2);
                if (c == null || c.length < 2)
                { formatinput(field); }
            }
        }

        if (field.value.match(re)) {


            if (regs = field.value.match(re)) {

                if ((regs[3] % 4) == 0) {
                    IsLeapYear = true;
                }
                if (regs[1] < 1 || regs[1] > 31) {
                    errorMsg = "Invalid value for day: " + regs[1];
                } else if (regs[2] < 1 || regs[2] > 12) {
                    errorMsg = "Invalid value for month: " + regs[2];
                }
                else if (regs[3] < minYear) {
                    errorMsg = "Invalid value for year: " + regs[3] + " - must be between " + minYear + "";
                }

                if (IsLeapYear == true) {
                    if (regs[2] == 2 && regs[1] > 29) {
                        errorMsg = "Invalid value for day: " + regs[1];
                    }
                }
                else {
                    if (regs[2] == 2 && regs[1] > 28) {
                        errorMsg = "Invalid value for day: " + regs[1];
                    }
                }
            } else {
                errorMsg = "Invalid date and Time format: " + field.value;
            }
        }
    } else if (!allowBlank) {
        errorMsg = "Empty date not allowed!";
    }

    if (errorMsg != "") {
        toastr.warning("Invalid date  format");
        field.focus();
        return false;
    }
    return true;
}

function checkDateTime(field) {
    var allowBlank = true;
    var minYear = 1902;
    var IsLeapYear = false;
    var errorMsg = "";

    // regular expression to match required date format 'dd/mm/yyyy'
    re = /^(\d{1,2})\-(\d{1,2})\-(\d{4}) ([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

    if (field.value != '') {
        field.value = field.value.trim();
        var dinput = field.value;
        if (dinput.length < 12) {
            errorMsg = "Invalid date time format: " + field.value;
            toastr.warning("Invalid date and time format");
            setTimeout(function () {
                field.focus();
            }, 0);
            //field.focus();
            return;
        }
        re1 = /^(\d{1,2})\-(\d{1,2})\-(\d{4}) ([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/g;

        var result = field.value.match(re1);

        if ((result == null) && (field.value.length != 16)) {
            if (field.value.length == 12) {
                re2 = /-/g;
                re3 = /\s/g;
                var t = field.value.match(re3);
                var c = field.value.match(re2);
                if (c == null || c.length < 2 || t == null || t < 1)
                { formatDateTime(field); }
                else {
                    errorMsg = "Invalid date and time format: " + field.value;
                    toastr.warning("Invalid date and time format");
                    setTimeout(function () {
                        field.focus();
                    }, 0);
                    //field.focus();
                    return;

                }
            }
            else {
                errorMsg = "Invalid date and time format: " + field.value;
                toastr.warning("Invalid date and time format");
                setTimeout(function () {
                    field.focus();
                }, 0);
                // field.focus();
                return;
            }
        }
        else {
            if (field.value.length == 12) {
                re2 = /-/g;
                re3 = /\s/g;
                var t = field.value.match(re3);
                var c = field.value.match(re2);
                if (c == null || c.length < 2 || t == null || t < 1)
                { formatDateTime(field); }
            }
        }

        if (field.value.match(re)) {


            if (regs = field.value.match(re)) {
                if ((regs[3] % 4) == 0) {
                    IsLeapYear = true;
                }
                if (regs[1] < 1 || regs[1] > 31) {
                    errorMsg = "Invalid value for day: " + regs[1];
                } else if (regs[2] < 1 || regs[2] > 12) {
                    errorMsg = "Invalid value for month: " + regs[2];
                }

                if (IsLeapYear == true) {
                    if (regs[2] == 2 && regs[1] > 29) {
                        errorMsg = "Invalid value for day: " + regs[1];
                    }
                }
                else {
                    if (regs[2] == 2 && regs[1] > 28) {
                        errorMsg = "Invalid value for day: " + regs[1];
                    }
                }

            } else {
                errorMsg = "Invalid date and time format: " + field.value;
            }
        }
        else {
            errorMsg = "Invalid date and time format: " + field.value;
        }
    } else if (!allowBlank) {
        errorMsg = "Empty date not allowed!";
    }


    if (errorMsg != "") {
        toastr.warning("Invalid date and time format");
        setTimeout(function () {
            field.focus();
        }, 0);
        //field.focus();
        return;
    }
    return true;
}

function clearval(field) {
    field.value = "";
}

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\/\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

function formatinput(field) {

    var dvalue = field.value;
    var fvalue = "";
    for (var i = 0; i < 8; i++) {
        if ((i == 2) || (i == 4))
            fvalue = fvalue.concat("-" + dvalue[i]);
        else
            fvalue = fvalue.concat(dvalue[i]);
    }
    field.value = fvalue;
    return fvalue;
}

function formatDateTime(field) {

    var dvalue = field.value;
    var fvalue = "";
    for (var i = 0; i < 12; i++) {
        if ((i == 2) || (i == 4))
            fvalue = fvalue.concat("-" + dvalue[i]);
        else if (i == 8)
            fvalue = fvalue.concat(" " + dvalue[i]);
        else if (i == 10)
            fvalue = fvalue.concat(":" + dvalue[i]);
        else
            fvalue = fvalue = fvalue.concat(dvalue[i]);
    }
    field.value = fvalue;
    return fvalue;
}

function OnfocusDateTime(field) {

    if (field.value != "") {
        var dvalue = field.value;
        var fvalue = "";
        fvalue = dvalue.replace(/-| |:/g, '');
        field.value = fvalue;
        return fvalue;
    }
}

function OnfocusDate(field) {

    if (field.value != "") {
        var dvalue = field.value;
        var fvalue = "";
        fvalue = dvalue.replace(/-/g, '');
        field.value = fvalue;
        return fvalue;
    }
}