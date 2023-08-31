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
          performancesRange: yup.object().shape({
            performancesFrom: yup.date(),
            performancesTo: yup.date(),
          }).test("performancesRange",
              "Performances From must be before Performances To",
              function (value) {
                const {performancesFrom, performancesTo} = value;
                if (performancesFrom && performancesTo) {
                  return performancesFrom <= performancesTo;
                }
                return true;
              }),
          bookingsRange: yup.object().shape({
            bookingsFrom: yup.date(),
            bookingsTo: yup.date(),
          }).test("bookingsRange",
              "Bookings From must be before Bookings To",
              function (value) {
                const {bookingsFrom, bookingsTo} = value;
                if (bookingsFrom && bookingsTo) {
                  return bookingsFrom <= bookingsTo;
                }
                return true;
              }),
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
      offerCode: yup.string().nullable(),
    })
  ),
});
