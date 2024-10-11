import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import type { PasswordResetFormModel } from 'my-engine/components/ui/password-reset-form/component';
import type FormService from 'my-engine/services/form';

export default class NewPasswordResetPageComponent extends Component {
  @service declare form: FormService;
}
