export class AppConstant {

    public static PROJECT_SERVICE_ENDPOINT = 'https://backend-service-development-dot-mogawe-222614.appspot.com';

    public static GMAP_API_KEY = ""

    public static API_LOGIN = '/api/user/logIn';
    public static API_USER_REGISTRATION = '/api/client/account/registration';
    public static API_USER_ACTIVATION = '/api/client/account/activation';
    public static API_SEND_EMAIL_ACTIVATION = '/api/user/sendActivationCode';
    public static API_EMAIL_ACTIVATION = '/api/user/activate';
    public static API_USER_CHANGE_PASSWORD = '/api/user/changePassword';
    public static API_USER_FORGOT_PASSWORD = '/api/user/sendForgotPassword';
    public static API_USER_FORGOT_PASSWORD_CODE = '/api/user/checkForgotPasswordCode';
    public static API_USER_POST_RESET_PASSWORD = '/api/user/changeForgotPassword';

    public static API_USER_UPDATE_PROFILE = "/api/user/update";
    public static API_UPLOAD_PROFILE_PICTURE = '/api/user/profile/picture/upload';

    //RESULT
    public static API_GET_RESULTS = '/api/result/v2/get';

    //CITY
    public static API_GET_CITY = '/api/location/cities/get';

    public static API_USER_GET_PROFIL = '/api/user/getByToken';
    public static API_USER_UPDATE = '/api/user/update';
    public static API_GET_USER_PAGING = '/api/user/findUserPaging';
    public static API_GET_USER_DETAIL = '/api/user/get/';
    public static API_USER_DELETE = '/api/user/delete/';
    public static API_USER_UPDATE_DEVICE_ID = '/api/user/updateDeviceID';

    //ASSIGNMENT
    public static API_GET_ASSIGNMENT = '/api/job/get';
    public static API_GET_ASSIGNMENT_V2 = '/api/job/v2/get';
    public static API_ASSIGN_ASSIGNMENT = '/api/task/v2/assign';
    public static API_ASSIGN_ASSIGNMENT2 = '/api/task/v3/assign';
    public static API_ASSIGN_UNASSIGN = '/api/task/unassign';
    public static API_GET_ASSIGNMENT_TAG = '/api/tag/get/job/get';
    public static API_GET_QUICK_REPORT_ASSIGNMENT = '/api/quickreport/assignment/get';
    public static API_CREATE_QUICK_REPORT_ASSIGNMENT = '/api/quickreport/assignment/create';
    public static API_GET_QUICK_REPORT_COUNT_ASSIGNMENT = '/api/quickreport/assignment/get/data';
    public static API_UPDATE_QUICK_REPORT_ASSIGNMENT = '/api/quickreport/assignment/update';
    public static API_DELETE_QUICK_REPORT_ASSIGNMENT = '/api/quickreport/assignment/delete';
    public static API_DEFAULT_VIEW_ASSIGNMENT = '/api/quickreport/assignment/defaultview';
    public static API_UPDATE_CONFIG_JOB = '/api/job/update';
    public static API_CALCULATE_FEE_JOB = '/api/job/calculateFee';

    //INSTANT JOB
    public static API_CREATE_INSTANT_LOCATION = '/api/location/create';
    public static API_UPDATE_INSTANT_LOCATION = '/api/location/update';
    public static API_CREATE_INSTANT_JOB = '/api/job/v2/mb/create';
    public static API_GET_INSTANT_JOB = '/api/job/v2/mb/get';

    //BUZZER JOB
    public static API_IMPORT_BUZZER_JOB = '/api/batchspec/importJobBuzz';

    //GENERATE JOB
    public static API_CREATE_GENERATE_JOB = '/api/batchspec/job/narration/generate';

