<template>
  <v-container class="d-flex justify-center">
    <v-row class="justify-center">
      <v-col sm="8">
        <v-form ref="form" v-model="valid" @submit.prevent="submit" lazy-validation>
          <v-card>
            <v-card-text>


              <v-row justify="center">
                <h2>Before you see the goods, confirm your birthday.</h2>
              </v-row>
              <v-row justify="center">
                <span
                    class="subtitle-1"><i>Please note you will be required to provide Photo ID for your first order.</i></span>
              </v-row>

              <v-row justify="center" v-if="errorMessage.length > 0" class="mt-2 mb-2">
                <v-alert type="error" border="right" colored-border elevation="2">
                  {{ errorMessage }}
                </v-alert>
              </v-row>

              <v-row>
                <v-col sm="3" offset="1">
                  <v-select :items="dayItems" v-model="selectedDay" label="Day">

                  </v-select>
                </v-col>
                <v-col sm="4">
                  <v-select :items="monthItems" v-model="selectedMonth" label="Month"></v-select>
                </v-col>
                <v-col sm="3">
                  <v-select :items="yearItems" v-model="selectedYear" label="Year"></v-select>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-actions>
              <v-row justify="center">
                <v-btn outlined rounded text color="success" type="submit">Proceed</v-btn>
              </v-row>
            </v-card-actions>
          </v-card>

        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

let yearStart = 1900;
let yearEnd = 2021;

let yearRange = [];

for (let i = yearStart; i <= yearEnd; i++) {
  yearRange.push(i);
}

yearRange.reverse()

export default {
  name: "Login",

  data: () => ({
    selectedDay: null,
    selectedMonth: null,
    selectedYear: null,
    dayItems: [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
      '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
      '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
      '31'
    ],
    monthItems: [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ],
    yearItems: yearRange,
    valid: true,
    errorMessage: ""
  }),
  methods: {
    submit(e) {

      e.preventDefault();

      if (!this.$refs.form.validate()) {
        e.preventDefault();
        return;
      }

      let userAge = this.validateAge()
      this.$store.dispatch('setAge', userAge)

      if (userAge < 19) {
        this.errorMessage = "Sorry, you must be 19 years or older to enter."
        return
      }

      this.$router.push('/');
    },
    validateAge() {
      /**
       * Returns true or false depending on the values.
       */

      if (this.selectedDay === null || this.selectedMonth === null || this.selectedYear === null) {
        this.errorMessage = "Enter your birthday.";
        return -1;
      }

      let selectedMonthNumber = this.getMonthValue(this.selectedMonth)

      if (selectedMonthNumber === 0) {
        this.errorMessage = "Invalid month selected";
        return -1;
      }

      let dateOfBirth = new Date(this.selectedYear, selectedMonthNumber, parseInt(this.selectedDay));

      let difference = Date.now() - dateOfBirth.getTime();

      let ageDiff = new Date(difference);

      let age = Math.abs(ageDiff.getUTCFullYear() - 1970);
      return age;
    },
    getMonthValue(monthSelected) {
      switch (monthSelected) {
        case "January":
          return 1
        case "February":
          return 2
        case "March":
          return 3
        case "April":
          return 4
        case "May":
          return 5
        case "June":
          return 6
        case "July":
          return 7
        case "August":
          return 8
        case "September":
          return 9
        case "October":
          return 10
        case "November":
          return 11
        case "December":
          return 12
        default:
          return 0
      }
    }
  },

}
</script>

<style scoped>

</style>