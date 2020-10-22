<template>
  <v-container>
    <Validation-Observer v-slot="{ handleSubmit }">
      <form id="registrationForm" @submit.prevent="handleSubmit(register)">
        <v-row class="no-gutters">
          <v-col sm="9" xs="12" class="form-light-bg">
            <v-card>
              <v-card-title class="label-text"
                >Register here to get our monthly news letter</v-card-title
              >
            </v-card>
            <validation-provider
              name="First Name"
              rules="required|alphaNumeric"
              v-slot="{ errors }"
            >
              <v-text-field
                id="first_name"
                class="pro"
                label="First Name"
                :class="{ 'error--text': errors[0] }"
                v-model="firstName"
              ></v-text-field>
              <p class="custom-error-msg">{{ errors[0] }}</p>
            </validation-provider>

            <validation-provider
              name="Last Name"
              rules="required"
              v-slot="{ errors }"
            >
              <v-text-field
                id="last_name"
                class="pro"
                label="Last Name"
                v-model="lastName"
              ></v-text-field>
              <p class="custom-error-msg">{{ errors[0] }}</p>
            </validation-provider>
            <validation-provider
              name="email"
              rules="required|email"
              v-slot="{ errors }"
            >
              <v-text-field
                id="email"
                label="Email"
                v-model="email"
              ></v-text-field>
              <p class="custom-error-msg">{{ errors[0] }}</p>
            </validation-provider>
          </v-col>
        </v-row>

        <v-btn id="cs_btn_clear" text @click="cancel"> Cancel </v-btn>
        <v-btn
          id="cs_btn_apply_filter"
          depressed
          type="submit"
          form="registrationForm"
          class="next bmt3 primaryctabtn"
          >Register</v-btn
        >
      </form>
    </Validation-Observer>
    <v-row>
      <v-col md="9">
        <v-alert v-if="validated" dense text type="success">
          <strong>Registration Successful</strong>
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      validated: false,
    };
  },
  methods: {
    cancel() {
      this.$router.push("/");
    },
    register() {
      this.validated = true;
    },
  },
};
</script>
<style scoped>
.custom-error-msg {
  color: red;
}
.label-text {
  color: #90d343;
  margin: 50px 0 20px 0px;
}
</style>