    //CONTRIBUTOR
    public static API_GET_CONTRIBUTOR = '/api/mogawers/get';
    public static API_GET_CONTRIBUTOR_V2 = '/api/mogawers/v2/get';
    public static API_IMPORT_CONTRIBUTOR = '/api/mogawers/createbulk'
    public static API_IMPORT_UPDATE_CONTRIBUTOR = '/api/mogawers/updatebulk'
    public static API_DELETE_CONTRIBUTOR = '/api/mogawers/delete'
    public static API_GET_TAG_CONTRIBUTOR = '/api/tag/get/mogawers/get'
    public static API_GET_QUICK_REPORT_CONTRIBUTOR = '/api/quickreport/mogawers/get';
    public static API_GET_QUICK_REPORT_COUNT_CONTRIBUTOR = '/api/quickreport/mogawers/get/data';
    public static API_CREATE_QUICK_REPORT_CONTRIBUTOR = '/api/quickreport/mogawers/create';
    public static API_UPDATE_QUICK_REPORT_CONTRIBUTOR = '/api/quickreport/mogawers/update';
    public static API_DELETE_QUICK_REPORT_CONTRIBUTOR = '/api/quickreport/mogawers/delete';
    public static API_DEFAULT_VIEW_CONTRIBUTOR = '/api/quickreport/mogawers/defaultview';
    public static API_CONTRIBUTOR_CHANGE_LEVEL = '/api/mogawers/changeLevelSkill';
    public static API_CONTRIBUTOR_SUSPEND = '/api/mogawers/suspend';
    public static API_CONTRIBUTOR_UNSUSPEND = '/api/mogawers/unsuspend';
    public static API_CONTRIBUTOR_ACTIVATE_PHONE = '/api/mogawers/activatePhone/';
    public static API_CONTRIBUTOR_UNACTIVATE_PHONE = '/api/mogawers/unactivatePhone/';

    // WORKPLACE
    public static API_GET_LOCATION = '/api/location/get';
    public static API_GET_LOCATION_V2 = '/api/location/v2/get';
    public static API_GET_WORKPLACE_TAG = '/api/tag/get/location/get';
    public static API_UPDATE_LOCATION = '/api/location/update';
    public static API_DELETE_LOCATION = '/api/location/delete'
    public static API_IMPORT_LOCATION = '/api/location/createbulk';
    public static API_IMPORT_LOCATION_UPDATE = '/api/location/updatebulk';
    public static API_LOCATION_TYPE_GET = '/api/location/type/get';
    public static API_LOCATION_CATEGORY_GET = '/api/location/category/get';
    public static API_LOCATION_LEVEL_GET = '/api/location/level/get';
    public static API_GET_QUICK_REPORT_LOCATION = '/api/quickreport/location/get';
    public static API_GET_QUICK_REPORT_COUNT_LOCATION = '/api/quickreport/location/get/data';
    public static API_CREATE_QUICK_REPORT_LOCATION = '/api/quickreport/location/create';
    public static API_UPDATE_QUICK_REPORT_LOCATION = '/api/quickreport/location/update';
    public static API_DELETE_QUICK_REPORT_LOCATION = '/api/quickreport/location/delete';
    public static API_DEFAULT_VIEW_LOCATION = '/api/quickreport/location/defaultview';

    //LOCATION TAG
    public static API_GET_LOCATION_TAG = '/api/location/tag/get';
    public static API_GET_LOCATION_CREATE_TAG = '/api/location/tag/create';
    public static API_GET_LOCATION_UPDATE_TAG = '/api/location/tag/update';
    public static API_GET_LOCATION_DELETE_TAG = '/api/location/tag/delete';

    // QUESTIONNAIRE
    public static API_QUESTIONAIRE_GET = '/api/questionnaire/get';
    public static API_QUESTIONAIRE_CREATE = '/api/questionnaire/create';
    public static API_QUESTIONAIRE_UPDATE = '/api/questionnaire/update';
    public static API_QUESTIONAIRE_DELETE = '/api/questionnaire/delete';

    // SECTION
    public static API_SECTION_GET = '/api/section/get';
    public static API_SECTION_CREATE = '/api/section/create';
    public static API_SECTION_UPDATE = '/api/section/update';
    public static API_SECTION_DELETE = '/api/section/delete';

    // FACT
    public static API_FACT_GET = '/api/fact/get';
    public static API_FACT_TYPE_GET = '/api/facttype/getAll';
    public static API_FACT_CREATE = '/api/fact/create';
    public static API_FACT_UPDATE = '/api/fact/update';
    public static API_FACT_DELETE = '/api/fact/delete';


