const Ajv = require('ajv');


const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      // minLength: 10
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
const ajv = new Ajv();
const validate = ajv.compile(schema);
const data = {
  name: 'jim',
  age: 18,
  pets: ["dogs"]
};
const valid = validate(data);
if (!valid) {
  console.log(validate.errors[0].message);
}

