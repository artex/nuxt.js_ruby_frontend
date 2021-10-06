import { SET_APPLICANT } from './mutation-types'
import { STORE_FIILE } from './mutation-types'
import { ERROR_STATUS } from './mutation-types'
export default {
    /**
     * validate applicant data and set "sendData" to "applicantData" state
     * @param {*} commit mutate applicant or error data
     * @param {object} sendData applicant data from Home Page
     * @returns {object} data or error
     */
    applicantConfirm({ commit }, sendData) {
        this.$axios
            .post('api/applicant/confirm', sendData)
            .then(() => {
                commit(SET_APPLICANT, sendData)
                this.$router.push('/confirm')
            })
            .catch((err) => {
                commit(ERROR_STATUS, err.response.data)
            })
    },

    /**
     * Set "file" data to "storeFile"
     * @param {*} commit mutate profile_photo
     * @param {File} file file data when choose photo
     * @return void
     */
    filestore({ commit }, file) {
        commit(STORE_FIILE, file)
    },

    /**
     * Save data to database then set "applicantData" and "storeFile" states to null
     * @param {*} commit mutate applicant data and file data
     * @param { object } formData Applicant data from Confrim Page
     * @return void
     */
    createApplicantData({ commit }, formData) {
        try {
            return this.$axios
                .post('/api/applicant/create', formData)
                .then((data) => {
                    console.log(data)
                    commit(SET_APPLICANT, null)
                    commit(STORE_FIILE, null)
                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (e) {
            console.error(e)
        }
    },

    /**
     * Clear all data when cancle
     * @param {*} commit mutate applicant data and file
     * @return void
     */
    clearApplicantInfo({ commit }) {
        commit(SET_APPLICANT, null)
        commit(STORE_FIILE, null)
    },
}