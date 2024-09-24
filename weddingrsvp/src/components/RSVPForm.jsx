import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RSVPForm = () => {
    const initialValues = {
        guests: '',
        dinnerChoice: ''
    };

    const validationSchema = Yup.object({
        guests: Yup.number().required('Required').min(1, 'Must be at least 1').max(2, 'Must be 2 or fewer'), 
        dinnerChoice: Yup.string().required('Required')
    });

    const onSubmit = values => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
                <Form>
                    <div>
                        <label htmlFor="guests">Number of Guests</label>
                        <Field type="number" id="guests" name="guests"/>
                        <ErrorMessage name="guests" component="div"/>
                    </div>
                    <div>
                        <label htmlFor="dinnerChoice">Dinner Choice</label>
                        <Field as="select" id="dinnerChoice" name="dinnerChoice">
                            <option value="">Select</option>
                            <option value="beef">Beef</option>
                            <option value="chicken">Chicken</option>
                            <option value="vegetarian">Vegetarian</option>
                        </Field>
                        <ErrorMessage name="dinnerChoice" component="div"/>
                    </div>
                    <button type="submit">Submit</button>
                </Form>
        </Formik>
    );
};

export default RSVPForm;
