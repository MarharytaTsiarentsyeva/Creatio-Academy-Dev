define("UsrYachtRentalFormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_mz0av0q",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrRentalStartDate_scty261",
					"labelPosition": "above",
					"control": "$UsrYachtRentalDS_UsrRentalStartDate_scty261"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_nq5zewa",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrRentalEndDate_kicdtpk",
					"labelPosition": "above",
					"control": "$UsrYachtRentalDS_UsrRentalEndDate_kicdtpk"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_ivrpcuh",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrCustomer_nf1rcj8",
					"labelPosition": "above",
					"control": "$UsrYachtRentalDS_UsrCustomer_nf1rcj8",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_c5jlr93",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_c5jlr93_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ivrpcuh",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_mso6uss",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrManager_g5orbhj",
					"labelPosition": "above",
					"control": "$UsrYachtRentalDS_UsrManager_g5orbhj",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_m15mt3p",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_m15mt3p_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_mso6uss",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_u9h0wlg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrTotalPrice_15lntks",
					"labelPosition": "above",
					"control": "$UsrYachtRentalDS_UsrTotalPrice_15lntks",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Input_7xcwhbf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrComment_v12aytt",
					"labelPosition": "above",
					"control": "$UsrYachtRentalDS_UsrComment_v12aytt"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ParentYacht",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 7,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrParentYacht_bxad4tu",
					"labelPosition": "above",
					"control": "$UsrYachtRentalDS_UsrParentYacht_bxad4tu",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": false,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_v32vg2x",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_v32vg2x_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ParentYacht",
				"propertyName": "listActions",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrYachtRentalDS_UsrRentalStartDate_scty261": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrRentalStartDate"
						}
					},
					"UsrYachtRentalDS_UsrRentalEndDate_kicdtpk": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrRentalEndDate"
						}
					},
					"UsrYachtRentalDS_UsrCustomer_nf1rcj8": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrCustomer"
						}
					},
					"UsrYachtRentalDS_UsrManager_g5orbhj": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrManager"
						}
					},
					"UsrYachtRentalDS_UsrComment_v12aytt": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrComment"
						}
					},
					"UsrYachtRentalDS_UsrTotalPrice_15lntks": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrTotalPrice"
						}
					},
					"UsrYachtRentalDS_UsrParentYacht_bxad4tu": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrParentYacht"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrYachtRentalDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrYachtRental",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										},
										"sortingConfig": {
											"columns": []
										}
									}
								},
								"allowCopyingRecords": false
							}
						}
					},
					"primaryDataSourceName": "UsrYachtRentalDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			
      {
    request: "crt.HandleViewModelResumeRequest",
    handler: async (request, next) => {
      const res = await next?.handle(request);
      const $ = request.$context;
      try {
        // calculate number of days
        const daysInclusive = (s, e) => {
          if (!s || !e) return 0;
          const S = new Date(s), E = new Date(e);
          const d0 = new Date(S.getFullYear(), S.getMonth(), S.getDate());
          const d1 = new Date(E.getFullYear(), E.getMonth(), E.getDate());
          return d1 >= d0 ? Math.round((d1 - d0)/86400000) + 1 : 0;
        };

        // get Id ParentYacht from lookup
        const rawYacht = await $["UsrYachtRentalDS_UsrParentYacht_bxad4tu"];
        const yachtId = rawYacht && typeof rawYacht === "object" ? rawYacht.value : rawYacht;

        // get price per day from UsrYacht through sdk.Model
        let pricePerDay = 0;
        if (yachtId) {
          const yachtModel = await sdk.Model.create("UsrYacht");
          const rows = await yachtModel.load({
            attributes: ["UsrPrice"],
            parameters: [{ type: "primaryColumnValue", value: yachtId }]
          });
          pricePerDay = Number(rows?.[0]?.UsrPrice) || 0;
        }

        const s = await $["UsrYachtRentalDS_UsrRentalStartDate_scty261"];
        const e = await $["UsrYachtRentalDS_UsrRentalEndDate_kicdtpk"];
        $["UsrYachtRentalDS_UsrTotalPrice_15lntks"] =
          Number((daysInclusive(s, e) * pricePerDay).toFixed(2)) || 0;

      } catch (e) { console.error(e); }
      return res;
    }
  },

  // Modify date recalculate total
  {
    request: "crt.HandleViewModelAttributeChangeRequest",
    handler: async (request, next) => {
      const $ = request.$context;
      const name = request.attributeName;

      if ([
        "UsrYachtRentalDS_UsrRentalStartDate_scty261",
        "UsrYachtRentalDS_UsrRentalEndDate_kicdtpk",
        "UsrYachtRentalDS_UsrParentYacht_bxad4tu"
      ].includes(name)) {
        try {
          const daysInclusive = (s, e) => {
            if (!s || !e) return 0;
            const S = new Date(s), E = new Date(e);
            const d0 = new Date(S.getFullYear(), S.getMonth(), S.getDate());
            const d1 = new Date(E.getFullYear(), E.getMonth(), E.getDate());
            return d1 >= d0 ? Math.round((d1 - d0)/86400000) + 1 : 0;
          };

          const rawYacht = await $["UsrYachtRentalDS_UsrParentYacht_bxad4tu"];
          const yachtId = rawYacht && typeof rawYacht === "object" ? rawYacht.value : rawYacht;

          let pricePerDay = 0;
          if (yachtId) {
            const yachtModel = await sdk.Model.create("UsrYacht");
            const rows = await yachtModel.load({
              attributes: ["UsrPrice"],
              parameters: [{ type: "primaryColumnValue", value: yachtId }]
            });
            pricePerDay = Number(rows?.[0]?.UsrPrice) || 0;
          }

          const s = await $["UsrYachtRentalDS_UsrRentalStartDate_scty261"];
          const e = await $["UsrYachtRentalDS_UsrRentalEndDate_kicdtpk"];
          $["UsrYachtRentalDS_UsrTotalPrice_15lntks"] =
            Number((daysInclusive(s, e) * pricePerDay).toFixed(2)) || 0;

        } catch (e) { console.error(e); }
      }
      return next?.handle(request);
    }
  }
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});