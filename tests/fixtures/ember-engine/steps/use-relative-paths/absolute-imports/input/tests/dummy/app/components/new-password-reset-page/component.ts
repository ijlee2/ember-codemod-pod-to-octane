import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import type { PasswordResetFormModel } from '@namespace/package-name/components/ui/password-reset-form';
import type FormService from '@namespace/package-name/services/form';

export default class NewPasswordResetPageComponent extends Component {
  @service declare form: FormService;
}
