const Ajv = require('ajv');
const localize = require("ajv-i18n")
const addFormats = require('ajv-formats')
const ajv = new Ajv()
addFormats(ajv)
const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      // format: 'email'
      // test: true
      minLength: 10
    },
    age: {
      type: 'number',
    },
    pets: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    isWorker: {
      type: 'boolean'
    },

  },
  required: ['name', 'age', 'pets']
}
// ajv.addFormat('test', (data) => {
//   console.log(data + "----------");
//   return data === "hello"
// })
// ajv.addKeyword('test', {
//   validate(schema, data) {
//     console.log(schema, data);
//     return true
//   }
// })
const validate = ajv.compile(schema);
const data = {
  name: 'hello',
  age: 18,
  pets: ["dogs"]
};
const valid = validate(data);
if (!valid) {
  localize.zh(validate.errors)
  console.log(validate.errors[0].message);
}

