<template>
    <b-container>
        <b-row class="my-4">
            <b-col lg="8">
                <h2 class="header">Applicant List</h2>
            </b-col>
            <b-col lg="4">
                <b-form
                    v-if="show"
                    inline
                    class="justify-content-around"
                    @submit="onSubmitSearch"
                >
                    <b-form-group
                        id="input-group-search"
                        label-for="input-search"
                    >
                        <b-form-input
                            id="input-search"
                            v-model="form.searchParam"
                            type="text"
                            placeholder="Search keyword"
                        ></b-form-input>
                    </b-form-group>
                    <b-button
                        type="submit"
                        variant="primary"
                        class="text-uppercase"
                    >
                        Filter
                    </b-button>
                </b-form>
            </b-col>
        </b-row>
        <b-table
            id="post-table"
            :fields="fields"
            :items="showList"
            :per-page="perPage"
            :current-page="currentPage"
            primary-key="id"
            sticky-header
            show-empty
            hover
        >
            <template #cell(name)="row">
                <NuxtLink
                    :to="{
                        name: 'id',
                        params: { id: row.item },
                    }"
                >
                    {{ row.item.name }}
                </NuxtLink>
            </template>
            <template #cell(operation)="row">
                <b-button
                    class="mr-1"
                    size="sm"
                    @click="info(row.item, row.index, $event.target)"
                >
                    Details
                </b-button>
                <b-button
                    class="mr-1"
                    size="sm"
                    :to="{
                        name: 'edit',
                        params: { id: row.item },
                    }"
                >
                    Edit
                </b-button>
                <b-button
                    class="mr-1 btn btn-danger"
                    size="sm"
                    @click="remove(row.item.id)"
                >
                    Delete
                </b-button>
            </template>
        </b-table>
        <!-- Pagination -->
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            align="center"
            aria-controls="post-table"
        ></b-pagination>
        <!-- Info modal -->
        <b-modal
            :id="infoModal.id"
            :title="infoModal.title"
            ok-only
            @hide="resetInfoModal"
        >
            <pre>{{ infoModal.content }}</pre>
        </b-modal>
    </b-container>
</template>

<script src="~/services/pages/applicant/applicant-list.js"></script>

<style scoped src="~/assets/css/pages/applicant/applicant-list.css"></style>
