import {useEffect, useRef, useState} from "react";
import {FetchData, ReformatRuleSets} from "../configs/API.tsx";
import {ScrollToTop} from "../components/RenderingForm/functions/RenderFunctions.ts";

export function useRenderingForm() { // TODO: use arrow function

  const [resolvedRuleSets, setResolvedRuleSets] = useState([])
  const [matrixData, setMatrixData] = useState({name: "", id: 0})

  const [loadingSpin, setLoadingSpin] = useState<boolean>(true); //TODO: all useState should be sorted at the top for better readability, (isLoadingSpinner)
  useEffect(() => {
    FetchData().then((res) => setMatrixData(res)) //TODO: change this for async / await -> newer and better readability
    ReformatRuleSets()
      .then((res) => {
        setResolvedRuleSets(res);
        setLoadingSpin(false);
      })
  }, [loadingSpin])

  const RefOnTop = useRef(null) // TODO: change to camelCase, better nam

  const [lastRuleSetAdded, setLastRuleSetAdded] = useState<boolean>(false); // TODO: "islastRuleSetAdded"
  const [ruleSetToRemoveAnimation, setRuleSetToRemoveAnimation] = useState<number | null>(null); // TODO: better name, something with index

  const AddRulesetAnimate = () => { // TODO: all functions change to camelCase (and all other for consistent), look at the other names, more concise and to the point
    setLastRuleSetAdded(true);
    setTimeout(() => {
      setLastRuleSetAdded(false);
      ScrollToTop(RefOnTop);
    }, 500);
  };

  const [requestModalState, setRequestModalState] = useState<boolean>(false) // TODO isRequestModal
  const [ErrorStateModal, setErrorStateModal] = useState<boolean>(false) // TODO: camelCase, isErrorModal
  useEffect(() => {
    if (requestModalState) {
      const timeout = setTimeout(() => {
        setRequestModalState(false)
      }, 1250);
      return () => clearTimeout(timeout);
    }
  }, [requestModalState]);

  function DisplayError() { // TODO: use arow function here to be consistent
    setErrorStateModal(true)
    setRequestModalState(true)
  }

  return {
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
  }
}
