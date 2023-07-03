var batched = false;

var AdaptiveGridRaiseGridRender = function (event, gridID) {
    
    if (gridID == null || gridID == undefined)
        selectedGridId = GetSelectedGridId();
    else
        selectedGridId = gridID;

    // if (Report_Name!==undefined && Report_Name !== "BreakManagement") {
    //     $('#quickActionBottomMainDiv').css("display", "none");
    // }

    try {
        adaptablestate[GetSelectedGridId()] = adaptablegridbundle.getCurrentAdaptableState(GetSelectedGridId());
    }
    catch (e) {

    }


    if (event != null && event != undefined && event=== "AdaptableReady") {

        adaptablegridbundle.getAdaptableApi("RecordSummaryGrid").eventApi.on("SelectionChanged", function (x) {
            
            if (x.selectedRowInfo != null && x.selectedRowInfo != undefined && x.selectedRowInfo.gridRows != null && x.selectedRowInfo.gridRows != undefined) {
                if (x.selectedRowInfo.gridRows.length > 0)
                    SelectionChangedEventForGrid(x);
                    BMSingleScreen.prototype.RenderDataForPendingAssets = function () {

    //var gridData = BMSingleScreen.prototype.BMAllAssetDataFromBindReportData[0].gridOutputData;

    var AssetLeftToLoad = BMSingleScreen.prototype.BMAllAssetDataFromBindReportData[0].AssetRemainingToBeLoaded;

    if (AssetLeftToLoad >0) {
        BMSingleScreen.prototype.ReportParameterBackupForBatching.AssetToBeLoaded = BMSingleScreen.prototype.BMAllAssetDataFromBindReportData[0].AssetToBeLoaded;
        var BindStandardReportDataInfo = {};
        BindStandardReportDataInfo["objRStandardReportParameterInfo"] = JSON.stringify(BMSingleScreen.prototype.ReportParameterBackupForBatching);
        var URL = BMSingleScreen.prototype.URL + "Resources/Services/RWorkAreaServices.svc";
        var objService = new WebHttpAPICall("POST", URL, "BindReportData", JSON.stringify(BindStandardReportDataInfo), BMSingleScreen.prototype.AssetBindingDoneRight, BMSingleScreen.prototype.AssetBindingDoneBad);
        objService.CallServiceAPI();
    }


    //return gridData
}

                // let pinnedBottomData = this.generatePinnedBottomData("RecordSummaryGrid");

                try {
                    adaptablegridbundle.getVendorGridApi("RecordSummaryGrid").pinnedRowModel.setPinnedBottomRowData([pinnedBottomData]);
                }
                catch (ex) {

                }


                //Handling of Suggestion Accept and Reject Buttons
                //Only Calculate if Suggestion Left Tree is visible
                if ($('#divSuggestionLeftTree').is(':visible'))  
                {
                    var countSuggestionHeadersChecked = 0;
                    adaptablegridbundle.getVendorGridApi(GetSelectedGridId()).gridOptionsWrapper.gridOptions.api.forEachNodeAfterFilterAndSort((rowNode, rowIndex) => {
                        
                        console.log(`Calculating Accept/Reject Count for Suggestion handling`);
                        if(rowNode.__hasChildren && rowNode.selected)
                        {
                           //this is the group header whose all children rows(grid rows under this group) is checked , so adding this count
                            countSuggestionHeadersChecked += 1;                            
                        }
                    });

                    if (countSuggestionHeadersChecked > 0)
                    {
                        //Changing Accept and Reject Value according to groups selected                        
                        $('#divSuggestionLeftTreeAccept').text(`Accept (${countSuggestionHeadersChecked})`);
                        $('#divSuggestionLeftTreeReject').text(`Reject (${countSuggestionHeadersChecked})`);
                    }
                    else {
                        $('#divSuggestionLeftTreeAccept').text('Accept');
                        $('#divSuggestionLeftTreeReject').text('Reject');
                    }
                }


                //Handling on UI for Selected Row Count
                $('#selectedRowCountNumber').text(x.selectedRowInfo.gridRows.length);
                $('#divNewQuickActionSelectedRecordsInfo').text(x.selectedRowInfo.gridRows.length + ' Record selected.');


                if (parseInt($('#selectedRowCountNumber').text()) > 0) {
                    $('.ag-floating-bottom').show()
                    $('#selectedRowCountNumber').css('color', 'red');
                    $('#selectedRowCount').css('color', 'red');
                    $('#selectedRowCountNumber').css('font-size', '13px');
                    $('#selectedRowCount').css('font-size', '13px');
                    $('#selectedRowCount').css('line-height', '2.4');
                }
                else {
                    $('.ag-floating-bottom').hide()
                    $('#selectedRowCountNumber').css('color', 'black');
                    $('#selectedRowCount').css('color', 'black');
                    $('#selectedRowCountNumber').css('font-size', '12px');
                    $('#selectedRowCount').css('font-size', '12px');
                    $('#selectedRowCount').css('line-height', '2.5');
                }
                if (parseInt(x.selectedRowInfo.gridRows.length) <= 0) {
                    $('#divNewQuickActionFirstActionOK').hide();
                    $('#divNewQuickActionSecondActionOK').hide();
                    $('#divNewQuickActionThirdActionOK').hide();
                }
            }

        }
        );

        // if (Report_Name != "Recon Diagnostic Report" && Report_Name != "Unprocessed Report") {    // we dont need context menu and its info in this report
        //     VisibleEveryContextMenuItems();


        // }

        // if (Report_Name != "Master Feed Report" && Report_Name != "Unprocessed Report" && Report_Name != "Asset Feed Report" && Report_Name != "Recon Diagnostic Report" && Report_Name != "Audit Report" && Report_Name != "Break Report - Historical" && Report_Name != "Recon Report - Historical") {
        //     if ($('#' + selectedGridId + '_contextMenu').length == 0)
        //         ContextMenu("RecordSummaryGrid");
        //     //attachEventHandlerForColumnWidth("RecordSummaryGrid");                    
        // }
        // else {
        //     for (var i = 0; i < TabFilterInfo.length; i++) {   // destroy context menu from the tabs (in which we don't required)
        //         selectedGridInfo = TabFilterInfo[i].GridInfo;
        //         if (selectedGridInfo != null && selectedGridInfo != undefined) {
        //             $.contextMenu('destroy', "#" + selectedGridInfo.GridId);
        //         }
        //     }
        // }


        // if (GetReportTypeId(Report_Name) != 13
        //     && ((IsFundLevelSignOff == false && isContinuousRecon == false && (SignOffInfo != undefined && SignOffInfo != null && SignOffInfo.SignOffState != 1 && SignOffInfo.SignOffState != 2))
        //         || (IsMonthEndFreeze == true && DailyOrMonthEndOnEdit == true
        //         )
        //     )
        // ) {
        //     $("#" + GetSelectedGridId() + " .ag-row").css('background-color', '#E4DCD5');

        // }
        // CallPostGridPlotRequests();
        //RenderDataForPendingAssets();

        // closeLoader_workarea_upper();
        // closeLoader_workarea();
    }
    else if (event != null && event != undefined && event == "columnRowGroupChanged") {
        try
        {
            adaptablegridbundle.getAdaptableApi(GetSelectedGridId()).gridApi.adaptable.expandAllRowGroups();
            adaptablegridbundle.getVendorGridApi(GetSelectedGridId()).columnModel.columnApi.setColumnPinned("ag-Grid-AutoColumn", "left");
        }
        catch(ex)
        {

        }
    }
    // else if (!IsAdaptiveGridFirstTimeLoad && event == "filterChanged" && IsCallGridRenderAfterFilter && ReconType == "Cash"
    //     && Report_Name != "Recon Diagnostic Report" && Report_Name != "Asset Feed Report"
    //     && Report_Name != "Recon Configuration Report" && Report_Name != "Master Feed Report"
    //     && Report_Name != "Unprocessed Report" && Report_Name != "Audit Report"
    //     && Report_Name != "Continuity Report" && Report_Name != "Unexplained Report"
    //     && Report_Type != 17 && Report_Type != 18 && Report_Type != 24) {
    //     var RowNode = [];
    //     adaptablegridbundle.getVendorGridApi(gridID).gridOptionsWrapper.gridOptions.api.forEachNodeAfterFilterAndSort((rowNode, rowIndex) => {
    //         RowNode.push(rowNode.data);
    //     });

    //     GetTradeMoneyDataAfterGridFiltering(selectedGridId, event, RowNode.filter(row => row != undefined));
    // }
    // else if (event == "filterChanged" && IsCallGridRenderAfterFilter) {
    else if (event == "filterChanged") {
        try {
            adaptablestate[GetSelectedGridId()] = adaptablegridbundle.getCurrentAdaptableState(GetSelectedGridId());
            //adaptablegridbundle.getAdaptableApi(GetSelectedGridId()).gridApi.adaptable.gridOptions.columnDefs.forEach(item => {
            //    try {
            //        if(item.field=='')
            //        {
            //            item
            //        }
            //    }
            //    catch (e) {

            //    }
            //});
        }
        catch (e) {

        }
    }


    $('.ab-Dashboard__tab').unbind("click").click(function () {
        console.log("height of grid tab : " + $(".ab-Dashboard__content").outerHeight());
        if ($(".ab-Dashboard__content").outerHeight() == null) {
            $(".rad-preview-gridparent").height($(".rad-preview-gridparent").outerHeight() - 71)
        }
        else {
            $(".rad-preview-gridparent").height($(".rad-preview-gridparent").outerHeight() + 71)
        }
    });
	
	$("#adaptableSummary1").bind("click").click(function () {
        if (GetSelectedGridId() !== undefined) {
            try {
                adaptablegridbundle.getAdaptableApi(GetSelectedGridId()).filterApi.clearColumnFilters();
                adaptablegridbundle.getAdaptableApi(GetSelectedGridId()).adaptable.api.gridApi.setRowGroupColumns([]);

                try {
                    adaptablegridbundle.getAdaptableApi(GetSelectedGridId()).gridApi.deselectAll();
                }
                catch (ex) {

                }
            }
            catch (ex) {

            }
        }
    });
	
    if(batched==false){
        RenderDataForPendingAssets();
    }
	   
    
}

