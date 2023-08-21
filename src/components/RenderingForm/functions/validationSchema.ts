import * as yup from "yup";

export const schema = yup.object().shape({
  id: yup.number(),
  name: yup.string(),
  ruleSets: yup.array().of(
    yup.object().shape({
      ruleSetId: yup.number().nullable(),
      priority: yup.number(),
      priceBandCodes: yup.string(),
      dateSelector: yup.object().shape(
        {
          performancesFrom: yup.date(),
          performancesTo: yup.date(),
          bookingsFrom: yup.date(),
          bookingsTo: yup.date(),
          selectedPerformanceTimes: yup.array().of(
            yup.lazy(value => {
              switch (typeof value) {
                case 'object':
                  return yup.object().shape(
                    {
                      type: yup.number(),
                      dayOfWeek: yup.number()
                    },
                  ).optional()
                case 'string':
                  return yup.string()
                default:
                  return yup.mixed()
              }
            })
          )
        }
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
      offerCode: yup.string().nullable().required(),
    })
  ),
});
