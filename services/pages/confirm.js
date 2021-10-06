export default {
    auth: false,

    methods: {
        /**
         * submit
         * Confirmed function when click "confirm" in confirm page
         * @return void
         */
        createApplicantData() {
            const formData = new FormData()
            formData.append('filename', this.confirmApplicantInfo.profile_photo)
            Object.entries(this.confirmApplicantInfo).forEach(
                ([key, value]) => {
                    formData.append(key, value)
                }
            )
            formData.append(
                'programming',
                this.confirmApplicantInfo.programming_language +
                ':' +
                this.confirmApplicantInfo.programming_level
            )
            formData.append(
                'profile_photo',
                this.confirmApplicantInfo.profile_photo.name
            )
            console.log(formData)
            this.$store.dispatch('applicant/createApplicantData', formData)
            this.$router.push({
                name: 'success',
            })
        },
        /**
         * clear
         * cancel function when click "cancel" in confirm page
         * @return void
         */
        cancleApplicant() {
            this.$store.dispatch('applicant/clearApplicantInfo')
            this.$router.push({
                name: 'index',
            })
        },
    },
    computed: {
        confirmApplicantInfo() {
            return this.$store.state.applicant.applicant
        },
    },
}