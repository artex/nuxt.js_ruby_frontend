<template>
    <div class="container">
        <form @submit.prevent="createApplicantData">
            <h2 class="confirm-header">Please Confirm Your Data Again!!</h2>
            <b-card class="card">
                <div class="personal">
                    <h2 class="personal-header">Personal Information</h2>
                    <div class="left">
                        <div class="confirm-title">Name</div>
                        <div class="confirm-title2">profile Photo</div>
                        <div class="confirm-title">Date Of Birth</div>
                        <div class="confirm-title">Phone No 1</div>
                        <div class="confirm-title">Phone No 2</div>
                        <div class="confirm-title">Email</div>
                        <div class="confirm-title">Current Address</div>
                        <div class="confirm-title">Hometown Address</div>
                    </div>
                    <div class="right">
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.name }}
                        </div>
                        <div class="confirm-data2">
                            <img
                                :src="this.$store.state.applicant.photofile"
                                style="width: 250px"
                            />
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.date }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.phone_no1 }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.phone_no2 }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.email }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.current_address }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.hometown_address }}
                        </div>
                    </div>
                </div>
            </b-card>
            <b-card class="card">
                <div class="personal">
                    <h2 class="personal-header">Education Background</h2>
                    <div class="left">
                        <div class="confirm-title">Bachelor University</div>
                        <div class="confirm-title">Bachelor Year</div>
                        <div class="confirm-title">Bachelor Degree</div>
                        <div class="confirm-title">Master University</div>
                        <div class="confirm-title">Master Year</div>
                        <div class="confirm-title">Master Degree</div>
                        <div class="confirm-title">Diploma Name</div>
                        <div class="confirm-title">Other Certification</div>
                        <div class="confirm-title">Programming Language</div>
                        <div class="confirm-title">Programming Level</div>
                        <div class="confirm-title">English Skill</div>
                        <div class="confirm-title">Japanese Skill</div>
                        <div class="confirm-title">Other Skill</div>
                    </div>
                    <div class="right">
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.bachelor_university }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.bachelor_year }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.bachelor_degree }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.master_university }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.master_year }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.master_degree }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.diploma_name }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.certificate }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.programming_language }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.programming_level }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.english }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.japanese }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.other }}
                        </div>
                    </div>
                </div>
            </b-card>
            <b-card class="card">
                <div class="personal">
                    <h2 class="personal-header">Experience</h2>
                    <div class="left">
                        <div class="confirm-title">Internship Info</div>
                        <div class="confirm-title">Job Experience</div>
                        <div class="confirm-title">Total Experience Year</div>
                    </div>
                    <div class="right">
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.internship_info }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.job_experience }}
                        </div>
                        <div class="confirm-data">
                            {{ confirmApplicantInfo.total_exp_year }}
                        </div>
                    </div>
                </div>
            </b-card>
            <div class="btns">
                <button
                    type="reset"
                    class="btn btn-danger"
                    @click="cancleApplicant"
                >
                    Cancel
                </button>
                <button type="submit" class="btn btn-primary">Confirm</button>
            </div>
        </form>
    </div>
</template>
<script src="~/services/pages/confirm.js"></script>
<style scoped src="~/assets/css/confirm.css">
</style>
