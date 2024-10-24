import React, { useEffect, useState, Fragment } from "react";

import Element from './elements/element';
import { HashLink } from 'react-router-hash-link';

export default function Rfqform()
{
    const [data, setData] = useState([]);
    const txtstyle = {
        border: 0
    };
    const schema = {
        "title": "B2B-FTF",
        "properties": {
            "citiesCoverage": {
                "title": "Cities Coverage",
                "type": "string",
                "classNames": "break-before col-lg-6 col-md-6 col-sm-12 col-xs-12",
                "isNewSection": true,
                "sectionTitle": "Sample Details"
            },
            "sampleSizeMain": {
                "title": "Sample size (Main)",
                "type": "integer",
                "minimum": 0
            },
            "sampleSizeBooster": {
                "title": "Sample size (Booster)",
                "type": "integer",
                "minimum": 0
            },
            "sampleSizeOther": {
                "title": "Sample size 3 (Other)",
                "type": "integer",
                "minimum": 0
            },
            "lengthOfInterview": {
                "title": "Length of Interview",
                "type": "string",
                "optionsLabel": "LengthOfInterviewOptions"
            },
            "targetGroupDefinition": {
                "title": "Target Group definition",
                "type": "string",
                "widgetType": "textarea"
            },
            "sampleListByClient": {
                "title": "Sample / List provided by client",
                "type": "string",
                "enum": ["Yes, Client List", "Yes, Not Client List", "No"]
            },
            "sampleRatio": {
                "title": "Sample Ratio",
                "type": "string"
            },
            "recruitmentDifficulty": {
                "title": "Recruitment difficulty",
                "type": "string",
                "enum": ["Easy", "Medium", "Hard"]
            },
            "clientNameDisclosed": {
                "title": "Client name disclosed to respondents?",
                "type": "string",
                "enum": [
                    "Yes, at recruitment stage",
                    "Yes, at the end of interview",
                    "No, never"
                ]
            },
            "boosters": {
                "title": "Boosters?",
                "type": "string",
                "enum": ["Yes", "No"]
            },
            "boostersType": {
                "title": "Boosters Type",
                "type": "string",
                "enum": ["Boost to meet", "Augmented"]
            },
            "incidenceRate": {
                "title": "Incidence rate",
                "type": "string"
            },
            "interviewingTools": {
                "title": "Interviewing Tools",
                "type": "string",
                "enum": ["Pen & Paper", "CATI", "CAPI", "CAWI/Online", "Other Specify"]
            },
            "preRecruitment": {
                "title": "Pre-Recruitment",
                "type": "string",
                "enum": ["Yes", "No"]
            },
            "samplingType": {
                "title": "Sampling Type",
                "type": "string",
                "enum": [
                    "Random Sampling",
                    "Quota Sampling",
                    "Client List/Database",
                    "Snowballing",
                    "Online Panel",
                    "Other Specify"
                ]
            },
            "age": {
                "title": "Age",
                "type": "string",
                "classNames": "break-before col-lg-6 col-md-6 col-sm-12 col-xs-12",
                "isNewSection": true,
                "sectionTitle": "Quota"
            },
            "gender": {
                "title": "Gender",
                "type": "string"
            },
            "brandCategory": {
                "title": "Brand/Category Usage",
                "type": "string"
            },
            "socialClass": {
                "title": "Social Class (SEC)/Income",
                "type": "string"
            },
            "race": {
                "title": "Race",
                "type": "string"
            },
            "regionCity": {
                "title": "Region/City",
                "type": "string"
            },
            "otherSpecify1": {
                "title": "Other Specify 1",
                "type": "string"
            },
            "otherSpecify2": {
                "title": "Other Specify 2",
                "type": "string"
            },
            "otherSpecify3": {
                "title": "Other Specify 3",
                "type": "string"
            },
            "additionalRequirements": {
                "title": "Additional Requirements",
                "type": "string",
                "classNames": "break-before col-lg-6 col-md-6 col-sm-12 col-xs-12",
                "widgetType": "textarea",
                "isNewSection": true,
                "sectionTitle": "Special Requirements"
            },
            "referencePreviousProjects": {
                "title": "Reference to previous projects of similar nature (job no):",
                "type": "string"
            },
            "clientsHelpApproach": {
                "title": "Client's help to approach respondents / Client will help in recruitment?",
                "type": "string",
                "enum": ["Yes", "No"],
                "classNames": "break-before col-lg-6 col-md-6 col-sm-12 col-xs-12",
                "isNewSection": true,
                "sectionTitle": "B2B"
            },
            "interviewerRequirements": {
                "title": "Interviewer Requirements",
                "type": "string",
                "widgetType": "textarea"
            },
            "recordingRequirement": {
                "title": "Recording/Photo taking requirement (Video recording, audio taping), etc.",
                "type": "string",
                "widgetType": "textarea"
            },

            "respondentRequirements": {
                "title": "Respondent requirements",
                "type": "string",
                "widgetType": "textarea",
                "classNames": "break-before col-lg-6 col-md-6 col-sm-12 col-xs-12",
                "isNewSection": true,
                "sectionTitle": "Data Collection"
            },
            "facilityRequirements": {
                "title": "Facility requirements",
                "type": "string",
                "widgetType": "textarea"
            },
            "timesOfVisit": {
                "title": "Times of visit",
                "type": "string"
            },
            "visitDuration": {
                "title": "Duration of each visit",
                "type": "string"
            },
            "serviceUpTo": {
                "title": "Service Up To",
                "type": "string",
                "enum": ["Full Report", "Summary (Top Line)", "Moderation"]
            },
            "diary": {
                "title": "Diary?",
                "type": "string",
                "enum": ["Yes", "No"],
                "classNames": "break-before col-lg-6 col-md-6 col-sm-12 col-xs-12",
                "isNewSection": true,
                "sectionTitle": "Diary"
            },
            "numberOfQuestionnaires": {
                "title": "Number Of Questionnaires",
                "type": "integer",
                "classNames": "break-before col-lg-6 col-md-6 col-sm-12 col-xs-12",
                "isNewSection": true,
                "sectionTitle": "Questionnaire Design"
            },
            "numberOfQuestions": {
                "title": "Number Of Questions",
                "type": "integer"
            },
            "numberOfOpenEnded": {
                "title": "Number Of Open Ended",
                "type": "integer"
            },
            "numberOfSemiOpenEnded": {
                "title": "Number Of Semi Open Ended",
                "type": "integer"
            },
            "anyStimulus": {
                "title": "Any stimulus (e.g. images/concept boards, etc.)",
                "widgetType": "textarea",
                "type": "string"
            },
            "percentageExpectedChange": {
                "title": "% expected change in questionnaire in each wave (if Multi Wave)",
                "type": "string",
                "enum": ["0-10% Change", "11-30% Change", "31-60% Change", ">60% Change"]
            },
            "translationRequired": {
                "title": "Translation Required",
                "type": "string",
                "enum": ["Yes", "No"],
                "classNames": "break-before col-lg-6 col-md-6 col-sm-12 col-xs-12",
                "isNewSection": true,
                "sectionTitle": "Translation"
            },
            "translationLanguages": {
                "title": "Translation Languages",
                "widgetType": "textarea",
                "type": "string"
            },
            "verbatimTranslationRequired": {
                "title": "Verbatim Translation Required",
                "type": "string",
                "enum": ["Yes", "No"]
            },
            "codingRequired": {
                "title": "Coding Required",
                "type": "string",
                "classNames": "break-before col-lg-6 col-md-6 col-sm-12 col-xs-12",
                "isNewSection": true,
                "sectionTitle": "Coding",
                "enum": ["Yes", "No"]
            },
            "numberOfOpenEndedToCode": {
                "title": "Number Of Open Ended To Be Coded",
                "type": "integer"
            },
            "numberOfSemiOpenEndedToCode": {
                "title": "Number Of Semi Open Ended To Be Coded",
                "type": "integer"
            },
            "deliverableTypes": {
                "title": "Deliverable Types",
                "type": "array",
                "items": {
                    "type": "string",
                    "enum": [
                        "CE+OE Tables",
                        "CE Tables",
                        "Interim Table",
                        "Top Line/KPI",
                        "Excel Tables",
                        "Quanvert",
                        "Q",
                        "SPSS",
                        "Resolve",
                        "JMP (for P&G studies)",
                        "Raw data (ASCII/Excel)",
                        "One table per sheet",
                        "All tables in one sheet",
                        "Branded Proprietory Products",
                        "WB (with Kruskal, Netted WB, Category WB, BEI score in tables)",
                        "eQ",
                        "CE / RSI",
                        "FACTOR",
                        "Regression (Linear, Shapley Value etc.)",
                        "Correlation",
                        "EPIC Calc",
                        "Correspondence / GAP analysis/ Brand Map",
                        "Kruskal Derived Importance Score",
                        "Penalty Analysis (with Lifter Score for Pepsi Client only)",
                        "Balance Detector",
                        "Jaccard",
                        "Normalization / Pearson Residual Index",
                        "PSM",
                        "Rank Order Analysis (Only for Africa)",
                        "Decision Tree (Summary Table - Only for Africa)",
                        "Incidence Calculation",
                        "Cross Brand Affinity",
                        "BEI / BEM",
                        "WB Foresight",
                        "Brand Builder",
                        "Segmentation",
                        "BPCM",
                        "Conjoint Analysis",
                        "Pair test",
                        "Product testing suite",
                        "Special Products",
                        "Eye Tracking",
                        "Path Tracking",
                        "Tabulation Language",
                        "English",
                        "Other",
                        "Table Sets",
                        "Abs+%+Sig",
                        "%+Sig",
                        "% Only",
                        "Abs Only",
                        "Abs+Sig",
                        "Abs+%",
                        "Weighting",
                        "Sig testing",
                        "Brand Leverage"
                    ]
                },
                "uniqueItems": true,
                "isMulti": true,
                "widgetType": "multiselectdropdown",
                "classNames": "break-before col-lg-6 col-md-6 col-sm-12 col-xs-12",
                "isNewSection": true,
                "sectionTitle": "SetUp and Delivery"
            },
            "statisticalAnalysisComments": {
                "title": "Statistical Analysis Comments",
                "type": "string"
            },
            "qualityControl": {
                "title": "Quality Control",
                "type": "string",
                "enum": [
                    "No QC",
                    "Standard QC(Check Specification Sheet for details of standard backcheck)",
                    "Non-standard QC(Specify %)"
                ]
            },
            "qualityControlComments": {
                "title": "Quality Control Comments",
                "type": "string"
            },
            "clientSamplesAfterFW": {
                "title": "Client Samples After Field Work",
                "type": "string",
                "enum": ["Destroyed by Nielsen", "Returned to Client", "No Samples"]
            },
            "numberOfSlides": {
                "title": "Number of Slides (Per Wave Per Country)",
                "type": "integer",
                "minimum": 0
            },
            "numberOfExcelFiles": {
                "title": "Number of Excel Files",
                "type": "integer",
                "minimum": 0
            },
            "numberOfRoboCharts": {
                "title": "Number of Robo Chart Run",
                "type": "integer",
                "minimum": 0
            },
            "numberOFBrandMap": {
                "title": "Number of Brand Map",
                "type": "integer",
                "minimum": 0
            },
            "winningBrandSets": {
                "title": "Winning Brand Sets (BEI, BEM Analysis)",
                "type": "string",
                "enum": ["Yes", "No"]
            },
            "CESets": {
                "title": "CESets (CSAT PROJECTS) - RSI, CBI Analysis",
                "type": "string",
                "enum": ["Yes", "No"]
            },
            "multiVariantAnalysisSets": {
                "title": "Multi-Variant Analysis Sets (Factor, Regression)",
                "type": "string",
                "enum": ["Yes", "No"]
            },
            "eQSets": {
                "title": "eQ Sets (Custoer Equation Sets)",
                "type": "string",
                "enum": ["Yes", "No"]
            },
            "SPSSDataFile": {
                "title": "SPSS Data File (Brand/Product Level SPSS)",
                "type": "string",
                "enum": ["Yes", "No"]
            },
            "excelDataFile": {
                "title": "Excel Data File (Report File for further Analysis)",
                "type": "string",
                "enum": ["Yes", "No"]
            },
            "ASCIIDataFile": {
                "title": "ASCII Data File (ASCII based on Client Data Map)",
                "type": "string",
                "enum": ["Yes", "No"]
            },
            "QDFDevelopment": {
                "title": "QDF Development (QDF Program for OE)",
                "type": "string",
                "enum": ["Yes", "No"]
            },
            "dataAlignment": {
                "title": "Data Alignment (Diary Level, Process Level Data)",
                "type": "string",
                "enum": ["Yes", "No"]
            },
            "weighting": {
                "title": "Weighting ( Rim, factor, pre-post weighting)",
                "type": "string",
                "enum": ["Yes", "No"]
            },
            "translationOfScreener": {
                "title": "Translation of screener and questionnaire/discussion guide",
                "type": "string",
                "classNames": "break-before col-lg-6 col-md-6 col-sm-12 col-xs-12",
                "isNewSection": true,
                "sectionTitle": "Responsibilities",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "preparationOfStimulus": {
                "title": "Preparation of stimulus to be used locally",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "scripting": {
                "title": "Scripting for CAPI or CATI or Online",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "recruitment": {
                "title": "Recruitment",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "fieldwork": {
                "title": "Fieldwork",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "pilotInterviews": {
                "title": "Pilot Interviews",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "dataMapInEnglish": {
                "title": "Data map in English",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "masterCodeFrameInEnglish": {
                "title": "Master code frame in English",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "newCodesInEnglish": {
                "title": "New codes in English",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "coding": {
                "title": "Coding of open ended and semi open ended questions",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "openEndedVerbatims": {
                "title": "Open ended verbatims",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "cleanFinalDataFile": {
                "title": "Clean Final data file",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "dataProcessing": {
                "title": "Data Processing",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "toplineAnalysis": {
                "title": "Topline Analysis",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "onlineTelephoneBriefing": {
                "title": "Online/Telephone briefing with moderator",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "simultaneousTranslation": {
                "title": "Simultaneous translation",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "viewingFacility": {
                "title": "Viewing Facility",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "moderation": {
                "title": "Moderation",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "transcriptionLocalToEnglish": {
                "title": "Transcription (Local Language to English)",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "audioVideoTapes": {
                "title": "Audio/ Video tapes",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "localReportTemplate": {
                "title": "Local Report Template",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "localReportChartingCommentaryAnalysis": {
                "title": "Local Report (Charting, Commentary & Analysis)",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "dashboard": {
                "title": "Dashboard",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "otherResponsibilities1": {
                "title": "Other (specify):",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "otherResponsibilities2": {
                "title": "Other (specify):",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "otherResponsibilities3": {
                "title": "Other (specify):",
                "type": "string",
                "enum": ["Commissioning Country", "Field Supplier", "Not Applicable"],
                "isMultiCountry": true
            },
            "questionnaireAvailable": {
                "title": "Questionnaire available",
                "type": "string",
                "classNames": "break-before col-lg-6 col-md-6 col-sm-12 col-xs-12",
                "isNewSection": true,
                "sectionTitle": "Timing",
                "format": "date"
            },
            "projectSetUp": {
                "title": "Project set up",
                "type": "string",
                "format": "date"
            },
            "recruitmentTiming": {
                "title": "Recruitment",
                "type": "string",
                "format": "date"
            },
            "estimatedFieldworkStart": {
                "title": "Estimated start of fieldwork",
                "type": "string",
                "format": "date"
            },
            "estimatedFieldworkEnd": {
                "title": "Estimated end of fieldwork",
                "type": "string",
                "format": "date"
            },
            "dataDelivery": {
                "title": "Data delivery",
                "type": "string",
                "format": "date"
            },
            "reportDelivery": {
                "title": "Report delivery",
                "type": "string",
                "format": "date"
            },
            "otherInstructionsRemarks": {
                "title": "Other instructions / Remarks",
                "type": "string",
                "classNames": "break-before col-lg-6 col-md-6 col-sm-12 col-xs-12",
                "isNewSection": true,
                "sectionTitle": "Special Requirements/Others",
                "widgetType": "textarea"
            }
        },
        "dependencies": {
            "diary": {
                "oneOf": [
                    {
                        "properties": {
                            "diary": {
                                "enum": ["No"]
                            }
                        }
                    },
                    {
                        "properties": {
                            "diary": {
                                "enum": ["Yes"]
                            },
                            "numberOfDiaryEntries": {
                                "title": "No. of diary entries per respondent per day",
                                "type": "integer"
                            },
                            "diaryRecordingMethod": {
                                "title": "Diary recording method",
                                "type": "string"
                            },
                            "numberOfDiaryDays": {
                                "title": "No. of diary days",
                                "type": "integer"
                            },
                            "CEperSheet": {
                                "title": "CE per sheet",
                                "type": "integer"
                            },
                            "OEperSheet": {
                                "title": "OE per sheet",
                                "type": "integer"
                            },
                            "SOEperSheet": {
                                "title": "SOE per sheet",
                                "type": "string"
                            },
                            "otherNotes": {
                                "title": "Other Notes",
                                "type": "string"
                            }
                        }
                    }
                ]
            }
        },
        "order": [
            "citiesCoverage",
            "sampleSizeMain",
            "sampleSizeBooster",
            "sampleSizeOther",
            "lengthOfInterview",
            "targetGroupDefinition",
            "sampleListByClient",
            "sampleRatio",
            "recruitmentDifficulty",
            "clientNameDisclosed",
            "boosters",
            "boostersType",
            "incidenceRate",
            "interviewingTools",
            "preRecruitment",
            "samplingType",
            "age",
            "gender",
            "brandCategory",
            "socialClass",
            "race",
            "regionCity",
            "otherSpecify1",
            "otherSpecify2",
            "otherSpecify3",
            "additionalRequirements",
            "referencePreviousProjects",
            "clientsHelpApproach",
            "interviewerRequirements",
            "recordingRequirement",
            "respondentRequirements",
            "facilityRequirements",
            "timesOfVisit",
            "visitDuration",
            "serviceUpTo",
            "diary",
            "numberOfDiaryEntries",
            "diaryRecordingMethod",
            "numberOfDiaryDays",
            "CEperSheet",
            "OEperSheet",
            "SOEperSheet",
            "otherNotes",
            "numberOfQuestionnaires",
            "numberOfQuestions",
            "numberOfOpenEnded",
            "numberOfSemiOpenEnded",
            "anyStimulus",
            "percentageExpectedChange",
            "translationRequired",
            "translationLanguages",
            "verbatimTranslationRequired",
            "codingRequired",
            "numberOfOpenEndedToCode",
            "numberOfSemiOpenEndedToCode",
            "deliverableTypes",
            "statisticalAnalysisComments",
            "qualityControl",
            "qualityControlComments",
            "clientSamplesAfterFW",
            "numberOfSlides",
            "numberOfExcelFiles",
            "numberOfRoboCharts",
            "numberOFBrandMap",
            "winningBrandSets",
            "CESets",
            "multiVariantAnalysisSets",
            "eQSets",
            "SPSSDataFile",
            "excelDataFile",
            "ASCIIDataFile",
            "QDFDevelopment",
            "dataAlignment",
            "weighting",
            "translationOfScreener",
            "preparationOfStimulus",
            "scripting",
            "recruitment",
            "fieldwork",
            "pilotInterviews",
            "dataMapInEnglish",
            "masterCodeFrameInEnglish",
            "newCodesInEnglish",
            "coding",
            "openEndedVerbatims",
            "cleanFinalDataFile",
            "dataProcessing",
            "toplineAnalysis",
            "onlineTelephoneBriefing",
            "simultaneousTranslation",
            "viewingFacility",
            "moderation",
            "transcriptionLocalToEnglish",
            "audioVideoTapes",
            "localReportTemplate",
            "localReportChartingCommentaryAnalysis",
            "dashboard",
            "otherResponsibilities1",
            "otherResponsibilities2",
            "otherResponsibilities3",
            "projectSetUp",
            "recruitmentTiming",
            "estimatedFieldworkStart",
            "estimatedFieldworkEnd",
            "dataDelivery",
            "reportDelivery",
            "otherInstructionsRemarks",
            "*"
        ]
    }
    const [fields] = useState([{ field_type: 'text', name: 'select', label: 'first name', className: 'txtsmall col-sm-4', colsize: 4 }, { field_type: 'text', name: 'select', label: 'first name', className: 'txtsmall col-sm-4', colsize: 4 }, { field_type: 'text', name: 'select', label: 'first name', className: 'txtsmall col-sm-4', colsize: 4 }, { field_type: 'text', name: 'select', label: 'first name', className: 'txtsmall col-sm-4', colsize: 4 }, { field_type: 'text', name: 'select', label: 'first name', className: 'txtsmall col-sm-4', colsize: 4 }, { field_type: 'text', name: 'select', label: 'first name', className: 'txtsmall col-sm-4', colsize: 4 }, { field_type: 'text', name: 'select', label: 'last name', className: 'txtsmall col-sm-4', colsize: 4 }, { field_type: 'select', name: 'select', label: 'last name', className: 'txtsmall col-sm-4', colsize: 7 }]);

    const [countries] = useState([{ label: 'India', value: '1' }, { label: 'England', value: '2' }, { label: 'USA', value: '3' }, { label: 'Brazil', value: '4' }]);
    const [methodologies] = useState([{ label: 'Methodology 1', value: '1' }, { label: 'Methodology 2', value: '2' }, { label: 'Methodology 3', value: '3' }, { label: 'Methodology 4', value: '4' }, { label: 'Methodology 5', value: '5' }]);

    const [links] = useState([{ label: 'first link', value: '#first' }, { label: 'second link', value: '#second' }, { label: 'third link', value: '#third' }, { label: 'fourth link', value: '#fourth' }, { label: 'fifth link', value: '#fifth' }]);

    return (
        <>
            <div className="container">
                <form>
                    <p>Go to the      
                        <div class="row">
                            <ul>
                                {links ? links.map((link, i) => <li> <HashLink smooth to={link.value} > {link.label} </HashLink></li>)
                                    : null}
                            </ul>
                        </div>
                    </p>
                    <h2 id="Lorem_Ipsum">Lorem Ipsum</h2>
                    <p class="main-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
    </p>
                    <p>Go to the
  <HashLink smooth to='#Lorem_Ipsum' > top link </HashLink>
    </p>
                    <h2 id="second"> Second Lorem Ipsum</h2>
                    <p class="main-content">
                        Second Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
    </p>
                    <h2 id="third"> third Lorem Ipsum</h2>
                    <p class="main-content">
                        Second Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
    </p>
                    <h2 id="fourth"> fourth Lorem Ipsum</h2>
                    <p class="main-content">
                        Second Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
    </p>
                    <h2 id="fifth"> fifth Lorem Ipsum</h2>
                    <p class="main-content">
                        Second Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
    </p>
                    <div class="row">
                        <ul>
                            {countries ? countries.map((country, i) => <li> <a href="">{country.label} </a></li>) 
                                : null}</ul>
                    </div>
                    <div class="row">
                        {methodologies ? methodologies.map((methodology, i) =>  <div class='col-md-2'>{methodology.label} </div>)
                            : null}
                        
                    </div>
                    <div class="row">
                    {fields ? fields.map((field, i) => <div key={i}> <Element field={field} /> <p></p></div>) : null}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}

