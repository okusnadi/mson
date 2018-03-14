// NOTE:
// - This file should only contain the component registrations
// - Names of user-defined fields should be in the form org.proj.ComponentName. They should not
//   appear in this file though!

import APIGet from './api-get';
import APISet from './api-set';
import App from './app';
import ButtonField from './fields/button-field';
import ChainedSelectField from './fields/chained-select-field';
import ChainedSelectListField from './fields/chained-select-list-field';
import CompositeField from './fields/composite-field';
import EmailField from './fields/email-field.json';
import Emit from './emit';
import Field from './fields/field';
import Form from './form';
import FormsField from './fields/forms-field';
import ListField from './fields/list-field';
import Menu from './menu';
import PasswordField from './fields/password-field.json';
import PersonNameField from './fields/person-name-field.json';
import RecordEditor from './record-editor.json';
import RecordEditorOld from './record-editor-old';
import RecordEditorWithPreview from './record-editor-with-preview.json';
import Redirect from './redirect';
import SelectField from './fields/select-field';
import SelectListField from './fields/select-list-field';
import Set from './set';
import Snackbar from './snackbar';
import TextField from './fields/text-field';

export default {
  APIGet,
  APISet,
  App,
  ButtonField,
  ChainedSelectField,
  ChainedSelectListField,
  CompositeField,
  EmailField,
  Emit,
  Field,
  Form,
  FormsField,
  ListField,
  Menu,
  PasswordField,
  PersonNameField,
  RecordEditor,
  RecordEditorOld,
  RecordEditorWithPreview,
  Redirect,
  SelectField,
  SelectListField,
  Set,
  Snackbar,
  TextField
};