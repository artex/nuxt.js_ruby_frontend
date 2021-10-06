import { mapGetters } from 'vuex'

export default {
    auth: true,
    async asyncData({ $axios, store }) {
        try {
            await store.dispatch('post/fetchPostList', { $axios })
        } catch (error) {
            console.error(error)
        }
    },
    data() {
        return {
            show: true,
            form: {
                searchParam: '',
            },
            currentPage: 1,
            perPage: 4,
            fields: [
                { key: 'id', label: 'ID', sortable: true },
                { key: 'name', label: 'Name', sortable: true },
                { key: 'phone_no1', label: 'Phone Number', sortable: true },
                { key: 'email', label: 'Email', sortable: true },
                {
                    key: 'bachelor_university',
                    label: 'Bachelor University',
                    sortable: true,
                },
                { key: 'operation', label: 'Operation' },
            ],
            showList: [],
            infoModal: {
                id: 'info-modal',
                title: '',
                content: '',
            },
        }
    },
    computed: {
        ...mapGetters({
            postList: 'post/postList',
        }),
        rows() {
            return this.showList.length
        },
    },
    mounted() {
        this.filterPostList()
    },
    methods: {
        /**
         * Search Function
         * @param {event} event Search event
         * @return void
         */
        onSubmitSearch(event) {
            event.preventDefault()
            this.filterPostList()
                // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        /**
         * Filter data when search
         * @return {object} applicant data to showList
         */
        filterPostList() {
            if (this.form.searchParam === '') {
                this.showList = this.postList
            } else {
                this.showList = this.postList.filter((applicant) => {
                    return (
                        applicant.name.includes(this.form.searchParam) ||
                        applicant.email.includes(this.form.searchParam)
                    )
                })
            }
        },
        /**
         * Details Info
         * @param {object} item selected data
         * @param {any} index title directory
         * @param {button} button button to select row id
         * @retrun void
         */
        info(item, index, button) {
            this.infoModal.title = `Row index: ${index}`
            this.infoModal.content = JSON.stringify(item, null, 2)
            this.$root.$emit('bv::show::modal', this.infoModal.id, button)
        },
        /**
         * reset Details Info
         * @return void
         */
        resetInfoModal() {
            this.infoModal.title = ''
            this.infoModal.content = ''
        },
        /**
         * Delete Data
         * @param {id} id id for delete
         * @retrun void
         */
        remove(id) {
            console.log(id)
            if (confirm('Do you really want to delete?')) {
                this.$axios
                    .delete('/destroy?id=' + id)
                    .then(() => {
                        this.$axios
                            .get('/api/applicant')
                            .then((response) => {
                                this.$store.state.postList = response.data
                                this.showList = this.$store.state.postList
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        },
    },
}