    // JOB
    public static API_JOB_GET = '/api/job/v2/mb/get';
    public static API_GET_JOB_V2 = '/api/job/v2/get';
    public static API_JOB_GET_DETAIL = '/api/job/get'
    public static API_JOB_UPDATE = '/api/job/v2/mb/update';
    public static API_JOB_DELETE = '/api/job/delete';
    public static API_GET_JOB_SPEC = '/api/batchspec/get'
    public static API_CREATE_JOB_SPEC = '/api/job/v2/mb/create';
    public static API_UPDATE_JOB_SPEC = '/api/batchspec/update';
    public static API_GET_JOB_TAG = '/api/tag/get/job/get';
    public static API_GET_JOB_SPEC_TAG = '/api/tag/get/batchspec/get';
    public static API_DELETE_JOB_SPEC = '/api/batchspec/delete';
    public static API_IMPORT_JOB_LOGIA = '/api/logia/v2/importJob';
    public static API_GET_QUICK_REPORT_JOB = '/api/quickreport/job/get';
    public static API_CREATE_QUICK_REPORT_JOB = '/api/quickreport/job/create';
    public static API_GET_QUICK_REPORT_COUNT_JOB = '/api/quickreport/job/get/data';
    public static API_UPDATE_QUICK_REPORT_JOB = '/api/quickreport/job/update';
    public static API_DELETE_QUICK_REPORT_JOB = '/api/quickreport/job/delete';
    public static API_DEFAULT_VIEW_JOB = '/api/quickreport/job/defaultview';
    public static API_GET_JOB_NARRATION = '/api/batchspec/job/narration/get';
    public static API_UPDATE_JOB_NARRATION = '/api/batchspec/job/narration/update';

    //DASHBOARD
    public static API_GET_PROJECT_RESULT_TREND = '/api/monitor/get/project/trendresult';
    public static API_GET_CHART = '/api/dashboardchart/get';
    public static API_GET_CHART_TEMPLATES = '/api/dashboardchartgroup/type/get';
    public static API_GET_CHART_GROUP = '/api/dashboardchartgroup/get';
    public static API_DELETE_CHART_GROUP = '/api/dashboardchartgroup/delete';
    public static API_CREATE_CHART_GROUP = '/api/dashboardchartgroup/insert';
    public static API_GET_CHART_TYPE = '/api/dashboardchart/type/get';
    public static API_GET_CHART_FACT = '/api/dashboardchart/fact/get';
    public static API_CREATE_CHART = '/api/dashboardchart/insert';
    public static API_UPDATE_CHART = '/api/dashboardchart/update';
    public static API_UPDATE_SEQ_CHART = '/api/dashboardchart/updateseq';
    public static API_DELETE_CHART = '/api/dashboardchart/delete';

    //DASHBOARD V2
    public static API_CREATE_CHART_V2 = '/api/dashboardchart/v2/insert';
    public static API_GET_CHART_V2 = '/api/dashboardchart/v2/get';
    public static API_UPDATE_CHART_V2 = '/api/dashboardchart/v2/update';
    public static API_GET_CHART_TEMPLATES_V2 = '/api/dashboardchart/v2/template/get';
    public static API_UPDATE_CHART_POSITION = '/api/dashboardchart/v2/updatePosition';
    public static API_DELETE_CHART_V2 = '/api/dashboardchart/v2/delete/';
    public static API_GET_PROPERTY_FILTER_CHART = '/api/dashboardchart/v2/filter/property/get';


    //CHAT
    public static CHAT_APPLICATION_ID = '';
    public static CHAT_SECRET_KEY = '';
    public static CHAT_SERVICE_ENDPOINT = 'https://api.qiscus.com/api/v2.1/rest';
    public static CHAT_GET_ROOM_LIST = '/get_user_rooms';
    public static CHAT_GET_COMMENT_LIST = '/load_comments';
    public static CHAT_GET_PARTICIPANT_LIST = '/get_room_participants';
    public static CHAT_POST_COMMENT = '/post_comment';
    public static CHAT_CREATE_ROOM = '/create_room';
    public static CHAT_LOGIN_OR_REGISTER = '/login_or_register';
    public static CHAT_REMOVE_PARTISIPANT = '/remove_room_participants';
    public static CHAT_GET_UNREAD_COUNT = '/get_unread_count';


    //PRODUCTS
    public static API_SUPPLIER_PRODUCT_GET = '/api/supplier/product/get';
    public static API_SUPPLIER_PRODUCT_CATEGORY_GET = '/api/supplier/product/category/get';
    public static API_SUPPLIER_UPLOAD_IMAGES_PRODUCT = '/api/supplier/product/image/upload';
    public static API_SUPPLIER_CREATE_PRODUCT = '/api/supplier/product/create';
    public static API_SUPPLIER_UPDATE_PRODUCT = '/api/supplier/product/update';
    public static API_SUPPLIER_DELETE_PRODUCT = '/api/supplier/product/delete';
    public static API_SUPPLIER_PUBLISH_PRODUCT = '/api/supplier/product/publish';
    public static API_SUPPLIER_UNPUBLISH_PRODUCT = '/api/supplier/product/unpublish';


