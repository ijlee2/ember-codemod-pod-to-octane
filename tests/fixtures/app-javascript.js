const inputProject = {
  app: {
    application: {
      'adapter.js': '',
      'route.js': '',
      'serializer.js': '',
      'styles.css': '',
      'template.hbs': '',
    },

    components: {
      'navigation-menu': {
        'styles.css': '',
        'template.hbs': '',
      },

      product: {
        card: {
          'styles.css': '',
          'template.hbs': '',
        },

        details: {
          'component.js': '',
          'styles.css': '',
          'template.hbs': '',
        },

        image: {
          'component.js': '',
          'styles.css': '',
          'template.hbs': '',
        },
      },

      ui: {
        form: {
          checkbox: {
            'component.js': '',
            'styles.css': '',
            'template.hbs': '',
          },

          field: {
            'styles.css': '',
            'template.hbs': '',
          },

          information: {
            'styles.css': '',
            'template.hbs': '',
          },

          input: {
            'component.js': '',
            'styles.css': '',
            'template.hbs': '',
          },

          number: {
            'component.js': '',
            'styles.css': '',
            'template.hbs': '',
          },

          select: {
            'component.js': '',
            'styles.css': '',
            'template.hbs': '',
          },

          textarea: {
            'component.js': '',
            'styles.css': '',
            'template.hbs': '',
          },

          'component.js': '',
          'styles.css': '',
          'template.hbs': '',
        },

        page: {
          'styles.css': '',
          'template.hbs': '',
        },
      },
    },

    config: {
      'service.js': '',
    },

    experiments: {
      'service.js': '',
    },

    form: {
      'controller.js': '',
      'route.js': '',
      'styles.css': '',
      'template.hbs': '',
    },

    index: {
      'route.js': '',
      'styles.css': '',
      'template.hbs': '',
    },

    product: {
      'model.js': '',
    },

    'product-details': {
      'route.js': '',
      'styles.css': '',
      'template.hbs': '',
    },

    products: {
      product: {
        'route.js': '',
        'styles.css': '',
        'template.hbs': '',
      },

      'controller.js': '',
      'route.js': '',
      'styles.css': '',
      'template.hbs': '',
    },

    styles: {
      'app.css': '',
    },
  },

  tests: {
    integration: {
      components: {
        'navigation-menu': {
          'component-test.js': '',
        },

        product: {
          card: {
            'component-test.js': '',
          },

          details: {
            'component-test.js': '',
          },

          image: {
            'component-test.js': '',
          },
        },

        ui: {
          form: {
            checkbox: {
              'component-test.js': '',
            },

            field: {
              'component-test.js': '',
            },

            information: {
              'component-test.js': '',
            },

            input: {
              'component-test.js': '',
            },

            number: {
              'component-test.js': '',
            },

            select: {
              'component-test.js': '',
            },

            textarea: {
              'component-test.js': '',
            },

            'component-test.js': '',
          },

          page: {
            'component-test.js': '',
          },
        },
      },
    },

    unit: {
      application: {
        'route-test.js': '',
      },

      controllers: {
        form: {
          'controller-test.js': '',
        },

        products: {
          'controller-test.js': '',
        },
      },

      config: {
        'service-test.js': '',
      },

      experiments: {
        'service-test.js': '',
      },

      form: {
        'controller-test.js': '',
        'route-test.js': '',
      },

      index: {
        'route-test.js': '',
      },

      'product-details': {
        'route-test.js': '',
      },

      products: {
        product: {
          'route-test.js': '',
        },

        'controller-test.js': '',
        'route-test.js': '',
      },

      routes: {
        application: {
          'route-test.js': '',
        },

        form: {
          'route-test.js': '',
        },

        index: {
          'route-test.js': '',
        },

        'product-details': {
          'route-test.js': '',
        },

        products: {
          product: {
            'route-test.js': '',
          },

          'route-test.js': '',
        },
      },
    },
  },
};

const outputProject = {
  app: {
    adapters: {
      'application.js': '',
    },

    components: {
      'navigation-menu.css': '',
      'navigation-menu.hbs': '',

      product: {
        'card.css': '',
        'card.hbs': '',

        'details.css': '',
        'details.hbs': '',
        'details.js': '',

        'image.css': '',
        'image.hbs': '',
        'image.js': '',
      },

      ui: {
        form: {
          'checkbox.css': '',
          'checkbox.hbs': '',
          'checkbox.js': '',

          'field.css': '',
          'field.hbs': '',

          'information.css': '',
          'information.hbs': '',

          'input.css': '',
          'input.hbs': '',
          'input.js': '',

          'number.css': '',
          'number.hbs': '',
          'number.js': '',

          'select.css': '',
          'select.hbs': '',
          'select.js': '',

          'textarea.css': '',
          'textarea.hbs': '',
          'textarea.js': '',
        },

        'form.css': '',
        'form.hbs': '',
        'form.js': '',

        'page.css': '',
        'page.hbs': '',
      },
    },

    controllers: {
      'form.js': '',
      'products.js': '',
    },

    models: {
      'product.js': '',
    },

    routes: {
      products: {
        'product.js': '',
      },

      'application.js': '',
      'form.js': '',
      'index.js': '',
      'product-details.js': '',
      'products.js': '',
    },

    serializers: {
      'application.js': '',
    },

    services: {
      'config.js': '',
      'experiments.js': '',
    },

    styles: {
      products: {
        'product.css': '',
      },

      'app.css': '',
      'application.css': '',
      'form.css': '',
      'index.css': '',
      'product-details.css': '',
      'products.css': '',
    },

    templates: {
      products: {
        'product.hbs': '',
      },

      'application.hbs': '',
      'form.hbs': '',
      'index.hbs': '',
      'product-details.hbs': '',
      'products.hbs': '',
    },
  },

  tests: {
    integration: {
      components: {
        product: {
          'card-test.js': '',
          'details-test.js': '',
          'image-test.js': '',
        },

        ui: {
          form: {
            'checkbox-test.js': '',
            'field-test.js': '',
            'information-test.js': '',
            'input-test.js': '',
            'number-test.js': '',
            'select-test.js': '',
            'textarea-test.js': '',
          },

          'form-test.js': '',
          'page-test.js': '',
        },

        'navigation-menu-test.js': '',
      },
    },

    unit: {
      controllers: {
        'form-test.js': '',
        'products-test.js': '',
      },

      routes: {
        products: {
          'product-test.js': '',
        },

        'application-test.js': '',
        'form-test.js': '',
        'index-test.js': '',
        'product-details-test.js': '',
        'products-test.js': '',
      },

      services: {
        'config-test.js': '',
        'experiments-test.js': '',
      },
    },
  },
};

export { inputProject, outputProject };
