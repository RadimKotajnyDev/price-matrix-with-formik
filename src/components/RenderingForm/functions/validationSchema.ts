import * as yup from "yup";

export const schema = yup.object().shape({
  id: yup.number(),
  name: yup.string(),
  ruleSets: yup.array().of(
    yup.object().shape({
      ruleSetId: yup.number().nullable(),
      priority: yup.number(),
      rules: yup.array().of(
        yup.object().shape({
          ruleId: yup.number().nullable(),
          fieldId: yup.number().required().min(1),
          compareOperatorId: yup.number().required().min(1),
          value: yup.string().nullable().required() /*
          .test('not-zero', 'Hodnota nemůže být 0', function (value) {
            return value !== "0";
          }),
          */
        })
      ),
      priceCommissionable: yup.object().shape({
        priceSelling: yup.number().nullable(),
        bookingFeePercent: yup.number().nullable(),
        bookingFeeAbsolute: yup.number().nullable(),
      }),
      priceNet: yup.object().shape({
        priceSelling: yup.number().nullable(),
        bookingFeePercent: yup.number().nullable(),
        bookingFeeAbsolute: yup.number().nullable(),
      }),
      insideCommissionRate: yup.number().nullable(),
      note: yup.string().nullable(),
      offerCode: yup.string().nullable(),
    })
  ),
});