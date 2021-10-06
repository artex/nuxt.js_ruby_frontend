import { extend, ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, length } from 'vee-validate/dist/rules'
import constant from '~/constants'

/**
 * Vee-Validations
 * @return {string} error messages
 */
extend('required', {
    ...required,
    message: 'This field is required',
})
extend('namelength', {
    ...length,
    validate: (value) => value.length <= constant.VALIDATION.NAME.MAX,
    message: 'This field is max 100 characters',
})
extend('phonelength', {
    ...length,
    validate: (value) => value.length <= constant.VALIDATION.PH.MAX,
    message: 'This field is max 11 characters',
})
extend('addresslength', {
    ...length,
    validate: (value) => value.length <= constant.VALIDATION.ADDRESS.MAX,
    message: 'This field is max 255 characters',
})
extend('unilength', {
    ...length,
    validate: (value) => value.length <= constant.VALIDATION.UNI.MAX,
    message: 'This field is max 100 characters',
})
extend('degreelength', {
    ...length,
    validate: (value) => value.length <= constant.VALIDATION.DEGREE.MAX,
    message: 'This field is max 100 characters',
})
extend('yearlength', {
    ...length,
    validate: (value) => value.length <= constant.VALIDATION.YEAR.MAX,
    message: 'This field is max 20 characters',
})
extend('diplomalength', {
    ...length,
    validate: (value) => value.length <= constant.VALIDATION.DIPLOMA.MAX,
    message: 'This field is max 100 characters',
})
extend('certificatelength', {
    ...length,
    validate: (value) => value.length <= constant.VALIDATION.CERTIFICATE.MAX,
    message: 'This field is max 100 characters',
})
extend('languagelength', {
    ...length,
    validate: (value) => value.length <= constant.VALIDATION.LANGUAGE.MAX,
    message: 'This field is max 255 characters',
})
extend('explength', {
    ...length,
    validate: (value) => value.length <= constant.VALIDATION.JOBEXP.MAX,
    message: 'This field is max 255 characters',
})
extend('expyearlength', {
    ...length,
    validate: (value) => value.length <= constant.VALIDATION.EXPYEAR.MAX,
    message: 'This field is max 3 characters',
})
export default {
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    auth: false,
    data: () => ({
        valid: true,
        applicant: {
            name: '',
            profile_photo: null,
            date: '',
            phone_no1: '',
            phone_no2: '',
            email: '',
            current_address: '',
            hometown_address: '',
            bachelor_university: '',
            bachelor_year: '',
            bachelor_degree: '',
            master_university: '',
            master_year: '',
            master_degree: '',
            diploma_name: '',
            certificate: '',
            english: '',
            japanese: '',
            other: '',
            internship_info: '',
            job_experience: '',
            total_exp_year: '',
            programming_language: '',
            programming_level: '',
        },
        errorImage: 'url of an image to use to indicate an error',
        errImg: null,
        error: null,
        previews: [],
    }),

    methods: {
        /**
         * Check Validation Before Send to Confirm
         */
        async applicantConfirm() {
            const passValiation = await this.$refs.observer.validate()
            if (passValiation) {
                this.$store.dispatch(
                    'applicant/applicantConfirm',
                    this.applicant
                )
            }
        },
        /**
         * Clear Form Data after clicked Reset Button
         * @return void
         */
        reset() {
            const self = this
            Object.keys(this.applicant).forEach(function(key) {
                self.applicant[key] = ''
            })
            this.$refs.observer.reset()
        },
        /**
         * addFile
         * Image file, to show in Confirm Page
         * @param {File} file data to show in Confirm Page
         * @return void
         */
        addFile(file) {
            if (file) {
                if (file.size > 2048 * 2048) {
                    this.errImg = 'Image size too big!! Maximum is 2MB '
                } else {
                    const input = file.target
                    const reader = new FileReader()
                    reader.addEventListener('load', (event) =>
                        this.$store.dispatch(
                            'applicant/filestore',
                            event.target.result
                        )
                    )
                    reader.addEventListener(
                        'error',
                        () => (this.previews = this.errorImage)
                    )
                    reader.readAsDataURL(input.files[0])
                }
            } else {
                this.$store.dispatch('filestore', null)
                this.errImg = null
            }
        },
    },
    computed: {
        errImage() {
            return this.errImg
        },
    },
}