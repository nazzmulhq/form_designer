import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FormStyle from './Style';
import { Grid, FormControl, InputLabel, Select, MenuItem, TextField } from '@material-ui/core';

type FieldOptionType = {
  text: string;
  value: number;
};

type FormProps = {
  fields: any[];
  updateFieldsData: (value: any, index: number) => void;
};

const DynamicForm = ({ fields, updateFieldsData }: FormProps) => {
  const theme = useTheme();
  const useStyles = makeStyles(FormStyle(theme));
  const classes = useStyles();

  return (
    <Grid container>
      {fields &&
        fields.map((field: any, index: number) => (
          <Grid key={field.question_id} item xs={4}>
            {field.question_field_type === 'select one' && (
              <FormControl className={classes.formControl}>
                <InputLabel id={field.question_field_name + '-label'}>{field.question_field_label}</InputLabel>
                <Select
                  labelId={field.question_field_name + '-label'}
                  id={field.question_field_name}
                  value={field.form_value}
                  onChange={(event: any) => updateFieldsData(event.target.value, index)}
                >
                  {field.option_values.map((item: FieldOptionType) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            {field.question_field_type === 'text' && (
              <TextField
                id={field.question_field_name}
                label={field.question_field_label}
                className={classes.textField}
                value={field.form_value}
                onChange={(event: any) => updateFieldsData(event.target.value, index)}
              />
            )}
            {field.question_field_type === 'date' && (
              <TextField
                id={field.question_field_name}
                type="date"
                label={field.question_field_label}
                className={classes.textField}
                defaultValue={field.form_value}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(event: any) => updateFieldsData(event.target.value, index)}
              />
            )}
          </Grid>
        ))}
    </Grid>
  );
};

export default DynamicForm;
