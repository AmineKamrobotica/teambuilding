<template>
  <v-main class="try">
    <v-snackbar
      transition="slide-x-transition"
      :timeout="1000"
      v-model="snackbar"
      absolute
      top
      color="success"
      outlined
      right
    >
      {{ this.$route.params.success }}
    </v-snackbar>
    <v-container>
      <div class="cont">
        <form>
          <v-text-field
            outlined
            clearable
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>

          <v-text-field
            v-model="password"
            outlined
            clearable
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show ? 'text' : 'password'"
            name="input-10-2"
            label="Password"
            hint="At least 8 characters"
            value=""
            class="input-group--focused"
            @click:append="show = !show"
          ></v-text-field>

          <v-btn
            style="color: white; text-transform:capitalize"
            color="#2c699a"
            block
            class="mr-4"
            @click="submit"
          >
            submit
          </v-btn>
        </form>
        <v-snackbar top color="#e63946" v-model="alert" :timeout="timeout">
          your password or email are invalid

          <template v-slot:action="{ attrs }">
            <v-btn color="#1d3557" text v-bind="attrs" @click="alert = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
        <v-divider></v-divider>
        <p style="margin-top: 10px">
          <span style="color: grey">by login, you agree to our </span>
          <b>Term,data Policy and cookies Policy</b>
        </p>
      </div>
    </v-container>
  </v-main>
</template>
<script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
  },

  data: () => ({
    name: "",
    email: "",
    show: false,
    password: "",
    snackbar: false,
    alert: false,
    timeout: 2000,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },
  created() {
    if (this.$route.params.success) {
      this.snackbar = true;
    }
  },
  methods: {
    submit() {
      if (this.email && this.password) {
        axios
          .post("user/login", {
            email: this.email,
            password: this.password,
          })
          .then((res) => {
            localStorage.setItem("id", res.data.user._id);
            axios.put("user/token/" + localStorage.getItem("id"), {
              token: res.data.token,
            });
            setTimeout(() => {
              this.$router.go(0);
            }, 500);
            this.$router.push({ name: "Home" });
          })
          .errors((this.alert = true));
      } else {
        this.alert = true;
      }
    },
  },
};
</script>
<style scoped>
@import "./login.css";
</style>
