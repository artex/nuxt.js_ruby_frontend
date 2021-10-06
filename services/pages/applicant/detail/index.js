export default {
    data() {
        return {
            applicant: {},
            dob: '',
        }
    },
    asyncData({ params }) {
        return { Params: params }
    },
    created() {
        this.$axios
            .get(`/detail?id=${this.$route.params.id.id}`)
            .then((applicantData) => {
                this.applicant = applicantData.data.applicant
                this.dob = applicantData.data.dob
            })
            .catch((err) => {
                console.log(err)
            })
    },
}