<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <NuxtLink to="/" class="navbar-brand">{{ appTitle }}</NuxtLink>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <li class="nav-item">
                    <NuxtLink :to="{ name: 'list' }" class="nav-link">
                        Applicants
                    </NuxtLink>
                </li>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <li class="nav-item" v-if="!$auth.loggedIn">
                    <NuxtLink :to="{ name: 'login' }" class="nav-link">
                        Login
                    </NuxtLink>
                </li>
                <li class="nav-item" v-if="$auth.loggedIn">
                    <a class="logout" @click="logoutUser">Logout</a>
                </li>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script src="~/services/components/the-header.js"></script>

<style scoped src="~/assets/css/components/the-header.css"></style>
