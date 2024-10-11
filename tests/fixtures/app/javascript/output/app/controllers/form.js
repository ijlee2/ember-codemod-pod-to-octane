import Controller from '@ember/controller';
import { service } from '@ember/service';
import { generateBody } from '@ijlee2/ember-workshop-app/utils/fetch';
import { dropTask } from 'ember-concurrency';
import fetch from 'fetch';

export default class FormController extends Controller {
  @service experiments;

  get initialData() {
    if (this.isPartOfSubscribeToEmberTimesExperiment) {
      return {
        email: undefined,
        message: 'I 🧡 container queries!',
        name: undefined,
        subscribe: true,
      };
    }

    return {
      donation: undefined,
      email: undefined,
      message: 'I 🧡 container queries!',
      name: undefined,
    };
  }

  get isPartOfSubscribeToEmberTimesExperiment() {
    return this.experiments.getVariant('subscribe-to-ember-times') === 'v1';
  }

  submitForm = dropTask(async (data) => {
    try {
      const body = generateBody(data);

      await fetch('/contact-me', {
        body,
        method: 'POST',
      });
    } catch (e) {
      throw new Error(e);
    }
  });
}
