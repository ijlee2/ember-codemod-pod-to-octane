import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import type { PasswordResetFormModel } from './password-reset-form';
import type FormService from '../../services/form';

export default class UiPasswordResetPageComponent extends Component {
  @service declare form: FormService;
}
