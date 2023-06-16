<template>
  <h1>Log in</h1>

  <Alert v-if="authenticationFailed" @dismissed="authenticationFailed = false" :dismissible="true" variant="danger">
    Nope, try again
  </Alert>

  <Form @submit="authenticate($event)" v-slot="{ meta: formMeta }">
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
        <input type="password" id="password" class="form-control" :class="{ 'is-invalid': meta.dirty && !meta.valid }" v-bind="field" />
        <ErrorMessage name="password" class="invalid-feedback" />
      </div>
    </Field>

    <button type="submit" class="btn btn-primary" aria-label="Submit" :disabled="!formMeta.valid">Submit</button>
  </Form>
</template>

<script setup lang="ts">
import { useForms } from '@/composables/Forms';
import { ErrorMessage, Field, Form } from 'vee-validate';
import { useUserService } from '@/composables/UserService';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

useForms();

const router = useRouter();
const authenticationFailed = ref(false);

async function authenticate(values: Record<string, unknown>) {
  try {
    console.log(values);
    await useUserService().authenticate(values as { login: string; password: string });
    router.push('/');
  } catch (err) {
    authenticationFailed.value = true;
  }
}
</script>

<style></style>
