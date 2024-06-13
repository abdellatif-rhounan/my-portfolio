<template>
  <section class="portfolio-section" id="contact">
    <div class="container">
      <h2 class="heading">
        {{ contactContent.heading[0] }}
        <span>{{ contactContent.heading[1] }}</span>
      </h2>

      <div class="row gy-5">
        <div class="form-wrapper col-12 col-lg-7 col-xxl-6">
          <h3 class="sub-heading">{{ contactContent.subHeading[0] }} :</h3>

          <form ref="form" @submit.prevent="submitForm">
            <div class="row">
              <div class="col-6 form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  :placeholder="contactContent.form.fullname"
                  id="fullname"
                  name="from_name"
                  :class="{ 'is-invalid': v$.fromName.$error }"
                  v-model="mailData.fromName"
                />

                <label class="label" for="fullname">{{
                  contactContent.form.fullname
                }}</label>

                <template v-if="v$.fromName.$errors.length">
                  <div
                    class="invalid-feedback"
                    v-for="error of v$.fromName.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </div>
                </template>
              </div>

              <div class="col-6 form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  :placeholder="contactContent.form.email"
                  id="email"
                  name="from_email"
                  :class="{ 'is-invalid': v$.fromEmail.$error }"
                  v-model="mailData.fromEmail"
                />

                <label class="label" for="email">{{
                  contactContent.form.email
                }}</label>

                <template v-if="v$.fromEmail.$errors">
                  <div
                    class="invalid-feedback"
                    v-for="error of v$.fromEmail.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </div>
                </template>
              </div>
            </div>

            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                :placeholder="contactContent.form.object"
                id="object"
                name="subject"
                :class="{ 'is-invalid': v$.subject.$error }"
                v-model="mailData.subject"
              />

              <label class="label" for="object">{{
                contactContent.form.object
              }}</label>

              <template v-if="v$.subject.$errors">
                <div
                  class="invalid-feedback"
                  v-for="error of v$.subject.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>

            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                :placeholder="contactContent.form.message"
                id="message"
                name="message"
                :class="{ 'is-invalid': v$.message.$error }"
                v-model="mailData.message"
              >
              </textarea>

              <label class="label" for="message">{{
                contactContent.form.message
              }}</label>

              <template v-if="v$.message.$errors">
                <div
                  class="invalid-feedback"
                  v-for="error of v$.message.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>

            <ButtonComp class="btn-c btn-brand" type="submit">
              {{ contactContent.form.submitBtn }}
            </ButtonComp>
          </form>
        </div>

        <div class="info-wrapper col-12 col-lg-5 col-xxl-6">
          <h3 class="sub-heading">{{ contactContent.subHeading[1] }} :</h3>

          <div class="row">
            <div class="info-box col-12 col-sm-6 col-lg-12 col-xxl-6">
              <h4>{{ contactContent.infos.fullnameLabel }} :</h4>
              <span>{{ globalData.firstname }} {{ globalData.lastname }}</span>
            </div>

            <div class="info-box col-12 col-sm-6 col-lg-12 col-xxl-6">
              <h4>
                <i class="bx bxl-gmail"></i>
                {{ contactContent.infos.emailLabel }} :
              </h4>
              <span>{{ globalData.email }}</span>
            </div>

            <div class="info-box col-12 col-sm-6 col-lg-12 col-xxl-6">
              <h4>
                <i class="bx bx-phone"></i>
                {{ contactContent.infos.phoneLabel }} :
              </h4>
              <span>{{ globalData.phone }}</span>
            </div>

            <div class="info-box col-12 col-sm-6 col-lg-12 col-xxl-6">
              <h4>
                <i class="bx bxl-whatsapp"></i>
                {{ contactContent.infos.whatsAppLabel }} :
              </h4>
              <span>{{ globalData.whatsapp }}</span>
            </div>

            <div class="info-box col-12 col-sm-6 col-lg-12 col-xxl-6">
              <h4>
                <i class="bx bx-briefcase"></i>
                {{ contactContent.infos.jobLabel }} :
              </h4>
              <span>{{ contactContent.infos.job }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { usePortfolioStore } from "@/stores/portfolio";
import { storeToRefs } from "pinia";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import ButtonComp from "@/components/ButtonComp.vue";

const portfolio = usePortfolioStore();

const { contactContent, globalData } = storeToRefs(portfolio);

const form = ref(null);

const mailData = reactive({
  fromName: "",
  fromEmail: "",
  subject: "",
  message: "",
});

const rules = {
  fromName: {
    required,
    minLengthValue: minLength(5),
    maxLengthValue: maxLength(50),
  },
  fromEmail: { required, email, maxLengthValue: maxLength(100) },
  subject: {
    required,
    minLengthValue: minLength(5),
    maxLengthValue: maxLength(255),
  },
  message: {
    required,
    minLengthValue: minLength(20),
    maxLengthValue: maxLength(1000),
  },
};

const v$ = useVuelidate(rules, mailData);

async function submitForm() {
  const isFormCorrect = await v$.value.$validate();

  if (!isFormCorrect) {
    return;
  }

  Swal.fire({
    title: "Please Confirm Action!",
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Send Message",
    timer: 7000,
    width: "48rem",
    padding: "2rem",
  }).then((res) => {
    if (res.isConfirmed) {
      sendMail();
    }
  });
}

function sendMail() {
  emailjs
    .sendForm(
      "service_37l6w0f",
      "template_7cc02nx",
      form.value,
      "HSl8vPcenw2_26VzA"
    )
    .then(
      () => {
        Swal.fire("Message Sent Successfully", "", "success");
        mailData.fromName = "";
        mailData.fromEmail = "";
        mailData.subject = "";
        mailData.message = "";
      },
      () => {
        Swal.fire("Failed To Send The Message", "", "error");
      }
    );
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/helpers/variables" as *;

.portfolio-section {
  display: flex;
  padding-bottom: calc(1.5rem + 52px);
  background: $second_bg_color;
  letter-spacing: 0.5px;
}

.container {
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  justify-content: center;
  row-gap: 22px;
}

.sub-heading {
  display: inline-block;
  margin-bottom: 30px;
  padding-bottom: 5px;
  border-bottom: 2px solid $brand_color;
  font-size: 20px;
}

.form-floating {
  &.col-6 .label {
    left: calc(var(--bs-gutter-x) * 0.5);
  }

  .form-control {
    background-color: transparent;
    letter-spacing: 1px;
    font-size: 14px;
    color: $text_color;

    &:not(.is-invalid) {
      border-color: $brand_color;

      &:focus {
        box-shadow: 0 0 6px $brand_color;
      }
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: $text_color;
      -webkit-background-clip: text;
    }
  }

  .label {
    font-size: 14px;
    color: lightgray !important;

    &::after {
      background-color: transparent !important;
    }
  }

  textarea {
    height: 130px;
    overflow-y: auto;
  }
}

.info-box {
  margin-bottom: 20px;

  h4 {
    margin-bottom: 7px;
    font-size: 20px;
    color: $brand_color;

    i {
      margin-right: 3px;
      vertical-align: top;
      font-size: 23px;
    }
  }

  > span {
    word-wrap: break-word;
    font-size: 16px;
  }
}

// Large Screen
@media (min-width: 992px) {
  .portfolio-section {
    padding-bottom: calc(1.5rem + 55px);
  }
}
</style>
