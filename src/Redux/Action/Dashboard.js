import axios from "axios";


export const dashboardGet = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: "DASHBOARD_GET_REQUEST",
        });

        const { data } = await axios.post("docuware/getDashboardData/", formData);

        dispatch({
            type: "DASHBOARD_GET_SUCCESS",
            payload: data,
            success: true,
        });

    } catch (e) {
        dispatch({
            type: "DASHBOARD_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const getDepartments = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: "GET_DEPART_AND_YEAR_REQUEST",
        });

        const { data } = await axios.post("archival/getDepartments/", formData);

        dispatch({
            type: "GET_DEPART_AND_YEAR_SUCCESS",
            payload: data,
            success: true,
        });

    } catch (e) {
        dispatch({
            type: "GET_DEPART_AND_YEAR_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const getDocTypes = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: "GET_DOCS_TYPES_REQUEST",
        });

        const { data } = await axios.post("archival/getDocumentTypes/", formData);

        dispatch({
            type: "GET_DOCS_TYPES_SUCCESS",
            payload: data,
            success: true,
        });

    } catch (e) {
        dispatch({
            type: "GET_DOCS_TYPES_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const getSearchDocument = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: "GET_SEARCH_DOCUMENT_REQUEST",
        });

        const { data } = await axios.post("docuware/searchDocument/", formData);

        dispatch({
            type: "GET_SEARCH_DOCUMENT_SUCCESS",
            payload: data,
            success: true,
        });

    } catch (e) {
        dispatch({
            type: "GET_SEARCH_DOCUMENT_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const registerDocumentType = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: "REGISTER_DOC_TYPE_REQUEST",
        });

        const { data } = await axios.post("archival/registerDocumentType/", formData);

        dispatch({
            type: "REGISTER_DOC_TYPE_SUCCESS",
            payload: data,
            success: true,
        });

    } catch (e) {
        dispatch({
            type: "REGISTER_DOC_TYPE_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const createDocument = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: "CREATE_DOCUMENT_REQUEST",
        });

        const { data } = await axios.post("archival/addDocument/", formData);

        dispatch({
            type: "CREATE_DOCUMENT_SUCCESS",
            payload: data,
            success: true,
        });

    } catch (e) {
        dispatch({
            type: "CREATE_DOCUMENT_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const getDepartAndDocType = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: "GET_DEPART_AND_DOC_TYPE_REQUEST",
        });

        const { data } = await axios.post("docuware/getDepartmentAndDocTypes/", formData);

        dispatch({
            type: "GET_DEPART_AND_DOC_TYPE_SUCCESS",
            payload: data,
            success: true,
        });

    } catch (e) {
        dispatch({
            type: "GET_DEPART_AND_DOC_TYPE_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const getAllDepartmentDocs = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: "GET_ALL_DEPARTMENT_DOCUMENTS_REQUEST",
        });

        const { data } = await axios.post("archival/departmentDocumentSummary/", formData);

        dispatch({
            type: "GET_ALL_DEPARTMENT_DOCUMENTS_SUCCESS",
            payload: data,
            success: true,
        });

    } catch (e) {
        dispatch({
            type: "GET_ALL_DEPARTMENT_DOCUMENTS_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const getYears = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: "GET_YEARS_REQUEST",
        });

        const { data } = await axios.post("docuware/geYears/", formData);

        dispatch({
            type: "GET_YEARS_SUCCESS",
            payload: data,
            success: true,
        });

    } catch (e) {
        dispatch({
            type: "GET_YEARS_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};