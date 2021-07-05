<template>
  <v-container>
    
    <div class="cont text-center">
      <form>
        <v-row>
          <v-col md="6">
            <v-text-field
              outlined
              clearable
              v-model="name"
              :rules="[() => !!name || 'This field is required']"
              label="name"
              required
            ></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field
              outlined
              clearable
              v-model="lastName"
              :rules="[() => !!lastName || 'This field is required']"
              label="lastName"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-text-field
          outlined
          clearable
          :error-messages="emailErrors"
          v-model="email"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>

        <v-text-field
          outlined
          clearable
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show ? 'text' : 'password'"
          name="input-10-2"
          label="Password"
          hint="At least 8 characters"
          class="input-group--focused"
          @click:append="show = !show"
        ></v-text-field>
        <v-text-field
          outlined
          clearable
          v-model="confirmPassword"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]"
          :type="show2 ? 'text' : 'password'"
          name="input-10-2"
          label="Confirm Password"
          hint="At least 8 characters"
          class="input-group--focused"
          @click:append="show2 = !show2"
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
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
  },

  data: () => ({
    name: "",
    lastName: "",
    email: "",
    show: false,
    show2: false,
    password: "",
    confirmPassword: "",
    
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

  methods: {
    submit() {
      if (
        this.lastName &&
        this.name &&
        this.email &&
        this.password &&
        this.confirmPassword &&
        this.password === this.confirmPassword
      ) {
        axios
          .post("http://localhost:5000/user/signup", {
            name: this.name,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
          })
          .then((res) => {
            this.clear;
            this.$router.push({
              name: "Login",
              params: {
                success: res.data.message,
              },
            });
          });
      } else {
        console.log("something wrong!!!");
      }
    },
    clear() {
      (this.username = ""),
        (this.phone = ""),
        (this.email = ""),
        (this.password = "");
    },
  },
};
</script>
