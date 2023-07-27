import {FieldArray, Form, Formik} from 'formik';
import {ResolveRuleSets} from "../../API.tsx";
import RuleSet from "../RuleSet/RuleSet.tsx";
import {Heading} from "./Heading.tsx";
import {AddRuleset, HandleRemoveRuleSet} from "./RenderFunctions.ts";
import {FormBottomButtons} from "./FormBottomButtons.tsx";
import {useEffect, useRef, useState} from "react";
import Modal from "./Modal.tsx";
import {schema} from "./validationSchema.ts";
import {RuleSetType} from "./RuleSetType.ts";

const resolvedRuleSets = await ResolveRuleSets()

export default function RenderingForm(props: { data: { id: number, name: string } }) {

  const ref = useRef(null)
  const ScrollToLastElement = () => {
    const lastChildElement = ref.current as HTMLElement | null;
    lastChildElement?.lastElementChild?.scrollIntoView({behavior: 'smooth'});
  };

  const [lastRuleSetAdded, setLastRuleSetAdded] = useState<boolean>(false);
  const [ruleSetToRemoveAnimation, setRuleSetToRemoveAnimation] = useState<number | null>(null);

  const AddRulesetAnimate = () => {
    setLastRuleSetAdded(true);
    setTimeout(() => {
      setLastRuleSetAdded(false);
      ScrollToLastElement();
    }, 500);
  };

  const [ModalState, setModalState] = useState<boolean>(false)
  const [ErrorModal, setErrorModal] = useState<boolean>(false)
  useEffect(() => {
    if (ModalState) {
      const timeout = setTimeout(() => {
        setModalState(false)
      }, 1000);
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
                  {values.ruleSets.map((ruleSet: RuleSetType, index: number) => {
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
                          bookingFeeAbsoluteValue={ruleSet.bookingFeeAbsolute}
                          bookingFeePercentValue={ruleSet.bookingFeePercent}
                          priceSellingValue={ruleSet.priceSelling}
                          insideCommissionRateValue={ruleSet.insideCommissionRate}
                          bookingFeeAbsolute={`ruleSets[${index}].bookingFeeAbsolute`}
                          bookingFeePercent={`ruleSets[${index}].bookingFeePercent`}
                          insideCommissionRate={`ruleSets[${index}].insideCommissionRate`}
                          priceSelling={`ruleSets[${index}].priceSelling`}
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