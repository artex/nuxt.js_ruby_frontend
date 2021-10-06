export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            show: true,
        }
    },
    methods: {
        /**
         * Admin Login
         * @param {event} event login event
         * @return void
         */
        async userLogin(event) {
            event.preventDefault()
                // Trick to reset/clear native browser form validation state
            this.show = false

            this.$nextTick(() => {
                this.show = true
            })
            try {
                await this.$auth.loginWith('local', {
                    data: this.form,
                })
                this.$router.push({ name: 'list' })
            } catch (err) {
                console.error(err)
            }
        },
    },
}