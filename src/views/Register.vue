<template>
  <h1>Register</h1>

  <Alert v-if="registrationFailed" @dismissed="registrationFailed = false" :dismissible="true" variant="danger">
    Try again with another login
  </Alert>

  <Form @submit="registerUser($event)" v-slot="{ meta: formMeta }" :initialValues="initialValues">
    <Field name="login" rules="required" v-slot="{ field, meta }">
      <div class="mb-3">
        <label class="form-label" for="login" :class="{ 'text-danger': meta.dirty && !meta.valid }">Login</label>
        <input id="login" class="form-control" :class="{ 'is-invalid': meta.dirty && !meta.valid }" v-bind="field" />
        <ErrorMessage name="login" class="invalid-feedback" />
      </div>
    </Field>

    <Field name="password" rules="required" v-slot="{ field, meta }">
      <div class="mb-3">
        <label class="form-label" for="password" :class="{ 'text-danger': meta.dirty && !meta.valid }">Password</label>
        <input id="password" type="password" class="form-control" :class="{ 'is-invalid': meta.dirty && !meta.valid }" v-bind="field" />
        <ErrorMessage name="password" class="invalid-feedback" />
      </div>
    </Field>

    <Field name="birthYear" rules="required" v-slot="{ field, meta }">
      <div class="mb-3">
        <label class="form-label" for="birthYear" :class="{ 'text-danger': meta.dirty && !meta.valid }">Birth Year</label>
        <input id="birthYear" type="number" class="form-control" :class="{ 'is-invalid': meta.dirty && !meta.valid }" v-bind="field" />
        <ErrorMessage name="birthYear" class="invalid-feedback" />
      </div>
    </Field>

    <button type="submit" class="btn btn-primary" aria-label="Submit" :disabled="!formMeta.valid">Submit</button>
  </Form>
</template>

<script setup lang="ts">
import { useUserService } from '@/composables/UserService';
import { UserModel } from '@/models/UserModel';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useForms } from '@/composables/Forms';
import { ErrorMessage, Field, Form } from 'vee-validate';

useForms();

const registrationFailed = ref(false);
const router = useRouter();

const initialValues = { birthYear: 2005 };

async function registerUser(values: Record<string, unknown>) {
  try {
    const userModel: UserModel = values as { login: string; password: string; birthYear: number };
    await useUserService().register(userModel);
    router.push('/');
  } catch (err) {
    registrationFailed.value = true;
  }
}
</script>

<style></style>
