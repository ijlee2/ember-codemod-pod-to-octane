const inputProject = {
  addon: {
    components: {
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
  },

  tests: {
    integration: {
      components: {
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
      },
    },

    unit: {
      controllers: {
        products: {
          'controller-test.js': '',
        },
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
  addon: {
    components: {
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
    },

    controllers: {
      'products.js': '',
    },

    routes: {
      products: {
        'product.js': '',
      },

      'product-details.js': '',
      'products.js': '',
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
          'card-test.js': '',
          'details-test.js': '',
          'image-test.js': '',
        },
      },
    },

    unit: {
      controllers: {
        'products-test.js': '',
      },

      routes: {
        products: {
          'product-test.js': '',
        },

        'product-details-test.js': '',
        'products-test.js': '',
      },
    },
  },
};

export { inputProject, outputProject };
