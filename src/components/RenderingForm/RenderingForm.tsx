import {FieldArray, Form, Formik} from 'formik';
import {SubmitMatrix} from "../../configs/API.tsx";
import {RuleSet} from "./RuleSet/RuleSet.tsx";
import {Heading} from "./elements/Heading.tsx";
import {AddRuleset, FormatDataFromAPI} from "./functions/RenderFunctions.ts";
import {ResponseModal} from "./elements/ResponseModal.tsx";
import {schema} from "./functions/validationSchema.ts";
import {SubmitMatrixButton} from "./elements/SubmitMatrixButton.tsx";
import {LoadingSpinner} from "./elements/LoadingSpinner.tsx";
import {useRenderingForm} from "../../hooks/useRenderingForm.ts";

import {PriceMatrixInterface, RuleSetInterface} from "../../configs/interface/PriceMatrixInterface.ts";

export const RenderingForm = () => {

  const {
    refOnTop,
    setIsLoadingSpin,
    isLoadingSpin,
    matrixData,
    setIsRequestModal,
    isRequestModal,
    isLastRuleSetAdded,
    addRuleSetAnimate,
    setIsErrorModal,
    isErrorModal,
    DisplayError
  } = useRenderingForm()


  if (isLoadingSpin) {
    return <LoadingSpinner/>
  } else {
    return (
      <Formik<PriceMatrixInterface>
        validationSchema={schema}
        initialValues={
          {id: matrixData.id, name: matrixData.name, ruleSets: matrixData.ruleSets}
        }
        onSubmit={async (values, {setValues, setSubmitting}) => {
          try {
            setIsErrorModal(false);
            const result = await SubmitMatrix(values);
            const reformattedData = await FormatDataFromAPI(result)
            setValues(reformattedData)
            setIsLoadingSpin(true)
            setIsRequestModal(true);
          } catch (error) {
            setIsErrorModal(true)
            setIsRequestModal(true)
            const reformattedData = await FormatDataFromAPI(values)
            setValues(reformattedData)
          }
          setSubmitting(false)
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({values, setValues, errors, isValid, isSubmitting}) => (
          <Form className="flex justify-center" ref={refOnTop}>
            <FieldArray name={`ruleSets`}>
              {() => (
                <div className="relative mb-20">
                  <ResponseModal
                    errorModal={isErrorModal}
                    showState={isRequestModal}
                    openModal={() => setIsRequestModal(true)}
                    closeModal={() => setIsRequestModal(false)}
                  />
                  <Heading matrix={matrixData} AddRuleSet={() => {
                    addRuleSetAnimate();
                    AddRuleset(values, setValues);
                  }}
                  />
                  <div>
                    {values.ruleSets.map((ruleSet: RuleSetInterface, ruleSetIndex: number) => {
                      return (
                        <div key={ruleSetIndex}
                             className={`ruleSetAnimation list-none ${ruleSetIndex === 0 && isLastRuleSetAdded ? 'animate' : ''}
                       ${values.ruleSets[ruleSetIndex].isRemoving ? 'opacity-50' : ''}`}>
                          <RuleSet
                            removeRuleSet={() => {
                              values.ruleSets[ruleSetIndex].isRemoving = !values.ruleSets[ruleSetIndex].isRemoving;
                              setValues(values);
                            }}
                            isRemoving={values.ruleSets[ruleSetIndex].isRemoving || false}
                            errors={errors}
                            ruleSetIndex={ruleSetIndex}
                            priority={ruleSet.priority}
                            ruleSetId={ruleSet.ruleSetId}
                            offerCode={`ruleSets[${ruleSetIndex}].offerCode`}
                            note={`ruleSets[${ruleSetIndex}].note`}

                            priceBandCodes={`ruleSets[${ruleSetIndex}].priceBandCodes`}
                            performancesFrom={`ruleSets[${ruleSetIndex}].dateSelector.performancesRange.performancesFrom`}
                            performancesTo={`ruleSets[${ruleSetIndex}].dateSelector.performancesRange.performancesTo`}
                            bookingsFrom={`ruleSets[${ruleSetIndex}].dateSelector.bookingsRange.bookingsFrom`}
                            bookingsTo={`ruleSets[${ruleSetIndex}].dateSelector.bookingsRange.bookingsTo`}
                            selectedPerformanceTimesName={`ruleSets[${ruleSetIndex}].dateSelector.selectedPerformanceTimes`}

                            netBookingFeeAbsoluteValue={ruleSet.priceNet.bookingFeeAbsolute}
                            netBookingFeePercentValue={ruleSet.priceNet.bookingFeePercent}
                            netPriceSellingValue={ruleSet.priceNet.priceSelling}
                            netBookingFeeAbsolute={`ruleSets[${ruleSetIndex}].priceNet.bookingFeeAbsolute`}
                            netBookingFeePercent={`ruleSets[${ruleSetIndex}].priceNet.bookingFeePercent`}
                            netPriceSelling={`ruleSets[${ruleSetIndex}].priceNet.priceSelling`}
                            commissionableBookingFeeAbsoluteValue={ruleSet.priceCommissionable.bookingFeeAbsolute}
                            commissionableBookingFeePercentValue={ruleSet.priceCommissionable.bookingFeePercent}
                            commissionablePriceSellingValue={ruleSet.priceCommissionable.priceSelling}
                            commissionableBookingFeeAbsolute={`ruleSets[${ruleSetIndex}].priceCommissionable.bookingFeeAbsolute`}
                            commissionableBookingFeePercent={`ruleSets[${ruleSetIndex}].priceCommissionable.bookingFeePercent`}
                            commissionablePriceSelling={`ruleSets[${ruleSetIndex}].priceCommissionable.priceSelling`}
                            insideCommissionRate={`ruleSets[${ruleSetIndex}].insideCommissionRate`}

                            exclusionDates={values.ruleSets[ruleSetIndex].exclusionDates}
                            //setFieldValue={setFieldValue}
                            values={values}
                            setValues={setValues}
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </FieldArray>
            <SubmitMatrixButton disabledOption={isSubmitting} onClickProp={() => {
              !isValid ? console.log(errors) : null;
              !isValid ? DisplayError() : null;
            }}
            />
          </Form>
        )}
      </Formik>
    );
  }
}