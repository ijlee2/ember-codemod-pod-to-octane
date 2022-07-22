const inputProject = {
  addon: {
    components: {
      product: {
        card: {
          'component.d.ts': '',
          'styles.css': '',
          'template.hbs': '',
        },

        details: {
          'component.ts': '',
          'styles.css': '',
          'template.hbs': '',
        },

        image: {
          'component.ts': '',
          'styles.css': '',
          'template.hbs': '',
        },
      },
    },

    'product-details': {
      'route.ts': '',
      'styles.css': '',
      'template.hbs': '',
    },

    products: {
      product: {
        'route.ts': '',
        'styles.css': '',
        'template.hbs': '',
      },

      'controller.ts': '',
      'route.ts': '',
      'styles.css': '',
      'template.hbs': '',
    },
  },

  tests: {
    integration: {
      components: {
        product: {
          card: {
            'component-test.ts': '',
          },

          details: {
            'component-test.ts': '',
          },

          image: {
            'component-test.ts': '',
          },
        },
      },
    },

    unit: {
      controllers: {
        products: {
          'controller-test.ts': '',
        },
      },

      'product-details': {
        'route-test.ts': '',
      },

      products: {
        product: {
          'route-test.ts': '',
        },

        'controller-test.ts': '',
        'route-test.ts': '',
      },

      routes: {
        'product-details': {
          'route-test.ts': '',
        },

        products: {
          product: {
            'route-test.ts': '',
          },

          'route-test.ts': '',
        },
      },
    },
  },
};

const outputProject = {
  addon: {
    components: {
      product: {
        'card.css': '',
        'card.d.ts': '',
        'card.hbs': '',

        'details.css': '',
        'details.hbs': '',
        'details.ts': '',

        'image.css': '',
        'image.hbs': '',
        'image.ts': '',
      },
    },

    controllers: {
      'products.ts': '',
    },

    routes: {
      products: {
        'product.ts': '',
      },

      'product-details.ts': '',
      'products.ts': '',
    },

    styles: {
      products: {
        'product.css': '',
      },

      'product-details.css': '',
      'products.css': '',
    },

    templates: {
      products: {
        'product.hbs': '',
      },

      'product-details.hbs': '',
      'products.hbs': '',
    },
  },

  tests: {
    integration: {
      components: {
        product: {
          'card-test.ts': '',
          'details-test.ts': '',
          'image-test.ts': '',
        },
      },
    },

    unit: {
      controllers: {
        'products-test.ts': '',
      },

      routes: {
        products: {
          'product-test.ts': '',
        },

        'product-details-test.ts': '',
        'products-test.ts': '',
      },
    },
  },
};

export { inputProject, outputProject };
