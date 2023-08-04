import {FieldArray, Form, Formik} from 'formik';
import {FetchData, ReformatRuleSets, SubmitMatrix} from "../../configs/API.tsx";
import RuleSet from "./RuleSet/RuleSet.tsx";
import {Heading} from "./elements/Heading.tsx";
import {AddRuleset, HandleRemoveRuleSet, NullDataToEmptyStrings, ScrollToTop} from "./functions/RenderFunctions.ts";
import {useEffect, useRef, useState} from "react";
import Modal from "./elements/Modal.tsx";
import {schema} from "./functions/validationSchema.ts";
import {ruleSet} from "./functions/RuleSetType.ts";
import {SubmitMatrixButton} from "./elements/SubmitMatrixButton.tsx";
import {LoadingWheel} from "./elements/LoadingWheel.tsx";
import {FormikInterface} from "./functions/FormikInterface.ts";

export default function RenderingForm() {

  const [resolvedRuleSets, setResolvedRuleSets] = useState([])
  const [matrix, setMatrix] = useState({name: "", id: 0})

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    FetchData().then((res) => setMatrix(res))
    ReformatRuleSets()
      .then((res) => {
        setResolvedRuleSets(res);
        setLoading(false);
      })
  }, [loading])

  const RefOnTop = useRef(null)

  const [lastRuleSetAdded, setLastRuleSetAdded] = useState<boolean>(false);
  const [ruleSetToRemoveAnimation, setRuleSetToRemoveAnimation] = useState<number | null>(null);

  const AddRulesetAnimate = () => {
    setLastRuleSetAdded(true);
    setTimeout(() => {
      setLastRuleSetAdded(false);
      ScrollToTop(RefOnTop);
    }, 500);
  };

  const [ModalState, setModalState] = useState<boolean>(false)
  const [ErrorModal, setErrorModal] = useState<boolean>(false)
  useEffect(() => {
    if (ModalState) {
      const timeout = setTimeout(() => {
        setModalState(false)
      }, 1250);
      //setErrorModal(false)
      return () => clearTimeout(timeout);
    }
  }, [ModalState]);

  function DisplayError() {
    setErrorModal(true)
    setModalState(true)
  }

  if (loading) {
    return <LoadingWheel/>
  } else {
    return (
      <Formik<FormikInterface>
        validationSchema={schema}
        initialValues={
          {id: matrix.id, name: matrix.name, ruleSets: resolvedRuleSets}
        }
        onSubmit={async (values, {setValues, setSubmitting}) => {
          setErrorModal(false);
          try {
            const result = await SubmitMatrix(values);
            const reformatedData = await NullDataToEmptyStrings(result)

            setValues(reformatedData)
            setLoading(true)

            setModalState(true);
          } catch (error) {
            setErrorModal(true)
            setModalState(true)
          }
          setSubmitting(false)
        }}
        validateOnChange={false}
      >
        {({values, setFieldValue, setValues, errors, isValid, isSubmitting}: {
          values: any,
          setFieldValue: any,
          setValues: any,
          errors: any,
          isValid: boolean,
          isSubmitting: boolean
        }) => (
          <Form className="flex justify-center" ref={RefOnTop}>
            <FieldArray name={`ruleSets`}>
              {(/*{push, remove}*/) => (
                <div className="relative mb-20">
                  <Modal
                    errorModal={ErrorModal}
                    showState={ModalState}
                    openModal={() => setModalState(true)}
                    closeModal={() => setModalState(false)}
                  />
                  <Heading matrix={matrix} AddRuleSet={() => {
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
            <SubmitMatrixButton disabledOption={isSubmitting} onClickProp={() => {if (!isValid) {DisplayError()}}}
            />
          </Form>
        )}
      </Formik>
    );
  }
}