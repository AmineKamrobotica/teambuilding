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
      <div class="cont text-center">
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
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    show: false,
    password: "",
    snackbar: false,
    login: [],
    profil: [],
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
          .post("http://localhost:5000/user/login", {
            email: this.email,
            password: this.password,
          })
          .then((res) => {
            this.$store.state.token = res.data.token;
            this.$store.state.username =
              res.data.user.name + " " + res.data.user.lastName;
            this.$router.push({ name: "Home", params: { userData: res.data } });
            //this.$store.state.userData = res.data.user;
            localStorage.setItem(
              "id",res.data.user._id
            );
          });
      } else {
        console.log("something wrong!!!");
      }
    },
  },
};
</script>
<style scoped>
@import "./login.css";
</style>