// var timeoutBatch = function () {
//     timeoutId = setTimeout(RenderDataForPendingAssets, 4000);
    
//   }
    
//   var myStopFunction = function () {
//     clearTimeout(timeoutId);
//   }
  

var RenderDataForPendingAssets = function () {
    batched = true;
    var data = [1,2];
    data[0] = {
        "__type": "RReturnInfo:#com.ivp.recon.reconapi",
        "AssetAttributeValues": null,
        "AssetRemainingToBeLoaded": 3,
        "AssetToBeLoaded": 2,
        "CacheKey": "p300u1srwigvzp00rvm1itbd_user108zhtiazoaBreakManagementForCashReconSrishti90|95|0|Posting-BM_Srishti90",
        "CashAccountDetail": null,
        "ErrorReason": null,
        "GridInfo": "{\"GroupByWeightedAvgColumn\":{},\"ColumnNameMappinginPivot\":{},\"MasterDetailMapping\":[],\"IdColumnNamesList\":{},\"ColumnOperationOnGrouping\":{},\"OldLayout\":false,\"PDFTemplateName\":\"\",\"MasterColumnInfo\":{},\"EditAuditGridInfoList\":{\"AuditGridHeaderInfo\":[],\"AuditGridBodyInfo\":[]},\"DefaultDecimalValue\":-1,\"RequireCacheDataset\":false,\"CommentProperty\":false,\"GridEditedDone\":false,\"RequireFreezeGroupedColumns\":false,\"CommentDetails\":[],\"ChangedRowInfoList\":[],\"MaskingSuggestionInfo\":[],\"FromExportExcel\":false,\"TableName\":\"Table 0\",\"SelectRecordsAcrossAllPages\":false,\"ViewKey\":\"Srishti90|95|0|Posting-BM\",\"GridId\":\"zhtiazoa\",\"CurrentPageId\":\"BreakManagementForCashRecon\",\"SessionIdentifier\":null,\"UserId\":\"user108\",\"CheckBoxInfo\":{\"CheckBoxSelectionMode\":0,\"HeaderAttribute\":{\"isCheckBox\":\"true\"},\"ItemAttribute\":{},\"HeaderText\":null},\"LayoutName\":\"\",\"CacheKey\":\"p300u1srwigvzp00rvm1itbd_user108zhtiazoaBreakManagementForCashReconSrishti90|95|0|Posting-BM\",\"ColumnsWithoutClientSideFunctionality\":[],\"ColumnsNotToSum\":[],\"IdColumnName\":\"UniqueID\",\"KeyColumns\":{\"RowKey\":\"row_keys\"},\"ColumnsToHide\":[],\"PageSize\":50,\"CustomRowsDataInfo\":[],\"ItemText\":null,\"Height\":\"280px\",\"DefaultGroupedAndSortedColumns\":[],\"EditableRows\":[],\"Dimensions\":[],\"Measures\":[],\"NonEditableRows\":null,\"EditableColumns\":[],\"ColumnNotToExport\":[],\"ExcelSheetName\":\"Grid Details\",\"ExcelPivotSheetName\":\"Grid Pivot Details\",\"ColumnsCanBeDeleted\":[],\"HideFooter\":false,\"UpperHeaderText\":null,\"DoNotExpand\":false,\"RequireScrollOnFrozenBody\":true,\"FrozenColumns\":[],\"FrozenRows\":[],\"DoNotRearrangeColumn\":false,\"ColumnNameMapping\":{\"monthend_only\":\"Status Changed\"},\"RankingColumnInfo\":{\"RankingColumnInfo\":null,\"isDense\":0,\"PartitionColumnInfo\":[],\"groupingRequired\":false,\"rows\":0,\"RankingColumnDisplayName\":null,\"RankingColumnDisplayNameOld\":null,\"topBottomCount\":0,\"rankingOf\":false,\"AscDesc\":0},\"ViewRowInfo\":{\"RankingColumnInfo\":null,\"isDense\":0,\"PartitionColumnInfo\":[],\"groupingRequired\":false,\"n\":0,\"rows\":0,\"rankingColumnDisplayName\":null},\"MaskingColumns\":{},\"ExtraRowDataInfo\":[],\"JsonList\":[],\"ColumnDateFormatMapping\":{\"Rec Time\":\"M/D/YYYY hh:mm:ss\",\"Original Action Time\":\"M/D/YYYY hh:mm:ss\",\"Action Performed On\":\"M/D/YYYY hh:mm:ss\",\"Business Day\":\"M/D/YYYY hh:mm:ss\",\"Loading Time\":\"M/D/YYYY hh:mm:ss\"},\"ColumnCustomFormatMapping\":{},\"RequireGrouping\":true,\"RequireFilter\":true,\"RequireSort\":true,\"RequireMathematicalOperations\":true,\"ShowTotalRecordCount\":false,\"RequireSelectedRows\":true,\"RequireEditGrid\":true,\"RequireFullScreen\":false,\"RequireRADBalancePopup\":false,\"RADBalancePopupDataSource\":null,\"RequireRADExtraPopup\":false,\"DefaultFilteredColumns\":[],\"LoadPopupDataWithFilterFirstTime\":false,\"LoadPopupDataWithFilter\":false,\"RequireLayouts\":true,\"RequireReOrderGroupColumns\":false,\"RequireConfiguration\":true,\"RequireViews\":true,\"RequireExportToExcel\":true,\"RequireRuleBasedColoring\":true,\"RequireSliderFilter\":false,\"RequireSearch\":true,\"RequirePaging\":true,\"RequireHideColumns\":false,\"RequireFreezeColumns\":true,\"RequireAbsoluteSort\":true,\"RequireColumnSwap\":false,\"RequireResizing\":true,\"RequireGroupExpandCollapse\":true,\"AutoAdjust\":2,\"TypeOfOperation\":0,\"RequireBodyClickClearSelection\":false,\"ClearFilterInfoBeforeBulkFiltering\":false,\"RequirePastingDataOnDataFromExcel\":false,\"RequireTooltipOnData\":true,\"ColumnAutoAdjustMapping\":{},\"ColumnWidths\":{},\"ExtraInfoPopupTitle\":null,\"RequireExportToPdf\":false,\"EmptyGridText\":\"\",\"MessageBoxHandler\":null,\"ColumnLevelMathematicalOperations\":{},\"ShowRecordCountOnHeader\":true,\"ShowAggregationOnHeader\":false,\"CssSearchTextBox\":\"xlneogridBtn\",\"CssClearFilter\":\"xlneoclearFilter\",\"CssClearSort\":\"xlneoclearSort\",\"CssClearGroup\":\"xlneoclearGrouping\",\"CssExportVisibleRows\":\"xlneoexportToExcelVisibleRows\",\"CssExportRows\":\"xlneoexportToExcel\",\"CssFilter\":\"xlneofilterIcon\",\"CssFiltered\":\"xlneofilterDropIcon\",\"CssRecordSummary\":\"xlneorecordSummary\",\"CssGroupDropPanel\":\"xlneogroupDropPanel\",\"CssUpperHeader\":\"xlneoupperHeader\",\"CssHeader\":\"xlneoheader\",\"CssGroupDiv\":\"xlneogroupDiv\",\"CssPrevPage\":\"xlneoprevPage fa fa-backward fa-lg\",\"CssNextPage\":\"xlneonextPage fa fa-forward fa-lg\",\"CssFirstPage\":null,\"CssLastPage\":null,\"CssPageTextBox\":\"xlneogridTxtBox\",\"CssStatusBar\":\"xlneostatusBar\",\"CssPageChange\":\"CssPageChange\",\"DateFormat\":\"M/d/yyyy\",\"CssRemoveColumn\":null,\"CssClearSelection\":\"clearSelectionBtn\",\"CssNormalRow\":\"xlneonormalRow xlneocommonrowcss\",\"CssAlternatingRow\":\"xlneoalternatingrow xlneocommonrowcss\",\"CssSelectedRow\":\"xlneoselectedRow\",\"CssCheckedRow\":\"xlneocheckedRow xlneocommonrowcss\",\"GridColumnClass\":\"GridColumnClass\",\"xlheaderparentWithoutShadow\":\"xlheaderparentWithoutShadow\",\"xlheaderparentWithShadow\":\"xlheaderparentWithShadow\",\"newHeaderColumn\":\"newHeaderColumn\",\"xlneoMasterheaderbackground\":\"xlneoMasterheaderbackground\",\"PreviousStartIndex\":0,\"InfiniteScroll\":false,\"ScrollCount\":5,\"EventType\":\"\",\"RequireMiniatureVersion\":false,\"GroupHeaderInfo\":{},\"GroupRowIdInfo\":{},\"GroupParentRowIdInfo\":{},\"GroupParentRowIdCount\":{},\"GroupParentGroupRowInfo\":{},\"CheckGroupHeaderRows\":[],\"UnCheckGroupHeaderRows\":[],\"RowsToCheck\":[],\"RowsToUnCheck\":[],\"LargeSizeColumns\":[],\"RequireGroupHeaderCheckbox\":true,\"DataInsight\":false,\"GlobalID\":\"lx5134LX\",\"InstanceID\":\"\",\"ColumnsWithoutClientSideFunctionalityList\":[],\"AssemblyName\":\"ReconCommons\",\"ClassName\":\"com.ivp.recon.commons.RGridExpired\",\"RequireInfiniteScroll\":false,\"RightAlignHeaderForNumerics\":false,\"ChangedDataRows\":{},\"JsonData\":\"\",\"RuleDataInfo\":{},\"RuleEditorIntellisense\":[],\"Intellisense\":{},\"RequireAddClientSideColumn\":false,\"AutoGenerateIdColumn\":false,\"DistributionSuggestion\":false,\"KnockoutJsonData\":null,\"StaticJsonData\":\"\",\"GridOffsetWidth\":0,\"filterOperatorsEnum\":null,\"sizeJson\":{},\"SizeJson\":{},\"DataSetDateTimeFormat\":null,\"CustomFormatInfoClientSide\":{},\"filterONColumn\":null,\"FilterData\":null,\"IsMasterChildGrid\":false,\"ChildGridData\":null,\"MasterGridId\":null,\"ParentGridId\":null,\"CurrentRowId\":null,\"MasterChildMapping\":{},\"IsMasterGridSearch\":false,\"ColumnsOrderInGroupingChanged\":true,\"ChildGridsToOpen\":[],\"RowID\":null,\"IdColumnValue\":null,\"IdColumnNames\":[],\"ParentIDColumnName\":\"\",\"HasChildGrid\":{},\"ColumnsToDisplaySum\":[],\"CustomInfoList\":[],\"RaiseGridRenderList\":[],\"ColumnsToHideList\":[],\"ColumnNameMappingList\":[],\"ColumnWidthList\":[],\"GridChildLevel\":0,\"RequireColumnAlign\":true,\"ColumnAlignmentMapping\":[],\"DisplayValuesWithoutSpace\":{},\"CurrentGridMappedWidth\":{},\"ChildGridMappedWidth\":{},\"AddWidthToFirstColumn\":0,\"MasterChildMappedColumnValue\":\"\",\"LastChildMappingList\":[],\"ClientSideGrid\":true,\"MasterGridSearchText\":\"\",\"RequirePagingMasterChildGrid\":[],\"PageSizeMasterChildGrid\":[],\"ColumnList\":[],\"CollapseAllGroupHeader\":true,\"FooterAnimation\":0,\"ClearSerializationData\":false,\"KnockOutJsonDataForScroll\":null,\"KnockOutJsonDataPreviousRecords\":null,\"GridCustomFormatMapping\":{},\"CacheGriddata\":true,\"ColumnJustification\":{},\"actualDataList\":[],\"RequireTagging\":false,\"taggingInfoID\":\"taggingDiv\",\"EditGridFocusOut\":\"\",\"RequireEditableRow\":true,\"RequireShadow\":true,\"ComputedNewColumns\":[],\"EditableColumnsInfo\":[],\"MasterChildEditableColumnInfo\":[],\"MasterChildEditableColumns\":[],\"MetaInfoParams\":[],\"SummaryDataInfo\":null,\"CustomHeaderInfo\":{\"Price\":{\"AppendChild\":\"<div class=\\\"gridheaderAttributeNV\\\" style=\\\"width: 20px!important; float:left; \\\"/></div>\",\"ColumnWidth\":20},\"Price - Internal\":{\"AppendChild\":\"<div class=\\\"gridheaderAttributeNV\\\" style=\\\"width: 20px!important; float:left; \\\"/></div>\",\"ColumnWidth\":20},\"Price - External\":{\"AppendChild\":\"<div class=\\\"gridheaderAttributeNV\\\" style=\\\"width: 20px!important; float:left; \\\"/></div>\",\"ColumnWidth\":20},\"Currency\":{\"AppendChild\":\"<div class=\\\"gridheaderAttributeNV\\\" style=\\\"width: 20px!important; float:left; \\\"/></div>\",\"ColumnWidth\":20},\"Currency - Internal\":{\"AppendChild\":\"<div class=\\\"gridheaderAttributeNV\\\" style=\\\"width: 20px!important; float:left; \\\"/></div>\",\"ColumnWidth\":20},\"Currency - External\":{\"AppendChild\":\"<div class=\\\"gridheaderAttributeNV\\\" style=\\\"width: 20px!important; float:left; \\\"/></div>\",\"ColumnWidth\":20},\"Portfolio\":{\"AppendChild\":\"<div class=\\\"gridheaderAttributeNV\\\" style=\\\"width: 20px!important; float:left; \\\"/></div>\",\"ColumnWidth\":20},\"Portfolio - Internal\":{\"AppendChild\":\"<div class=\\\"gridheaderAttributeNV\\\" style=\\\"width: 20px!important; float:left; \\\"/></div>\",\"ColumnWidth\":20},\"Portfolio - External\":{\"AppendChild\":\"<div class=\\\"gridheaderAttributeNV\\\" style=\\\"width: 20px!important; float:left; \\\"/></div>\",\"ColumnWidth\":20},\"Account\":{\"AppendChild\":\"<div class=\\\"gridheaderAttributeNV\\\" style=\\\"width: 20px!important; float:left; \\\"/></div>\",\"ColumnWidth\":20},\"Account - Internal\":{\"AppendChild\":\"<div class=\\\"gridheaderAttributeNV\\\" style=\\\"width: 20px!important; float:left; \\\"/></div>\",\"ColumnWidth\":20},\"Account - External\":{\"AppendChild\":\"<div class=\\\"gridheaderAttributeNV\\\" style=\\\"width: 20px!important; float:left; \\\"/></div>\",\"ColumnWidth\":20}},\"HeaderIconList\":[\"<INPUT class=\\\"ClsOnHeatMap\\\" title=\\\"Heatmap\\\" type=\\\"button\\\" id=\\\"idHeatMapDecimalBtn\\\"  onclick=\\\"BMSingleScreen.prototype.decimalFormattingRequired();\\\">\",\"<INPUT class=\\\"bur_upload bur_wk\\\"  style=\\\"width:20px;\\\" title=\\\"Bulk Update Remarks\\\" type=\\\"button\\\" namedreconid=\\\"95\\\" assetclassid = \\\"-1\\\" assetid=\\\"-1\\\"  &exp=1\\\" id=\\\"btnReconExportToExcel_95\\\"  isMonthEnd =\\\"False\\\"  isReconSignOffForBUR =\\\"0\\\" isReconFrozenForBUR =\\\"0\\\" isNV= \\\"1\\\" >\",\"<input type=\\\"button\\\" id=\\\"getKeyInfoNv\\\" text=\\\"Recon Key Analysis Static\\\"    onclick=\\\"BMSingleScreen.prototype.getReconStaticInfoNv();\\\" class=\\\"xlgetkeyInfo\\\" title=\\\"View Recon Details\\\"></button>\",\"<input type=\\\"button\\\" id=\\\"getSubscriptionInfo\\\" text=\\\"Subscription Info\\\"    onclick=\\\"Subscription_BM.prototype.getSubscriptionInfo(true,'95','-1');\\\" class=\\\"xlgetkeyInfo\\\" title=\\\"Subscription Details\\\"></button>\",\"<input type=\\\"button\\\" id=\\\"showkeys\\\" text=\\\"Keys Attributes Filter\\\"   onclick=\\\"BMSingleScreen.prototype.showMatchColumns('','Price|Price|Currency|Portfolio|Currency|Portfolio|Account','');\\\" class=\\\"offShowkeyColumns\\\" title=\\\"Show Match Columns\\\"></button>\",\"<div id ='divShowGridActions' class='gridActionsTopRight' onclick='BMSingleScreen.prototype.ShowGridActions();'></div>\"],\"RaiseGridCallBackBeforeExecute\":\"\",\"FilterSplitter\":\"\",\"HeaderNameMappings\":{},\"ViewColumns\":[],\"ViewColumnsClone\":[],\"GroupContextMenu\":[],\"RequireHideGroupColumnsWithoutSumHeader\":false,\"IsInterOpInstalled\":false,\"CreateDefaultGrouping\":[],\"RequireExpandCollapseGrouping\":false,\"ThrottlingTime\":0,\"CustomFormatInfoClientSideList\":[],\"ColumnOperationType\":{},\"WeightedAverage\":{},\"LayoutConnectionKey\":\"LayoutConnectionKey\",\"FrozenColumnsInfo\":[],\"DefaultFilteringInfo\":[],\"ClearButtonDivInfo\":{},\"ViewInfo\":[],\"ColumnInfo\":[],\"FrozenCellInfo\":[],\"ResizingInfo\":{\"Position\":0,\"isResizing\":false},\"ResizingInfoList\":[],\"ViewInfoFormatter\":[],\"ViewInfoFormatterCopy\":[],\"GroupAndSortInfo\":[],\"CheckRowIndices\":[],\"FilterInfo\":[],\"MergerHeaderInfo\":[],\"PivotInfo\":{\"ColumnLabels\":[],\"RowGroups\":[],\"ValueColumns\":[]},\"CollapseInfo\":{\"CollapsedGroupRowId\":{},\"EXpandedGroupRowId\":{},\"CollapsedGroupLevel\":[],\"EXpandedGroupLevel\":[]},\"PivotView\":false,\"PivotViewApplied\":false,\"SearchText\":\"\",\"HideColumnsFromManageViews\":[],\"HideGridFooter\":false,\"HideGridHeaderForGrouping\":false,\"AggregateFooter\":{},\"Theme\":\"\",\"UpdateCacheInEditGrid\":false,\"RequireExcelFilter\":false,\"BindReactGrid\":true,\"RequireAdvanceFilterForNumericColumns\":true,\"RequireGroupinginManageViews\":true,\"TotalCachedRecordsCount\":0,\"DefaultFrozenColumns\":[],\"ExportLinkData\":true,\"ajaxStart\":false,\"PDFReportHeader\":\"NormalizedView \",\"PDFReportGenerator\":null,\"PDFHeaderImagePath\":null,\"FilterSplitterColumns\":[],\"RaiseGridCallBackForViews\":\"\",\"RequireRanking\":false,\"IsAdvanceSearch\":false,\"CellInfoStyle\":{\"5CECD4E6-DE6B-4FE9-8505-01EA8362DCC8|36\":{\"Test Quantity-Difference\":\"display : block ;color : #9E0508;\",\"Test Trade Money-Difference\":\"display : block ;color : #9E0508;\"},\"C1D276A2-009E-41F3-BFD4-CF53BB0D8810|35\":{\"Test Quantity-Difference\":\"display : block ;color : #9E0508;\",\"Test Trade Money-Difference\":\"display : block ;color : #9E0508;\"},\"867A864A-5FB7-EA11-A49A-005056A37AF4|4\":{\"Test Quantity-Difference\":\"display : block ;color : #9E0508;\",\"Test Trade Money-Difference\":\"display : block ;color : #9E0508;\"},\"41E73B8A-C3EE-EA11-80D4-005056A11197|14\":{\"Test Quantity-Difference\":\"display : block ;color : #9E0508;\",\"Test Trade Money-Difference\":\"display : block ;color : #9E0508;\"},\"E1FEA61D-E97E-EA11-9AE4-005056A37AF4|3\":{\"Test Quantity-Difference\":\"display : block ;color : #9E0508;\",\"Test Trade Money-Difference\":\"display : block ;color : #9E0508;\"},\"9BD19C71-A578-EA11-9AE4-005056A37AF4|2\":{\"Test Quantity-Difference\":\"display : block ;color : #9E0508;\",\"Test Trade Money-Difference\":\"display : block ;color : #9E0508;\"},\"08D1C8D9-5DA9-E911-BE54-005056A37AF4|1\":{\"Test Quantity-Difference\":\"display : block ;color : #9E0508;\",\"Test Trade Money-Difference\":\"display : block ;color : #9E0508;\"},\"A320BA95-B0F9-EA11-80D4-005056A11197|27\":{\"Test Quantity-Difference\":\"display : block ;color : #9E0508;\",\"Test Trade Money-Difference\":\"display : block ;color : #9E0508;\"},\"7C2D9E4E-7E22-EB11-80D6-005056A11197|32\":{\"Test Quantity-Difference\":\"display : block ;color : #9E0508;\",\"Test Trade Money-Difference\":\"display : block ;color : #9E0508;\"},\"A90AA8D9-AD33-EB11-80D7-005056A11197|42\":{\"Test Quantity-Difference\":\"display : block ;color : #9E0508;\",\"Test Trade Money-Difference\":\"display : block ;color : #9E0508;\"},\"407A659E-7D35-EB11-80D7-005056A11197|48\":{\"Test Quantity-Difference\":\"display : block ;color : #9E0508;\",\"Test Trade Money-Difference\":\"display : block ;color : #9E0508;\"},\"417A659E-7D35-EB11-80D7-005056A11197|49\":{\"Test Quantity-Difference\":\"display : block ;color : #9E0508;\",\"Test Trade Money-Difference\":\"display : block ;color : #9E0508;\"},\"A9E65A86-1736-EB11-80D7-005056A11197|52\":{\"Test Quantity-Difference\":\"display : block ;color : #9E0508;\",\"Test Trade Money-Difference\":\"display : block ;color : #9E0508;\"},\"AAE65A86-1736-EB11-80D7-005056A11197|53\":{\"Test Quantity-Difference\":\"display : block ;color : #9E0508;\",\"Test Trade Money-Difference\":\"display : block ;color : #9E0508;\"},\"98710413-1F9B-40DD-98DE-952F3071E2B9|28\":{\"Test Quantity-Difference\":\"display : block ;color : #9E0508;\",\"Test Trade Money-Difference\":\"display : block ;color : #9E0508;\"},\"97215DA1-20E1-4D04-B6AA-AFCEE5EEF878|29\":{\"Test Quantity-Difference\":\"display : block ;color : #9E0508;\",\"Test Trade Money-Difference\":\"display : block ;color : #9E0508;\"},\"17A68C52-A1DF-4D4C-88BB-1F12F073CDE3|30\":{\"Test Quantity-Difference\":\"display : block ;color : #9E0508;\",\"Test Trade Money-Difference\":\"display : block ;color : #9E0508;\"}},\"RaiseGridStartRender\":\"\",\"RaiseGridRender\":null,\"RaiseClickEvent\":null,\"RaiseGridRenderComplete\":null,\"RaiseGridUpdated\":null,\"RaiseGridBeginUpdate\":null,\"ShowAdvanceFilter\":false,\"RequireFunctionalSorting\":false,\"ColumnFilterStateInfo\":{},\"ShowGroupDiv\":false,\"GroupinColumnInfo\":{},\"GroupinColumnInfoRaw\":{},\"GridCustomRowFormatData\":{},\"GridCustomColumnFormatData\":[],\"ColumnOrder\":[],\"RequireEditAuditGrid\":true,\"AllowPasteinNumericColumns\":false,\"RequireExternalSearch\":false,\"BindGridFromTagging\":false,\"PDFInfo\":{\"Image\":null,\"PDFTemplateName\":null,\"DefaultGrouping\":[]},\"PageIdentifier\":null,\"ActionBy\":null,\"FilterExportData\":false,\"exportInfo\":null,\"BindGridBatch\":false,\"BaseBatchCount\":200000,\"NextBatchIndex\":0,\"RequireRuleCalcOnGroupHeader\":false,\"TagsExist\":false,\"RequireChildGridHeader\":true,\"LevelWithSameGridHeader\":0,\"ShowFormatterOnGroupHeader\":false,\"RequireOnlyColumnsInLayout\":false,\"IdentifierColumns\":[],\"ServiceUrl\":null,\"DoNotExportHiddenColumns\":false}",
        "GridInfoPosition": null,
        "GridJsonInfo": null,
        "GridTagKey": "user108BreakManagementForCashReconSrishti90|95|0|Posting-BM",
        "IsTPLCashGridReload": false,
        "PortfolioHierarchyColumnMapping": {
            "__type": "RReconPortfolioHierarchyColumnMapping:#RReconExternalCache",
            "Counterparty": null,
            "FundName": "Fund",
            "PBName": "PB",
            "account": "Test Account",
            "currency": "Test Currency",
            "fund": null,
            "portfolio": "Test Portfolio",
            "strategy": null,
            "tradeMoney": "Test Trade Money"
        },
        "ReconAssetDetails": null,
        "ReconAssetDetailsForKey": null,
        "ReportIdPosition": 0,
        "ReportParameter": "{\"FirstInstanceValue\":0,\"SecondInstanceValue\":0,\"FirstInstanceDateTime\":null,\"SecondInstanceDateTime\":null,\"IsDefaultView\":true,\"IsSystemView\":true,\"SnapshotInstance\":null,\"ReviewAgeStartRange\":0,\"ReviewAgeEndRange\":0,\"FromDashboard\":null,\"ShowPreviousInstanceData\":false,\"InstanceId\":8,\"FundName\":null,\"PBName\":null,\"AdminName\":null,\"WorkAreaMetaInfoForReport\":null,\"DefaultFilterInfo\":null,\"ReconType\":\"Accounting Cash\",\"objRWorkAreaReportConfigureInfo\":null,\"dsAssetDetails\":null,\"HiddenStateFlag\":-1,\"ThreewayColumnSuffix\":\"Corresponding Attribute\",\"List_N_wayColumnSuffix\":null,\"Is3WayRecon\":false,\"feedId\":0,\"Counterparty\":null,\"selectedBMAttributesXML\":\"$TagO$ROOT$TagC$$TagO$TABLE$TagC$$TagO$a$TagC$-15$TagO$$TagS$a$TagC$$TagO$$TagS$TABLE$TagC$$TagO$TABLE$TagC$$TagO$a$TagC$468$TagO$$TagS$a$TagC$$TagO$mg$TagC$1$TagO$$TagS$mg$TagC$$TagO$$TagS$TABLE$TagC$$TagO$TABLE$TagC$$TagO$a$TagC$470$TagO$$TagS$a$TagC$$TagO$mg$TagC$1$TagO$$TagS$mg$TagC$$TagO$$TagS$TABLE$TagC$$TagO$TABLE$TagC$$TagO$a$TagC$469$TagO$$TagS$a$TagC$$TagO$mg$TagC$1$TagO$$TagS$mg$TagC$$TagO$$TagS$TABLE$TagC$$TagO$TABLE$TagC$$TagO$a$TagC$471$TagO$$TagS$a$TagC$$TagO$mg$TagC$1$TagO$$TagS$mg$TagC$$TagO$$TagS$TABLE$TagC$$TagO$TABLE$TagC$$TagO$a$TagC$472$TagO$$TagS$a$TagC$$TagO$mg$TagC$1$TagO$$TagS$mg$TagC$$TagO$$TagS$TABLE$TagC$$TagO$TABLE$TagC$$TagO$a$TagC$-12$TagO$$TagS$a$TagC$$TagO$$TagS$TABLE$TagC$$TagO$TABLE$TagC$$TagO$a$TagC$-32$TagO$$TagS$a$TagC$$TagO$$TagS$TABLE$TagC$$TagO$TABLE$TagC$$TagO$a$TagC$-2$TagO$$TagS$a$TagC$$TagO$$TagS$TABLE$TagC$$TagO$TABLE$TagC$$TagO$a$TagC$-1$TagO$$TagS$a$TagC$$TagO$$TagS$TABLE$TagC$$TagO$TABLE$TagC$$TagO$a$TagC$-10$TagO$$TagS$a$TagC$$TagO$$TagS$TABLE$TagC$$TagO$TABLE$TagC$$TagO$a$TagC$-14$TagO$$TagS$a$TagC$$TagO$$TagS$TABLE$TagC$$TagO$TABLE$TagC$$TagO$a$TagC$-4$TagO$$TagS$a$TagC$$TagO$$TagS$TABLE$TagC$$TagO$TABLE$TagC$$TagO$a$TagC$-5$TagO$$TagS$a$TagC$$TagO$$TagS$TABLE$TagC$$TagO$TABLE$TagC$$TagO$a$TagC$-6$TagO$$TagS$a$TagC$$TagO$$TagS$TABLE$TagC$$TagO$$TagS$ROOT$TagC$\",\"isPlainGrid\":false,\"isSearchingDailyRecordForMe\":false,\"NamedReconId\":95,\"GridId\":\"zhtiazoa\",\"AssetClassMasterId\":-1,\"IsMonthEnd\":false,\"CashAttributeInfo\":{\"Portfolio\":null,\"Currency\":null,\"Fund\":null,\"Stratergy\":null,\"Account\":null,\"Counterparty\":null},\"RecordsToShow\":31,\"StartDate\":\"\\/Date(1608797199000)\\/\",\"EndDate\":\"\\/Date(1608797199000)\\/\",\"SodOrEOD\":0,\"UserName\":\"user108\",\"UserGroup\":\"222|abcd|Apollo Approver|Apollo Reviewer|App_1|App_2|Approver Group|Approver_Group|Ashish Group|AssignmentGroup|DSFSDFSDF|GAM_test|IVPApproverGroup|Operation Analyst India|Operation Analyst US|Operations|OpsHead|Privilege_group|SignOff|SignOff Group|test gp|test grrp|test5555\",\"ReportName\":\"Posting-BM\",\"ReportType\":13,\"DateFilterType\":9,\"NumberOfDays\":0,\"SelectedDate\":\"\\/Date(1608836799000)\\/\",\"CacheKey\":\"95|-1|NormalizedView\",\"Side\":null,\"UserView\":\"system\",\"BreaksForUser\":\"All\",\"NormalizeViewId\":95,\"ReportId\":6473,\"ApplyExactFiltersFromUI\":true,\"ApplyChangeCashAttributes\":true,\"ApplyChangeDate\":true,\"SelectedColumns\":\"-15|468|470|469|471|472\",\"OverlappedColumns\":\"468|470|469|471|472\",\"AssetToBeLoaded\":2,\"RemainingAssetToBeLoaded\":3,\"GroupOnColumns\":\"\",\"ColumnsToSum\":\"\",\"BreakStatus\":\"947|946|945|944|943|942|940|938|937|936|934|933|932|931|930|0|934|940|932|942|943|938|931|930|936|937|946|947|944|945|933|1034|1046|1051|1052|1053|1071|1073|1074|1088|1097|1110|1111|1112\",\"BreakType\":\"101|102|103\",\"ViewType\":0,\"EmailId\":\"\",\"DelimitedReconNames\":null,\"IsFromLeftMenu\":false,\"stringifyStartDate\":\"Dec-24-2020 13:36:39\",\"stringifyEndDate\":\"Dec-24-2020 13:36:39\",\"stringifyselectedDate\":\"Dec-25-2020 00:36:39\",\"isContinuousRecon\":false,\"isFundLevelSignOff\":true,\"gridCacheKey\":\"p300u1srwigvzp00rvm1itbd_user108zhtiazoaBreakManagementForCashReconSrishti90|95|0|Posting-BM\",\"IsTradePositionLinkageView\":false,\"NamedReconIdPosition\":0,\"AssetClassMasterIdPosition\":-1,\"IsTPLCashGridReload\":true,\"GridIdPosition\":null,\"ReportIdPosition\":0,\"SelectedColumnsPosition\":null,\"OverlappedColumnsPosition\":null,\"selectedActiveMEInstanceId\":\"0\",\"selectedActiveMELiteDate\":null,\"assetFeedRowIds\":null,\"DailyMECacheKey\":null,\"DailyMEUniqueID\":null,\"isSameGridBind\":true,\"GroupBySuggestion\":false,\"dictFilterContextMenu\":null,\"strDictSelectedRecordsOnGrid\":null,\"dictPortfolioHierarchyColumns\":{},\"dictPortfolioColumnByAsset\":null,\"isToleranceAttribute\":false,\"ColumnArray\":[\"Linked Details\",\"Recon Name\",\"Account\",\"Currency\",\"Portfolio\",\"Trade Date\",\"Price\"],\"dictAssetToleranceMapping\":null,\"isLinkageEnabled\":false,\"GridJsonData\":null,\"GridBloomberData\":null,\"IsFromReconRunCache\":false}",
        "ResultString": "",
        "SecMasterIntegrationDictionary": "{\"RIC\":\"RIC\",\"Ticker\":\"Ticker\",\"Security Description\":\"Security Description\",\"Investment\":\"Security Description\",\"Investment Description\":\"Security Description\",\"SecurityDescription\":\"Security Description\",\"InvestmentDesccription\":\"Security Description\",\"Description\":\"Security Description\",\"Security Short Description\":\"Security Description\",\"Local Pos Desc\":\"Security Description\",\"LoanId\":\"LoanID\",\"loanxId\":\"LoanID\",\"loanx\":\"LoanID\",\"Loanx id\":\"LoanID\",\"loan id\":\"LoanID\",\"_Security ID_\":\"Security ID\",\"Security ID\":\"Security ID\",\"ProductID\":\"Security ID\"}",
        "SuggestionCount": 0,
        "SuggestionData": null,
        "SuggestionDataSerialized": "[]",
        "SuggestionLiveStatus": -1,
        "TaggingSuggestionData": [],
        "ViewSettingsColumns": [
            "RAD_Test_Column",
            "Linked Details",
            "Recon Name",
            "Account",
            "Currency",
            "Portfolio",
            "Trade Date",
            "Price"
        ],
        "gridColumnInfo": "[{\"ColumnName\":\"is_historical\",\"DataType\":\"Number\"},{\"ColumnName\":\"break_type\",\"DataType\":\"string\"},{\"ColumnName\":\"portfolio_hierarchy\",\"DataType\":\"string\"},{\"ColumnName\":\"id\",\"DataType\":\"Number\"},{\"ColumnName\":\"modified_date\",\"DataType\":\"string\"},{\"ColumnName\":\"break_reason_id\",\"DataType\":\"string\"},{\"ColumnName\":\"business_Day\",\"DataType\":\"Date\"},{\"ColumnName\":\"report_key\",\"DataType\":\"string\"},{\"ColumnName\":\"file_id\",\"DataType\":\"Number\"},{\"ColumnName\":\"Break Status Code\",\"DataType\":\"Number\"},{\"ColumnName\":\"match_key\",\"DataType\":\"string\"},{\"ColumnName\":\"Matching Criteria\",\"DataType\":\"string\"},{\"ColumnName\":\"communication_ids\",\"DataType\":\"string\"},{\"ColumnName\":\"arid\",\"DataType\":\"Number\"},{\"ColumnName\":\"current_user\",\"DataType\":\"string\"},{\"ColumnName\":\"current_user_group\",\"DataType\":\"string\"},{\"ColumnName\":\"UniqueID\",\"DataType\":\"string\"},{\"ColumnName\":\"Suggestion_Fail_Trade\",\"DataType\":\"string\"},{\"ColumnName\":\"Suggestion_Linked_Break\",\"DataType\":\"string\"},{\"ColumnName\":\"Suggestion_Corporate_Action\",\"DataType\":\"string\"},{\"ColumnName\":\"Suggestion_Withholding_Tax\",\"DataType\":\"string\"},{\"ColumnName\":\"Suggestion_Unapplied_Wire\",\"DataType\":\"string\"},{\"ColumnName\":\"Suggestion_Match\",\"DataType\":\"string\"},{\"ColumnName\":\"Suggestion_Transfer\",\"DataType\":\"string\"},{\"ColumnName\":\"NamedReconID\",\"DataType\":\"Number\"},{\"ColumnName\":\"AssetID\",\"DataType\":\"Number\"},{\"ColumnName\":\"asset_feed_row_id_Fund\",\"DataType\":\"string\"},{\"ColumnName\":\"asset_feed_row_id_PB\",\"DataType\":\"string\"},{\"ColumnName\":\"CorrespondingId\",\"DataType\":\"Number\"},{\"ColumnName\":\"Account - External\",\"DataType\":\"string\"},{\"ColumnName\":\"Account - Internal\",\"DataType\":\"string\"},{\"ColumnName\":\"Account\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Account ID - Fund\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Account ID - PB\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Account ID\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Asset Type - Fund\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Asset Type - PB\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Asset Type\",\"DataType\":\"string\"},{\"ColumnName\":\"Currency - External\",\"DataType\":\"string\"},{\"ColumnName\":\"Currency - Internal\",\"DataType\":\"string\"},{\"ColumnName\":\"Currency\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Cusip - Fund\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Cusip - PB\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Cusip\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Day - Fund\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Day - PB\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Day\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Description - Fund\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Description - PB\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Description\",\"DataType\":\"string\"},{\"ColumnName\":\"Test ISIN - Fund\",\"DataType\":\"string\"},{\"ColumnName\":\"Test ISIN - PB\",\"DataType\":\"string\"},{\"ColumnName\":\"Test ISIN\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Issuer - Fund\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Issuer - PB\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Issuer\",\"DataType\":\"string\"},{\"ColumnName\":\"Portfolio - External\",\"DataType\":\"string\"},{\"ColumnName\":\"Portfolio - Internal\",\"DataType\":\"string\"},{\"ColumnName\":\"Portfolio\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Quantity - Fund\",\"DataType\":\"Number\"},{\"ColumnName\":\"Test Quantity - PB\",\"DataType\":\"Number\"},{\"ColumnName\":\"Test Quantity\",\"DataType\":\"Number\"},{\"ColumnName\":\"Test Quantity-Difference\",\"DataType\":\"Number\"},{\"ColumnName\":\"Test Sedol - Fund\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Sedol - PB\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Sedol\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Status - Fund\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Status - PB\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Status\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Ticker - Fund\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Ticker - PB\",\"DataType\":\"string\"},{\"ColumnName\":\"Test Ticker\",\"DataType\":\"string\"},{\"ColumnName\":\"Trade Date - External\",\"DataType\":\"Date\"},{\"ColumnName\":\"Trade Date - Internal\",\"DataType\":\"Date\"},{\"ColumnName\":\"Trade Date\",\"DataType\":\"Date\"},{\"ColumnName\":\"Price - External\",\"DataType\":\"Number\"},{\"ColumnName\":\"Price - Internal\",\"DataType\":\"Number\"},{\"ColumnName\":\"Price\",\"DataType\":\"Number\"},{\"ColumnName\":\"Price-Difference\",\"DataType\":\"Number\"},{\"ColumnName\":\"Break Status\",\"DataType\":\"string\"},{\"ColumnName\":\"Break Reason\",\"DataType\":\"string\"},{\"ColumnName\":\"User Remarks\",\"DataType\":\"string\"},{\"ColumnName\":\"Break Type\",\"DataType\":\"string\"},{\"ColumnName\":\"AF\",\"DataType\":\"Number\"},{\"ColumnName\":\"AP\",\"DataType\":\"Number\"},{\"ColumnName\":\"Business Age\",\"DataType\":\"Number\"},{\"ColumnName\":\"System Age\",\"DataType\":\"Number\"},{\"ColumnName\":\"Attachment\",\"DataType\":\"string\"},{\"ColumnName\":\"Status\",\"DataType\":\"string\"},{\"ColumnName\":\"Group Name\",\"DataType\":\"string\"},{\"ColumnName\":\"Recon Status\",\"DataType\":\"string\"},{\"ColumnName\":\"User Name\",\"DataType\":\"string\"},{\"ColumnName\":\"Asset Name\",\"DataType\":\"string\"},{\"ColumnName\":\"System Remarks\",\"DataType\":\"string\"},{\"ColumnName\":\"Email\",\"DataType\":\"string\"},{\"ColumnName\":\"Approver\",\"DataType\":\"string\"},{\"ColumnName\":\"Approver List\",\"DataType\":\"string\"},{\"ColumnName\":\"Pending Level\",\"DataType\":\"string\"},{\"ColumnName\":\"Review Age\",\"DataType\":\"Number\"},{\"ColumnName\":\"IsReviewed\",\"DataType\":\"string\"},{\"ColumnName\":\"Action Performed By\",\"DataType\":\"string\"},{\"ColumnName\":\"Action Performed On\",\"DataType\":\"Date\"},{\"ColumnName\":\"Action Name\",\"DataType\":\"string\"},{\"ColumnName\":\"Business Day\",\"DataType\":\"Date\"},{\"ColumnName\":\"Rec Time\",\"DataType\":\"Date\"},{\"ColumnName\":\"Original Action Time\",\"DataType\":\"Date\"},{\"ColumnName\":\"Recon Name\",\"DataType\":\"string\"},{\"ColumnName\":\"FundName_System\",\"DataType\":\"string\"},{\"ColumnName\":\"PBName_System\",\"DataType\":\"string\"},{\"ColumnName\":\"filtercontextmenu\",\"DataType\":\"string\"},{\"ColumnName\":\"Linked Details\",\"DataType\":\"string\"},{\"ColumnName\":\"Account\",\"DataType\":\"string\"},{\"ColumnName\":\"Currency\",\"DataType\":\"string\"},{\"ColumnName\":\"Portfolio\",\"DataType\":\"string\"},{\"ColumnName\":\"Trade Date\",\"DataType\":\"Date\"},{\"ColumnName\":\"Price\",\"DataType\":\"Number\"}]",
        "gridOutputData": [
            "[\"is_historical\",\"break_type\",\"portfolio_hierarchy\",\"id\",\"modified_date\",\"break_reason_id\",\"business_Day\",\"report_key\",\"file_id\",\"Break Status Code\",\"match_key\",\"Matching Criteria\",\"communication_ids\",\"arid\",\"current_user\",\"current_user_group\",\"UniqueID\",\"Suggestion_Fail_Trade\",\"Suggestion_Linked_Break\",\"Suggestion_Corporate_Action\",\"Suggestion_Withholding_Tax\",\"Suggestion_Unapplied_Wire\",\"Suggestion_Match\",\"Suggestion_Transfer\",\"NamedReconID\",\"AssetID\",\"asset_feed_row_id_Fund\",\"asset_feed_row_id_PB\",\"CorrespondingId\",\"Account - External\",\"Account - Internal\",\"Account\",\"Test Account ID - Fund\",\"Test Account ID - PB\",\"Test Account ID\",\"Test Asset Type - Fund\",\"Test Asset Type - PB\",\"Test Asset Type\",\"Currency - External\",\"Currency - Internal\",\"Currency\",\"Test Cusip - Fund\",\"Test Cusip - PB\",\"Test Cusip\",\"Test Day - Fund\",\"Test Day - PB\",\"Test Day\",\"Test Description - Fund\",\"Test Description - PB\",\"Test Description\",\"Test ISIN - Fund\",\"Test ISIN - PB\",\"Test ISIN\",\"Test Issuer - Fund\",\"Test Issuer - PB\",\"Test Issuer\",\"Portfolio - External\",\"Portfolio - Internal\",\"Portfolio\",\"Test Quantity - Fund\",\"Test Quantity - PB\",\"Test Quantity\",\"Test Quantity-Difference\",\"Test Sedol - Fund\",\"Test Sedol - PB\",\"Test Sedol\",\"Test Status - Fund\",\"Test Status - PB\",\"Test Status\",\"Test Ticker - Fund\",\"Test Ticker - PB\",\"Test Ticker\",\"Trade Date - External\",\"Trade Date - Internal\",\"Trade Date\",\"Price - External\",\"Price - Internal\",\"Price\",\"Price-Difference\",\"Break Status\",\"Break Reason\",\"User Remarks\",\"Break Type\",\"AF\",\"AP\",\"Business Age\",\"System Age\",\"Attachment\",\"Status\",\"Group Name\",\"Recon Status\",\"User Name\",\"Asset Name\",\"System Remarks\",\"Email\",\"Approver\",\"Approver List\",\"Pending Level\",\"Review Age\",\"IsReviewed\",\"Action Performed By\",\"Action Performed On\",\"Action Name\",\"Business Day\",\"Rec Time\",\"Original Action Time\",\"Recon Name\",\"FundName_System\",\"PBName_System\",\"filtercontextmenu\"]",
            "[[1.100000000,\"External Exception\",\"|SGD|PMTA|IIMTA|720\",53,\"2020-12-04T15:30:18\",\"\",\"2020-12-02T18:30:00\",\"aae65a86-1736-eb11-80d7-005056a11197\",null,0,\"\",\"17303|17308|17294|17297|17300|17304|17306\",null,53,\"mnarayan_82@ivp.in\",null,\"AAE65A86-1736-EB11-80D7-005056A11197|53\",null,null,null,null,null,null,null,720,1142,null,\",60,\",null,null,\"IIMTA\",\"IIMTA\",null,\"R1-IIDOCBB3.A7\",\"R1-IIDOCBB3.A7\",null,\"Expense-Cash\",\"Expense-Cash\",null,\"SGD\",\"SGD\",null,\"CU3.7A\",\"CU3.7A\",null,\"1\",\"1\",null,\"R1-IID3.7\",\"R1-IID3.7\",null,\"IS3.7A\",\"IS3.7A\",null,\"Issuer53\",\"Issuer53\",null,\"PMTA\",\"PMTA\",null,1.000000,1.000000,-1.000000,null,\"SE3.7A\",\"SE3.7A\",null,\"N\",\"N\",null,\"TI3.7A\",\"TI3.7A\",null,\"2017-08-28T18:30:00\",\"2017-08-28T18:30:00\",null,1000.000000,1000.000000,-1000.000000,null,\"\",null,\"External Exception\",null,null,1,0,\"N\",\"Open\",null,\"B\",\"mnarayan_82@ivp.in\",\"Expense Test- Cash\",null,\"\",null,null,\"\",1,\"1\",\"saneja@ivp.in\",\"2020-12-23T16:35:55\",\"Post\",\"2020-12-02T18:30:00\",\"2020-12-04T10:00:18\",\"2020-12-23T16:35:55\",\"check TMP 3\",\"Fund\",\"PB\",\"External Exception|||Open|720|1142|isNotDangling|||||||53|aae65a86-1736-eb11-80d7-005056a11197|0|False|0\"],[0,\"External Exception\",\"|SGD|PMTA|IIMTA|720\",52,\"2020-12-04T15:30:18\",\"\",\"2020-12-02T18:30:00\",\"a9e65a86-1736-eb11-80d7-005056a11197\",null,0,\"\",\"17303|17308|17294|17297|17300|17304|17306\",null,52,\"mnarayan_82@ivp.in\",null,\"A9E65A86-1736-EB11-80D7-005056A11197|52\",null,null,null,null,null,null,null,720,1142,null,\",59,\",null,null,\"IIMTA\",\"IIMTA\",null,\"R1-IIDOCBB3.A7\",\"R1-IIDOCBB3.A7\",null,\"Expense-Cash\",\"Expense-Cash\",null,\"SGD\",\"SGD\",null,\"CU3.7A\",\"CU3.7A\",null,\"1\",\"1\",null,\"R1-IID3.7\",\"R1-IID3.7\",null,\"IS3.7A\",\"IS3.7A\",null,\"Issuer53\",\"Issuer53\",null,\"PMTA\",\"PMTA\",null,1.000000,1.000000,-1.000000,null,\"SE3.7A\",\"SE3.7A\",null,\"N\",\"N\",null,\"TI3.7A\",\"TI3.7A\",null,\"2017-08-28T18:30:00\",\"2017-08-28T18:30:00\",null,1000.000000,1000.000000,-1000.000000,null,\"\",null,\"External Exception\",null,null,1,0,\"N\",\"Open\",null,\"B\",\"mnarayan_82@ivp.in\",\"Expense Test- Cash\",null,\"\",null,null,\"\",1,\"1\",\"saneja@ivp.in\",\"2020-12-23T16:35:55\",\"Post\",\"2020-12-02T18:30:00\",\"2020-12-04T10:00:18\",\"2020-12-23T16:35:55\",\"check TMP 3\",\"Fund\",\"PB\",\"External Exception|||Open|720|1142|isNotDangling|||||||52|a9e65a86-1736-eb11-80d7-005056a11197|0|False|0\"],[0,\"Internal Exception\",\"|NOK|PAGM|IIAGM|720\",36,\"2020-11-11T16:01:59\",\"\",\"2020-06-24T18:30:00\",\"5cecd4e6-de6b-4fe9-8505-01ea8362dcc8\",null,0,\"\",\"17303|17308|17294|17297|17300|17304|17306\",\"\",36,\"saneja@ivp.in\",\"\",\"5CECD4E6-DE6B-4FE9-8505-01EA8362DCC8|36\",null,null,null,null,null,null,null,720,1142,\",39,\",null,null,\"IIAGM\",null,\"IIAGM\",\"R1-IIDURB1.6.6\",null,\"R1-IIDURB1.6.6\",\"Capital-Cash\",null,\"Capital-Cash\",\"NOK\",null,\"NOK\",\"CU1.7\",null,\"CU1.7\",\"1\",null,\"1\",\"R1-IIDURB1.6\",null,\"R1-IIDURB1.6\",\"IS1.7\",null,\"IS1.7\",\"Issuer6\",null,\"Issuer6\",\"PAGM\",null,\"PAGM\",1.000000,null,1.000000,1.000000,\"SE1.7\",null,\"SE1.7\",\"N\",null,\"N\",\"TI1.7\",null,\"TI1.7\",\"2017-08-28T18:30:00\",null,\"2017-08-28T18:30:00\",500.000000,null,500.000000,500.000000,null,\"\",\"moved 401\",\"Internal Exception\",null,null,115,114,\"N\",\"Open\",\"\",\"B\",\"saneja@ivp.in\",\"Expense Test- Cash\",\",MOVED TO ASSET\",\"\",\"\",null,\"\",17,\"1\",null,null,null,\"2020-06-24T18:30:00\",\"2020-11-09T11:25:41\",null,\"check TMP 3\",\"Fund\",\"PB\",\"Internal Exception|||Open|720|1142|isNotDangling|moved 401||||||36|5cecd4e6-de6b-4fe9-8505-01ea8362dcc8|0|False|0\"],[0,\"External Exception\",\"|SGD|PMTA|IIMTA|720\",27,\"2020-10-07T17:50:55\",\"\",\"2020-09-16T18:30:00\",\"a320ba95-b0f9-ea11-80d4-005056a11197\",null,0,\"\",\"17303|17308|17294|17297|17300|17304|17306\",null,27,\"saneja@ivp.in\",\"\",\"A320BA95-B0F9-EA11-80D4-005056A11197|27\",null,null,null,null,null,null,null,720,1142,null,\",29,\",null,null,\"IIMTA\",\"IIMTA\",null,\"R1-IIDOCBB3.A7\",\"R1-IIDOCBB3.A7\",null,\"Expense-Cash\",\"Expense-Cash\",null,\"SGD\",\"SGD\",null,\"CU3.7A\",\"CU3.7A\",null,\"1\",\"1\",null,\"R1-IID3.7\",\"R1-IID3.7\",null,\"IS3.7A\",\"IS3.7A\",null,\"Issuer53\",\"Issuer53\",null,\"PMTA\",\"PMTA\",null,1.000000,1.000000,-1.000000,null,\"SE3.7A\",\"SE3.7A\",null,\"N\",\"N\",null,\"TI3.7A\",\"TI3.7A\",null,\"2017-08-28T18:30:00\",\"2017-08-28T18:30:00\",null,1000.000000,1000.000000,-1000.000000,null,\"\",\"Expense Test Bucket\",\"External Exception\",null,null,55,54,\"N\",\"Open\",\"\",\"B\",\"saneja@ivp.in\",\"Expense Test- Cash\",null,\"\",\"\",null,\"\",41,\"1\",null,null,null,\"2020-09-16T18:30:00\",\"2020-09-18T13:12:19\",null,\"check TMP 3\",\"Fund\",\"PB\",\"External Exception|||Open|720|1142|isNotDangling|Expense Test Bucket||||||27|a320ba95-b0f9-ea11-80d4-005056a11197|0|False|0\"],[0,\"External Exception\",\"|YEN|PURZ|IIURZ|720\",28,\"2020-10-07T17:49:14\",\"\",\"2020-04-05T18:30:00\",\"98710413-1f9b-40dd-98de-952f3071e2b9\",null,0,\"\",\"17303|17308|17294|17297|17300|17304|17306\",\"\",28,\"saneja@ivp.in\",\"\",\"98710413-1F9B-40DD-98DE-952F3071E2B9|28\",null,null,null,null,null,null,null,720,1142,null,\",30,\",null,null,\"IIURZ\",\"IIURZ\",null,\"R1-IIDURB1.31\",\"R1-IIDURB1.31\",null,\"Capital-Cash\",\"Capital-Cash\",null,\"YEN\",\"YEN\",null,\"CU1.31\",\"CU1.31\",null,\"1\",\"1\",null,\"R1-IIDURB1.3\",\"R1-IIDURB1.3\",null,\"IS1.31\",\"IS1.31\",null,\"Issuer2\",\"Issuer2\",null,\"PURZ\",\"PURZ\",null,1.000000,1.000000,-1.000000,null,\"SE1.31\",\"SE1.31\",null,\"N\",\"N\",null,\"TI1.31\",\"TI1.31\",null,\"2017-08-28T18:30:00\",\"2017-08-28T18:30:00\",null,1000.000000,1000.000000,-1000.000000,null,\"\",\"Expense test bucket\",\"External Exception\",null,null,173,172,\"N\",\"Pending\",\"\",\"B\",\"saneja@ivp.in\",\"Expense Test- Cash\",\",MOVED TO ASSET,BREAKS APPROVED,BREAKS APPROVED,BREAKS APPROVED,BREAKS APPROVED,BREAKS APPROVED,BREAKS APPROVED,BREAKS APPROVED,BREAKS APPROVED,BREAKS APPROVED,BREAKS APPROVED,BREAKS APPROVED\",\"\",\"Operations\",\"|Approver Group|Approver_Group|222|abcd|App_1|App_2|Ashish Group|AssignmentGroup|DSFSDFSDF|GAM_test|IVPApproverGroup|Operations|OpsHead|SignOff|SignOff Group|test gp|test grrp|\",\"Pending at Level:12\",21,\"1\",null,null,null,\"2020-04-05T18:30:00\",\"2020-09-18T13:12:19\",null,\"check TMP 3\",\"Fund\",\"PB\",\"External Exception|||Pending|720|1142|isNotDangling|Expense test bucket||||||28|98710413-1f9b-40dd-98de-952f3071e2b9|0|False|0\"],[0,\"External Exception\",\"|SGD|PMTA|IIMTA|720\",48,\"2020-12-03T21:08:38\",\"\",\"2020-12-01T18:30:00\",\"407a659e-7d35-eb11-80d7-005056a11197\",null,0,\"\",\"17303|17308|17294|17297|17300|17304|17306\",null,48,\"mnarayan_82@ivp.in\",\"\",\"407A659E-7D35-EB11-80D7-005056A11197|48\",null,null,null,null,null,null,null,720,1142,null,\",53,\",null,null,\"IIMTA\",\"IIMTA\",null,\"R1-IIDOCBB3.A7\",\"R1-IIDOCBB3.A7\",null,\"Expense-Cash\",\"Expense-Cash\",null,\"SGD\",\"SGD\",null,\"CU3.7A\",\"CU3.7A\",null,\"1\",\"1\",null,\"R1-IID3.7\",\"R1-IID3.7\",null,\"IS3.7A\",\"IS3.7A\",null,\"Issuer53\",\"Issuer53\",null,\"PMTA\",\"PMTA\",null,1.000000,1.000000,-1.000000,null,\"SE3.7A\",\"SE3.7A\",null,\"N\",\"N\",null,\"TI3.7A\",\"TI3.7A\",null,\"2017-08-28T18:30:00\",\"2017-08-28T18:30:00\",null,1000.000000,1000.000000,-1000.000000,null,\"\",null,\"External Exception\",null,null,2,1,\"N\",\"Open\",\"\",\"B\",\"mnarayan_82@ivp.in\",\"Expense Test- Cash\",null,\"\",\"\",null,\"\",2,\"0\",null,null,null,\"2020-12-01T18:30:00\",\"2020-12-03T15:38:38\",null,\"check TMP 3\",\"Fund\",\"PB\",\"External Exception|||Open|720|1142|isNotDangling|||||||48|407a659e-7d35-eb11-80d7-005056a11197|0|False|0\"],[0,\"External Exception\",\"|SGD|PMTA|IIMTA|720\",1,\"2020-11-06T14:24:14\",\"\",\"2019-07-16T18:30:00\",\"08d1c8d9-5da9-e911-be54-005056a37af4\",null,227,\"\",\"17303|17308|17294|17297|17300|17304|17306\",null,1,\"saneja@ivp.in\",\"\",\"08D1C8D9-5DA9-E911-BE54-005056A37AF4|1\",null,null,null,null,null,null,null,720,1142,null,\",1,\",null,null,\"IIMTA\",\"IIMTA\",null,\"R1-IIDOCBB3.A7\",\"R1-IIDOCBB3.A7\",null,\"Expense-Cash\",\"Expense-Cash\",null,\"SGD\",\"SGD\",null,\"CU3.7A\",\"CU3.7A\",null,\"1\",\"1\",null,\"R1-IID3.7\",\"R1-IID3.7\",null,\"IS3.7A\",\"IS3.7A\",null,\"Issuer53\",\"Issuer53\",null,\"PMTA\",\"PMTA\",null,1.000000,1.000000,-1.000000,null,\"SE3.7A\",\"SE3.7A\",null,\"N\",\"N\",null,\"TI3.7A\",\"TI3.7A\",null,\"2017-08-28T18:30:00\",\"2017-08-28T18:30:00\",null,1000.000000,1000.000000,-1000.000000,\"Correction External\",\"\",\"ttt\",\"External Exception\",null,null,359,358,\"N\",\"Open\",\"\",\"B\",\"saneja@ivp.in\",\"Expense Test- Cash\",null,\"\",\"\",null,\"\",359,\"0\",null,null,null,\"2019-07-16T18:30:00\",\"2019-07-18T13:23:05\",null,\"check TMP 3\",\"Fund\",\"PB\",\"External Exception|||Open|720|1142|isNotDangling|ttt||||||1|08d1c8d9-5da9-e911-be54-005056a37af4|0|False|0\"],[0,\"External Exception\",\"|SGD|PMTA|IIMTA|720\",32,\"2020-11-09T16:55:41\",\"\",\"2020-11-05T18:30:00\",\"7c2d9e4e-7e22-eb11-80d6-005056a11197\",null,0,\"\",\"17303|17308|17294|17297|17300|17304|17306\",null,32,\"mnarayan_82@ivp.in\",\"\",\"7C2D9E4E-7E22-EB11-80D6-005056A11197|32\",null,null,null,null,null,null,null,720,1142,null,\",35,\",null,null,\"IIMTA\",\"IIMTA\",null,\"R1-IIDOCBB3.A7\",\"R1-IIDOCBB3.A7\",null,\"Expense-Cash\",\"Expense-Cash\",null,\"SGD\",\"SGD\",null,\"CU3.7A\",\"CU3.7A\",null,\"1\",\"1\",null,\"R1-IID3.7\",\"R1-IID3.7\",null,\"IS3.7A\",\"IS3.7A\",null,\"Issuer53\",\"Issuer53\",null,\"PMTA\",\"PMTA\",null,1.000000,1.000000,-1.000000,null,\"SE3.7A\",\"SE3.7A\",null,\"N\",\"N\",null,\"TI3.7A\",\"TI3.7A\",null,\"2017-08-28T18:30:00\",\"2017-08-28T18:30:00\",null,1000.000000,1000.000000,-1000.000000,null,\"\",null,\"External Exception\",null,null,20,19,\"N\",\"Open\",\"\",\"B\",\"mnarayan_82@ivp.in\",\"Expense Test- Cash\",null,\"\",\"\",null,\"\",20,\"0\",null,null,null,\"2020-11-05T18:30:00\",\"2020-11-09T11:25:41\",null,\"check TMP 3\",\"Fund\",\"PB\",\"External Exception|||Open|720|1142|isNotDangling|||||||32|7c2d9e4e-7e22-eb11-80d6-005056a11197|0|False|0\"],[0,\"External Exception\",\"|SGD|PMTA|IIMTA|720\",49,\"2020-12-03T21:08:38\",\"\",\"2020-12-01T18:30:00\",\"417a659e-7d35-eb11-80d7-005056a11197\",null,0,\"\",\"17303|17308|17294|17297|17300|17304|17306\",null,49,\"mnarayan_82@ivp.in\",\"\",\"417A659E-7D35-EB11-80D7-005056A11197|49\",null,null,null,null,null,null,null,720,1142,null,\",54,\",null,null,\"IIMTA\",\"IIMTA\",null,\"R1-IIDOCBB3.A7\",\"R1-IIDOCBB3.A7\",null,\"Expense-Cash\",\"Expense-Cash\",null,\"SGD\",\"SGD\",null,\"CU3.7A\",\"CU3.7A\",null,\"1\",\"1\",null,\"R1-IID3.7\",\"R1-IID3.7\",null,\"IS3.7A\",\"IS3.7A\",null,\"Issuer53\",\"Issuer53\",null,\"PMTA\",\"PMTA\",null,1.000000,1.000000,-1.000000,null,\"SE3.7A\",\"SE3.7A\",null,\"N\",\"N\",null,\"TI3.7A\",\"TI3.7A\",null,\"2017-08-28T18:30:00\",\"2017-08-28T18:30:00\",null,1000.000000,1000.000000,-1000.000000,null,\"\",null,\"External Exception\",null,null,2,1,\"N\",\"Open\",\"\",\"B\",\"mnarayan_82@ivp.in\",\"Expense Test- Cash\",null,\"\",\"\",null,\"\",2,\"0\",null,null,null,\"2020-12-01T18:30:00\",\"2020-12-03T15:38:38\",null,\"check TMP 3\",\"Fund\",\"PB\",\"External Exception|||Open|720|1142|isNotDangling|||||||49|417a659e-7d35-eb11-80d7-005056a11197|0|False|0\"],[0,\"External Exception\",\"|SGD|PMTA|IIMTA|720\",2,\"2020-10-07T17:50:55\",\"\",\"2020-04-05T18:30:00\",\"9bd19c71-a578-ea11-9ae4-005056a37af4\",null,0,\"\",\"17303|17308|17294|17297|17300|17304|17306\",null,2,\"saneja@ivp.in\",\"\",\"9BD19C71-A578-EA11-9AE4-005056A37AF4|2\",null,null,null,null,null,null,null,720,1142,null,\",2,\",null,null,\"IIMTA\",\"IIMTA\",null,\"R1-IIDOCBB3.A7\",\"R1-IIDOCBB3.A7\",null,\"Expense-Cash\",\"Expense-Cash\",null,\"SGD\",\"SGD\",null,\"CU3.7A\",\"CU3.7A\",null,\"1\",\"1\",null,\"R1-IID3.7\",\"R1-IID3.7\",null,\"IS3.7A\",\"IS3.7A\",null,\"Issuer53\",\"Issuer53\",null,\"PMTA\",\"PMTA\",null,1.000000,1.000000,-1.000000,null,\"SE3.7A\",\"SE3.7A\",null,\"N\",\"N\",null,\"TI3.7A\",\"TI3.7A\",null,\"2017-08-28T18:30:00\",\"2017-08-28T18:30:00\",null,1000.000000,1000.000000,-1000.000000,null,\"\",\"Expense Test Bucket\",\"External Exception\",null,null,173,172,\"N\",\"Open\",\"\",\"B\",\"saneja@ivp.in\",\"Expense Test- Cash\",null,\"\",\"\",null,\"\",173,\"0\",null,null,null,\"2020-04-05T18:30:00\",\"2020-04-07T07:57:35\",null,\"check TMP 3\",\"Fund\",\"PB\",\"External Exception|||Open|720|1142|isNotDangling|Expense Test Bucket||||||2|9bd19c71-a578-ea11-9ae4-005056a37af4|0|False|0\"]]"
        ],
        "isDefaultFilterApplied": false,
        "isGridEmpty": false,
        "isHeatMapEnabled": true,
        "isReconciliationTaskInProgress": false,
        "isTradePositionLinkageApplied": false,
        "listKeyAttributes": null,
        "objKeyBMInfo": null
    };

    try {
        adaptablegridbundle.updateRow('Add', data[0].gridOutputData, 'RecordSummaryGrid');
    }
    catch(ex){

    }


    // }
    //return gridData
}
