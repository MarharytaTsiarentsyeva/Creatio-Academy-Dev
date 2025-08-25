define("UsrYacht_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "ab100532-296f-48fb-8b56-f15217bdae58",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_k4l58xk",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_k4l58xk_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCreateYachtRentalsBatch",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YachtId"
						}
					},
					"clickMode": "default",
					"icon": "copilot-rewrite-friendly-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_dcs73we",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_dcs73we_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RunAvgTicketPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunAvgTicketPriceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcAvgTicketPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YachtId"
						}
					},
					"icon": "process-button-icon"
				},
				"parentName": "Button_dcs73we",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CallMaxPriceWebServiseMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CallMaxPriceWebServiseMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceRequest"
					},
					"icon": "bars-button-icon"
				},
				"parentName": "Button_dcs73we",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "flag-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_m50fhoc",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_m50fhoc"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrRegNumber_9p4hk3k",
					"labelPosition": "above",
					"control": "$PDS_UsrRegNumber_9p4hk3k",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_ryexrqw",
					"labelPosition": "above",
					"control": "$PDS_UsrCountry_ryexrqw",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn13_x289v87",
					"labelPosition": "above",
					"control": "$PDS_UsrColumn13_x289v87",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_8nqpnny",
					"labelPosition": "above",
					"control": "$PDS_UsrDriveType_8nqpnny",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YachtStatus",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_rz8oldu",
					"labelPosition": "above",
					"control": "$PDS_UsrStatus_rz8oldu",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Length",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLength_h1d7hf0",
					"labelPosition": "above",
					"control": "$PDS_UsrLength_h1d7hf0",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Captain",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn8_wi17h69",
					"labelPosition": "above",
					"control": "$PDS_UsrColumn8_wi17h69",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_7fc7kcl",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_7fc7kcl_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Captain",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_v857yri",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewCount_9d5u7dv",
					"labelPosition": "above",
					"control": "$PDS_UsrCrewCount_9d5u7dv",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_a08q1mg",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_321518f",
					"labelPosition": "above",
					"control": "$PDS_UsrManager_321518f",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "PassengersCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengersCount_apqdw3q",
					"labelPosition": "above",
					"control": "$PDS_UsrPassengersCount_apqdw3q",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ManagerEmail",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.PDS_UsrManagerEmail_yycy19m",
					"control": "$PDS_UsrManagerEmail_yycy19m",
					"labelPosition": "above",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(ManagerEmail_caption)#",
					"visible": true,
					"readonly": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "NumberInput_qsdy0jj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_vi2m1mq",
					"labelPosition": "above",
					"control": "$PDS_UsrTicketPrice_vi2m1mq",
					"visible": false,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_06bcpap",
					"labelPosition": "above",
					"control": "$PDS_UsrComment_06bcpap",
					"multiline": false,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_nfipuu3",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_nfipuu3_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_zxpc41g",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_nfipuu3",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_3nvb44d",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_zxpc41g",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_vyhlx18",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_vyhlx18_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRental",
							"defaultValues": [
								{
									"attributeName": "UsrParentYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_3nvb44d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_rykzm08",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_rykzm08_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_2dutr75DS"
						}
					}
				},
				"parentName": "FlexContainer_3nvb44d",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_t6rsp1m",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_t6rsp1m_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true,
					"clicked": {}
				},
				"parentName": "FlexContainer_3nvb44d",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_gcaawvf",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_gcaawvf_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_2dutr75"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_t6rsp1m",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_uoa2mpq",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_uoa2mpq_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_t6rsp1m",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_unn121r",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_unn121r_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_unn121r_GridDetail_2dutr75",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_2dutr75"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_unn121r_SearchValue",
							"GridDetailSearchFilter_unn121r_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_3nvb44d",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_wkztmm1",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_nfipuu3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_2dutr75",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_2dutr75",
					"primaryColumnName": "GridDetail_2dutr75DS_Id",
					"columns": [
						{
							"id": "dd860cf5-4c0a-4ca3-20f7-17840a80b3af",
							"code": "GridDetail_2dutr75DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_2dutr75DS_CreatedOn)#",
							"dataValueType": 7,
							"sticky": true,
							"width": 134.9980926513672
						},
						{
							"id": "e8d2f79a-4990-f59c-5a19-89845a08ee2e",
							"code": "GridDetail_2dutr75DS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_2dutr75DS_UsrCustomer)#",
							"dataValueType": 10,
							"width": 126.99998474121094
						},
						{
							"id": "6890bc81-721a-8bcf-cffb-c3252224a9a6",
							"code": "GridDetail_2dutr75DS_UsrManager",
							"caption": "#ResourceString(GridDetail_2dutr75DS_UsrManager)#",
							"dataValueType": 10,
							"width": 129.99998474121094
						},
						{
							"id": "1c4545db-4a36-f606-4387-13b256bb5a7e",
							"code": "GridDetail_2dutr75DS_UsrRentalStartDate",
							"caption": "#ResourceString(GridDetail_2dutr75DS_UsrRentalStartDate)#",
							"dataValueType": 8,
							"width": 132.99999237060547
						},
						{
							"id": "5d2eba97-45d2-1d05-c48a-5166ddeab11f",
							"code": "GridDetail_2dutr75DS_UsrRentalEndDate",
							"caption": "#ResourceString(GridDetail_2dutr75DS_UsrRentalEndDate)#",
							"dataValueType": 8,
							"width": 119.99999237060547
						},
						{
							"id": "32a6a109-a221-ebce-3f7b-47d216b43a9a",
							"code": "GridDetail_2dutr75DS_UsrTotalPrice",
							"caption": "#ResourceString(GridDetail_2dutr75DS_UsrTotalPrice)#",
							"dataValueType": 32
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_wkztmm1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MoreDataTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(MoreDataTabContainer_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_b4wqpr7",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "MoreDataTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CategoryMultiSelect",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(CategoryMultiSelect_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrParentYacht",
					"selectSchemaName": "UsrCategoryInYacht",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "above",
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MoreDataTabContainer",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_m50fhoc": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrDriveType_8nqpnny": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrStatus_rz8oldu": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrLength_h1d7hf0": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 4,
									"message": "#ResourceString(LengthCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrCrewCount_9d5u7dv": {
						"modelConfig": {
							"path": "PDS.UsrCrewCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(CrewCountCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrPassengersCount_apqdw3q": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 2,
									"message": "#ResourceString(PassangersCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrColumn8_wi17h69": {
						"modelConfig": {
							"path": "PDS.UsrColumn8"
						}
					},
					"PDS_UsrManager_321518f": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrComment_06bcpap": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_UsrRegNumber_9p4hk3k": {
						"modelConfig": {
							"path": "PDS.UsrRegNumber"
						}
					},
					"PDS_UsrCountry_ryexrqw": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrColumn13_x289v87": {
						"modelConfig": {
							"path": "PDS.UsrColumn13"
						}
					},
					"PDS_UsrTicketPrice_vi2m1mq": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"PDS_UsrManagerEmail_yycy19m": {
						"modelConfig": {
							"path": "PDS.UsrManagerEmail_yycy19m"
						}
					},
					"GridDetail_2dutr75": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_2dutr75DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_unn121r_GridDetail_2dutr75",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "UsrTotalPrice"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_2dutr75DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_2dutr75DS.CreatedOn"
									}
								},
								"GridDetail_2dutr75DS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_2dutr75DS.UsrCustomer"
									}
								},
								"GridDetail_2dutr75DS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_2dutr75DS.UsrManager"
									}
								},
								"GridDetail_2dutr75DS_UsrRentalStartDate": {
									"modelConfig": {
										"path": "GridDetail_2dutr75DS.UsrRentalStartDate"
									}
								},
								"GridDetail_2dutr75DS_UsrRentalEndDate": {
									"modelConfig": {
										"path": "GridDetail_2dutr75DS.UsrRentalEndDate"
									}
								},
								"GridDetail_2dutr75DS_UsrTotalPrice": {
									"modelConfig": {
										"path": "GridDetail_2dutr75DS.UsrTotalPrice"
									}
								},
								"GridDetail_2dutr75DS_Id": {
									"modelConfig": {
										"path": "GridDetail_2dutr75DS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_2dutr75DS": [
							{
								"attributePath": "UsrParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYacht",
							"attributes": {
								"UsrManagerEmail_yycy19m": {
									"path": "UsrManager.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_2dutr75DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"UsrRentalStartDate": {
									"path": "UsrRentalStartDate"
								},
								"UsrRentalEndDate": {
									"path": "UsrRentalEndDate"
								},
								"UsrTotalPrice": {
									"path": "UsrTotalPrice"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPrice_m50fhoc;
					console.log("Price = " + price);
					request.$context.PDS_UsrComment_06bcpap = "comment from JS code!";
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_UsrPrice_m50fhoc' || 		        // if price changed
					   request.attributeName === 'PDS_UsrPassengersCount_apqdw3q' ) { 		// or Passenger count changed
						var price = Number(await request.$context.PDS_UsrPrice_m50fhoc) || 0;
						var passengers = Number(await request.$context.PDS_UsrPassengersCount_apqdw3q) || 0;
						var ticket_price = passengers > 0 ? Number((price / passengers).toFixed(2)) : 0;
						request.$context.PDS_UsrTicketPrice_vi2m1mq = ticket_price;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "usr.RunWebServiceRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Run web service button works...");
					// get id from drive type lookup type object
					var typeObject = await request.$context.PDS_UsrDriveType_8nqpnny;
					var driveTypeId = "";
					if (typeObject) {
						driveTypeId = typeObject.value;
					}
					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();
					/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "YachtService";
					const methodName = "GetMaxPriceByDriveTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					//const endpoint = "http://localhost/D1_Studio/0/rest/YachtService/GetMaxPriceByDriveTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						driveTypeId: driveTypeId
					};
					const response = await httpClientService.post(endpoint, params);
					console.log("response max price = " + response.body.GetMaxPriceByDriveTypeIdResult);
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
		        handler: async (request, next) => {
		          // action add/change price
		          if (request.attributeName === "PDS_UsrPrice_m50fhoc") {
		            const sysSettings = new sdk.SysSettingsService();
		            // get setting value by code
		            let setting = await sysSettings.getByCode("MinPriceToRequireYachtComment");
					let limit = setting.value;
		            
		            // get current price
		            const price = Number(await request.$context.PDS_UsrPrice_m50fhoc) || 0;

		            if (price > limit) {
		              // set comment required
		              request.$context.enableAttributeValidator("PDS_UsrComment_06bcpap", "required");
		            } else {
		              // set comment NOT required
		              request.$context.disableAttributeValidator("PDS_UsrComment_06bcpap", "required");
			            }
		          }
		          return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						let result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});