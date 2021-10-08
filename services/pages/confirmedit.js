import { mapGetters } from 'vuex'
export default {
    auth: false,
    middleware({ store, redirect }) {
        if (!store.state.applicant.applicant) {
            return redirect('/list')
        }
    },
    methods: {
        /**
         * submit
         * Confirmed edit function when click "confirm" in confirmedit page
         * @return void
         */
        editApplicantData() {
            if (this.confirmApplicantInfo.profile_photo.name) {
                const formData = new FormData()
                formData.append(
                    'filename',
                    this.confirmApplicantInfo.profile_photo
                )
                Object.entries(this.confirmApplicantInfo).forEach(
                    ([key, value]) => {
                        formData.append(key, value)
                    }
                )
                formData.append(
                    'profile_photo',
                    this.confirmApplicantInfo.profile_photo.name
                )
                this.$axios
                    .put(`/update?${this.confirmApplicantInfo.id}`, formData)
                    .then(() => {
                        this.$router.push({ name: 'list' })
                    })
                    .catch(() => {
                        this.error =
                            'email is already taken or Phone Number at least 6 digit'
                    })
            } else {
                this.$axios
                    .put(
                        `/update?${this.confirmApplicantInfo.id}`,
                        this.confirmApplicantInfo
                    )
                    .then(() => {
                        this.$router.push({ name: 'list' })
                    })
                    .catch(() => {
                        this.error =
                            'email is already taken or Phone Number at least 6 digit'
                    })
            }
        },
        /**
         * clear
         * cancel function when click "cancel" in confirm page
         * @return void
         */
        cancleApplicant() {
            // this.$store.dispatch('applicant/clearApplicantInfo')
            this.$router.push({ name: 'edit' })
        },
    },
    computed: {
        confirmApplicantInfo() {
            return this.$store.state.applicant.applicant
        },
        ...mapGetters({
            applicantList: 'applicant/applicantList',
        }),
    },
}