    //ORDERS
    public static API_SUPPLIER_ORDER_GET = '/api/supplier/product/order/get';
    public static API_SUPPLIER_SHIPMENT_PROCESS = '/api/supplier/product/order/shipment/process';
    public static API_SUPPLIER_SHIPMENT_SENT = '/api/supplier/product/order/shipment/sent';
    public static API_SUPPLIER_UPDATE_ORDER = '/api/supplier/product/order/update';
    public static API_SUPPLIER_SHIPMENT_FINISH = '/api/supplier/product/order/shipment/finish';

    // PROJECT
    public static API_PROJECT_GET = '/api/project/get';
    public static API_PROJECT_CREATE = '/api/project/create';
    public static API_PROJECT_UPDATE = '/api/project/update';
    public static API_PROJECT_DELETE = '/api/project/delete';

    // MONITOR
    public static API_MOGAWERS_GET_MOGAWERS_MARKER = '/api/monitor/get/mogawers';
    public static API_MONITOR_GET_JOB_MONITOR_BY_PROJECT = "/api/monitor/v2/get/project"
    public static API_MONITOR_GET_JOB_MONITOR_BY_PROJECT_CHART = "/api/monitor/v2/get/project/chart"
    public static API_MONITOR_GET_JOB_STATISTIC_BY_BATCH = "/api/monitor/statisticByMogawers"

    //SETTING
    public static API_GET_CLIENT_DETAIL = '/api/client/get';
    public static API_UPDATE_CLIENT_DATA = '/api/client/update';
    public static API_UPDATE_LOGO_CLIENT_DATA = '/api/client/logo/upload';
    public static API_GET_USER_CLIENT = '/api/user/get';
    public static API_CLIENT_INVITE_USER = '/api/user/invite';
    public static API_CLIENT_REMOVE_USER = '/api/user/removeUser';
    public static API_SUPPLIER_PROFILE = '/api/user/supplier/profile/me';
    public static API_SUPPLIER_PROVINCE = '/api/supplier/shipment/province';
    public static API_SUPPLIER_CITY = '/api/supplier/shipment/city';
    public static API_SUPPLIER_UPDATE_PROFILE = '/api/user/supplier/profile/update';

    // BATCH
    public static API_BATCH_GET = '/api/groupjob/get';
    public static API_BATCH_CREATE = '/api/groupjob/create';
    public static API_BATCH_UPDATE = '/api/groupjob/update';
    public static API_BATCH_DELETE = '/api/groupjob/delete';

    // INVITATION
    public static API_INVITATION_INVITATION_CHECK = '/api/user/invitation/check';
    public static API_INVITATION_INVITATION_ACTIVATE = '/api/user/invitation/activate';

    // QUICK REPORT V2
    public static API_GET_PROPERTY_WINDOW = '/api/quickreport/filter/property/get';

    //CONTRIBUTOR
    public static API_QUICK_REPORT_CONTRIBUTOR_V2 = '/api/quickreport/v3/mogawers/get';
    public static API_QUICK_REPORT_UPDATE_CONTRIBUTOR_V2 = '/api/quickreport/v3/mogawers/update';
    public static API_QUICK_REPORT_DEFAULT_VIEW_CONTRIBUTOR_V2 = '/api/quickreport/v3/mogawers/defaultview';
    public static API_QUICK_REPORT_DELETE_CONTRIBUTOR_V2 = '/api/quickreport/v3/mogawers/delete';
    public static API_QUICK_REPORT_CREATE_CONTRIBUTOR_V2 = '/api/quickreport/v3/mogawers/create';
    public static API_QUICK_REPORT_UPDATE_SEQUENCE_CONTRIBUTOR_V2 = '/api/quickreport/v3';

    //WORKPLACE
    public static API_QUICK_REPORT_WORKPLACE_V2 = '/api/quickreport/v3/location/get';
    public static API_QUICK_REPORT_UPDATE_WORKPLACE_V2 = '/api/quickreport/v3/location/update';
    public static API_QUICK_REPORT_DEFAULT_VIEW_WORKPLACE_V2 = '/api/quickreport/v3/location/defaultview';
    public static API_QUICK_REPORT_DELETE_WORKPLACE_V2 = '/api/quickreport/v3/location/delete';
    public static API_QUICK_REPORT_CREATE_WORKPLACE_V2 = '/api/quickreport/v3/location/create';
    public static API_QUICK_REPORT_UPDATE_SEQUENCE_WORKPLACE_V2 = '/api/quickreport/v3';

