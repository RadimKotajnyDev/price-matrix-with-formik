import * as yup from "yup";

export const schema = yup.object().shape({
  id: yup.number(),
  name: yup.string(),
  ruleSets: yup.array().of(
    yup.object().shape({
      isRemoving: yup.boolean(),
      ruleSetId: yup.number().nullable(),
      priority: yup.number(),
      priceBandCodes: yup.string(),

      dateSelector: yup.object().shape({
        performancesRange: yup.object().shape({
          performancesFrom: yup.date(),
          performancesTo: yup.date().test(
            "performancesRange",
            "Performances From must be before Performances To",
            function (performancesTo, context: any) {
              const { performancesFrom } = this.parent;
              if (context.from[2].value.isRemoving) {
                return true;
              }
              return !performancesFrom || !performancesTo || performancesFrom <= performancesTo;
            }
          ),
        }),
        bookingsRange: yup.object().shape({
          bookingsFrom: yup.date(),
          bookingsTo: yup.date().test(
            "bookingsRange",
            "Bookings From must be before Bookings To",
            function (bookingsTo, context: any) {
              const { bookingsFrom } = this.parent;
              if (context.from[2].value.isRemoving) {
                return true;
              }
              return !bookingsFrom || !bookingsTo || bookingsFrom <= bookingsTo;
            }
          ),
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
      }),

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
      exclusionDates: yup.array().of(
        yup.object().shape({
          id: yup.number(),
          time: yup.string().matches(
            /^(Mat|mat|Eve|eve|([01]\d|2[0-3]):[0-5]\d)$/,
            'Time must be "Mat", "Eve", or in the "HH:mm" format (e.g., "00:00").'
          ),
          dateFrom: yup.date(),
          dateTo: yup.date().test(
            "date from",
            "Date From must be before Date To",
            function (dateTo, context: any) {
              const { dateFrom } = this.parent;
              if (context.from[1].value.isRemoving) {
                return true;
              }
              return !dateFrom || !dateTo || dateFrom <= dateTo;
            })
        })
      )
    })
  ),
});
