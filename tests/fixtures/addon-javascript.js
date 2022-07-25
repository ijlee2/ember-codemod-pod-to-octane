const inputProject = {
  addon: {
    components: {
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
          'styles.scss': '',
          'template.hbs': '',
        },
      },
    },
  },

  app: {
    components: {
      ui: {
        form: {
          checkbox: {
            'component.js':
              "export { default } from 'addon-javascript/components/ui/form/checkbox/component';\n",
            'template.js':
              "export { default } from 'addon-javascript/components/ui/form/checkbox/template';\n",
          },

          field: {
            'styles.js':
              "export { default } from 'addon-javascript/components/ui/form/field/styles';\n",
            'template.js':
              "export { default } from 'addon-javascript/components/ui/form/field/template';\n",
          },

          information: {
            'styles.js':
              "export { default } from 'addon-javascript/components/ui/form/information/styles';\n",
            'template.js':
              "export { default } from 'addon-javascript/components/ui/form/information/template';\n",
          },

          input: {
            'component.js':
              "export { default } from 'addon-javascript/components/ui/form/input/component';\n",
            'template.js':
              "export { default } from 'addon-javascript/components/ui/form/input/template';\n",
          },

          number: {
            'component.js':
              "export { default } from 'addon-javascript/components/ui/form/number/component';\n",
            'template.js':
              "export { default } from 'addon-javascript/components/ui/form/number/template';\n",
          },

          select: {
            'component.js':
              "export { default } from 'addon-javascript/components/ui/form/select/component';\n",
            'template.js':
              "export { default } from 'addon-javascript/components/ui/form/select/template';\n",
          },

          textarea: {
            'component.js':
              "export { default } from 'addon-javascript/components/ui/form/textarea/component';\n",
            'template.js':
              "export { default } from 'addon-javascript/components/ui/form/textarea/template';\n",
          },

          'component.js':
            "export { default } from 'addon-javascript/components/ui/form/component';\n",
          'styles.js':
            "export { default } from 'addon-javascript/components/ui/form/styles';\n",
          'template.js':
            "export { default } from 'addon-javascript/components/ui/form/template';\n",
        },

        page: {
          'template.js':
            "export { default } from 'addon-javascript/components/ui/page/template';\n",
        },
      },
    },
  },

  tests: {
    integration: {
      components: {
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
  },
};

const outputProject = {
  addon: {
    components: {
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

        'page.hbs': '',
        'page.scss': '',
      },
    },
  },

  app: {
    components: {
      ui: {
        form: {
          'checkbox.js':
            "export { default } from 'addon-javascript/components/ui/form/checkbox';\n",
          'field.js':
            "export { default } from 'addon-javascript/components/ui/form/field';\n",
          'information.js':
            "export { default } from 'addon-javascript/components/ui/form/information';\n",
          'input.js':
            "export { default } from 'addon-javascript/components/ui/form/input';\n",
          'number.js':
            "export { default } from 'addon-javascript/components/ui/form/number';\n",
          'select.js':
            "export { default } from 'addon-javascript/components/ui/form/select';\n",
          'textarea.js':
            "export { default } from 'addon-javascript/components/ui/form/textarea';\n",
        },

        'form.js':
          "export { default } from 'addon-javascript/components/ui/form';\n",
        'page.js':
          "export { default } from 'addon-javascript/components/ui/page';\n",
      },
    },
  },

  tests: {
    integration: {
      components: {
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
      },
    },
  },
};

export { inputProject, outputProject };