    //DATA
    public static API_QUICK_REPORT_DATA_V2 = '/api/quickreport/v3/result/get';
    public static API_QUICK_REPORT_UPDATE_DATA_V2 = '/api/quickreport/v3/result/update';
    public static API_QUICK_REPORT_DEFAULT_VIEW_DATA_V2 = '/api/quickreport/v3/result/defaultview';
    public static API_QUICK_REPORT_DELETE_DATA_V2 = '/api/quickreport/v3/result/delete';
    public static API_QUICK_REPORT_CREATE_DATA_V2 = '/api/quickreport/v3/result/create';
    public static API_QUICK_REPORT_UPDATE_SEQUENCE_DATA_V2 = '/api/quickreport/v3';

    //JOB
    public static API_QUICK_REPORT_JOB_V2 = '/api/quickreport/v3/job/get';
    public static API_QUICK_REPORT_UPDATE_JOB_V2 = '/api/quickreport/v3/job/update';
    public static API_QUICK_REPORT_DEFAULT_VIEW_JOB_V2 = '/api/quickreport/v3/job/defaultview';
    public static API_QUICK_REPORT_DELETE_JOB_V2 = '/api/quickreport/v3/job/delete';
    public static API_QUICK_REPORT_CREATE_JOB_V2 = '/api/quickreport/v3/job/create';
    public static API_QUICK_REPORT_UPDATE_SEQUENCE_JOB_V2 = '/api/quickreport/v3';

    //ASSIGNMENT
    public static API_QUICK_REPORT_ASSIGNMENT_V2 = '/api/quickreport/v3/assignment/get';
    public static API_QUICK_REPORT_UPDATE_ASSIGNMENT_V2 = '/api/quickreport/v3/assignment/update';
    public static API_QUICK_REPORT_DEFAULT_VIEW_ASSIGNMENT_V2 = '/api/quickreport/v3/assignment/defaultview';
    public static API_QUICK_REPORT_DELETE_ASSIGNMENT_V2 = '/api/quickreport/v3/assignment/delete';
    public static API_QUICK_REPORT_CREATE_ASSIGNMENT_V2 = '/api/quickreport/v3/assignment/create';
    public static API_QUICK_REPORT_UPDATE_SEQUENCE_ASSIGNMENT_V2 = '/api/quickreport/v3';


    //ASSET
    public static API_ASSET_GET = '/api/certificate/get';
    public static API_ASSET_CREATE = '/api/certificate/insert';
    public static API_ASSET_UPDATE = '/api/certificate/update';
    public static API_ASSET_UPLOAD_PICTURE = "/api/certificate/uploadPicture"
    public static API_ASSET_DELETE = '/api/certificate/delete';
    public static API_ASSET_CATEGORIES_GET = '/api/certificate/category/get';
    public static API_ASSET_MOGAWERS_GET = '/api/certificate/mogawers/get';
    public static API_ASSET_MOGAWERS_SUMMARY = '/api/certificate/mogawers/summary';
    public static API_RESULT_GET = '/api/result/get';
    public static API_RESULT_QC_GET = '/api/result/v1/resultqc/get';
    public static API_UPLOAD_JOB_PICTURE = "/api/job/uploadJobPicture"

    //BUZZER
    public static API_POST_BUZZER_JOB = '/api/batchspec/importJobBuzz';
    public static API_FORM_POST_BUZZER = '/api/batchspec/createJobBuzz';

    // TAG
    public static API_TAG_GET = "/api/tag/get";
    public static API_TAG_GET_JOB = "/api/tag/get/job/get";
    public static API_TAG_GET_LOCATION = "/api/tag/get/location/get";
    public static API_TAG_GET_MOGAWERS = "/api/tag/get/mogawers/get"
    public static API_TAG_GET_RESULT = "/api/tag/get/result/get"

     // RESULT FACT
     public static API_RESULT_FACT_GET = '/api/resultFact/get';
     public static API_RESULT_FACT_UPDATE = '/api/resultFact/update';
     public static API_RESULT_FACT_GET_IMAGE_BY_PROJECT_GROUP_BY_DISPLAY = "/api/resultFact/getFactImageByProjectGroupByDisplay"
     public static API_RESULT_FACT_GET_IMAGE_BY_DISPLAY = "/api/resultFact/getImageByFactDisplay"
     public static API_RESULT_FACT_GET_URL_IMAGE_NAME = "/api/resultFact/getCloudUrlByImageName"
     public static API_RESULT_SAVE_IMAGE = "/api/resultFact/uploadBucketFile"
     public static API_GET_TASK_RESULT_FACT = "/api/resultFact/getResultFactByResult/?idResult="
     public static API_RESULT_FACT_QC_IMAGE_GET = '/api/resultFact/qcImage/get';
     public static API_RESULT_FACT_QC_IMAGE_RUN = '/api/resultFact/qcImage/run';

