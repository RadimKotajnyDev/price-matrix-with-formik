import {FieldArray, Form, Formik} from 'formik';
import {ResolveRuleSets, SaveRuleSet} from "../../configs/API.tsx";
import RuleSet from "./RuleSet/RuleSet.tsx";
import {Heading} from "./elements/Heading.tsx";
import {AddRuleset, HandleRemoveRuleSet} from "./functions/RenderFunctions.ts";
import {useEffect, useRef, useState} from "react";
import Modal from "./elements/Modal.tsx";
import {schema} from "./functions/validationSchema.ts";
import {ruleSet} from "./functions/RuleSetType.ts";

const resolvedRuleSets = await ResolveRuleSets()

export default function RenderingForm(props: { matrix: { id: number, name: string } }) {

  const ref = useRef(null)

  const [lastRuleSetAdded, setLastRuleSetAdded] = useState<boolean>(false);
  const [ruleSetToRemoveAnimation, setRuleSetToRemoveAnimation] = useState<number | null>(null);

  const AddRulesetAnimate = () => {
    setLastRuleSetAdded(true);
    setTimeout(() => {
      setLastRuleSetAdded(false);
      //ScrollToLastElement(ref);
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

  /*
  function DisplayError() {
    setErrorModal(true)
    setModalState(true)
  } */

  return (
    <Formik
      validationSchema={schema}
      initialValues={
        {id: props.matrix.id, name: props.matrix.name, ruleSets: resolvedRuleSets}
      }
      onSubmit={
        (values) => {
          setErrorModal(false)
          console.log(values); // EmptyStringsDataToNull(values) and re-fetch data
          setModalState(true)
        }
      }
      //validateOnChange={false}
    >
      {({values, setFieldValue, setValues, errors, /*isValid*/}: {
        values: any,
        setFieldValue: any,
        setValues: any,
        errors: any,
        isValid: boolean
      }) => (
        <Form className="flex justify-center">
          <FieldArray name={`ruleSets`}>
            {(/*{push, remove}*/) => (
              <div className="relative mb-20">
                <Modal
                  errorModal={ErrorModal}
                  showState={ModalState}
                  openModal={() => setModalState(true)}
                  closeModal={() => setModalState(false)}
                />
                <Heading matrix={props.matrix} addRuleSet={() => {
                  AddRulesetAnimate();
                  AddRuleset(values, setValues, props.matrix.id);
                }}
                />
                <div ref={ref}>
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
                              HandleRemoveRuleSet(values, setValues, ruleSetIndex, props.matrix.id, ruleSet.ruleSetId);
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
                          onSaveClick={() => SaveRuleSet(props.matrix.id, ruleSet.ruleSetId, ruleSet)}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </FieldArray>
          {/*<FormBottomButtons/>*/}
        </Form>
      )}
    </Formik>
  );
}