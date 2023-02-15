import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

import type FormService from '../../services/form';
import type { PasswordResetFormModel } from './password-reset-form';

export default class UiPasswordResetPageComponent extends Component {
  @service declare form: FormService;
}