     // RESULT FACT IMAGE
    public static API_RESULT_FACT_IMAGE_GET = '/api/resultFactImage/get';
    public static API_RESULT_FACT_IMAGE_CREATE = '/api/resultFactImage/create';
    public static API_RESULT_FACT_IMAGE_UPDATE = '/api/resultFactImage/update';
    public static API_RESULT_FACT_IMAGE_DELETE = '/api/resultFactImage/delete';
    public static API_RESULT_IMAGE_UPDATE = "/api/resultFact/updateResultFactImageValue"

     // LOCATION
     public static API_LOCATION_GET = '/api/location/get';
     public static API_LOCATION_CREATE = '/api/location/create';
     public static API_LOCATION_UPDATE = '/api/location/update';
     public static API_LOCATION_DELETE = '/api/location/delete';
     public static API_IMPORT_LOCATION_CREATE = '/api/location/createbulk';
     public static API_IMPORT_LOCATION_GEOCODEADDRESS = '/api/location/geocodeAddress';
     public static API_GET_MOGAWERS_CITIES_FILTER = "/api/location/getMogaweCitiesFilter";

     //LOGIC CHECK
    public static API_LOGIC_GET = '/api/questionnaire/logicqc/get';
    public static API_LOGIC_CREATE = '/api/questionnaire/logicqc/create';
    public static API_LOGIC_COPY = '/api/questionnaire/logicqc/copy';
    public static API_LOGIC_UPDATE = '/api/questionnaire/logicqc/update';
    public static API_LOGIC_DELETE = '/api/questionnaire/logicqc/delete';
    public static API_CRITERIA_GET = '/api/questionnaire/logicqc/criteria/get';
    public static API_CRITERIA_CREATE = '/api/questionnaire/logicqc/criteria/create';
    public static API_CRITERIA_UPDATE = '/api/questionnaire/logicqc/criteria/update';
    public static API_CRITERIA_DELETE = '/api/questionnaire/logicqc/criteria/delete';
    public static API_QUESTIONNAIRE_QC_FACT_GET = '/api/questionnaire/logicqc/fact/get';
    public static API_QUESTIONNAIRE_QC_FACT_CREATE = '/api/questionnaire/logicqc/fact/create';
    public static API_QUESTIONNAIRE_QC_FACT_DELETE = '/api/questionnaire/logicqc/fact/delete';
    public static API_LOGIC_CHECK_AUTO_QC = '/api/logiccheck/v1/autoqc';
    public static API_RUN_FORMULA = '/api/logiccheck/test';

    // PLDB
    public static API_PLDB_BY_RESULT = "/api/pldb/runByResult"

    // RESULT
    public static API_RESULT_GET_BY_DISTANCE = '/api/result/getByDistance';
    public static API_RESULT_UPDATE = '/api/result/update';
    public static API_RESULT_QC_GET_DETAIL_STATUS = '/api/result/v1/resultqc/get/detail';
    public static API_RESULT_GET_QC_IMAGE = '/api/result/getForQCImage';
    public static API_RESULT_QC = '/api/result/qc';
    public static API_GET_IMAGE_RESULT_FACT = "/api/resultFact/getImageResultFactByResult/?idResult="
    public static API_TASK_RESULT_ACTION = "/api/result/resultAction"
    public static API_TASK_APPROVE_PARTIAL = "/api/result/approvePartial"
    public static API_TASK_APPROVE_FULL = "/api/result/approveFull"
    public static API_RESULT_REPORT = '/api/result/getReportResults';

    //TASK
    public static API_GET_TASK_BY_CONTRIBUTOR = '/api/task/gawean';
    public static API_TASK_UNASSIGN = '/api/task/unassign';

    //TASK ORDER
    public static API_TASK_ORDER_GET = '/api/taskOrder/get';

    // WHATS APP
    public static API_WA = 'https://api.whatsapp.com';

    //VERSION
    public static APP_VERSION = "1.0.0"
    public static APP_NUMBER = 1
}
