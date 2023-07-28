import {FieldArray, Form, Formik} from 'formik';
import {ResolveRuleSets} from "../../configs/API.tsx";
import RuleSet from "./RuleSet/RuleSet.tsx";
import {Heading} from "./elements/Heading.tsx";
import {AddRuleset, HandleRemoveRuleSet, ScrollToLastElement} from "./functions/RenderFunctions.ts";
import {FormBottomButtons} from "./elements/FormBottomButtons.tsx";
import {useEffect, useRef, useState} from "react";
import Modal from "./elements/Modal.tsx";
import {schema} from "./functions/validationSchema.ts";
import {ruleSet} from "./functions/RuleSetType.ts";

const resolvedRuleSets = await ResolveRuleSets()

export default function RenderingForm(props: { data: { id: number, name: string } }) {

  const ref = useRef(null)

  const [lastRuleSetAdded, setLastRuleSetAdded] = useState<boolean>(false);
  const [ruleSetToRemoveAnimation, setRuleSetToRemoveAnimation] = useState<number | null>(null);

  const AddRulesetAnimate = () => {
    setLastRuleSetAdded(true);
    setTimeout(() => {
      setLastRuleSetAdded(false);
      ScrollToLastElement(ref);
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

  return (
    <Formik
      validationSchema={schema}
      initialValues={
        {id: props.data.id, name: props.data.name, ruleSets: resolvedRuleSets}
      }
      onSubmit={
        (values) => {
          setErrorModal(false)
          console.log(values); // EmptyStringsDataToNull(values) and re-fetch data
          setModalState(true)
        }
      }
      validateOnChange={false}
    >
      {({values, setFieldValue, setValues, errors, isValid}: {
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
                <Heading data={props.data}
                />
                <div ref={ref}>
                  {values.ruleSets.map((ruleSet: ruleSet, index: number) => {
                    return (
                      <div key={index}
                           className={`list-item list-none ${index + 1 === values.ruleSets.length && lastRuleSetAdded ? 'animate' : ''}
                       ${ruleSetToRemoveAnimation === index ? 'animate' : ''}`}>
                        <RuleSet
                          removeRuleSet={() => {
                            setRuleSetToRemoveAnimation(index);
                            setTimeout(() => {
                              setRuleSetToRemoveAnimation(null)
                              HandleRemoveRuleSet(values, setValues, index)
                            }, 500);
                          }}
                          errors={errors}
                          ruleSetIndex={index}
                          ruleSetPriority={ruleSet.priority}
                          ruleSetID={ruleSet.ruleSetId}
                          rules={ruleSet.rules}
                          rulesString={`ruleSets[${index}].rules`}
                          offerCode={`ruleSets[${index}].offerCode`}
                          note={`ruleSets[${index}].note`}
                          netBookingFeeAbsoluteValue={ruleSet.priceNet.bookingFeeAbsolute}
                          netBookingFeePercentValue={ruleSet.priceNet.bookingFeePercent}
                          netPriceSellingValue={ruleSet.priceNet.priceSelling}
                          netBookingFeeAbsolute={`ruleSets[${index}].priceNet.bookingFeeAbsolute`}
                          netBookingFeePercent={`ruleSets[${index}].priceNet.bookingFeePercent`}
                          netPriceSelling={`ruleSets[${index}].priceNet.priceSelling`}
                          commissionableBookingFeeAbsoluteValue={ruleSet.priceCommissionable.bookingFeeAbsolute}
                          commissionableBookingFeePercentValue={ruleSet.priceCommissionable.bookingFeePercent}
                          commissionablePriceSellingValue={ruleSet.priceCommissionable.priceSelling}
                          commissionableBookingFeeAbsolute={`ruleSets[${index}].priceCommissionable.bookingFeeAbsolute`}
                          commissionableBookingFeePercent={`ruleSets[${index}].priceCommissionable.bookingFeePercent`}
                          commissionablePriceSelling={`ruleSets[${index}].priceCommissionable.priceSelling`}
                          insideCommissionRate={`ruleSets[${index}].insideCommissionRate`}
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
          <FormBottomButtons addRuleset={
            () => {
              AddRuleset(values, setValues);
              AddRulesetAnimate()
            }}
          onClickProp={() => {if(!isValid) {DisplayError()}}}
          />
        </Form>
      )}
    </Formik>
  );
}