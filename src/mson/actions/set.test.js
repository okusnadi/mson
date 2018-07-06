import Set from './set';
import Form from '../form';
import ButtonField from '../fields/button-field';
import testUtils from '../test-utils';
import compiler from '../compiler';

const createFields = () => {
  return [
    compiler.newComponent({
      component: 'PersonFullNameField',
      name: 'name'
    }),
    new ButtonField({ name: 'save' })
  ];
};

const createForm = () => {
  return new Form({
    fields: createFields(),
    listeners: [
      {
        event: 'save',
        actions: [
          new Set({
            name: 'value',
            value: {
              name: {
                firstName: 'Michael',
                lastName: 'Jackson'
              }
            }
          })
        ]
      }
    ]
  });
};

it('should set', async () => {
  const form = createForm();
  form.getField('save').emitClick();
  await testUtils.waitFor(() => {
    return form
      .getField('name')
      .get('lastName')
      .getValue() === 'Jackson'
      ? true
      : undefined;
  });
  expect(form.getValues()).toEqual({
    id: undefined,
    name: {
      firstName: 'Michael',
      lastName: 'Jackson'
    },
    save: undefined
  });
});

const createFormNestedSet = () => {
  return new Form({
    fields: createFields(),
    listeners: [
      {
        event: 'save',
        actions: [
          new Set({
            name: 'fields.name.lastName.value',
            value: 'Jackson'
          })
        ]
      }
    ]
  });
};

it('should set nested components', async () => {
  const form = createFormNestedSet();
  form.getField('save').emitClick();
  await testUtils.waitFor(() => {
    return form
      .getField('name')
      .get('lastName')
      .getValue() === 'Jackson'
      ? true
      : undefined;
  });
  expect(form.getValues()).toEqual({
    id: undefined,
    name: {
      lastName: 'Jackson'
    },
    save: undefined
  });
});

it('should set globals', async () => {
  const set = new Set({
    name: 'globals.redirectAfterLogin',
    value: '/account'
  });

  let propsSet = null;

  // Mock
  set._getGlobalsComponent = () => ({
    set: props => {
      propsSet = props;
    }
  });

  await set.run({ arguments: null });
  expect(propsSet).toEqual({ redirectAfterLogin: '/account' });
});

it('should set using arguments when value is undefined', async () => {
  const form = createForm();
  const set = new Set({
    name: 'fields.name.lastName.value'
  });
  await set.run({ arguments: 'Fooerson', component: form });
  expect(
    form
      .getField('name')
      .get('lastName')
      .get('value')
  ).toEqual('Fooerson');
});
