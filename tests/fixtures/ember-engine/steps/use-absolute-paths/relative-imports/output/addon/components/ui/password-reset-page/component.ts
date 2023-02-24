import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

import type FormService from '@namespace/package-name/services/form';
import type { PasswordResetFormModel } from '@namespace/package-name/components/ui/password-reset-form/component';

export default class UiPasswordResetPageComponent extends Component {
  @service declare form: FormService;
}
