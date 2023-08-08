import {FieldArray, Form, Formik} from 'formik';
import {SubmitMatrix} from "../../configs/API.tsx";
import RuleSet from "./RuleSet/RuleSet.tsx";
import {Heading} from "./elements/Heading.tsx";
import {AddRuleset, HandleRemoveRuleSet, NullDataToEmptyStrings} from "./functions/RenderFunctions.ts";
import ResponseModal from "./elements/ResponseModal.tsx";
import {schema} from "./functions/validationSchema.ts";
import {ruleSet} from "./functions/RuleSetType.ts";
import {SubmitMatrixButton} from "./elements/SubmitMatrixButton.tsx";
import {LoadingSpinner} from "./elements/LoadingSpinner.tsx";
import {useRenderingForm} from "../../hooks/useRenderingForm.ts";
import {FormInterface} from "./functions/FormInterface.ts";

export default function RenderingForm() {
  const {
    RefOnTop,
      setLoadingSpin,
      loadingSpin,
      resolvedRuleSets,
      matrixData,
      setRequestModalState,
      requestModalState,
      lastRuleSetAdded,
      setRuleSetToRemoveAnimation,
      ruleSetToRemoveAnimation,
      AddRulesetAnimate,
      setErrorStateModal,
      ErrorStateModal,
      DisplayError
  } = useRenderingForm()


  if (loadingSpin) {
    return <LoadingSpinner/>
  } else {
    return (
      <Formik<FormInterface>
        validationSchema={schema}
        initialValues={
          {id: matrixData.id, name: matrixData.name, ruleSets: resolvedRuleSets}
        }
        onSubmit={async (values, {setValues, setSubmitting}) => {
          try {
            setErrorStateModal(false);
            const result = await SubmitMatrix(values);
            const reformattedData = await NullDataToEmptyStrings(result)
            setValues(reformattedData)
            setLoadingSpin(true)
            setRequestModalState(true);
          } catch (error) {
            setErrorStateModal(true)
            setRequestModalState(true)
          }
          setSubmitting(false)
        }}
        validateOnChange={false}
      >
        {({values, setFieldValue, setValues, errors, isValid, isSubmitting}) => (
          <Form className="flex justify-center" ref={RefOnTop}>
            <FieldArray name={`ruleSets`}>
              {(/*{push, remove}*/) => (
                <div className="relative mb-20">
                  <ResponseModal
                    errorModal={ErrorStateModal}
                    showState={requestModalState}
                    openModal={() => setRequestModalState(true)}
                    closeModal={() => setRequestModalState(false)}
                  />
                  <Heading matrix={matrixData} AddRuleSet={() => {
                    AddRulesetAnimate();
                    AddRuleset(values, setValues);
                  }}
                  />
                  <div>
                    {values.ruleSets.map((ruleSet: ruleSet, ruleSetIndex: number) => {
                      return (
                        <div key={ruleSetIndex}
                             className={`list-item list-none ${ruleSetIndex === 0 && lastRuleSetAdded ? 'animate' : ''}
                       ${ruleSetToRemoveAnimation === ruleSetIndex ? 'animate' : ''}`}>
                          <RuleSet
                            removeRuleSet={() => {
                              setRuleSetToRemoveAnimation(ruleSetIndex);
                              setTimeout(() => {
                                setRuleSetToRemoveAnimation(null);
                                HandleRemoveRuleSet(values, setValues, ruleSetIndex);
                              }, 500);
                            }}
                            errors={errors}
                            ruleSetIndex={ruleSetIndex}
                            ruleSetPriority={ruleSet.priority}
                            ruleSetID={ruleSet.ruleSetId}
                            rules={ruleSet.rules}
                            rulesString={`ruleSets[${ruleSetIndex}].rules`}
                            offerCode={`ruleSets[${ruleSetIndex}].offerCode`}
                            note={`ruleSets[${ruleSetIndex}].note`}
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
                            setFieldValue={setFieldValue}
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
              !isValid ? DisplayError() : null
            }}
            />
          </Form>
        )}
      </Formik>
    );
  }
}