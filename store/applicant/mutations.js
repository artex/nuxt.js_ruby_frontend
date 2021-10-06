import { ERROR_STATUS, SET_APPLICANT } from './mutation-types'
import { STORE_FIILE } from './mutation-types'

export default {
    [SET_APPLICANT](state, list) {
        state.applicant = list
    },
    [STORE_FIILE](state, image) {
        state.photofile = image
    },
    [ERROR_STATUS](state, errorm) {
        state.errorm = errorm
    },
}