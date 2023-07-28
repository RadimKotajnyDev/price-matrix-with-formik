import * as yup from "yup";

export const schema = yup.object().shape({
  id: yup.number(),
  name: yup.string(),
  ruleSets: yup.array().min(1).of(
    yup.object().shape({
      ruleSetId: yup.number(),
      logicalOperatorId: yup.number(),
      priority: yup.number().required(),
      rules: yup.array().of(
        yup.object().shape({
          ruleSetId: yup.number(),
          ruleId: yup.number(),
          fieldId: yup.number().required().min(1),
          compareOperatorId: yup.number().required().min(1),
          valueInt: yup.number(),
          valueString: yup.string(),
          valueDateTime: yup.string(),
          valueDecimal: yup.number(),
          priority: yup.number().optional(),
        })
      ),
      priceSelling: yup.number(),
      bookingFeePercent: yup.number(),
      bookingFeeAbsolute: yup.number(),
      insideCommissionRate: yup.number(),
      note: yup.string().optional(),
      offerCode: yup.string().optional(),
    })
  ),
});