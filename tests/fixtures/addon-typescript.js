const inputProject = {
  addon: {
    components: {
      ui: {
        form: {
          checkbox: {
            'component.ts': '',
            'styles.css': '',
            'template.hbs': '',
          },

          field: {
            'component.d.ts': '',
            'styles.css': '',
            'template.hbs': '',
          },

          information: {
            'component.d.ts': '',
            'styles.css': '',
            'template.hbs': '',
          },

          input: {
            'component.ts': '',
            'styles.css': '',
            'template.hbs': '',
          },

          number: {
            'component.ts': '',
            'styles.css': '',
            'template.hbs': '',
          },

          select: {
            'component.ts': '',
            'styles.css': '',
            'template.hbs': '',
          },

          textarea: {
            'component.ts': '',
            'styles.css': '',
            'template.hbs': '',
          },

          'component.ts': '',
          'styles.css': '',
          'template.hbs': '',
        },

        page: {
          'component.d.ts': '',
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
              "export { default } from 'addon-typescript/components/ui/form/checkbox/component';\n",
            'template.js':
              "export { default } from 'addon-typescript/components/ui/form/checkbox/template';\n",
          },

          field: {
            'styles.js':
              "export { default } from 'addon-typescript/components/ui/form/field/styles';\n",
            'template.js':
              "export { default } from 'addon-typescript/components/ui/form/field/template';\n",
          },

          information: {
            'styles.js':
              "export { default } from 'addon-typescript/components/ui/form/information/styles';\n",
            'template.js':
              "export { default } from 'addon-typescript/components/ui/form/information/template';\n",
          },

          input: {
            'component.js':
              "export { default } from 'addon-typescript/components/ui/form/input/component';\n",
            'template.js':
              "export { default } from 'addon-typescript/components/ui/form/input/template';\n",
          },

          number: {
            'component.js':
              "export { default } from 'addon-typescript/components/ui/form/number/component';\n",
            'template.js':
              "export { default } from 'addon-typescript/components/ui/form/number/template';\n",
          },

          select: {
            'component.js':
              "export { default } from 'addon-typescript/components/ui/form/select/component';\n",
            'template.js':
              "export { default } from 'addon-typescript/components/ui/form/select/template';\n",
          },

          textarea: {
            'component.js':
              "export { default } from 'addon-typescript/components/ui/form/textarea/component';\n",
            'template.js':
              "export { default } from 'addon-typescript/components/ui/form/textarea/template';\n",
          },

          'component.js':
            "export { default } from 'addon-typescript/components/ui/form/component';\n",
          'styles.js':
            "export { default } from 'addon-typescript/components/ui/form/styles';\n",
          'template.js':
            "export { default } from 'addon-typescript/components/ui/form/template';\n",
        },

        page: {
          'template.js':
            "export { default } from 'addon-typescript/components/ui/page/template';\n",
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
              'component-test.ts': '',
            },

            field: {
              'component-test.ts': '',
            },

            information: {
              'component-test.ts': '',
            },

            input: {
              'component-test.ts': '',
            },

            number: {
              'component-test.ts': '',
            },

            select: {
              'component-test.ts': '',
            },

            textarea: {
              'component-test.ts': '',
            },

            'component-test.ts': '',
          },

          page: {
            'component-test.ts': '',
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
          'checkbox.ts': '',

          'field.css': '',
          'field.d.ts': '',
          'field.hbs': '',

          'information.css': '',
          'information.d.ts': '',
          'information.hbs': '',

          'input.css': '',
          'input.hbs': '',
          'input.ts': '',

          'number.css': '',
          'number.hbs': '',
          'number.ts': '',

          'select.css': '',
          'select.hbs': '',
          'select.ts': '',

          'textarea.css': '',
          'textarea.hbs': '',
          'textarea.ts': '',
        },

        'form.css': '',
        'form.hbs': '',
        'form.ts': '',

        'page.d.ts': '',
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
            "export { default } from 'addon-typescript/components/ui/form/checkbox';\n",
          'field.js':
            "export { default } from 'addon-typescript/components/ui/form/field';\n",
          'information.js':
            "export { default } from 'addon-typescript/components/ui/form/information';\n",
          'input.js':
            "export { default } from 'addon-typescript/components/ui/form/input';\n",
          'number.js':
            "export { default } from 'addon-typescript/components/ui/form/number';\n",
          'select.js':
            "export { default } from 'addon-typescript/components/ui/form/select';\n",
          'textarea.js':
            "export { default } from 'addon-typescript/components/ui/form/textarea';\n",
        },

        'form.js':
          "export { default } from 'addon-typescript/components/ui/form';\n",
        'page.js':
          "export { default } from 'addon-typescript/components/ui/page';\n",
      },
    },
  },

  tests: {
    integration: {
      components: {
        ui: {
          form: {
            'checkbox-test.ts': '',
            'field-test.ts': '',
            'information-test.ts': '',
            'input-test.ts': '',
            'number-test.ts': '',
            'select-test.ts': '',
            'textarea-test.ts': '',
          },

          'form-test.ts': '',
          'page-test.ts': '',
        },
      },
    },
  },
};

export { inputProject, outputProject };
