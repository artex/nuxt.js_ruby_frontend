<template>
    <div class="container">
        <ValidationObserver ref="observer" v-model="valid">
            <form class="form" @submit.prevent="applicantConfirm">
                <div class="form-main">
                    <h3 class="header">Personal Information</h3>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="name"
                        rules="required||namelength"
                    >
                        <div class="form-group">
                            <label for="exampleInputname">Name</label>
                            <input
                                id="validationCustom01"
                                v-model="applicant.name"
                                type="name"
                                class="form-control"
                                placeholder="Enter Name"
                            />
                            <span class="input-invalid-message errorMsg">
                                {{ errors[0] }}
                            </span>
                        </div>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="profile_photo"
                        rules=""
                    >
                        <div class="form-group">
                            <label for="file-default">Profiile Photo</label>
                            <div label-cols-sm="2">
                                <b-form-file
                                    id="file-default"
                                    v-model="applicant.profile_photo"
                                    @change="addFile"
                                ></b-form-file>
                                <img id="output" />
                                <span class="input-invalid-message errorMsg">
                                    {{ errors[0] }}
                                </span>
                            </div>
                        </div>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="date"
                        rules="required"
                    >
                        <div class="form-group">
                            <div>
                                <label for="datepicker-placeholder"
                                    >Date Of Birth</label
                                >
                                <b-form-datepicker
                                    id="datepicker-placeholder"
                                    v-model="applicant.date"
                                    placeholder="Choose date of Birth"
                                    locale="en"
                                ></b-form-datepicker>
                                <span class="input-invalid-message errorMsg">
                                    {{ errors[0] }}
                                </span>
                            </div>
                        </div>
                    </ValidationProvider>
                    <div
                        class="errorMsg"
                        v-if="this.$store.state.applicant.errorm"
                    >
                        <div
                            v-if="this.$store.state.applicant.errorm.phone_no1"
                        >
                            Phone Number
                        </div>
                        {{ this.$store.state.applicant.errorm.phone_no1 }}
                    </div>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="phone"
                        rules="required|phonelength"
                    >
                        <div class="form-group">
                            <label for="exampleInputPhone1"
                                >Phone Number 1</label
                            >
                            <input
                                id="exampleInputPhone1"
                                v-model="applicant.phone_no1"
                                type="number"
                                class="form-control"
                                placeholder="Phone No"
                            />
                            <span class="input-invalid-message errorMsg">
                                {{ errors[0] }}
                            </span>
                        </div>
                    </ValidationProvider>

                    <ValidationProvider
                        v-slot="{ errors }"
                        name="phone2"
                        rules="phonelength"
                    >
                        <div class="form-group">
                            <label for="exampleInputPhone1"
                                >Phone Number 2</label
                            >
                            <input
                                id="exampleInputPhone1"
                                v-model="applicant.phone_no2"
                                type="number"
                                class="form-control"
                                placeholder="Phone No"
                            />
                            <span class="input-invalid-message errorMsg">
                                {{ errors[0] }}
                            </span>
                        </div>
                    </ValidationProvider>
                    <div
                        class="errorMsg"
                        v-if="this.$store.state.applicant.errorm"
                    >
                        <div v-if="this.$store.state.applicant.errorm.email">
                            Email
                        </div>
                        {{ this.$store.state.applicant.errorm.email }}
                    </div>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="email"
                        rules="required"
                    >
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input
                                id="email"
                                v-model="applicant.email"
                                type="email"
                                class="form-control"
                                placeholder="Email"
                            />
                            <span class="input-invalid-message errorMsg">
                                {{ errors[0] }}
                            </span>
                        </div>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="current_address"
                        rules="required|addresslength"
                    >
                        <div class="form-group">
                            <label for="ctextarea">Current Address</label>
                            <b-form-textarea
                                id="ctextarea"
                                v-model="applicant.current_address"
                                placeholder="Enter something..."
                                rows="3"
                                max-rows="6"
                            ></b-form-textarea>
                            <span class="input-invalid-message errorMsg">
                                {{ errors[0] }}
                            </span>
                        </div>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="hometown_address"
                        rules="addresslength"
                    >
                        <div class="form-group">
                            <label for="htextarea">Hometown Address</label>
                            <b-form-textarea
                                id="htextarea"
                                v-model="applicant.hometown_address"
                                placeholder="Enter something..."
                                rows="3"
                                max-rows="6"
                            ></b-form-textarea>
                            <span class="input-invalid-message errorMsg">
                                {{ errors[0] }}
                            </span>
                        </div>
                    </ValidationProvider>
                </div>
                <div class="form-main">
                    <h3 class="header">Education Background</h3>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-lg-4">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    name="bachelor_university"
                                    rules="required|unilength"
                                >
                                    <label for="bachelorUniversity"
                                        >Bachelor University</label
                                    >
                                    <input
                                        id="bachelorUniversity"
                                        v-model="applicant.bachelor_university"
                                        type="text"
                                        class="form-control"
                                        placeholder="Bachelor University"
                                    />
                                    <span
                                        class="input-invalid-message errorMsg"
                                    >
                                        {{ errors[0] }}
                                    </span>
                                </ValidationProvider>
                            </div>

                            <div class="col-lg-4">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    name="bachelor_year"
                                    rules="yearlength"
                                >
                                    <label for="bachelorYear"
                                        >Bachelor Year</label
                                    >
                                    <input
                                        id="bachelorYear"
                                        v-model="applicant.bachelor_year"
                                        type="text"
                                        class="form-control"
                                        placeholder="Bachelor Year"
                                    />
                                    <span
                                        class="input-invalid-message errorMsg"
                                    >
                                        {{ errors[0] }}
                                    </span>
                                </ValidationProvider>
                            </div>
                            <div class="col-lg-4">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    name="bachelor_degree"
                                    rules="degreelength"
                                >
                                    <label for="bachelorDegree"
                                        >Bachelor Degree</label
                                    >
                                    <input
                                        id="bachelorDegree"
                                        v-model="applicant.bachelor_degree"
                                        type="text"
                                        class="form-control"
                                        placeholder="Bachelor Degree"
                                    />
                                    <span
                                        class="input-invalid-message errorMsg"
                                    >
                                        {{ errors[0] }}
                                    </span>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-lg-4">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    name="master_university"
                                    rules="unilength"
                                >
                                    <label for="masterUniversity"
                                        >Master University</label
                                    >
                                    <input
                                        id="masterUniversity"
                                        v-model="applicant.master_university"
                                        type="text"
                                        class="form-control"
                                        placeholder="Master University"
                                    />
                                    <span
                                        class="input-invalid-message errorMsg"
                                    >
                                        {{ errors[0] }}
                                    </span>
                                </ValidationProvider>
                            </div>
                            <div class="col-lg-4">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    name="master_year"
                                    rules="yearlength"
                                >
                                    <label for="masterYear">Master Year</label>
                                    <input
                                        id="masterYear"
                                        v-model="applicant.master_year"
                                        type="text"
                                        class="form-control"
                                        placeholder="Master Year"
                                    />
                                    <span
                                        class="input-invalid-message errorMsg"
                                    >
                                        {{ errors[0] }}
                                    </span>
                                </ValidationProvider>
                            </div>
                            <div class="col-lg-4">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    name="master_degree"
                                    rules="degreelength"
                                >
                                    <label for="masterDegree"
                                        >Master Degree</label
                                    >
                                    <input
                                        id="masterDegree"
                                        v-model="applicant.master_degree"
                                        type="text"
                                        class="form-control"
                                        placeholder="Master Degree"
                                    />
                                    <span
                                        class="input-invalid-message errorMsg"
                                    >
                                        {{ errors[0] }}
                                    </span>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="diploma"
                        rules="diplomalength"
                    >
                        <div class="form-group">
                            <label for="diplomaName">Diploma Name</label>
                            <input
                                id="diplomaName"
                                v-model="applicant.diploma_name"
                                type="text"
                                class="form-control"
                                placeholder="Diploma Name"
                            />
                            <span class="input-invalid-message errorMsg">
                                {{ errors[0] }}
                            </span>
                        </div>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="certificate"
                        rules="certificatelength"
                    >
                        <div class="form-group">
                            <label for="otherCertificate"
                                >Other Certification</label
                            >
                            <input
                                id="otherCertificate"
                                v-model="applicant.certificate"
                                type="text"
                                class="form-control"
                                placeholder="Other Certification"
                            />
                            <span class="input-invalid-message errorMsg">
                                {{ errors[0] }}
                            </span>
                        </div>
                    </ValidationProvider>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-lg-6">
                                <label for="languageSkill"
                                    >Programming Skills</label
                                >
                                <input
                                    id="languageSkill"
                                    v-model="applicant.programming_language"
                                    type="text"
                                    class="form-control"
                                    placeholder="Programming Language"
                                />
                            </div>
                            <div class="col-lg-6">
                                <label for="languageLevel">Level</label>
                                <input
                                    id="languageLevel"
                                    v-model="applicant.programming_level"
                                    type="text"
                                    class="form-control"
                                    placeholder="Level"
                                />
                            </div>
                        </div>
                    </div>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="english"
                        rules="languagelength"
                    >
                        <div class="form-group">
                            <label for="englishSkill">English Skill</label>
                            <input
                                id="englishSkill"
                                v-model="applicant.english"
                                type="text"
                                class="form-control"
                                placeholder="English Skill"
                            />
                            <span class="input-invalid-message errorMsg">
                                {{ errors[0] }}
                            </span>
                        </div>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="japanese"
                        rules="languagelength"
                    >
                        <div class="form-group">
                            <label for="japaneseSkill">Japanese Skill</label>
                            <input
                                id="japaneseSkill"
                                v-model="applicant.japanese"
                                type="text"
                                class="form-control"
                                placeholder="Japanese Skill"
                            />
                            <span class="input-invalid-message errorMsg">
                                {{ errors[0] }}
                            </span>
                        </div>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="other"
                        rules="languagelength"
                    >
                        <div class="form-group">
                            <label for="otherSkill">Other Skills</label>
                            <input
                                id="otherSkill"
                                v-model="applicant.other"
                                type="text"
                                class="form-control"
                                placeholder="Other Skills"
                            />
                            <span class="input-invalid-message errorMsg">
                                {{ errors[0] }}
                            </span>
                        </div>
                    </ValidationProvider>
                </div>
                <div class="form-main">
                    <h3 class="header">Experience</h3>

                    <div class="form-group">
                        <input
                            id="has_job_exp"
                            type="checkbox"
                            class="form-check-input"
                        />
                        <label class="form-check-label" for="has_job_exp"
                            >Has Job Experience</label
                        >
                    </div>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Intern_info"
                        rules="explength"
                    >
                        <div class="form-group">
                            <label for="internshipInfo">Internship Info</label>
                            <b-form-textarea
                                id="internshipInfo"
                                v-model="applicant.internship_info"
                                type="text"
                                class="form-control"
                                rows="3"
                                max-rows="6"
                                placeholder="Internship Info"
                            />
                            <span class="input-invalid-message errorMsg">
                                {{ errors[0] }}
                            </span>
                        </div>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Job_Exp"
                        rules="explength"
                    >
                        <div class="form-group">
                            <label for="jobExperience">Job Experience</label>
                            <b-form-textarea
                                id="jobExperience"
                                v-model="applicant.job_experience"
                                type="text"
                                class="form-control"
                                rows="3"
                                max-rows="6"
                                placeholder="Job Experience"
                            />
                            <span class="input-invalid-message errorMsg">
                                {{ errors[0] }}
                            </span>
                        </div>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="total_exp_year"
                        rules="expyearlength"
                    >
                        <div class="form-group">
                            <label for="totalExpYear"
                                >Total Experience Year</label
                            >
                            <input
                                id="totalExpYear"
                                v-model="applicant.total_exp_year"
                                type="Number"
                                class="form-control"
                                placeholder="Total Experience Year"
                            />
                            <span class="input-invalid-message errorMsg">
                                {{ errors[0] }}
                            </span>
                        </div>
                    </ValidationProvider>
                </div>
                <div class="btns">
                    <button type="reset" class="btn btn-danger" @click="reset">
                        Reset
                    </button>
                    <button
                        :disabled="!valid"
                        type="submit"
                        class="btn btn-primary"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script src="~/services/pages/index.js"></script>

<style scoped src="~/assets/css/index.css"></style>
