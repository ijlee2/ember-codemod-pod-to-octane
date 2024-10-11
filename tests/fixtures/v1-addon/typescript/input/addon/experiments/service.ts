import Service from '@ember/service';

export default class ExperimentsService extends Service {
  decideVariant(experimentName: string): void {
    if (experimentName === 'nest-product-details') {
      // TODO
    }
  }
}

declare module '@ember/service' {
  interface Registry {
    experiments: ExperimentsService;
  }
}
