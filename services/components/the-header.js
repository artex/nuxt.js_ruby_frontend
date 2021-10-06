export default {
    data({ $config: { appTitle } }) {
        return {
            appTitle,
        }
    },
    methods: {
        /**
         * Logout Function
         * @return void
         */
        async logoutUser() {
            try {
                await this.$auth.logout()
            } catch (error) {
                console.error(error)
            }
        },
    },
}